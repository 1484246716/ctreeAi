<template>
  <div class="baidu-sidebar-container" v-show="visible">
    <div class="baidu-sidebar-header">
      <span class="sidebar-title">Ctree AI</span>
      <button class="sidebar-settings-btn" title="设置">
        ⚙️
      </button>
    </div>
    <div class="baidu-sidebar-content">
      <div class="search-query-container">
        <div class="query-label">搜索关键词:</div>
        <div class="query-text">{{ searchQuery }}</div>
      </div>
      <div class="sidebar-footer">
        <div class="model-switcher">
          <span class="model-label">模型:</span>
          <select v-model="selectedModel" class="model-select">
            <option value="ctree-ai">Ctree AI</option>
            <option value="gpt-3.5">GPT-3.5</option>
            <option value="gpt-4">GPT-4</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

// 设置默认值为true，确保组件始终显示
const visible = ref(true)
// 设置默认搜索查询内容，以便在没有获取到搜索框内容时也能看到组件
const searchQuery = ref('默认测试内容 - 百度搜索侧边栏功能')
const selectedModel = ref('ctree-ai')

// 从外部接收搜索框内容的方法
const updateSearchQuery = (query) => {
  console.log('BaiduSidebar组件接收到搜索查询:', query)
  searchQuery.value = query || '无搜索内容'
  visible.value = true // 始终设置为true，确保组件显示
  
  // 强制更新视图
  nextTick(() => {
    const container = document.getElementById('ctree-ai-baidu-sidebar')
    if (container) {
      container.style.display = 'block'
    }
  })
}

onMounted(() => {
  console.log('百度侧边栏组件已挂载', { visible: visible.value, searchQuery: searchQuery.value })
  
  // 确保DOM已经渲染
  nextTick(() => {
    const container = document.getElementById('ctree-ai-baidu-sidebar')
    if (container) {
      console.log('侧边栏容器DOM存在:', container)
      container.style.display = 'block'
    } else {
      console.warn('侧边栏容器DOM不存在')
    }
  })
})

onUnmounted(() => {
  console.log('百度侧边栏组件已卸载')
})

// 添加一个简单的方法用于调试
const debugSidebar = () => {
  return {
    visible: visible.value,
    searchQuery: searchQuery.value,
    selectedModel: selectedModel.value
  }
}

// 暴露更多方法给外部调用
defineExpose({
  updateSearchQuery,
  debugSidebar,
  visible,
  searchQuery,
  selectedModel
})
</script>

<style scoped>
.baidu-sidebar-container {
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.baidu-sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.sidebar-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.sidebar-settings-btn {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.sidebar-settings-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.baidu-sidebar-content {
  padding: 16px;
}

.search-query-container {
  margin-bottom: 16px;
}

.query-label {
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
}

.query-text {
  font-size: 14px;
  color: #333;
  background-color: rgba(0, 0, 0, 0.03);
  padding: 8px 12px;
  border-radius: 6px;
  word-break: break-word;
}

.sidebar-footer {
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.model-switcher {
  display: flex;
  align-items: center;
  gap: 8px;
}

.model-label {
  font-size: 12px;
  color: #666;
}

.model-select {
  padding: 4px 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-size: 12px;
  background-color: white;
  cursor: pointer;
}

.model-select:focus {
  outline: none;
  border-color: #4285f4;
}
</style>