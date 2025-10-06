<script lang="ts" setup>
import { useDevice } from "@@/composables/useDevice"
import { useLayoutMode } from "@@/composables/useLayoutMode"
import { useWatermark } from "@@/composables/useWatermark"
import { getCssVar, setCssVar } from "@@/utils/css"
import { useSettingsStore } from "@/pinia/stores/settings"
import { storeToRefs } from 'pinia'
import { RightPanel, Settings } from "./components"
import { useResize } from "./composables/useResize"
import LeftMode from "./modes/LeftMode.vue"
import RightMode from "./modes/RightMode.vue"
import LeftTopMode from "./modes/LeftTopMode.vue"
import TopMode from "./modes/TopMode.vue"
import SettingsLeft from "./modes/SettingsLeft.vue"
// Layout 布局响应式
useResize()

const { setWatermark, clearWatermark } = useWatermark()

const { isMobile } = useDevice()

const { isLeft,isRight, isTop, isLeftTop,isSettings } = useLayoutMode()

const settingsStore = useSettingsStore()

const { showSettings, showTagsView, showWatermark } = storeToRefs(settingsStore)

// #region 隐藏标签栏时删除其高度，是为了让 Logo 组件高度和 Header 区域高度始终一致
const cssVarName = "--v3-tagsview-height"

const v3TagsviewHeight = getCssVar(cssVarName)

watchEffect(() => {
  showTagsView.value ? setCssVar(cssVarName, v3TagsviewHeight) : setCssVar(cssVarName, "0px")
})
// #endregion

// 开启或关闭系统水印
watchEffect(() => {
  showWatermark.value ? setWatermark(import.meta.env.VITE_APP_TITLE) : clearWatermark()
})
</script>

<template>
  <div class="page">
    <!-- 顶部模式 -->
    <TopMode v-if="isTop" />
    <!-- 左侧模式 -->
    <LeftMode v-else-if="isLeft" />
    <RightMode v-else-if="isRight" />
<!--    &lt;!&ndash; 混合模式 &ndash;&gt;-->
<!--    <LeftTopMode v-else-if="isLeft&&isMobile" />-->

    <SettingsLeft v-else-if="isSettings" />
  </div>
</template>


<style lang="scss" scoped>
.page{
  background: var(--app-bg-color);
}
</style>
