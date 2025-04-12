<script>
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  
  // 펼침 상태 관리
  let expandedLinks = {};
  
  // 컴포넌트 마운트 시 로컬 스토리지에서 펼침 상태 복원
  onMount(() => {
    try {
      const savedState = localStorage.getItem('links_expanded_items');
      if (savedState) {
        expandedLinks = JSON.parse(savedState);
      }
    } catch (error) {
      console.error('링크 상태 복원 중 오류:', error);
    }
  });
  
  function toggleExpand(id) {
    expandedLinks[id] = !expandedLinks[id];
    // 상태 변경 후 로컬 스토리지에 저장
    saveExpandedState();
  }
  
  function saveExpandedState() {
    try {
      localStorage.setItem('links_expanded_items', JSON.stringify(expandedLinks));
    } catch (error) {
      console.error('링크 상태 저장 중 오류:', error);
    }
  }
  
  function navigateAndToggle(link, event) {
    // 확장 가능한 항목은 항상 토글만 수행하고 페이지 이동은 하지 않음
    if (link.expandable) {
      event.preventDefault();
      toggleExpand(link.id);
    } else {
      // 확장 불가능한 항목만 페이지 이동 수행
      event.preventDefault();
      if (link.url.startsWith('http')) {
        // 외부 링크인 경우 새 탭에서 열기
        window.open(link.url, '_blank', 'noopener,noreferrer');
      } else if (link.url.startsWith('#')) {
        // 앵커 링크는 기본 동작 사용
        window.location.href = link.url;
      } else {
        // 내부 링크인 경우 SvelteKit 라우팅 사용
        goto(link.url);
      }
    }
  }
  
  // GitHub 관련 저장소 목록
  const githubRepos = [
    {
      name: 'Baselines for Throat Microphone Speech Enhancement',
      url: 'https://github.com/yskim3271/taps-baselines',
    }
  ];

  // Paper 목록
  const papers = [
    {
        title: 'TAPS: Throat and Acoustic Paired Speech Dataset for Deep Learning-Based Speech Enhancement',
        url: 'https://arxiv.org/abs/2502.11478',
    }
  ];
  
  const links = [
    {
      id: 'huggingface',
      label: 'HuggingFace Dataset',
      url: 'https://huggingface.co/datasets/yskim3271/Throat_and_Acoustic_Pairing_Speech_Dataset',
      expandable: false,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"></path></svg>`
    },
    {
      id: 'github',
      label: 'GitHub repo',
      url: 'https://github.com/yskim3271',
      expandable: true,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
    },
    {
      id: 'papers',
      label: 'Submitted papers',
      url: 'https://arxiv.org/abs/2502.11478',
      expandable: true,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
    }
  ];
</script>

<div class="links-section">
  <h2 class="section-title">LINKS</h2>
  <ul class="links-list">
    {#each links as link}
      <li class="link-item">
        {#if link.expandable}
          <div 
            class="link-header" 
            class:expanded={expandedLinks[link.id]} 
            on:click={(event) => navigateAndToggle(link, event)}
          >
            <span class="link-icon">
              {@html link.icon}
            </span>
            <span class="link-label">{link.label}</span>
            <span class="expand-icon">
              {expandedLinks[link.id] ? '▼' : '▶'}
            </span>
          </div>
          
          {#if expandedLinks[link.id]}
            <ul class="sub-links" transition:slide={{ duration: 200 }}>
              {#if link.id === 'github'}
                {#each githubRepos as repo}
                  <li class="sub-link-item">
                    <a 
                      href={repo.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span class="repo-name">{repo.name}</span>
                    </a>
                  </li>
                {/each}
              {:else if link.id === 'papers'}
                {#each papers as paper}
                  <li class="sub-link-item">
                    <a 
                      href={paper.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span class="repo-name">{paper.title}</span>
                    </a>
                  </li>
                {/each}
              {/if}
            </ul>
          {/if}
        {:else}
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <span class="link-icon" class:wide={link.id === 'paper'}>
              {@html link.icon}
            </span>
            <span class="link-label">{link.label}</span>
          </a>
        {/if}
      </li>
    {/each}
  </ul>
  <div class="divider"></div>
</div>

<style>
  .links-section {
    padding: 0 1rem;
    margin: 1rem 0;
  }
  
  .section-title {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    letter-spacing: 1px;
  }
  
  .links-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .link-item {
    margin-bottom: 0.5rem;
  }
  
  .link-item a, .link-header {
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 0.9rem;
    padding: 0.5rem 0;
    transition: color 0.2s;
  }
  
  .link-header {
    cursor: pointer;
    user-select: none;
  }
  
  .link-item a:hover, .link-header:hover {
    color: white;
  }
  
  .link-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.75rem;
    min-width: 20px;
  }
  
  .link-icon.wide {
    min-width: 20px;
  }
  
  .link-label {
    flex: 1;
    word-break: break-word;
  }
  
  .expand-icon {
    font-size: 0.75rem;
    opacity: 0.7;
  }
  
  .sub-links {
    list-style-type: none;
    padding-left: 2.5rem;
    margin: 0.25rem 0 0.5rem 0;
    background-color: rgba(255, 255, 255, 0.03);
    border-radius: 4px;
  }
  
  .sub-link-item {
    margin: 0.25rem 0;
  }
  
  .sub-link-item a {
    padding: 0.3rem 0;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .repo-name {
    font-weight: 500;
    font-size: 0.75rem;
  }
  
  .divider {
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 1.5rem 0;
  }
</style> 