<script lang="ts" setup>
import { useSettingsStore } from "@/pinia/stores/settings"
import { AppMain } from "../components"
import Header from  "@/layouts/components/defaultPages/Header/index.vue"
import Footer from "@/layouts/components/defaultPages/Footer/index.vue";
import SidebarH5 from "@/layouts/components/defaultPages/defaultPagesSidebarH5/index.vue"
import {useAppStore} from "@/pinia/stores/app.ts";
import {useDevice} from "@@/composables/useDevice.ts";
import {useLayoutMode} from "@@/composables/useLayoutMode.ts";
const settingsStore = useSettingsStore()
const { showTagsView, showLogo } = storeToRefs(settingsStore)
const appStore = useAppStore()
const { isMobile } = useDevice()
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
</script>

<template>
  <div class="app-wrapper">
    <!-- 头部导航栏和标签栏 -->
    <Header />

    <!-- 主容器 -->
    <div :class="{ hasTagsView: showTagsView }" class="main-container">
      <!-- 页面主体内容 -->
      <AppMain class="app-main" />
    </div>
    <Footer  />

    <!-- 左侧边栏 -->
    <el-drawer
        v-if="layoutClasses.mobile"
        :with-header="false"
        size="80%"
        direction="rtl"
        :lock-scroll="true"
        header-class="mobile-sidebar-header"
        body-class="mobile-sidebar-body"
        v-model="layoutClasses.openSidebar"
        :before-close="handleClose">
        <SidebarH5 />
    </el-drawer>
  </div>
</template>

<style lang="scss" scoped>
@import "@@/assets/styles/mixins.scss";
$transition-time: 0.35s;

.app-wrapper {
  @extend %clearfix;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  z-index: 1002;
  width: 100%;
  .logo {
    width: var(--v3-sidebar-width);
  }
  .content {
    display: flex;
    .navigation-bar {
      flex: 1;
    }
  }
}

.layout-header {
  background-color: var(--v3-header-bg-color);
  box-shadow: var(--v3-header-box-shadow);
  border-bottom: var(--v3-header-border-bottom);
}

.main-container {
  min-height: 100%;
}

.app-main {
  transition: padding-left $transition-time;
  //padding-top: var(--v3-navigationbar-height);
  min-height: 100vh;
}

.hasTagsView {
  .app-main {
    //padding-top: var(--v3-header-height);
  }
}
</style>
