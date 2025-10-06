<script setup lang="ts">
import {useAppStore} from "@/pinia/stores/app.ts";
import {useUserStore} from "@/pinia/stores/user.ts";
import {useRouter} from "vue-router";
import {useTheme} from "@@/composables/useTheme.ts";
import {useDevice} from "@@/composables/useDevice.ts";
const { activeThemeName } = useTheme()
const { isMobile } = useDevice()
const appStore = useAppStore()
const isCollapse = computed(() => !appStore.sidebar.opened)
const userStore = useUserStore()
const router = useRouter()
const props=defineProps({
  Source:{//来源
    type:String,
    default:''
  }
})

const logout=()=> {
  appStore.closeSidebar(false)
  userStore.logout()
  router.push("/")
}
</script>


<template>
  <div class="user_layout" :class="{'user_layoutisCollapse':isCollapse,'user_layout_adminPagesSidebarH5':Source=='adminPagesSidebarH5'}">
    <div class="top-view" :class="{'top-view-cul':isCollapse}">
      <div class="header">A</div>
      <div class="name" v-if="!isCollapse">fap bigtrash</div>
      <svg v-if="activeThemeName=='normal'" @click="logout" style="cursor: pointer;" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.99707 1.33301C8.36519 1.3331 8.66406 1.63186 8.66406 2C8.66406 2.36814 8.36519 2.6669 7.99707 2.66699H2.66699V13.333H8C8.36819 13.333 8.66699 13.6318 8.66699 14C8.66699 14.3682 8.36819 14.667 8 14.667H2C1.63181 14.667 1.33301 14.3682 1.33301 14V2C1.33301 1.63181 1.63181 1.33301 2 1.33301H7.99707ZM10.5283 4.52832C10.7887 4.26797 11.2113 4.26797 11.4717 4.52832L14.46 7.5166C14.5271 7.58087 14.5805 7.65863 14.6162 7.74609C14.62 7.75525 14.6217 7.76513 14.625 7.77441C14.6354 7.80353 14.647 7.83246 14.6533 7.86328L14.667 8C14.667 8.17057 14.6018 8.34152 14.4717 8.47168L11.4717 11.4717C11.2113 11.732 10.7887 11.732 10.5283 11.4717C10.268 11.2113 10.268 10.7887 10.5283 10.5283L12.3936 8.66406H5.33301C4.96497 8.66389 4.66699 8.36515 4.66699 7.99707C4.66717 7.62914 4.96508 7.33123 5.33301 7.33105H12.3887L10.5283 5.47168C10.268 5.21133 10.268 4.78867 10.5283 4.52832Z" fill="#6C658E"/>
      </svg>

      <svg v-else @click="logout" style="cursor: pointer;" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.99609 1.33301C8.36421 1.3331 8.66309 1.63186 8.66309 2C8.66309 2.36814 8.36421 2.6669 7.99609 2.66699H2.66602V13.333H7.99902C8.36721 13.333 8.66602 13.6318 8.66602 14C8.66602 14.3682 8.36721 14.667 7.99902 14.667H1.99902C1.63083 14.667 1.33203 14.3682 1.33203 14V2C1.33203 1.63181 1.63083 1.33301 1.99902 1.33301H7.99609ZM10.5273 4.52832C10.7877 4.26797 11.2104 4.26797 11.4707 4.52832L14.459 7.5166C14.5261 7.58087 14.5795 7.65863 14.6152 7.74609C14.619 7.75525 14.6207 7.76513 14.624 7.77441C14.6344 7.80353 14.646 7.83246 14.6523 7.86328L14.666 8C14.666 8.17057 14.6009 8.34152 14.4707 8.47168L11.4707 11.4717C11.2104 11.732 10.7877 11.732 10.5273 11.4717C10.267 11.2113 10.267 10.7887 10.5273 10.5283L12.3926 8.66406H5.33203C4.96399 8.66389 4.66602 8.36515 4.66602 7.99707C4.66619 7.62914 4.9641 7.33123 5.33203 7.33105H12.3877L10.5273 5.47168C10.267 5.21133 10.267 4.78867 10.5273 4.52832Z" fill="#A39EBD"/>
      </svg>

    </div>
    <p class="email" v-if="!isCollapse">adwad@gmail.com</p>
  </div>
</template>

<style scoped lang="scss">
.user_layout{
  width:100%;
  display: flex;
  flex-direction: column;
  gap:4px;
  padding-top:20px;
  border-top: 0.5px solid var(--app-border-color);
  .top-view{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header{
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius:100%;
      background: #4532c9;
      color: #e2e2ff;
      font-family: "Alibaba PuHuiTi 2.0";
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
    }
    .name{
      color:var(--app-h2-text-Light-color);
      font-family: "Alibaba PuHuiTi 2.0";
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-right:auto;
      margin-left:4px;
    }
    svg{
      width:16px;
      height:16px;
    }
  }
  .top-view-cul{
    display: flex;
    flex-direction: column;
    padding:16px 4.5px 0 4.5px;
    gap:16px;
    border-top: 0.5px solid var(--app-border-color);
  }
  .email{
    color: var(--app-header-text-color);
    font-family: "Alibaba PuHuiTi 2.0";
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
}
.user_layoutisCollapse{
  border:0;
}
.user_layout_adminPagesSidebarH5{
  padding:16px;
  border-top: 0.5px solid var(--app-border-color);
  border-bottom: 0.5px solid var(--app-border-color);
}
</style>