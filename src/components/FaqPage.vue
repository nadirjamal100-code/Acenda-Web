<script setup>
import { computed, ref } from 'vue'

const categories = ['All questions', 'Booking', 'Your stay', 'Payments', 'Planning']
const questions = [
  { id: 'browse', category: 'Booking', question: 'How do I find a place to stay?', answer: 'Browse the featured stays on Acenda or explore a destination first. Open any property card to see its photos, location, details and starting price.' },
  { id: 'availability', category: 'Booking', question: 'How can I check a property’s availability?', answer: 'Open the property page and select your check-in and check-out dates. Acenda will show a summary of the stay details you selected. Live room inventory is not connected yet, so the summary does not confirm a reservation.' },
  { id: 'book', category: 'Booking', question: 'Can I book a stay directly on Acenda?', answer: 'The current Acenda experience helps you explore properties and review stay details. Online checkout and reservation confirmation are not available yet.' },
  { id: 'price', category: 'Payments', question: 'What does the price on a stay card mean?', answer: 'The listed amount is a guide price shown for that property. Final rates can depend on your travel dates and booking details.' },
  { id: 'payment', category: 'Payments', question: 'Which payment methods can I use?', answer: 'The footer shows example payment methods supported in the Acenda design. Payment processing is not connected in this version of the site.' },
  { id: 'amenities', category: 'Your stay', question: 'Where can I find a property’s features?', answer: 'Open a property card to see its photos, overview and highlights. Review the details on each property page when deciding whether it suits your trip.' },
  { id: 'dates', category: 'Planning', question: 'Can I change my travel dates after checking them?', answer: 'Yes. Update the check-in or check-out fields on the property page and select “Check availability” again to refresh the stay summary.' },
  { id: 'destination', category: 'Planning', question: 'How do I explore a destination?', answer: 'Choose Destinations in the navigation, filter by region, then open a destination card for local inspiration and suggested places to stay.' },
  { id: 'cancel', category: 'Booking', question: 'What is the cancellation policy?', answer: 'Cancellation terms depend on the property and booking provider. Acenda does not process reservations in this version, so no cancellation policy is applied here.' },
  { id: 'contact', category: 'Planning', question: 'How can I get in touch?', answer: 'Use the Contact section in the footer to find the site’s contact links. For questions about a future reservation, contact the booking provider shown with that reservation.' },
]

const selectedCategory = ref('All questions')
const search = ref('')
const openId = ref('browse')
const filteredQuestions = computed(() => {
  const query = search.value.trim().toLowerCase()
  return questions.filter(item => {
    const matchesCategory = selectedCategory.value === 'All questions' || item.category === selectedCategory.value
    const matchesSearch = !query || `${item.question} ${item.answer} ${item.category}`.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })
})

function toggleQuestion(id) {
  openId.value = openId.value === id ? '' : id
}
</script>

<template>
  <main class="faq-page">
    <section class="faq-hero"><div class="container hero-inner"><p class="eyebrow">HERE TO HELP</p><h1>Frequently asked<br class="desktop-break" /> questions.</h1><p>Quick answers to help you plan your next Acenda escape.</p>
      <label class="search-box"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg><input v-model="search" type="search" placeholder="Search a question" aria-label="Search frequently asked questions"/><kbd>⌕</kbd></label>
    </div></section>

    <section class="faq-content"><div class="container">
      <div class="category-row" role="group" aria-label="Filter questions by category"><button v-for="category in categories" :key="category" :class="{active:selectedCategory===category}" @click="selectedCategory=category">{{ category }}</button></div>
      <div class="faq-layout">
        <div class="faq-list">
          <p class="results-label">{{ filteredQuestions.length }} {{ filteredQuestions.length === 1 ? 'answer' : 'answers' }}</p>
          <article v-for="item in filteredQuestions" :key="item.id" class="faq-item" :class="{expanded:openId===item.id}">
            <button class="question" :aria-expanded="openId===item.id" :aria-controls="`answer-${item.id}`" @click="toggleQuestion(item.id)"><span><small>{{ item.category }}</small><b>{{ item.question }}</b></span><i aria-hidden="true"><span/><span/></i></button>
            <Transition name="faq-answer"><div v-if="openId===item.id" :id="`answer-${item.id}`" class="answer"><p>{{ item.answer }}</p></div></Transition>
          </article>
          <div v-if="!filteredQuestions.length" class="empty-state"><span>?</span><h2>No answers found</h2><p>Try a different search or choose another category.</p><button @click="search='';selectedCategory='All questions'">Clear filters</button></div>
        </div>
        <aside class="help-card"><span class="help-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-5 4v-4.5A2.5 2.5 0 0 1 4 13.5Z"/><path d="M8 8h8M8 11.5h5"/></svg></span><p class="eyebrow">STILL NEED A HAND?</p><h2>We’re happy to help.</h2><p>Find more about Acenda and how the stay browsing experience works.</p><a href="/#contact">Get in touch <span aria-hidden="true">→</span></a></aside>
      </div>
    </div></section>
  </main>
</template>

<style scoped>
.faq-hero{padding:156px 0 70px;background:linear-gradient(135deg,#edf7f8 0%,#f8fbfb 62%,#eaf5f6 100%)}
.hero-inner{max-width:calc(900px + 48px);text-align:center}.eyebrow{margin-bottom:13px;color:var(--teal);font-size:11px;font-weight:600;letter-spacing:.15em}
h1{color:#13212a;font-size:clamp(42px,6vw,70px);line-height:1.05;letter-spacing:-.05em;font-weight:700}.hero-inner>p:not(.eyebrow){margin-top:16px;color:#687780;font-size:15px;line-height:1.6}
.search-box{display:flex;align-items:center;gap:12px;width:min(100%,560px);height:56px;margin:30px auto 0;padding:0 16px;border:1px solid #e1e9eb;border-radius:14px;background:#fff;box-shadow:0 8px 24px #1739470b;text-align:left}.search-box svg{width:20px;height:20px;fill:none;stroke:#839199;stroke-width:1.6;stroke-linecap:round}.search-box input{flex:1;min-width:0;border:0;outline:0;background:transparent;color:#26343c;font:400 13px 'Poppins',sans-serif}.search-box input::placeholder{color:#9aa4aa}.search-box kbd{display:grid;place-items:center;width:27px;height:27px;border-radius:8px;background:#f2f6f7;color:#879399;font-size:13px}
.faq-content{padding:54px 0 104px}.category-row{display:flex;gap:9px;overflow-x:auto;padding-bottom:30px;scrollbar-width:none}.category-row::-webkit-scrollbar{display:none}.category-row button{flex:none;padding:10px 16px;border:1px solid #dfe7e9;border-radius:999px;color:#56626a;font-size:12px;font-weight:500;transition:all .2s}.category-row button:hover{border-color:#9ecbd2;color:var(--teal)}.category-row button.active{border-color:var(--teal);background:var(--teal);color:#fff}
.faq-layout{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:42px;align-items:start}.results-label{margin-bottom:12px;color:#849099;font-size:11px}.faq-item{margin-bottom:10px;border:1px solid #e8edef;border-radius:14px;background:#fff;transition:border-color .2s,box-shadow .2s}.faq-item.expanded{border-color:#cde3e6;box-shadow:0 8px 22px #18323e09}.question{display:flex;align-items:center;justify-content:space-between;gap:18px;width:100%;padding:18px 20px;text-align:left}.question>span{display:grid;gap:5px}.question small{color:var(--teal);font-size:10px;font-weight:600}.question b{color:#22313a;font-size:14px;font-weight:600;line-height:1.45}.question i{display:grid;place-items:center;width:30px;height:30px;flex:none;border-radius:50%;background:#edf6f7;color:var(--teal);font-size:18px;font-style:normal;transition:transform .2s}.expanded .question i{transform:rotate(180deg)}.answer{padding:0 20px 18px}.answer p{max-width:720px;color:#6c7880;font-size:13px;line-height:1.75}
.help-card{position:sticky;top:24px;padding:25px;border-radius:16px;background:#eff7f8}.help-icon{display:grid;place-items:center;width:44px;height:44px;margin-bottom:22px;border-radius:13px;background:#dceff1;color:var(--teal)}.help-icon svg{width:23px;height:23px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}.help-card .eyebrow{margin-bottom:7px}.help-card h2{color:#18262e;font-size:21px;line-height:1.3;font-weight:600}.help-card>p:not(.eyebrow){margin-top:10px;color:#75818a;font-size:12px;line-height:1.7}.help-card>a{display:inline-flex;align-items:center;gap:10px;margin-top:19px;color:var(--teal);font-size:12px;font-weight:600}.help-card>a span{transition:transform .2s}.help-card>a:hover span{transform:translateX(4px)}
.empty-state{display:grid;justify-items:center;padding:55px 20px;border:1px dashed #d9e3e5;border-radius:16px;text-align:center}.empty-state>span{display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:#eff7f8;color:var(--teal);font-size:21px}.empty-state h2{margin-top:14px;color:#23313a;font-size:20px}.empty-state p{margin-top:6px;color:#7a858c;font-size:13px}.empty-state button{margin-top:16px;color:var(--teal);font-size:12px;font-weight:600}
@media(max-width:850px){.faq-layout{grid-template-columns:minmax(0,1fr) 250px;gap:24px}.help-card{padding:20px}}
.question i{position:relative;transition:background .2s ease}.question i span{position:absolute;width:12px;height:1.5px;border-radius:2px;background:currentColor;transition:transform .22s ease,opacity .18s ease}.question i span+span{transform:rotate(90deg)}.expanded .question i span+span{transform:rotate(90deg) scaleX(0);opacity:0}
.faq-answer-enter-active,.faq-answer-leave-active{overflow:hidden;transition:max-height .32s cubic-bezier(.2,.7,.25,1),opacity .22s ease,padding .32s cubic-bezier(.2,.7,.25,1)}.faq-answer-enter-from,.faq-answer-leave-to{max-height:0;opacity:0;padding-top:0;padding-bottom:0}.faq-answer-enter-to,.faq-answer-leave-from{max-height:240px;opacity:1}
.category-row button{cursor:pointer}.category-row button:hover{transform:translateY(-2px)}
.faq-item{transition:transform .2s,border-color .2s,box-shadow .2s}.faq-item:hover{transform:translateY(-1px);box-shadow:0 8px 22px #18323e0c}
.question{cursor:pointer;transition:background .2s}.question:hover{background:#f8fbfb}
.question i{transition:transform .2s,background .2s,color .2s}.expanded .question i{transform:scale(1.03)}.question:hover i{transform:scale(1.08);background:var(--teal);color:#fff}
.help-card>a{transition:transform .2s}.help-card>a:hover{transform:translateY(-1px)}
.category-row button:focus-visible,.question:focus-visible,.help-card>a:focus-visible{outline:3px solid var(--primary);outline-offset:3px}
@media(prefers-reduced-motion:reduce){.faq-answer-enter-active,.faq-answer-leave-active,.question i span,.faq-item,.category-row button,.help-card>a{transition-duration:.01ms;transform:none}}
@media(max-width:640px){.faq-hero{padding:128px 0 54px}.hero-inner{text-align:left}.hero-inner>p:not(.eyebrow){font-size:14px}.search-box{margin-top:24px}.faq-content{padding:36px 0 68px}.category-row{margin-right:-24px;padding-right:24px;padding-bottom:22px}.faq-layout{grid-template-columns:1fr;gap:28px}.question{padding:16px}.question b{font-size:13px}.answer{padding:0 16px 16px}.help-card{position:static}}
</style>
