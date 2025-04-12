<script>
  import { base } from '$app/paths';
  
  let pageTitle = 'Recording Setup';
  
</script>

<svelte:head>
  <title>{pageTitle} | TAPS Dataset</title>
</svelte:head>

<div class="page-container">
  <div class="page-header">
    <h1>{pageTitle}</h1>
  </div>
  
  <div class="content-section">
    <h2>Overview</h2>
    <p>
      The TAPS dataset recording environment was carefully designed to ensure high-quality, synchronized audio recordings from both throat and acoustic microphones.
    </p>
    
    <div class="img-container">
      <img src="{base}/images/documentation/recording/recording-setup/setup.png" alt="TAPS recording setup configuration" />
      <div class="image-caption">Recording setup showing throat microphone and acoustic microphone configuration</div>
    </div>
    
    <div class="process-container">
      <div class="process-step">
        <div class="step-header">
          <h3>Hardware Configuration</h3>
        </div>
        <div class="step-content">
          <p>
            Each recording session utilized the following hardware components:
          </p>
          <ul>
            <li><strong>Throat Microphone:</strong> Accelerometer-based contact microphone attached to the participant's throat area to capture vocal cord vibrations directly.</li>
            <li><strong>Acoustic Microphone:</strong> High-quality condenser microphone positioned at a consistent distance from the participant's mouth to record standard speech audio.</li>
            <li><strong>Audio Interface:</strong> Digital interface for simultaneous capture of both microphone inputs, ensuring synchronized recording.</li>
            <li><strong>Pop Filter:</strong> Used with the acoustic microphone to reduce plosive sounds and breath noise.</li>
            <li><strong>Monitoring Headphones:</strong> Closed-back headphones for participants to verify recording quality in real-time.</li>
          </ul>
        </div>
      </div>
      
      <div class="process-step">
        <div class="step-header">
          <h3>Environment Control</h3>
        </div>
        <div class="step-content">
          <p>
            To ensure optimal recording quality, the following environmental conditions were maintained:
          </p>
          <ul>
            <li><strong>Sound-treated Room:</strong> All recordings were conducted in a sound-treated environment with minimal ambient noise and echo.</li>
            <li><strong>Consistent Positioning:</strong> Specific distances and angles were maintained between the participants and microphones across all recording sessions.</li>
            <li><strong>Temperature and Humidity Control:</strong> The recording environment was kept at a comfortable temperature and humidity level to avoid affecting vocal performance.</li>
            <li><strong>Background Noise Monitoring:</strong> Continuous monitoring of ambient noise levels to ensure they remained below acceptable thresholds.</li>
          </ul>
        </div>
      </div>
      
      <div class="process-step">
        <div class="step-header">
          <h3>Recording Protocol</h3>
        </div>
        <div class="step-content">
          <p>
            Each recording session followed a structured protocol:
          </p>
          <ol>
            <li><strong>Equipment Calibration:</strong> All recording equipment was calibrated at the beginning of each session.</li>
            <li><strong>Microphone Placement:</strong> The throat microphone was carefully attached to the participant's throat area, while the acoustic microphone was positioned at an optimal distance.</li>
            <li><strong>Level Setting:</strong> Input levels were adjusted for each participant to prevent clipping or excessive noise.</li>
            <li><strong>Practice Readings:</strong> Participants were given time to familiarize themselves with the recording setup and material.</li>
            <li><strong>Recording Session:</strong> Participants read the provided script at a natural pace with regular breaks between segments.</li>
            <li><strong>Quality Verification:</strong> Each recording was reviewed for quality before proceeding to the next segment.</li>
          </ol>
        </div>
      </div>
      
      <div class="process-step">
        <div class="step-header">
          <h3>Technical Specifications</h3>
        </div>
        <div class="step-content">
          <p>
            The recordings maintained the following technical specifications:
          </p>
          <ul>
            <li><strong>Sampling Rate:</strong> Acoustic microphone recordings at 16 kHz, throat microphone initially at 8 kHz (later upsampled).</li>
            <li><strong>Bit Depth:</strong> 16-bit for all recordings.</li>
            <li><strong>File Format:</strong> Uncompressed WAV format to preserve audio quality.</li>
            <li><strong>Channel Configuration:</strong> Mono recordings for each microphone type.</li>
            <li><strong>Storage:</strong> Original recordings stored with redundant backups to prevent data loss.</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="processing-notes">
      <h2>Additional Notes</h2>
      <p>
        The recording setup was designed to minimize variability between recording sessions while accommodating individual differences in participant physiology. Special attention was given to throat microphone placement, as this significantly impacts recording quality and consistency. All equipment was selected to ensure compatibility with the project's research goals, particularly the requirement for synchronized paired recordings suitable for deep learning applications.
      </p>
    </div>
  </div>
</div>
