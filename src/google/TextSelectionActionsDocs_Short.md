# 文本选择操作组实现文档

## 1. 架构概述

文本选择操作组是基于Vue 3实现的Chrome扩展功能，用户选中文本时显示悬浮操作菜单，提供快捷功能和可扩展下拉菜单。

### 核心文件结构
```
├── src/content/
│   ├── ContextMenu.vue     # 主操作组组件
│   ├── ActionDropdown.vue  # 下拉菜单组件
│   └── index.js            # 入口文件，负责监听事件和初始化
```

## 2. 工作原理

### 2.1 初始化流程

```javascript
function initTextSelectionActions() {
  const app = createApp(TextSelectionActions)
  let actionContainer = null
  let lastSelection = ''
  // 注册事件监听器...
}

// DOM加载后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTextSelectionActions)
} else {
  initTextSelectionActions()
}
```

### 2.2 文本选择检测

通过`mouseup`事件检测用户文本选择操作：

```javascript
document.addEventListener('mouseup', (e) => {
  // 检查是否点击了操作组本身
  if (actionContainer && actionContainer.contains(e.target)) {
    return;
  }
  
  // 获取选中文本并显示操作组
  const selectedText = window.getSelection().toString().trim()
  if (selectedText) {
    // 创建容器和挂载组件（首次选中时）
    if (!actionContainer) {
      actionContainer = document.createElement('div')
      actionContainer.id = 'vue-context-menu-container'
      document.body.appendChild(actionContainer)
      app.mount(actionContainer)
    }
    
    // 计算位置并显示操作组
    calculatePositionAndShowMenu(e, selectedText)
  }
})

function calculatePositionAndShowMenu(e, selectedText) {
  let x = e.clientX + 10;
  let y = e.clientY - 10;
  
  // 边界检查，确保操作组在视口内
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  if (x > viewportWidth - 120) x = e.clientX - 120;
  if (y < 0) y = e.clientY + 10;
  
  // 向Vue组件发送显示消息
  window.postMessage({
    type: 'SHOW_CONTEXT_MENU',
    x: x, y: y,
    selectedText: selectedText
  }, '*');
}
```

## 3. 组件设计

### 3.1 ContextMenu 主组件

核心组件，负责渲染操作按钮和处理交互。

```vue
<template>
  <div
    v-show="visible"
    class="text-selection-actions"
    :style="positionStyle"
    @click.stop
    @mousedown.stop>
    <!-- 主要操作按钮 -->
    <div class="action-item" @click="handleCopy">📋</div>
    <div class="action-item" @click="handleSearch">🔍</div>
    <div class="action-item" @click="handleShare">📤</div>
    
    <!-- 更多操作下拉菜单 -->
    <div class="action-item" @click="toggleDropdown">
      <span class="action-icon">⋯</span>
      <ActionDropdown
        :items="dropdownItems"
        :is-open="isDropdownOpen"
        @item-click="handleDropdownItemClick"
        @selection-change="handleSelectionChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ActionDropdown from './ActionDropdown.vue'

// 响应式状态
const position = ref({ x: 0, y: 0 })
const visible = ref(false)
const selectedText = ref('')
const isDropdownOpen = ref(false)

// 下拉菜单项
const dropdownItems = ref([
  { id: 'highlight', label: '高亮', selected: false },
  { id: 'read', label: '朗读', selected: false },
  // 其他菜单项...
])

// 位置样式计算属性
const positionStyle = computed(() => ({
  top: `${position.value.y}px`,
  left: `${position.value.x}px`,
  transform: 'translateZ(0)', // 启用硬件加速
  willChange: 'transform'
}))

// 消息处理
function handleMessage(event) {
  switch (event.data.type) {
    case 'SHOW_CONTEXT_MENU':
      // 性能优化：仅位置变化时更新
      if (event.data.x !== position.value.x || event.data.y !== position.value.y) {
        position.value = { x: event.data.x, y: event.data.y }
      }
      selectedText.value = event.data.selectedText || ''
      visible.value = true
      break
    case 'HIDE_CONTEXT_MENU':
      visible.value = false
      break
  }
}

// 操作处理函数
const handleCopy = () => { ... }
const handleSearch = () => { ... }
const handleShare = () => { ... }

// 下拉菜单处理函数
const toggleDropdown = () => { isDropdownOpen.value = !isDropdownOpen.value }
const handleDropdownItemClick = (item) => { ... }
const handleSelectionChange = (updatedItem) => {
  const index = dropdownItems.value.findIndex(item => item.id === updatedItem.id)
  if (index !== -1) {
    dropdownItems.value.splice(index, 1, updatedItem) // 使用splice避免重绘
  }
}

// 通知辅助函数
const showNotification = (message, type = 'success') => {
  const notification = document.createElement('div')
  notification.className = `vue-context-menu-notification ${type}`
  notification.textContent = message
  document.body.appendChild(notification)
  
  setTimeout(() => {
    notification.classList.add('fade-out')
    setTimeout(() => document.body.removeChild(notification), 300)
  }, 1500)
}

// 生命周期钩子
onMounted(() => window.addEventListener('message', handleMessage))
onUnmounted(() => window.removeEventListener('message', handleMessage))
</script>

<style scoped>
.text-selection-actions {
  display: flex;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  padding: 4px;
  gap: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none; /* 防止点击操作组时取消文本选择 */
}

/* 其他样式... */
</style>
```

### 3.2 ActionDropdown 下拉菜单组件

实现可扩展的下拉菜单功能，支持菜单项点击和选中状态管理。

```vue
<template>
  <div class="action-dropdown-wrapper" ref="dropdownRef">
    <div class="action-dropdown" v-show="isOpen" @click.stop>
      <div 
        v-for="(item, index) in items" 
        :key="index" 
        class="dropdown-item"
        @click="handleItemClick(item)"
      >
        <span class="item-text">{{ item.label }}</span>
        <button 
          class="toggle-btn"
          :class="{ 'active': item.selected }"
          @click.stop="toggleItemSelection(item, $event)"
        >
          {{ item.selected ? '✓' : '○' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Props定义
const props = defineProps({
  items: { type: Array, required: true },
  isOpen: { type: Boolean, default: false }
})

// 事件定义
const emit = defineEmits(['itemClick', 'selectionChange'])
const dropdownRef = ref(null)

// 处理点击事件
const handleItemClick = (item) => emit('itemClick', item)

// 处理选中状态切换 - 关键优化：阻止事件冒泡避免操作组抖动
const toggleItemSelection = (item, event) => {
  event.stopPropagation() // 防止触发外层mouseup事件
  emit('selectionChange', { ...item, selected: !item.selected })
}
</script>

<style scoped>
.action-dropdown-wrapper { position: relative; }

.action-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  min-width: 200px;
  margin-top: 8px;
  z-index: 1000;
}

/* 其他样式... */
</style>
```

## 4. 关键技术点与优化

### 4.1 防止操作组抖动

**问题**：快速点击下拉菜单选中/取消按钮时操作组抖动。

**解决方案**：

1. 在`toggleItemSelection`方法中添加`event.stopPropagation()`阻止事件冒泡

```javascript
const toggleItemSelection = (item, event) => {
  event.stopPropagation() // 防止触发外层mouseup事件
  // ...其他代码
}
```

2. 在模板中传递事件对象

```html
@click.stop="toggleItemSelection(item, $event)"
```

3. 使用`splice`方法更新数组项，避免重绘

```javascript
dropdownItems.value.splice(index, 1, updatedItem)
```

### 4.2 性能优化技巧

1. **延迟挂载组件**：仅在用户首次选中文本时创建和挂载Vue组件

2. **条件性更新位置**：仅当位置确实变化时才更新操作组位置

```javascript
if (event.data.x !== position.value.x || event.data.y !== position.value.y) {
  position.value = { x: event.data.x, y: event.data.y }
}
```

3. **启用硬件加速**：使用`transform: 'translateZ(0)'`和`willChange: 'transform'`

4. **节流和延迟处理**：对事件监听使用setTimeout实现防抖

### 4.3 现代UI设计

1. **半透明背景和毛玻璃效果**

```css
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(8px);
```

2. **平滑过渡动画**

```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

3. **微交互反馈**

```css
.action-item:hover {
  background: #f0f0f0;
  transform: translateY(-1px);
}
```

## 5. 事件通信机制

### 5.1 原生JS与Vue组件通信

使用`window.postMessage`实现通信：

```javascript
// 原生JS发送消息
window.postMessage({ type: 'SHOW_CONTEXT_MENU', ... }, '*');

// Vue组件接收消息
function handleMessage(event) {
  if (event.data.type === 'SHOW_CONTEXT_MENU') {
    // 处理显示消息
  }
}
```

### 5.2 Vue组件间通信

使用Vue的props和emit机制：

```html
<!-- 父组件向子组件传递数据 -->
<ActionDropdown :items="dropdownItems" @selection-change="handleSelectionChange" />

<!-- 子组件向父组件发送事件 -->
emit('selectionChange', updatedItem)
```

## 6. 代码优化建议

### 6.1 防抖和节流处理

```javascript
// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => { clearTimeout(timeout); func(...args); };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 应用防抖到选择变化事件
const debouncedSelectionChange = debounce(() => { /* 处理选择变化 */ }, 150);
```

### 6.2 组件化进一步优化

将通知系统封装为独立组件：

```vue
<!-- Notification.vue -->
<template>
  <transition name="notification">
    <div v-if="visible" :class="['notification', type]">{{ message }}</div>
  </transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({ message: String, type: String })
const visible = ref(true)

watch(() => props.message, () => {
  visible.value = true
  setTimeout(() => visible.value = false, 1500)
})
</script>
```

### 6.3 状态管理优化

对于更复杂场景，引入Pinia进行状态管理：

```javascript
// store/index.js
import { defineStore } from 'pinia'

export const useTextSelectionStore = defineStore('textSelection', {
  state: () => ({
    selectedText: '',
    position: { x: 0, y: 0 },
    visible: false
  }),
  
  actions: {
    showContextMenu(text, x, y) {
      this.selectedText = text
      this.position = { x, y }
      this.visible = true
    }
  }
})
```

## 7. 总结

本项目实现了功能完整、性能优化的文本选择操作组，具有响应式设计、现代UI、性能优化、良好用户体验和可扩展性等特点。通过本文档提供的架构设计和实现方式，开发者可快速理解并在此基础上进行扩展和优化。