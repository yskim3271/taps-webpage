<script>
  import { base } from '$app/paths';
  
  let pageTitle = 'Dataset Examples';
  
  // 음성 파일 샘플 데이터
  const audioSamples = [
    {
      id: 1,
      title: "Sample 1 - Korean Speech",
      acousticFile: `${base}/audio/example/p00_u00_am.wav`,
      throatFile: `${base}/audio/example/p00_u00_tm.wav`,
      description: "Korean speech sample from TAPS dataset"
    },
    {
      id: 2,
      title: "Sample 2 - English Speech",
      acousticFile: `${base}/audio/example/p02_u00_am.wav`,
      throatFile: `${base}/audio/example/p02_u00_tm.wav`,
      description: "English speech sample from TAPS dataset"
    },
    {
      id: 3,
      title: "Sample 3 - Noisy Environment",
      acousticFile: `${base}/audio/example/p04_u00_am.wav`,
      throatFile: `${base}/audio/example/p04_u00_tm.wav`,
      description: "Speech in noisy environment, showing noise reduction capabilities"
    }
  ];
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
    
    <h2>Audio Samples</h2>
    <p>
      Below are paired audio samples from the TAPS dataset. Each pair contains recordings from both acoustic and throat microphones for the same speech segment.
      The acoustic microphone captures normal speech, while the throat microphone captures vibrations directly from the vocal cords, reducing background noise.
    </p>
    
    <div class="audio-samples-container">
      {#each audioSamples as sample}
        <div class="audio-pair">
          <h3 class="audio-pair-title">{sample.title}</h3>
          
          <div class="audio-sample">
            <h3>Acoustic Microphone</h3>
            <audio controls>
              <source src={sample.acousticFile} type="audio/wav">
              Your browser does not support the audio element.
            </audio>
            <div class="audio-description">Standard acoustic microphone recording</div>
          </div>
          
          <div class="audio-sample">
            <h3>Throat Microphone</h3>
            <audio controls>
              <source src={sample.throatFile} type="audio/wav">
              Your browser does not support the audio element.
            </audio>
            <div class="audio-description">Throat microphone recording with reduced background noise</div>
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