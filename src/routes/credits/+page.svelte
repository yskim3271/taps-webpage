<script>
  import CitationBox from '$lib/components/CitationBox.svelte';
  import { base } from '$app/paths';
  import SEO from '$lib/components/seo/SEO.svelte';
  
  let pageTitle = 'Credits';
  let pageDescription = 'Acknowledgements and credits for the TAPS Dataset project. Learn about the researchers, contributors, and institutions involved in creating this comprehensive throat and acoustic microphone speech dataset.';
  
  const tapsCitation = `@misc{kim2025tapsthroatacousticpaired,
      title={TAPS: Throat and Acoustic Paired Speech Dataset for Deep Learning-Based Speech Enhancement}, 
      author={Yunsik Kim and Yonghun Song and Yoonyoung Chung},
      year={2025},
      eprint={2502.11478},
      archivePrefix={arXiv},
      primaryClass={cs.SD},
      url={https://arxiv.org/abs/2502.11478}, 
}`;

</script>

<svelte:head>
  <title>{pageTitle} | TAPS Dataset</title>
  <SEO 
    title={pageTitle}
    description={pageDescription}
    image="/images/home.png"
    keywords={pageKeywords}
  />
</svelte:head>

<div class="page-container">
  <div class="page-header">
    <h1>{pageTitle}</h1>
  </div>
  
  <div class="content-section">
    <section>
      <h2>Project Team</h2>
      <div class="simple-grid">
        <div class="simple-grid-item">
          <h3>Yunsik Kim</h3>
          <p>Department of Electrical Engineering, POSTECH</p>
          <p>Email: ys.kim@postech.ac.kr</p>
        </div>
        
        <div class="simple-grid-item">
          <h3>Yonghun Song</h3>
          <p>Department of Electrical Engineering, POSTECH</p>
          <p>Email: yhsong@postech.ac.kr</p>
        </div>
        
        <div class="simple-grid-item">
          <h3>Prof. Yonnyoung Chung</h3>
          <p>Department of Electrical Engineering, POSTECH</p>
          <p>Email: ychung@postech.ac.kr</p>
        </div>
      </div>
    </section>
    
    <section>
      <h2>How to cite TAPS Dataset</h2>
      <p>
        Please cite our work using the following BibTeX:
      </p>
      
      <CitationBox citationText={tapsCitation} />
    </section>
  </div>
</div>