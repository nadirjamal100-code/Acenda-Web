<script setup>
import { ref, computed } from 'vue'
import { img } from '../assets/images'
const all=[['The Oasis','$10,000','Rio de Janeiro, Brazil','hotel-oasis','the-oasis'],['The Sanctuary','$9,000','Bali, Indonesia','hotel-sanctuary','the-sanctuary'],
['The Infinity','$8,000','Sydney, Australia','hotel-infinity','the-infinity'],['La Maison','$8,000','Barcelona, Spain','hotel-la-maison','la-maison'],
['Serenity Shores','$7,000','Sydney, Australia','hotel-serenity-shores','serenity-shores'],['Azure Haven','$8,000','Barcelona, Spain','hotel-azure-haven','azure-haven'],
['Ocean Breeze','$7,000','Bali, Indonesia','hotel-ocean-breeze','ocean-breeze'],['Palm Breeze','$6,000','Phuket, Thailand','hotel-palm-breeze','palm-breeze']]
const expanded=ref(true)
const shown=computed(()=>expanded.value?all:all.slice(0,4))
</script>
<template>
  <section id="top-book" class="tb"><div class="container">
    <h2 class="section-title">Top book now</h2>
    <div class="grid"><a v-for="h in shown" :key="h[0]" class="item" :href="`/stays/${h[4]}`" :aria-label="`View ${h[0]} details`">
      <div class="ph"><img :src="img(h[3])" :alt="h[0]" loading="lazy"/><span class="rate">★ 4.8</span>
        <i class="dots"><u class="on"/><u/><u/><u/><u/></i></div>
      <div class="row"><h3>{{ h[0] }}</h3><strong>{{ h[1] }}</strong></div>
      <p><svg viewBox="0 0 24 24"><path d="M12 21s7-6.200 7-11a7 7 0 0 0-14 0c0 4.800 7 11 7 11Z"/><circle cx="12" cy="10" r="2.500"/></svg>{{ h[2] }}</p></a></div>
    <button class="all" @click="expanded=!expanded">{{ expanded?'See less':'See all' }} <span>{{ expanded?'↑':'→' }}</span></button>
  </div></section>
</template>
<style scoped>
.tb{padding:120px 0 0}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:56px}
.item{display:block;min-width:0}
.ph{position:relative;aspect-ratio:1;border-radius:16px;overflow:hidden}
.ph img{width:100%;height:100%;object-fit:cover;transition:transform .4s}.item:hover img{transform:scale(1.05)}
.rate{position:absolute;top:12px;right:12px;background:#0009;color:#fff;font-size:10px;font-weight:600;padding:4px 8px;border-radius:6px}
.dots{position:absolute;bottom:10px;left:0;right:0;display:flex;justify-content:center;gap:4px}
.dots u{width:5px;height:5px;border-radius:50%;background:#fff8}.dots .on{background:#fff}
.row{display:flex;justify-content:space-between;margin-top:12px;font-size:13px}h3{font-size:13px;font-weight:600}strong{font-weight:600}
p{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--muted);margin-top:4px}
svg{width:16px;height:16px;fill:none;stroke:#999;stroke-width:1.5}
.all{display:flex;gap:8px;margin:48px auto 0;border:1px solid #ddd;border-radius:999px;padding:10px 32px;font-size:12px;font-weight:600;transition:background .2s}
.all:hover{background:#f3f3f3}
@media(max-width:1023px){.grid{grid-template-columns:repeat(2,1fr)}.tb{padding-top:80px}}
@media(max-width:480px){.grid{gap:16px}}
</style>
