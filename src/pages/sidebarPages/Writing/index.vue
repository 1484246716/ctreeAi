<script setup lang="ts">
import { ref } from 'vue'

const content = ref('')
const wordCount = ref(0)

const updateWordCount = () => {
  wordCount.value = content.value.length
}
</script>

<template>
  <div class="writing-container">
    <div class="header">
      <h2>写作助手</h2>
    </div>
    
    <div class="content">
      <textarea 
        v-model="content" 
        @input="updateWordCount"
        class="writing-area" 
        placeholder="在这里开始写作..."
      ></textarea>
      
      <div class="stats">
        字符数: {{ wordCount }}
      </div>
      
      <div class="tools">
        <button class="tool-btn">保存</button>
        <button class="tool-btn">导出</button>
        <button class="tool-btn">AI润色</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.writing-container {
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
  display: flex;
  flex-direction: column;
}

.writing-area {
  flex: 1;
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  font-family: inherit;
  margin-bottom: 16px;
}

.stats {
  margin-bottom: 16px;
  font-size: 14px;
  color: #666;
}

.tools {
  display: flex;
  gap: 8px;
}

.tool-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #f0f0f0;
  cursor: pointer;
  transition: background 0.2s;
}

.tool-btn:hover {
  background: #e0e0e0;
}
</style>