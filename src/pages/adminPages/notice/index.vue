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
            <path d="M9.99902 0.832031C13.6809 0.832032 16.666 3.81712 16.666 7.49902V14.999H18.332C18.7922 14.999 19.1658 15.3719 19.166 15.832C19.166 16.2923 18.7923 16.666 18.332 16.666H12.8828C12.6803 18.0791 11.4681 19.166 9.99902 19.166C8.52994 19.166 7.31775 18.0791 7.11523 16.666H1.66602C1.20578 16.666 0.832031 16.2923 0.832031 15.832C0.832207 15.3719 1.20589 14.999 1.66602 14.999H3.33203V7.49902C3.33203 3.81712 6.31712 0.832031 9.99902 0.832031ZM8.82129 16.666C8.99307 17.1512 9.45502 17.499 9.99902 17.499C10.543 17.499 11.005 17.1512 11.1768 16.666H8.82129ZM9.99902 2.49902C7.23759 2.49902 4.99902 4.73759 4.99902 7.49902V14.999H14.999V7.49902C14.999 4.73759 12.7605 2.49902 9.99902 2.49902Z" fill="#575179"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99902 0.832031C13.6809 0.832032 16.666 3.81712 16.666 7.49902V14.999H18.332C18.7922 14.999 19.1658 15.3719 19.166 15.832C19.166 16.2923 18.7923 16.666 18.332 16.666H12.8828C12.6803 18.0791 11.4681 19.166 9.99902 19.166C8.52994 19.166 7.31775 18.0791 7.11523 16.666H1.66602C1.20578 16.666 0.832031 16.2923 0.832031 15.832C0.832207 15.3719 1.20589 14.999 1.66602 14.999H3.33203V7.49902C3.33203 3.81712 6.31712 0.832031 9.99902 0.832031ZM8.82129 16.666C8.99307 17.1512 9.45502 17.499 9.99902 17.499C10.543 17.499 11.005 17.1512 11.1768 16.666H8.82129ZM9.99902 2.49902C7.23759 2.49902 4.99902 4.73759 4.99902 7.49902V14.999H14.999V7.49902C14.999 4.73759 12.7605 2.49902 9.99902 2.49902Z" fill="#B7B2DF"/>
          </svg>

          <span>通知</span>
        </div>
        <p class="app-form-title-p">管理您的安全设置</p>
      </div>
      <div class="app-form-main-padding">
        <div class="border border-[var(--app-border-color)] border-[0.5px] max-w-[689px]  rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[16px] rounded-br-[16px]
 m-b-[24px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px] ">
            <div class="text-[var(--app-h2-text-Light-color)] font-bold text-[14px] leading-[20px]" style="font-family: 'Alibaba PuHuiTi 2.0'">订阅通讯。</div>
            <div class="text-[var(--app-form-top-title-p)] font-normal text-[14px] leading-[20px]" style="font-family: 'Alibaba PuHuiTi 2.0'">管理您的通讯订阅偏好</div>
          </div>
          <div  class="flex items-center gap-[24px] p-[16px]  border-t border-b border-[var(--app-border-color)] ">

            <el-form-item class="app-form-main-form-item">
              <div class="app-form-main-form-item-box">
                <div class="top">
                  <el-switch v-model="form.delivery" />
                  <span class="m-l-[8px ]">订阅通讯。</span>
                </div>
              </div>
            </el-form-item>

          </div>
          <div class="h-fit flex items-center justify-start p-[16px_24px] ">
            <span class="text-[var(--app-form-top-p)] font-normal text-[16px]" style="font-family: 'Alibaba PuHuiTi 2.0'">您可以随时更改订阅偏好设置。</span>
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