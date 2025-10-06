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
        <div class="p-[16px_24px] app-border-bottom">
          <el-button class="app-form-submit-botton">
            <svg v-if="activeThemeName=='normal'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.251 1.66699C17.4016 1.66699 18.334 2.59941 18.334 3.75V16.25C18.334 17.4006 17.4016 18.333 16.251 18.333H3.75098C2.60038 18.333 1.66797 17.4006 1.66797 16.25V3.75C1.66797 2.59941 2.60038 1.66699 3.75098 1.66699H16.251ZM3.75098 3.33301C3.52086 3.33301 3.33398 3.51988 3.33398 3.75V16.25C3.33398 16.4801 3.52086 16.667 3.75098 16.667H16.251C16.4811 16.667 16.668 16.4801 16.668 16.25V3.75C16.668 3.51988 16.4811 3.33301 16.251 3.33301H3.75098ZM10.001 5.83301C10.4612 5.83301 10.834 6.20675 10.834 6.66699V9.16699H13.334C13.7942 9.16699 14.168 9.53976 14.168 10C14.168 10.4602 13.7942 10.833 13.334 10.833H10.834V13.333C10.834 13.7932 10.4612 14.167 10.001 14.167C9.54074 14.167 9.16797 13.7932 9.16797 13.333V10.833H6.66797C6.20773 10.833 5.83398 10.4602 5.83398 10C5.83398 9.53976 6.20773 9.16699 6.66797 9.16699H9.16797V6.66699C9.16797 6.20675 9.54074 5.83301 10.001 5.83301Z" fill="#575179"/>
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.251 1.66699C17.4016 1.66699 18.334 2.59941 18.334 3.75V16.25C18.334 17.4006 17.4016 18.333 16.251 18.333H3.75098C2.60038 18.333 1.66797 17.4006 1.66797 16.25V3.75C1.66797 2.59941 2.60038 1.66699 3.75098 1.66699H16.251ZM3.75098 3.33301C3.52086 3.33301 3.33398 3.51988 3.33398 3.75V16.25C3.33398 16.4801 3.52086 16.667 3.75098 16.667H16.251C16.4811 16.667 16.668 16.4801 16.668 16.25V3.75C16.668 3.51988 16.4811 3.33301 16.251 3.33301H3.75098ZM10.001 5.83301C10.4612 5.83301 10.834 6.20675 10.834 6.66699V9.16699H13.334C13.7942 9.16699 14.168 9.53976 14.168 10C14.168 10.4602 13.7942 10.833 13.334 10.833H10.834V13.333C10.834 13.7932 10.4612 14.167 10.001 14.167C9.54074 14.167 9.16797 13.7932 9.16797 13.333V10.833H6.66797C6.20773 10.833 5.83398 10.4602 5.83398 10C5.83398 9.53976 6.20773 9.16699 6.66797 9.16699H9.16797V6.66699C9.16797 6.20675 9.54074 5.83301 10.001 5.83301Z" fill="#D3D3FF"/>
            </svg>
            <div class="text">新增Webhooks</div>
          </el-button>
        </div>
      <div class="app-form-main-padding">
            <p class="app-form-title-14-4 font-bold m-b-[16px]">Webhook 详情</p>
            <el-form-item class="app-form-main-form-item">
              <div class="app-form-main-form-item-input-box">
                <div class="app-form-row-rule">
                  <p class="title">名字*<span>*</span></p>
                </div>
                <el-input  clearable class="app-form-input app-form-input-width" placeholder="请输入"></el-input>
              </div>
            </el-form-item>
            <el-form-item class="app-form-main-form-item">
              <div class="app-form-main-form-item-input-box">
                <div class="app-form-row-rule">
                  <p class="title">URL*<span>*</span></p>
                </div>
                <el-input  clearable class="app-form-input app-form-input-width" placeholder="请输入"></el-input>
              </div>
            </el-form-item>
            <el-form-item class="app-form-main-form-item">
              <div class="app-form-main-form-item-input-box">
                <div class="app-form-row-rule">
                  <p class="title">Secret<span>*</span></p>
                </div>
                <el-input  clearable class="app-form-input app-form-input-width" placeholder="请输入"></el-input>
                <p class="app-form-p">这个秘钥将用于对Webhook负载进行签名。</p>
              </div>
            </el-form-item>

          <el-form-item class="app-form-main-form-item">
            <div class="app-form-main-form-item-input-box">
              <div class="app-form-row-rule">
                <p class="title">Events<span>*</span></p>
              </div>
              <el-input  clearable class="app-form-input app-form-input-width" placeholder="请输入"></el-input>
            </div>
          </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <div class="app-form-row-rule">
              <p class="title flex items-center">
                <el-switch></el-switch>
                <div class="app-form-p m-l-[8px]">活跃</div>
                <span>*</span>
              </p>
            </div>
          </div>
        </el-form-item>

      </div>



      <div class="py-[16px] px-[24px] m-t-[16px] border-t border-[#b1abcf] border-t-[0.5px]">
        <el-button class="app-form-submit-botton-textType ">
          <div class="text">创建</div>
        </el-button>
        <el-button class="app-form-submit-botton-textType-default ">
          <div class="text">取消</div>
        </el-button>
      </div>
    </div>
  </el-form>

</template>

<style scoped lang="scss">
.directoryHomepage-main{

}

.a{
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding:16px;
  padding-bottom:0;

}


</style>