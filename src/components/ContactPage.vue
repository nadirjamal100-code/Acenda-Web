<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', topic: '', message: '' })
const status = ref('')
function submitMessage() {
  status.value = `Thanks, ${form.name}. Your message is ready, but message delivery is not connected yet.`
}
</script>

<template>
  <main class="contact-page">
    <section class="contact-hero" :style="{ backgroundImage: `linear-gradient(90deg, rgba(4, 25, 36, .78), rgba(4, 25, 36, .22)), url('/destinations-banner.webp')` }">
      <div class="container hero-inner"><p class="eyebrow">WE’RE HERE TO HELP</p><h1>Let’s talk about<br />your next escape.</h1><p>Questions about Acenda or need a little inspiration? Send us a note and we’ll point you in the right direction.</p></div>
    </section>

    <section class="contact-content"><div class="container contact-grid">
      <div class="contact-aside"><p class="eyebrow">GET IN TOUCH</p><h2>We’d love to<br />hear from you.</h2><p class="aside-copy">Whether you are planning a trip, browsing stays or just exploring, these helpful links are a good place to start.</p>
        <a href="/faq" class="help-link"><span class="link-icon">?</span><span><b>Visit our FAQs</b><small>Quick answers about browsing and stays</small></span><i aria-hidden="true">↗</i></a>
        <a href="/destinations" class="help-link"><span class="link-icon">⌖</span><span><b>Explore destinations</b><small>Find inspiration for your next escape</small></span><i aria-hidden="true">↗</i></a>
        <a href="/about" class="help-link"><span class="link-icon">A</span><span><b>Get to know Acenda</b><small>Learn more about our way of travel</small></span><i aria-hidden="true">↗</i></a>
        <div class="note-card"><span aria-hidden="true">✦</span><p>Tell us a little about what you’re looking for and we’ll help you find your next step.</p></div>
      </div>

      <form class="contact-form" @submit.prevent="submitMessage">
        <div class="form-heading"><p class="eyebrow">SEND A MESSAGE</p><h2>How can we help?</h2><p>Fill in the details below and we’ll take it from there.</p></div>
        <div class="field-row"><label>Your name<input v-model.trim="form.name" type="text" autocomplete="name" placeholder="e.g. Alex Morgan" required /></label><label>Email address<input v-model.trim="form.email" type="email" autocomplete="email" placeholder="you@example.com" required /></label></div>
        <label>What can we help with?<select v-model="form.topic" required><option value="" disabled>Select a topic</option><option>Planning a trip</option><option>Finding a stay</option><option>Website feedback</option><option>Something else</option></select></label>
        <label>Your message<textarea v-model.trim="form.message" rows="5" placeholder="Tell us a little about what you need…" required /></label>
        <button type="submit">Prepare message <span aria-hidden="true">→</span></button>
        <p class="form-note">This contact form is a demo and does not send messages yet.</p>
        <p v-if="status" class="form-status" role="status">{{ status }}</p>
      </form>
    </div></section>

    <section class="contact-bottom"><div class="container bottom-inner"><div><p class="eyebrow">READY WHEN YOU ARE</p><h2>Your next great stay<br />is out there.</h2></div><a href="/destinations">Explore destinations <span aria-hidden="true">→</span></a></div></section>
  </main>
</template>

<style scoped>
.contact-hero{min-height:490px;display:flex;align-items:center;background-size:cover;background-position:center 50%;color:#fff}.hero-inner{padding-top:112px;padding-bottom:68px}.eyebrow{margin-bottom:13px;color:var(--teal);font-size:11px;font-weight:600;letter-spacing:.15em}.contact-hero .eyebrow{color:#c9eef0}.contact-hero h1{font-size:clamp(44px,6vw,72px);font-weight:700;line-height:1.04;letter-spacing:-.05em}.contact-hero .hero-inner>p:last-child{max-width:520px;margin-top:19px;color:#f0f7f8;font-size:15px;line-height:1.7}
.contact-content{padding:96px 0 108px}.contact-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:90px;align-items:start}.contact-aside h2,.form-heading h2,.contact-bottom h2{color:#14212a;font-size:clamp(32px,4vw,46px);font-weight:700;line-height:1.12;letter-spacing:-.04em}.aside-copy{max-width:400px;margin-top:18px;color:#6e7981;font-size:14px;line-height:1.8}
.help-link{display:grid;grid-template-columns:42px 1fr auto;gap:14px;align-items:center;padding:17px 0;border-bottom:1px solid #e9eef0;color:inherit;text-decoration:none}.help-link:first-of-type{margin-top:28px;border-top:1px solid #e9eef0}.link-icon{display:grid;place-items:center;width:40px;height:40px;border-radius:12px;background:#eaf5f6;color:var(--teal);font-size:18px;font-weight:600}.help-link>span:nth-child(2){display:grid;gap:4px}.help-link b{color:#25323a;font-size:13px;font-weight:600}.help-link small{color:#7d878e;font-size:11px}.help-link>i{color:var(--teal);font-size:17px;font-style:normal;transition:transform .2s}.help-link:hover>i{transform:translate(2px,-2px)}
.note-card{display:flex;align-items:flex-start;gap:12px;margin-top:25px;padding:18px;border-radius:13px;background:#eff7f8}.note-card>span{color:var(--teal);font-size:18px}.note-card p{color:#5f7078;font-size:12px;line-height:1.7}
.contact-form{display:grid;gap:18px;padding:32px;border:1px solid #e7edef;border-radius:18px;background:#fff;box-shadow:0 16px 42px #1634400b}.form-heading{margin-bottom:2px}.form-heading .eyebrow{margin-bottom:8px}.form-heading h2{font-size:28px}.form-heading>p:last-child{margin-top:8px;color:#77828a;font-size:13px}.contact-form label{display:grid;gap:8px;color:#3e4d55;font-size:12px;font-weight:600}.field-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}.contact-form input,.contact-form select,.contact-form textarea{width:100%;border:1px solid #dfe7e9;border-radius:10px;background:#fff;color:#28363d;font:400 13px 'Poppins',sans-serif;transition:border-color .2s,box-shadow .2s}.contact-form input,.contact-form select{height:46px;padding:0 13px}.contact-form textarea{min-height:130px;padding:12px 13px;resize:vertical;line-height:1.6}.contact-form input::placeholder,.contact-form textarea::placeholder{color:#a0a9ae}.contact-form input:focus,.contact-form select:focus,.contact-form textarea:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 3px #0e8fc018}.contact-form button{display:flex;align-items:center;justify-content:center;gap:14px;height:48px;border-radius:999px;background:var(--teal);color:#fff;font-size:13px;font-weight:600;transition:background .2s,transform .2s}.contact-form button:hover{transform:translateY(-1px);background:#006b7b}.form-note{color:#8b959c;font-size:10px;line-height:1.5}.form-status{padding:12px 14px;border-radius:10px;background:#eef8f5;color:#16745f;font-size:12px;line-height:1.6}
.contact-bottom{padding:64px 0;background:#eff7f8}.bottom-inner{display:flex;align-items:center;justify-content:space-between;gap:24px}.contact-bottom .eyebrow{margin-bottom:10px}.contact-bottom h2{font-size:clamp(30px,4vw,42px)}.contact-bottom a{display:inline-flex;align-items:center;gap:14px;padding:14px 20px;border-radius:999px;background:var(--teal);color:#fff;font-size:13px;font-weight:600}
@media(max-width:900px){.contact-content{padding:76px 0}.contact-grid{grid-template-columns:.9fr 1.1fr;gap:40px}.contact-form{padding:25px}}
@media(max-width:640px){.contact-hero{min-height:460px;background-position:58% center}.hero-inner{padding-top:100px;padding-bottom:54px}.contact-hero .hero-inner>p:last-child{font-size:14px}.contact-content{padding:58px 0 68px}.contact-grid{grid-template-columns:1fr;gap:34px}.contact-aside h2{font-size:36px}.aside-copy{font-size:13px}.contact-form{gap:15px;padding:20px;border-radius:15px}.form-heading h2{font-size:25px}.field-row{grid-template-columns:1fr;gap:15px}.contact-bottom{padding:52px 0}.bottom-inner{align-items:flex-start;flex-direction:column}.contact-bottom a{margin-top:3px}}
</style>
