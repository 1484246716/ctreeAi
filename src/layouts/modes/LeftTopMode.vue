<script lang="ts" setup>
import { useAppStore } from "@/pinia/stores/app"
import { useSettingsStore } from "@/pinia/stores/settings"
import { AppMain} from "../components"
import Header from "@/layouts/components/adminPages/Header/index.vue"
import adminPagesSidebarH5 from "@/layouts/components/adminPages/adminPagesSidebarH5/index.vue";
import type { RouteRecordRaw } from 'vue-router'
import {useDevice} from "@@/composables/useDevice.ts";
import {useRoute} from "vue-router";
import {computed, watch, onMounted} from "vue";
import { storeToRefs } from 'pinia';
const router = useRouter()
const route = useRoute()
const appStore = useAppStore()
const settingsStore = useSettingsStore()
const { showTagsView, showLogo } = storeToRefs(settingsStore)
const { isMobile } = useDevice()

const herf=ref('');
/** 定义计算属性 layoutClasses，用于控制布局的类名 */
const layoutClasses = computed(() => {
  return {
    openSidebar: appStore.sidebar.opened,
    withoutAnimation: appStore.sidebar.withoutAnimation,
    mobile: isMobile.value,
  }
})
const handleClose=()=>{
  appStore.closeSidebar(false)
}
const threeLevelRoute=ref('');//三级路由
const fourLevelRoute=ref(route.path);//四级路由
// 提取公共路由搜索函数
const findRoute = (routes: RouteRecordRaw[], path: string): RouteRecordRaw | undefined => {
  for (const route of routes) {
    if (route.path === path) return route
    if (route.children) {
      const found = findRoute(route.children, path)
      if (found) return found
    }
  }
  return undefined
}

// 第三层路由判断逻辑
const hasThirdLevelRoutes = computed(() => {
  // 获取当前激活的第二层级路由路径
  const activeSecondLevelPath = route.matched[1]?.path
  if (!activeSecondLevelPath) return false
  // 搜索完整路由表找到对应路由
  const secondLevelRoute = findRoute(router.getRoutes(), activeSecondLevelPath)
  // 判断是否存在子路由
  return !!secondLevelRoute?.children?.length
})
// 第四层级路由判断逻辑
const hasFourthLevelRoutes = computed(() => {
  // 获取当前激活的第三层级路由路径
  const activeThirdLevelPath = route.matched[2]?.path
  if (!activeThirdLevelPath) return false
  // 搜索完整路由表找到对应路由
  const thirdLevelRoute = findRoute(router.getRoutes(), activeThirdLevelPath)
  // 判断是否存在子路由
  return !!thirdLevelRoute?.children?.length
})

const activeSecondLevelPath = computed(() => {
  const matched = route.matched
  return matched.length > 1 ? matched[1].path : ''
})
// console.log(route,'==activeSecondLevelPath==')
// 获取三级菜单路由
const thirdLevelItems = computed(() => {
  // console.log(activeSecondLevelPath,'==activeSecondLevelPath==')
  if (!activeSecondLevelPath.value) return []
  // 修复：使用 getRoutes() 获取完整路由列表（含动态添加路由）
  const findRoute = (routes: RouteRecordRaw[], path: string): RouteRecordRaw | undefined => {
    for (const route of routes) {
      if (route.path === path) return route
      if (route.children) {
        const found = findRoute(route.children, path)
        if (found) return found
      }
    }
    return undefined
  }
  const routeRecord = findRoute(router.getRoutes(), activeSecondLevelPath.value)
  let list=routeRecord?.children?.map(item=>{
    return {
      label:item?.meta?.title,
      value:item?.path,
      svgIcon:item?.meta?.svgIcon,
    }
  })
  // console.log(list,'==23333routeRecord==')
  return list || []
})
// 获取当前激活的三级菜单路径
const activeThirdLevelPath = computed(() => {
  const matched = route.matched
  return matched.length > 2 ? matched[2].path : ''
})
// 获取四级菜单路由
const fourthLevelItems = computed(() => {
  if (!activeThirdLevelPath.value) return []

  const findRoute = (routes: RouteRecordRaw[], path: string): RouteRecordRaw | undefined => {
    for (const route of routes) {
      if (route.path === path) return route
      if (route.children) {
        const found = findRoute(route.children, path)
        if (found) return found
      }
    }
  }

  const routeRecord = findRoute(router.getRoutes(), activeThirdLevelPath.value)
  let list=routeRecord?.children?.map(item=>{
    return {
      label:item?.meta?.title,
      value:item?.path,
      svgIcon:item?.meta?.svgIcon,
    }
  })
  // console.log(list,'==34444routeRecord==')
  return list || []
})


const getThreeLevelRoute=()=>{
  // 获取当前激活的三级路由路径
  const matched = route.matched;
  if (matched.length > 2) {
    threeLevelRoute.value = matched[2].path;
  } else {
    // 如果没有三级路由，检查当前路径是否在三级路由列表中
    const currentPath = route.path;
    const thirdLevelItem = thirdLevelItems.value.find(item => item.value === currentPath);
    if (thirdLevelItem) {
      threeLevelRoute.value = currentPath;
    } else {
      // 默认选择第一个三级路由（如果有）
      threeLevelRoute.value = thirdLevelItems.value[0]?.value || '';
    }
  }
}
watch(route, () => { // 取消选中状态
  getThreeLevelRoute()
  fourLevelRoute.value=route.path;
  herf.value=window.location.pathname;
})
onMounted(()=>{
  herf.value=window.location.pathname;
  getThreeLevelRoute()
  // 确保 threeLevelRoute 的值在 thirdLevelItems 中存在
  if (threeLevelRoute.value && 
      !thirdLevelItems.value.some(item => item.value === threeLevelRoute.value)) {
    threeLevelRoute.value = thirdLevelItems.value[0]?.value || '';
  }
})
const changeRouter=(path: string)=>{
  if(path){
    router.push(path)
  }
}
const threeLevelRouteIcon=computed(()=>{
  let item=thirdLevelItems.value.find(item=>item.value==threeLevelRoute.value);
  return item?.svgIcon
})
const fourLevelRouteIcon=computed(()=>{
  let item=fourthLevelItems.value.find(item=>item.value==fourLevelRoute.value);
  return item?.svgIcon
})

</script>

<template>
  <div :class="layoutClasses" class="app-wrapper">
    <Header />
    <!-- 主容器 -->
    <div :class="{ hasTagsView: showTagsView }" class="main-container">
      <div class="p-[16px] box-border " v-if="hasThirdLevelRoutes||hasFourthLevelRoutes">
        <!-- 三级路由 -->
        <div class="m-b-[16px]" v-if="hasThirdLevelRoutes">
          <el-select  v-model="threeLevelRoute" @change="changeRouter" class="app-form-select app-form-select-width-all"  popper-class="app-form-select-popper" placeholder="please select your zone">
            <template #prefix>
              <SvgIcon v-if="threeLevelRouteIcon" :name="threeLevelRouteIcon||''" class="svg-icon" />
            </template>
            <el-option v-for="item in thirdLevelItems" :key="item.value" :label="item.label" :value="item.value">
              <div class="optionsView">
                <SvgIcon v-if="item.svgIcon" :name="item.svgIcon" class="svg-icon" style="margin-right: 8px" />
                <span>{{ item.label }}</span>
              </div>
            </el-option>
          </el-select>
        </div>
        <!-- 四级路由 -->
        <el-select  v-model="fourLevelRoute" @change="changeRouter" v-if="hasFourthLevelRoutes" class="app-form-select app-form-select-width-all"  popper-class="app-form-select-popper" placeholder="please select your zone">
          <template #prefix>
            <SvgIcon v-if="fourLevelRouteIcon" :name="fourLevelRouteIcon||''" class="svg-icon" />
          </template>
          <el-option v-for="item in fourthLevelItems" :key="item.value" :label="item.label" :value="item.value">
            <div class="optionsView">
              <SvgIcon v-if="item.svgIcon" :name="item.svgIcon" class="svg-icon" style="margin-right: 8px" />
              <span>{{ item.label }}</span>
            </div>
          </el-option>
        </el-select>
      </div>
      <!-- 页面主体内容 -->
      <div :class="{'mobile-view':layoutClasses.mobile&&![herf].includes('/admin/workbench')}" >
        <AppMain class="app-main" />
      </div>

    </div>
  </div>
  <!-- 左侧边栏 -->
  <el-drawer
      v-if="layoutClasses.mobile"
      :with-header="false"
      size="80%"
      direction="ltr"
      :lock-scroll="true"
      header-class="mobile-sidebar-header"
      body-class="mobile-sidebar-body"
      v-model="layoutClasses.openSidebar"
      :before-close="handleClose">
    <adminPagesSidebarH5 />
  </el-drawer>
</template>

<style lang="scss" scoped>
@import "@@/assets/styles/mixins.scss";
$transition-time: 0.35s;

.app-wrapper {
  @extend %clearfix;
  width: 100%;
}
.mobile-view{
  padding:0 16px ;
  box-sizing: border-box;
  .app-main{
    border-radius:  8px;
    border: 0.5px solid var(--app-border-color);
    background: var(--generalSettings-bg-color);
  }
}


.main-container {
  min-height: 100%;
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
.optionsView{
  display: flex;
  align-items: center;
  gap:8px;
}
</style>
