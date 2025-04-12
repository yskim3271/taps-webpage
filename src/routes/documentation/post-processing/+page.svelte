<script lang="ts">
  import { onMount } from 'svelte';
  
  let pageTitle = 'Post-processing';
  
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
      To ensure high-quality and synchronized data, several post-processing steps were applied after recording:
    </p>
    
    <h2>1. High-Pass Filtering</h2>
    <p>
    A 5th-order Butterworth high-pass filter with a 50 Hz cutoff was applied to the throat microphone (accelerometer) data to remove low-frequency noise, including gravitational acceleration components.
    </p>
      
    <h2>2. Timing Alignment</h2>
    <p>
    To correct mismatches caused by timing differences between throat and acoustic microphone signals, synchronization adjustments were applied. This alignment step is crucial for training robust deep learning models.
    </p>
    <div class="img-container">
    <img src="/images/documentation/post-processing/post-processing_1.png" alt="Timing alignment illustration showing cross-correlation" />
    <div class="image-caption">Alignment of throat and acoustic microphone signals using cross-correlation</div>
    </div>

    <h2>3. Noise Reduction</h2>
    <p>
        Minor background noise in acoustic microphone recordings was removed using the pretrained causal version of the Demucs speech enhancement model.
    </p>
        <div class="img-container">
        <img src="/images/documentation/post-processing/post-processing_2.png" alt="Noise reduction before and after comparison" />
        <div class="image-caption">Signal waveforms before and after noise enhancement</div>
        </div>

    <h2>4. Silence Trimming & Manual Review</h2>
    <p>
        Silent segments at the beginning and end of each utterance were manually trimmed. Every recording was reviewed to ensure accurate pronunciation and sentence alignment.
    </p>

    <h2>5. Upsampling</h2>
    <p>
        The throat microphone recordings were upsampled from 8 to 16 kHz to match the sampling rate of the acoustic recordings.
    </p>
  </div>
</div>