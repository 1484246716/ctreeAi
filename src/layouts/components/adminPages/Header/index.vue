<script setup lang="ts">
import { computed} from "vue"
import { useRoute, useRouter } from "vue-router"
import {usePermissionStore} from "@/pinia/stores/permission.ts";
import {useAppStore} from "@/pinia/stores/app.ts";
import useScroll from "@/hooks/useScroll.ts";
const router = useRouter()
const route = useRoute()
const appStore = useAppStore()
const { scrollY } = useScroll()
const hasBorder = computed(() => scrollY.value > 0)
const permissionStore = usePermissionStore()
/**获取一级路由标题**/
const getCurrentFirstLevelTitle= computed(() => {
  function extractChildren(arr, depth = 0) {
    let result = [];
    const maxDepth = 1;
    arr.forEach(item => {
      if (depth < maxDepth && item.children && Array.isArray(item.children)) {
        // 递归处理子数组，深度+1
        result = result.concat(extractChildren(item.children, depth + 1));
      } else {
        // 达到最大深度或没有子数组，添加当前对象
        result.push(item);
      }
    });
    return result;
  }
  let routsList=permissionStore.routes.filter(item => !item.meta?.hidden);
  routsList=routsList.slice(1)//筛选admin的路由
  routsList=extractChildren(routsList)
  const currentPath=route.path;
  let path=''
  for (const route of routsList) {
    if (currentPath.startsWith(route.path)) {
      path= route.meta?.title || '';
    }
  }
  return path;
})
/**关闭侧边栏**/
const toggleSidebar=()=> {
  appStore.toggleSidebar(false)
}
</script>

<template>
  <div class="defaultHeader-main app-body-bottom" :class="{ 'headerChange': hasBorder }">
    <div class="defaultHeader-main-center app-header-max-width">
      <div class="defaultHeader-main-contentH5">
        <button class="leftbtn" @click="toggleSidebar">
          <div class="leftbtn_content">
            <p></p>
            <p></p>
            <p></p>
          </div>
        </button>

        <span class="title">{{getCurrentFirstLevelTitle}}</span>

        <div class="flex items-center ">
          <div class="isMobile" >
            <div class="loginName-view" @click="openMobileLayoutList">5</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.defaultHeader-main {
  width: 100%;
  margin: 0 auto;
  min-height:64px;
  border-bottom: 1px solid  transparent;
  display: flex;
  align-items: center;
  z-index: 40;
  .defaultHeader-main-center{
    backdrop-blur: blur(24px);
    margin:0 auto;
    text-align: center;
    .defaultHeader-main-contentH5 {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      .title{
        color: var(--app-h2-text-Light-color);
        font-family: "Alibaba PuHuiTi 2.0";
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        margin-left:16px;
        margin-right:auto;
      }
      .leftbtn{
        width:18px;
        height:14px;
        display: flex;
        align-items: center;
        justify-content: center;
        .leftbtn_content{
          width:100%;
          height:100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          p{
            width: 100%;
            height: 2px;
            background: #c0bcdf;
            margin: 0;
            border-radius: 5px;
          }
        }
      }
      .main-content-left {
        display: flex;
        align-items: center;
        height: 4rem;
        cursor: pointer;
        .logo {
          width: 2rem;
          height: 2rem;
          border-radius:5px;
          overflow: hidden;
        }
        .left-views {
          margin-left: 8px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          span {
            font-weight: 800;
            font-size:1.25rem;
            color: #000;
            line-height: 19px;
          }
        }
      }
      :deep(.btn-right) {
        width: fit-content;
        height: fit-content;
        display: inline-flex;
        place-content: center;
        place-items: center;
        gap: 8px;
        padding: 8px 12px;
        border-radius: 8px;
        background: var(--app-purpleButton-bg-color);
        box-shadow: 0px 2px 8px var(--app-purpleButton-bg-boxshow-color);
        &:hover{
          box-shadow: 0px 2px 8px var(--app-purpleButton-hover-boxshow-color);
        }
        span{
          color: var(--white-1, #e2e2ff);
          font-family: "Alibaba PuHuiTi 2.0";
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
        }
      }

    }

    .loginName-view{
      width:24px;
      height: 24px;
      border-radius: 9999px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #4532c9;
      cursor: pointer;

      color: var(--Text-1, #c0bcdf);
      font-family: "Alibaba PuHuiTi 2.0";
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
    }
  }
}
.headerChange{
  background: #e6edf821;
  box-shadow: 0px 4px 5px #5c58581a;
  backdrop-filter: blur(30px);
  position: sticky;
  top: 0;
}
</style>

