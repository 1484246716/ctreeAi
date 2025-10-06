# 文本选择操作组实现文档

## 1. 架构概述

文本选择操作组是一个基于Vue 3实现的Chrome扩展功能，当用户在页面上选中文本时，会显示一个悬浮的操作菜单，提供复制、搜索、分享等快捷功能，以及可扩展的下拉菜单。

### 核心文件结构
```
├── src/content/
│   ├── ContextMenu.vue     # 主操作组组件
│   ├── ActionDropdown.vue  # 下拉菜单组件
│   └── index.js            # 入口文件，负责监听事件和初始化
```

## 2. 工作原理详解

### 2.1 初始化流程

```javascript
// 在DOM加载完成后初始化操作组
export function initTextSelectionActions() {
  // 创建Vue应用实例但不立即挂载
  const app = createApp(TextSelectionActions)
  
  // 创建容器元素（延迟到首次选中文本时）
  let actionContainer = null
  let lastSelection = ''
  
  // 注册事件监听器...
}

// 初始化调用时机
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTextSelectionActions)
} else {
  initTextSelectionActions()
}
```

### 2.2 文本选择检测机制

操作组通过监听`mouseup`事件来检测用户的文本选择操作：

```javascript
document.addEventListener('mouseup', (e) => {
  // 检查是否点击了操作组本身，避免重复计算位置
  if (actionContainer && actionContainer.contains(e.target)) {
    return;
  }
  
  // 获取选中文本
  const selectedText = window.getSelection().toString().trim()
  
  // 只有在选中文本时才显示操作组
  if (selectedText) {
    // 创建容器和挂载组件（首次选中时）
    // 计算位置并显示操作组
    // 发送消息给Vue组件
  }
})
```

### 2.3 位置计算与边界检查

```javascript
// 计算操作组的位置
let x = e.clientX + 10;  // 相对于鼠标位置有一定偏移
let y = e.clientY - 10;

// 边界检查，确保操作组完全显示在视口内
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

// 如果右侧超出视口，则显示在左侧
if (x > viewportWidth - 120) {
  x = e.clientX - 120;
}

// 如果顶部超出视口，则显示在下方
if (y < 0) {
  y = e.clientY + 10;
}

// 向Vue组件发送位置信息
window.postMessage({
  type: 'SHOW_CONTEXT_MENU',
  x: x,
  y: y,
  selectedText: selectedText
}, '*');
```

## 3. 组件设计与实现

### 3.1 ContextMenu 主组件

ContextMenu.vue是操作组的核心组件，负责渲染操作按钮和处理用户交互。

#### 3.1.1 模板结构

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
```

#### 3.1.2 核心逻辑

```javascript
<script setup>
import { ref, computed } from 'vue'
import ActionDropdown from './ActionDropdown.vue'

// 响应式状态
const position = ref({ x: 0, y: 0 })
const visible = ref(false)
const selectedText = ref('')
const isDropdownOpen = ref(false)

// 位置样式计算属性
const positionStyle = computed(() => ({
  top: `${position.value.y}px`,
  left: `${position.value.x}px`,
  transform: 'translateZ(0)', // 启用硬件加速
  willChange: 'transform' // 性能优化
}))

// 消息处理
function handleMessage(event) {
  switch (event.data.type) {
    case 'SHOW_CONTEXT_MENU':
      // 性能优化：只有当位置确实变化时才更新
      if (event.data.x !== position.value.x || event.data.y !== position.value.y) {
        position.value = { x: event.data.x, y: event.data.y }
      }
      selectedText.value = event.data.selectedText || ''
      visible.value = true
      break
    // ...
  }
}
</script>
```

### 3.2 ActionDropdown 下拉菜单组件

ActionDropdown.vue实现了可扩展的下拉菜单功能，支持菜单项点击和选中状态管理。

#### 3.2.1 模板结构

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
```

#### 3.2.2 核心逻辑

```javascript
<script setup>
import { ref } from 'vue'

// Props定义
const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

// 事件定义
const emit = defineEmits(['itemClick', 'selectionChange'])

// 处理选中状态切换 - 关键优化点：阻止事件冒泡避免操作组抖动
const toggleItemSelection = (item, event) => {
  event.stopPropagation() // 防止触发外层mouseup事件
  const updatedItem = {
    ...item,
    selected: !item.selected
  }
  emit('selectionChange', updatedItem)
}
</script>
```

## 4. 关键技术点与优化策略

### 4.1 防止操作组抖动的解决方案

**问题**：快速点击下拉菜单中的选中/取消选中按钮时，操作组会出现抖动。

**原因**：点击事件冒泡到外层元素，触发了`mouseup`事件监听器，导致操作组位置重新计算。

**解决方案**：

1. 在`toggleItemSelection`方法中添加`event.stopPropagation()`阻止事件冒泡

```javascript
const toggleItemSelection = (item, event) => {
  event.stopPropagation() // 防止触发外层mouseup事件
  // ...其他代码
}
```

2. 在组件模板中传递事件对象

```html
@click.stop="toggleItemSelection(item, $event)"
```

3. 使用`splice`方法更新数组项，避免整个数组替换导致不必要的重绘

```javascript
const handleSelectionChange = (updatedItem) => {
  const index = dropdownItems.value.findIndex(item => item.id === updatedItem.id)
  if (index !== -1) {
    // 使用splice更新数组中的项，避免整个数组替换导致不必要的重绘
    dropdownItems.value.splice(index, 1, updatedItem)
  }
}
```

### 4.2 性能优化技巧

1. **延迟挂载组件**：只有在用户首次选中文本时才创建和挂载Vue组件

```javascript
if (!actionContainer) {
  actionContainer = document.createElement('div')
  actionContainer.id = 'vue-context-menu-container'
  document.body.appendChild(actionContainer)
  app.mount(actionContainer)
}
```

2. **条件性更新位置**：只有当位置确实变化时才更新操作组位置

```javascript
if (event.data.x !== position.value.x || event.data.y !== position.value.y) {
  position.value = { x: event.data.x, y: event.data.y }
}
```

3. **启用硬件加速**：使用`transform: 'translateZ(0)'`和`willChange: 'transform'`提升动画性能

```javascript
const positionStyle = computed(() => ({
  // ...其他样式
  transform: 'translateZ(0)',
  willChange: 'transform'
}))
```

4. **节流和延迟处理**：对事件监听使用setTimeout实现简单的防抖

```javascript
document.addEventListener('click', (e) => {
  setTimeout(() => {
    // 处理点击事件
  }, 50);
})
```

### 4.3 现代UI设计实现

操作组采用了现代化的UI设计，包括：

1. **半透明背景和毛玻璃效果**

```css
.text-selection-actions {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  /* ...其他样式 */
}
```

2. **平滑过渡动画**

```css
.text-selection-actions {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  /* ...其他样式 */
}

.text-selection-actions[v-show="false"] {
  opacity: 0;
  transform: translateY(5px) scale(0.95);
  pointer-events: none;
}
```

3. **微交互反馈**

```css
.action-item:hover {
  background: #f0f0f0;
  transform: translateY(-1px);
}

.action-item:active {
  transform: translateY(0);
  background: #e0e0e0;
}
```

## 5. 事件通信机制

### 5.1 原生JS与Vue组件通信

项目使用`window.postMessage`实现原生JavaScript代码与Vue组件之间的通信：

1. **原生JS发送消息**

```javascript
window.postMessage({
  type: 'SHOW_CONTEXT_MENU',
  x: x,
  y: y,
  selectedText: selectedText
}, '*');
```

2. **Vue组件接收消息**

```javascript
// 在onMounted中注册消息监听器
onMounted(() => {
  window.addEventListener('message', handleMessage)
})

// 组件卸载时移除监听器
onUnmounted(() => {
  window.removeEventListener('message', handleMessage)
})
```

### 5.2 Vue组件间通信

使用Vue的props和emit机制实现组件间通信：

1. **父组件向子组件传递数据**

```html
<ActionDropdown
  :items="dropdownItems"
  :is-open="isDropdownOpen"
  @item-click="handleDropdownItemClick"
  @selection-change="handleSelectionChange"
/>
```

2. **子组件向父组件发送事件**

```javascript
// 定义可触发的事件
const emit = defineEmits(['itemClick', 'selectionChange'])

// 触发事件
emit('selectionChange', updatedItem)
```

## 6. 通知系统实现

项目实现了统一的通知系统，用于向用户提供操作反馈：

```javascript
// 显示通知的辅助函数
const showNotification = (message, type = 'success') => {
  // 创建一个通知元素
  const notification = document.createElement('div')
  notification.className = `vue-context-menu-notification ${type}`
  notification.textContent = message
  document.body.appendChild(notification)
  
  // 1.5秒后自动移除通知
  setTimeout(() => {
    notification.classList.add('fade-out')
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 1500)
}
```

## 7. 代码优化建议

### 7.1 进一步防抖和节流处理

当前实现中的`setTimeout`可以进一步优化为专用的防抖和节流函数：

```javascript
// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 应用防抖到选择变化事件
const debouncedSelectionChange = debounce(() => {
  // 处理选择变化
}, 150);

document.addEventListener('selectionchange', debouncedSelectionChange);
```

### 7.2 组件化进一步优化

将通知系统封装为独立的组件，提高代码复用性：

```vue
<!-- Notification.vue -->
<template>
  <transition name="notification">
    <div v-if="visible" :class="['notification', type]">
      {{ message }}
    </div>
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

<style scoped>
/* 通知样式 */
</style>
```

### 7.3 状态管理优化

对于更复杂的应用场景，可以引入Pinia或Vuex进行状态管理：

```javascript
// store/index.js
import { defineStore } from 'pinia'

export const useTextSelectionStore = defineStore('textSelection', {
  state: () => ({
    selectedText: '',
    position: { x: 0, y: 0 },
    visible: false,
    dropdownItems: []
  }),
  
  actions: {
    showContextMenu(text, x, y) {
      this.selectedText = text
      this.position = { x, y }
      this.visible = true
    },
    
    hideContextMenu() {
      this.visible = false
    }
  }
})
```

## 8. 总结

本项目实现了一个功能完整、性能优化的文本选择操作组，具有以下特点：

1. **响应式设计**：根据视口位置自动调整显示位置
2. **现代UI**：半透明背景、毛玻璃效果、平滑过渡动画
3. **性能优化**：延迟挂载、条件更新、硬件加速
4. **用户体验**：微交互反馈、防抖动处理、通知系统
5. **可扩展性**：组件化设计、下拉菜单支持自定义项和选中状态

通过本文档提供的架构设计和实现方式，其他开发者可以快速理解并在此基础上进行扩展和优化。