<script>
  import { onMount } from 'svelte';
  
  let pageTitle = 'Throat Microphone';
  
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
      The throat microphone is based on a MEMS accelerometer designed specifically for precise measurement of vibrations transmitted through the skin. 
      It effectively captures speech signals directly from the neck skin of the supraglottic region, minimizing environmental noise interference and ensuring consistent data quality for speech enhancement tasks.
    </p>
    
    <h2>Technical Specifications</h2>
    <ul>
      <li><strong>Model:</strong> TDK IIM-42652</li>
      <li><strong>Sampling rate:</strong>  8 kHz</li>
      <li><strong>Resolution:</strong> 16-bit</li>
      <li><strong>Interface:</strong> Serial Peripheral Interface (SPI) </li>
    </ul>

    <div class="img-container">
      <img src="/images/documentation/hardware/throat-mic/throat-mic.jpg" alt="Throat Microphone" />
      <div class="image-caption">Throat Microphone</div>
    </div>
  </div>
</div>