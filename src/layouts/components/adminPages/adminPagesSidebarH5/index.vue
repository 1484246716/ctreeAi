<script setup lang="ts">
import {computed, ref, watch} from 'vue'
import {useAppStore} from "@/pinia/stores/app.ts";
import { useTheme } from "@@/composables/useTheme.ts"
import {headerListStore} from "@/pinia/stores/headerList.ts";
import {useRoute, useRouter} from "vue-router";
import {useUserStore} from "@/pinia/stores/user.ts";
import routerScrollbar from "@/layouts/components/Sidebar/routerScrollbar.vue";
import userLayout from "@/layouts/components/Sidebar/userLayout.vue";

import upAccount from "@/layouts/components/Sidebar/upAccount.vue";
const headerListPublic=headerListStore()
const headerList=computed(()=>headerListPublic.HeaderList)
const { themeList, activeThemeName, setTheme } = useTheme()
const userStore = useUserStore()

const switchvaluedata =ref(activeThemeName.value=='normal'?false:true)
const appStore = useAppStore()
const handleClose=()=>{
  appStore.closeSidebar(false)
}
const switchValue=(e)=>{
  let setitem=e?themeList[1]:themeList[0]
  setTheme(MouseEvent,setitem.name)
}
const router = useRouter()
const route = useRoute()

watch(appStore.sidebar.opened, (value) => {
  switchvaluedata.value=activeThemeName.value=='normal'?false:true;
})






</script>

<template>
  <div class="SidebarH5-top-view">
    <div style="margin-right:auto;" @click="handleClose">
      <svg v-if="activeThemeName=='normal'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.29289 5.29289C5.68342 4.90237 6.31643 4.90237 6.70696 5.29289L12.707 11.2929C13.0974 11.6834 13.0975 12.3165 12.707 12.707L6.70696 18.707C6.31646 19.0975 5.68342 19.0974 5.29289 18.707C4.90237 18.3164 4.90237 17.6834 5.29289 17.2929L10.5859 11.9999L5.29289 6.70696C4.90237 6.31643 4.90237 5.68342 5.29289 5.29289ZM11.2929 5.29289C11.6834 4.90237 12.3164 4.90237 12.707 5.29289L18.707 11.2929C19.0974 11.6834 19.0975 12.3165 18.707 12.707L12.707 18.707C12.3165 19.0975 11.6834 19.0974 11.2929 18.707C10.9024 18.3164 10.9024 17.6834 11.2929 17.2929L16.5859 11.9999L11.2929 6.70696C10.9024 6.31643 10.9024 5.68342 11.2929 5.29289Z" fill="#575179"/>
      </svg>
      <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.29297 5.29297C5.68349 4.90244 6.31651 4.90244 6.70703 5.29297L12.707 11.293C13.0975 11.6835 13.0975 12.3165 12.707 12.707L6.70703 18.707C6.31653 19.0975 5.6835 19.0975 5.29297 18.707C4.90244 18.3165 4.90244 17.6835 5.29297 17.293L10.5859 12L5.29297 6.70703C4.90244 6.31651 4.90244 5.68349 5.29297 5.29297ZM11.293 5.29297C11.6835 4.90244 12.3165 4.90244 12.707 5.29297L18.707 11.293C19.0975 11.6835 19.0975 12.3165 18.707 12.707L12.707 18.707C12.3165 19.0975 11.6835 19.0975 11.293 18.707C10.9024 18.3165 10.9024 17.6835 11.293 17.293L16.5859 12L11.293 6.70703C10.9024 6.31651 10.9024 5.68349 11.293 5.29297Z" fill="#B7B2DF"/>
      </svg>
    </div>

    <svg v-if="activeThemeName=='normal'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z" fill="#615B7C"/>
      <path d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20V22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22V20C16.4183 20 20 16.4183 20 12Z" fill="#615B7C"/>
    </svg>

    <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z" fill="#918CAD"/>
      <path d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20V22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22V20C16.4183 20 20 16.4183 20 12Z" fill="#918CAD"/>
    </svg>

    <el-switch
        class="app-switch"
        v-model="switchvaluedata"
        @change="switchValue"
    />
    <svg v-if="activeThemeName=='normal'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z" fill="#66637C"/>
    </svg>
    <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z" fill="#7D74C0"/>
    </svg>
  </div>
  <div class="w-[166px] p-[16px]  overflow-hidden">
    <routerScrollbar class="-mt-[36px]" />
  </div>
  <userLayout :Source="'adminPagesSidebarH5'" />
  <div class="p-[16px]">
   <upAccount />
  </div>
</template>

<style scoped lang="scss">
.SidebarH5-top-view{
  padding:20px 16px;
  border-bottom:1px solid var(--app-border-color);
  display: flex;
  align-items: center;
  gap:8px;

}

.SidebarH5-bottom-view{

  padding:20px 16px;
  border-bottom:1px solid var(--app-border-color);
  border-top:1px solid var(--app-border-color);

  .login-view{
    display: flex;
    align-items: center;
    gap:8px;
    .header{
      width:24px;
      height: 24px;
      border-radius:100%;
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
    .right{
      p{
        &:nth-child(1){
          color: var(--app-h2-text-Light-color);
          font-family: "Alibaba PuHuiTi 2.0";
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
        }
        &:nth-child(2){
          color: var(--app-header-text-color);
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
  }

  .notlogin-view{
    width:100%;
    height: fit-content;
    display: inline-flex;
    place-content: center;
    place-items: center;
    gap: 8px;
    flex-shrink: 0;
    padding: 8px 12px;
    border-radius: 8px;
    background: var(--app-purpleButton-bg-color);
    box-shadow: 0px 2px 8px var(--app-purpleButton-bg-boxshow-color);
    color: var(--white-1, #e2e2ff);
    font-family: "Alibaba PuHuiTi 2.0";
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    &:active{
      box-shadow: 0px 2px 8px var(--app-purpleButton-hover-boxshow-color);
    }
  }

}
</style>