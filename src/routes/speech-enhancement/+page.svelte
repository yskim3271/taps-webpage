<script>
  
  let pageTitle = 'Speech Enhancement';
  
</script>

<svelte:head>
  <title>{pageTitle} | TAPS Dataset</title>
</svelte:head>

<div class="page-container">
  <div class="page-header">
    <h1>{pageTitle}</h1>
  </div>
  
  <div class="content-section">
    <div class="task-overview">
      <h2>Task Overview</h2>
      <p>
        This task focuses on converting low-quality throat microphone recordings into high-quality acoustic-like speech. 
        The challenge lies in reconstructing the missing high-frequency components and correcting distortion due to skin 
        and tissue filtering.
      </p>
      <p>
        For more detailed information, please refer to the 
        <a href="https://arxiv.org/abs/2502.11478" target="_blank" rel="noopener noreferrer">
          TAPS paper on arXiv
        </a>.
      </p>
    </div>
    
    <h2>Baseline Models</h2>
    <p>
        Three baseline models were evaluated on this task:
    </p>
        <h3>1. SE-Conformer</h3>
        <p>
        Combines CNN and Conformer blocks for time-frequency modeling. Achieved the best overall 
        performance among the baseline models. <a href="https://www.isca-archive.org/interspeech_2021/kim21h_interspeech.html" target="_blank" rel="noopener noreferrer">Paper</a>
        </p>
    
        <h3>2. Demucs</h3>
        <p>
        U-Net-style convolutional encoder-decoder with skip connections and BiLSTM modules for 
        temporal modeling of audio features. <a href="https://arxiv.org/abs/2006.12847" target="_blank" rel="noopener noreferrer">Paper</a>
        </p>
    
        <h3>3. TSTNN</h3>
        <p>
        Transformer-based model with time-domain processing and two-stage attention mechanism for 
        enhancing throat microphone speech. <a href="https://arxiv.org/abs/2103.09963" target="_blank" rel="noopener noreferrer">Paper</a>
        </p>
    
    <div class="evaluation-metrics">
      <h2>Evaluation Metrics</h2>
      <p>
        We evaluated the performance of throat microphone speech enhancement models using the following metrics:
      </p>
      
      <div class="simple-grid">
        <div class="simple-grid-item">
          <h3>Speech Quality</h3>
          <ul>
            <li><strong>PESQ</strong> (Perceptual Evaluation of Speech Quality): Measures the quality of enhanced speech</li>
            <li><strong>STOI</strong> (Short-Time Objective Intelligibility): Evaluates speech intelligibility</li>
          </ul>
        </div>
        
        <div class="simple-grid-item">
          <h3>Speech Content</h3>
          <ul>
            <li><strong>CER</strong> (Character Error Rate): Measures the accuracy of speech content at character level</li>
            <li><strong>WER</strong> (Word Error Rate): Measures the accuracy of speech content at word level</li>
          </ul>
        </div>
      </div>
      
      <p>
        Speech content metrics (CER and WER) were assessed using the <a href="https://huggingface.co/ghost613/whisper-large-v3-turbo-korean" target="_blank" rel="noopener noreferrer" class="model-link">Whisper large-v3-turbo</a> automatic speech 
        recognition (ASR) model, which was fine-tuned on the Korean Zeroth dataset to quantify the recovery 
        of speech information.
      </p>
    </div>
    
    <div class="performance-results">
      <h2>Model Performance</h2>
      <p>
        The table below shows the performance comparison of baseline models against the unprocessed throat 
        microphone recordings. Higher PESQ and STOI values indicate better quality, while lower CER and WER 
        values indicate better content preservation.
      </p>
      
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>PESQ</th>
              <th>STOI</th>
              <th>CER (%)</th>
              <th>WER (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Throat Mic.</td>
              <td>1.22</td>
              <td>0.70</td>
              <td>84.4</td>
              <td>92.2</td>
            </tr>
            <tr>
              <td>TSTNN</td>
              <td>1.90</td>
              <td>0.88</td>
              <td>32.0</td>
              <td>60.3</td>
            </tr>
            <tr>
              <td>Demucs</td>
              <td>1.79</td>
              <td>0.88</td>
              <td>28.6</td>
              <td>57.4</td>
            </tr>
            <tr>
              <td>SE-Conformer</td>
              <td>1.97</td>
              <td>0.89</td>
              <td>24.3</td>
              <td>53.0</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  </div>
</div>