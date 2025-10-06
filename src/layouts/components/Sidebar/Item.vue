
<script lang="ts" setup>
import type { RouteRecordRaw } from "vue-router"
import { isExternal } from "@@/utils/validate"
import path from "path-browserify"
import Link from "./Link.vue"
import {useAppStore} from "@/pinia/stores/app.ts";

interface Props {
  item: RouteRecordRaw
  basePath?: string
  level?: number
}

const { item, basePath = "", level = 1 } = defineProps<Props>()

const alwaysShowRootMenu = computed(() => item.meta?.alwaysShow)
const showingChildren = computed(() => item.children?.filter(child => !child.meta?.hidden) ?? [])
const showingChildNumber = computed(() => showingChildren.value.length)
const appStore = useAppStore()
const isCollapse = computed(() => !appStore.sidebar.opened)
const theOnlyOneChild = computed(() => {
  const number = showingChildNumber.value
  switch (true) {
    case number > 1:
      return null
    case number === 1:
      return showingChildren.value[0]
    default:
      return { ...item, path: "" }
  }
})

function resolvePath(routePath: string) {

  // console.log(routePath)
  switch (true) {
    case isExternal(routePath):
      return routePath
    case isExternal(basePath):
      return basePath
    default:
      return path.resolve(basePath, routePath)
  }
}
</script>

<template>
  <template v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children">
    <Link v-if="theOnlyOneChild.meta" :to="resolvePath(theOnlyOneChild.path)">
      <el-menu-item :index="resolvePath(theOnlyOneChild.path)">
        <SvgIcon v-if="theOnlyOneChild.meta.svgIcon" :name="theOnlyOneChild.meta.svgIcon" class="svg-icon" />
        <component v-else-if="theOnlyOneChild.meta.elIcon" :is="theOnlyOneChild.meta.elIcon" class="el-icon" />
        <template v-if="theOnlyOneChild.meta.title" #title>
          <span class="title">{{ theOnlyOneChild.meta.title }}</span>
        </template>
      </el-menu-item>
    </Link>
  </template>
  <el-sub-menu v-else-if="level < 2" :index="resolvePath(item.path)" teleported>
    <template #title v-if="(item.meta?.isShowTitle&&item.meta?.title=='工作台')||(item.meta?.title=='设置'&&!isCollapse)"><!--v-if="item.meta?.isShowTitle"-->
      <SvgIcon v-if="item.meta?.svgIcon" :name="item.meta.svgIcon" class="svg-icon" />
      <component v-else-if="item.meta?.elIcon" :is="item.meta.elIcon" class="el-icon" />
      <span v-if="item.meta?.title" class="title">{{ item.meta.title }}</span>
    </template>
    <template v-if="item.children">
      <Item
          v-for="child in showingChildren"
          :key="child.path"
          :item="child"
          :base-path="resolvePath(child.path)"
          :level="level + 1"
      />
    </template>
  </el-sub-menu>
  <template v-else>
    <Link v-if="item.meta" :to="resolvePath(item.path)">
      <el-menu-item :index="resolvePath(item.path)">
        <SvgIcon v-if="item.meta.svgIcon" :name="item.meta.svgIcon" class="svg-icon" />
        <component v-else-if="item.meta.elIcon" :is="item.meta.elIcon" class="el-icon" />
        <template v-if="item.meta.title" #title>
          <span class="title">{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </Link>
  </template>
</template>

<style lang="scss" scoped>
@import "@@/assets/styles/mixins.scss";

.svg-icon {
  min-width: 1em;
  margin-right: 12px;
  font-size: 18px;
}

.el-icon {
  width: 1em !important;
  margin-right: 12px !important;
  font-size: 18px;
}

.title {
  @extend %ellipsis;
}
</style>
