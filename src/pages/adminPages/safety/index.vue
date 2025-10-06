<script setup lang="ts">
import {ref} from "vue"
import {useTheme} from "@@/composables/useTheme.ts";
import {useDevice} from "@@/composables/useDevice.ts";
const { isMobile } = useDevice()
const { activeThemeName } = useTheme()

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
            <path d="M9.88672 0.839844C10.0037 0.82319 10.124 0.831905 10.2383 0.865234L17.7344 3.05566C18.0898 3.15948 18.334 3.48523 18.334 3.85547V8.3457C18.334 13.4246 15.0841 17.9345 10.2656 19.54C10.0949 19.5969 9.91002 19.5968 9.73926 19.54C4.91959 17.9346 1.66807 13.4238 1.66797 8.34375V3.85547C1.66797 3.48519 1.91215 3.15945 2.26758 3.05566L9.77148 0.865234L9.88672 0.839844ZM3.33398 4.47949V8.34375C3.33409 12.6127 6.00895 16.4114 10.002 17.8643C13.9941 16.4114 16.668 12.6138 16.668 8.3457V4.47949L10.0039 2.5332L3.33398 4.47949ZM13.5781 6.90918C13.9036 6.58374 14.4314 6.58374 14.7568 6.90918C15.0823 7.23462 15.0823 7.76246 14.7568 8.08789L9.75684 13.0879C9.43139 13.4132 8.90352 13.4133 8.57812 13.0879L5.66211 10.1709C5.33667 9.84546 5.33667 9.31762 5.66211 8.99219C5.98747 8.66723 6.51451 8.66719 6.83984 8.99219L9.16797 11.3203L13.5781 6.90918Z" fill="#433D63"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.88672 0.839844C10.0037 0.82319 10.124 0.831905 10.2383 0.865234L17.7344 3.05566C18.0898 3.15948 18.334 3.48523 18.334 3.85547V8.3457C18.334 13.4246 15.0841 17.9345 10.2656 19.54C10.0949 19.5969 9.91002 19.5968 9.73926 19.54C4.91959 17.9346 1.66807 13.4238 1.66797 8.34375V3.85547C1.66797 3.48519 1.91215 3.15945 2.26758 3.05566L9.77148 0.865234L9.88672 0.839844ZM3.33398 4.47949V8.34375C3.33409 12.6127 6.00895 16.4114 10.002 17.8643C13.9941 16.4114 16.668 12.6138 16.668 8.3457V4.47949L10.0039 2.5332L3.33398 4.47949ZM13.5781 6.90918C13.9036 6.58374 14.4314 6.58374 14.7568 6.90918C15.0823 7.23462 15.0823 7.76246 14.7568 8.08789L9.75684 13.0879C9.43139 13.4132 8.90352 13.4133 8.57812 13.0879L5.66211 10.1709C5.33667 9.84546 5.33667 9.31762 5.66211 8.99219C5.98747 8.66723 6.51451 8.66719 6.83984 8.99219L9.16797 11.3203L13.5781 6.90918Z" fill="#C0BCDF"/>
          </svg>

          <span>安全</span>
        </div>
        <p class="app-form-title-p">管理您的安全设置</p>
      </div>
      <div class="p-[16px]">
        <div class="border border-[var(--app-border-color)] border-[0.5px] max-w-[689px]  rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[16px] rounded-br-[16px] m-b-[24px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px] ">
            <div class="text-[var(--app-h2-text-Light-color)] font-bold text-[14px] leading-[20px]" style="font-family: 'Alibaba PuHuiTi 2.0'">重设密码</div>
            <div class="text-[var(--app-form-top-title-p)] font-normal text-[14px] leading-[20px]" style="font-family: 'Alibaba PuHuiTi 2.0'">重置密码以启用电子邮件登录。</div>
          </div>
          <div  class="flex flex-col  gap-[4px] p-[16px]  border-t border-b border-[var(--app-border-color)] ">
            <div class="text-[var(--app-form-top-p)] font-normal text-[14px] leading-[20px]" style="font-family: 'Alibaba PuHuiTi 2.0'">重置您的密码将使您能够使用电子邮件和密码登录，除了您的社交登录方法。您将收到一封包 含重置密码说明的电子邮件。</div>
          </div>
          <div class="h-fit flex items-center justify-start p-[16px_24px] ">
            <el-button class="app-form-submit-botton " :class="{'app-form-submit-botton-width-100':isMobile}">
              <div class="text">重设密码</div>
            </el-button>
          </div>
        </div>

        <div class="border border-[var(--app-border-color)] border-[0.5px] max-w-[689px]  rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[16px] rounded-br-[16px] ">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px] ">
            <div class="text-[var(--app-h2-text-Light-color)] font-bold text-[14px] leading-[20px]" style="font-family: 'Alibaba PuHuiTi 2.0'">删除账户</div>
            <div class="text-[var(--app-form-top-title-p)] font-normal text-[14px] leading-[20px]" style="font-family: 'Alibaba PuHuiTi 2.0'">重置密码以启用电子邮件登录。</div>
          </div>
          <div  class="flex flex-col  gap-[4px] p-[16px]  border-t border-b border-[var(--app-border-color)] ">
            <div class="text-[var(--app-form-top-p)] font-normal text-[14px] leading-[20px]" style="font-family: 'Alibaba PuHuiTi 2.0'">永久删除您的账户及其所有内容。</div>
          </div>
          <div class="h-fit flex items-center justify-start p-[16px_24px] ">
            <el-button type="error" class="app-form-submit-botton app-form-submit-botton-error" :class="{'app-form-submit-botton-width-100':isMobile}">
              <div class="text">删除账户</div>
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