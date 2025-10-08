<script setup lang="ts">
import Item from "./Item.vue";
import {useAppStore} from "@/pinia/stores/app.ts";
import {useLayoutMode} from "@@/composables/useLayoutMode.ts";
import {usePermissionStore} from "@/pinia/stores/permission.ts";
import {useDevice} from "@@/composables/useDevice.ts";
import {getCssVar} from "@@/utils/css.ts";
import {agentsRoutes} from "@/router/modules/agents.ts";
import {imageRoutes} from "@/router/modules/image.ts";



const sidebarMenuItemHeight = computed(() => !isTop.value ? "var(--v3-sidebar-menu-item-height)" : "var(--v3-navigationbar-height)")
const v3SidebarMenuBgColor = getCssVar("--v3-sidebar-menu-bg-color")
const appBgColor = getCssVar("--app-bg-color")
const v3SidebarMenuTextColor = getCssVar("--v3-sidebar-menu-text-color")
const v3SidebarMenuActiveTextColor = getCssVar("--v3-sidebar-menu-active-text-color")
const permissionStore = usePermissionStore()
const route = useRoute()
const appStore = useAppStore()
const { isLeft, isTop, isAgents, isImage } = useLayoutMode()
const { isMobile } = useDevice()
const activeMenu = computed(() => {
  const currentPath = route.path
  // 访问dashboard相关路径时，激活账户菜单
  if (currentPath.startsWith('/admin/dashboard')) {
    return '/admin/dashboard'
  }
  // 其他情况按正常规则处理
  return route.meta.activeMenu || currentPath
})
// 默认展开的菜单 - 根据当前状态展开相应的菜单
const defaultOpeneds = computed(() => {
  const openeds: string[] = []
  const routes = isAgents.value ? agentsRoutes : isImage.value ? imageRoutes : agentsRoutes
  for (const route of routes) {
    openeds.push(route.path)
  }
  console.log(openeds,'=====openeds====')
  return openeds
})
const backgroundColor = computed(() => (
    isLeft.value ? appBgColor : appBgColor
))
const textColor = computed(() => (isLeft.value ? v3SidebarMenuTextColor : undefined))
const activeTextColor = computed(() => (isLeft.value ? v3SidebarMenuActiveTextColor : undefined))
const isCollapse = ref(true)//computed(() => !appStore.sidebar.opened)
const menus = ref(null);
const handleClose = (key, keyPath) => {
  menus.value.open(key);
};
// 根据当前状态返回相应的路由
const noHiddenRoutes = computed(() => {
  return isAgents.value ? agentsRoutes : isImage.value ? imageRoutes : []
})
</script>

<template>
  <el-scrollbar wrap-class="scrollbar-wrapper" >
    <el-menu
        ref="menus"
        :default-active="activeMenu"
        :default-openeds="defaultOpeneds"
        :collapse="false"
        :text-color="textColor"
        :active-text-color="activeTextColor"
        :collapse-transition="false"
        :popper-append-to-body="false"
        :mode="isTop && !isMobile ? 'horizontal' : 'vertical'"
        :class="{ 'sidebar-modern':isCollapse }"
        @close="handleClose"
    >
      <Item
          v-for="noHiddenRoute in noHiddenRoutes"
          :key="noHiddenRoute.path"
          :item="noHiddenRoute"
          :base-path="noHiddenRoute.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<style scoped lang="scss">

.el-scrollbar {
  height: 100%;
  :deep(.scrollbar-wrapper) {
    // 限制水平宽度
    overflow-x: hidden;
  }
  // 滚动条
  :deep(.el-scrollbar__bar) {
    &.is-horizontal {
      // 隐藏水平滚动条
      display: none;
    }
  }
}
:deep(.el-menu) {
  user-select: none;
  border: none;
  width: 100%;
  background:transparent ;
  box-sizing: border-box;
}
:deep(.el-menu-item),
:deep(.el-sub-menu .el-menu-item),
:deep(.el-menu--horizontal .el-menu-item) {
  width:100%;
  height: v-bind(sidebarMenuItemHeight);
  line-height: v-bind(sidebarMenuItemHeight);
  background:transparent ;
  color: var(--app-sidebar-menu-text-color, #66637c);
  padding: 8px 10px !important;
  margin-bottom:4px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap:8px;
  svg{
    width:16px !important;
    height:16px !important;
    font-size:16px !important;
    margin-right:0 !important;
  }
  &.is-active,
  &:hover {
    background: var(--app-sidebar-menu-active-bg-color) !important;
    box-shadow: 0px 2px 8px #4532c966;
    color: var(--app-sidebar-menu-text-active-color);
  }
}
:deep(.el-sub-menu__title){
  width:100%;
  height: v-bind(sidebarMenuItemHeight);
  line-height: v-bind(sidebarMenuItemHeight);
  background:transparent ;
  color: var(--app-sidebar-menu-text-color, #66637c);
  padding: 8px 10px !important;
  margin-bottom:4px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .el-sub-menu__icon-arrow{
    display: none;
  }
  .title{
    color: var(--app-sidebar-menu-text-color, #66637c);
  }
}
:deep(.sidebar-modern){
  .el-sub-menu__title{
    wiidth:100%;
  }
  .el-menu-item{

  }
}
.el-scrollbar{
  height: auto !important;
}
/* 禁用所有动画效果 */
:deep(.el-menu),
:deep(.el-menu-item),
:deep(.el-sub-menu),
:deep(.el-sub-menu__title),
:deep(.el-scrollbar) {
  transition: none !important;
  animation: none !important;
}

/* 禁用子菜单展开动画 */
:deep(.el-sub-menu .el-menu) {
  transition: none !important;
}

/* 禁用悬停动画 */
:deep(.el-menu-item:hover),
:deep(.el-sub-menu__title:hover) {
  transition: none !important;
}
</style>