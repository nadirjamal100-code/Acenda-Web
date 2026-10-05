<script setup>
import { computed, ref } from 'vue'
import { img } from '../assets/images'
import { newsArticles } from '../data/news'
import { blogArticles } from '../data/blog'

const isBlog = window.location.pathname.startsWith('/blog')
const categories = isBlog
  ? ['All stories', 'Island life', 'On the water', 'Local notes', 'Inspiration', 'Travel well', 'Ocean stories']
  : ['All stories', 'Inspiration', 'Stays', 'Food & culture', 'Guides']
const articleBase = isBlog ? '/blog' : '/news'
const articles = isBlog ? blogArticles : newsArticles
const selected = ref('All stories')
const filteredArticles = computed(() => selected.value === 'All stories'
  ? articles
  : articles.filter(article => article.category === selected.value))
const featured = computed(() => filteredArticles.value[0])
const remaining = computed(() => filteredArticles.value.slice(1))
</script>

<template>
  <main v-if="isBlog" class="blog-page">
    <section class="blog-masthead"><div class="container masthead-inner"><p class="eyebrow">THE ACENDA JOURNAL</p><div class="masthead-title"><h1>Go a little<br /><em>further.</em></h1><p>Notes, guides and good ideas for finding your own kind of escape.</p></div><span class="masthead-mark" aria-hidden="true">A.</span></div></section>
    <section class="blog-feature-section"><div class="container">
      <a v-if="featured" class="blog-feature" :href="`${articleBase}/${featured.slug}`" :style="{backgroundImage:`linear-gradient(90deg,rgba(9,31,39,.76),rgba(9,31,39,.12) 78%),url('${img(featured.image)}')`}">
        <div class="blog-feature-copy"><span class="feature-kicker">{{ featured.category }} <i/> {{ featured.date }}</span><h2>{{ featured.title }}</h2><p>{{ featured.excerpt }}</p><span class="feature-cta">Explore the story <b aria-hidden="true">↗</b></span></div><span class="feature-index">01 <i/> FEATURED STORY</span>
      </a>
    </div></section>
    <section class="blog-latest"><div class="container">
      <div class="blog-section-head"><div><p class="eyebrow">A FEW GOOD READS</p><h2>Travel notes</h2></div><span>{{ filteredArticles.length }} stories to explore</span></div>
      <div class="blog-filters" role="group" aria-label="Filter blog by category"><button v-for="category in categories" :key="category" :class="{active:selected===category}" @click="selected=category">{{ category }}</button></div>
      <div class="blog-grid">
        <a v-for="(story,index) in filteredArticles.slice(1)" :key="story.slug" class="blog-card" :class="{'blog-card-wide':index===0}" :href="`${articleBase}/${story.slug}`">
          <div class="blog-card-image"><img :src="img(story.image)" :alt="story.title" loading="lazy"/><span>{{ String(index+2).padStart(2,'0') }}</span></div>
          <div class="blog-card-meta"><span>{{ story.category }}</span><time>{{ story.date }}</time></div><h3>{{ story.title }}</h3><p>{{ story.excerpt }}</p><span class="blog-read">Discover this story <b aria-hidden="true">›</b></span>
        </a>
      </div>
      <p v-if="filteredArticles.length===1" class="blog-empty">That’s the only story in this category for now. Try another topic.</p>
    </div></section>
  </main>
  <main v-else class="news-page">
    <section class="news-intro"><div class="container intro-inner"><p class="eyebrow">{{ isBlog ? 'THE ACENDA BLOG' : 'THE ACENDA JOURNAL' }}</p><h1>{{ isBlog ? 'A little inspiration for your next escape.' : 'Stories for the journey ahead.' }}</h1><p class="intro-copy">Travel ideas, thoughtful stays and little discoveries to make your next escape even better.</p></div></section>
    <section class="news-content"><div class="container">
      <div class="browse-head"><div><p class="eyebrow">{{ isBlog ? 'THE LATEST FROM ACENDA' : 'FRESH FROM ACENDA' }}</p><h2>{{ isBlog ? 'The Acenda blog' : 'Stories & inspiration' }}</h2></div><span>{{ filteredArticles.length }} stories</span></div>
      <div class="filters" role="group" aria-label="Filter news by category"><button v-for="category in categories" :key="category" :class="{active:selected===category}" @click="selected=category">{{ category }}</button></div>
      <a v-if="featured" class="featured-story" :href="`${articleBase}/${featured.slug}`">
        <div class="featured-image"><img :src="img(featured.image)" :alt="featured.title" /></div>
        <div class="featured-copy"><span class="category">{{ featured.category }}</span><time>{{ featured.date }}</time><h2>{{ featured.title }}</h2><p>{{ featured.excerpt }}</p><span class="read-link">Read the story <b aria-hidden="true">→</b></span></div>
      </a>
      <div v-if="remaining.length" class="story-grid">
        <a v-for="story in remaining" :key="story.slug" class="story-card" :href="`${articleBase}/${story.slug}`">
          <div class="story-image"><img :src="img(story.image)" :alt="story.title" loading="lazy" /></div>
          <div class="story-copy"><div class="story-meta"><span>{{ story.category }}</span><time>{{ story.date }}</time></div><h3>{{ story.title }}</h3><p>{{ story.excerpt }}</p><span class="read-link">Read the story <b aria-hidden="true">→</b></span></div>
        </a>
      </div>
      <p v-else class="empty-state">This story is featured above. Choose another category to explore more.</p>
    </div></section>
  </main>
</template>

<style scoped>
.news-intro{padding:164px 0 88px;background:#eff7f8}
.intro-inner{max-width:calc(900px + 48px)}
.eyebrow{margin-bottom:14px;color:var(--teal);font-size:11px;font-weight:600;letter-spacing:.15em}
h1{color:#12212a;font-size:clamp(46px,7vw,82px);line-height:1.02;letter-spacing:-.05em;font-weight:700}
.intro-copy{max-width:500px;margin-top:22px;color:#687781;font-size:16px;line-height:1.75}
.news-content{padding:80px 0 112px}
.browse-head{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}.browse-head .eyebrow{margin-bottom:9px}.browse-head h2{color:#17232b;font-size:clamp(28px,3.4vw,42px);letter-spacing:-.035em;font-weight:700}.browse-head>span{padding-bottom:5px;color:#7a858d;font-size:12px}
.filters{display:flex;gap:9px;overflow-x:auto;padding:26px 0 28px;scrollbar-width:none}.filters::-webkit-scrollbar{display:none}.filters button{flex:none;padding:10px 16px;border:1px solid #dfe7e9;border-radius:999px;color:#55616a;font-size:12px;font-weight:500;transition:all .2s}.filters button:hover{border-color:#9fcbd2;color:var(--teal)}.filters button.active{border-color:var(--teal);background:var(--teal);color:#fff}
.featured-story{display:grid;grid-template-columns:1.08fr .92fr;height:340px;min-height:0;overflow:hidden;border-radius:18px;background:#f3f7f8;color:inherit;text-decoration:none;transition:box-shadow .2s}.featured-story:hover,.story-card:hover{box-shadow:0 14px 34px #12303d16}
.featured-image{height:340px;min-height:0;overflow:hidden}.featured-image img{width:100%;height:100%;object-fit:cover;transition:transform .45s}.featured-story:hover img,.story-card:hover img{transform:scale(1.035)}
.featured-copy{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:40px 44px}.category{display:inline-flex;padding:7px 11px;border-radius:999px;background:#e0f1f3;color:var(--teal);font-size:10px;font-weight:600}.featured-copy time{margin-top:16px;color:#8a949b;font-size:11px}.featured-copy h2{margin-top:12px;color:#18252d;font-size:clamp(24px,3vw,34px);font-weight:600;line-height:1.22;letter-spacing:-.025em}.featured-copy p{margin-top:13px;color:#6c7880;font-size:13px;line-height:1.7}.read-link{display:inline-flex;align-items:center;gap:10px;margin-top:21px;color:var(--teal);font-size:12px;font-weight:600}.read-link b{transition:transform .2s}.featured-story:hover .read-link b,.story-card:hover .read-link b{transform:translateX(4px)}
.story-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;margin-top:26px}.story-card{overflow:hidden;border:1px solid #edf0f2;border-radius:16px;background:#fff;color:inherit;text-decoration:none;transition:box-shadow .2s}.story-image{aspect-ratio:1.45;overflow:hidden;background:#e8eff1}.story-image img{width:100%;height:100%;object-fit:cover;transition:transform .45s}.story-copy{padding:20px}.story-meta{display:flex;justify-content:space-between;align-items:center;gap:8px}.story-meta span{color:var(--teal);font-size:10px;font-weight:600}.story-meta time{color:#879198;font-size:10px}.story-copy h3{margin-top:12px;color:#1b2730;font-size:18px;line-height:1.35;font-weight:600}.story-copy p{margin-top:9px;color:#727e86;font-size:12px;line-height:1.65}.story-copy .read-link{margin-top:16px}
.featured-story:focus-visible,.story-card:focus-visible{outline:3px solid var(--primary);outline-offset:4px}.empty-state{padding:24px 0;color:#77838b;font-size:13px}
@media(max-width:900px){.news-intro{padding:148px 0 72px}.news-content{padding:64px 0 84px}.featured-story{height:300px}.featured-image{height:300px}.featured-copy{padding:30px}.story-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:600px){.news-intro{padding:132px 0 60px}.intro-copy{font-size:14px}.news-content{padding:52px 0 68px}.browse-head h2{font-size:28px}.filters{margin-right:-24px;padding:20px 24px 22px 0}.featured-story{height:auto;grid-template-columns:1fr}.featured-image{height:auto;min-height:0;aspect-ratio:1.45}.featured-copy{padding:24px}.featured-copy h2{font-size:25px}.story-grid{grid-template-columns:1fr;gap:16px;margin-top:18px}.story-card{display:grid;grid-template-columns:38% 1fr;align-items:stretch}.story-image{height:100%;aspect-ratio:auto;min-height:190px}.story-copy{padding:16px}.story-meta{align-items:flex-start;flex-direction:column;gap:4px}.story-copy h3{font-size:16px;margin-top:9px}.story-copy p{font-size:11px}.story-copy .read-link{margin-top:12px;font-size:11px}}
.blog-page{background:#fbfaf7;color:#1b292e}
.blog-masthead{padding:132px 0 54px;background:#edf4f1;overflow:hidden}
.masthead-inner{position:relative}
.blog-masthead .eyebrow,.blog-section-head .eyebrow{color:var(--teal);font-size:10px;letter-spacing:.2em}
.masthead-title{display:flex;align-items:flex-end;justify-content:space-between;gap:32px;margin-top:15px}
.masthead-title h1{max-width:700px;color:#182b30;font-size:clamp(58px,9vw,112px);line-height:.88;letter-spacing:-.075em;font-weight:600}
.masthead-title h1 em{color:var(--teal);font-family:Georgia,serif;font-weight:400;letter-spacing:-.06em}
.masthead-title>p{max-width:260px;margin:0 9% 7px 0;color:#647578;font-size:14px;line-height:1.8}
.masthead-mark{position:absolute;right:8px;top:-16px;color:#dce9e4;font-family:Georgia,serif;font-size:clamp(100px,15vw,190px);line-height:1;pointer-events:none}
.blog-feature-section{padding:8px 0 76px;background:#edf4f1}
.blog-feature{position:relative;display:flex;align-items:flex-end;min-height:500px;padding:52px 58px;border-radius:6px;overflow:hidden;background-position:center;background-size:cover;color:white;text-decoration:none;transition:background-size .4s,transform .3s}
.blog-feature:hover{transform:translateY(-3px)}
.blog-feature-copy{position:relative;z-index:1;max-width:610px}
.feature-kicker{display:flex;align-items:center;gap:10px;color:#e3eeed;font-size:11px;font-weight:500;letter-spacing:.04em}
.feature-kicker i,.feature-index i{width:3px;height:3px;border-radius:50%;background:#a9d5c7}
.blog-feature-copy h2{margin-top:18px;color:#fff;font-size:clamp(34px,5vw,58px);font-weight:600;line-height:1.05;letter-spacing:-.045em}
.blog-feature-copy>p{max-width:450px;margin-top:13px;color:#edf3f2;font-size:14px;line-height:1.65}
.feature-cta{display:inline-flex;align-items:center;gap:22px;margin-top:25px;padding:12px 0;border-bottom:1px solid #ffffff9c;color:#fff;font-size:12px;font-weight:600}
.feature-cta b{font-size:16px;font-weight:400;transition:transform .2s}.blog-feature:hover .feature-cta b{transform:translate(3px,-3px)}
.feature-index{position:absolute;right:28px;top:28px;display:flex;align-items:center;gap:9px;padding:9px 12px;border:1px solid #ffffff75;border-radius:999px;color:#fff;font-size:9px;letter-spacing:.12em}
.blog-latest{padding:80px 0 110px}
.blog-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}.blog-section-head h2{margin-top:8px;color:#1b292e;font-size:clamp(34px,4vw,48px);font-weight:600;letter-spacing:-.045em}.blog-section-head>span{padding-bottom:7px;color:#899391;font-size:11px}
.blog-filters{display:flex;gap:26px;overflow:auto;margin:26px 0 30px;border-bottom:1px solid #e5e8e3;scrollbar-width:none}.blog-filters::-webkit-scrollbar{display:none}.blog-filters button{position:relative;flex:none;padding:0 0 13px;color:#798381;font-size:11px;transition:color .2s}.blog-filters button:hover,.blog-filters button.active{color:#1d625f}.blog-filters button.active::after{position:absolute;right:0;bottom:-1px;left:0;height:2px;background:#1d625f;content:""}
.blog-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:42px 24px}.blog-card{display:block;color:inherit;text-decoration:none}.blog-card-wide{grid-column:span 2}.blog-card-image{position:relative;aspect-ratio:1.42;overflow:hidden;background:#e6ece9}.blog-card-wide .blog-card-image{aspect-ratio:2.02}.blog-card-image img{width:100%;height:100%;object-fit:cover;transition:transform .5s}.blog-card:hover .blog-card-image img{transform:scale(1.045)}.blog-card-image>span{position:absolute;right:12px;bottom:12px;padding:7px 10px;background:#fbfaf7;color:#1d625f;font-size:10px}
.blog-card-meta{display:flex;justify-content:space-between;gap:10px;margin-top:17px;color:#788581;font-size:10px}.blog-card-meta span{color:#1d7770;font-weight:600}.blog-card h3{margin-top:9px;color:#1b292e;font-size:20px;line-height:1.3;font-weight:600;letter-spacing:-.02em}.blog-card p{margin-top:8px;color:#75807e;font-size:12px;line-height:1.7}.blog-read{display:inline-flex;align-items:center;gap:11px;margin-top:13px;color:#1d625f;font-size:11px;font-weight:600}.blog-read b{font-size:15px;font-weight:400;transition:transform .2s}.blog-card:hover .blog-read b{transform:translate(3px,-3px)}.blog-empty{padding:30px 0;color:#75807e;font-size:13px}
.blog-feature:focus-visible,.blog-card:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
@media(max-width:800px){.masthead-title>p{margin-right:0}.blog-feature{min-height:430px;padding:36px}.blog-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:34px 18px}.blog-card-wide{grid-column:span 2}}
@media(max-width:600px){.blog-masthead{padding:118px 0 38px}.masthead-title{display:block}.masthead-title h1{font-size:clamp(58px,17vw,86px)}.masthead-title>p{max-width:270px;margin:20px 0 0}.masthead-mark{right:0;top:30px;font-size:110px}.blog-feature-section{padding-bottom:48px}.blog-feature{min-height:440px;padding:25px 23px;background-position:58% center}.blog-feature-copy h2{font-size:36px}.feature-index{right:14px;top:14px;font-size:8px}.blog-latest{padding:54px 0 76px}.blog-section-head h2{font-size:34px}.blog-section-head>span{font-size:10px}.blog-filters{gap:20px;margin:21px 0 23px}.blog-grid{grid-template-columns:1fr;gap:30px}.blog-card-wide{grid-column:auto}.blog-card-image,.blog-card-wide .blog-card-image{aspect-ratio:1.5}.blog-card h3{font-size:19px}}
</style>
