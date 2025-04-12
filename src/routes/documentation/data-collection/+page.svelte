<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  
  let pageTitle = 'Data Collection Software';
  
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
    <h2>Overview</h2>
    <p>
      The data collection software is custom-built for simultaneous recording and monitoring of paired speech signals from throat and acoustic microphones. 
      The software provides real-time monitoring to ensure recording quality, automatic file naming for organized data management, and session tracking to simplify data handling.
    </p>

    <p>
      Before data is saved, the software applies a dedicated signal processing pipeline, which includes a 5th-order Butterworth high-pass filter (50 Hz cutoff), DC offset removal, signal normalization, and precise timing synchronization between the two microphones.
    </p>

    <p>
      Captured signals are saved directly to the laptop in a standardized WAV file format (32-bit), with the throat microphone data upsampled to 16 kHz and the acoustic microphone data sampled at 16 kHz. 
      Files follow a consistent naming convention to facilitate straightforward dataset usage.
    </p>
    
    <div class="img-container">
      <img src="{base}/images/documentation/data-collection/software.png" alt="Data Collection" />
      <div class="image-caption">Data Collection Software</div>
    </div>
  </div>
</div>