<script>
  import { base } from '$app/paths';
  
  let pageTitle = 'Dataset Examples';
  
  // 음성 파일 샘플 데이터 (실제 존재하는 파일로 수정)
  const audioSamples = [
    {
      id: 1,
      title: "Sample (Male 1)",
      acousticFile: `${base}/audio/example/p00_u00_am.wav`,
      throatFile: `${base}/audio/example/p00_u00_tm.wav`,
    },
    {
      id: 2,
      title: "Sample (Male 2)",
      acousticFile: `${base}/audio/example/p02_u00_am.wav`,
      throatFile: `${base}/audio/example/p02_u00_tm.wav`,
    },
    {
      id: 3,
      title: "Sample (Female 1)",
      acousticFile: `${base}/audio/example/p24_u00_am.wav`,
      throatFile: `${base}/audio/example/p24_u00_tm.wav`,
    },
    {
      id: 4,
      title: "Sample (Female 2)",
      acousticFile: `${base}/audio/example/p26_u00_am.wav`,
      throatFile: `${base}/audio/example/p26_u00_tm.wav`,
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
      The acoustic microphone captures normal speech, while the throat microphone captures vibrations directly from the vocal cords.
    </p>
    
    <div class="audio-samples-container">
      {#each audioSamples as sample}
        <div>
          <h3 class="audio-pair-title">{sample.title}</h3>
          <div class="audio-pair">
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