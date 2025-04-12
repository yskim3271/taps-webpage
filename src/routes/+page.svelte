<script>
  import { base } from '$app/paths';
  
  let pageTitle = 'Home';
</script>

<svelte:head>
  <title>{pageTitle} | TAPS Dataset</title>
</svelte:head>

<div class="page-container">
  <div class="page-header">
    <h1>{pageTitle}</h1>
    <p class="header-subtitle">Throat and acoustic paired speech dataset for deep learning-based speech enhancement</p>
  </div>

  <div class="content-section">
    <p>
      Throat microphones offer effective noise suppression solutions in noisy environments. However, due to the human body's natural low-pass filtering effect on transmitted speech signals, high-frequency components are attenuated, significantly reducing speech clarity and intelligibility. Deep learning techniques have shown promise in overcoming these limitations, but they require large-scale training datasets.
    </p>

    <p>
      We present the Throat and Acoustic Paired Speech dataset (TAPS), which provides paired speech recordings collected from 60 native Korean speakers simultaneously using throat and acoustic microphones. The dataset is carefully structured into training (10.2 h), development (2.5 h), and testing (2.6 h) subsets. To demonstrate TAPS's practical utility, we evaluated three baseline deep learning models—TSTNN, Demucs, and SE-conformer—and developed an optimized mismatch correction method to enhance model performance further by precisely aligning throat and acoustic signals.
    </p>

    <div class="img-container">
      <img src="{base}/images/home.png" alt="Data Collection" style="max-width: 100%; height: auto;"/>
      <div class="image-caption">Throat and Acoustic Paired Data</div>
    </div>

    <section>
      <h2 class="custom-heading">Data Availability</h2>
      
      <p>
        The TAPS dataset is available on <a href="https://huggingface.co/datasets/yskim3271/Throat_and_Acoustic_Pairing_Speech_Dataset" target="_blank" rel="noopener noreferrer">Hugging Face</a> for convenient access and usage.
        Baseline model codes are provided on <a href="https://github.com/yskim3271/taps-baselines" target="_blank" rel="noopener noreferrer">GitHub</a>. 
        For detailed information, the dataset paper is available on <a href="https://arxiv.org/abs/2502.11478" target="_blank" rel="noopener noreferrer">Arxiv</a>.
      </p>
      
      <a href="/documentation" class="button">
        <span>View Documentation</span>
      </a>
    </section>
  </div>
</div>