<script>
  import { base } from '$app/paths';
  import SEO from '$lib/components/seo/SEO.svelte';
  
  let pageTitle = 'License';
  let pageDescription = 'License information for the TAPS Dataset. Learn about usage terms, distribution rights, and citation requirements for this valuable resource in speech enhancement research.';
</script>

<svelte:head>
  <title>{pageTitle} | TAPS Dataset</title>
  <SEO 
    title={pageTitle}
    description={pageDescription}
    image="/images/home.png"
  />
</svelte:head>

<div class="page-container">
  <div class="page-header">
    <h1>{pageTitle}</h1>
  </div>
  
  <div class="content-section">
    <section>
      <h2>Dataset License</h2>
      <p>
        The TAPS dataset is licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0).
      </p>
      
        <h3>This license allows users to freely use the dataset under the following conditions:</h3>
        <ul>
          <li><strong>Share</strong> — Copy and redistribute the material in any medium or format</li>
          <li><strong>Adapt</strong> — Remix, transform, and build upon the material for any purpose, even commercially</li>
          <li><strong>Attribution</strong> — You must give appropriate credit, provide a link to the license, and indicate if changes were made.</li>
        </ul>
      
      <p>
        For more details, please refer to the <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">full license text</a>.
      </p>
    </section>
  </div>
</div>
