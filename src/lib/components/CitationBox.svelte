<script lang="ts">
  import { onMount } from 'svelte';
  
  export let citationText: string;
  
  let tooltipVisible = false;
  let tooltipX = 0;
  let tooltipY = 0;
  
  function handleCopyClick(event: MouseEvent) {
    // 클립보드에 인용 텍스트 복사
    navigator.clipboard.writeText(citationText);
    
    // 툴팁 위치 설정 (마우스 커서 기준)
    tooltipX = event.clientX;
    tooltipY = event.clientY - 40; // 커서 위쪽에 표시
    
    // 툴팁 표시
    tooltipVisible = true;
    
    // 3초 후 툴팁 숨기기
    setTimeout(() => {
      tooltipVisible = false;
    }, 3000);
  }
</script>

<div 
  class="citation-box" 
  on:click={handleCopyClick} 
  on:keydown={(e) => e.key === 'Enter' && handleCopyClick(e)} 
  role="button"
  tabindex="0" 
  aria-label="Click to copy citation"
>
  <div class="citation-content">
    <pre>{citationText}</pre>
  </div>
  <div class="copy-indicator">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
    Copy
  </div>
</div>

{#if tooltipVisible}
  <div class="tooltip" style="top: {tooltipY}px; left: {tooltipX}px;">
    Copied to clipboard!
  </div>
{/if}

<style>
  .citation-box {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 1.25rem;
    margin: 1.5rem 0;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  }

  .citation-box:hover {
    background-color: #f1f3f5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);
  }

  .citation-box:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(35, 28, 31, 0.2);
  }

  .citation-content {
    overflow-x: auto;
    white-space: pre-wrap;
    padding-right: 4rem;
  }

  pre {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
    color: #333;
  }

  .copy-indicator {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: #666;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.8);
    transition: all 0.2s ease;
  }

  .citation-box:hover .copy-indicator {
    color: #231c1f;
    background-color: rgba(255, 255, 255, 0.9);
  }

  .tooltip {
    position: fixed;
    background-color: #231c1f;
    color: white;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    font-size: 0.85rem;
    z-index: 1000;
    transform: translateX(-50%);
    animation: fadeIn 0.2s, fadeOut 0.2s 2.8s;
    pointer-events: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translate(-50%, -4px); }
    to { opacity: 1; transform: translate(-50%, 0); }
  }

  @keyframes fadeOut {
    from { opacity: 1; transform: translate(-50%, 0); }
    to { opacity: 0; transform: translate(-50%, -4px); }
  }
</style> 