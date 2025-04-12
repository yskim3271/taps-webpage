<script>
  import { onMount } from 'svelte';
  
  let pageTitle = 'Documentation';
  
  onMount(() => {
    document.title = `${pageTitle} | TAPS Documentation`;
  });
</script>

<svelte:head>
  <title>{pageTitle} | TAPS Dataset</title>
</svelte:head>

<div class="page-container">
  <div class="page-header">
    <h1>{pageTitle}</h1>
  </div>
  
  <div class="content-section">
    <p>
      The TAPS dataset documentation provides detailed information about the collection, processing, and characteristics of the Throat and Acoustic Paired Speech dataset. Browse through the following sections to learn more about specific aspects of the dataset.
    </p>
    
    <div class="grid">
      <a href="/documentation/hardware" class="card category-card">
        <h2>Hardware</h2>
        <p>Specifications and details about the throat microphone, acoustic microphone, and recording equipment used to create the dataset.</p>
        <div class="card-footer">
          <span class="card-link">Explore Hardware</span>
        </div>
      </a>
      
      <a href="/documentation/recording" class="card category-card">
        <h2>Recording</h2>
        <p>Information about the recording setup, speaker demographics, and ethical considerations in the data collection process.</p>
        <div class="card-footer">
          <span class="card-link">Explore Recording</span>
        </div>
      </a>
      
      <a href="/documentation/post-processing" class="card category-card">
        <h2>Post-Processing</h2>
        <p>Details on the filtering, alignment, noise reduction, and other signal processing steps applied to the raw recordings.</p>
        <div class="card-footer">
          <span class="card-link">Explore Post-Processing</span>
        </div>
      </a>
      
      <a href="/documentation/data-collection" class="card category-card">
        <h2>Data Collection</h2>
        <p>Information about the collection protocol, corpus design, participant recruitment, and dataset organization.</p>
        <div class="card-footer">
          <span class="card-link">Explore Data Collection</span>
        </div>
      </a>
    </div>
    
  </div>
</div>