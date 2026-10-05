<script setup>
import { ref } from 'vue'
import BrandLogo from './BrandLogo.vue'
const open = ref(false)
const path = window.location.pathname.replace(/\/+$/, '')
const onInnerPage = ['/destinations', '/stays', '/news', '/blog', '/about', '/faq', '/contact'].some(route => path.startsWith(route))
const onLightPage = ['/stays', '/news', '/blog', '/about', '/faq'].some(route => path.startsWith(route))
const links = [
  ['Home', onInnerPage ? '/#home' : '#home'],
  ['Destinations', '/destinations'],
  ['Blog', '/blog'],
  ['News', '/news'],
  ['Contact', '/contact'],
]
</script>
<template>
  <header class="nav" :class="{'nav--light':onLightPage}">
    <div class="container nav__in">
      <a :href="onInnerPage ? '/#home' : '#home'" class="logo" aria-label="Acenda home"><BrandLogo/></a>
      <button class="burger" :aria-expanded="open" aria-label="Toggle menu" @click="open=!open"><span/><span/><span/></button>
      <nav :class="{open}"><a v-for="l in links" :key="l[0]" :href="l[1]" @click="open=false">{{ l[0] }}</a></nav>
    </div>
  </header>
</template>
<style scoped>
.nav{position:absolute;inset:0 0 auto;z-index:20;color:#fff}
.nav--light{color:#17232b;background:#fff}.nav--light .burger span{background:#17232b}
.nav__in{display:flex;justify-content:space-between;align-items:center;height:80px}
.logo{display:inline-flex;align-items:center}
nav{display:flex;gap:48px;font-size:13px;font-weight:500}
nav a{transition:opacity .2s}nav a:hover{opacity:.7}
.burger{display:none;width:44px;height:44px;flex-direction:column;justify-content:center;gap:5px;align-items:center}
.burger span{width:22px;height:2px;background:#fff}
@media(max-width:767px){
  .burger{display:flex}
  nav{display:none;position:absolute;top:72px;left:16px;right:16px;flex-direction:column;gap:0;background:#fff;color:var(--text);border-radius:16px;padding:8px 0;box-shadow:0 8px 30px #0003}
  nav.open{display:flex}nav a{padding:14px 24px;font-size:15px}
}
</style>
