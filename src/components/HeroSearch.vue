<script setup>
import { reactive, ref, computed } from 'vue'
import { img } from '../assets/images'
const f = reactive({ destination:'', checkIn:'', checkOut:'', guests:1 })
const showGuests = ref(false)
const activeDate = ref('')
const calendarMonth = ref(startOfMonth(new Date()))
const guestLabel = computed(() => `${f.guests} guest${f.guests>1?'s':''}`)
const formatDate = value => value ? new Date(`${value}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Add dates'
function startOfMonth(date) { return new Date(date.getFullYear(), date.getMonth(), 1) }
function toDateKey(date) { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}` }
const today = toDateKey(new Date())
const calendarTitle = computed(() => calendarMonth.value.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }))
const calendarDays = computed(() => {
  const first = startOfMonth(calendarMonth.value)
  const offset = first.getDay()
  const count = new Date(first.getFullYear(), first.getMonth()+1, 0).getDate()
  return [...Array(offset).fill(null), ...Array.from({length:count}, (_,i) => new Date(first.getFullYear(),first.getMonth(),i+1))]
})
const calendarMin = computed(() => {
  if (activeDate.value !== 'checkOut' || !f.checkIn) return today
  const dayAfterCheckIn = new Date(`${f.checkIn}T00:00:00`)
  dayAfterCheckIn.setDate(dayAfterCheckIn.getDate() + 1)
  return toDateKey(dayAfterCheckIn)
})
function openCalendar(which) {
  if (activeDate.value === which) { activeDate.value = ''; return }
  activeDate.value = which
  const selected = f[which] || (which === 'checkOut' && f.checkIn) || today
  calendarMonth.value = startOfMonth(new Date(`${selected}T00:00:00`))
}
function chooseDate(date) {
  if (!date || toDateKey(date) < calendarMin.value) return
  f[activeDate.value] = toDateKey(date)
  if (activeDate.value === 'checkIn' && f.checkOut && f.checkOut <= f.checkIn) f.checkOut = ''
  activeDate.value = ''
}
const places = ['Bali, Indonesia','Barcelona, Spain','Sydney, Australia','Phuket, Thailand','Rio de Janeiro, Brazil','Maldives']
const result = ref('')
function submit(){
  if(f.checkIn && f.checkOut && f.checkOut < f.checkIn){ result.value='Check-out must be after check-in.'; return }
  result.value = `Searching ${f.destination || 'all destinations'} · ${f.checkIn||'any date'} → ${f.checkOut||'any date'} · ${guestLabel.value}`
}
</script>
<template>
  <section id="home" class="hero" :style="{backgroundImage:`url(${img('hero-maldives')})`}">
    <div class="container hero__in">
      <form class="card" @submit.prevent="submit">
        <h1>Good Morning!</h1>
        <p class="sub">Explore beautiful places in the world with Acenda</p>
        <div class="bar">
          <label class="field"><svg viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            <span><b>Location</b><input v-model="f.destination" list="places" placeholder="Add destination"/></span></label>
          <div class="field date-field" :class="{ 'date-field--open': activeDate === 'checkIn' }" @click="openCalendar('checkIn')" @keydown.enter.prevent="openCalendar('checkIn')" @keydown.space.prevent="openCalendar('checkIn')" tabindex="0" role="button" aria-label="Choose check-in date" :aria-expanded="activeDate === 'checkIn'"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/></svg>
            <span class="field__text"><b>Check in</b><em>{{ formatDate(f.checkIn) }}</em></span>
            <div v-if="activeDate === 'checkIn'" class="calendar" @click.stop><div class="calendar__head"><button type="button" aria-label="Previous month" @click="calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth()-1, 1)">‹</button><strong>{{ calendarTitle }}</strong><button type="button" aria-label="Next month" @click="calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth()+1, 1)">›</button></div><div class="calendar__grid calendar__weekdays"><span v-for="day in ['Su','Mo','Tu','We','Th','Fr','Sa']" :key="day">{{ day }}</span></div><div class="calendar__grid"><button v-for="(day,index) in calendarDays" :key="day ? toDateKey(day) : `empty-${index}`" type="button" :disabled="!day || toDateKey(day) < calendarMin" :class="{ 'is-selected': day && toDateKey(day) === f.checkIn }" @click="chooseDate(day)">{{ day?.getDate() }}</button></div></div></div>
          <div class="field date-field" :class="{ 'date-field--open': activeDate === 'checkOut' }" @click="openCalendar('checkOut')" @keydown.enter.prevent="openCalendar('checkOut')" @keydown.space.prevent="openCalendar('checkOut')" tabindex="0" role="button" aria-label="Choose check-out date" :aria-expanded="activeDate === 'checkOut'"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/></svg>
            <span class="field__text"><b>Check out</b><em>{{ formatDate(f.checkOut) }}</em></span>
            <div v-if="activeDate === 'checkOut'" class="calendar" @click.stop><div class="calendar__head"><button type="button" aria-label="Previous month" @click="calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth()-1, 1)">‹</button><strong>{{ calendarTitle }}</strong><button type="button" aria-label="Next month" @click="calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth()+1, 1)">›</button></div><div class="calendar__grid calendar__weekdays"><span v-for="day in ['Su','Mo','Tu','We','Th','Fr','Sa']" :key="day">{{ day }}</span></div><div class="calendar__grid"><button v-for="(day,index) in calendarDays" :key="day ? toDateKey(day) : `empty-${index}`" type="button" :disabled="!day || toDateKey(day) < calendarMin" :class="{ 'is-selected': day && toDateKey(day) === f.checkOut }" @click="chooseDate(day)">{{ day?.getDate() }}</button></div></div></div>
          <div class="field guests field--last" @focusout="showGuests=false">
            <svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/></svg>
            <button type="button" class="gbtn" @click="showGuests=!showGuests"><b>Guests</b><em>{{ f.guests>1 ? guestLabel : 'Add guests' }}</em></button>
            <div v-if="showGuests" class="pop" tabindex="-1" @mousedown.prevent>
              <button type="button" aria-label="Fewer" @click="f.guests=Math.max(1,f.guests-1)">−</button><span>{{ f.guests }}</span>
              <button type="button" aria-label="More" @click="f.guests=Math.min(16,f.guests+1)">+</button></div>
          </div>
          <button class="go" type="submit" aria-label="Search"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/></svg></button>
        </div>
        <datalist id="places"><option v-for="p in places" :key="p" :value="p"/></datalist>
        <p v-if="result" class="result" role="status">{{ result }}</p>
      </form>
    </div>
  </section>
</template>
<style scoped>
.hero{position:relative;height:736px;background-size:cover;background-position:center top}
.hero::before{content:"";position:absolute;inset:0 0 auto;height:180px;background:linear-gradient(#0d79b8aa,transparent)}
.hero__in{position:absolute;left:0;right:0;bottom:-120px}
.card{background:#fff;border-radius:24px;padding:24px 40px 32px;box-shadow:0 10px 40px #0002;max-width:1120px;margin:0 auto}
h1{font-size:48px;font-weight:600;color:var(--primary);line-height:1.3}
.sub{font-size:28px;font-weight:500;margin-top:4px;line-height:1.4}
.bar{display:flex;align-items:center;margin-top:28px;border:1px solid #dedede;border-radius:30px;padding:6px 6px 6px 8px;min-height:56px;width:100%}
.field{display:flex;align-items:center;gap:10px;flex:1;padding:0 14px;border-right:1px solid #e4e4e4;position:relative;min-width:0;min-height:24px}
.field:first-child{flex:1.2}
.field--last{border:0}
.field__text{position:relative;display:block;flex:1;min-width:0}
svg{width:24px;height:24px;flex:none;fill:none;stroke:#9a9a9a;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
b{display:block;font-size:11px;font-weight:600;line-height:1.35;color:#252525}
input,em{font:400 11px 'Poppins';font-style:normal;color:#8c8c8c;border:0;outline:0;background:none;width:100%;padding:0;line-height:1.45}
.date-field{cursor:pointer}
.date-field{outline:none}
.date-field:focus-visible{outline:2px solid var(--primary);outline-offset:2px;border-radius:8px}
.date-field--open{z-index:4}
.calendar{position:absolute;top:calc(100% + 14px);left:0;width:280px;padding:14px;background:#fff;border:1px solid #e5e8eb;border-radius:16px;box-shadow:0 12px 36px #0002;z-index:10;cursor:default}
.calendar__head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.calendar__head strong{font-size:13px}.calendar__head button{width:30px;height:30px;border-radius:50%;font-size:22px;color:#57636a}.calendar__head button:hover{background:#f0f7fa;color:var(--primary)}
.calendar__grid{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;text-align:center}.calendar__weekdays{margin-bottom:4px;color:#8b959a;font-size:10px}.calendar__grid button{height:30px;border-radius:50%;font-size:11px;color:#28343a}.calendar__grid button:hover:not(:disabled),.calendar__grid button.is-selected{background:var(--primary);color:#fff}.calendar__grid button:disabled{color:#c6cdd1;cursor:default}
.gbtn{text-align:left;flex:1;padding:0}
.pop{position:absolute;top:calc(100% + 16px);left:0;background:#fff;box-shadow:0 8px 30px #0003;border-radius:12px;padding:8px 12px;display:flex;align-items:center;gap:16px;z-index:5}
.pop button{width:32px;height:32px;border:1px solid #ddd;border-radius:50%;font-size:18px}.pop button:hover{border-color:var(--primary)}
.go{width:40px;height:40px;border-radius:50%;background:var(--primary);display:grid;place-items:center;flex:none;transition:filter .2s}
.go:hover{filter:brightness(1.1)}.go svg{stroke:#fff;width:22px}
.result{margin-top:12px;font-size:13px;color:var(--teal)}
@media(max-width:1023px){.hero{height:640px}.card{padding:24px}h1{font-size:40px}.sub{font-size:22px}
  .bar{flex-wrap:wrap;gap:8px;padding:8px}.field{flex:1 1 40%;border:0;padding:8px}.go{margin-left:auto}}
@media(max-width:767px){.hero{height:460px}.hero__in{bottom:-300px}.card{padding:20px 16px;border-radius:20px}h1{font-size:30px}.sub{font-size:16px}
  .bar{flex-direction:column;align-items:stretch;border-radius:16px}.field{flex:none;border-bottom:1px solid #eee;padding:10px 4px}.go{width:100%;border-radius:12px;margin:0}}
</style>
