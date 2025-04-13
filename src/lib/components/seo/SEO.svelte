<script>
  // 현재 URL 가져오기
  import { page } from '$app/stores';
  import { base } from '$app/paths';

  export let title = 'TAPS Dataset';
  export let description = 'Throat and Acoustic Paired Speech Dataset for Deep Learning-Based Speech Enhancement';
  export let keywords = 'TAPS, Dataset, Speech, Korean, Throat Microphone, Acoustic Microphone, Speech Enhancement, Deep Learning, Body-conducted Speech, Body-conducted Speech Enhancement, Body-conduction, Body-conduction Speech, Body-conduction Speech Enhancement';
  export let image = `${base}/images/home.png`; // 대표 이미지 경로 (소셜 미디어용)
  export let type = 'website';
  export let url = '';

  $: canonicalUrl = url || `https://taps.postech.ac.kr${$page.url.pathname}`;
  $: ogImage = image.startsWith('http') ? image : `https://taps.postech.ac.kr${image}`;
</script>

<!-- 기본 메타 태그 -->
<title>{title}</title>
<meta name="description" content={description} />
<meta name="keywords" content={keywords} />
<link rel="canonical" href={canonicalUrl} />

<!-- 오픈 그래프 메타 태그 (페이스북, 카카오톡 등) -->
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImage} />
<meta property="og:url" content={canonicalUrl} />
<meta property="og:type" content={type} />
<meta property="og:site_name" content="TAPS Dataset" />

<!-- 트위터 카드 메타 태그 -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImage} />

<!-- 추가 태그 -->
<meta name="robots" content="index, follow" />
<meta name="author" content="POSTECH" />
