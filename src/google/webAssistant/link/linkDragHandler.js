import { createApp } from 'vue'
import LinkPreview from './LinkPreview.vue'

// 初始化链接拖拽功能
export function initLinkDragHandler() {
  console.log('初始化链接拖拽功能')
  
  // 创建Vue应用实例
  let app = null
  let linkPreviewComponent = null
  
  // 创建一个容器元素用于挂载预览弹窗
  let previewContainer = null
  let vueAppInstance = null
  
  // 为了调试方便，将实例暴露到window对象
  window.ctreeAiLinkDrag = {
    app,
    createLinkPreview,
    hideLinkPreview,
    showLinkPreview
  }
  
  // 创建并挂载链接预览弹窗
  function createLinkPreview(url, x, y) {
    console.log('开始创建链接预览弹窗', { url, x, y })
    
    // 先移除已存在的预览容器
    if (previewContainer) {
      try {
        const parent = previewContainer.parentNode
        if (parent) {
          console.log('移除已存在的预览容器')
          parent.removeChild(previewContainer)
        }
      } catch (error) {
        console.warn('移除预览容器时出错:', error)
      }
    }
    
    // 创建预览容器
    previewContainer = document.createElement('div')
    previewContainer.id = 'ctree-ai-link-preview'
    
    // 设置初始样式
    previewContainer.style.position = 'fixed'
    previewContainer.style.zIndex = '999999' // 更高的z-index确保显示在其他插件上面
    previewContainer.style.display = 'none'
    document.body.appendChild(previewContainer)
    
    // 挂载Vue组件
    try {
      // 确保每次都创建新的Vue应用实例和组件
      if (app) {
        // 卸载之前的应用
        app.unmount()
      }
      
      app = createApp(LinkPreview)
      vueAppInstance = app.mount(previewContainer)
      linkPreviewComponent = vueAppInstance
      console.log('链接预览组件挂载成功', { vueAppInstance })
      
      // 设置链接和位置
      if (vueAppInstance) {
        vueAppInstance.linkUrl = url
        showLinkPreview(x, y)
      }
    } catch (error) {
      console.error('链接预览组件挂载失败:', error)
    }
  }
  
  // 显示链接预览弹窗
  function showLinkPreview(x, y) {
    if (!previewContainer) return
    
    // 计算位置，确保在视口内
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const previewWidth = 450 // 匹配组件实际宽度
    const previewHeight = 350 // 匹配组件实际高度
    
    // 边界检查
    if (x + previewWidth > viewportWidth) {
      x = viewportWidth - previewWidth
    }
    if (y + previewHeight > viewportHeight) {
      y = viewportHeight - previewHeight
    }
    if (x < 0) x = 0
    if (y < 0) y = 0
    
    // 设置位置并显示
    previewContainer.style.left = x + 'px'
    previewContainer.style.top = y + 'px'
    previewContainer.style.display = 'block'
    
    // 通知Vue组件
    if (vueAppInstance && vueAppInstance.showPreview) {
      vueAppInstance.showPreview(x, y)
      console.log('通知Vue组件显示预览')
    }
  }
  
  // 隐藏链接预览弹窗
  function hideLinkPreview() {
    if (previewContainer) {
      previewContainer.style.display = 'none'
      
      // 通知Vue组件
      if (vueAppInstance && vueAppInstance.hidePreview) {
        vueAppInstance.hidePreview()
      }
    }
    
    // 重置链接预览组件状态，确保下次拖拽可以正常显示
    if (linkPreviewComponent) {
      linkPreviewComponent.linkUrl = ''
    }
  }
  
  // 监听拖拽事件
  function setupDragListeners() {
    // 拖拽开始时检查是否为链接
    let isLinkBeingDragged = false
    let draggedLinkUrl = ''
    
    // 监听拖拽开始事件
    document.addEventListener('dragstart', (e) => {
      // 检查被拖拽的元素是否为链接或包含在链接内
      const linkElement = e.target.closest('a')
      if (linkElement && linkElement.href) {
        isLinkBeingDragged = true
        draggedLinkUrl = linkElement.href
        console.log('检测到链接拖拽开始:', draggedLinkUrl)
      }
    })
    
    // 监听拖拽移动事件
    document.addEventListener('dragover', (e) => {
      e.preventDefault() // 允许放置
      
      if (isLinkBeingDragged) {
        // 在拖拽过程中显示预览
        const x = e.clientX + 10
        const y = e.clientY + 10
        
        if (!previewContainer || previewContainer.style.display === 'none') {
          createLinkPreview(draggedLinkUrl, x, y)
        } else {
          showLinkPreview(x, y)
        }
      }
    })
    
    // 监听拖拽结束事件
    document.addEventListener('dragend', () => {
      if (isLinkBeingDragged) {
        // 拖拽结束后保持预览显示，不自动隐藏
        console.log('链接拖拽结束，保持预览显示')
        
        isLinkBeingDragged = false
        draggedLinkUrl = ''
      }
    })
  }
  
  // 初始化拖拽监听器
  setupDragListeners()
}

// 导出初始化函数以便在其他地方调用
export default initLinkDragHandler