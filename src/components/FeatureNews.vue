<script setup>
import { ref, computed } from 'vue'
import { img } from '../assets/images'
import { featuredArticles } from '../data/news'

const idx = ref(0)
const prev = () => { idx.value = Math.max(0, idx.value - 1) }
const next = () => { idx.value = Math.min(featuredArticles.length - 1, idx.value + 1) }
const shift = computed(() => `translateX(calc(${-idx.value} * (var(--w) + 24px)))`)
</script>

<template>
  <section id="news" class="news"><div class="container">
    <div class="head">
      <h2>Feature News</h2>
      <div class="actions"><a class="all-news" href="/news">All news <span aria-hidden="true">→</span></a><div class="arr"><button aria-label="Previous" :disabled="idx===0" @click="prev">‹</button><button aria-label="Next" :disabled="idx===featuredArticles.length-1" @click="next">›</button></div></div>
    </div>
    <div class="vp"><div class="tr" :style="{transform:shift}"><a v-for="post in featuredArticles" :key="post.slug" class="c" :href="`/news/${post.slug}`" :aria-label="`Read ${post.title}`">
      <img :src="img(post.image)" :alt="post.title" loading="lazy"/>
      <div class="b"><div class="meta"><time><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/></svg>{{ post.date }}</time><span>{{ post.category }}</span></div>
        <h3>{{ post.title }}</h3><p>{{ post.excerpt }}</p>
        <span class="more"><i aria-hidden="true">→</i>Read story</span></div></a></div></div>
    <div class="pg"><i v-for="n in featuredArticles.length" :key="n" :class="{on:idx===n-1}"/></div>
  </div></section>
</template>

<style scoped>
.news{background:var(--bg);padding:80px 0 56px}
.head{display:flex;justify-content:space-between;align-items:center}
h2{font-size:32px;font-weight:600}
.actions{display:flex;align-items:center;gap:20px}.all-news{display:inline-flex;align-items:center;gap:8px;color:var(--teal);font-size:12px;font-weight:600}.all-news span{transition:transform .2s}.all-news:hover span{transform:translateX(3px)}
.arr{display:flex;gap:8px}.arr button{width:40px;height:40px;border:1px solid #333;border-radius:8px;font-size:22px;line-height:1}.arr button:disabled{opacity:.35;cursor:default}
.vp{overflow:hidden;margin-top:48px;--w:calc((1120px - 48px)/3)}
.tr{display:flex;gap:24px;transition:transform .4s}
.c{display:block;flex:none;width:var(--w);background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px #0001;color:inherit;text-decoration:none;transition:transform .2s,box-shadow .2s}.c:hover{transform:translateY(-3px);box-shadow:0 8px 20px #0002}.c:focus-visible{outline:3px solid var(--primary);outline-offset:3px}
.c img{width:100%;height:232px;object-fit:cover}
.b{padding:22px 24px 24px}.meta{display:flex;justify-content:space-between;align-items:center;gap:8px}time{display:flex;gap:8px;align-items:center;font-size:11px;color:#66717a}.meta>span{font-size:10px;color:var(--teal);font-weight:600}
svg{width:16px;height:16px;flex:none;fill:none;stroke:#77828b;stroke-width:1.5}
h3{font-size:18px;font-weight:600;line-height:1.35;margin-top:14px}
p{font-size:12px;color:#66717a;line-height:1.65;margin-top:12px}
.more{display:inline-flex;align-items:center;gap:8px;margin-top:18px;font-size:12px;font-weight:600;color:var(--teal)}
.more i{font-style:normal;width:20px;height:20px;border:1px solid var(--teal);border-radius:50%;display:grid;place-items:center;font-size:11px}
.pg{display:flex;justify-content:center;gap:6px;margin-top:44px}.pg i{width:6px;height:6px;border-radius:50%;background:#bbb}.pg .on{background:#222}
@media(max-width:1023px){.vp{--w:calc((100vw - 48px - 24px)/2)}}
@media(max-width:767px){.news{padding:60px 0 44px}.vp{--w:calc(100vw - 48px);margin-top:32px}h2{font-size:24px}.actions{gap:10px}.all-news{font-size:11px}.arr{gap:5px}.arr button{width:34px;height:34px}.c img{height:210px}.b{padding:18px}}
</style>
