<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  
  let pageTitle = 'Acoustic Microphone';
  
  onMount(() => {
    document.title = `${pageTitle} | TAPS Documentation`;
  });
</script>

<div class="page-container">
  <div class="page-header">
    <h1>{pageTitle}</h1>
  </div>
  
  <div class="content-section">
    <h2>Overview</h2>
    <p>
      The MEMS acoustic microphone is utilized as a reference device to capture high-quality acoustic speech signals. 
      This microphone provides accurate and detailed sound recording suitable for developing robust speech enhancement models.

    </p>
    
    <h2>Technical Specifications</h2>
    <ul>
      <li><strong>Model:</strong> CUI Devices CMM-4030D-261</li>
      <li><strong>Sampling rate:</strong>  16 kHz</li>
      <li><strong>Resolution:</strong> 24-bit</li>
      <li><strong>Interface:</strong> Integrated Interchip Interface (I²S) </li>
    </ul>

    <div class="img-container">
      <img src="{base}/images/documentation/hardware/acoustic-mic/acoustic-mic.jpg" alt="Acoustic Microphone" style="max-width: 400px; height: auto;"/>
      <div class="image-caption">Acoustic Microphone</div>
    </div>

  </div>
</div>