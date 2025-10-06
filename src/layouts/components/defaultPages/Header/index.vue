<script setup lang="ts">
import { ElMessage, ElMessageBox } from "element-plus"
import { computed, onMounted, reactive, ref, toRaw, watch,nextTick } from "vue"
import { useRoute, useRouter } from "vue-router"
import {Hamburger} from "@/layouts/components";
import {useUserStore} from "@/pinia/stores/user.ts";
import {useAppStore} from "@/pinia/stores/app.ts";

import {headerListStore} from "@/pinia/stores/headerList.ts"
import useScroll from '@/hooks/useScroll.ts'
import LayoutList from "@/layouts/components/defaultPages/Header/LayoutList.vue"
import BottomPopUp from "@/layouts/components/defaultPages/BottomPopUp/index.vue"
import useWindowResize from "@/hooks/useWindowResize";
import ThemeSwitch from "@@/components/ThemeSwitch/index.vue"
import {useTheme} from "@@/composables/useTheme.ts";
const { activeThemeName } = useTheme()
const { windowSize }  = useWindowResize();


const { scrollY } = useScroll()
const hasBorder = computed(() => scrollY.value > 0)
const router = useRouter()
const route = useRoute()
const BottomPopUpRef = ref()
const userStore = useUserStore()
const appStore = useAppStore()
const isRouter = ref(false) // 按钮旋转

const headerListPublic=headerListStore()
const headerList=computed(()=>headerListPublic.HeaderList)
console.log(userStore.token,'===userStore信息===')
console.log(headerListPublic.HeaderList,'===headerListPublic.HeaderList===')
const LoginBoxShow=ref(false)
const currentTab = ref<number | string>(0)

const changeTab=async (item,index)=> {
  console.log(item.path)
  await router.push(item.path)
  currentTab.value=index
}
const getRouterPath=()=> {
  const router = useRouter()
  const path = toRaw(router).currentRoute.value.fullPath
  const index = headerList.value.findIndex(item => item.path == path)
  console.log(index, "当前页面路由")
  currentTab.value = index
}
getRouterPath()
/** 切换侧边栏 */
function toggleSidebar() {
  console.log('点击')
  appStore.toggleSidebar(false)
}

watch(route, () => { // 取消选中状态
  const isPathInTabs = headerList.value.some(tab => tab.path === route.path)
  if (!isPathInTabs) {
    currentTab.value = ""
  }
  if(route.path=='/submit'){
    const index=headerList.value.findIndex(item=>item.path=='/submit');
    currentTab.value =index;
  }
})

async function logout() {
  userStore.logout()
  router.push("/login")
}


const openLogin=()=> {
  router.push("/login")
}
async function goHomepath() {
  router.push({ path: "/" })
}
const openMobileLayoutList=()=>{
  BottomPopUpRef.value?.openModal()
}
</script>

<template>
  <div class="defaultHeader-main app-body-bottom" :class="{ 'headerChange': hasBorder }">
    <div class="defaultHeader-main-center app-header-max-width">
      <div class="defaultHeader-main-contentPc">
        <div class="main-content-left" @click="goHomepath">
          <img v-if="activeThemeName=='normal'" style="width:115px;"  src="@/common/assets/images/layouts/logo.png" alt="">
          <img v-else style="width:115px;" src="@/common/assets/images/layouts/logo2.png" alt="">
        </div>

        <div class="navigationList-main">
          <div
            class="navigation" v-for="(item, index) in headerList" :class="{ navigationactive: currentTab === index }"
            @click="changeTab(item,index)"
          >
            <span>{{ item.title }}</span>
          </div>
        </div>
       <el-button v-if="!userStore.token" class="app-form-submit-botton " @click="openLogin">登录</el-button>
       <el-popover v-else placement="bottom-end"
                    :width="174"
                    trigger="click"
                    :offset="8"
                    :show-arrow="false"
                    popper-class="more-menu-popper">
          <template #reference>
            <div class="loginName-view" >5</div>
          </template>
          <LayoutList />
        </el-popover>
        <ThemeSwitch  />
      </div>
      <div class="defaultHeader-main-contentH5">
        <img v-if="activeThemeName=='normal'" @click="goHomepath" style="width:115px;"  src="@/common/assets/images/layouts/logo.png" alt="">
        <img v-else style="width:115px;" @click="goHomepath" src="@/common/assets/images/layouts/logo2.png" alt="">

<!--          <div class="main-content-left" style="margin-left:20px;margin-right:auto;" @click="goHomepath">-->
<!--            <img src="@/common/assets/images/defaultLayout/logo.png" class="logo" alt="">-->
<!--            <div class="left-views">-->
<!--              <span>目录</span>-->
<!--            </div>-->
<!--          </div>-->


        <div class="flex items-center ">
          <div round class="btn-right" @click="openLogin" v-if="!userStore.token"><!--v-if="!userStore.token"-->
            <span>登录</span>
          </div>
          <div class="isMobile" v-else>
            <div class="loginName-view" @click="openMobileLayoutList">5</div>
          </div>

          <button class="leftbtn" @click="toggleSidebar">
            <div class="leftbtn_content">
              <p></p>
              <p></p>
              <p></p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
<!--  <BottomPopUp ref="BottomPopUpRef">-->
<!--    <div style="padding:0  0.75rem;box-sizing: border-box">-->
<!--      <div style="display: grid;gap: .375rem;padding: 1rem;"></div>-->
<!--      <LayoutList />-->
<!--    </div>-->
<!--  </BottomPopUp>-->
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
    .defaultHeader-main-contentPc {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
            color: var(--mkdirs-header-logo-text-color);
            line-height: 19px;
          }
        }
      }
      .navigationList-main {
        display: flex;
        align-items: center;
        margin:0 auto;
        .navigation {
          padding:0.5rem;
          border-radius: 4px 4px 4px 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          cursor: pointer;
          margin-right:2px;
          span {
            color: var(--app-header-text-color);
            font-family: "Alibaba PuHuiTi 2.0";
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
          }
          &:hover {
            span {
              font-weight: 700;
              color: var(--app-header-text-hover-color);
            }
          }
        }
        .navigationactive {
          //border-radius: 56px 56px 56px 56px;
          //background: #f3f9ff;
          position: relative;
          span {
            color: var(--app-header-text-hover-color);
            font-weight: 700;
          }
          :after {
            content: "";
            width: 16px;
            height: 4px;
            background: #8167ff;
            border-radius: 8px 8px 8px 8px;
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
          }
        }
      }

    }
    .defaultHeader-main-contentH5 {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      .leftbtn{
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .leftbtn_content{
          width:13px;
          height:10px;
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
  @media print, screen and (max-width: 992px) {
    .defaultHeader-main-contentPc {
      display: none !important;
    }
  }
  @media print, screen and (min-width: 992px) {
    .defaultHeader-main-contentH5 {
      display: none !important;
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
.more-menu-norouter {
  transition: 0.2s;
  transform: rotate(0deg);
}
.more-menu-view {
  width: 100%;
  .menu-view {
    width: 159px;
    display: flex;
    align-items: center;
    padding: 8px;
    box-sizing: border-box;
    height: 34px;
    background: #0f7fef;
    justify-content: center;
    border-radius: 30px;
    cursor: pointer;
    img {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
    span {
      color: #fff;
    }
  }
}
:deep(.more-menu-button) {
  display: flex;
  align-items: center;
  padding: 13px 16px;
  height: auto;
  border: 0;
  border-radius: 25px !important;
  position: relative;
  &:before {
    content: "";
    width: 20px;
    height: 4px;
    background: #0f7fef;
    position: absolute;
    bottom: 0;
    opacity: 0;
    border-radius: 5px;
  }
  .left-img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  span {
    font-weight: 400;
    font-size: 16px;
    // color: #0F7FEF;
    color: #4f4f4f;
    line-height: 19px;
    margin-right: 5px;
  }

  .more-menu-router {
    transition: 0.2s;
    transform: rotate(0deg);
  }
}

:deep(.more-menu-button):focus {
  background: #f3f9ff !important;
  &:before {
    opacity: 1;
  }
  span {
    color: #0f7fef;
    font-weight: 700;
  }
  .more-menu-router {
    transition: 0.2s;
    transform: rotate(180deg);
  }
}


</style>

<style  lang="scss">
.more-menu-popper {
  border-radius: 8px !important;
  border: 0.5px solid #b1abcf !important;
  box-sizing: border-box !important;
  background: var(--Bg-3, #dde4f0) !important;
}
</style>
