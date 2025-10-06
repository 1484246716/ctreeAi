<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 响应式数据
const selectedText = ref('')
const history = ref<Array<{id: number, text: string, action: string, timestamp: string}>>([])

// 方法定义
const copyText = () => {
  if (selectedText.value) {
    navigator.clipboard.writeText(selectedText.value)
    addHistory('复制', selectedText.value)
  }
}

const highlightText = () => {
  if (selectedText.value) {
    addHistory('高亮', selectedText.value)
    alert(`已高亮文本: ${selectedText.value}`)
  }
}

const explainText = () => {
  if (selectedText.value) {
    addHistory('解释', selectedText.value)
    alert(`解释功能: ${selectedText.value}`)
  }
}

const addHistory = (action: string, text: string) => {
  const item = {
    id: Date.now(),
    action: action,
    text: text,
    timestamp: new Date().toLocaleString()
  }
  history.value.unshift(item)
  // 限制历史记录数量
  if (history.value.length > 50) {
    history.value.pop()
  }
}

// 组件挂载时的逻辑
onMounted(() => {
  // 这里可以初始化一些数据或监听事件
  console.log('Chat页面已加载')
})

// 组件卸载时清理监听器
onUnmounted(() => {
  // 清理工作
})
</script>

<template>
  <div class="chat-container">
    <div class="header">
      <h2>CTree AI 侧边栏</h2>
    </div>
    
    <div class="content">
      <textarea 
        v-model="selectedText" 
        class="text-input" 
        placeholder="选中的文本将显示在这里..."
      ></textarea>
      
      <div class="actions">
        <button class="action-btn" @click="copyText">📄 复制</button>
        <button class="action-btn" @click="highlightText">🎨 高亮</button>
        <button class="action-btn" @click="explainText">❓ 解释</button>
      </div>
      
      <div class="history">
        <h3>历史记录</h3>
        <div class="history-list">
          <div 
            v-for="item in history" 
            :key="item.id" 
            class="history-item"
          >
            <p class="history-text">{{ item.text.substring(0, 50) }}{{ item.text.length > 50 ? '...' : '' }}</p>
            <div class="history-meta">
              <span>{{ item.action }}</span> • <span>{{ item.timestamp }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
}

.header h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
}

.text-input {
  width: 100%;
  min-height: 100px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  margin-bottom: 16px;
  font-family: inherit;
}

.actions {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.action-btn {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background: #f0f0f0;
  cursor: pointer;
  transition: background 0.2s;
}

.action-btn:hover {
  background: #e0e0e0;
}

.history h3 {
  margin-top: 0;
}

.history-list {
  max-height: 300px;
  overflow-y: auto;
}

.history-item {
  padding: 8px;
  border-bottom: 1px solid #f0f0f0;
}

.history-text {
  font-size: 14px;
  margin: 0 0 4px 0;
}

.history-meta {
  font-size: 12px;
  color: #666;
}
</style>