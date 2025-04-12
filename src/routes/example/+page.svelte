<script>
  import { onMount } from 'svelte';
  
  let pageTitle = 'Dataset Examples';
  
  onMount(() => {
    document.title = `${pageTitle} | TAPS Dataset`;
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
      Explore a sample of the TAPS dataset through the interactive Hugging Face viewer. This preview features synchronized recordings from throat and acoustic microphones, along with relevant metadata such as speaker information and transcriptions.
    </p>
    
    <h2>Accessing the Full Dataset</h2>
    <p>The complete TAPS dataset is available on Hugging Face and can be loaded easily with a few lines of code:</p>
    
    <div class="code-block">
        <pre><code>from datasets import load_dataset
dataset = load_dataset("yskim3271/Throat_and_Acoustic_Pairing_Speech_Dataset")

# Access a sample
sample = dataset["train"][0]
throat_audio = sample["audio.throat_microphone"]
acoustic_audio = sample["audio.acoustic_microphone"]</code></pre>
      </div>
      
      <a href="https://huggingface.co/datasets/yskim3271/Throat_and_Acoustic_Pairing_Speech_Dataset" target="_blank" rel="noopener noreferrer" class="link-button">
        Visit the full dataset on Hugging Face
      </a>
  </div>
</div>