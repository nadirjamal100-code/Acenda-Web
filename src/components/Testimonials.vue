<script setup>
import { computed, ref } from 'vue'
import { img } from '../assets/images'

const items = [
  { name: 'Sebastian', role: 'Graphic designer', avatar: 'avatar-sebastian', quote: 'The booking was quick and easy, and the stay was even better than expected. I’ll definitely use Acenda again.' },
  { name: 'Evangeline', role: 'Model', avatar: 'avatar-evangeline', quote: 'Finding a beautiful place for our trip was simple. The photos and details made choosing the right stay easy.' },
  { name: 'Alexander', role: 'Software engineer', avatar: 'avatar-alexander', quote: 'A smooth experience from browsing to check in. There were plenty of great places to choose from.' },
  { name: 'Olivia', role: 'Travel writer', initials: 'O', quote: 'I found a lovely resort at a great price. The whole process was clear, and the trip went perfectly.' },
  { name: 'Nathan', role: 'Photographer', initials: 'N', quote: 'The listing matched the property, and booking took only a few minutes. Acenda made planning much easier.' },
]
const idx = ref(0)
const visibleItems = computed(() => Array.from({ length: 3 }, (_, i) => items[(idx.value + i) % items.length]))
</script>

<template>
  <section class="ts" :style="{ backgroundImage: `linear-gradient(#0008,#0008),url(${img('testimonials-bg')})` }">
    <div class="container">
      <div class="head">
        <h2>Testimonials</h2>
        <div class="arr">
          <button aria-label="Previous" @click="idx = (idx + items.length - 1) % items.length">‹</button>
          <button aria-label="Next" @click="idx = (idx + 1) % items.length">›</button>
        </div>
      </div>
      <div class="grid">
        <article v-for="(t, i) in visibleItems" :key="t.name" class="c" :class="{ cur: i === 0 }">
          <img v-if="t.avatar" :src="img(t.avatar)" :alt="t.name" class="av" loading="lazy" />
          <span v-else class="av initials" aria-hidden="true">{{ t.initials }}</span>
          <div class="meta">
            <div><b>{{ t.name }}</b><small>{{ t.role }}</small></div>
            <span class="st" aria-label="5 stars">★★★★★</span>
          </div>
          <p>{{ t.quote }}</p>
        </article>
      </div>
      <div class="pg"><i v-for="n in items.length" :key="n" :class="{ on: n === idx + 1 }" /></div>
    </div>
  </section>
</template>

<style scoped>
.ts{padding:56px 0 48px;background-size:cover;background-position:center;color:#fff}
.head{display:flex;justify-content:space-between;align-items:center}
h2{font-size:32px;font-weight:700}
.arr{display:flex;gap:8px}.arr button{width:40px;height:40px;border:1px solid #fff;border-radius:8px;font-size:22px;color:#fff;line-height:1;transition:background .2s}.arr button:hover{background:#fff3}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:24px}
.c{position:relative;background:#fff;color:var(--text);border-radius:16px;padding:44px 24px 24px;margin-top:32px;transition:transform .3s}
.c.cur{transform:translateY(-4px)}
.av{position:absolute;top:-36px;left:24px;width:72px;height:72px;border-radius:50%;object-fit:cover;background:#fff}
.initials{display:grid;place-items:center;background:#dff1f5;color:#087e97;font-weight:600;font-size:24px}
.meta{display:flex;justify-content:space-between;align-items:flex-start}
b{display:block;font-size:12px;font-weight:600}small{font-size:10px;color:var(--muted)}
.st{color:#f5a623;font-size:12px;letter-spacing:1px}
p{font-size:12px;color:#444;line-height:1.7;margin-top:12px}
.pg{display:flex;justify-content:center;gap:6px;margin-top:32px}.pg i{width:6px;height:6px;border-radius:50%;background:#fff6}.pg .on{background:#fff}
@media(max-width:1023px){.grid{grid-template-columns:repeat(2,1fr)}.c:nth-child(3){display:none}}
@media(max-width:767px){.grid{grid-template-columns:1fr}.c:nth-child(2){display:none}.c:nth-child(3){display:none}h2{font-size:24px}}
</style>
