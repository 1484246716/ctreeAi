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
            <path d="M16.251 1.66699C17.4016 1.66699 18.334 2.59942 18.334 3.75V16.25C18.334 17.4006 17.4016 18.333 16.251 18.333H3.75098C2.60039 18.333 1.66797 17.4006 1.66797 16.25V3.75C1.66797 2.59941 2.60039 1.66699 3.75098 1.66699H16.251ZM3.75098 3.33301C3.52086 3.33301 3.33398 3.51988 3.33398 3.75V16.25C3.33398 16.4801 3.52085 16.667 3.75098 16.667H16.251C16.4811 16.667 16.668 16.4801 16.668 16.25V3.75C16.668 3.51987 16.4811 3.33301 16.251 3.33301H3.75098ZM13.334 12.917C13.7942 12.917 14.168 13.2898 14.168 13.75C14.168 14.2102 13.7942 14.583 13.334 14.583H5.83398C5.3739 14.5828 5.00098 14.2101 5.00098 13.75C5.00098 13.2899 5.3739 12.9172 5.83398 12.917H13.334ZM10.834 9.16699C11.2942 9.16699 11.668 9.53976 11.668 10C11.668 10.4602 11.2942 10.833 10.834 10.833H5.83398C5.3739 10.8328 5.00098 10.4601 5.00098 10C5.00098 9.53987 5.3739 9.16717 5.83398 9.16699H10.834ZM14.168 5.41699C14.6281 5.41717 15.001 5.78987 15.001 6.25C15.001 6.71013 14.6281 7.08283 14.168 7.08301H5.83398C5.3739 7.08283 5.00098 6.71013 5.00098 6.25C5.00098 5.78987 5.3739 5.41717 5.83398 5.41699H14.168Z" fill="#575179"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.251 1.66699C17.4016 1.66699 18.334 2.59942 18.334 3.75V16.25C18.334 17.4006 17.4016 18.333 16.251 18.333H3.75098C2.60039 18.333 1.66797 17.4006 1.66797 16.25V3.75C1.66797 2.59941 2.60039 1.66699 3.75098 1.66699H16.251ZM3.75098 3.33301C3.52086 3.33301 3.33398 3.51988 3.33398 3.75V16.25C3.33398 16.4801 3.52085 16.667 3.75098 16.667H16.251C16.4811 16.667 16.668 16.4801 16.668 16.25V3.75C16.668 3.51987 16.4811 3.33301 16.251 3.33301H3.75098ZM13.334 12.917C13.7942 12.917 14.168 13.2898 14.168 13.75C14.168 14.2102 13.7942 14.583 13.334 14.583H5.83398C5.3739 14.5828 5.00098 14.2101 5.00098 13.75C5.00098 13.2899 5.3739 12.9172 5.83398 12.917H13.334ZM10.834 9.16699C11.2942 9.16699 11.668 9.53976 11.668 10C11.668 10.4602 11.2942 10.833 10.834 10.833H5.83398C5.3739 10.8328 5.00098 10.4601 5.00098 10C5.00098 9.53987 5.3739 9.16717 5.83398 9.16699H10.834ZM14.168 5.41699C14.6281 5.41717 15.001 5.78987 15.001 6.25C15.001 6.71013 14.6281 7.08283 14.168 7.08301H5.83398C5.3739 7.08283 5.00098 6.71013 5.00098 6.25C5.00098 5.78987 5.3739 5.41717 5.83398 5.41699H14.168Z" fill="#B7B2DF"/>
          </svg>
          <span>博客设置</span>
        </div>
        <p class="app-form-p">这些设置适用于博客模块。</p>
      </div>


      <div class="app-form-main-padding">
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">博客菜单标题</p>
            <el-input  clearable class="app-form-input" placeholder="博客"></el-input>
            <p class="app-form-p">将显示在导航菜单中的博客标题。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">博客页面标题</p>
            <el-input  clearable class="app-form-input" placeholder="博客"></el-input>
            <p class="app-form-p">将显示在博客页面上方的主标题。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">博客描述</p>
            <el-input  clearable class="app-form-input" placeholder="阅读我们的最新博客文章。"></el-input>
            <p class="app-form-p">显示在博客页面标题下方的简短说明。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>显示面包屑导航</span>
            </div>
            <p class="p1">启用后，将在博客页面顶部显示面包屑导航路径。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>显示发布日期</span>
            </div>
            <p class="p1">启用后，文章发布时间将显示在博客中。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">每页显示文章数</p>
            <el-input  clearable class="app-form-input" placeholder="12"></el-input>
            <p class="app-form-p">每页展示的博客文章数量。</p>
          </div>
        </el-form-item>

      </div>

      <div class="py-[16px] px-[24px] border-t border-[var(--app-border-color)] border-t-[0.5px]">
        <el-button class="app-form-submit-botton"  :class="{'app-form-submit-botton-width-100':isMobile}">
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