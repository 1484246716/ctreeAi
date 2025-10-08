<script lang="ts" setup>
import { useDevice } from "@@/composables/useDevice"
import { useLayoutMode } from "@@/composables/useLayoutMode"
import { getCssVar } from "@@/utils/css"
import { useAppStore } from "@/pinia/stores/app"
import { usePermissionStore } from "@/pinia/stores/permission"
import { useSettingsStore } from "@/pinia/stores/settings"
import { Logo } from "../index"
import routerScrollbar from "./routerScrollbar.vue"
import upAccount from "../Sidebar/upAccount.vue"
import userLayout from "../Sidebar/userLayout.vue"

import {router} from "@/router";

const { isMobile } = useDevice()

const { isLeft, isTop } = useLayoutMode()

const route = useRoute()

const appStore = useAppStore()

const permissionStore = usePermissionStore()

const settingsStore = useSettingsStore()


const noHiddenRoutes = computed(() => {
  let routsList=permissionStore.routes.filter(item => !item.meta?.hidden)
  routsList=routsList.slice(1)
  console.log(routsList,'==routsList所有路由==');
  return routsList;//只展示admin路由
})

console.log(noHiddenRoutes.value,'==noHiddenRoutes==')

const isCollapse = computed(() => !appStore.sidebar.opened)

const isLogo = computed(() => isLeft.value && settingsStore.showLogo)

const tipLineWidth = computed(() => !isTop.value ? "2px" : "0px")
const menus = ref(null);
const handleClose = (key, keyPath) => {
  if (menus.value && menus.value.open) {
    menus.value.open(key);
  }
};

const openNewUrl=()=>{
  window.open("/features", "_blank");
}
</script>

<template>
  <div class="Sidebar-main" :class="{ 'has-logo': isLogo }">
    <div class="Sidebar-top">
      <Logo v-if="isLogo" :collapse="isCollapse" />
      <routerScrollbar />
      <div @click="openNewUrl">其他</div>
    </div>
    <div class="Sidebar-bottom">
      <upAccount v-if="!isCollapse" />
      <userLayout />
    </div>
  </div>
</template>

<style lang="scss" scoped>
%tip-line {
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: v-bind(tipLineWidth);
    height: 100%;
    background-color: var(--v3-sidebar-menu-tip-line-bg-color);
  }
}
.Sidebar-main{
  width:100%;
  padding:32px 16px 32px 24px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.has-logo {
  .el-scrollbar {
    //height: calc(100% - var(--v3-header-height));
    height:auto !important;
  }
}



</style>
