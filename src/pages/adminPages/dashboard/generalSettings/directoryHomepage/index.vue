<script setup lang="ts">
import {ref} from "vue"
import {useTheme} from "@@/composables/useTheme.ts";
import {useDevice} from "@@/composables/useDevice.ts";
const { isMobile } = useDevice()
const { activeThemeName } = useTheme()
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
                <path d="M16.251 1.66699C17.4016 1.66699 18.334 2.59941 18.334 3.75V16.25C18.334 17.4006 17.4016 18.333 16.251 18.333H3.75098C2.60038 18.333 1.66797 17.4006 1.66797 16.25V3.75C1.66797 2.59941 2.60038 1.66699 3.75098 1.66699H16.251ZM7.91797 16.667H16.251C16.4811 16.667 16.668 16.4801 16.668 16.25V7.91699H7.91797V16.667ZM3.33398 16.25C3.33398 16.4801 3.52086 16.667 3.75098 16.667H6.25098V7.91699H3.33398V16.25ZM3.75098 3.33301C3.52086 3.33301 3.33398 3.51988 3.33398 3.75V6.25H16.668V3.75C16.668 3.51988 16.4811 3.33301 16.251 3.33301H3.75098Z" fill="#575179"/>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.251 1.66699C17.4016 1.66699 18.334 2.59941 18.334 3.75V16.25C18.334 17.4006 17.4016 18.333 16.251 18.333H3.75098C2.60038 18.333 1.66797 17.4006 1.66797 16.25V3.75C1.66797 2.59941 2.60038 1.66699 3.75098 1.66699H16.251ZM7.91797 16.667H16.251C16.4811 16.667 16.668 16.4801 16.668 16.25V7.91699H7.91797V16.667ZM3.33398 16.25C3.33398 16.4801 3.52086 16.667 3.75098 16.667H6.25098V7.91699H3.33398V16.25ZM3.75098 3.33301C3.52086 3.33301 3.33398 3.51988 3.33398 3.75V6.25H16.668V3.75C16.668 3.51988 16.4811 3.33301 16.251 3.33301H3.75098Z" fill="#B7B2DF"/>
              </svg>

              <span>目录主页</span>
            </div>
           <p class="app-form-title-p">启用后，目录名称将显示在目录页头部靠近标志的位置。</p>
        </div>
      <div class="app-form-main-padding">
            <el-form-item class="app-form-main-form-item">
              <div class="app-form-main-form-item-box">
                <div class="top">
                  <el-switch v-model="form.delivery" />
                  <span>显示目录名称</span>
                </div>
                <p class="p1">启用后，目录名称将显示在目录页头部靠近标志的位置。</p>
              </div>
            </el-form-item>
            <el-form-item class="app-form-main-form-item">
              <div class="app-form-main-form-item-box">
                <div class="top">
                  <el-switch v-model="form.delivery" />
                  <span>显示目录标题</span>
                </div>
                <p class="p1">启用后，目录标题将显示在列表上方。</p>
              </div>
            </el-form-item>
            <el-form-item class="app-form-main-form-item">
              <div class="app-form-main-form-item-box">
                <div class="top">
                  <el-switch class="app-switch" v-model="form.delivery" />
                  <span>显示目录描述</span>
                </div>
                <p class="p1">启用后，目录描述将显示在列表上方。</p>
              </div>
            </el-form-item>
            <el-form-item class="app-form-main-form-item">
              <div class="app-form-main-form-item-box">
                <div class="top">
                  <el-switch v-model="form.delivery" />
                  <span>默认 No Follow</span>
                </div>
                <p class="p1">启用后，所有链接将默认添加nofollow 属性。您可以在单个列表项中单独更改此设置。</p>
              </div>
            </el-form-item>
            <el-form-item class="app-form-main-form-item">
              <div class="app-form-main-form-item-box">
                <div class="top">
                  <el-switch v-model="form.delivery" />
                  <span>自动暗色模式</span>
                </div>
                <p class="p1">启用后，当用户系统处于暗色模式时，目录将自动切换为暗色主题。</p>
              </div>
            </el-form-item>
            <el-form-item class="app-form-main-form-item">
              <div class="app-form-main-form-item-input-box">
                <p class="title">字体</p>
                <el-select class="app-form-select" v-model="form.region" popper-class="app-form-select-popper" :class="{'app-form-select-100':isMobile}" placeholder="please select your zone">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
                <p class="app-form-p">用于目录网站的字体系列。</p>
              </div>
            </el-form-item>
            <el-form-item class="app-form-main-form-item">
              <div class="app-form-main-form-item-box">
                <div class="top">
                  <el-switch v-model="form.delivery" />
                  <span>显示“Made with Ctree.io"</span>
                </div>
                <p class="p1">启用后，页面底部会显示“Made with Directify”链接。您还可以添加自己的联盟推广代码来替换默认代码，从而获得收益。”</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item">
              <div class="app-form-main-form-item-input-box">
                <p class="title">联盟代码(URL 中 ?aff= 后的代码)</p>
               <el-input  clearable class="app-form-input" placeholder="请输入"></el-input>
                <p class="app-form-p">启用后，页面底部会显示“Made with Directify”链接。您还可以添加自己的联盟推广代码来替换默认代码，从而获得收益。”</p>
              </div>
            </el-form-item>

            <el-form-item class="app-form-main-form-item">
              <div class="app-form-main-form-item-input-box">
                <p class="title">"Made with Ctree.io”文本</p>
                <el-input  clearable class="app-form-input" placeholder="请输入"></el-input>
                <p class="app-form-p">此文本将显示在“Made with Ctree.io”链接中，可自定义修改。</p>
              </div>
            </el-form-item>
        </div>

      <div class="app-form-top-title-view app-border-top">
        <div class="app-form-top-title-view-top">
          <svg v-if="activeThemeName=='normal'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.63672 0.916016C9.9034 0.787211 10.2225 0.808754 10.4717 0.980469L18.8047 6.72363C19.0531 6.89485 19.179 7.17633 19.1631 7.45703C19.1638 7.47117 19.166 7.48574 19.166 7.5V16.5908C19.1658 17.4833 18.4862 18.333 17.499 18.333H2.49902C1.57376 18.333 0.91939 17.5864 0.84082 16.7578L0.832031 16.5908V7.5C0.832031 7.48707 0.833389 7.47378 0.833984 7.46094C0.816721 7.17914 0.943121 6.89566 1.19238 6.72363L9.52637 0.980469L9.63672 0.916016ZM10.4531 13.6152C10.1771 13.7946 9.82099 13.7946 9.54492 13.6152L2.49902 9.03516V16.5908L2.50781 16.6436C2.51182 16.6538 2.51746 16.6608 2.52148 16.666H17.4766C17.4857 16.6541 17.4989 16.6298 17.499 16.5908V9.03516L10.4531 13.6152ZM3.0957 7.43457L9.99902 11.9219L16.9014 7.43457L9.99902 2.67773L3.0957 7.43457Z" fill="#575179"/>
          </svg>

          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.63672 0.916016C9.9034 0.787211 10.2225 0.808754 10.4717 0.980469L18.8047 6.72363C19.0531 6.89485 19.179 7.17633 19.1631 7.45703C19.1638 7.47117 19.166 7.48574 19.166 7.5V16.5908C19.1658 17.4833 18.4862 18.333 17.499 18.333H2.49902C1.57376 18.333 0.91939 17.5864 0.84082 16.7578L0.832031 16.5908V7.5C0.832031 7.48707 0.833389 7.47378 0.833984 7.46094C0.816721 7.17914 0.943121 6.89566 1.19238 6.72363L9.52637 0.980469L9.63672 0.916016ZM10.4531 13.6152C10.1771 13.7946 9.82099 13.7946 9.54492 13.6152L2.49902 9.03516V16.5908L2.50781 16.6436C2.51182 16.6538 2.51746 16.6608 2.52148 16.666H17.4766C17.4857 16.6541 17.4989 16.6298 17.499 16.5908V9.03516L10.4531 13.6152ZM3.0957 7.43457L9.99902 11.9219L16.9014 7.43457L9.99902 2.67773L3.0957 7.43457Z" fill="#B7B2DF"/>
          </svg>
          <span>电子邮件提供商设置</span>
        </div>
      </div>
      <div class="app-form-main-padding">
        <el-form-item class="app-form-main-form-item">
            <div class="app-form-main-form-item-input-box">
              <p class="title">服务提供商</p>
              <el-select class="app-form-select app-form-select-100" v-model="form.email" popper-class="app-form-select-popper" placeholder="请选择">
                <el-option v-for="item in emailList" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
              <p class="app-form-p">用于从目录网站发送邮件的邮件服务提供商。</p>
            </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">发件人名称</p>
            <el-input  clearable class="app-form-input" placeholder="请输入"></el-input>
            <p class="app-form-p">邮件“发件人”字段中显示的名称。留空将使用目录名称。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title ">发件人地址</p>
            <el-input  clearable class="app-form-input" placeholder="请输入"></el-input>
            <p class="app-form-p">用于从目录发送邮件的邮箱地址。留空则使用目录所有者邮箱。</p>
          </div>
        </el-form-item>

        <div class="inline-flex flex-col gap-4 p-4 rounded-xl border border-solid border-[#9994b3]" v-if="form.email=='1'">
          <div class="flex items-center gap-0.5">
            <img class="w-[20px] h-[20px]" src="@@/assets/images/adminPages/1.png" alt="">
            <span class="text-[#433d63] font-bold text-[16px]" style="font-family: 'Alibaba PuHuiTi 2.0'">SMTP 设置</span>
          </div>
          <el-form-item class="mb-0">
            <div class="app-form-main-form-item-input-box">
              <p class="title ">主机</p>
              <el-input  clearable class="app-form-input" placeholder="127.0.0.1"></el-input>
              <p class="app-form-p">从目录发送邮件所用的主机地址。</p>
            </div>
          </el-form-item>
          <el-form-item class="mb-0">
            <div class="app-form-main-form-item-input-box">
              <p class="title ">端口</p>
              <el-input  clearable class="app-form-input" placeholder="2525"></el-input>
              <p class="app-form-p">从目录发送邮件所用的端口地址。</p>
            </div>
          </el-form-item>

          <el-form-item class="mb-0">
            <div class="app-form-main-form-item-input-box">
              <p class="title ">加密方式</p>
              <el-input  clearable class="app-form-input" placeholder="tls"></el-input>
              <p class="app-form-p">用于邮件发送的加密协议。</p>
            </div>
          </el-form-item>

          <el-form-item class="mb-0">
            <div class="app-form-main-form-item-input-box">
              <p class="title ">用户名</p>
              <el-input  clearable class="app-form-input" placeholder="postmaster@mail.example.com"></el-input>
              <p class="app-form-p">用于发送邮件的用户名。</p>
            </div>
          </el-form-item>

          <el-form-item class="mb-0">
            <div class="app-form-main-form-item-input-box">
              <p class="title ">密码</p>
              <el-input  clearable show-password class="app-form-input" placeholder="85f6ce1bd0k334a3bf1kj23kj50823adf-wefjnk3"></el-input>
              <p class="app-form-p">用于发送邮件的密码。</p>
            </div>
          </el-form-item>

        </div>

        <div class="inline-flex flex-col gap-4 p-4 rounded-xl border border-solid border-[#9994b3]" v-if="form.email=='2'">
          <div class="flex items-center gap-0.5">
            <img class="w-[20px] h-[20px]" src="@@/assets/images/adminPages/1.png" alt="">
            <span class="text-[#433d63] font-bold text-[16px]" style="font-family: 'Alibaba PuHuiTi 2.0'">Mailgun 设置</span>
          </div>

          <el-form-item class="mb-0">
            <div class="app-form-main-form-item-input-box">
              <p class="title">域名</p>
              <el-input  clearable class="app-form-input" placeholder="mail.example.com"></el-input>
              <p class="app-form-p">用于从目录网站发送邮件的域名。</p>
            </div>
          </el-form-item>


          <el-form-item class="mb-0">
            <div class="app-form-main-form-item-input-box">
              <p class="title ">密钥</p>
              <el-input  clearable show-password class="app-form-input" placeholder="85f6ce1bd0k334a3bf1kj23kj50823adf-wefjnk3"></el-input>
              <p class="app-form-p">用于从目录网站发送邮件的安全密钥。</p>
            </div>
          </el-form-item>

          <el-form-item class="mb-0">
            <div class="app-form-main-form-item-input-box">
              <p class="title ">端点</p>
              <el-input  clearable  class="app-form-input" placeholder="api.mailgun.net"></el-input>
              <p class="app-form-p">如果您不使用美国地区的Mailgun服务，可以在此指定您所在区域的端点，例如:api.eu.mailgun.net</p>
            </div>
          </el-form-item>
        </div>
        <div class="inline-flex flex-col gap-4 p-4 rounded-xl border border-solid border-[#9994b3]" v-if="form.email=='3'">
          <div class="flex items-center gap-0.5">
            <img class="w-[20px] h-[20px]" src="@@/assets/images/adminPages/1.png" alt="">
            <span class="text-[#433d63] font-bold text-[16px]" style="font-family: 'Alibaba PuHuiTi 2.0'">Postmark</span>
          </div>
          <el-form-item class="mb-0">
            <div class="app-form-main-form-item-input-box">
              <p class="title ">SES 密钥</p>
              <el-input  clearable show-password class="app-form-input" placeholder="85f6ce1bd0k334a3bf1kj23kj50823adf-wefjnk3"></el-input>
              <p class="app-form-p">用于从目录网站发送邮件的安全密钥。</p>
            </div>
          </el-form-item>
        </div>

        <div class="inline-flex flex-col gap-4 p-4 rounded-xl border border-solid border-[#9994b3]" v-if="form.email=='4'">
          <div class="flex items-center gap-0.5">
            <img class="w-[20px] h-[20px]" src="@@/assets/images/adminPages/1.png" alt="">
            <span class="text-[#433d63] font-bold text-[16px]" style="font-family: 'Alibaba PuHuiTi 2.0'">Mailgun 设置</span>
          </div>

          <el-form-item class="mb-0">
            <div class="app-form-main-form-item-input-box">
              <p class="title">域名</p>
              <el-input  clearable class="app-form-input" placeholder="mail.example.com"></el-input>
              <p class="app-form-p">用于从目录网站发送邮件的域名。</p>
            </div>
          </el-form-item>


          <el-form-item class="mb-0">
            <div class="app-form-main-form-item-input-box">
              <p class="title ">密钥</p>
              <el-input  clearable show-password class="app-form-input" placeholder="85f6ce1bd0k334a3bf1kj23kj50823adf-wefjnk3"></el-input>
              <p class="app-form-p">用于从目录网站发送邮件的安全密钥。</p>
            </div>
          </el-form-item>

          <el-form-item class="mb-0">
            <div class="app-form-main-form-item-input-box">
              <p class="title ">端点</p>
              <el-input  clearable  class="app-form-input" placeholder="api.mailgun.net"></el-input>
              <p class="app-form-p">如果您不使用美国地区的Mailgun服务，可以在此指定您所在区域的端点，例如:api.eu.mailgun.net</p>
            </div>
          </el-form-item>
        </div>
        <div class="inline-flex flex-col gap-4 p-4 rounded-xl border border-solid border-[#9994b3]" v-if="form.email=='5'">
          <div class="flex items-center gap-0.5">
            <img class="w-[20px] h-[20px]" src="@@/assets/images/adminPages/1.png" alt="">
            <span class="text-[#433d63] font-bold text-[16px]" style="font-family: 'Alibaba PuHuiTi 2.0'">Resend 设置</span>
          </div>
          <el-form-item class="mb-0">
            <div class="app-form-main-form-item-input-box">
              <p class="title ">Resend API Key </p>
              <el-input  clearable show-password class="app-form-input" placeholder="Re_1234567890"></el-input>
              <p class="app-form-p">用于从目录网站发送邮件的Resend API key.</p>
            </div>
          </el-form-item>
        </div>



      </div>
      <div class="app-form-top-title-view">
        <div class="app-form-top-title-view-top app-border-top">
          <svg v-if="activeThemeName=='normal'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.1875 1.6582C9.32814 1.64458 9.4704 1.66425 9.60156 1.7168C9.73257 1.7693 9.84914 1.8522 9.94141 1.95898C10.0337 2.06589 10.099 2.1937 10.1318 2.33105C10.1647 2.46845 10.1648 2.61191 10.1309 2.74902C10.0749 2.97272 10.0498 3.15816 10.0498 3.33398C10.05 4.68411 11.1481 5.78149 12.498 5.78223C12.708 5.77854 12.9172 5.74896 13.1191 5.69141H13.1201C13.2535 5.6559 13.3932 5.65224 13.5283 5.68066C13.6636 5.70919 13.7906 5.76898 13.8984 5.85547C14.0063 5.94197 14.0922 6.05286 14.1494 6.17871C14.2063 6.30397 14.232 6.44068 14.2266 6.57812L14.2275 6.5791C14.2267 6.60804 14.2185 6.68553 14.2139 6.71973L14.2266 6.95996C14.3541 8.1498 15.3985 9.11568 16.665 9.11621C16.8703 9.11295 17.0747 9.08452 17.2725 9.0293L17.2734 9.02832C17.4024 8.99551 17.5375 8.9923 17.668 9.01855C17.7985 9.04484 17.922 9.10045 18.0283 9.18066C18.134 9.26131 18.2199 9.36492 18.2803 9.4834C18.3404 9.60155 18.3738 9.73173 18.377 9.86426L18.3828 10C18.3828 14.6226 14.6216 18.3838 9.99902 18.3838C5.37659 18.3836 1.61621 14.6225 1.61621 10C1.60818 7.91499 2.38098 5.90238 3.78223 4.3584C5.18343 2.81457 7.11164 1.85185 9.1875 1.6582ZM8.29199 3.60645C6.89142 3.97503 5.65052 4.7948 4.7627 5.94043C3.86274 7.10184 3.37694 8.53073 3.38281 10C3.38281 13.6481 6.35098 16.617 9.99902 16.6172C13.3488 16.6172 16.123 14.1148 16.5557 10.8809C15.614 10.8552 14.7073 10.516 13.9805 9.91504C13.2491 9.31027 12.7426 8.47674 12.543 7.5498L12.5 7.55078H12.499C11.4177 7.54952 10.3783 7.13286 9.59473 6.3877C8.82609 5.65661 8.36168 4.66344 8.29199 3.60645Z" fill="#575179" stroke="#575179" stroke-width="0.1"/>
            <path d="M10.416 8.28418C10.7608 8.28418 11.0912 8.42124 11.335 8.66504C11.5788 8.90884 11.7158 9.2392 11.7158 9.58398C11.7158 9.92877 11.5788 10.2591 11.335 10.5029C11.0912 10.7467 10.7608 10.8838 10.416 10.8838C10.0712 10.8838 9.74087 10.7467 9.49707 10.5029C9.25327 10.2591 9.11621 9.92877 9.11621 9.58398C9.11621 9.2392 9.25327 8.90884 9.49707 8.66504C9.74087 8.42124 10.0712 8.28418 10.416 8.28418Z" fill="#575179" stroke="#575179" stroke-width="0.1"/>
            <path d="M7.08398 5.78418C7.42877 5.78418 7.75913 5.92124 8.00293 6.16504C8.24673 6.40884 8.38379 6.7392 8.38379 7.08398C8.38379 7.42877 8.24673 7.75913 8.00293 8.00293C7.75913 8.24673 7.42877 8.38379 7.08398 8.38379C6.7392 8.38379 6.40884 8.24673 6.16504 8.00293C5.92124 7.75913 5.78418 7.42877 5.78418 7.08398C5.78418 6.7392 5.92124 6.40884 6.16504 6.16504C6.40884 5.92124 6.7392 5.78418 7.08398 5.78418Z" fill="#575179" stroke="#575179" stroke-width="0.1"/>
            <path d="M6.25 9.11621C6.59478 9.11621 6.92515 9.25327 7.16895 9.49707C7.41274 9.74087 7.5498 10.0712 7.5498 10.416C7.5498 10.7608 7.41274 11.0912 7.16895 11.335C6.92515 11.5788 6.59478 11.7158 6.25 11.7158C5.90522 11.7158 5.57485 11.5788 5.33105 11.335C5.08726 11.0912 4.9502 10.7608 4.9502 10.416C4.9502 10.0712 5.08726 9.74087 5.33105 9.49707C5.57485 9.25327 5.90522 9.11621 6.25 9.11621Z" fill="#575179" stroke="#575179" stroke-width="0.1"/>
            <path d="M12.916 11.6162C13.2608 11.6162 13.5912 11.7533 13.835 11.9971C14.0788 12.2409 14.2158 12.5712 14.2158 12.916C14.2158 13.2608 14.0788 13.5912 13.835 13.835C13.5912 14.0788 13.2608 14.2158 12.916 14.2158C12.5712 14.2158 12.2409 14.0788 11.9971 13.835C11.7533 13.5912 11.6162 13.2608 11.6162 12.916C11.6162 12.5712 11.7533 12.2409 11.9971 11.9971C12.2409 11.7533 12.5712 11.6162 12.916 11.6162Z" fill="#575179" stroke="#575179" stroke-width="0.1"/>
            <path d="M8.75 12.4502C9.09478 12.4502 9.42515 12.5873 9.66895 12.8311C9.91274 13.0749 10.0498 13.4052 10.0498 13.75C10.0498 14.0948 9.91274 14.4251 9.66895 14.6689C9.42515 14.9127 9.09478 15.0498 8.75 15.0498C8.40522 15.0498 8.07485 14.9127 7.83105 14.6689C7.58726 14.4251 7.4502 14.0948 7.4502 13.75C7.4502 13.4052 7.58726 13.0749 7.83105 12.8311C8.07485 12.5873 8.40522 12.4502 8.75 12.4502Z" fill="#575179" stroke="#575179" stroke-width="0.1"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.1875 1.6582C9.32814 1.64458 9.4704 1.66425 9.60156 1.7168C9.73257 1.7693 9.84914 1.8522 9.94141 1.95898C10.0337 2.06589 10.099 2.1937 10.1318 2.33105C10.1647 2.46845 10.1648 2.61191 10.1309 2.74902C10.0749 2.97272 10.0498 3.15816 10.0498 3.33398C10.05 4.68411 11.1481 5.78149 12.498 5.78223C12.708 5.77854 12.9172 5.74896 13.1191 5.69141H13.1201C13.2535 5.6559 13.3932 5.65224 13.5283 5.68066C13.6636 5.70919 13.7906 5.76898 13.8984 5.85547C14.0063 5.94197 14.0922 6.05286 14.1494 6.17871C14.2063 6.30397 14.232 6.44068 14.2266 6.57812L14.2275 6.5791C14.2267 6.60804 14.2185 6.68553 14.2139 6.71973L14.2266 6.95996C14.3541 8.1498 15.3985 9.11568 16.665 9.11621C16.8703 9.11295 17.0747 9.08452 17.2725 9.0293L17.2734 9.02832C17.4024 8.99551 17.5375 8.9923 17.668 9.01855C17.7985 9.04484 17.922 9.10045 18.0283 9.18066C18.134 9.26131 18.2199 9.36492 18.2803 9.4834C18.3404 9.60155 18.3738 9.73173 18.377 9.86426L18.3828 10C18.3828 14.6226 14.6216 18.3838 9.99902 18.3838C5.37659 18.3836 1.61621 14.6225 1.61621 10C1.60818 7.91499 2.38098 5.90238 3.78223 4.3584C5.18343 2.81457 7.11164 1.85185 9.1875 1.6582ZM8.29199 3.60645C6.89142 3.97503 5.65052 4.7948 4.7627 5.94043C3.86274 7.10184 3.37694 8.53073 3.38281 10C3.38281 13.6481 6.35098 16.617 9.99902 16.6172C13.3488 16.6172 16.123 14.1148 16.5557 10.8809C15.614 10.8552 14.7073 10.516 13.9805 9.91504C13.2491 9.31027 12.7426 8.47674 12.543 7.5498L12.5 7.55078H12.499C11.4177 7.54952 10.3783 7.13286 9.59473 6.3877C8.82609 5.65661 8.36168 4.66344 8.29199 3.60645Z" fill="#B7B2DF" stroke="#B7B2DF" stroke-width="0.1"/>
            <path d="M10.416 8.28418C10.7608 8.28418 11.0912 8.42124 11.335 8.66504C11.5788 8.90884 11.7158 9.2392 11.7158 9.58398C11.7158 9.92877 11.5788 10.2591 11.335 10.5029C11.0912 10.7467 10.7608 10.8838 10.416 10.8838C10.0712 10.8838 9.74087 10.7467 9.49707 10.5029C9.25327 10.2591 9.11621 9.92877 9.11621 9.58398C9.11621 9.2392 9.25327 8.90884 9.49707 8.66504C9.74087 8.42124 10.0712 8.28418 10.416 8.28418Z" fill="#B7B2DF" stroke="#B7B2DF" stroke-width="0.1"/>
            <path d="M7.08398 5.78418C7.42877 5.78418 7.75913 5.92124 8.00293 6.16504C8.24673 6.40884 8.38379 6.7392 8.38379 7.08398C8.38379 7.42877 8.24673 7.75913 8.00293 8.00293C7.75913 8.24673 7.42877 8.38379 7.08398 8.38379C6.7392 8.38379 6.40884 8.24673 6.16504 8.00293C5.92124 7.75913 5.78418 7.42877 5.78418 7.08398C5.78418 6.7392 5.92124 6.40884 6.16504 6.16504C6.40884 5.92124 6.7392 5.78418 7.08398 5.78418Z" fill="#B7B2DF" stroke="#B7B2DF" stroke-width="0.1"/>
            <path d="M6.25 9.11621C6.59478 9.11621 6.92515 9.25327 7.16895 9.49707C7.41274 9.74087 7.5498 10.0712 7.5498 10.416C7.5498 10.7608 7.41274 11.0912 7.16895 11.335C6.92515 11.5788 6.59478 11.7158 6.25 11.7158C5.90522 11.7158 5.57485 11.5788 5.33105 11.335C5.08726 11.0912 4.9502 10.7608 4.9502 10.416C4.9502 10.0712 5.08726 9.74087 5.33105 9.49707C5.57485 9.25327 5.90522 9.11621 6.25 9.11621Z" fill="#B7B2DF" stroke="#B7B2DF" stroke-width="0.1"/>
            <path d="M12.916 11.6162C13.2608 11.6162 13.5912 11.7533 13.835 11.9971C14.0788 12.2409 14.2158 12.5712 14.2158 12.916C14.2158 13.2608 14.0788 13.5912 13.835 13.835C13.5912 14.0788 13.2608 14.2158 12.916 14.2158C12.5712 14.2158 12.2409 14.0788 11.9971 13.835C11.7533 13.5912 11.6162 13.2608 11.6162 12.916C11.6162 12.5712 11.7533 12.2409 11.9971 11.9971C12.2409 11.7533 12.5712 11.6162 12.916 11.6162Z" fill="#B7B2DF" stroke="#B7B2DF" stroke-width="0.1"/>
            <path d="M8.75 12.4502C9.09478 12.4502 9.42515 12.5873 9.66895 12.8311C9.91274 13.0749 10.0498 13.4052 10.0498 13.75C10.0498 14.0948 9.91274 14.4251 9.66895 14.6689C9.42515 14.9127 9.09478 15.0498 8.75 15.0498C8.40522 15.0498 8.07485 14.9127 7.83105 14.6689C7.58726 14.4251 7.4502 14.0948 7.4502 13.75C7.4502 13.4052 7.58726 13.0749 7.83105 12.8311C8.07485 12.5873 8.40522 12.4502 8.75 12.4502Z" fill="#B7B2DF" stroke="#B7B2DF" stroke-width="0.1"/>
          </svg>

          <span>Cookie横幅设置</span>
        </div>
      </div>
      <div class="app-form-main-padding">
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>显示Cookie横幅</span>
            </div>
            <p class="p1">启用后，将在页面底部为首次访问者显示一个Cookie横幅。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">用户名</p>
            <el-input  clearable :rows="2"  type="textarea" class="app-form-input-textarea" placeholder="此网站使用 Cookie 来确保您获得最佳浏览体验。"></el-input>
            <p class="app-form-p">该文本将显示在Cookie 横幅上。</p>
            <p class="app-form-p">您可以使用HTML 标签进行格式化。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">接受按钮文本</p>
            <el-input  clearable  class="app-form-input" placeholder="知道了!">
              <el-color-picker class="app-form-color-picker" v-model="form.color1" />
            </el-input>
            <p class="app-form-p">该文本将显示在接受按钮上。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">背景颜色</p>
            <el-input  clearable  class="app-form-input" placeholder="#4848FD">
              <template #suffix>
                <el-color-picker class="app-form-color-picker"  v-model="form.color1" />
              </template>
            </el-input>
            <p class="app-form-p">cookie banner的背景颜色。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">文字颜色</p>
            <el-input  clearable  class="app-form-input" placeholder="#0FDDA2">
              <template #suffix>
                <el-color-picker class="app-form-color-picker" v-model="form.color1" />
              </template>
            </el-input>
            <p class="app-form-p">cookie banner的文字颜色。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">按钮颜色</p>
            <el-input  clearable  class="app-form-input" placeholder="#E8FF3B">
              <template #suffix>
                <el-color-picker class="app-form-color-picker" v-model="form.color1" />
              </template>
            </el-input>
            <p class="app-form-p">接受按钮的背景颜色。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">按钮文字颜色</p>
            <el-input  clearable  class="app-form-input" placeholder="#CFFAFF">
              <template #suffix>
                <el-color-picker class="app-form-color-picker" v-model="form.color1" />
              </template>
            </el-input>
            <p class="app-form-p">接受按钮的文字颜色。</p>
          </div>
        </el-form-item>
      </div>
      <div class="py-[16px] px-[24px] app-border-top">
        <el-button class="app-form-submit-botton " :class="{'app-form-submit-botton-width-100':isMobile}">
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