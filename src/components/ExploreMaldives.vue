<script setup>
import { img } from '../assets/images'
const places=[['Azure Haven','azure-haven'],['Serene Sanctuary','serene-sanctuary'],['Verdant Vista','verdant-vista']]
</script>
<template>
  <section class="ex" :style="{backgroundImage:`linear-gradient(#043b4acc,#043b4acc),url(${img('explore-bg')})`}"><div class="container">
    <h2>EXPLORE MALDIVES</h2><hr/>
    <div class="body"><div class="txt"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <a href="#top-book" class="btn">See all <span>→</span></a></div>
      <ul class="pics"><li v-for="p in places" :key="p[0]"><img :src="img(p[1])" :alt="p[0]" loading="lazy"/><span>{{ p[0] }}</span></li></ul></div>
  </div></section>
</template>
<style scoped>
.ex{margin-top:140px;height:692px;background-size:cover;background-position:center;color:#fff;display:flex;align-items:center}
h2{font-size:96px;font-weight:700;line-height:1.1;letter-spacing:-.01em}
hr{border:0;border-top:1px solid #fff5;margin:56px 0 28px}
.body{display:flex;justify-content:space-between;gap:32px;align-items:flex-start}
.txt{max-width:360px;font-size:14px;line-height:1.7}
.btn{display:inline-flex;gap:8px;margin-top:28px;background:var(--dark);padding:12px 28px;border-radius:999px;font-size:12px;font-weight:600;transition:background .2s}.btn:hover{background:#000}
.pics{display:flex;gap:8px}
li{width:176px;font-size:13px;font-weight:600}
img{width:100%;height:232px;object-fit:cover;border-radius:6px;margin-bottom:12px}
@media(max-width:1023px){h2{font-size:64px}.ex{height:auto;padding:80px 0;margin-top:100px}.body{flex-direction:column}}
@media(max-width:767px){h2{font-size:36px}hr{margin:28px 0 20px}.pics{width:100%;overflow-x:auto;padding-bottom:4px}li{flex:none;width:150px}img{height:190px}}
</style>
