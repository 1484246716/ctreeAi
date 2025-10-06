// 修复导入语句
import { createApp } from 'vue'
import TextSelectionActions from './quickAction/ContextMenu.vue'
import { initBaiduSidebar } from './webAssistant/baidu/baiduSidebar.js'
import { initLinkDragHandler } from './webAssistant/link/linkDragHandler.js'
import { initQuickActionButtons } from './quickAction/initQuickActionButtons.js'

// 初始化文本选择操作组
function initTextSelectionActions() {
  // 创建Vue应用实例但不立即挂载
  const app = createApp(TextSelectionActions)
  
  // 创建一个容器元素用于挂载操作组
  let actionContainer = null
  let lastSelection = ''
  
  // 监听鼠标松开事件，检测文本选择
  let isMouseSelection = false;

document.addEventListener('mousedown', () => {
  isMouseSelection = true;
});

document.addEventListener('mouseup', (e) => {
    // 如果点击的是操作组本身，则不重新计算位置
    if (actionContainer && actionContainer.contains(e.target)) {
      console.log('点击了操作组，不重新计算位置');
      return;
    }
    
    // 获取选中文本
    const selectedText = window.getSelection().toString().trim()
    
    // 只有在选中文本时才显示操作组
    if (selectedText) {
      console.log('检测到文本选择:', selectedText);
      lastSelection = selectedText;
      if (actionContainer) {
        actionContainer.style.display = 'block';
        actionContainer.setAttribute('data-visible', 'true');
      }
      
      // 如果容器不存在，则创建并挂载
      if (!actionContainer) {
        actionContainer = document.createElement('div')
        actionContainer.id = 'vue-context-menu-container'
        document.body.appendChild(actionContainer)
        
        // 同步挂载并添加错误捕获
        try {
          app.mount(actionContainer);
          console.log('Vue组件同步挂载成功', actionContainer);
        } catch (error) {
          console.error('组件挂载失败:', {
            error: error.message,
            stack: error.stack,
            containerState: document.body.contains(actionContainer)
          });
        }
        
        // 验证渲染结果
        setTimeout(() => {
          const vm = actionContainer.__vue_app__?.config.globalProperties;
          console.debug('Vue实例状态:', {
            mounted: !!vm,
            container: actionContainer,
            children: actionContainer.children
          });
          
          // 新增DOM结构验证
          if (actionContainer.children.length > 0) {
            console.log('DOM元素已渲染:', actionContainer.innerHTML);
          } else {
            console.error('容器元素为空，Vue组件未正确渲染');
          }
        }, 100);
      }
      
      // 计算操作组的位置，确保在视口内
      let x = e.clientX + 10;
      let y = e.clientY - 10;
      
      // 简单的边界检查，避免超出视口
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
      
      // 向Vue组件发送消息，显示操作组
      const message = {
        type: 'SHOW_CONTEXT_MENU',
        x: x,
        y: y,
        selectedText: selectedText
      };
      console.log('发送显示操作组消息:', message);
      window.postMessage(message, '*');
    }
  })
  
  // 监听文本选择变化事件，处理键盘选择文本的情况
  document.addEventListener('selectionchange', () => {
  if (!isMouseSelection) {
    const selectedText = window.getSelection().toString().trim();
    
    if (lastSelection) {
      setTimeout(() => {
        const currentSelection = window.getSelection().toString().trim();
        console.debug('隐藏检测:', { 
          current: currentSelection, 
          last: lastSelection,
          containerVisible: actionContainer?.style.display
        });
        if (!currentSelection) {
          window.postMessage({ type: 'HIDE_CONTEXT_MENU' }, '*');
          lastSelection = '';
          if (actionContainer) {
            actionContainer.__vue_app__.config.globalProperties.visible = false;
            actionContainer.style.display = 'none';
            actionContainer.removeAttribute('data-visible');
          }
        }
      }, 150);
    }
  }
});
  
  // 点击页面其他地方时关闭操作组
  document.addEventListener('click', (e) => {
    // 添加50ms延迟，确保操作组有足够的时间渲染
    setTimeout(() => {
      // 排除对操作组本身的点击
      if (actionContainer && !actionContainer.contains(e.target)) {
        console.debug('全局点击事件触发隐藏:', { 
          target: e.target,
          containerVisible: actionContainer.style.display,
          lastSelection: lastSelection
        });
        // 只有在没有选中文本时才触发隐藏
        if (!lastSelection) {
          window.postMessage({ type: 'HIDE_CONTEXT_MENU' }, '*');
        }
        // 不移除lastSelection，保留选中文本状态
      }
    }, 50);
  })
}

// 显示通知的辅助函数
function showNotification(message) {
  // 创建一个通知元素
  const notification = document.createElement('div')
  notification.className = 'vue-context-menu-notification'
  notification.textContent = message
  document.body.appendChild(notification)
  
  // 2秒后自动移除通知
  setTimeout(() => {
    notification.classList.add('fade-out')
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 2000)
}

// 在DOM加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initTextSelectionActions()
    initBaiduSidebar()
    initLinkDragHandler()
    initQuickActionButtons()
  })
} else {
  initTextSelectionActions()
  initBaiduSidebar()
  initLinkDragHandler()
  initQuickActionButtons()
}