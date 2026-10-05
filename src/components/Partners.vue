<script setup>
const partners = [
  { name: 'Cozybnb', mark: '<path d="M3 12.5 12 5l9 7.5M6.5 11v8h11v-8M10 19v-5h4v5" />' },
  { name: 'Serendipity', mark: '<path d="M3 6.5 11 4v14l-8 2.5zM13 4.5 21 6v14l-8-1.5z" />' },
  { name: 'Hideaway', mark: '<path d="m3 18 7-12 7 12M8 18l7-12 6 10M12 18l5-8 4 7" />' },
  { name: 'Earthly', mark: '<path d="m4 17 7-12 9 12H4Z"/><path d="m10 14 3-5 4 5h-7Z"/>' },
  { name: 'The Nook', mark: '<circle cx="11.5" cy="12" r="8"/><ellipse cx="11.5" cy="12" rx="3.5" ry="8" transform="rotate(-45 11.5 12)"/>' },
  { name: 'Homestay', mark: '<path d="M3 12 9 6v12l-6 3zM15 6h6v12h-6M12 9h2v9h-2" />' },
]
const list = [...partners, ...partners]
</script>

<template>
  <section class="partners" aria-labelledby="partners-title">
    <h2 id="partners-title" class="section-title">Our partners</h2>
    <div class="track" aria-label="Our booking partners">
      <div class="row">
        <span v-for="(partner, i) in list" :key="`${partner.name}-${i}`" class="partner" :aria-hidden="i >= partners.length">
          <svg class="mark" viewBox="0 0 24 24" aria-hidden="true" v-html="partner.mark" />
          <span>{{ partner.name }}</span>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners{padding:128px 0 0;overflow:hidden}
.track{margin-top:40px}
.row{display:flex;align-items:center;gap:56px;width:max-content;animation:slide 34s linear infinite}
.track:hover .row{animation-play-state:paused}
.partner{display:flex;align-items:center;gap:8px;color:#666;white-space:nowrap;font-size:18px;font-weight:400;line-height:1}
.mark{width:30px;height:30px;flex:none;fill:none;stroke:currentColor;stroke-width:1.45;stroke-linecap:round;stroke-linejoin:round}
@keyframes slide{to{transform:translateX(-50%)}}
@media(max-width:767px){.partners{padding-top:80px}.track{margin-top:32px}.partner{font-size:15px}.mark{width:25px;height:25px}.row{gap:36px}}
@media(prefers-reduced-motion:reduce){.row{animation:none}}
</style>
