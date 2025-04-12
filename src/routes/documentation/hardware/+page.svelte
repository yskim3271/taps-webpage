<script>
  import { base } from '$app/paths';
  let pageTitle = 'Hardware';
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
      This section provides details about the equipment used in the recording process.
    </p>
    
    <div class="grid">
      <a href="{base}/documentation/hardware/throat-mic" class="card category-card">
        <h3>Throat Microphone</h3>
        <p>Specifications and details about the throat-based accelerometer microphone used to capture vocal cord vibrations directly.</p>
        <div class="card-footer">
          <span class="card-link">View Details</span>
        </div>
      </a>
      
      <a href="{base}/documentation/hardware/acoustic-mic" class="card category-card">
        <h3>Acoustic Microphone</h3>
        <p>Information about the condenser microphone used to record standard acoustic speech for reference audio.</p>
        <div class="card-footer">
          <span class="card-link">View Details</span>
        </div>
      </a>
      
      <a href="{base}/documentation/hardware/recorder" class="card category-card">
        <h3>Recording Equipment</h3>
        <p>Details on the audio interface, monitoring equipment, and additional hardware used in the recording sessions.</p>
        <div class="card-footer">
          <span class="card-link">View Details</span>
        </div>
      </a>
    </div>
  </div>
</div>