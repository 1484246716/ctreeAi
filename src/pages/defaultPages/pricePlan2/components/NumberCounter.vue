<template>
    <span>{{ currentValue }}</span>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

// 组件属性
const props = defineProps({
  target: { type: Number, required: true },
  start: { type: Number, default: 0 },
  duration: { type: Number, default: 3000 },
  step: { type: Number, default: 1 },
  autoStart: { type: Boolean, default: true }
});

// 发出的事件
const emit = defineEmits(['complete']);

// 状态变量
const currentValue = ref(props.start);
let timer = null;

// 计算动画步骤
const getSteps = () => {
  const steps = [];
  let current = props.start;
  const direction = props.target > props.start ? 1 : -1;
  const step = Math.abs(props.step) * direction;

  while (
      (direction > 0 && current < props.target) ||
      (direction < 0 && current > props.target)
      ) {
    const next = current + step;
    steps.push(direction > 0 ? Math.min(next, props.target) : Math.max(next, props.target));
    current = steps[steps.length - 1];
    if (steps.length > 10000) break; // 安全限制
  }

  return steps;
};

// 开始动画
const start = () => {
  clearTimeout(timer);
  currentValue.value = props.start;

  if (currentValue.value === props.target) {
    emit('complete');
    return;
  }

  const steps = getSteps();
  const interval = props.duration / steps.length;
  let i = 0;

  const animate = () => {
    if (i < steps.length) {
      currentValue.value = steps[i++];
      timer = setTimeout(animate, interval);
    } else {
      currentValue.value = props.target;
      emit('complete');
    }
  };

  timer = setTimeout(animate, interval);
};

// 停止动画
const stop = () => clearTimeout(timer);

// 重置动画
const reset = () => {
  stop();
  currentValue.value = props.start;
};

// 监听属性变化
watch(() => props.target, (newVal, oldVal) => newVal !== oldVal && props.autoStart && start());
watch(() => props.start, (val) => currentValue.value = val);

// 生命周期
onMounted(() => props.autoStart && start());
onUnmounted(stop);

// 暴露方法
defineExpose({ start, reset });
</script>

<style scoped>


</style>
