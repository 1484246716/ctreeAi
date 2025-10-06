<script setup lang="ts">
import {ref} from "vue"
import MyEditor from "@/layouts/components/MyEditor/index.vue";
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
      <div class="py-[16px] px-[24px] app-border-bottom">
        <el-button class="app-form-submit-botton" :class="{'app-form-submit-botton-width-100':isMobile}">
          <img src="@@/assets/images/adminPages/sub.png" alt="">
          <div class="text">导入</div>
        </el-button>
      </div>
      <div class="flex p-[16px] app-border-bottom">
        <el-form-item class="app-form-main-form-item m-b-0">
          <div class="app-form-main-form-item-input-box w-[368px]">
            <el-input  clearable class="app-form-input app-form-input-width" placeholder="请输入"></el-input>
          </div>
        </el-form-item>
      </div>
      <div class="p-[16px]">
        <div class="flex flex-col items-center justify-center gap-4">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--app-nodata-bg-color)]">x</div>
          <div class="app-form-p">无文件验证</div>
        </div>
      </div>

    </div>
  </el-form>

</template>

<style scoped lang="scss">
.directoryHomepage-main{

  height:100%;
}

.a{
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding:16px;
  padding-bottom:0;

}


</style>