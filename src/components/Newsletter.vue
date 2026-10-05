<script setup>
import { ref } from 'vue'
import { img } from '../assets/images'
const email=ref(''),msg=ref(''),ok=ref(false)
function sub(){
  ok.value=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
  msg.value=ok.value?'Thanks for subscribing!':'Please enter a valid email address.'
  if(ok.value) email.value=''
}
</script>
<template>
  <section id="contact" class="nl"><div class="container"><div class="box">
    <img :src="img('newsletter-villa')" alt="Seaside villa with pool" loading="lazy"/>
    <form @submit.prevent="sub"><h2>Get special offers,<br/>and more from travelworld</h2>
      <div class="in"><input v-model="email" type="email" placeholder="Enter your email" aria-label="Email"/><button type="submit">Subscribe</button></div>
      <p v-if="msg" :class="{ok}" role="status">{{ msg }}</p></form>
  </div></div></section>
</template>
<style scoped>
.nl{padding:72px 0 88px}
.box{display:grid;grid-template-columns:38.2% 61.8%;max-width:1120px;margin:0 auto;background:#f3f3f3;border-radius:32px;overflow:hidden;height:360px}
img{width:100%;height:100%;object-fit:cover;object-position:center 55%}
form{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:32px;text-align:center;transform:translateY(-175px)}
h2{font-size:32px;font-weight:700;line-height:1.25}
.in{display:flex;margin-top:28px;background:#fff;border-radius:999px;padding:8px;width:100%;max-width:545px;height:64px;box-shadow:0 4px 12px #00000014}
input{flex:1;min-width:0;border:0;outline:0;padding:0 18px;font:400 14px 'Poppins';background:none}
button{background:#00899b;color:#fff;font-size:14px;font-weight:600;padding:0 32px;min-width:152px;border-radius:999px;transition:filter .2s}button:hover{filter:brightness(1.15)}
p{margin-top:12px;font-size:12px;color:#c0392b}p.ok{color:var(--teal)}
@media(max-width:1199px){.box{margin:0}}
@media(max-width:767px){.nl{padding:48px 0 56px}.box{grid-template-columns:1fr;height:auto;margin:0;border-radius:24px}.box>img{height:220px}form{min-height:240px;padding:28px 20px;transform:none}h2{font-size:24px}.in{height:52px;margin-top:20px}input{font-size:12px}button{min-width:auto;padding:0 20px;font-size:12px}}
</style>
