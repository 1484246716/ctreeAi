
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 获取当前激活的二级菜单路径
const activeSecondLevelPath = computed(() => {
  const matched = route.matched
  return matched.length > 1 ? matched[1].path : ''
})

// 获取当前二级菜单下的三级菜单项
const thirdLevelItems = computed(() => {
  console.log(activeSecondLevelPath,'==activeSecondLevelPath==')
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
  console.log(routeRecord,'==routeRecord==')
  return routeRecord?.children || []
})
const isActive = (path: string) => {
  // 检查当前路由是否为目标路由或其子路由
  return route.path === path || route.path.startsWith(path + '/');
};
</script>

<template>
  <div class="third-level-menu">
    <template v-if="thirdLevelItems.length">
      <div class="menu-items">
        <router-link
            v-for="item in thirdLevelItems"
            :key="item.path"
            :to="item.path"
            class="menu-item"
            :class="{ active: isActive(item.path) }"
        >
          <SvgIcon v-if="item.meta?.svgIcon" :name="item.meta.svgIcon" />
          <span>{{ item.meta?.title }}</span>
        </router-link>
      </div>
    </template>

  </div>
</template>

<style scoped lang="scss">
.third-level-menu {
  width:200px;
  padding: 16px;
  border-right: 0.5px solid var(--app-border-color);
  height:100%;
  .menu-items {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .menu-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 10px;
      border-radius: 8px;
      color: var(--app-sidebar-menu-text-color, #66637c);
      transition: all 0.3s;
      span{
        font-family: "Alibaba PuHuiTi 2.0";
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
      }
      &:hover {
        background: var(--app-ThirdLevelMenu-text-hover-bg-color);
        //box-shadow: 0px 2px 8px #4532c966;
        color:var(--app-ThirdLevelMenu-text-hover-text-color);
      }
    }
    .active {
      background: var( --app-ThirdLevelMenu-text-active-bg-color);
      box-shadow: 0px 2px 8px var(--app-ThirdLevelMenu-box-show);
      color:#fff;
      &:hover {
        background: var( --app-ThirdLevelMenu-text-active-bg-color);
        box-shadow: 0px 2px 8px var(--app-ThirdLevelMenu-box-show);
        color:#fff;
      }
    }
  }
}
</style>