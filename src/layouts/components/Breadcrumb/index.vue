<script lang="ts" setup>
import type { RouteLocationMatched } from "vue-router"
import { useRouteListener } from "@@/composables/useRouteListener"
import { compile } from "path-to-regexp"
import { ArrowRight } from '@element-plus/icons-vue'
const route = useRoute()

const router = useRouter()

const { listenerRouteChange } = useRouteListener()

/** 定义响应式数据 breadcrumbs，用于存储面包屑导航信息 */
const breadcrumbs = ref<RouteLocationMatched[]>([])

/** 获取面包屑导航信息 */
// function getBreadcrumb() {
//   breadcrumbs.value = route.matched.filter(item => item.meta?.title && item.meta?.breadcrumb !== false)
//   console.log(breadcrumbs.value,'==breadcrumbs.value==')
// }
function getBreadcrumb() {
  const seenTitles = new Set();
  breadcrumbs.value = route.matched
      .filter(item => item.meta?.title && item.meta?.breadcrumb !== false)
      .filter(item => {
        // 检查标题是否已出现过
        if (seenTitles.has(item.meta.title)) {
          return false; // 已出现过，过滤掉
        }
        seenTitles.add(item.meta.title); // 记录首次出现的标题
        return true; // 保留首次出现的项
      });
  console.log(breadcrumbs.value, '==breadcrumbs.value==');
}
/** 编译路由路径 */
function pathCompile(path: string) {
  const toPath = compile(path)
  return toPath(route.params)
}

/** 处理面包屑导航点击事件 */
function handleLink(item: RouteLocationMatched) {
  const { redirect, path } = item
  if (redirect) return router.push(redirect as string)
  router.push(pathCompile(path))
}

// 监听路由变化，更新面包屑导航信息
listenerRouteChange((route) => {
  if (route.path.startsWith("/redirect/")) return
  getBreadcrumb()
}, true)
</script>

<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
      <span v-if="item.redirect === 'noRedirect' || index === breadcrumbs.length - 1" class="no-redirect">
        {{ item.meta.title }}
      </span>
      <a v-else @click.prevent="handleLink(item)">
        {{ item.meta.title }}
      </a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
.el-breadcrumb {
  line-height: var(--v3-navigationbar-height);
  .no-redirect {
    color: var(--el-text-color-placeholder);
  }
  a {
    font-weight: normal;
  }
}
:deep(.el-breadcrumb__inner){
  a{
    color: var(--app-header-text-color) !important;
  }
}
</style>
