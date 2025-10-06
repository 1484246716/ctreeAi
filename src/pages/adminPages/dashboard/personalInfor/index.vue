<script setup lang="ts">
import {ref} from "vue"

import {useTheme} from "@@/composables/useTheme.ts";
import {useDevice} from "@@/composables/useDevice.ts";
const { activeThemeName } = useTheme()
const { isMobile } = useDevice()

const form=ref({
  delivery:false,
  region:"",
  email:"",
  color1:""
})
const emailList=ref([
  {
    label:"SMTP",
    value:"1"
  },
  {
    label:"Mailgun",
    value:"2"
  },
  {
    label:"Postmark",
    value:"3"
  },
  {
    label:"SES",
    value:"4"
  },
  {
    label:"Resend",
    value:"5"
  },

])
</script>

<template>
  <el-form  label-width="auto">
    <div class="directoryHomepage-main">
      <div class="app-form-top-title-view">
        <div class="app-form-top-title-view-top">
          <svg v-if="activeThemeName=='normal'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.66699 14.167C2.12708 14.1672 2.5 14.5399 2.5 15V17.5H5C5.46013 17.5 5.83283 17.8729 5.83301 18.333C5.83301 18.7932 5.46024 19.167 5 19.167H1.66699C1.20675 19.167 0.833008 18.7932 0.833008 18.333V15C0.833008 14.5398 1.20675 14.167 1.66699 14.167ZM18.333 14.167C18.7932 14.167 19.167 14.5398 19.167 15V18.333C19.167 18.7932 18.7932 19.167 18.333 19.167H15C14.5398 19.167 14.167 18.7932 14.167 18.333C14.1672 17.8729 14.5399 17.5 15 17.5H17.5V15C17.5 14.5399 17.8729 14.1672 18.333 14.167ZM10 3.33301C11.8409 3.33301 13.333 4.82604 13.333 6.66699C13.3329 7.83562 12.7306 8.862 11.8203 9.45703C14.1505 10.2218 15.833 12.4141 15.833 15C15.833 15.4602 15.4602 15.833 15 15.833C14.5398 15.833 14.167 15.4602 14.167 15C14.167 12.6988 12.3012 10.833 10 10.833C7.69882 10.833 5.83301 12.6988 5.83301 15C5.83301 15.4602 5.46024 15.833 5 15.833C4.53976 15.833 4.16699 15.4602 4.16699 15C4.16699 12.4144 5.84903 10.2221 8.17871 9.45703C7.26883 8.86193 6.6671 7.83533 6.66699 6.66699C6.66699 4.82604 8.15905 3.33301 10 3.33301ZM10 5C9.07953 5 8.33301 5.74652 8.33301 6.66699C8.33318 7.58732 9.07963 8.33301 10 8.33301C10.9204 8.33301 11.6668 7.58732 11.667 6.66699C11.667 5.74652 10.9205 5 10 5ZM5 0.833008C5.46024 0.833008 5.83301 1.20675 5.83301 1.66699C5.83283 2.12708 5.46013 2.5 5 2.5H2.5V5C2.5 5.46013 2.12708 5.83283 1.66699 5.83301C1.20675 5.83301 0.833008 5.46024 0.833008 5V1.66699C0.833008 1.20675 1.20675 0.833008 1.66699 0.833008H5ZM18.333 0.833008C18.7932 0.833008 19.167 1.20675 19.167 1.66699V5C19.167 5.46024 18.7932 5.83301 18.333 5.83301C17.8729 5.83283 17.5 5.46013 17.5 5V2.5H15C14.5399 2.5 14.1672 2.12708 14.167 1.66699C14.167 1.20675 14.5398 0.833008 15 0.833008H18.333Z" fill="#575179"/>
          </svg>
          <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.33398 11.333C1.70217 11.333 2.00098 11.6318 2.00098 12V14H4.00098C4.36917 14 4.66797 14.2988 4.66797 14.667C4.66779 15.035 4.36906 15.333 4.00098 15.333H1.33398C0.966053 15.3328 0.668145 15.0349 0.667969 14.667V12C0.667969 11.6319 0.965944 11.3332 1.33398 11.333ZM14.668 11.333C15.036 11.3332 15.334 11.6319 15.334 12V14.667C15.3338 15.0349 15.0359 15.3328 14.668 15.333H12.001C11.6329 15.333 11.3342 15.035 11.334 14.667C11.334 14.2988 11.6328 14 12.001 14H14.001V12C14.001 11.6318 14.2998 11.333 14.668 11.333ZM8.00098 2.66699C9.47363 2.66699 10.6678 3.8604 10.668 5.33301C10.668 6.26804 10.1853 7.08937 9.45703 7.56543C11.3213 8.17717 12.668 9.93117 12.668 12C12.668 12.3682 12.3692 12.667 12.001 12.667C11.6328 12.667 11.334 12.3682 11.334 12C11.334 10.1591 9.84192 8.66699 8.00098 8.66699C6.16003 8.66699 4.66797 10.1591 4.66797 12C4.66797 12.3682 4.36917 12.667 4.00098 12.667C3.63279 12.667 3.33398 12.3682 3.33398 12C3.33398 9.93149 4.68017 8.17743 6.54395 7.56543C5.81602 7.0893 5.33398 6.26775 5.33398 5.33301C5.33416 3.8604 6.52833 2.66699 8.00098 2.66699ZM8.00098 4C7.26471 4 6.66814 4.59678 6.66797 5.33301C6.66797 6.06939 7.2646 6.66699 8.00098 6.66699C8.73736 6.66699 9.33398 6.06939 9.33398 5.33301C9.33381 4.59678 8.73725 4 8.00098 4ZM4.00098 0.666992C4.36906 0.666992 4.66779 0.964968 4.66797 1.33301C4.66797 1.7012 4.36917 2 4.00098 2H2.00098V4C2.00098 4.36819 1.70217 4.66699 1.33398 4.66699C0.965944 4.66682 0.667969 4.36808 0.667969 4V1.33301C0.668145 0.965076 0.966053 0.667168 1.33398 0.666992H4.00098ZM14.668 0.666992C15.0359 0.667168 15.3338 0.965076 15.334 1.33301V4C15.334 4.36808 15.036 4.66682 14.668 4.66699C14.2998 4.66699 14.001 4.36819 14.001 4V2H12.001C11.6328 2 11.334 1.7012 11.334 1.33301C11.3342 0.964968 11.6329 0.666992 12.001 0.666992H14.668Z" fill="#A39EBD"/>
          </svg>

          <span>个人信息</span>
        </div>
        <p class="app-form-title-p">管理您的账户信息。</p>
      </div>
      <div class="app-form-main-padding">
        <div class="border border-[var(--app-border-color)] border-[0.5px] max-w-[689px] rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[16px] rounded-br-[16px] m-b-[24px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px] ">
            <div class="text-[var(--app-h2-text-Light-color)] font-bold text-[14px] leading-[20px]" style="font-family: 'Alibaba PuHuiTi 2.0'">头像</div>
            <div class="text-[var(--app-form-top-title-p)] font-normal text-[14px] leading-[20px]" style="font-family: 'Alibaba PuHuiTi 2.0'">点击上传按钮以上传自定义文件。</div>
          </div>
          <div  class="flex items-center gap-[24px] p-[16px]  border-t border-b border-[var(--app-border-color)] ">
            <div class="w-[64px] h-[64px] flex items-center justify-center rounded-full bg-[#4532c9] text-[#e2e2ff] font-bold text-[24px]" style="font-family: 'Alibaba PuHuiTi 2.0'">A</div>
            <div class="w-fit flex items-center justify-center p-[8px_16px] rounded-[12px] border border-[var(--app-border-color)] border-[0.5px] box-border text-[var(--app-header-text-color)] font-normal text-[16px]" style="font-family: 'Alibaba PuHuiTi 2.0'">点击上传</div>
          </div>
          <div class="h-fit flex items-center justify-start p-[16px_24px] ">
            <span class="text-[var(--app-header-text-color)] font-normal text-[14px]" style="font-family: 'Alibaba PuHuiTi 2.0'">头像是可选的，但强烈建议设置一个。</span>
          </div>
        </div>
        <div class="border border-[var(--app-border-color)] border-[0.5px] max-w-[689px] rounded-[16px] ">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px] ">
            <div class="text-[var(--app-h2-text-Light-color)] font-bold text-[14px] leading-[20px]" style="font-family: 'Alibaba PuHuiTi 2.0'">名称</div>
            <div class="text-[var(--app-form-top-title-p)] font-normal text-[14px] leading-[20px]" style="font-family: 'Alibaba PuHuiTi 2.0'">请输入您的显示名称。</div>
          </div>
          <div  class="flex items-center gap-[24px] p-[16px] border-t border-b border-[var(--app-border-color)] ">
            <el-form-item class="m-b-0 " :class="{'app-form-input-width-100':isMobile}">
              <div class="app-form-main-form-item-input-box">
                <el-input  clearable class="app-form-input" placeholder="fap bigtrash" :class="{'app-form-input-width-100':isMobile}"></el-input>
                <p class="app-form-p">请使用3-30个字符作为您的姓名。</p>
              </div>
            </el-form-item>
          </div>
          <div class="h-fit flex items-center justify-start p-[16px] ">
            <el-button class="app-form-submit-botton" :class="{'app-form-submit-botton-width-100':isMobile}" >
              <img src="@@/assets/images/adminPages/sub.png" alt="">
              <div class="text">保存</div>
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </el-form>

</template>

<style scoped lang="scss">
.directoryHomepage-main{

}

.a{
  color: var(--Text-3, #615b7c);
  font-family: "Alibaba PuHuiTi 2.0";
  font-weight: 400;
  font-size: 14px;


}


</style>