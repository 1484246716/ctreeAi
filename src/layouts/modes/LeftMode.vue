<script lang="ts" setup>
import { useDevice } from "@@/composables/useDevice"
import { useLayoutMode } from "@@/composables/useLayoutMode"
import { useAppStore } from "@/pinia/stores/app"
import { useSettingsStore } from "@/pinia/stores/settings"
import { AppMain, NavigationBar, Sidebar, TagsView } from "../components"
import ThirdLevelMenu from "@/layouts/components/ThirdLevelMenu/index.vue"
import FourthLevelMenu from "@/layouts/components/FourthLevelMenu/index.vue"
import { useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const { isMobile } = useDevice()

const { isLeft } = useLayoutMode()

const appStore = useAppStore()

const settingsStore = useSettingsStore()

const { showTagsView, fixedHeader } = storeToRefs(settingsStore)

/** 定义计算属性 layoutClasses，用于控制布局的类名 */
const layoutClasses = computed(() => {
  return {
    hideSidebar: !appStore.sidebar.opened,//控制侧边缩小
    openSidebar: appStore.sidebar.opened,
    mobile: isMobile.value,
    noLeft: !isLeft.value
  }
})

/** 用于处理点击 mobile 端侧边栏遮罩层的事件 */
function handleClickOutside() {
  appStore.closeSidebar(false)
}
// 提取公共路由搜索函数
const findRoute = (routes, path) => {
  for (const route of routes) {
    if (route.path === path) return route
    if (route.children) {
      const found = findRoute(route.children, path)
      if (found) return found
    }
  }
  return undefined
}

// 修正第三层级判断逻辑
const hasThirdLevelRoutes = computed(() => {
  // 获取当前激活的第二层级路由路径
  const activeSecondLevelPath = route.matched[1]?.path
  if (!activeSecondLevelPath) return false

  // 搜索完整路由表找到对应路由
  const secondLevelRoute = findRoute(router.getRoutes(), activeSecondLevelPath)
  // 判断是否存在子路由
  return !!secondLevelRoute?.children?.length
})

// 新增第四层级判断逻辑
const hasFourthLevelRoutes = computed(() => {
  // 获取当前激活的第三层级路由路径
  const activeThirdLevelPath = route.matched[2]?.path
  if (!activeThirdLevelPath) return false
  // 搜索完整路由表找到对应路由
  const thirdLevelRoute = findRoute(router.getRoutes(), activeThirdLevelPath)
  // 判断是否存在子路由
  return !!thirdLevelRoute?.children?.length
})

</script>

<template>
  <div :class="layoutClasses" class="app-wrapper">
    <!-- mobile 端侧边栏遮罩层 -->
    <div v-if="layoutClasses.mobile && layoutClasses.openSidebar" class="drawer-bg" @click="handleClickOutside" />
    <!-- 左侧边栏 -->
    <Sidebar class="sidebar-container" />
    <!-- 主容器 -->
    <div :class="{ hasTagsView: showTagsView }" class="main-container">
      <!-- 头部导航栏和标签栏 -->
      <div :class="{ 'fixed-header': fixedHeader }" class="layout-header">
        <NavigationBar />
        <!--        <TagsView v-show="showTagsView" />-->
      </div>
      <div class="app-main-box">
        <!-- 三级侧边栏 -->
        <ThirdLevelMenu v-if="hasThirdLevelRoutes" />
        <!-- 四级侧边栏 -->
        <FourthLevelMenu v-if="hasFourthLevelRoutes" />
        <!-- 页面主体内容 -->
        <AppMain class="app-main" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@@/assets/styles/mixins.scss";
$transition-time: 0.35s;

.app-wrapper {
  //@extend %clearfix;
  //position: relative;
  //width: 100%;

  @extend %clearfix;
  position: relative;
  width: 100%;
  height: 100vh; /* 添加根容器高度 */
  overflow: hidden;

}

.drawer-bg {
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.sidebar-container {
  transition: width $transition-time;
  width: var(--v3-sidebar-width);
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}

.main-container {
  //min-height: 100%;
  transition: margin-left $transition-time;
  //margin-left: var(--v3-sidebar-width);
  //position: relative;
  //border-radius:16px;
  //border-bottom: 0.5px solid #b1abcf;
  margin-top:16px;
  margin-right:32px;
  min-height:calc(100vh - 32px);
  height:calc(100% - 32px);
  box-sizing: border-box;
  margin-left: var(--v3-sidebar-width);
  position: relative;
  display: flex; /* 添加flex布局 */
  flex-direction: column; /* 垂直排列子元素 */
  border: 0.5px solid  var(--app-border-color);
  border-radius: 16px;

}

.fixed-header {
  width: 100%;
  transition: width $transition-time;
}
.layout-header {
  position: relative;
  z-index: 9;
  border-bottom: 0.5px solid var(--app-border-color);
}
.app-main-box{
  flex:1;
  display: flex;
  //padding-top: var(--v3-navigationbar-height);
  //min-height: calc(100vh - var(--v3-navigationbar-height));
  //height:98%;
  overflow: hidden; /* 添加此属性防止容器本身滚动 */

}
.app-main {
  //height:100%;
  //position: relative;
  //overflow: hidden;
  flex: 1; /* 确保占据剩余空间 */
  overflow-y: auto; /* 内容溢出时内部滚动 */
  height: 100%; /* 强制高度继承 */
  box-sizing: border-box; /* 添加盒模型计算规则 */

}

.fixed-header + .app-main {

  height: 100vh;
  overflow: auto;
}

.hasTagsView {
  .app-main {
    min-height: calc(100vh - var(--v3-header-height));
  }
  .fixed-header + .app-main {
    padding-top: var(--v3-header-height);
  }
}



// 适配 mobile 端
.mobile {
  .sidebar-container {
    transition: transform $transition-time;
    width: var(--v3-sidebar-width);
  }
  .main-container {
    margin-left: 0px;
  }
  .fixed-header {
    width: 100%;
  }
  &.openSidebar {
    position: fixed;
    top: 0;
  }
  // 既是 mobile 又是顶部或混合布局模式
  &.noLeft {
    .sidebar-container {
      background-color: var(--el-bg-color);
    }
  }
}
.hideSidebar {
  .sidebar-container {
    width: var(--v3-sidebar-hide-width);
  }
  .main-container {
    margin-left: var(--v3-sidebar-hide-width);
  }
}


</style>

