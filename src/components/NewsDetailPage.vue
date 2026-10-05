<script setup>
import { computed } from 'vue'
import { img } from '../assets/images'
import { newsArticles } from '../data/news'
import { blogArticles } from '../data/blog'

const slug = window.location.pathname.replace(/\/+$/, '').split('/').pop()
const articleBase = window.location.pathname.startsWith('/blog/') ? '/blog' : '/news'
const articleLabel = articleBase === '/blog' ? 'Blog' : 'News'
const articles = articleBase === '/blog' ? blogArticles : newsArticles
const article = computed(() => articles.find(post => post.slug === slug) || articles[0])
const related = computed(() => articles.filter(post => post.slug !== article.value.slug).slice(0, 3))
</script>

<template>
  <main class="article-page">
    <section class="article-hero" :style="{ backgroundImage: `linear-gradient(0deg, rgba(7, 24, 34, .78), rgba(7, 24, 34, .08) 75%), url('${img(article.image)}')` }">
      <div class="container article-hero-inner">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a :href="articleBase">{{ articleLabel }}</a><span>/</span><span>{{ article.category }}</span></nav>
        <div class="article-heading"><span class="category">{{ article.category }}</span><time>{{ article.date }}</time><h1>{{ article.title }}</h1><p>{{ article.excerpt }}</p></div>
      </div>
    </section>

    <section class="article-content-section">
      <div class="container article-layout">
        <article class="article-body">
          <p class="dropcap">{{ article.body[0] }}</p>
          <p v-for="paragraph in article.body.slice(1)" :key="paragraph">{{ paragraph }}</p>
          <a :href="articleBase" class="back-link"><span aria-hidden="true">←</span> Back to all stories</a>
        </article>
        <aside class="article-aside">
          <p class="eyebrow">KEEP EXPLORING</p><h2>More from Acenda</h2>
          <a v-for="post in related" :key="post.slug" :href="`${articleBase}/${post.slug}`" class="related-link"><img :src="img(post.image)" :alt="post.title" loading="lazy"/><span><small>{{ post.category }}</small><b>{{ post.title }}</b></span></a>
          <a :href="articleBase" class="all-stories">See all stories <span aria-hidden="true">→</span></a>
        </aside>
      </div>
    </section>
  </main>
</template>

<style scoped>
.article-hero{min-height:560px;background-size:cover;background-position:center 48%;color:#fff}.article-hero-inner{min-height:560px;display:flex;flex-direction:column;justify-content:space-between;padding-top:112px;padding-bottom:60px}
.crumbs{display:flex;align-items:center;gap:10px;color:#ffffffc7;font-size:12px}.crumbs a:hover{color:#fff}
.article-heading{max-width:850px}.category{display:inline-flex;padding:7px 11px;border-radius:999px;background:#ffffff26;color:#fff;font-size:11px;font-weight:600}.article-heading time{display:block;margin-top:14px;color:#ffffffd1;font-size:12px}.article-heading h1{margin-top:12px;font-size:clamp(34px,5vw,60px);line-height:1.12;letter-spacing:-.04em;font-weight:700}.article-heading>p{max-width:700px;margin-top:12px;color:#f2f7f8;font-size:15px;line-height:1.65}
.article-content-section{padding:84px 0 104px}.article-layout{display:grid;grid-template-columns:minmax(0,700px) 320px;justify-content:space-between;gap:80px}.article-body{color:#4f5d66;font-size:16px;line-height:1.9}.article-body p+p{margin-top:22px}.dropcap:first-letter{float:left;margin:7px 10px 0 0;color:var(--teal);font-size:54px;line-height:.8;font-weight:600}.back-link{display:inline-flex;align-items:center;gap:10px;margin-top:34px;color:var(--teal);font-size:13px;font-weight:600}.back-link span{font-size:18px}
.article-aside{align-self:start;padding:23px;border:1px solid #e8edef;border-radius:16px;background:#f9fbfb}.eyebrow{margin-bottom:8px;color:var(--teal);font-size:10px;font-weight:600;letter-spacing:.15em}.article-aside h2{margin-bottom:17px;color:#18262e;font-size:20px;font-weight:600}.related-link{display:grid;grid-template-columns:76px 1fr;gap:12px;align-items:center;padding:12px 0;border-top:1px solid #e9eeef;color:inherit;text-decoration:none}.related-link img{width:76px;height:62px;border-radius:8px;object-fit:cover}.related-link span{display:grid;gap:5px}.related-link small{color:var(--teal);font-size:10px}.related-link b{color:#28343c;font-size:12px;line-height:1.4;font-weight:600}.all-stories{display:inline-flex;align-items:center;gap:8px;margin-top:13px;color:var(--teal);font-size:12px;font-weight:600}
.related-link:hover b,.all-stories:hover,.back-link:hover{color:#005e6d}
@media(max-width:850px){.article-content-section{padding:68px 0 80px}.article-layout{grid-template-columns:minmax(0,1fr) 270px;gap:36px}}
@media(max-width:640px){.article-hero,.article-hero-inner{min-height:520px}.article-hero-inner{padding-top:100px;padding-bottom:44px}.crumbs{gap:7px;font-size:11px}.article-heading h1{font-size:clamp(32px,9vw,44px)}.article-heading>p{font-size:14px}.article-content-section{padding:52px 0 68px}.article-layout{grid-template-columns:1fr;gap:42px}.article-body{font-size:15px;line-height:1.85}.article-aside{padding:20px}}
</style>
