<template>
  <div
    v-show="visible"
    class="text-selection-actions"
    :style="positionStyle"
    @click.stop
    @mousedown.stop>
    <div class="action-item" @click="handleCopy">
      📋
      <span class="tooltip">复制文本111</span>
    </div>
    <div class="action-item" @click="handleSearch" data-tooltip="搜索文本">
      <span class="action-icon">🔍</span>
    </div>
    <div class="action-item" @click="handleShare" data-tooltip="分享文本">
      <span class="action-icon">📤</span>
    </div>
    <div class="action-item" @click="openSidebar">
      <span class="action-icon">📑</span>
      <span class="tooltip">打开侧边栏</span>
    </div>
    <div class="action-item" @click="closeSidebar">
      <span class="action-icon">📕</span>
      <span class="tooltip">关闭侧边栏</span>
    </div>
    <div class="action-item" @click="toggleDropdown">
      <span class="action-icon">⋯</span>
      <span class="tooltip">更多操作</span>
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

const position = ref({ x: 0, y: 0 })
const visible = ref(false)
const selectedText = ref('')
const isDropdownOpen = ref(false)

// 定义下拉菜单项
const dropdownItems = ref([
  { id: 'highlight', label: '高亮', selected: false },
  { id: 'read', label: '朗读', selected: false },
  { id: 'explain', label: '解释', selected: false },
  { id: 'translate', label: '翻译', selected: false },
  { id: 'summarize', label: '总结', selected: false },
  { id: 'question', label: '回答问题', selected: false },
  { id: 'code-explain', label: '解释代码', selected: false }
])

// 切换下拉菜单显示状态
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

// 处理下拉菜单项点击
const handleDropdownItemClick = (item) => {
  console.log('点击了下拉菜单项:', item.label)
  // 根据不同的菜单项执行不同的操作
  switch (item.id) {
    case 'highlight':
      // 实现高亮功能
      showNotification('已高亮选中文本')
      break
    case 'read':
      // 实现朗读功能
      showNotification('开始朗读文本')
      break
    case 'explain':
      // 实现解释功能
      showNotification('已解释选中文本')
      break
    case 'translate':
      // 实现翻译功能
      showNotification('已翻译选中文本')
      break
    case 'summarize':
      // 实现总结功能
      showNotification('已总结选中文本')
      break
    case 'question':
      // 实现回答问题功能
      showNotification('已准备回答关于选中文本的问题')
      break
    case 'code-explain':
      // 实现解释代码功能
      showNotification('已解释选中代码')
      break
  }
}

// 处理菜单项选中状态变化 - 使用splice确保响应式更新且不触发重绘
const handleSelectionChange = (updatedItem) => {
  const index = dropdownItems.value.findIndex(item => item.id === updatedItem.id)
  if (index !== -1) {
    // 使用splice更新数组中的项，避免整个数组替换导致不必要的重绘
    dropdownItems.value.splice(index, 1, updatedItem)
  }
  console.log('菜单项选中状态变化:', updatedItem.label, '选中:', updatedItem.selected)
}

const positionStyle = computed(() => ({
  top: `${position.value.y}px`,
  left: `${position.value.x}px`,
  transform: 'translateZ(0)',
  willChange: 'transform'
}))

function handleMessage(event) {
  switch (event.data.type) {
    case 'SHOW_CONTEXT_MENU':
      // 只有当位置确实变化时才更新position，避免点击按钮时位置变化
      if (event.data.x !== position.value.x || event.data.y !== position.value.y) {
        position.value = {
          x: event.data.x,
          y: event.data.y
        }
      }
      // 更新选中的文本
      selectedText.value = event.data.selectedText || ''
      visible.value = true;
      document.addEventListener('click', closeMenu);
      console.log(event.data.type,'触发显示', '选中文本:', selectedText.value)
      break
    case 'HIDE_CONTEXT_MENU':
      // 空实现保持常显
      visible.value = false
       console.log(event.data.type,'触发隐藏')
      break
  }
  console.log(event.data.type,'新的选择')
}

// 增强点击事件处理
const closeMenu = () => {
  visible.value = false;
  document.removeEventListener('click', closeMenu);
}

// 移除重复的全局点击事件监听器，由 index.js 统一管理

// 复制文本处理函数
const handleCopy = () => {
  navigator.clipboard.writeText(selectedText.value).then(() => {
    // 不隐藏操作组，保持显示状态
    // 显示复制成功的提示
    const notification = document.createElement('div')
    notification.className = 'vue-context-menu-notification'
    notification.textContent = '文本已复制'
    document.body.appendChild(notification)
    
    setTimeout(() => {
      notification.classList.add('fade-out')
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 1500)
  })
}

// 搜索文本处理函数
const handleSearch = () => {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(selectedText.value)}`
  window.open(searchUrl, '_blank')
  // 不隐藏操作组，保持显示状态
}

// 分享文本处理函数
const handleShare = () => {
  if (navigator.share) {
    navigator.share({
      text: selectedText.value,
      title: '分享文本'
    }).catch(err => {
      console.error('分享失败:', err)
      showNotification('分享失败', 'error')
    })
  } else {
    // 浏览器不支持分享API，显示提示
    showNotification('您的浏览器不支持分享功能', 'warning')
  }
  // 不隐藏操作组，保持显示状态
}

// 打开侧边栏函数
const openSidebar = async () => {
  try {
    // 检查是否在浏览器扩展环境中
    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
      // 通过消息通知background script打开侧边栏
      chrome.runtime.sendMessage({ action: 'openSidebar' }, (response) => {
        if (response && response.success) {
          showNotification('侧边栏已打开');
          console.log('通过消息通信打开侧边栏');
        } else {
          console.warn('background script未响应打开侧边栏请求');
          showNotification('打开侧边栏失败', 'error');
        }
      });
    } else {
      // 不在扩展环境中
      showNotification('浏览器环境不支持扩展侧边栏', 'error');
    }
  } catch (error) {
    console.error('打开侧边栏时出错:', error);
    showNotification('打开侧边栏失败', 'error');
  }
}

// 关闭侧边栏函数
const closeSidebar = async () => {
  try {
    // 检查是否在浏览器扩展环境中
    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
      // 通过消息通知background script关闭侧边栏
      chrome.runtime.sendMessage({ action: 'closeSidebar' }, (response) => {
        if (response && response.success) {
          showNotification('侧边栏已关闭');
          console.log('通过消息通信关闭侧边栏');
        } else {
          console.warn('background script未响应关闭侧边栏请求');
          showNotification('关闭侧边栏失败', 'error');
        }
      });
    } else {
      // 不在扩展环境中
      showNotification('浏览器环境不支持扩展侧边栏', 'error');
    }
  } catch (error) {
    console.error('关闭侧边栏时出错:', error);
    showNotification('关闭侧边栏失败', 'error');
  }
}

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

// 监听窗口消息
onMounted(() => {
  window.addEventListener('message', handleMessage)
})

// 组件卸载时移除消息监听
onUnmounted(() => {
  window.removeEventListener('message', handleMessage)
})
</script>

<style scoped>
.text-selection-actions {
  display: flex;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 4px;
  gap: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  user-select: none; /* 防止点击操作组时取消文本选择 */
  -webkit-user-select: none; /* Safari 兼容性 */
  -moz-user-select: none; /* Firefox 兼容性 */
  -ms-user-select: none; /* IE/Edge 兼容性 */
}

.text-selection-actions[v-show="false"] {
  opacity: 0;
  transform: translateY(5px) scale(0.95);
  pointer-events: none;
}

.action-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  color: #333;
  font-size: 18px;
}

.action-item:hover {
  background: #f0f0f0;
  transform: translateY(-1px);
}

.action-item:active {
  transform: translateY(0);
  background: #e0e0e0;
}

.action-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.tooltip {
  visibility: hidden;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
  background: #333;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1000;
  opacity: 0;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: #333;
}

.action-item:hover .tooltip {
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%) translateY(-4px);
}

/* 通知样式 */
.vue-context-menu-notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #4caf50;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  transition: all 0.3s ease;
}

.vue-context-menu-notification.error {
  background: #f44336;
}

.vue-context-menu-notification.warning {
  background: #ff9800;
}

.vue-context-menu-notification.fade-out {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

