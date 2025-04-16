<script>
  import { base } from '$app/paths';
  import SEO from '$lib/components/seo/SEO.svelte';
  
  let pageTitle = 'Example';
  let pageDescription = 'Explore practical examples and demonstrations of the TAPS Dataset in action. View sample recordings, compare throat and acoustic microphone signals, and understand the dataset\'s applications in speech enhancement research.';
  
  const audioSamples = [
    {
      id: 1,
      title: "Sample 1 (p00/u00, Male)",
      acousticFile: `${base}/audio/example/p00_u00_am.wav`,
      throatFile: `${base}/audio/example/p00_u00_tm.wav`,
    },
    {
      id: 2,
      title: "Sample 2 (p02/u00, Male)",
      acousticFile: `${base}/audio/example/p02_u00_am.wav`,
      throatFile: `${base}/audio/example/p02_u00_tm.wav`,
    },
    {
      id: 3,
      title: "Sample 3 (p24/u00, Female)",
      acousticFile: `${base}/audio/example/p24_u00_am.wav`,
      throatFile: `${base}/audio/example/p24_u00_tm.wav`,
    },
    {
      id: 4,
      title: "Sample 4 (p26/u00, Female)",
      acousticFile: `${base}/audio/example/p26_u00_am.wav`,
      throatFile: `${base}/audio/example/p26_u00_tm.wav`,
    }
  ];
</script>

<svelte:head>
  <SEO 
    title={pageTitle}
    description={pageDescription}
    image="/images/example/example.png"
  />
</svelte:head>

<div class="page-container">
  <div class="page-header">
    <h1>{pageTitle}</h1>
  </div>
  
  <div class="content-section">   
    <h2>Audio Samples</h2>
    <p>
      Below are paired audio samples from the TAPS dataset. Each pair contains recordings from both acoustic and throat microphones for the same speech segment.
      The acoustic microphone captures normal speech, while the throat microphone captures vibrations directly from the vocal cords.
    </p>
    
    <div class="audio-samples-container">
      {#each audioSamples as sample}
        <div class="audio-pair">
          <h3 class="audio-pair-title">{sample.title}</h3>
          
          <div class="audio-samples-wrapper">
            <div class="audio-sample">
              <h3>Acoustic Microphone</h3>
              <audio controls>
                <source src={sample.acousticFile} type="audio/wav">
                Your browser does not support the audio element.
              </audio>
            </div>
            
            <div class="audio-sample">
              <h3>Throat Microphone</h3>
              <audio controls>
                <source src={sample.throatFile} type="audio/wav">
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      {/each}
    </div>
    
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