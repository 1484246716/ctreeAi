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
            <path d="M10.833 2.5C11.054 2.5 11.2666 2.58786 11.4229 2.74414L18.1621 9.4834C19.0661 10.3933 19.066 11.8625 18.1621 12.7725L18.1602 12.7754L12.7822 18.1523C12.3447 18.5902 11.7508 18.8359 11.1318 18.8359C10.5129 18.8359 9.91901 18.59 9.48145 18.1523L2.74414 11.4229C2.58786 11.2666 2.5 11.054 2.5 10.833V3.33301C2.50018 2.87303 2.87303 2.50018 3.33301 2.5H10.833ZM4.16699 10.4873L10.6602 16.9746C10.7852 17.0995 10.9551 17.1699 11.1318 17.1699C11.3086 17.1698 11.4786 17.0996 11.6035 16.9746L16.9814 11.5957C17.2378 11.3356 17.2371 10.9175 16.9795 10.6582L10.4883 4.16699H4.16699V10.4873ZM7.70801 6.66699C8.28319 6.66699 8.74982 7.13287 8.75 7.70801C8.75 8.2833 8.2833 8.75 7.70801 8.75C7.13287 8.74982 6.66699 8.28319 6.66699 7.70801C6.66717 7.13297 7.13297 6.66717 7.70801 6.66699Z" fill="#575179"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.833 2.5C11.054 2.5 11.2666 2.58786 11.4229 2.74414L18.1621 9.4834C19.0661 10.3933 19.066 11.8625 18.1621 12.7725L18.1602 12.7754L12.7822 18.1523C12.3447 18.5902 11.7508 18.8359 11.1318 18.8359C10.5129 18.8359 9.91901 18.59 9.48145 18.1523L2.74414 11.4229C2.58786 11.2666 2.5 11.054 2.5 10.833V3.33301C2.50018 2.87303 2.87303 2.50018 3.33301 2.5H10.833ZM4.16699 10.4873L10.6602 16.9746C10.7852 17.0995 10.9551 17.1699 11.1318 17.1699C11.3086 17.1698 11.4786 17.0996 11.6035 16.9746L16.9814 11.5957C17.2378 11.3356 17.2371 10.9175 16.9795 10.6582L10.4883 4.16699H4.16699V10.4873ZM7.70801 6.66699C8.28319 6.66699 8.74982 7.13287 8.75 7.70801C8.75 8.2833 8.2833 8.75 7.70801 8.75C7.13287 8.74982 6.66699 8.28319 6.66699 7.70801C6.66717 7.13297 7.13297 6.66717 7.70801 6.66699Z" fill="#B7B2DF"/>
          </svg>

          <span>标签设置</span>
        </div>
        <p class="app-form-p">这些设置适用于所有标签的显示。</p>
      </div>


      <div class="app-form-main-padding">
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>在条目卡片上显示标签</span>
            </div>
            <p class="p1">启用后，标签将显示在条目卡片上。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>在条目页面上显示标签</span>
            </div>
            <p class="p1">启用后，标签将显示在条目详情页中。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">条目卡片最多显示标签数</p>
            <el-input  clearable class="app-form-input" placeholder="3"></el-input>
            <p class="app-form-p">在卡片上最多显示的标签数量。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">条目页面最多显示标签数</p>
            <el-input  clearable class="app-form-input" placeholder="5"></el-input>
            <p class="app-form-p">在详情页中最多显示的标签数量。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">“显示更多标签”按钮文字</p>
            <el-input  clearable class="app-form-input" placeholder="显示更多"></el-input>
            <p class="app-form-p">在“显示更多标签”按钮上显示的文本。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">“显示更少标签”按钮文字</p>
            <el-input  clearable class="app-form-input" placeholder="显示更少"></el-input>
            <p class="app-form-p">在“显示更少标签”按钮上显示的文本。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>在侧边栏显示分类</span>
            </div>
            <p class="p1">启用后，分类将显示在侧边栏中。</p>
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