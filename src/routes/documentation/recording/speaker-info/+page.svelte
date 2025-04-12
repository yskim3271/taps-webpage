<script>
  import { onMount } from 'svelte';
  
  let pageTitle = 'Speaker Information';
  
  onMount(() => {
    document.title = `${pageTitle} | TAPS Documentation`;
  });
</script>

<div class="page-container">
  <div class="page-header">
    <h1>{pageTitle}</h1>
  </div>
  
  <div class="content-section">
    <h2>Participant Demographics</h2>
    <p>
      The TAPS dataset was constructed with 60 native Korean speakers. The speakers had an average age of 27.1 years 
      (standard deviation: 6.23 years), and none reported a history of vocal disorders. Most participants spoke in 
      a standard Korean dialect.
    </p>
    <h2>Dataset Split Information</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Dataset Split</th>
            <th>Train</th>
            <th>Dev</th>
            <th>Test</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Number of speakers</td>
            <td>40</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Number of male speakers</td>
            <td>20</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Mean age (years)</td>
            <td>28.5 ± 7.3</td>
            <td>25.6 ± 3.0</td>
            <td>26.2 ± 1.4</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>