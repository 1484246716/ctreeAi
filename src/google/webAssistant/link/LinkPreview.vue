<template>
  <div class="link-preview-overlay" v-show="visible" @click="handleOverlayClick">
    <!-- 蒙版背景 -->
    <div class="modal-backdrop"></div>
    
    <!-- 浏览器风格的弹窗容器 -->
    <div class="link-preview-container" @click.stop>
      <!-- 浏览器风格的顶部导航栏 -->
      <div class="preview-header">
        <div class="nav-bar">
          <div class="nav-buttons">
            <div class="nav-button close" @click="closePreview"></div>
            <div class="nav-button minimize"></div>
            <div class="nav-button maximize"></div>
          </div>
          <div class="address-bar">
            <div class="address-icon">🔗</div>
            <div class="address-text">{{ linkUrl }}</div>
          </div>
        </div>
      </div>
      
      <!-- 预览内容区域 -->
      <div class="preview-content">
        <div class="preview-loading" v-if="isLoading">
          <div class="loading-spinner"></div>
          <div class="loading-text">正在加载...</div>
        </div>
        
        <div class="preview-info" v-else>
          <div class="preview-icon">{{ getDomainIcon(linkUrl) }}</div>
          <div class="preview-title">{{ pageTitle || getDomainName(linkUrl) }}</div>
          <div class="preview-description">{{ pageDescription || '链接预览' }}</div>
          <div class="preview-actions">
            <button class="action-btn open-btn" @click="openLink">
              打开链接
            </button>
            <button class="action-btn copy-btn" @click="copyLink">
              复制链接
            </button>
            <button class="action-btn close-btn" @click="closePreview">
              关闭
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// 响应式数据
const visible = ref(false)
const linkUrl = ref('')
const isLoading = ref(true)
const pageTitle = ref('')
const pageDescription = ref('')

// 显示预览弹窗
const showPreview = (x, y) => {
  visible.value = true
  isLoading.value = true
  
  // 模拟加载页面信息
  setTimeout(() => {
    isLoading.value = false
    // 在实际应用中，这里可以通过API获取页面的标题和描述
  }, 800)
}

// 隐藏预览弹窗
const hidePreview = () => {
  visible.value = false
}

// 关闭预览弹窗（外部调用）
const closePreview = () => {
  hidePreview()
}

// 点击蒙版背景关闭预览
const handleOverlayClick = (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    closePreview()
  }
}

// 打开链接
const openLink = () => {
  if (linkUrl.value) {
    window.open(linkUrl.value, '_blank')
    hidePreview()
  }
}

// 复制链接
const copyLink = () => {
  if (linkUrl.value) {
    navigator.clipboard.writeText(linkUrl.value).then(() => {
      showNotification('链接已复制到剪贴板')
    }).catch(err => {
      console.error('复制失败:', err)
    })
  }
}

// 显示通知
const showNotification = (message) => {
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

// 获取域名名称
const getDomainName = (url) => {
  try {
    const parsedUrl = new URL(url)
    return parsedUrl.hostname
  } catch (error) {
    return url
  }
}

// 获取域名图标（根据域名返回不同的emoji图标）
const getDomainIcon = (url) => {
  try {
    const parsedUrl = new URL(url)
    const domain = parsedUrl.hostname.toLowerCase()
    
    if (domain.includes('baidu')) return '🔍'
    if (domain.includes('google')) return '🌐'
    if (domain.includes('github')) return '💻'
    if (domain.includes('twitter') || domain.includes('x.com')) return '🐦'
    if (domain.includes('facebook')) return '📘'
    if (domain.includes('youtube')) return '▶️'
    if (domain.includes('weibo')) return '🔴'
    if (domain.includes('taobao') || domain.includes('tmall')) return '🛒'
    
    // 默认图标
    return '🔗'
  } catch (error) {
    return '🔗'
  }
}

// 暴露方法给父组件
defineExpose({
  showPreview,
  hidePreview,
  closePreview
})

// 添加Esc键监听，按Esc键关闭预览
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && visible.value) {
      closePreview()
    }
  }
  document.addEventListener('keydown', handleEscape)
  
  // 清理监听器
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
/* 覆盖层样式 */
.link-preview-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999998;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease-out;
}

/* 蒙版背景样式 */
.modal-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1;
}

/* 预览容器样式 */
.link-preview-container {
  width: 450px;
  height: 350px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  z-index: 2;
  animation: slideIn 0.3s ease-out;
}

/* 浏览器风格顶部导航栏 */
.preview-header {
  background: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
}

.nav-bar {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  gap: 12px;
}

.nav-buttons {
  display: flex;
  gap: 6px;
}

.nav-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.nav-button.close {
  background: #ff5f56;
}

.nav-button.minimize {
  background: #ffbd2e;
}

.nav-button.maximize {
  background: #27c93f;
}

.address-bar {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
}

.address-icon {
  font-size: 14px;
}

.address-text {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666;
}

/* 预览内容区域 */
.preview-content {
  height: calc(100% - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* 加载状态 */
.preview-loading {
  text-align: center;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;
}

.loading-text {
  color: #666;
  font-size: 14px;
}

/* 预览信息 */
.preview-info {
  text-align: center;
  width: 100%;
}

.preview-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.preview-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.preview-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

/* 预览操作按钮 */
.preview-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
}

.action-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

.open-btn {
  background: #4285f4;
  color: white;
}

.open-btn:hover {
  background: #3367d6;
}

.copy-btn {
  background: #f5f5f5;
  color: #333;
  border: 1px solid #d0d0d0;
}

.copy-btn:hover {
  background: #e8e8e8;
}

/* 动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>