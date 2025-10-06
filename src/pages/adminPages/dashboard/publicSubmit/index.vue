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
      <div class="app-form-top-title-view">
        <div class="app-form-top-title-view-top">
          <svg v-if="activeThemeName=='normal'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.251 1.66699C17.4016 1.66699 18.334 2.59942 18.334 3.75V16.25C18.334 17.4006 17.4016 18.333 16.251 18.333H3.75098C2.60039 18.333 1.66797 17.4006 1.66797 16.25V3.75C1.66797 2.59941 2.60039 1.66699 3.75098 1.66699H16.251ZM3.75098 3.33301C3.52086 3.33301 3.33398 3.51988 3.33398 3.75V16.25C3.33398 16.4801 3.52085 16.667 3.75098 16.667H16.251C16.4811 16.667 16.668 16.4801 16.668 16.25V3.75C16.668 3.51987 16.4811 3.33301 16.251 3.33301H3.75098ZM9.47559 7.6875C9.80285 7.42064 10.2848 7.43919 10.5898 7.74414L13.9238 11.0771C14.2492 11.4025 14.2491 11.9304 13.9238 12.2559C13.5984 12.5813 13.0706 12.5813 12.7451 12.2559L10.834 10.3447V15C10.834 15.4602 10.4612 15.833 10.001 15.833C9.54074 15.833 9.16797 15.4602 9.16797 15V10.3447L7.25684 12.2559C6.9314 12.5813 6.40356 12.5813 6.07812 12.2559C5.75282 11.9304 5.75273 11.4025 6.07812 11.0771L9.41211 7.74414L9.47559 7.6875ZM13.334 5C13.7941 5 14.1678 5.37292 14.168 5.83301C14.168 6.29325 13.7942 6.66699 13.334 6.66699H6.66797C6.20773 6.66699 5.83398 6.29325 5.83398 5.83301C5.83416 5.37292 6.20784 5 6.66797 5H13.334Z" fill="#575179"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.251 1.66699C17.4016 1.66699 18.334 2.59942 18.334 3.75V16.25C18.334 17.4006 17.4016 18.333 16.251 18.333H3.75098C2.60039 18.333 1.66797 17.4006 1.66797 16.25V3.75C1.66797 2.59941 2.60039 1.66699 3.75098 1.66699H16.251ZM3.75098 3.33301C3.52086 3.33301 3.33398 3.51988 3.33398 3.75V16.25C3.33398 16.4801 3.52085 16.667 3.75098 16.667H16.251C16.4811 16.667 16.668 16.4801 16.668 16.25V3.75C16.668 3.51987 16.4811 3.33301 16.251 3.33301H3.75098ZM9.47559 7.6875C9.80285 7.42064 10.2848 7.43919 10.5898 7.74414L13.9238 11.0771C14.2492 11.4025 14.2491 11.9304 13.9238 12.2559C13.5984 12.5813 13.0706 12.5813 12.7451 12.2559L10.834 10.3447V15C10.834 15.4602 10.4612 15.833 10.001 15.833C9.54074 15.833 9.16797 15.4602 9.16797 15V10.3447L7.25684 12.2559C6.9314 12.5813 6.40356 12.5813 6.07812 12.2559C5.75282 11.9304 5.75273 11.4025 6.07812 11.0771L9.41211 7.74414L9.47559 7.6875ZM13.334 5C13.7941 5 14.1678 5.37292 14.168 5.83301C14.168 6.29325 13.7942 6.66699 13.334 6.66699H6.66797C6.20773 6.66699 5.83398 6.29325 5.83398 5.83301C5.83416 5.37292 6.20784 5 6.66797 5H13.334Z" fill="#B7B2DF"/>
          </svg>

          <span>公开提交</span>
        </div>
      </div>
      <div class="app-form-main-padding">
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>启用公开提交</span>
            </div>
            <p class="p1">启用后，用户可免费或付费向你的目录提交条目。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>需要审核</span>
            </div>
            <p class="p1">启用后，所有用户提交的条目必须经由管理员审核后才会显示。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">提交按钮文字</p>
            <el-input  clearable class="app-form-input" placeholder="提交你的条目"></el-input>
            <p class="app-form-p">此文本将显示在提交按钮上，也会作为提交表单的标题使用。</p>
            <p class="app-form-p">此文本将显示在提交按钮上，也会作为提交表单的标题使用。</p>
          </div>
        </el-form-item>

      </div>
      <div class="app-form-top-title-view app-border-top">
        <div class="app-form-top-title-view-top">
          <svg v-if="activeThemeName=='normal'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33203 3.33301C8.79227 3.33301 9.16602 3.70675 9.16602 4.16699C9.16584 4.62708 8.79216 5 8.33203 5H2.49902V15.833H17.499V14.792C17.499 14.3319 17.8719 13.9582 18.332 13.958C18.7923 13.958 19.166 14.3318 19.166 14.792V15.833C19.166 16.7535 18.4195 17.5 17.499 17.5H2.49902C1.57856 17.5 0.832031 16.7535 0.832031 15.833V5C0.832031 4.0795 1.57856 3.33301 2.49902 3.33301H8.33203ZM14.166 12.083C14.6261 12.0832 14.999 12.4569 14.999 12.917C14.9988 13.377 14.626 13.7498 14.166 13.75H4.16602C3.70589 13.75 3.33221 13.3771 3.33203 12.917C3.33203 12.4568 3.70578 12.083 4.16602 12.083H14.166ZM14.166 3.33301C16.0068 3.33318 17.499 4.82615 17.499 6.66699C17.4989 7.55404 17.151 8.35887 16.5859 8.95605C17.632 9.50749 18.5254 10.3896 19.0742 11.4619C19.2837 11.8716 19.1215 12.3734 18.7119 12.583C18.3023 12.7925 17.8005 12.6302 17.5908 12.2207C16.9062 10.8831 15.4907 10 14.165 10C13.4125 10.0001 12.9009 10.1063 12.502 10.2705C12.1027 10.4349 11.7627 10.6787 11.3721 11.0332C11.0313 11.3425 10.5047 11.3172 10.1953 10.9766C9.886 10.6358 9.91118 10.1091 10.252 9.7998C10.6603 9.42911 11.0971 9.09006 11.6338 8.83301C11.1348 8.25035 10.8321 7.49426 10.832 6.66699C10.832 4.82604 12.3251 3.33301 14.166 3.33301ZM7.49902 8.75C7.95915 8.75 8.33186 9.12292 8.33203 9.58301C8.33203 10.0432 7.95926 10.417 7.49902 10.417H4.16602C3.70578 10.417 3.33203 10.0432 3.33203 9.58301C3.33221 9.12292 3.70589 8.75 4.16602 8.75H7.49902ZM14.166 5C13.2455 5 12.499 5.74652 12.499 6.66699C12.4992 7.58732 13.2456 8.33301 14.166 8.33301C15.0862 8.33283 15.8319 7.58721 15.832 6.66699C15.832 5.74663 15.0863 5.00018 14.166 5Z" fill="#575179"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33203 3.33301C8.79227 3.33301 9.16602 3.70675 9.16602 4.16699C9.16584 4.62708 8.79216 5 8.33203 5H2.49902V15.833H17.499V14.792C17.499 14.3319 17.8719 13.9582 18.332 13.958C18.7923 13.958 19.166 14.3318 19.166 14.792V15.833C19.166 16.7535 18.4195 17.5 17.499 17.5H2.49902C1.57856 17.5 0.832031 16.7535 0.832031 15.833V5C0.832031 4.0795 1.57856 3.33301 2.49902 3.33301H8.33203ZM14.166 12.083C14.6261 12.0832 14.999 12.4569 14.999 12.917C14.9988 13.377 14.626 13.7498 14.166 13.75H4.16602C3.70589 13.75 3.33221 13.3771 3.33203 12.917C3.33203 12.4568 3.70578 12.083 4.16602 12.083H14.166ZM14.166 3.33301C16.0068 3.33318 17.499 4.82615 17.499 6.66699C17.4989 7.55404 17.151 8.35887 16.5859 8.95605C17.632 9.50749 18.5254 10.3896 19.0742 11.4619C19.2837 11.8716 19.1215 12.3734 18.7119 12.583C18.3023 12.7925 17.8005 12.6302 17.5908 12.2207C16.9062 10.8831 15.4907 10 14.165 10C13.4125 10.0001 12.9009 10.1063 12.502 10.2705C12.1027 10.4349 11.7627 10.6787 11.3721 11.0332C11.0313 11.3425 10.5047 11.3172 10.1953 10.9766C9.886 10.6358 9.91118 10.1091 10.252 9.7998C10.6603 9.42911 11.0971 9.09006 11.6338 8.83301C11.1348 8.25035 10.8321 7.49426 10.832 6.66699C10.832 4.82604 12.3251 3.33301 14.166 3.33301ZM7.49902 8.75C7.95915 8.75 8.33186 9.12292 8.33203 9.58301C8.33203 10.0432 7.95926 10.417 7.49902 10.417H4.16602C3.70578 10.417 3.33203 10.0432 3.33203 9.58301C3.33221 9.12292 3.70589 8.75 4.16602 8.75H7.49902ZM14.166 5C13.2455 5 12.499 5.74652 12.499 6.66699C12.4992 7.58732 13.2456 8.33301 14.166 8.33301C15.0862 8.33283 15.8319 7.58721 15.832 6.66699C15.832 5.74663 15.0863 5.00018 14.166 5Z" fill="#B7B2DF"/>
          </svg>
          <span>提交者权限</span>
        </div>
      </div>
      <div class="app-form-main-padding">
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>允许编辑条目</span>
            </div>
            <p class="p1">启用后，用户可以编辑自己提交的条目。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>允许删除条目</span>
            </div>
            <p class="p1">启用后，用户可以删除自己提交的条目。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>允许编辑分类</span>
            </div>
            <p class="p1">启用后，用户可以更改其条目的所属分类。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>允许编辑标签</span>
            </div>
            <p class="p1">启用后，用户可以更改其条目的标签。</p>
          </div>
        </el-form-item>
      </div>

      <div class="app-form-top-title-view app-border-top">
        <div class="app-form-top-title-view-top">
          <svg v-if="activeThemeName=='normal'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6554 0.979612C14.9828 0.712362 15.466 0.731377 15.7712 1.03658L19.3063 4.57173C19.4625 4.72793 19.5504 4.94004 19.5505 5.16093C19.5505 5.38194 19.4626 5.59465 19.3063 5.75093L6.34326 18.714C6.18698 18.8703 5.97428 18.9581 5.75326 18.9581H2.2181C1.75792 18.9581 1.38478 18.585 1.38477 18.1248V14.5896C1.38476 14.3687 1.47269 14.1567 1.62891 14.0004L14.5928 1.03658L14.6554 0.979612ZM3.05143 14.9347V17.2915H5.4082L17.5379 5.16093L15.1812 2.80416L3.05143 14.9347Z" fill="#6C658E"/>
            <path d="M15.7709 8.10736C16.0963 8.4328 16.0964 8.96113 15.7709 9.28656C15.4455 9.61199 14.9172 9.61197 14.5917 9.28656L15.7709 8.10736ZM11.0566 4.5722C11.382 4.24677 11.9095 4.24677 12.235 4.5722L15.7709 8.10736L15.1809 8.69655L14.5917 9.28656L11.0566 5.75059C10.7311 5.42515 10.7311 4.89764 11.0566 4.5722Z" fill="#575179"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6554 0.979612C14.9828 0.712362 15.466 0.731377 15.7712 1.03658L19.3063 4.57173C19.4625 4.72793 19.5504 4.94004 19.5505 5.16093C19.5505 5.38194 19.4626 5.59465 19.3063 5.75093L6.34326 18.714C6.18698 18.8703 5.97428 18.9581 5.75325 18.9581H2.2181C1.75792 18.9581 1.38478 18.585 1.38477 18.1248V14.5896C1.38476 14.3687 1.47269 14.1567 1.62891 14.0004L14.5928 1.03658L14.6554 0.979612ZM3.05143 14.9347V17.2915H5.4082L17.5379 5.16093L15.1812 2.80416L3.05143 14.9347Z" fill="#A39EBD"/>
            <path d="M15.7709 8.10736C16.0963 8.4328 16.0964 8.96113 15.7709 9.28656C15.4455 9.61199 14.9172 9.61197 14.5917 9.28656L15.7709 8.10736ZM11.0566 4.5722C11.382 4.24677 11.9095 4.24677 12.235 4.5722L15.7709 8.10736L15.1809 8.69655L14.5917 9.28656L11.0566 5.75059C10.7311 5.42515 10.7311 4.89764 11.0566 4.5722Z" fill="#B7B2DF"/>
          </svg>

          <span>表单内容</span>
        </div>
        <p class="app-form-p">可设置在表单字段之前和之后显示的内容。</p>
      </div>
      <div class="app-form-main-padding">
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">表单字段前内容</p>
            <div class="max-w-[548px] w-full">
              <MyEditor editorHeight="280" />
            </div>
            <p class="app-form-p">此文本将显示在提交按钮上，也会作为提交表单的标题使用。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">表单字段后内容</p>
            <div class="max-w-[548px] w-full">
              <MyEditor editorHeight="280" />
            </div>
            <p class="app-form-p">将显示在表单字段之后的内容。</p>
          </div>
        </el-form-item>
      </div>

      <div class="app-form-top-title-view">
        <div class="app-form-top-title-view-top">
          <svg v-if="activeThemeName=='normal'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.251 16.2505C16.7112 16.2505 17.084 16.6233 17.084 17.0835C17.0839 17.5437 16.7112 17.9165 16.251 17.9165H7.08398C6.6239 17.9164 6.25102 17.5436 6.25098 17.0835C6.25098 16.6233 6.62387 16.2506 7.08398 16.2505H16.251ZM3.16211 2.32764C3.48754 2.00239 4.01446 2.00231 4.33984 2.32764L10.1738 8.16064C10.4991 8.48603 10.4991 9.01394 10.1738 9.33936L4.33984 15.1724C4.01444 15.4978 3.48756 15.4977 3.16211 15.1724C2.83667 14.8469 2.83667 14.3201 3.16211 13.9946L8.40625 8.75049L3.16211 3.50635C2.83667 3.18091 2.83667 2.65307 3.16211 2.32764Z" fill="#B7B2DF"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2509 16.2501C16.7111 16.2501 17.0838 16.623 17.0839 17.0831C17.0839 17.5434 16.7112 17.9171 16.2509 17.9171H7.08392C6.62383 17.917 6.25091 17.5433 6.25091 17.0831C6.25106 16.6231 6.62392 16.2503 7.08392 16.2501H16.2509ZM3.16205 2.32728C3.48742 2.00225 4.01443 2.00221 4.33978 2.32728L10.1738 8.16127C10.4987 8.48663 10.4988 9.01367 10.1738 9.339L4.33978 15.173C4.01445 15.498 3.4874 15.4979 3.16205 15.173C2.83661 14.8476 2.83661 14.3197 3.16205 13.9943L8.40619 8.75014L3.16205 3.506C2.83661 3.18056 2.83661 2.65272 3.16205 2.32728Z" fill="#B7B2DF"/>
          </svg>
          <span>表单字段</span>
        </div>
        <p class="app-form-p">选择哪些字段在公开提交时为必填、可选或隐藏。</p>
      </div>

      <div class="app-form-main-padding">
        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >用户名</div>
          </div>
          <div  class="app-form-row-box   p-[16px]   ">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签文字</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">用户名字段的标签。</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">字段描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">用户名字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>

        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >用户邮箱</div>
          </div>
          <div  class="app-form-row-box   p-[16px]   ">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签文字</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">用户邮箱字段的标签</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">字段描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">用户邮箱字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >条目名称</div>
          </div>
          <div class="flex flex-col gap-[4px] p-[16px] pb-0">
            <p class="app-form-p">条目名称</p>
            <div class="app-form-options-view">
              <span class="item">必填</span>
            </div>
            <p class="app-form-p">条目名称字段始终为必填，无法隐藏或设为选填</p>
          </div>
          <div  class="app-form-row-box  p-[16px]">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签文字</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">用户邮箱字段的标签</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">字段描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">用户邮箱字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >URL</div>
          </div>
          <div class="flex flex-col gap-[4px] p-[16px] pb-0">
            <p class="app-form-p">URL</p>
            <div class="app-form-options-view">
              <span class="item">必填</span>
            </div>
            <p class="app-form-p">URL字段始终为必填，无法隐藏或设为选填</p>
          </div>
          <div  class="app-form-row-box  p-[16px]">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">网址字段的标签</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">网址字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >电话号码</div>
          </div>
          <div class="flex flex-col gap-[4px] p-[16px] pb-0">
            <p class="app-form-p">电话号码</p>
            <div class="app-form-options-view">
              <span class="item">必填</span>
              <span class="item">选填</span>
              <span class="item item-active">隐藏</span>
            </div>
            <p class="app-form-p">URL字段始终为必填，无法隐藏或设为选填</p>
          </div>
          <div  class="app-form-row-box  p-[16px]">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">电话号码字段的标签</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">电话号码字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >Email</div>
          </div>
          <div class="flex flex-col gap-[4px] p-[16px] pb-0">
            <p class="app-form-p">Email</p>
            <div class="app-form-options-view">
              <span class="item">必填</span>
              <span class="item">选填</span>
              <span class="item item-active">隐藏</span>
            </div>
            <p class="app-form-p">Email字段为可选项，可设为隐藏或必填</p>
          </div>
          <div  class="app-form-row-box  p-[16px]">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">Email字段的标签</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">Email字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >地址</div>
          </div>
          <div class="flex flex-col gap-[4px] p-[16px] pb-0">
            <p class="app-form-p">地址</p>
            <div class="app-form-options-view">
              <span class="item">必填</span>
              <span class="item">选填</span>
              <span class="item item-active">隐藏</span>
            </div>
            <p class="app-form-p">地址字段为可选项，可设为隐藏或必填</p>
          </div>
          <div  class="app-form-row-box  p-[16px]">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">地址字段的标签</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">地址字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >地址</div>
          </div>
          <div class="flex flex-col gap-[4px] p-[16px] pb-0">
            <p class="app-form-p">描述</p>
            <div class="app-form-options-view">
              <span class="item">必填</span>
              <span class="item">选填</span>
              <span class="item item-active">隐藏</span>
            </div>
            <p class="app-form-p">描述字段为可选项，可设为隐藏或必填</p>
          </div>
          <div  class="app-form-row-box  p-[16px]">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">描述字段的标签</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">描述字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >内容</div>
          </div>
          <div class="flex flex-col gap-[4px] p-[16px] pb-0">
            <p class="app-form-p">内容</p>
            <div class="app-form-options-view">
              <span class="item">必填</span>
              <span class="item">选填</span>
              <span class="item item-active">隐藏</span>
            </div>
            <p class="app-form-p">内容字段为可选项，可设为隐藏或必填</p>
          </div>
          <div  class="app-form-row-box  p-[16px]">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">内容字段的标签</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">内容字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >分类</div>
          </div>
          <div class="flex flex-col gap-[4px] p-[16px] pb-0">
            <p class="app-form-p">分类</p>
            <div class="app-form-options-view">
              <span class="item">必填</span>
              <span class="item">选填</span>
              <span class="item item-active">隐藏</span>
            </div>
            <p class="app-form-p">分类字段为可选项，可设为隐藏或必填</p>
          </div>
          <div  class="app-form-row-box  p-[16px]">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">分类字段的标签</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">分类字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >标签</div>
          </div>
          <div class="flex flex-col gap-[4px] p-[16px] pb-0">
            <p class="app-form-p">标签</p>
            <div class="app-form-options-view">
              <span class="item">必填</span>
              <span class="item">选填</span>
              <span class="item item-active">隐藏</span>
            </div>
            <p class="app-form-p">标签字段为可选项，可设为隐藏或必填</p>
          </div>
          <div  class="app-form-row-box  p-[16px]">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">标签字段的标签</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">标签字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >Logo</div>
          </div>
          <div class="flex flex-col gap-[4px] p-[16px] pb-0">
            <p class="app-form-p">Logo</p>
            <div class="app-form-options-view">
              <span class="item">必填</span>
              <span class="item">选填</span>
              <span class="item item-active">隐藏</span>
            </div>
            <p class="app-form-p">Logo字段为可选项，可设为隐藏或必填</p>
          </div>
          <div  class="app-form-row-box  p-[16px]">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">Logo字段的标签</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">Logo字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >Logo URL</div>
          </div>
          <div class="flex flex-col gap-[4px] p-[16px] pb-0">
            <p class="app-form-p">Logo URL</p>
            <div class="app-form-options-view">
              <span class="item">必填</span>
              <span class="item">选填</span>
              <span class="item item-active">隐藏</span>
            </div>
            <p class="app-form-p">Logo URL字段为可选项，可设为隐藏或必填</p>
          </div>
          <div  class="app-form-row-box  p-[16px]">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">Logo URL字段的标签</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">Logo URL字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >图片</div>
          </div>
          <div class="flex flex-col gap-[4px] p-[16px] pb-0">
            <p class="app-form-p">图片</p>
            <div class="app-form-options-view">
              <span class="item">必填</span>
              <span class="item">选填</span>
              <span class="item item-active">隐藏</span>
            </div>
            <p class="app-form-p">图片字段为可选项，可设为隐藏或必填</p>
          </div>
          <div  class="app-form-row-box  p-[16px]">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">图片字段的标签</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">图片字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >附加图片</div>
          </div>
          <div class="flex flex-col gap-[4px] p-[16px] pb-0">
            <p class="app-form-p">附加图片</p>
            <div class="app-form-options-view">
              <span class="item">必填</span>
              <span class="item">选填</span>
              <span class="item item-active">隐藏</span>
            </div>
            <p class="app-form-p">附加图片字段为可选项，可设为隐藏或必填</p>
          </div>
          <div  class="app-form-row-box  p-[16px]">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">附加图片字段的标签</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">附加图片字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >Image URL</div>
          </div>
          <div class="flex flex-col gap-[4px] p-[16px] pb-0">
            <p class="app-form-p">Image URL</p>
            <div class="app-form-options-view">
              <span class="item">必填</span>
              <span class="item">选填</span>
              <span class="item item-active">隐藏</span>
            </div>
            <p class="app-form-p">Image URL字段为可选项，可设为隐藏或必填</p>
          </div>
          <div  class="app-form-row-box  p-[16px]">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">Image URL字段的标签</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">Image URL字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="app-form-border-view  m-b-[16px]">
          <div class="h-fit flex flex-col gap-[4px] py-[8px] px-[16px]  border-b border-[var(--app-border-color)]">
            <div class="app-form-title-14" >社交链接</div>
          </div>
          <div class="flex flex-col gap-[4px] p-[16px] pb-0">
            <p class="app-form-p">社交链接</p>
            <div class="app-form-options-view">
              <span class="item">必填</span>
              <span class="item">选填</span>
              <span class="item item-active">隐藏</span>
            </div>
            <p class="app-form-p">社交链接字段为可选项，可设为隐藏或必填</p>
          </div>
          <div  class="app-form-row-box  p-[16px]">
            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">标签</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">社交链接字段的标签</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item m-b-0">
              <div class="app-form-main-form-item-input-box">
                <p class="title">描述</p>
                <el-input  clearable class="app-form-input" placeholder=""></el-input>
                <p class="app-form-p">社交链接字段的描述</p>
              </div>
            </el-form-item>
          </div>
        </div>


      </div>
      <div class="py-[16px] px-[24px] m-t-[16px] border-t border-[var(--app-border-color)] border-t-[0.5px]">
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

}

.a{
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding:16px;
  padding-bottom:0;

}


</style>