<script setup>
import { computed } from 'vue'
import { img } from '../assets/images'

const destinations = {
  maldives: {
    name: 'Maldives', country: 'Indian Ocean', region: 'Asia', hero: '/destinations-banner.webp',
    strapline: 'A world of blue, made for slowing down.',
    overview: 'Across a string of coral islands, the Maldives pairs clear lagoons and palm-lined shores with stays that bring the ocean close. Spend your days on the water, discover the reef, or settle into the easy rhythm of island life.',
    bestFor: 'Island escapes, ocean views, quiet days', pace: 'Slow and restorative', stayCount: '24 stays to explore',
    highlights: [
      { title: 'Overwater mornings', text: 'Wake up beside the lagoon and step straight into the day at your own pace.', image: 'azure-haven' },
      { title: 'Life on the reef', text: 'Explore clear shallows, colorful marine life and long stretches of open water.', image: 'serene-sanctuary' },
      { title: 'Barefoot evenings', text: 'End the day with a soft sunset, warm sand and dinner by the shore.', image: 'verdant-vista' },
    ],
    stays: [
      { name: 'Azure Haven', note: 'Private villa · Lagoon views', image: 'hotel-azure-haven' },
      { name: 'Serenity Shores', note: 'Island retreat · Beach access', image: 'hotel-serenity-shores' },
      { name: 'Ocean Breeze', note: 'Waterfront stay · Outdoor pool', image: 'hotel-ocean-breeze' },
    ],
  },
  bali: {
    name: 'Bali', country: 'Indonesia', region: 'Asia', hero: 'hotel-sanctuary',
    strapline: 'Find your own rhythm on the Island of the Gods.',
    overview: 'Bali brings together lush scenery, welcoming coastal towns and a rich local culture. Move between a quiet villa, a day by the sea and the island’s green interior to make a trip that feels as relaxed or as full as you want.',
    bestFor: 'Culture, coastline, wellness', pace: 'Easygoing and varied', stayCount: '38 stays to explore',
    highlights: [
      { title: 'Tropical hideaways', text: 'Unwind in a private stay surrounded by palms, gardens and warm island air.', image: 'hotel-sanctuary' },
      { title: 'Coastal afternoons', text: 'Find a beachside café, watch the surf and let the afternoon unfold.', image: 'hotel-oasis' },
      { title: 'Green escapes', text: 'Take a slower route through the island’s gardens and lush landscapes.', image: 'hotel-palm-breeze' },
    ],
    stays: [
      { name: 'Serene Sanctuary', note: 'Private villa · Garden setting', image: 'hotel-sanctuary' },
      { name: 'Palm Breeze', note: 'Tropical stay · Outdoor pool', image: 'hotel-palm-breeze' },
      { name: 'The Oasis', note: 'Coastal retreat · Quiet setting', image: 'hotel-oasis' },
    ],
  },
  phuket: {
    name: 'Phuket', country: 'Thailand', region: 'Asia', hero: 'hotel-palm-breeze',
    strapline: 'Sunlit shores and a little more time outside.',
    overview: 'Phuket is an easy base for days by the sea, long lunches and exploring at your own pace. Choose a peaceful corner to recharge or stay close to the island’s lively mix of food, markets and coastal scenery.',
    bestFor: 'Beach days, food, island hopping', pace: 'Laid-back with lively corners', stayCount: '31 stays to explore',
    highlights: [
      { title: 'Long beach days', text: 'Settle into the sunshine, swim in warm water and follow the coast.', image: 'hotel-palm-breeze' },
      { title: 'A taste of Thailand', text: 'Make time for fresh local flavors, night markets and relaxed cafés.', image: 'hotel-oasis' },
      { title: 'Room to unwind', text: 'Come back to a private pool, a quiet terrace and a slower evening.', image: 'hotel-azure-haven' },
    ],
    stays: [
      { name: 'Palm Breeze', note: 'Tropical stay · Private pool', image: 'hotel-palm-breeze' },
      { name: 'Azure Haven', note: 'Modern villa · Ocean views', image: 'hotel-azure-haven' },
      { name: 'Ocean Breeze', note: 'Resort stay · Outdoor pool', image: 'hotel-ocean-breeze' },
    ],
  },
  barcelona: {
    name: 'Barcelona', country: 'Spain', region: 'Europe', hero: 'hotel-la-maison',
    strapline: 'A city break with the Mediterranean close by.',
    overview: 'Barcelona blends lively city streets with the ease of the coast. Spend a morning wandering through striking architecture, pause for a long lunch, then end the day by the water or in a neighborhood you have not explored yet.',
    bestFor: 'Architecture, food, city and sea', pace: 'Vibrant and walkable', stayCount: '19 stays to explore',
    highlights: [
      { title: 'City discoveries', text: 'Take in distinctive streets, welcoming plazas and memorable design.', image: 'hotel-la-maison' },
      { title: 'A table to linger at', text: 'Make room for local flavors, market finds and unhurried meals.', image: 'hotel-infinity' },
      { title: 'The coast nearby', text: 'Balance busy city days with fresh air and time beside the sea.', image: 'hotel-oasis' },
    ],
    stays: [
      { name: 'La Maison', note: 'Design stay · City views', image: 'hotel-la-maison' },
      { name: 'The Infinity', note: 'Modern retreat · Pool', image: 'hotel-infinity' },
      { name: 'Azure Haven', note: 'Coastal villa · Open views', image: 'hotel-azure-haven' },
    ],
  },
  sydney: {
    name: 'Sydney', country: 'Australia', region: 'Oceania', hero: 'hotel-infinity',
    strapline: 'Harbour views, ocean air and days outdoors.',
    overview: 'Sydney makes it easy to combine a lively city stay with time on the coast. Wander along the harbour, find a favorite beach or take the scenic route between neighborhoods, then come back to a place with room to recharge.',
    bestFor: 'Harbour, beaches, outdoor living', pace: 'Active and open-air', stayCount: '16 stays to explore',
    highlights: [
      { title: 'Harbour moments', text: 'Follow the water for city views, quiet coves and breezy walks.', image: 'hotel-infinity' },
      { title: 'Coastline time', text: 'Make space for a swim, a shoreline walk and a slow afternoon.', image: 'hotel-serenity-shores' },
      { title: 'A bright place to return to', text: 'Choose a stay with open views and an inviting outdoor space.', image: 'hotel-azure-haven' },
    ],
    stays: [
      { name: 'The Infinity', note: 'Harbour-side feel · Pool', image: 'hotel-infinity' },
      { name: 'Serenity Shores', note: 'Coastal stay · Outdoor living', image: 'hotel-serenity-shores' },
      { name: 'Ocean Breeze', note: 'Light-filled retreat · Waterfront', image: 'hotel-ocean-breeze' },
    ],
  },
  'rio-de-janeiro': {
    name: 'Rio de Janeiro', country: 'Brazil', region: 'Americas', hero: 'hotel-oasis',
    strapline: 'A bright, bold city framed by sea and mountains.',
    overview: 'Rio de Janeiro is full of contrast: city energy, green peaks and a coastline that shapes the day. Stay near the shore, explore a different neighborhood and make time for the views that make this city feel unmistakable.',
    bestFor: 'Coastal city life, views, culture', pace: 'Colorful and energetic', stayCount: '22 stays to explore',
    highlights: [
      { title: 'The city meets the sea', text: 'Enjoy a change of pace between lively streets and open coastline.', image: 'hotel-oasis' },
      { title: 'Views all around', text: 'Take in dramatic scenery from the city, the shore and your stay.', image: 'hotel-palm-breeze' },
      { title: 'A place to recharge', text: 'Cool off by the pool and settle into the warm evenings.', image: 'hotel-sanctuary' },
    ],
    stays: [
      { name: 'The Oasis', note: 'Private retreat · Poolside', image: 'hotel-oasis' },
      { name: 'Palm Breeze', note: 'Open-air stay · Tropical garden', image: 'hotel-palm-breeze' },
      { name: 'Serene Sanctuary', note: 'Quiet hideaway · Outdoor pool', image: 'hotel-sanctuary' },
    ],
  },
}

const slug = window.location.pathname.replace(/\/+$/, '').split('/').pop()
const place = computed(() => destinations[slug] || destinations.maldives)
const heroImage = computed(() => place.value.hero.startsWith('/') ? place.value.hero : img(place.value.hero))
</script>

<template>
  <main class="destination-detail">
    <section class="detail-hero" :style="{ backgroundImage: `linear-gradient(90deg, rgba(6, 24, 36, .74), rgba(6, 24, 36, .12)), linear-gradient(0deg, rgba(6, 24, 36, .36), transparent 55%), url('${heroImage}')` }">
      <div class="container detail-hero-inner">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/destinations">Destinations</a><span>/</span><span>{{ place.name }}</span></nav>
        <div class="hero-title">
          <span class="region-tag">{{ place.region }} · {{ place.country }}</span>
          <h1>{{ place.name }}</h1>
          <p>{{ place.strapline }}</p>
          <a href="#stays" class="hero-button">Explore places to stay <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>

    <section class="overview-section">
      <div class="container overview-grid">
        <div class="overview-copy">
          <p class="eyebrow">THE DESTINATION</p>
          <h2>Get to know<br />{{ place.name }}</h2>
          <p class="overview-text">{{ place.overview }}</p>
        </div>
        <aside class="quick-facts" aria-label="Destination overview">
          <div><span>Location</span><strong>{{ place.country }}</strong></div>
          <div><span>Best for</span><strong>{{ place.bestFor }}</strong></div>
          <div><span>Trip feeling</span><strong>{{ place.pace }}</strong></div>
          <div><span>Acenda collection</span><strong>{{ place.stayCount }}</strong></div>
        </aside>
      </div>
    </section>

    <section class="highlights-section">
      <div class="container">
        <div class="section-head"><div><p class="eyebrow">MAKE IT YOURS</p><h2>What makes {{ place.name }} special</h2></div><p class="section-note">A few ways to find your own favorite side of {{ place.name }}.</p></div>
        <div class="highlight-grid">
          <article v-for="(highlight, index) in place.highlights" :key="highlight.title" class="highlight-card">
            <img :src="img(highlight.image)" :alt="highlight.title" :loading="index ? 'lazy' : 'eager'" />
            <div><span class="number">0{{ index + 1 }}</span><h3>{{ highlight.title }}</h3><p>{{ highlight.text }}</p></div>
          </article>
        </div>
      </div>
    </section>

    <section id="stays" class="stays-section">
      <div class="container">
        <div class="section-head"><div><p class="eyebrow">STAY A LITTLE LONGER</p><h2>Places to stay in {{ place.name }}</h2></div><a href="/#top-book" class="all-stays">See all stays <span aria-hidden="true">→</span></a></div>
        <div class="stay-grid">
          <article v-for="stay in place.stays" :key="stay.name" class="stay-card">
            <a href="/#top-book" class="stay-image"><img :src="img(stay.image)" :alt="stay.name" loading="lazy" /></a>
            <div class="stay-copy"><div><h3>{{ stay.name }}</h3><p>{{ stay.note }}</p></div><a href="/#top-book" :aria-label="`Browse ${stay.name}`" class="stay-arrow">↗</a></div>
          </article>
        </div>
      </div>
    </section>

    <section class="closing-banner" :style="{ backgroundImage: `linear-gradient(90deg, rgba(3, 42, 52, .84), rgba(3, 42, 52, .24)), url('${heroImage}')` }">
      <div class="container closing-inner"><div><p class="eyebrow">YOUR NEXT CHAPTER</p><h2>Ready to discover<br />{{ place.name }}?</h2></div><a href="/#top-book" class="hero-button">Find your stay <span aria-hidden="true">→</span></a></div>
    </section>
  </main>
</template>

<style scoped>
.detail-hero{min-height:600px;background-size:cover;background-position:center 55%;color:#fff}
.detail-hero-inner{min-height:600px;display:flex;flex-direction:column;justify-content:space-between;padding-top:112px;padding-bottom:76px}
.crumbs{display:flex;gap:10px;align-items:center;color:#ffffffc9;font-size:12px}.crumbs a:hover{color:#fff}.crumbs span:last-child{color:#fff}
.hero-title{max-width:760px}.region-tag{display:inline-block;padding:8px 13px;border:1px solid #ffffff70;border-radius:999px;background:#ffffff16;font-size:12px;font-weight:500}
h1{margin-top:18px;font-size:clamp(56px,8vw,104px);line-height:.98;font-weight:700;letter-spacing:-.055em}
.hero-title>p{margin-top:18px;color:#f1f7f9;font-size:clamp(16px,2vw,20px);line-height:1.5}
.hero-button{display:inline-flex;align-items:center;gap:22px;margin-top:28px;padding:15px 22px;border-radius:999px;background:#fff;color:#14232b;font-size:13px;font-weight:600;transition:transform .2s,background .2s}.hero-button:hover{transform:translateY(-2px);background:#e7f6f8}
.overview-section{padding:104px 0 108px}.overview-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:96px;align-items:center}
.eyebrow{margin-bottom:14px;color:var(--teal);font-size:11px;font-weight:600;letter-spacing:.15em}
h2{color:#131c25;font-size:clamp(32px,4vw,48px);line-height:1.13;letter-spacing:-.04em;font-weight:700}
.overview-text{max-width:650px;margin-top:22px;color:#69747e;font-size:15px;line-height:1.85}
.quick-facts{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #e4eaed}
.quick-facts div{display:flex;flex-direction:column;gap:8px;padding:20px 16px 20px 0;border-bottom:1px solid #e4eaed}.quick-facts div:nth-child(odd){border-right:1px solid #e4eaed}.quick-facts div:nth-child(even){padding-left:22px}
.quick-facts span{color:#87919a;font-size:11px}.quick-facts strong{color:#24313a;font-size:14px;line-height:1.5;font-weight:600}
.highlights-section{padding:96px 0 104px;background:#f6f8f8}
.section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:32px;margin-bottom:32px}.section-head h2{font-size:clamp(28px,3.2vw,40px)}
.section-note{max-width:300px;color:#77828a;font-size:13px;line-height:1.7}
.highlight-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
.highlight-card{overflow:hidden;border-radius:16px;background:#fff;box-shadow:0 8px 24px #142f3a0a}
.highlight-card>img{width:100%;height:230px;object-fit:cover}
.highlight-card>div{padding:20px 21px 22px}.number{color:var(--teal);font-size:11px;font-weight:600;letter-spacing:.12em}
h3{margin-top:8px;color:#1b2730;font-size:18px;line-height:1.3;font-weight:600}.highlight-card p{margin-top:9px;color:#737e87;font-size:13px;line-height:1.7}
.stays-section{padding:104px 0 116px}.all-stays{display:inline-flex;align-items:center;gap:12px;padding:12px 18px;border:1px solid #dae2e5;border-radius:999px;color:#25323b;font-size:12px;font-weight:600;white-space:nowrap;transition:border-color .2s,color .2s}.all-stays:hover{border-color:var(--teal);color:var(--teal)}
.stay-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.stay-card{overflow:hidden;border:1px solid #edf0f2;border-radius:16px;background:#fff;transition:transform .25s,box-shadow .25s}.stay-card:hover{transform:translateY(-3px);box-shadow:0 14px 32px #122b3a12}
.stay-image{display:block;overflow:hidden;aspect-ratio:1.4;background:#e7eff1}.stay-image img{width:100%;height:100%;object-fit:cover;transition:transform .45s}.stay-card:hover img{transform:scale(1.04)}
.stay-copy{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 18px 19px}.stay-copy h3{margin:0;font-size:16px}.stay-copy p{margin-top:5px;color:#818b93;font-size:12px}.stay-arrow{display:grid;place-items:center;width:34px;height:34px;flex:none;border-radius:50%;background:#eaf5f6;color:var(--teal);font-size:16px}
.closing-banner{min-height:320px;display:flex;align-items:center;background-size:cover;background-position:center 52%;color:#fff}.closing-inner{display:flex;align-items:center;justify-content:space-between;gap:24px;padding-top:52px;padding-bottom:52px}.closing-banner .eyebrow{color:#c9edf0}.closing-banner h2{color:#fff;font-size:clamp(30px,4.4vw,52px)}.closing-banner .hero-button{flex:none}
@media(max-width:900px){.detail-hero,.detail-hero-inner{min-height:540px}.detail-hero-inner{padding-top:108px;padding-bottom:64px}.overview-section{padding:80px 0}.overview-grid{gap:48px}.highlights-section{padding:76px 0 84px}.highlight-card>img{height:190px}.stays-section{padding:80px 0}.closing-banner{min-height:280px}}
@media(max-width:640px){.detail-hero,.detail-hero-inner{min-height:540px}.detail-hero{background-position:58% center}.detail-hero-inner{padding-top:100px;padding-bottom:48px}.crumbs{font-size:11px;gap:7px}.hero-title{max-width:100%}h1{font-size:clamp(52px,15vw,76px)}.hero-title>p{max-width:360px;font-size:16px}.overview-section{padding:64px 0 68px}.overview-grid{grid-template-columns:1fr;gap:32px}.overview-text{font-size:14px}.quick-facts div{padding-top:15px;padding-bottom:15px}.quick-facts strong{font-size:13px}.highlights-section{padding:64px 0}.section-head{align-items:flex-start;flex-direction:column;gap:14px;margin-bottom:24px}.section-note{max-width:420px}.highlight-grid{grid-template-columns:1fr;gap:16px}.highlight-card{display:grid;grid-template-columns:38% 1fr;align-items:stretch}.highlight-card>img{height:100%;min-height:160px}.highlight-card>div{padding:16px}.highlight-card h3{font-size:16px}.highlight-card p{font-size:12px}.stays-section{padding:64px 0 72px}.stays-section .section-head{flex-direction:row;align-items:flex-end}.stays-section .all-stays{padding:10px 13px;font-size:11px}.stay-grid{grid-template-columns:1fr;gap:14px}.stay-card{display:grid;grid-template-columns:42% 1fr;align-items:center}.stay-image{height:100%;min-height:130px;aspect-ratio:auto}.stay-copy{padding:14px}.stay-copy h3{font-size:14px}.stay-copy p{font-size:11px}.stay-arrow{width:30px;height:30px}.closing-banner{min-height:320px}.closing-inner{align-items:flex-start;flex-direction:column;justify-content:center;padding-top:48px;padding-bottom:48px}.closing-banner .hero-button{margin-top:4px}}
@media(max-width:380px){.quick-facts div:nth-child(even){padding-left:14px}.highlight-card{grid-template-columns:1fr}.highlight-card>img{height:180px}.stays-section .section-head{align-items:flex-start;flex-direction:column}}
</style>
