<script>
  import { base } from '$app/paths';
</script>

<div class="logo-container">
  <div class="logo-image">
    <a href="{base}/" class="logo-link">
      <img src="{base}/logo.png" alt="TAPS Logo" class="logo-img" />
    </a>
  </div>
</div>

<style>
  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0;
  }

  .logo-image {
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  .logo-img {
    width: 180px;
    height: 180px;
    object-fit: contain;
  }
</style> 