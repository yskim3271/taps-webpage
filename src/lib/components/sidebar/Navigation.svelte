<script>
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  
  export let activeItem = 1; // 기본값 1번(About)
  
  // 펼침 상태 관리
  let expandedItems = {};
  
  // 컴포넌트 마운트 시 로컬 스토리지에서 펼침 상태 복원
  onMount(() => {
    try {
      const savedState = localStorage.getItem('navigation_expanded_items');
      if (savedState) {
        expandedItems = JSON.parse(savedState);
      }
      
      // 현재 경로에 해당하는 아이템과 상위 아이템을 자동으로 펼치기
      const currentPath = window.location.pathname;
      autoExpandCurrentPath(currentPath);
    } catch (error) {
      console.error('사이드바 상태 복원 중 오류:', error);
    }
  });
  
  // 현재 경로에 해당하는 아이템과 상위 아이템을 자동으로 펼치는 함수
  function autoExpandCurrentPath(currentPath) {
    // 메인 메뉴 아이템 확인
    menuItems.forEach(item => {
      if (item.expandable && currentPath.startsWith(base + item.path)) {
        expandedItems[item.id] = true;
        
        // 하위 메뉴 아이템 확인
        if (item.subItems) {
          item.subItems.forEach(subItem => {
            if (subItem.expandable && currentPath.startsWith(base + subItem.path)) {
              expandedItems[subItem.id] = true;
            }
          });
        }
      }
    });
    
    // 로컬 스토리지에 상태 저장
    saveExpandedState();
  }
  
  function toggleExpand(id, event) {
    // 이벤트 전파를 막지 않고 확장 토글도 가능하게 함
    expandedItems[id] = !expandedItems[id];
    // 상태 변경 후 로컬 스토리지에 저장
    saveExpandedState();
  }
  
  function saveExpandedState() {
    try {
      localStorage.setItem('navigation_expanded_items', JSON.stringify(expandedItems));
    } catch (error) {
      console.error('사이드바 상태 저장 중 오류:', error);
    }
  }
  
  function navigateAndToggle(item, event) {
    // 이벤트 객체가 있고 expand-icon을 클릭한 경우, 토글만 수행하고 페이지 이동은 하지 않음
    if (event && event.target.closest('.expand-icon')) {
      event.preventDefault();
      toggleExpand(item.id);
    } else {
      // 그 외의 경우 확장 토글과 페이지 이동 모두 수행
      toggleExpand(item.id);
      
      // SvelteKit의 goto 함수를 사용하여 클라이언트 사이드 내비게이션
      event.preventDefault(); // 기본 이벤트 방지
      goto(base + item.path); // SvelteKit의 클라이언트 내비게이션 사용
    }
  }
  
  const menuItems = [
    { id: 'home', icon: 'home', label: 'Home', number: null, path: '/', expandable: false },
    { 
      id: 'documentation', 
      icon: 'book', 
      label: 'Documentation', 
      number: 1, 
      path: '/documentation',
      expandable: true,
      subItems: [
        { 
          id: 'hardware', 
          label: 'Hardware', 
          path: '/documentation/hardware',
          expandable: true,
          subItems: [
            { id: 'acoustic-mic', label: 'Acoustic microphone', path: '/documentation/hardware/acoustic-mic' },
            { id: 'throat-mic', label: 'Throat microphone', path: '/documentation/hardware/throat-mic' },
            { id: 'recorder', label: 'Recorder', path: '/documentation/hardware/recorder' }
          ]
        },
        { id: 'data-collection', label: 'Data collection software', path: '/documentation/data-collection' },
        { 
          id: 'recording', 
          label: 'Recording', 
          path: '/documentation/recording',
          expandable: true,
          subItems: [
            { id: 'recording-setup', label: 'Recording setup', path: '/documentation/recording/recording-setup' },
            { id: 'speaker-info', label: 'Speaker information', path: '/documentation/recording/speaker-info' },
            { id: 'ethical', label: 'Ethical declaration', path: '/documentation/recording/ethical' }
          ]
        },
        { id: 'post-processing', label: 'Post processing', path: '/documentation/post-processing' }
      ]
    },
    { id: 'example', icon: 'headphones', label: 'Example audio samples', number: 2, path: '/example', expandable: false },
    { id: 'task', icon: 'database', label: 'Speech enhancement', number: 3, path: '/speech-enhancement', expandable: false },
    { id: 'credits', icon: 'users', label: 'Credits & ciatation', number: 4, path: '/credits', expandable: false },
    { id: 'license', icon: 'file-text', label: 'License', number: 5, path: '/license', expandable: false }
  ];
  
  function isActive(item) {
    if (item.number === null) {
      return activeItem === 'home';
    }
    return activeItem === item.number;
  }
</script>

<nav class="navigation">
  {#each menuItems as item}
    <div class="nav-item-container">
      {#if item.expandable}
        <div 
          class="nav-item {isActive(item) ? 'active' : ''}"
          on:click={(event) => navigateAndToggle(item, event)}
        >
          {#if item.id === 'home'}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          {:else}
            <div class="item-number">{item.number}.</div>
          {/if}
          <span class="item-label">{item.label}</span>
          <span class="expand-icon">
            {expandedItems[item.id] ? '▼' : '▶'}
          </span>
        </div>
        
        {#if expandedItems[item.id] && item.subItems}
          <ul class="sub-menu" transition:slide={{ duration: 200 }}>
            {#each item.subItems as subItem}
              {#if subItem.expandable}
                <li>
                  <div 
                    class="sub-item expandable"
                    on:click={(event) => navigateAndToggle(subItem, event)}
                  >
                    <span class="sub-item-label">{subItem.label}</span>
                    <span class="expand-icon">
                      {expandedItems[subItem.id] ? '▼' : '▶'}
                    </span>
                  </div>
                  
                  {#if expandedItems[subItem.id] && subItem.subItems}
                    <ul class="nested-sub-menu" transition:slide={{ duration: 200 }}>
                      {#each subItem.subItems as nestedItem}
                        <li>
                          <a 
                            href="{base + nestedItem.path}" 
                            class="nested-sub-item"
                            on:click|preventDefault={() => goto(base + nestedItem.path)}
                          >
                            {nestedItem.label}
                          </a>
                        </li>
                      {/each}
                    </ul>
                  {/if}
                </li>
              {:else}
                <li>
                  <a 
                    href="{base + subItem.path}" 
                    class="sub-item"
                    on:click|preventDefault={() => goto(base + subItem.path)}
                  >
                    {subItem.label}
                  </a>
                </li>
              {/if}
            {/each}
          </ul>
        {/if}
      {:else}
        <a 
          href="{base + item.path}" 
          class="nav-item {isActive(item) ? 'active' : ''}"
          on:click|preventDefault={() => goto(base + item.path)}
        >
          {#if item.id === 'home'}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          {:else}
            <div class="item-number">{item.number}.</div>
          {/if}
          <span class="item-label">{item.label}</span>
          {#if isActive(item)}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="check-icon">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          {/if}
        </a>
      {/if}
    </div>
  {/each}
</nav>

<style>
  .navigation {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
  
  .nav-item-container {
    width: 100%;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    padding: 0.7rem 1rem;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 0.95rem;
    transition: background-color 0.2s;
    position: relative;
    cursor: pointer;
  }
  
  .nav-item:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  .nav-item.active {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .icon {
    stroke: white;
    margin-right: 0.75rem;
  }
  
  .item-number {
    width: 20px;
    margin-right: 0.75rem;
    font-weight: 500;
  }
  
  .item-label {
    flex: 1;
  }
  
  .check-icon {
    position: absolute;
    right: 1rem;
    stroke: rgba(255, 255, 255, 0.8);
  }
  
  .expand-icon {
    font-size: 0.75rem;
    opacity: 0.7;
    margin-left: 0.5rem;
  }
  
  .sub-menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.03);
  }
  
  .sub-item {
    display: flex;
    align-items: center;
    padding: 0.6rem 0 0.6rem 2.5rem;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 0.9rem;
    transition: background-color 0.2s;
    position: relative;
  }
  
  .sub-item.expandable {
    cursor: pointer;
    padding-right: 2rem;
  }
  
  .sub-item:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
  }
  
  .sub-item-label {
    flex: 1;
  }
  
  .sub-item .expand-icon {
    position: absolute;
    right: 1rem;
    font-size: 0.75rem;
    opacity: 0.7;
  }
  
  .nested-sub-menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
  
  .nested-sub-item {
    display: block;
    padding: 0.5rem 0 0.5rem 3.5rem;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.85rem;
    transition: background-color 0.2s;
  }
  
  .nested-sub-item:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
  }
</style> 