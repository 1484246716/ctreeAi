<script setup lang="ts">
import {ref} from "vue"
import MyEditor from "@/layouts/components/MyEditor/index.vue";
import customCode from "@/layouts/components/CodeEditor/index.vue"
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
const handleCodeChange=(code)=> {
  console.log('代码变化:', code)
}
</script>

<template>
  <el-form  label-width="auto">
    <div class="directoryHomepage-main">
      <div class="app-form-top-title-view">
        <div class="app-form-top-title-view-top">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8447 1.52246C10.9242 1.06932 11.3563 0.766389 11.8096 0.845703C12.2626 0.925278 12.5656 1.35737 12.4863 1.81055L9.57031 18.4775C9.49069 18.9305 9.05764 19.2336 8.60449 19.1543C8.15155 19.0747 7.84864 18.6425 7.92773 18.1895L10.8447 1.52246ZM6.06543 4.83789C6.38501 4.50681 6.91299 4.49693 7.24414 4.81641C7.57517 5.13599 7.5841 5.66399 7.26465 5.99512L2.84375 10.5742L7.24414 14.8164C7.5752 15.1359 7.58397 15.6639 7.26465 15.9951C6.94532 16.326 6.41816 16.3355 6.08691 16.0166L1.08691 11.1973C0.927779 11.0439 0.83607 10.8323 0.832031 10.6113C0.828166 10.3904 0.911997 10.1766 1.06543 10.0176L6.06543 4.83789ZM12.7529 4.81641C13.0841 4.49703 13.6121 4.50683 13.9316 4.83789L18.9316 10.0176C19.085 10.1765 19.1689 10.3905 19.165 10.6113C19.161 10.8323 19.0693 11.0439 18.9102 11.1973L13.9102 16.0166C13.5789 16.3357 13.0508 16.3262 12.7314 15.9951C12.4123 15.6638 12.4219 15.1358 12.7529 14.8164L17.1523 10.5742L12.7314 5.99512C12.4121 5.66395 12.4219 5.13593 12.7529 4.81641Z" fill="#575179"/>
          </svg>
          <span>自定义代码</span>

          <el-button class="app-form-submit-botton" style="margin-left:auto;">
            <div class="text">保存</div>
          </el-button>
        </div>
      </div>

      <div class="app-form-main-padding">
        <div class="m-b-[16px]">
          <div class="flex items-center justify-between mb-[10px] max-w-[748px]">
            <div class="app-form-title-14">主要部分</div>
            <div class="app-form-p">支持Tailwind CSS</div>
          </div>
          <customCode @code-change="handleCodeChange" language="javascript" />
          <div class="app-form-p">请在此粘贴您想要添加到目录主区域的自定义代码。</div>
        </div>
        <div class="m-b-[16px]">
          <div class="flex items-center justify-between mb-[10px] max-w-[748px]">
            <div class="app-form-title-14">页脚</div>
            <div class="app-form-p">支持Tailwind CSS</div>
          </div>
          <customCode @code-change="handleCodeChange" language="javascript" />
          <div class="app-form-p">请粘贴您想要添加到目录页脚的自定义代码。</div>
        </div>
        <div class="m-b-[16px]">
          <div class="flex items-center justify-between mb-[10px] max-w-[748px]">
            <div class="app-form-title-14">页脚</div>
            <div class="app-form-p">支持Tailwind CSS</div>
          </div>
          <customCode @code-change="handleCodeChange" language="javascript" />
          <div class="app-form-p">请粘贴您想要添加到目录页脚的自定义代码。</div>
        </div>
        <div class="m-b-[16px]">
          <div class="flex items-center justify-between mb-[10px] max-w-[748px]">
            <div class="app-form-title-14">自定义CSS</div>
            <div class="app-form-p">支持Tailwind CSS</div>
          </div>
          <customCode @code-change="handleCodeChange" language="javascript" />
          <div class="app-form-p">请在此粘贴您想要添加到目录中的自定义CSS。</div>
        </div>

        <div class="m-b-[16px]">
          <div class="flex items-center justify-between mb-[10px] max-w-[748px]">
            <div class="app-form-title-14">在<head></head>标签中的自定义JS。</div>
            <div class="app-form-p">支持Tailwind CSS</div>
          </div>
          <customCode @code-change="handleCodeChange" language="javascript" />
          <div class="app-form-p">请在此粘贴您想要添加到目录的自定义JavaScript代码。</div>
        </div>

        <div class="m-b-[16px]">
          <div class="flex items-center justify-between mb-[10px] max-w-[748px]">
            <div class="app-form-title-14">自定义JS（在闭合body标签之前）</div>
            <div class="app-form-p">支持Tailwind CSS</div>
          </div>
          <customCode @code-change="handleCodeChange" language="javascript" />
          <div class="app-form-p">请在此处粘贴您想要添加到目录中的自定义JavaScript代码。</div>
        </div>
      </div>
      <div class="py-[16px] px-[24px] m-t-[16px] border-t border-[#b1abcf] border-t-[0.5px]">
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

}

.a{
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding:16px;
  padding-bottom:0;



}


</style>