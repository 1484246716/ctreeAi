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
            <path d="M12.5 0.833008C12.5556 0.833012 12.6113 0.838537 12.666 0.849609C12.669 0.850204 12.6719 0.850937 12.6748 0.851562C12.6995 0.856831 12.7239 0.863569 12.748 0.871094C12.8782 0.911644 12.9947 0.983129 13.0889 1.07715L17.2559 5.24414C17.4066 5.39487 17.4999 5.60302 17.5 5.83301V17.5C17.5 18.4205 16.7535 19.167 15.833 19.167H4.16699C3.24653 19.167 2.5 18.4205 2.5 17.5V2.5C2.5 1.57953 3.24652 0.833008 4.16699 0.833008H12.5ZM4.16699 17.5H15.833V6.66699H12.5C12.0398 6.66699 11.667 6.29325 11.667 5.83301V2.5H4.16699V17.5ZM10.6611 9.41113C10.9866 9.0857 11.5134 9.0857 11.8389 9.41113L13.9229 11.4941C14.2481 11.8196 14.2482 12.3475 13.9229 12.6729L11.8389 14.7559C11.5135 15.0811 10.9865 15.081 10.6611 14.7559C10.3357 14.4304 10.3357 13.9026 10.6611 13.5771L12.1553 12.083L10.6611 10.5889C10.3357 10.2634 10.3357 9.73657 10.6611 9.41113ZM8.16113 9.41113C8.48657 9.0857 9.01343 9.0857 9.33887 9.41113C9.66424 9.73658 9.66428 10.2635 9.33887 10.5889L7.84473 12.083L9.33887 13.5771L9.39648 13.6406C9.66342 13.9679 9.64395 14.4508 9.33887 14.7559C9.03379 15.0608 8.55186 15.0793 8.22461 14.8125L8.16113 14.7559L6.07715 12.6729C5.75177 12.3475 5.75187 11.8196 6.07715 11.4941L8.16113 9.41113ZM13.333 5H14.6543L13.333 3.67773V5Z" fill="#575179"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 0.833008C12.5557 0.833012 12.6112 0.839488 12.666 0.850586C12.669 0.851182 12.6719 0.851912 12.6748 0.852539C12.6994 0.857799 12.7239 0.863589 12.748 0.871094C12.8782 0.911644 12.9947 0.983129 13.0889 1.07715L17.2559 5.24414C17.4066 5.39487 17.4999 5.60302 17.5 5.83301V17.5C17.5 18.4205 16.7535 19.167 15.833 19.167H4.16699C3.24653 19.167 2.5 18.4205 2.5 17.5V2.5C2.5 1.57953 3.24652 0.833008 4.16699 0.833008H12.5ZM4.16699 17.5H15.833V6.66699H12.5C12.0398 6.66699 11.667 6.29325 11.667 5.83301V2.5H4.16699V17.5ZM10.6611 9.41113C10.9866 9.0857 11.5134 9.0857 11.8389 9.41113L13.9229 11.4941C14.2481 11.8196 14.2482 12.3475 13.9229 12.6729L11.8389 14.7559C11.5135 15.0811 10.9865 15.081 10.6611 14.7559C10.3357 14.4304 10.3357 13.9026 10.6611 13.5771L12.1553 12.083L10.6611 10.5889C10.3357 10.2634 10.3357 9.73657 10.6611 9.41113ZM8.16113 9.41113C8.48657 9.0857 9.01343 9.0857 9.33887 9.41113C9.66424 9.73658 9.66428 10.2635 9.33887 10.5889L7.84473 12.083L9.33887 13.5771L9.39648 13.6406C9.66342 13.9679 9.64395 14.4508 9.33887 14.7559C9.03379 15.0608 8.55186 15.0793 8.22461 14.8125L8.16113 14.7559L6.07715 12.6729C5.75177 12.3475 5.75187 11.8196 6.07715 11.4941L8.16113 9.41113ZM13.333 5H14.6543L13.333 3.67773V5Z" fill="#B7B2DF"/>
          </svg>

          <span>自定义页面设置</span>
        </div>
        <p class="app-form-p">这些设置适用于所有自定义页面。</p>
      </div>


      <div class="app-form-main-padding">


        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>显示面包屑导航</span>
            </div>
            <p class="p1">启用后，将在自定义页面顶部显示面包屑导航路径。</p>
          </div>
        </el-form-item>

      </div>

      <div class="py-[16px] px-[24px] border-t border-[var(--app-border-color)] border-t-[0.5px]">
        <el-button class="app-form-submit-botton" :class="{'app-form-submit-botton-width-100':isMobile}">
          <img src="@@/assets/images/adminPages/sub.png" alt="">
          <div class="text">保存</div>
        </el-button>
      </div>
    </div>
  </el-form>

</template>

<style scoped lang="scss">
.directoryHomepage-main{
  background: var(--app-main-bg-color);
}
</style>