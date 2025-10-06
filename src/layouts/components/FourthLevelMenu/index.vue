
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 获取当前激活的三级菜单路径
const activeThirdLevelPath = computed(() => {
  const matched = route.matched
  return matched.length > 2 ? matched[2].path : ''
})

// 获取当前三级菜单下的四级菜单项
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
  return routeRecord?.children || []
})

const isActive = (path: string) => {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>

<template>
  <div class="fourth-level-menu">
    <template v-if="fourthLevelItems.length">
      <div class="menu-items">
        <router-link
            v-for="item in fourthLevelItems"
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
.fourth-level-menu {
  width:200px;
  padding: 16px;
  padding-right:0;
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
      transition: all 0.3s;
      border-top-left-radius:  8px;
      border-bottom-left-radius:  8px;
      color: var(--app-sidebar-menu-text-color, #66637c);
      span{
        font-family: "Alibaba PuHuiTi 2.0";
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
      }
      &:hover {
        color:var(--app-FourthLevelMenu-text-hover-text-color);
        background: var(--app-FourthLevelMenu-hover-bg-color);
      }
    }
    .active {
      color:var(--app-FourthLevelMenu-text-hover-text-color);
      background: var(--app-FourthLevelMenu-active-bg-color);
    }
  }
}
</style>
