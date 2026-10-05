<script setup>
import { computed, ref } from 'vue'
import { img } from '../assets/images'

const filters = ['All destinations', 'Asia', 'Europe', 'Oceania', 'Americas']
const selected = ref('All destinations')
const destinations = [
  { slug: 'maldives', name: 'Maldives', country: 'Indian Ocean', region: 'Asia', image: 'hero-maldives', count: '24 stays', description: 'Turquoise lagoons, quiet islands and overwater villas.' },
  { slug: 'bali', name: 'Bali', country: 'Indonesia', region: 'Asia', image: 'hotel-sanctuary', count: '38 stays', description: 'Lush landscapes, warm beaches and a vibrant island culture.' },
  { slug: 'phuket', name: 'Phuket', country: 'Thailand', region: 'Asia', image: 'hotel-palm-breeze', count: '31 stays', description: 'Golden beaches, clear water and tropical days in the sun.' },
  { slug: 'barcelona', name: 'Barcelona', country: 'Spain', region: 'Europe', image: 'hotel-la-maison', count: '19 stays', description: 'Seaside living, lively streets and unforgettable architecture.' },
  { slug: 'sydney', name: 'Sydney', country: 'Australia', region: 'Oceania', image: 'hotel-infinity', count: '16 stays', description: 'A sparkling harbour, coastal walks and a world-class food scene.' },
  { slug: 'rio-de-janeiro', name: 'Rio de Janeiro', country: 'Brazil', region: 'Americas', image: 'hotel-oasis', count: '22 stays', description: 'Mountain views, lively neighbourhoods and iconic beaches.' },
]
const visibleDestinations = computed(() => selected.value === 'All destinations'
  ? destinations
  : destinations.filter(destination => destination.region === selected.value))
</script>

<template>
  <main class="destinations-page">
    <section class="destination-hero" :style="{ backgroundImage: `linear-gradient(90deg, rgba(4, 28, 43, .72), rgba(4, 28, 43, .12)), url('/destinations-banner.webp')` }">
      <div class="container hero-content">
        <p class="eyebrow">ACENDA · YOUR NEXT ESCAPE</p>
        <h1>Find a place<br />to fall in love with.</h1>
        <p class="hero-copy">From quiet island hideaways to vibrant coastal cities, discover a stay that feels like yours.</p>
        <a class="hero-cta" href="#browse">Explore destinations <span aria-hidden="true">→</span></a>
      </div>
    </section>

    <section id="browse" class="browse-section">
      <div class="container">
        <div class="section-heading">
          <div>
            <p class="eyebrow teal">MADE FOR GETTING AWAY</p>
            <h2>Explore destinations</h2>
            <p class="section-copy">Find inspiration for your next trip and explore stays in places worth remembering.</p>
          </div>
          <span class="result-count">{{ visibleDestinations.length }} beautiful places</span>
        </div>

        <div class="filters" role="group" aria-label="Filter destinations by region">
          <button v-for="filter in filters" :key="filter" type="button" :class="{ active: selected === filter }" @click="selected = filter">{{ filter }}</button>
        </div>

        <div class="destination-grid">
          <article v-for="(place, index) in visibleDestinations" :key="place.name" class="destination-card">
            <a class="card-image" :href="`/destinations/${place.slug}`" :aria-label="`Explore ${place.name}`">
              <img :src="img(place.image)" :alt="`${place.name}, ${place.country}`" :loading="index > 2 ? 'lazy' : 'eager'" />
              <span class="place-count">{{ place.count }}</span>
            </a>
            <div class="card-content">
              <div class="card-title-row"><div><h3>{{ place.name }}</h3><p class="country">{{ place.country }}</p></div><span class="region">{{ place.region }}</span></div>
              <p class="description">{{ place.description }}</p>
              <a class="card-link" :href="`/destinations/${place.slug}`">Explore destination <span aria-hidden="true">→</span></a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="inspiration">
      <div class="container inspiration-inner">
        <div><p class="eyebrow">A LITTLE MORE YOU</p><h2>Your kind of getaway<br />is waiting.</h2></div>
        <a href="/#home" class="inspiration-link">Plan your next stay <span aria-hidden="true">→</span></a>
      </div>
    </section>
  </main>
</template>

<style scoped>
.destination-hero{min-height:560px;padding:160px 0 104px;background-size:cover;background-position:center 55%;color:#fff;display:flex;align-items:center}
.hero-content{padding-top:22px}
.eyebrow{font-size:12px;font-weight:600;letter-spacing:.16em;color:#d8eef5;margin-bottom:18px}
h1{font-size:clamp(42px,5.2vw,72px);line-height:1.08;letter-spacing:-.045em;font-weight:700;max-width:760px}
.hero-copy{max-width:510px;margin-top:24px;font-size:16px;line-height:1.75;color:#eef7fa}
.hero-cta{display:inline-flex;align-items:center;gap:18px;margin-top:34px;padding:15px 24px;border-radius:999px;background:#fff;color:#11212a;font-size:14px;font-weight:600;transition:transform .2s,background .2s}
.hero-cta:hover{transform:translateY(-2px);background:#e9f7fb}
.browse-section{padding:104px 0 120px}
.section-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:24px}
.teal{color:var(--teal)}
h2{font-size:clamp(30px,3.4vw,44px);line-height:1.2;letter-spacing:-.035em;font-weight:700;color:#111827}
.section-copy{max-width:560px;margin-top:12px;color:#707985;font-size:15px;line-height:1.7}
.result-count{padding-bottom:5px;color:#7a8490;font-size:13px;white-space:nowrap}
.filters{display:flex;gap:10px;overflow-x:auto;padding:32px 0 28px;scrollbar-width:none}
.filters::-webkit-scrollbar{display:none}
.filters button{flex:none;border:1px solid #e1e7ea;border-radius:999px;padding:11px 18px;color:#535e68;font-size:13px;font-weight:500;transition:all .2s}
.filters button:hover{border-color:#9ccbd5;color:var(--teal)}
.filters button.active{border-color:var(--teal);background:var(--teal);color:#fff}
.destination-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:32px 24px}
.destination-card{overflow:hidden;border:1px solid #edf0f2;border-radius:18px;background:#fff;box-shadow:0 8px 24px #102b3a0a;transition:transform .25s,box-shadow .25s}
.destination-card:hover{transform:translateY(-4px);box-shadow:0 16px 32px #102b3a14}
.card-image{position:relative;display:block;overflow:hidden;aspect-ratio:1.48;background:#e7f0f2}
.card-image::after{position:absolute;inset:40% 0 0;content:"";background:linear-gradient(transparent,#06172245)}
.card-image img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
.destination-card:hover .card-image img{transform:scale(1.04)}
.place-count{position:absolute;z-index:1;right:16px;bottom:14px;color:#fff;font-size:12px;font-weight:500}
.card-content{padding:21px 22px 22px}
.card-title-row{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
h3{font-size:21px;line-height:1.25;font-weight:600;color:#17212b}
.country{margin-top:4px;color:#7b858d;font-size:13px}
.region{padding:6px 10px;border-radius:999px;background:#e9f6f8;color:#087e91;font-size:11px;font-weight:600}
.description{min-height:46px;margin-top:16px;color:#68737d;font-size:13px;line-height:1.7}
.card-link{display:inline-flex;align-items:center;gap:8px;margin-top:17px;color:var(--teal);font-size:13px;font-weight:600}
.card-link span,.inspiration-link span{transition:transform .2s}
.card-link:hover span,.inspiration-link:hover span{transform:translateX(4px)}
.inspiration{padding:76px 0;background:#eff8fa}
.inspiration-inner{display:flex;align-items:center;justify-content:space-between;gap:24px}
.inspiration .eyebrow{color:var(--teal)}
.inspiration h2{font-size:clamp(28px,3vw,38px)}
.inspiration-link{display:inline-flex;align-items:center;gap:16px;padding:15px 22px;border-radius:999px;background:var(--teal);color:#fff;font-size:14px;font-weight:600}
@media(max-width:900px){.destination-hero{min-height:500px;padding:140px 0 88px}.browse-section{padding:80px 0 96px}.destination-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}.card-image{aspect-ratio:1.35}}
@media(max-width:600px){.destination-hero{min-height:500px;padding:132px 0 72px;background-position:58% center}.eyebrow{font-size:10px}.hero-copy{max-width:360px;font-size:14px}.hero-cta{margin-top:26px}.browse-section{padding:64px 0 72px}.section-heading{display:block}.section-copy{font-size:14px}.result-count{display:block;padding:14px 0 0}.filters{margin-right:-24px;padding:24px 24px 22px 0;gap:8px}.filters button{font-size:12px;padding:10px 14px}.destination-grid{grid-template-columns:1fr;gap:18px}.card-image{aspect-ratio:1.55}.card-content{padding:18px}.description{min-height:0}.inspiration{padding:56px 0}.inspiration-inner{align-items:flex-start;flex-direction:column}.inspiration-link{margin-top:4px}}
</style>
