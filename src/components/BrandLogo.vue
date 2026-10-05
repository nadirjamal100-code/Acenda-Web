<template>
  <span class="brand" role="img" aria-label="Acenda">
    <svg class="brand-mark" viewBox="0 0 48 48" aria-hidden="true">
      <path class="peak" d="M8 34 23.5 7 40 34M14 24h20"/>
      <path class="wave" d="M8 40c5-3 9-3 14 0s9 3 14 0 7-2 10-1"/>
    </svg>
    <span class="brand-type"><span class="wordmark">ACENDA</span><span class="tagline">STAYS · EXPERIENCES</span></span>
  </span>
</template>

<style scoped>
.brand{display:inline-flex;align-items:center;gap:9px;color:inherit;line-height:1}
.brand-mark{width:37px;height:37px;overflow:visible;fill:none}
.peak{stroke:#0e8fc0;stroke-width:3.1;stroke-linecap:round;stroke-linejoin:round}
.wave{stroke:currentColor;stroke-opacity:.72;stroke-width:2;stroke-linecap:round}
.brand-type{display:grid;gap:4px}
.wordmark{font-size:17px;font-weight:700;letter-spacing:.14em}
.tagline{font-size:7px;font-weight:500;letter-spacing:.16em;opacity:.68}
</style>
