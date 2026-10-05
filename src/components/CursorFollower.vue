<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const dot = ref(null)
const ring = ref(null)
const trailOne = ref(null)
const trailTwo = ref(null)
let enabled = false
let visible = false
let hovering = false
let pressed = false

function updatePosition(event) {
  if (!enabled || event.pointerType === 'touch') return
  visible = true
  document.body.classList.add('has-cursor-follower')
  const point = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`
  if (dot.value) dot.value.style.transform = point
  if (ring.value) ring.value.style.transform = `${point} scale(${pressed ? 0.78 : hovering ? 1.55 : 1})`
  if (trailOne.value) trailOne.value.style.transform = point
  if (trailTwo.value) trailTwo.value.style.transform = point
  dot.value?.classList.add('visible')
  ring.value?.classList.add('visible')
  trailOne.value?.classList.add('visible')
  trailTwo.value?.classList.add('visible')
}

function updateTarget(event) {
  if (!enabled) return
  hovering = Boolean(event.target?.closest?.('a, button, input, select, textarea, summary, [role="button"]'))
  ring.value?.classList.toggle('is-hovering', hovering)
  updatePosition(event)
}

function press(event) {
  pressed = true
  ring.value?.classList.add('is-pressed')
  updatePosition(event)
}

function release(event) {
  pressed = false
  ring.value?.classList.remove('is-pressed')
  updatePosition(event)
}

function hide(event) {
  if (event.relatedTarget) return
  visible = false
  document.body.classList.remove('has-cursor-follower')
  dot.value?.classList.remove('visible')
  ring.value?.classList.remove('visible')
  trailOne.value?.classList.remove('visible')
  trailTwo.value?.classList.remove('visible')
}

onMounted(() => {
  enabled = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches
  if (!enabled) return
  document.addEventListener('pointermove', updatePosition, { passive: true })
  document.addEventListener('pointerover', updateTarget, { passive: true })
  document.addEventListener('pointerdown', press, { passive: true })
  document.addEventListener('pointerup', release, { passive: true })
  document.addEventListener('pointerleave', hide, { passive: true })
})

onBeforeUnmount(() => {
  if (enabled) {
    document.removeEventListener('pointermove', updatePosition)
    document.removeEventListener('pointerover', updateTarget)
    document.removeEventListener('pointerdown', press)
    document.removeEventListener('pointerup', release)
    document.removeEventListener('pointerleave', hide)
  }
  document.body.classList.remove('has-cursor-follower')
})
</script>

<template>
  <div class="cursor-follower" aria-hidden="true">
    <span ref="trailTwo" class="cursor-trail trail-two" />
    <span ref="trailOne" class="cursor-trail trail-one" />
    <span ref="ring" class="cursor-ring" />
    <span ref="dot" class="cursor-dot" />
  </div>
</template>

<style>
.cursor-follower{display:none}
@media (hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference){
  .cursor-follower{display:block;position:fixed;inset:0;z-index:10000;pointer-events:none}
  .cursor-ring,.cursor-dot,.cursor-trail{position:absolute;top:0;left:0;display:block;border-radius:50%;opacity:0;will-change:transform,opacity}
  .cursor-ring{width:34px;height:34px;border:1px solid var(--primary);box-shadow:0 1px 5px #071b2366;transition:transform .16s cubic-bezier(.2,.75,.25,1),opacity .18s ease,background .18s ease}
  .cursor-dot{width:5px;height:5px;background:var(--primary);box-shadow:0 1px 4px #071b2370;transition:opacity .15s ease}
  .cursor-trail{border:1px solid #0e8fc0;transition:transform .3s cubic-bezier(.2,.75,.25,1),opacity .22s ease}
  .trail-one{width:24px;height:24px;opacity:0;transition-duration:.32s}.trail-two{width:16px;height:16px;opacity:0;transition-duration:.5s}
  .trail-one.visible{opacity:.38}.trail-two.visible{opacity:.2}
  .cursor-ring.visible,.cursor-dot.visible{opacity:1}
  .cursor-ring.is-hovering{background:#0e8fc024}
  .cursor-ring.is-pressed{transition-duration:.08s}
  body.has-cursor-follower,body.has-cursor-follower a,body.has-cursor-follower button,body.has-cursor-follower input,body.has-cursor-follower select,body.has-cursor-follower textarea,body.has-cursor-follower summary,body.has-cursor-follower [role="button"]{cursor:none!important}
  body.has-cursor-follower input,body.has-cursor-follower textarea{caret-color:var(--teal)}
}
</style>
