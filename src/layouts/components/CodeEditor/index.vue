
<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'

const props = defineProps({
  modelValue: String,
  language: {
    type: String,
    default: 'javascript'
  }
})

const emit = defineEmits([
  'update:modelValue',
  'focus',
  'blur',
  'keydown',
  'change',
  'copy',
  'tab-inserted'
])

const textarea = ref(null)
const code = ref(props.modelValue || '')
const lineCount = ref(24)
const currentLine = ref(1)
const lineHeight = ref(20) // 默认行高

const highlightedCode = computed(() => {
  return highlightSyntax(code.value)
})

onMounted(() => {
  // 获取实际行高
  const style = window.getComputedStyle(textarea.value)
  lineHeight.value = parseInt(style.lineHeight)
})

watch(() => props.modelValue, (newVal) => {
  if (newVal !== code.value) {
    code.value = newVal
    updateLineCount()
    emit('change', newVal)
  }
})

function updateLineCount() {
  const newCount = Math.max(1, code.value.split('\n').length)
  if (newCount !== lineCount.value) {
    lineCount.value = newCount
  }
  updateCurrentLine()
}

function handleInput() {
  emit('update:modelValue', code.value)
  emit('change', code.value)
  updateLineCount()
}

function syncScroll() {
  const pre = textarea.value.parentElement.querySelector('.highlighted-code')
  pre.scrollTop = textarea.value.scrollTop
  pre.scrollLeft = textarea.value.scrollLeft
}

function updateCurrentLine() {
  const cursorPos = textarea.value.selectionStart
  const textBeforeCursor = code.value.substring(0, cursorPos)
  currentLine.value = textBeforeCursor.split('\n').length
}

function insertTab(e) {
  const start = textarea.value.selectionStart
  const end = textarea.value.selectionEnd

  code.value = code.value.substring(0, start) + '  ' + code.value.substring(end)
  nextTick(() => {
    textarea.value.selectionStart = start + 2
    textarea.value.selectionEnd = start + 2
    emit('tab-inserted', { position: start + 2 })
    updateCurrentLine()
  })
}

function copyCode() {
  navigator.clipboard.writeText(code.value)
      .then(() => {
        alert('Code copied to clipboard!')
        emit('copy', code.value)
      })
      .catch(err => console.error('Failed to copy:', err))
}

function highlightSyntax(code) {
  const lang = props.language.toLowerCase()
  const keywords = {
    javascript: ['function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while'],
    html: ['<!DOCTYPE html>', '<html', '<head', '<body', '<div', '<span'],
    css: ['@media', '@keyframes', 'margin', 'padding', 'color', 'font-size']
  }

  let highlighted = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')

  if (keywords[lang]) {
    keywords[lang].forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g')
      highlighted = highlighted.replace(regex, `<span class="keyword">${keyword}</span>`)
    })
  }

  highlighted = highlighted.replace(/(['"])(.*?)\1/g, '<span class="string">$1$2$1</span>')

  if (lang === 'javascript') {
    highlighted = highlighted.replace(/\/\/.*$/gm, '<span class="comment">$&</span>')
  }

  return highlighted
}

defineExpose({
  getCode: () => code.value,
  setCode: (newCode) => {
    code.value = newCode
    emit('update:modelValue', newCode)
    updateLineCount()
  },
  focus: () => textarea.value.focus(),
  blur: () => textarea.value.blur()
})
</script>

<template>
  <div class="code-editor-container">
<!--    <div class="editor-header">-->
<!--      <span class="language-label">{{ language }}</span>-->
<!--      <button @click="copyCode" class="copy-button">Copy</button>-->
<!--    </div>-->
    <div class="editor-wrapper">
      <div class="line-numbers">
        <span
            v-for="n in lineCount"
            :key="n"
            :class="{ 'current-line-number': n === currentLine }"
        >{{ n }}</span>
      </div>
      <div class="code-area">
        <textarea
            ref="textarea"
            v-model="code"
            @input="handleInput"
            @scroll="syncScroll"
            @keydown.tab.prevent="insertTab"
            @focus="emit('focus', $event)"
            @blur="emit('blur', $event)"
            @keydown="emit('keydown', $event)"
            @click="updateCurrentLine"
            @keyup="updateCurrentLine"
            spellcheck="false"
        ></textarea>
        <div
            class="current-line-highlight"
            :style="{
            top: `${((currentLine - 1) * lineHeight)+10}px`,
            height: `${lineHeight}px`
          }"
        ></div>
        <pre class="highlighted-code" v-html="highlightedCode"></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.code-editor-container {
  border: 1px solid #e2e8f0;
  overflow: hidden;
  background: #f8fafc;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.5;
  max-width:748px;
}

.editor-wrapper {
  display: flex;
  height: 570px;
  overflow: hidden;
  position: relative;
}

.line-numbers {
  padding: 0.5rem;
  text-align: right;
  color: #66637c;
  background: #cad1df;
  user-select: none;
  border-right: 1px solid #e2e8f0;
  min-width:24px;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.current-line-number {
  color: #4f46e5;
  font-weight: bold;
}

.code-area {
  position: relative;
  flex: 1;
  background: #d8e0ee;
  overflow: auto;
}

textarea, .highlighted-code {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding:10px;
  border: none;
  tab-size: 2;
  white-space: pre;
  overflow: hidden;
  background: transparent;
  caret-color: black;
  resize: none;
  color: var(--Text-1, #433d63);
  font-family: "Alibaba PuHuiTi 2.0";
  font-weight: 400;
  font-size: 14px;

}

.highlighted-code {
  pointer-events: none;
  z-index: 1;
}

.current-line-highlight {
  position: absolute;
  left: 0;
  right: 0;
  background-color: #765cff;
  z-index: 0;
  transition: top 0.1s ease;
}

.copy-button {
  padding: 0.25rem 0.5rem;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.875rem;
}

.copy-button:hover {
  background: #4338ca;
}

.keyword {
  color: #7c3aed;
  font-weight: bold;
}

.string {
  color: #059669;
}

.comment {
  color: #64748b;
  font-style: italic;
}
</style>
