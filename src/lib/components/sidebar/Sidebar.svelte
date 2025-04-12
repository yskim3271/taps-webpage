<script>
  import Logo from './Logo.svelte';
  import Navigation from './Navigation.svelte';
  import LinksList from './LinksList.svelte';
  import SidebarFooter from './SidebarFooter.svelte';
  
  export let activeItem = 1; // 기본값은 About 페이지
</script>

<aside class="sidebar">
  <div class="sidebar-content">
    <Logo />
    <Navigation activeItem={activeItem} />
    <LinksList />
  </div>
  <SidebarFooter />
</aside>

<style>
  .sidebar {
    width: 300px;
    height: 100vh;
    background-color: #231c1f;
    color: white;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    overflow-y: scroll;
    flex-shrink: 0; /* 사이드바가 줄어들지 않도록 설정 */
    transition: transform 0.3s ease;
  }
  
  .sidebar-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 6px;
    min-width: 0; /* 컨텐츠가 컨테이너를 넘어가지 않도록 설정 */
  }
  
  /* 스크롤바 스타일링 */
  .sidebar::-webkit-scrollbar {
    width: 6px;
  }
  
  .sidebar::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }
  
  .sidebar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
  
  .sidebar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  /* Firefox 스크롤바 스타일링 */
  .sidebar {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.2) rgba(0, 0, 0, 0.1);
  }

  /* 작은 화면에서 사이드바 숨기기 */
  @media (max-width: 768px) {
    .sidebar {
      transform: translateX(-100%);
    }
  }
</style> 