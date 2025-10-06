<template>
  <!-- 侧边栏展开状态下的按钮组 -->
  <div 
    v-if="sidebarVisible" 
    class="sidebar-action-buttons sidebar-mode"
    :class="{ 'expanded': isExpanded }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="action-button" @click="toggleSidebar">
      <div class="button-icon">☰</div>
      <div class="button-tooltip">收起侧边栏</div>
    </div>
    <div class="action-button" @click="toggleTheme">
      <div class="button-icon">🌙</div>
      <div class="button-tooltip">切换主题</div>
    </div>
    <div class="action-button" @click="toggleSearch">
      <div class="button-icon">🔍</div>
      <div class="button-tooltip">搜索</div>
    </div>
    <div class="action-button" @click="toggleBookmarks">
      <div class="button-icon">⭐</div>
      <div class="button-tooltip">书签</div>
    </div>
    <div class="action-button" @click="toggleSettings">
      <div class="button-icon">⚙️</div>
      <div class="button-tooltip">设置</div>
    </div>
  </div>

  <!-- 侧边栏收缩状态下的右下角悬浮按钮组 -->
  <div v-else class="sidebar-action-buttons floating-mode">
    <div class="floating-circle" @click="toggleSidebar">
      <div class="circle-icon">☰</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

// 响应式数据
const sidebarVisible = ref(false) // 侧边栏初始状态为收缩，显示圆形按钮
const isExpanded = ref(false) // 按钮组展开状态
const isDarkTheme = ref(false) // 主题状态

// 监听侧边栏状态变化
watch(sidebarVisible, (newValue) => {
  console.log('侧边栏状态变化:', newValue ? '展开' : '收起')
  // 在实际应用中，这里可以通过事件或API通知父组件侧边栏状态变化
})

// 切换侧边栏显示/隐藏
const toggleSidebar = async () => {
  try {
    // 检查是否在浏览器扩展环境中
    if (typeof chrome !== 'undefined' && chrome.sidePanel) {
      // 获取当前标签页
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      // 尝试获取侧边栏状态
      const isOpen = await chrome.sidePanel.getOptions(tab.id);
      
      if (isOpen && isOpen.enabled) {
        // 如果侧边栏已打开，则关闭
        await chrome.sidePanel.setOptions({ tabId: tab.id, enabled: false });
        sidebarVisible.value = false;
        console.log('关闭谷歌侧边栏');
      } else {
        // 如果侧边栏未打开，则打开
        await chrome.sidePanel.open({ tabId: tab.id });
        sidebarVisible.value = true;
        console.log('打开谷歌侧边栏');
      }
    } else {
      // 不在扩展环境中，仅模拟切换UI状态
      sidebarVisible.value = !sidebarVisible.value;
      console.log('切换侧边栏UI状态:', sidebarVisible.value ? '展开' : '收起');
    }
  } catch (error) {
    console.error('控制侧边栏时出错:', error);
    // 出错时仍切换UI状态，确保用户体验
    sidebarVisible.value = !sidebarVisible.value;
  }
}

// 切换主题
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
  console.log('切换主题:', isDarkTheme.value ? '暗黑' : '明亮')
  // 在实际应用中，这里可以添加主题切换的具体逻辑
}

// 打开搜索
const toggleSearch = () => {
  console.log('打开搜索')
  // 在实际应用中，这里可以添加打开搜索的具体逻辑
}

// 打开书签
const toggleBookmarks = () => {
  console.log('打开书签')
  // 在实际应用中，这里可以添加打开书签的具体逻辑
}

// 打开设置
const toggleSettings = () => {
  console.log('打开设置')
  // 在实际应用中，这里可以添加打开设置的具体逻辑
}

// 鼠标进入时展开按钮组
const handleMouseEnter = () => {
  isExpanded.value = true
}

// 鼠标离开时收起按钮组
const handleMouseLeave = () => {
  isExpanded.value = false
}

// 初始化和清理
onMounted(() => {
  console.log('侧边栏操作按钮组组件已挂载')
  // 在实际应用中，这里可以初始化侧边栏状态
})

onUnmounted(() => {
  console.log('侧边栏操作按钮组组件已卸载')
})

// 暴露方法给父组件
defineExpose({
  toggleSidebar,
  toggleTheme,
  toggleSearch,
  toggleBookmarks,
  toggleSettings,
  sidebarVisible
})
</script>

<style scoped>
/* 基础按钮组样式 */
.sidebar-action-buttons {
  position: fixed;
  z-index: 999998;
  display: flex;
  transition: all 0.3s ease;
}

/* 侧边栏模式下的按钮组 */
.sidebar-mode {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 0 8px 8px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  backdrop-filter: blur(10px);
}

/* 悬浮模式下的按钮组 */
.floating-mode {
  right: 24px;
  bottom: 24px;
}

/* 侧边栏模式下的单个按钮 */
.action-button {
  display: flex;
  align-items: center;
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

/* 鼠标悬浮时展开按钮宽度 */
.sidebar-mode.expanded .action-button {
  width: 120px;
}

/* 按钮悬停效果 */
.action-button:hover {
  background-color: #f0f0f0;
}

/* 按钮图标 */
.button-icon {
  font-size: 20px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

/* 按钮提示文本 */
.button-tooltip {
  position: absolute;
  left: 48px;
  opacity: 0;
  white-space: nowrap;
  font-size: 14px;
  color: #333;
  pointer-events: none;
  transition: all 0.2s ease;
}

/* 按钮组展开时显示提示文本 */
.sidebar-mode.expanded .button-tooltip {
  opacity: 1;
  left: 48px;
}

/* 悬浮模式下的圆形按钮 */
.floating-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4285f4 0%, #34a853 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  border: none;
  outline: none;
}

/* 悬浮圆形按钮悬停效果 */
.floating-circle:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.25);
}

/* 悬浮圆形按钮图标 */
.circle-icon {
  font-size: 24px;
  color: white;
  transition: all 0.3s ease;
}

/* 悬浮圆形按钮点击效果 */
.floating-circle:active {
  transform: scale(0.95);
}

/* 暗黑主题适配 */
:global(.dark-theme) .sidebar-mode {
  background-color: rgba(40, 40, 40, 0.95);
}

:global(.dark-theme) .action-button:hover {
  background-color: rgba(60, 60, 60, 0.95);
}

:global(.dark-theme) .button-tooltip {
  color: #fff;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .sidebar-mode {
    display: none;
  }
}
</style>