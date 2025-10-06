<template>
  <div class="VisitorChart-main rounded-xl p-[16px]  mx-auto">

    <div class="top-view">
      <h1 class="title">访客总数</h1>
      <div class="box-view">
        <div class="box-item box-item-active">过去3个月</div>
        <div class="box-item">过去30天</div>
        <div class="box-item">过去7天</div>
      </div>
    </div>

    <div class="flex justify-between items-center mb-4">
      <div class="text-sm text-[var(--app-form-top-title-p)]">
        过去3个月的总访客数量
      </div>
      <div class="flex space-x-2">
      </div>
    </div>

    <!-- 确保容器没有额外内边距，增强约束以防止溢出 -->
    <div ref="chart" class="h-96 w-full p-0 m-0 min-w-0" style="width:100%;max-width:100%;box-sizing:border-box;overflow:hidden;"></div>

  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted, watch } from 'vue';
import * as echarts from 'echarts';
import {useAppStore} from "@/pinia/stores/app.js";
const appStore = useAppStore()

const chart = ref(null);

// 生成60天数据
const generateData = () => {
  const desktopData = [];
  const mobileData = [];
  for (let i = 1; i <= 60; i++) {
    desktopData.push(Math.floor(Math.random() * 1000) + 800);
    mobileData.push(Math.floor(Math.random() * 1200) + 1000);
  }
  return { desktopData, mobileData };
};

const { desktopData, mobileData } = generateData();

// 计算统计数据
const totalVisits = computed(() => {
  return [...desktopData, ...mobileData].reduce((a, b) => a + b, 0);
});

const mobilePercentage = computed(() => {
  return Math.round(mobileData.reduce((a, b) => a + b, 0) / totalVisits.value * 100);
});

const desktopPercentage = computed(() => {
  return 100 - mobilePercentage.value;
});

// 格式化数字显示
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// 初始化图表
onMounted(() => {
  const myChart = echarts.init(chart.value);

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: (params) => {
        const day = params[0].dataIndex + 1;
        const month = day <= 30 ? 4 : 5;
        const date = day <= 30 ? day : day - 30;
        return `
          <div class="font-medium">${month}.${date}</div>
          <div class="flex items-center mt-1">
            <span class="inline-block w-3 h-3 rounded-full bg-purple-600 mr-2"></span>
            桌面端: <span class="font-bold ml-1">${params[0].value}</span>
          </div>
          <div class="flex items-center mt-1">
            <span class="inline-block w-3 h-3 rounded-full bg-indigo-400 mr-2"></span>
            移动端: <span class="font-bold ml-1">${params[1].value}</span>
          </div>
        `;
      }
    },
    legend: {
      data: ['桌面端', '移动端'],
      right: 20,
      top: 10
    },
    // 关键修改：进一步调整网格配置
    grid: {
      left: 0,          // 左侧完全贴边
      right: 0,         // 右侧完全贴边
      bottom: 0,        // 底部贴边
      top: '12%',       // 顶部预留空间给图例
      containLabel: false  // 允许标签超出网格，避免左侧留白
    },
      // 确保图表尺寸严格受容器限制
      graphic: {
        type: 'group',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      },
    xAxis: {
      type: 'category',
      data: Array.from({length: 60}, (_, i) => {
        const day = i + 1;
        const month = day <= 30 ? 4 : 5;
        const date = day <= 30 ? day : day - 30;
        return [1,10,20,30].includes(date) ? `${month}.${date}` : '';
      }),
      axisLabel: {
        interval: 0,
        formatter: value => value === '' ? null : value
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // 新增：去除x轴两边的内边距
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      show: false,
      axisLine: { show: false },
      splitLine: { lineStyle: { color: '#f3f4f6' } }
    },
    series: [
      {
        name: '桌面端',
        type: 'bar',
        stack: 'total',
        data: desktopData,
        barCategoryGap: '10%',
        barGap: '5%',
        itemStyle: {
          color: '#8b5cf6',
          borderRadius: [2, 2, 0, 0]
        }
      },
      {
        name: '移动端',
        type: 'bar',
        stack: 'total',
        data: mobileData,
        barCategoryGap: '10%',
        barGap: '5%',
        itemStyle: {
          color: '#a5b4fc',
          borderRadius: [2, 2, 0, 0]
        }
      }
    ]
  };

  myChart.setOption(option);

  // 响应式调整 - 增强版
  const resizeChart = () => {
    if (myChart && chart.value) {
      // 确保图表容器有正确的尺寸计算
      const containerWidth = chart.value.clientWidth;
      
      // 强制重新计算并应用尺寸
      myChart.resize();
      
      // 添加二次触发以确保完全适应
      setTimeout(() => {
        if (myChart) {
          myChart.resize();
        }
      }, 50);
    }
  };
  
  // 添加防抖处理
  let resizeTimer;
  const handleResize = () => {
    clearTimeout(resizeTimer);
    // 增加一点延迟以确保DOM更新完成
    resizeTimer = setTimeout(resizeChart, 150);
  };
  
  window.addEventListener('resize', handleResize);
  
  // 监听侧边栏打开状态变化
  watch(
    () => appStore.sidebar.opened,
    (newVal) => {
      handleResize();
    }
  );
  
  // 组件卸载时清理事件监听器
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    if (resizeTimer) {
      clearTimeout(resizeTimer);
    }
  });
});
</script>

<style scoped>
/* 可添加组件特有样式 */

.top-view{
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title{
    color: var(--app-h2-text-Light-color);
    font-family: "Alibaba PuHuiTi 2.0";
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  .box-view{
    display: flex;
    align-items: center;
    justify-content: center;
    border:0.5px solid  var(--app-border-color);
    border-radius:8px;
    overflow: hidden;
    .box-item{
      width: fit-content;
      height: fit-content;
      display: inline-flex;
      place-content: center;
      place-items: center;
      padding: 4px 8px;
      border-right: 0.5px solid var(--app-border-color);
      color: var(--Text-3, #615b7c);
      font-family: "Alibaba PuHuiTi 2.0";
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      cursor: pointer;
      &:last-of-type{
        border:0;
      }
    }
    .box-item-active{
      background: var(--app-purpleButton-bg-color);
      color:#fff;
    }
  }
}

/* 确保图表容器没有额外间距 */
:deep(.echarts-container) {
  width: 100% !important;
  height: 100% !important;
}

@media (max-width: 1000px){
  .VisitorChart-main{
    border-radius: 8px;
    border: 0.5px solid var(--app-border-color);

    .top-view{
      flex-direction: column;
      align-items: flex-start;
      gap:16px;
      margin-bottom:4px;
      border:0 !important;
      .title{
        order:2;
      }
      .box-view{
        width:100% !important;
        .box-item{
          width:100% !important;
        }
      }
    }
  }
}
</style>
