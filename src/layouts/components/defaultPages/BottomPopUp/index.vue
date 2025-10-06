
<template>
  <Teleport to="body">
  <div
      class="overlay"
      :class="{ 'overlay-visible': show }"
      @click="closeModal"
  >
    <div
        class="modal smooth-transition"
        :style="{ transform: `translateY(${offsetY}px)` }">
      <div style="border-bottom: 1px solid #e5e7eb;">
      <div class="drag-handle"
           @touchstart="handleTouchStart"
           @touchmove="handleTouchMove"
           @touchend="handleTouchEnd"
           @click.stop></div>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted,defineExpose } from 'vue'

const MAX_HEIGHT = 400
const MIN_HEIGHT = 100
const THRESHOLD = 0.4

const show = ref(false)
const offsetY = ref(MAX_HEIGHT)
const startY = ref(0)
const isDragging = ref(false)

const setCssVars = () => {
  document.documentElement.style.setProperty('--max-height', `${MAX_HEIGHT}px`)
  document.documentElement.style.setProperty('--min-height', `${MIN_HEIGHT}px`)
}

const preventScroll = (e: Event) => {
  if (show.value) e.preventDefault()
}

onMounted(() => {
  setCssVars()
  document.addEventListener('touchmove', preventScroll, { passive: false })
  document.querySelector('.modal')?.classList.add('will-change')
})

onUnmounted(() => {
  document.removeEventListener('touchmove', preventScroll)
})


const openModal = () => {
  show.value = true
  offsetY.value =0
}

const closeModal = () => {
  show.value = false
  offsetY.value =MAX_HEIGHT
}
const handleTouchStart = (e: TouchEvent) => {
  isDragging.value = true
  startY.value = e.touches[0].clientY
  document.querySelector('.modal')?.classList.remove('smooth-transition')
}

const handleTouchMove = (e: TouchEvent) => {
  if (!isDragging.value) return

  const currentY = e.touches[0].clientY
  const deltaY = currentY - startY.value

  // 确保offsetY永远不会小于0
  if (offsetY.value <= 0 && deltaY < 0) {
    offsetY.value = 0
    startY.value = currentY
    e.preventDefault()
    return
  }

  if (deltaY > 0 || (deltaY < 0 && offsetY.value > -MAX_HEIGHT + MIN_HEIGHT)) {
    offsetY.value = Math.max(0, offsetY.value + deltaY * 0.8)
    startY.value = currentY
  }

  e.preventDefault()
}


const handleTouchEnd = () => {
  isDragging.value = false
  document.querySelector('.modal')?.classList.add('smooth-transition')

  if (offsetY.value > MAX_HEIGHT * THRESHOLD) {
    closeModal()
  } else {
    offsetY.value = 0
  }
}

// 暴露控制方法给父组件
defineExpose({ openModal, closeModal })
</script>

<style scoped>
:root {
  --max-height: 500px;
  --min-height: 100px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.overlay-visible {
  opacity: 1;
  pointer-events: auto;
}

.modal {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: var(--max-height);
  background: white;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  transform: translateY(0);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.modal.will-change {
  will-change: transform;
}

.modal.smooth-transition {
  transition: transform 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.drag-handle {
  width: 100px;
  height: 0.5rem;
  background: #f3f4f6;
  border-radius: 9999px;
  margin: 12px auto;
  touch-action: none;
  margin-top:1rem;

}

.content {
  height: calc(100% - 28px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
</style>
