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
          title="选中/取消选中"
        >
          {{ item.selected ? '✓' : '○' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

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

const emit = defineEmits(['itemClick', 'selectionChange'])
const dropdownRef = ref(null)

const handleItemClick = (item) => {
  emit('itemClick', item)
}

const toggleItemSelection = (item, event) => {
  event.stopPropagation() // 阻止事件冒泡，避免触发外层mouseup事件导致操作组抖动
  const updatedItem = {
    ...item,
    selected: !item.selected
  }
  emit('selectionChange', updatedItem)
}

// 确保点击下拉菜单外部时不会关闭整个操作组
const handleOutsideClick = (e) => {
  // 阻止事件冒泡到document
  e.stopPropagation()
}

onMounted(() => {
  // 监听document的点击事件，但在组件内部处理
  if (dropdownRef.value) {
    dropdownRef.value.addEventListener('click', handleOutsideClick)
  }
})

onUnmounted(() => {
  if (dropdownRef.value) {
    dropdownRef.value.removeEventListener('click', handleOutsideClick)
  }
})
</script>

<style scoped>
.action-dropdown-wrapper {
  position: relative;
}

.action-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  min-width: 200px;
  margin-top: 8px;
  z-index: 1000;
  overflow: hidden;
}

.dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

.item-text {
  color: #333;
  font-size: 14px;
}

.toggle-btn {
  width: 24px;
  height: 24px;
  border: 2px solid #9c27b0;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: transparent;
  transition: all 0.2s ease;
}

.toggle-btn:hover {
  transform: scale(1.1);
}

.toggle-btn.active {
  background: #9c27b0;
  color: white;
}
</style>