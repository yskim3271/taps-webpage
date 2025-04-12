<script>
  import CitationBox from '$lib/components/CitationBox.svelte';
  
  let pageTitle = 'Credits & Citation';
  
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