<script setup>
import { computed, ref } from 'vue'
import { img } from '../assets/images'

const stays = {
  'the-oasis': {
    name: 'The Oasis', price: '$10,000', location: 'Rio de Janeiro, Brazil', destination: 'rio-de-janeiro', destinationName: 'Rio de Janeiro', image: 'hotel-oasis', gallery: ['hotel-oasis', 'hotel-palm-breeze', 'hotel-infinity'], rating: '4.8',
    tagline: 'A peaceful retreat with the coast close by.',
    description: 'The Oasis pairs open, light-filled spaces with a calm outdoor setting. Spend a slow morning by the pool, head out to explore Rio, then come back to a private place to unwind.',
    features: ['Private outdoor pool', 'Open-air lounge', 'Garden setting', 'Made for relaxed stays'],
  },
  'the-sanctuary': {
    name: 'The Sanctuary', price: '$9,000', location: 'Bali, Indonesia', destination: 'bali', destinationName: 'Bali', image: 'hotel-sanctuary', gallery: ['hotel-sanctuary', 'hotel-oasis', 'hotel-azure-haven'], rating: '4.8',
    tagline: 'A tucked-away villa for a slower Bali stay.',
    description: 'Settle into a tranquil villa with tropical greenery and a private pool. The Sanctuary is a restful base between days discovering Bali’s coastline, local cafés and lush scenery.',
    features: ['Private swimming pool', 'Tropical garden', 'Quiet villa setting', 'Indoor and outdoor living'],
  },
  'the-infinity': {
    name: 'The Infinity', price: '$8,000', location: 'Sydney, Australia', destination: 'sydney', destinationName: 'Sydney', image: 'hotel-infinity', gallery: ['hotel-infinity', 'hotel-serenity-shores', 'hotel-ocean-breeze'], rating: '4.8',
    tagline: 'A modern escape with room to take in the view.',
    description: 'The Infinity brings contemporary design and a generous outdoor pool together in one bright retreat. Enjoy a quiet start to the day before heading out to discover Sydney’s harbour and coastline.',
    features: ['Infinity-style pool', 'Contemporary design', 'Sunlit outdoor spaces', 'Close to coastal days'],
  },
  'la-maison': {
    name: 'La Maison', price: '$8,000', location: 'Barcelona, Spain', destination: 'barcelona', destinationName: 'Barcelona', image: 'hotel-la-maison', gallery: ['hotel-la-maison', 'hotel-infinity', 'hotel-oasis'], rating: '4.8',
    tagline: 'A design-led stay with the Mediterranean in reach.',
    description: 'La Maison offers a fresh, modern setting for a Barcelona escape. Make it your place to recharge between city walks, long lunches and afternoons by the coast.',
    features: ['Modern architecture', 'Private pool', 'Outdoor dining space', 'City and coast escapes'],
  },
  'serenity-shores': {
    name: 'Serenity Shores', price: '$7,000', location: 'Sydney, Australia', destination: 'sydney', destinationName: 'Sydney', image: 'hotel-serenity-shores', gallery: ['hotel-serenity-shores', 'hotel-infinity', 'hotel-palm-breeze'], rating: '4.8',
    tagline: 'A coastal hideaway made for easy days.',
    description: 'Wake up to a relaxed coastal atmosphere at Serenity Shores. This inviting stay gives you space to slow down, enjoy the outdoors and plan your next Sydney adventure.',
    features: ['Coastal-inspired setting', 'Private outdoor space', 'Relaxed lounge areas', 'A calm base for exploring'],
  },
  'azure-haven': {
    name: 'Azure Haven', price: '$8,000', location: 'Barcelona, Spain', destination: 'barcelona', destinationName: 'Barcelona', image: 'hotel-azure-haven', gallery: ['hotel-azure-haven', 'hotel-la-maison', 'hotel-infinity'], rating: '4.8',
    tagline: 'A bright villa where indoor and outdoor living meet.',
    description: 'Azure Haven brings clean modern lines, a welcoming pool and open views together. Enjoy a quiet moment at home, then head out to make the most of Barcelona and the coast.',
    features: ['Private swimming pool', 'Open-plan villa', 'Sun terrace', 'Contemporary interiors'],
  },
  'ocean-breeze': {
    name: 'Ocean Breeze', price: '$7,000', location: 'Bali, Indonesia', destination: 'bali', destinationName: 'Bali', image: 'hotel-ocean-breeze', gallery: ['hotel-ocean-breeze', 'hotel-sanctuary', 'hotel-serenity-shores'], rating: '4.8',
    tagline: 'An easygoing stay with a little more time by the water.',
    description: 'Ocean Breeze is a welcoming place to pause between island adventures. Spend the day outside, cool off in the pool and enjoy a comfortable, light-filled retreat in Bali.',
    features: ['Poolside afternoons', 'Bright open spaces', 'Relaxed island feel', 'Outdoor lounge area'],
  },
  'palm-breeze': {
    name: 'Palm Breeze', price: '$6,000', location: 'Phuket, Thailand', destination: 'phuket', destinationName: 'Phuket', image: 'hotel-palm-breeze', gallery: ['hotel-palm-breeze', 'hotel-oasis', 'hotel-sanctuary'], rating: '4.8',
    tagline: 'A tropical home base for sunny Phuket days.',
    description: 'Palm Breeze sets the tone for a relaxed island break, with a private pool and tropical surroundings. Recharge here after a day exploring Phuket’s beaches, local food and coastal scenery.',
    features: ['Private pool', 'Palm-lined setting', 'Outdoor seating', 'A relaxed island base'],
  },
}

const slug = window.location.pathname.replace(/\/+$/, '').split('/').pop()
const stay = computed(() => stays[slug] || stays['the-oasis'])
const checkIn = ref('')
const checkOut = ref('')
const availabilityError = ref('')
const showStaySummary = ref(false)
const today = new Date().toISOString().slice(0, 10)
const formattedDates = computed(() => {
  const format = value => new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(new Date(`${value}T12:00:00`))
  return `${format(checkIn.value)} – ${format(checkOut.value)}`
})
function checkAvailability() {
  availabilityError.value = ''
  showStaySummary.value = false
  if (!checkIn.value || !checkOut.value) {
    availabilityError.value = 'Choose check-in and check-out dates to see your stay details.'
    return
  }
  if (checkOut.value <= checkIn.value) {
    availabilityError.value = 'Check-out must be later than check-in.'
    return
  }
  showStaySummary.value = true
}
</script>

<template>
  <main class="stay-page">
    <section class="stay-top">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/#top-book">Top stays</a><span>/</span><span>{{ stay.name }}</span></nav>
        <div class="stay-heading">
          <div><p class="eyebrow">A PLACE TO MAKE YOUR OWN</p><h1>{{ stay.name }}</h1><p class="tagline">{{ stay.tagline }}</p></div>
          <div class="heading-meta"><span class="rating"><b>★</b> {{ stay.rating }}</span><span>{{ stay.location }}</span></div>
        </div>
        <div class="gallery">
          <img class="gallery-main" :src="img(stay.gallery[0])" :alt="`${stay.name} exterior`" />
          <img class="gallery-side" :src="img(stay.gallery[1])" :alt="`${stay.name} outdoor area`" />
          <img class="gallery-side last" :src="img(stay.gallery[2])" :alt="`${stay.name} pool and lounge`" />
          <span class="photo-count">A closer look</span>
        </div>
      </div>
    </section>

    <section class="stay-body-section">
      <div class="container stay-layout">
        <div class="stay-details">
          <p class="eyebrow">THE STAY</p>
          <h2>Space to settle in.<br />Room to explore.</h2>
          <p class="description">{{ stay.description }}</p>
          <div class="feature-list"><span v-for="feature in stay.features" :key="feature"><i aria-hidden="true">✓</i>{{ feature }}</span></div>
          <div class="destination-note"><div><p class="eyebrow">EXPLORE NEARBY</p><h3>{{ stay.destinationName }}</h3><p>Find more places and inspiration for your stay in {{ stay.destinationName }}.</p></div><a :href="`/destinations/${stay.destination}`" :aria-label="`Explore ${stay.destinationName}`">↗</a></div>
        </div>

        <aside class="booking-card">
          <div class="price"><strong>{{ stay.price }}</strong><span>starting price</span></div>
          <p class="booking-copy">Choose your dates to start planning a stay at {{ stay.name }}.</p>
          <form @submit.prevent="checkAvailability">
            <label>Check in<input v-model="checkIn" type="date" :min="today" aria-label="Check in date" /></label>
            <label>Check out<input v-model="checkOut" type="date" :min="checkIn || today" aria-label="Check out date" /></label>
            <button type="submit">Check availability <span aria-hidden="true">→</span></button>
          </form>
          <p v-if="availabilityError" class="availability-error" role="alert">{{ availabilityError }}</p>
          <div v-if="showStaySummary" class="availability-result" aria-live="polite">
            <h3>Your stay details</h3>
            <dl><div><dt>Property</dt><dd>{{ stay.name }}</dd></div><div><dt>Dates</dt><dd>{{ formattedDates }}</dd></div><div><dt>Location</dt><dd>{{ stay.location }}</dd></div><div><dt>Starting price</dt><dd>{{ stay.price }}</dd></div></dl>
            <small>Displayed price is a guide; live room availability is not connected yet.</small>
          </div>
          <small>Prices and availability may change with your travel dates.</small>
        </aside>
      </div>
    </section>

    <section class="stay-end">
      <div class="container end-inner"><div><p class="eyebrow">YOUR NEXT GETAWAY</p><h2>Make this your<br />place in {{ stay.destinationName }}.</h2></div><a :href="`/destinations/${stay.destination}`">Explore {{ stay.destinationName }} <span aria-hidden="true">→</span></a></div>
    </section>
  </main>
</template>

<style scoped>
.stay-top{padding:116px 0 0;background:#f8fafb}
.crumbs{display:flex;align-items:center;gap:10px;color:#88929a;font-size:12px}.crumbs a:hover{color:var(--teal)}.crumbs span:last-child{color:#34424b}
.stay-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:28px;padding:40px 0 28px}
.eyebrow{margin-bottom:12px;color:var(--teal);font-size:11px;font-weight:600;letter-spacing:.15em}
h1{color:#111c25;font-size:clamp(42px,6vw,70px);font-weight:700;letter-spacing:-.05em;line-height:1.04}
.tagline{margin-top:10px;color:#68747d;font-size:16px;line-height:1.5}
.heading-meta{display:flex;align-items:center;gap:16px;padding-bottom:5px;color:#68747d;font-size:13px}.rating{display:flex;align-items:center;gap:5px;color:#17242c;font-weight:600}.rating b{color:#edae35;font-size:17px}
.gallery{position:relative;display:grid;grid-template-columns:1.6fr 1fr;grid-template-rows:repeat(2,190px);gap:12px;overflow:hidden;border-radius:20px}
.gallery img{width:100%;height:100%;object-fit:cover;background:#e8eff1}.gallery-main{grid-row:span 2}.gallery-side{min-height:0}.photo-count{position:absolute;right:18px;bottom:18px;padding:8px 13px;border-radius:999px;background:#081923bd;color:#fff;font-size:11px;font-weight:500}
.stay-body-section{padding:84px 0 96px}.stay-layout{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:80px;align-items:start}
.stay-details h2{color:#14212a;font-size:clamp(30px,3.5vw,42px);font-weight:700;line-height:1.16;letter-spacing:-.04em}
.description{max-width:690px;margin-top:20px;color:#68747d;font-size:15px;line-height:1.8}
.feature-list{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:30px}.feature-list span{display:flex;align-items:center;gap:10px;color:#37444d;font-size:13px}.feature-list i{display:grid;place-items:center;width:23px;height:23px;border-radius:50%;background:#e7f4f6;color:var(--teal);font-size:12px;font-style:normal;font-weight:700}
.destination-note{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:48px;padding:24px;border:1px solid #e7ecee;border-radius:16px;background:#fafcfc}.destination-note .eyebrow{margin-bottom:6px}.destination-note h3{color:#1b2831;font-size:21px;font-weight:600}.destination-note p:not(.eyebrow){margin-top:6px;color:#78838b;font-size:13px;line-height:1.6}.destination-note>a{display:grid;place-items:center;width:40px;height:40px;flex:none;border-radius:50%;background:var(--teal);color:#fff;font-size:18px}
.booking-card{position:sticky;top:24px;padding:26px;border:1px solid #e8edef;border-radius:18px;background:#fff;box-shadow:0 12px 32px #1c35420c}
.price{display:flex;align-items:baseline;gap:8px}.price strong{color:#101c25;font-size:30px;font-weight:700}.price span{color:#7d8790;font-size:12px}.booking-copy{margin-top:10px;color:#758089;font-size:13px;line-height:1.6}
.booking-card form{display:grid;gap:12px;margin-top:22px}.booking-card label{display:grid;gap:7px;color:#44515a;font-size:11px;font-weight:600}.booking-card input{width:100%;height:42px;padding:0 12px;border:1px solid #e1e7e9;border-radius:9px;background:#fff;color:#49545d;font:400 12px 'Poppins',sans-serif}
.booking-card button{display:flex;align-items:center;justify-content:center;gap:14px;height:46px;margin-top:4px;border-radius:999px;background:var(--teal);color:#fff;font-size:13px;font-weight:600;transition:background .2s}.booking-card button:hover{background:#006b7b}.booking-card>small{display:block;margin-top:14px;color:#929ba2;font-size:10px;line-height:1.5}
.availability-error{margin-top:12px;color:#b43b3b;font-size:12px;line-height:1.5}
.availability-result{margin-top:16px;padding:15px;border:1px solid #d9ecee;border-radius:12px;background:#f2fafb}.availability-result h3{margin:0;color:#17313a;font-size:14px;font-weight:600}.availability-result dl{display:grid;gap:9px;margin-top:12px}.availability-result dl div{display:flex;justify-content:space-between;gap:12px;font-size:11px}.availability-result dt{color:#7b878e}.availability-result dd{color:#283940;text-align:right;font-weight:600}.availability-result>small{display:block;margin-top:12px;color:#849197;font-size:10px;line-height:1.5}
.stay-end{padding:64px 0;background:#edf7f8}.end-inner{display:flex;align-items:center;justify-content:space-between;gap:24px}.stay-end .eyebrow{margin-bottom:10px}.stay-end h2{color:#14212a;font-size:clamp(30px,4vw,44px);line-height:1.15;letter-spacing:-.04em}.stay-end a{display:inline-flex;align-items:center;gap:14px;padding:14px 20px;border-radius:999px;background:var(--teal);color:#fff;font-size:13px;font-weight:600}
@media(max-width:900px){.stay-top{padding-top:108px}.gallery{grid-template-rows:repeat(2,150px)}.stay-body-section{padding:68px 0 76px}.stay-layout{grid-template-columns:minmax(0,1fr) 300px;gap:36px}.booking-card{padding:22px}}
@media(max-width:640px){.stay-top{padding-top:96px}.crumbs{gap:7px;font-size:11px}.stay-heading{align-items:flex-start;flex-direction:column;padding:32px 0 22px}.heading-meta{gap:12px;padding:0;font-size:12px}.gallery{grid-template-columns:1fr 1fr;grid-template-rows:240px 130px;gap:8px;border-radius:14px}.gallery-main{grid-column:span 2;grid-row:auto}.photo-count{right:12px;bottom:12px}.stay-body-section{padding:56px 0 64px}.stay-layout{grid-template-columns:1fr;gap:32px}.description{font-size:14px}.feature-list{gap:13px 10px}.feature-list span{font-size:12px}.destination-note{margin-top:34px;padding:18px}.booking-card{position:static;padding:22px}.end-inner{align-items:flex-start;flex-direction:column}.stay-end{padding:52px 0}.stay-end a{margin-top:2px}}
@media(max-width:380px){.gallery{grid-template-rows:200px 110px}.feature-list{grid-template-columns:1fr}}
</style>
