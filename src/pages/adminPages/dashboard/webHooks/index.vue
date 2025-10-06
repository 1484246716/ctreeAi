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
          <svg v-if="activeThemeName=='normal'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.251 1.66699C17.4016 1.66699 18.334 2.59941 18.334 3.75V16.25C18.334 17.4006 17.4016 18.333 16.251 18.333H3.75098C2.60038 18.333 1.66797 17.4006 1.66797 16.25V3.75C1.66797 2.59941 2.60038 1.66699 3.75098 1.66699H16.251ZM3.75098 3.33301C3.52086 3.33301 3.33398 3.51988 3.33398 3.75V16.25C3.33398 16.4801 3.52086 16.667 3.75098 16.667H16.251C16.4811 16.667 16.668 16.4801 16.668 16.25V3.75C16.668 3.51988 16.4811 3.33301 16.251 3.33301H3.75098ZM10.001 5.83301C10.4612 5.83301 10.834 6.20675 10.834 6.66699V9.16699H13.334C13.7942 9.16699 14.168 9.53976 14.168 10C14.168 10.4602 13.7942 10.833 13.334 10.833H10.834V13.333C10.834 13.7932 10.4612 14.167 10.001 14.167C9.54074 14.167 9.16797 13.7932 9.16797 13.333V10.833H6.66797C6.20773 10.833 5.83398 10.4602 5.83398 10C5.83398 9.53976 6.20773 9.16699 6.66797 9.16699H9.16797V6.66699C9.16797 6.20675 9.54074 5.83301 10.001 5.83301Z" fill="#575179"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.251 1.66699C17.4016 1.66699 18.334 2.59941 18.334 3.75V16.25C18.334 17.4006 17.4016 18.333 16.251 18.333H3.75098C2.60038 18.333 1.66797 17.4006 1.66797 16.25V3.75C1.66797 2.59941 2.60038 1.66699 3.75098 1.66699H16.251ZM3.75098 3.33301C3.52086 3.33301 3.33398 3.51988 3.33398 3.75V16.25C3.33398 16.4801 3.52086 16.667 3.75098 16.667H16.251C16.4811 16.667 16.668 16.4801 16.668 16.25V3.75C16.668 3.51988 16.4811 3.33301 16.251 3.33301H3.75098ZM10.001 5.83301C10.4612 5.83301 10.834 6.20675 10.834 6.66699V9.16699H13.334C13.7942 9.16699 14.168 9.53976 14.168 10C14.168 10.4602 13.7942 10.833 13.334 10.833H10.834V13.333C10.834 13.7932 10.4612 14.167 10.001 14.167C9.54074 14.167 9.16797 13.7932 9.16797 13.333V10.833H6.66797C6.20773 10.833 5.83398 10.4602 5.83398 10C5.83398 9.53976 6.20773 9.16699 6.66797 9.16699H9.16797V6.66699C9.16797 6.20675 9.54074 5.83301 10.001 5.83301Z" fill="#D3D3FF"/>
          </svg>
          <div class="text">新webhook</div>
        </el-button>
      </div>
      <div class="flex p-[16px] app-border-bottom">
        <el-form-item class="app-form-main-form-item m-b-0 w-full">
          <div class="form-item-other">
            <div class="app-form-main-form-item-input-box w-[368px]">
              <el-input  clearable class="app-form-input app-form-input-width" placeholder="请输入"></el-input>
            </div>
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.8906 2.01172C21.0754 2.13219 21.9998 3.13314 22 4.34961V19.6504C21.9998 20.948 20.948 21.9998 19.6504 22H4.34961C3.13314 21.9998 2.13219 21.0754 2.01172 19.8906L2 19.6504V4.34961C2.00021 3.05205 3.05205 2.00021 4.34961 2H19.6504L19.8906 2.01172ZM13 20H19.6504C19.8434 19.9998 19.9998 19.8434 20 19.6504V4.34961C19.9998 4.18068 19.88 4.03949 19.7207 4.00684L19.6504 4H13V20ZM4.34961 4C4.15662 4.00021 4.00021 4.15662 4 4.34961V19.6504L4.00684 19.7207C4.03949 19.88 4.18068 19.9998 4.34961 20H11V4H4.34961Z" fill="#A39EBD"/>
            </svg>
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 3.5C21.3904 3.50004 21.745 3.72739 21.9082 4.08203C22.0714 4.43664 22.0136 4.85384 21.7598 5.15039L14.7998 13.2783V21C14.7998 21.3456 14.6216 21.6671 14.3281 21.8496C14.0346 22.032 13.6673 22.0495 13.3574 21.8965L9.75684 20.1191C9.41586 19.9507 9.20037 19.603 9.2002 19.2227V13.2783L2.24023 5.15039C1.98637 4.85383 1.92859 4.43666 2.0918 4.08203C2.25504 3.72738 2.60958 3.5 3 3.5H21ZM10.96 12.2588C11.1149 12.4399 11.2002 12.6708 11.2002 12.9092V18.6006L12.7998 19.3906V12.9092C12.7998 12.6708 12.8851 12.4399 13.04 12.2588L18.8271 5.5H5.17285L10.96 12.2588Z" fill="#A39EBD"/>
            </svg>
          </div>
        </el-form-item>
      </div>
      <div class="p-[16px]">
        <div class="flex flex-col items-center justify-center gap-4">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--app-nodata-bg-color)]">x</div>
          <div class="app-form-p">无Webhook</div>
        </div>
      </div>

    </div>
  </el-form>

</template>

<style scoped lang="scss">
.directoryHomepage-main{

  height:100%;
}


.form-item-other{
  width:100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap:16px;

}
@media (max-width: 1000px) {
  .form-item-other{
    .app-form-main-form-item-input-box{
      width:80% !important;
    }
  }
}

</style>