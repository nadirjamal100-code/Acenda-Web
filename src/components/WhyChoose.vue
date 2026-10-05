<script setup>
const items=[
 {t:'Competitive Prices',i:'<path d="M12 3v18M16.5 7.5c-.7-1.3-2-2-4.5-2-2.2 0-4 1.1-4 3s1.5 2.7 4 3.4 4.5 1.4 4.5 3.6-1.8 3.5-4.5 3.5c-2.4 0-4.2-.9-5-2.5"/><circle cx="12" cy="12" r="9"/>'},
 {t:'Secure Booking',i:'<path d="M12 21s7-3.5 7-9V5l-7-3-7 3v7c0 5.5 7 9 7 9Z"/><path d="m9 12 2 2 4-4"/>'},
 {t:'Seamless Experience',i:'<path d="M7 7h10a4 4 0 0 1 0 8h-1"/><path d="m13 12 3 3-3 3"/><path d="M17 17H7a4 4 0 0 1 0-8h1"/><path d="m11 12-3-3 3-3"/>'}]
</script>
<template>
  <section class="why"><div class="container">
    <h2 class="section-title">Why choose us?</h2>
    <div class="grid"><article v-for="(it,index) in items" :key="it.t" :class="`feature feature-${index + 1}`">
      <span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true" v-html="it.i"/></span><h3>{{ it.t }}</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p></article></div>
  </div></section>
</template>
<style scoped>
.why{padding:232px 0 0}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;margin-top:64px;text-align:center}
.feature{padding:28px 20px 30px;border-radius:20px;transition:transform .35s ease,box-shadow .35s ease,background .35s ease}
.feature:hover{transform:translateY(-8px);background:#fbfdff;box-shadow:0 18px 44px rgba(13,75,110,.09)}
.ic{position:relative;display:grid;place-items:center;width:88px;height:88px;border-radius:24px;background:linear-gradient(145deg,#e9f7fc,#d8eef7);margin:0 auto 28px;color:var(--primary);transition:transform .35s ease,box-shadow .35s ease}
.ic::before{content:"";position:absolute;inset:7px;border:1px solid rgba(14,143,192,.16);border-radius:19px}
.ic::after{content:"";position:absolute;width:9px;height:9px;right:10px;top:8px;border-radius:50%;background:#fff;box-shadow:0 0 0 4px rgba(14,143,192,.12)}
.feature-2 .ic{background:linear-gradient(145deg,#e8f7f2,#d7f0e7);color:#16866f}
.feature-2 .ic::before{border-color:rgba(22,134,111,.16)}
.feature-2 .ic::after{box-shadow:0 0 0 4px rgba(22,134,111,.12)}
.feature-3 .ic{background:linear-gradient(145deg,#f0edfc,#e4defa);color:#7964c8}
.feature-3 .ic::before{border-color:rgba(121,100,200,.16)}
.feature-3 .ic::after{box-shadow:0 0 0 4px rgba(121,100,200,.12)}
svg{position:relative;width:38px;height:38px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;animation:icon-drift 3.8s ease-in-out infinite}
.feature-2 svg{animation-delay:.45s}.feature-3 svg{animation-delay:.9s}
.feature:hover .ic{transform:scale(1.08) rotate(-4deg);box-shadow:0 10px 24px rgba(14,143,192,.16)}
h3{font-size:16px;font-weight:600}
p{font-size:14px;color:#333;line-height:1.6;margin:12px auto 0;max-width:280px}
@media(max-width:1023px){.why{padding-top:200px}}
@media(max-width:767px){.why{padding-top:340px}.grid{grid-template-columns:1fr;gap:32px;margin-top:32px}.ic{margin-bottom:16px}}
@keyframes icon-drift{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
@media(prefers-reduced-motion:reduce){.feature,.ic,svg{transition:none;animation:none}}
</style>
