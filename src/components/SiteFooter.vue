<script setup>
import { img } from '../assets/images'
import BrandLogo from './BrandLogo.vue'
const cols=[['Support',['Help Center','Safety information','Cancellation options']],['Company',['About us','Privacy policy','Community Blog','Terms of service']],['Contact',['FAQ','Get in touch','Partnerships']]]
const social=[
  ['Facebook','M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9Z'],
  ['Twitter','M23.953 4.57a10 10 0 0 1-2.825.775 4.932 4.932 0 0 0 2.163-2.723 9.99 9.99 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.384 4.482A13.98 13.98 0 0 1 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.936 4.936 0 0 1-2.224.084 4.93 4.93 0 0 0 4.604 3.42 9.872 9.872 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63A9.936 9.936 0 0 0 24 4.59z'],
  ['TikTok','M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.55v13.67a2.9 2.9 0 0 1-2.9 2.9 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .6.05.88.14V9.28a6.5 6.5 0 0 0-.88-.06 6.45 6.45 0 0 0-6.45 6.45 6.45 6.45 0 0 0 6.45 6.45 6.45 6.45 0 0 0 6.45-6.45V9.3a8.3 8.3 0 0 0 4.85 1.56V7.31a4.8 4.8 0 0 1-1.08-.62Z'],
  ['YouTube','M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .5 6.186C0 8.078 0 12 0 12s0 3.922.5 5.814a3.016 3.016 0 0 0 2.123 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.922 24 12 24 12s0-3.922-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z'],
]
</script>
<template>
  <footer><div class="container">
    <a class="footer-brand" href="/#home" aria-label="Acenda home"><BrandLogo/></a>
    <div class="cols"><div v-for="c in cols" :key="c[0]"><h3>{{ c[0] }}</h3><ul><li v-for="l in c[1]" :key="l"><a :href="l==='About us'?'/about':l==='FAQ'?'/faq':l==='Get in touch'?'/contact':l==='Community Blog'?'/news':'#home'">{{ l }}</a></li></ul></div>
      <div><h3>Social</h3><ul class="soc"><li v-for="s in social" :key="s[0]"><a href="#home" :aria-label="s[0]"><svg viewBox="0 0 24 24"><path :d="s[1]"/></svg></a></li></ul></div></div>
    <div class="bot"><small>© Copyright Acenda 2026</small><img :src="img('payment-methods')" alt="Accepted payment methods"/></div>
  </div></footer>
</template>
<style scoped>
footer{background:#0a0a0a;color:#fff;padding:96px 0 40px}
.footer-brand{display:inline-flex;margin-bottom:44px;color:#fff}
.cols{display:grid;grid-template-columns:repeat(4,1fr);gap:32px}
h3{font-size:16px;font-weight:600;margin-bottom:24px}
li{font-size:12px;color:#bbb;margin-bottom:14px}li a:hover{color:#fff}
.soc{display:flex;gap:16px}.soc a{width:28px;height:28px;display:grid;place-items:center;border-radius:50%;background:#fff;color:#000}
svg{width:18px;height:18px;fill:#000;stroke:none}
.bot{display:flex;justify-content:space-between;align-items:center;margin-top:120px}
small{font-size:10px;color:#888}.bot img{width:278px}
@media(max-width:767px){footer{padding:56px 0 32px}.cols{grid-template-columns:1fr 1fr}.bot{flex-direction:column;gap:20px;margin-top:48px;align-items:flex-start}.bot img{width:240px}}
</style>
