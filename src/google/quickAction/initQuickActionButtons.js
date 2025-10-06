import { createApp } from 'vue'
import SidebarActionButtons from './components/SidebarActionButtons.vue'

/**
 * 初始化侧边栏快速操作按钮组
 * 该函数负责创建和挂载侧边栏操作按钮组件
 */
export function initQuickActionButtons() {
  console.log('初始化侧边栏快速操作按钮组')
  
  // 检查是否已经存在按钮组容器
  let container = document.getElementById('ctree-ai-sidebar-action-buttons')
  
  if (!container) {
    // 创建容器元素
    container = document.createElement('div')
    container.id = 'ctree-ai-sidebar-action-buttons'
    document.body.appendChild(container)
  }
  
  try {
    // 创建Vue应用实例并挂载组件
    const app = createApp(SidebarActionButtons)
    const instance = app.mount(container)
    
    console.log('侧边栏快速操作按钮组组件已成功挂载')
    
    // 暴露实例到window对象，方便调试和外部调用
    window.ctreeAiQuickAction = {
      instance,
      toggleSidebar: instance.toggleSidebar,
      toggleTheme: instance.toggleTheme,
      toggleSearch: instance.toggleSearch,
      toggleBookmarks: instance.toggleBookmarks,
      toggleSettings: instance.toggleSettings
    }
    
    return instance
  } catch (error) {
    console.error('侧边栏快速操作按钮组组件挂载失败:', error)
    return null
  }
}

/**
 * 销毁侧边栏快速操作按钮组
 */
export function destroyQuickActionButtons() {
  console.log('销毁侧边栏快速操作按钮组')
  
  const container = document.getElementById('ctree-ai-sidebar-action-buttons')
  if (container) {
    try {
      // 移除容器元素
      container.parentNode.removeChild(container)
      console.log('侧边栏快速操作按钮组已成功销毁')
    } catch (error) {
      console.error('销毁侧边栏快速操作按钮组时出错:', error)
    }
  }
  
  // 清理window对象上的引用
  if (window.ctreeAiQuickAction) {
    delete window.ctreeAiQuickAction
  }
}

// 默认导出初始化函数
export default initQuickActionButtons