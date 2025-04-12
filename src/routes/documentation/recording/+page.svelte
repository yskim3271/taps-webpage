<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  let pageTitle = 'Recording';
  
  onMount(() => {
    document.title = `${pageTitle} | TAPS Documentation`;
  });
</script>

<svelte:head>
  <title>{pageTitle} | TAPS Documentation</title>
</svelte:head>

<div class="page-container">
  <div class="page-header">
    <h1>{pageTitle}</h1>
  </div>
  
  <div class="content-section">
    <p>
       This section provides information about the recording process, participant details, and ethical considerations.
    </p>
    
    <div class="grid">
      <a href="{base}/documentation/recording/recording-setup" class="card category-card">
        <h2>Recording Setup</h2>
        <p>Details about the recording environment, hardware configuration, and technical specifications used in the data collection process.</p>
        <div class="card-footer">
          <span class="card-link">View Details</span>
        </div>
      </a>
      
      <a href="{base}/documentation/recording/speaker-info" class="card category-card">
        <h2>Speaker Information</h2>
        <p>Demographic information about the participants who contributed to the dataset, including age, gender distribution, and language background.</p>
        <div class="card-footer">
          <span class="card-link">View Details</span>
        </div>
      </a>
      
      <a href="{base}/documentation/recording/ethical" class="card category-card">
        <h2>Ethical Declaration</h2>
        <p>Information about the ethical approval process, participant consent, and data privacy considerations in creating the TAPS dataset.</p>
        <div class="card-footer">
          <span class="card-link">View Details</span>
        </div>
      </a>
    </div>
  </div>
</div>