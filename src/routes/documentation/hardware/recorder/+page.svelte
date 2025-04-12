<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  
  let pageTitle = 'Recorder';
  
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
      The microcontroller unit (MCU) serves as the central processing unit for simultaneous data acquisition and synchronization from both the throat and acoustic microphones. 
      Captured signals are pre-processed on the MCU, then transmitted via UART to a laptop. 
      Finally, post-processing on the laptop converts and stores the two audio signals into standard WAV audio files.
    </p>

    <div class="img-container">
      <img src="{base}/images/documentation/hardware/recorder/recorder.png" alt="Recorder" />
      <div class="image-caption">Recorder</div>
    </div>
  </div>
</div>