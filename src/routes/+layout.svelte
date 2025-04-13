<script>
  import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
  import SEO from '$lib/components/seo/SEO.svelte';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import '$lib/styles/style.css';

  // 기본 SEO 정보
  let siteTitle = 'TAPS Dataset';
  let siteDescription = 'Throat and Acoustic Paired Speech Dataset for Deep Learning-Based Speech Enhancement';
  let siteKeywords = 'TAPS, Dataset, Speech, Korean, Throat Microphone, Acoustic Microphone, Speech Enhancement, Deep Learning, Body-conducted Speech, Body-conducted Speech Enhancement, Body-conduction, Body-conduction Speech, Body-conduction Speech Enhancement';

  // 현재 활성화된 메뉴 항목 설정
  $: activeItem = getActiveItem($page.url.pathname);
  
  function getActiveItem(path) {
    // 경로에 따라 활성 항목 결정
    if (path === base + '/' || path === base) return 'home';
    if (path.includes(base + '/documentation')) return 1;
    if (path.includes(base + '/example')) return 2;
    if (path.includes(base + '/speech-enhancement')) return 3;
    if (path.includes(base + '/credits')) return 4;
    if (path.includes(base + '/license')) return 5;
    return 1; // 기본값
  }
</script>

<svelte:head>
  <SEO title={siteTitle} description={siteDescription} keywords={siteKeywords} />
  
  <!-- 구조화된 데이터 추가 -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "TAPS Dataset",
    "description": "Throat and Acoustic Paired Speech Dataset for Deep Learning-Based Speech Enhancement",
    "keywords": ["throat microphone", "acoustic microphone", "speech enhancement", "body-conducted speech", "body-conduction speech", "body-conducted speech enhancement", "body-conduction speech enhancement"],
    "creator": {
      "@type": "Organization",
      "name": "POSTECH"
    },
    "citation": "https://arxiv.org/abs/2502.11478",
    "license": "https://taps.postech.ac.kr/license",
    "url": "https://taps.postech.ac.kr"
  }
  </script>
</svelte:head>

<div class="app-layout">
  <Sidebar {activeItem} />
  <main class="content">
    <div class="content-container">
      <slot />
    </div>
  </main>
</div>

<style>
  .app-layout {
    display: flex;
    min-height: 100vh;
    min-width: 300px;
  }
  
  .content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    min-width: 0;
    transition: padding-left 0.3s ease;
  }
  
  .content-container {
    width: 100%;
    max-width: 1200px;
    min-width: 0;
    line-height: 1.6;
  }
  
  /* 더 큰 화면에서 너비 조정 */
  @media (min-width: 1200px) {
    .content-container {
      max-width: 1200px;
    }
  }
  
  /* 작은 화면에서 패딩 조정 */
  @media (max-width: 768px) {
    .content {
      padding: 20px;
    }
  }

  /* 사이드바가 표시될 때 메인 콘텐츠 패딩 조정 */
  @media (min-width: 769px) {
    .content {
      padding-left: 320px;
    }
  }
</style> 