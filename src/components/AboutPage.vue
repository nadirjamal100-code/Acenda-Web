<script setup>
import { img } from '../assets/images'

const values = [
  { title: 'A stay that feels right', copy: 'A great trip starts with a place that suits you. Explore stays chosen for their setting, character and room to unwind.', icon: '<path d="M3 11.5 12 4l9 7.5M5.5 10v10h13V10M9 20v-6h6v6"/>' },
  { title: 'The details matter', copy: 'Clear information and thoughtful touches help you choose with confidence and enjoy the little moments along the way.', icon: '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16.5 9"/>' },
  { title: 'Travel at your pace', copy: 'Every escape is different. Find ideas and places that leave space for the kind of trip you want to have.', icon: '<path d="M3 12h4l3-8 4 16 3-8h4"/>' },
]
const stats = [
  { value: '6', label: 'destinations to explore', note: 'From island shores to city breaks', icon: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>' },
  { value: '8', label: 'featured places to stay', note: 'A few good places to begin', icon: '<path d="M3 11 12 4l9 7M5 10v10h14V10M9 20v-6h6v6"/>' },
  { value: '1', label: 'trip that feels like yours', note: 'Your pace, your kind of escape', icon: '<path d="M12 3.5 14.4 9l6 1-4.4 4.2 1.1 6-5.1-2.9-5.1 2.9 1.1-6L3.6 10l6-1L12 3.5Z"/>' },
]
</script>

<template>
  <main class="about-page">
    <section class="about-hero" :style="{ backgroundImage: `linear-gradient(90deg, rgba(5, 28, 39, .72), rgba(5, 28, 39, .18)), url('/destinations-banner.webp')` }">
      <div class="container hero-inner">
        <p class="eyebrow">A LITTLE ABOUT ACENDA</p>
        <h1>Travel should feel<br />like it’s yours.</h1>
        <p class="hero-copy">We help you find thoughtful places to stay and the inspiration to make every escape your own.</p>
        <a href="/destinations" class="light-button">Explore destinations <span aria-hidden="true">→</span></a>
      </div>
    </section>

    <section class="story-section">
      <div class="container story-grid">
        <div class="story-image"><img :src="img('newsletter-villa')" alt="A calm villa beside the sea" loading="lazy" /><span>Make room for the moments that matter.</span></div>
        <div class="story-copy"><p class="eyebrow">OUR STORY</p><h2>More than a place<br />to stay.</h2><p>Acenda was built around a simple idea: choosing where to stay should be part of the joy of travelling. The right place can change the pace of a trip, bring people together and make a new destination feel familiar.</p><p>That is why we bring inspiring stays and destination ideas together in one place. Whether you are planning a slow island break or a few days in a lively city, we want it to feel easier to find somewhere that fits.</p><a href="/destinations" class="text-link">Find your next destination <span aria-hidden="true">→</span></a></div>
      </div>
    </section>

    <section class="numbers-section"><div class="container numbers-inner">
      <div class="numbers-heading"><span class="heading-rule"></span><p>ACENDA AT A GLANCE</p></div>
      <div class="numbers-grid"><article v-for="stat in stats" :key="stat.label" class="stat-card">
        <span class="stat-icon"><svg viewBox="0 0 24 24" v-html="stat.icon"/></span>
        <div class="stat-copy"><div><strong>{{ stat.value }}</strong><span>{{ stat.label }}</span></div><small>{{ stat.note }}</small></div>
      </article></div>
    </div></section>

    <section class="values-section"><div class="container">
      <div class="section-heading"><p class="eyebrow">WHAT GUIDES US</p><h2>Good trips start<br />with good choices.</h2><p>We keep the experience focused on what makes planning feel better: inspiration, clarity and the freedom to choose your own way.</p></div>
      <div class="value-grid"><article v-for="(value,index) in values" :key="value.title"><span class="value-icon"><svg viewBox="0 0 24 24" v-html="value.icon"/></span><small>0{{ index+1 }}</small><h3>{{ value.title }}</h3><p>{{ value.copy }}</p></article></div>
    </div></section>

    <section class="promise-section" :style="{ backgroundImage: `linear-gradient(90deg, rgba(5, 40, 49, .84), rgba(5, 40, 49, .36)), url(${img('explore-bg')})` }">
      <div class="container promise-inner"><p class="eyebrow">THE ACENDA WAY</p><h2>Find a place you love.<br />Make the trip your own.</h2><a href="/destinations" class="light-button">Start exploring <span aria-hidden="true">→</span></a></div>
    </section>
  </main>
</template>

<style scoped>
.about-hero{min-height:580px;display:flex;align-items:center;background-size:cover;background-position:center 52%;color:#fff}
.hero-inner{padding-top:104px;padding-bottom:68px}.eyebrow{margin-bottom:14px;color:var(--teal);font-size:11px;font-weight:600;letter-spacing:.15em}.about-hero .eyebrow,.promise-section .eyebrow{color:#c7edf0}
h1{font-size:clamp(48px,7vw,82px);line-height:1.04;letter-spacing:-.05em;font-weight:700}
.hero-copy{max-width:510px;margin-top:22px;color:#f0f7f8;font-size:16px;line-height:1.75}
.light-button{display:inline-flex;align-items:center;gap:18px;margin-top:30px;padding:14px 22px;border-radius:999px;background:#fff;color:#14242c;font-size:13px;font-weight:600;transition:transform .2s,background .2s}.light-button:hover{transform:translateY(-2px);background:#e6f5f6}
.story-section{padding:104px 0 112px}.story-grid{display:grid;grid-template-columns:1fr 1fr;gap:88px;align-items:center}
.story-image{position:relative;overflow:hidden;min-height:470px;border-radius:20px;background:#e8f0f2}.story-image img{width:100%;height:470px;object-fit:cover;object-position:center 58%}.story-image span{position:absolute;right:18px;bottom:18px;left:18px;padding:16px 18px;border:1px solid #ffffff80;border-radius:12px;background:#0d2a354d;color:#fff;font-size:13px;font-weight:500;backdrop-filter:blur(8px)}
.story-copy h2,.section-heading h2{color:#15222a;font-size:clamp(34px,4vw,48px);line-height:1.12;letter-spacing:-.04em;font-weight:700}.story-copy>p:not(.eyebrow){margin-top:18px;color:#68747d;font-size:14px;line-height:1.85}.text-link{display:inline-flex;align-items:center;gap:10px;margin-top:24px;color:var(--teal);font-size:13px;font-weight:600}.text-link span{transition:transform .2s}.text-link:hover span{transform:translateX(4px)}
.numbers-section{position:relative;isolation:isolate;overflow:hidden;padding:48px 0 54px;background:linear-gradient(112deg,#056b78 0%,#078997 48%,#087481 100%);color:#fff}
.numbers-section::before,.numbers-section::after{position:absolute;z-index:-1;content:"";pointer-events:none;border:1px solid #ffffff12;border-radius:50%}
.numbers-section::before{width:490px;height:490px;top:-310px;left:-100px;box-shadow:0 0 0 40px #ffffff05,0 0 0 90px #ffffff04}
.numbers-section::after{width:620px;height:620px;right:-240px;bottom:-510px;box-shadow:0 0 0 55px #ffffff05,0 0 0 115px #ffffff04}
.numbers-inner{position:relative}
.numbers-heading{display:flex;justify-content:center;align-items:center;gap:10px;margin-bottom:23px;color:#c9ecef;font-size:10px;font-weight:600;letter-spacing:.18em}
.heading-rule{width:25px;height:1px;background:#c9ecef99}
.numbers-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.stat-card{display:flex;align-items:center;gap:16px;min-width:0;padding:21px 23px;border:1px solid #ffffff30;border-radius:16px;background:#ffffff0d;box-shadow:inset 0 1px #ffffff12;backdrop-filter:blur(4px);transition:transform .2s,background .2s}
.stat-card:hover{transform:translateY(-3px);background:#ffffff18}
.stat-icon{position:relative;display:grid;place-items:center;width:44px;height:44px;flex:none;border:1px solid #ffffff35;border-radius:13px;background:#ffffff16;color:#fff;animation:icon-float 4s ease-in-out infinite}
.stat-card:nth-child(2) .stat-icon{animation-delay:-1.3s}.stat-card:nth-child(3) .stat-icon{animation-delay:-2.6s}
.stat-icon svg{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:1.55;stroke-linecap:round;stroke-linejoin:round}
.stat-copy{min-width:0}.stat-copy>div{display:flex;align-items:center;gap:10px}.stat-copy strong{font-size:38px;line-height:1;font-weight:700;letter-spacing:-.04em}.stat-copy>div>span{max-width:145px;color:#fff;font-size:12px;line-height:1.35;font-weight:500}.stat-copy small{display:block;margin-top:6px;color:#d3edef;font-size:10px;line-height:1.4}
@keyframes icon-float{0%,100%{transform:translateY(0);box-shadow:0 0 0 0 #ffffff00}50%{transform:translateY(-4px);box-shadow:0 8px 20px #003f4840}}
@media(prefers-reduced-motion:reduce){.stat-icon{animation:none}.stat-card{transition:none}}
.values-section{padding:104px 0 112px;background:#f6f8f8}.section-heading{max-width:640px}.section-heading h2{margin-top:-2px}.section-heading>p:last-child{max-width:550px;margin-top:16px;color:#707b83;font-size:14px;line-height:1.75}
.value-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:44px}.value-grid article{padding:28px;border:1px solid #e9edef;border-radius:16px;background:#fff}.value-icon{display:grid;place-items:center;width:48px;height:48px;border-radius:14px;background:#e7f4f6;color:var(--teal)}.value-icon svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}.value-grid small{display:block;margin-top:23px;color:var(--teal);font-size:10px;font-weight:600;letter-spacing:.13em}.value-grid h3{margin-top:7px;color:#1b2830;font-size:18px;font-weight:600}.value-grid article>p{margin-top:10px;color:#707b83;font-size:13px;line-height:1.7}
.promise-section{min-height:380px;display:flex;align-items:center;background-size:cover;background-position:center;color:#fff}.promise-inner{padding-top:60px;padding-bottom:60px}.promise-section h2{color:#fff;font-size:clamp(34px,5vw,56px);line-height:1.1;letter-spacing:-.04em}.promise-section .light-button{margin-top:24px}
@media(max-width:900px){.about-hero{min-height:520px}.story-section{padding:80px 0}.story-grid{gap:42px}.story-image,.story-image img{height:400px;min-height:400px}.values-section{padding:80px 0}.value-grid{gap:14px}.value-grid article{padding:22px}}
@media(max-width:900px){.numbers-section{padding:42px 0 46px}.numbers-grid{gap:11px}.stat-card{gap:12px;padding:18px 15px}.stat-icon{width:40px;height:40px}.stat-copy>div{align-items:flex-start;flex-direction:column;gap:4px}.stat-copy strong{font-size:34px}.stat-copy>div>span{font-size:11px}.stat-copy small{font-size:9px}}
@media(max-width:640px){.about-hero{min-height:520px;background-position:58% center}.hero-inner{padding-top:100px;padding-bottom:54px}.hero-copy{font-size:14px}.story-section{padding:60px 0 68px}.story-grid{grid-template-columns:1fr;gap:32px}.story-image,.story-image img{height:320px;min-height:320px}.story-copy h2,.section-heading h2{font-size:34px}.numbers-section{padding:30px 0 34px}.numbers-heading{margin-bottom:17px}.numbers-grid{grid-template-columns:1fr;gap:10px}.stat-card{gap:14px;padding:15px}.stat-icon{width:42px;height:42px}.stat-copy>div{align-items:center;flex-direction:row;gap:10px}.stat-copy strong{width:35px;font-size:32px}.stat-copy>div>span{max-width:none;font-size:12px}.stat-copy small{margin-top:4px;font-size:10px}.values-section{padding:62px 0 68px}.value-grid{grid-template-columns:1fr;margin-top:28px}.value-grid article{padding:22px}.value-grid small{margin-top:18px}.promise-section{min-height:320px}.promise-inner{padding-top:44px;padding-bottom:44px}}
</style>
