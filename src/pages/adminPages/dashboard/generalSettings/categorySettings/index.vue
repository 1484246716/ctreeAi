<script setup lang="ts">
import {ref} from "vue"
import {useTheme} from "@@/composables/useTheme.ts";
import {useDevice} from "@@/composables/useDevice.ts";
import MyEditor from "@/layouts/components/MyEditor/index.vue";
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
            <path d="M7.50098 10.833C8.42146 10.833 9.16797 11.5795 9.16797 12.5V16.667C9.16779 17.5873 8.42136 18.333 7.50098 18.333H3.33398C2.41378 18.3328 1.66814 17.5872 1.66797 16.667V12.5C1.66797 11.5796 2.41367 10.8332 3.33398 10.833H7.50098ZM16.668 10.833C17.5883 10.8332 18.334 11.5796 18.334 12.5V16.667C18.3338 17.5872 17.5882 18.3328 16.668 18.333H12.501C11.5806 18.333 10.8342 17.5873 10.834 16.667V12.5C10.834 11.5795 11.5805 10.833 12.501 10.833H16.668ZM3.33398 16.667H7.50098V12.5H3.33398V16.667ZM12.501 16.667H16.668V12.5H12.501V16.667ZM7.50098 1.66699C8.42136 1.66699 9.16779 2.41269 9.16797 3.33301V7.5C9.16797 8.42049 8.42146 9.16699 7.50098 9.16699H3.33398C2.41367 9.16682 1.66797 8.42039 1.66797 7.5V3.33301C1.66814 2.41279 2.41377 1.66717 3.33398 1.66699H7.50098ZM16.668 1.66699C17.5882 1.66717 18.3338 2.4128 18.334 3.33301V7.5C18.334 8.42038 17.5883 9.16682 16.668 9.16699H12.501C11.5805 9.16699 10.834 8.42049 10.834 7.5V3.33301C10.8342 2.41269 11.5806 1.66699 12.501 1.66699H16.668ZM3.33398 7.5H7.50098V3.33301H3.33398V7.5ZM12.501 7.5H16.668V3.33301H12.501V7.5Z" fill="#575179"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.50098 10.833C8.42146 10.833 9.16797 11.5795 9.16797 12.5V16.667C9.16779 17.5873 8.42136 18.333 7.50098 18.333H3.33398C2.41378 18.3328 1.66814 17.5872 1.66797 16.667V12.5C1.66797 11.5796 2.41367 10.8332 3.33398 10.833H7.50098ZM16.668 10.833C17.5883 10.8332 18.334 11.5796 18.334 12.5V16.667C18.3338 17.5872 17.5882 18.3328 16.668 18.333H12.501C11.5806 18.333 10.8342 17.5873 10.834 16.667V12.5C10.834 11.5795 11.5805 10.833 12.501 10.833H16.668ZM3.33398 16.667H7.50098V12.5H3.33398V16.667ZM12.501 16.667H16.668V12.5H12.501V16.667ZM7.50098 1.66699C8.42136 1.66699 9.16779 2.41269 9.16797 3.33301V7.5C9.16797 8.42049 8.42146 9.16699 7.50098 9.16699H3.33398C2.41367 9.16682 1.66797 8.42039 1.66797 7.5V3.33301C1.66814 2.41279 2.41377 1.66717 3.33398 1.66699H7.50098ZM16.668 1.66699C17.5882 1.66717 18.3338 2.4128 18.334 3.33301V7.5C18.334 8.42038 17.5883 9.16682 16.668 9.16699H12.501C11.5805 9.16699 10.834 8.42049 10.834 7.5V3.33301C10.8342 2.41269 11.5806 1.66699 12.501 1.66699H16.668ZM3.33398 7.5H7.50098V3.33301H3.33398V7.5ZM12.501 7.5H16.668V3.33301H12.501V7.5Z" fill="#B7B2DF"/>
          </svg>

          <span>分类设置</span>
        </div>
        <p class="app-form-p">这些设置适用于所有分类。</p>
      </div>
      <div class="app-form-main-padding">
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">分类标题</p>
            <el-input  clearable class="app-form-input" placeholder="分类"></el-input>
            <p class="app-form-p">将显示在分类上方的标题文字。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">“全部分类”按钮文字</p>
            <el-input  clearable class="app-form-input" placeholder="全部"></el-input>
            <p class="app-form-p">显示在“全部分类”按钮中的文字。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>显示热门分类</span>
            </div>
            <p class="p1">启用后，热门分类将显示在条目上方。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">搜索框占位文字</p>
            <el-input  clearable class="app-form-input" placeholder="搜索分类"></el-input>
            <p class="app-form-p">显示在搜索框中的提示文字。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>显示空分类</span>
            </div>
            <p class="p1">启用后，即使分类下没有条目也会显示该分类。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">空分类提示文本</p>
            <div style="max-width:548px;width:100%;" >
              <MyEditor editorHeight="280" />
            </div>
            <p class="app-form-p">当分类下没有任何条目时显示的文本内容。</p>
            <p class="app-form-p">注意:你可以使用以下变量::listing、:category</p>
            <p class="app-form-p">列表将被替换为列表名称的复数形式。</p>
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

      <div class="py-[16px] px-[24px] border-t border-[#b1abcf] border-t-[0.5px]">
        <el-button class="app-form-submit-botton">
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