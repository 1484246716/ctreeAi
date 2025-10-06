<template>
  <div class="tab-view" :class="{'tab-view-all':props.isFillUp}">
    <!-- 滑动的背景元素 -->
    <div
        class="slider"
        :style="{
        width: sliderWidth,
        transform: `translateX(${sliderPosition}px)`,
        transition: 'transform 0.3s ease-in-out'
      }"
    ></div>

    <!-- 标签按钮 -->
    <span
        @click="changeFeeType(1)"
        :class="{'active-text': feeType === 1}"
        ref="tab1"
    >
      月度
    </span>
    <span
        @click="changeFeeType(2)"
        :class="{'active-text': feeType === 2}"
        ref="tab2"
    >
      年度
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, defineProps, onUnmounted } from 'vue';
const emit = defineEmits(['changeType']);
// 选中的标签类型
const feeType = ref(1);

// 标签元素的引用
const tab1 = ref(null);
const tab2 = ref(null);

// 滑动元素的样式属性
const sliderWidth = ref('0px');
const sliderPosition = ref(0);
const props = defineProps({
  isFillUp: {
    type: Boolean
  } // 是否撑满容器
});
// 初始化 - 获取标签宽度并设置初始位置
onMounted(() => {
  nextTick(() => {
    // 设置滑动块宽度为第一个标签的宽度
    sliderWidth.value = `${tab1.value.offsetWidth}px`;
    // 确保初始位置正确
    updateSliderPosition();
  });
  
  // 添加窗口尺寸变化的监听器
  window.addEventListener('resize', handleResize);
});

// 清理监听器
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

// 处理窗口尺寸变化
const handleResize = () => {
  // 使用防抖来避免频繁触发，避免使用类型断言
  const win = window;
  if (win.resizeTimeout) {
    clearTimeout(win.resizeTimeout);
  }
  win.resizeTimeout = setTimeout(() => {
    updateSliderPosition();
  }, 100);
};

// 切换标签类型
const changeFeeType = (type) => {
  if (feeType.value === type) return; // 避免重复点击

  feeType.value = type;
  emit('changeType',type)
  updateSliderPosition();
};

// 更新滑动块位置
const updateSliderPosition = () => {
  nextTick(() => {
    if (feeType.value === 1) {
      // 切换到月度标签
      sliderPosition.value = 0;
      sliderWidth.value = `${tab1.value.offsetWidth}px`;
    } else {
      // 切换到年度标签
      sliderPosition.value = tab1.value.offsetWidth;
      sliderWidth.value = `${tab2.value.offsetWidth}px`;
    }
  });
};
</script>

<style scoped lang="scss">
.tab-view {
  padding: 4px;
  border-radius: 8px;
  border: 0.5px solid var(--app-border-color, #e5e7eb);
  box-sizing: border-box;
  background: var(--pricePlan-tab-view-bg-color, #f9fafb);
  width: fit-content;
  position: relative; /* 用于滑动元素的定位 */
  display: inline-flex;
  align-items: center;
  span {
    height: fit-content;
    display: inline-flex;
    padding: 2px 16px;
    cursor: pointer;
    color: var(--pricePlan-text-color, #374151);
    font-family: "Alibaba PuHuiTi 2.0", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 4px;
    position: relative; /* 确保文字在滑动块上方 */
    z-index: 2;
    transition: color 0.3s ease;
  }
  .active-text {
    color: #fff;
    font-weight: 500;
  }

  /* 滑动的背景元素 */
  .slider {
    position: absolute;
    top: 4px;
    left: 4px;
    height: calc(100% - 8px);
    border-radius: 4px;
    background: var(--pricePlan-purple-color, #7c3aed);
    z-index: 1; /* 确保在文字下方 */
  }
}
.tab-view-all{
  width: 100%;
  span{
    width: 100%;
    justify-content: center;
  }
}
</style>
