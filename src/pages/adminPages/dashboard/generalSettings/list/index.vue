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
            <path d="M16.251 1.66699C17.4016 1.66699 18.334 2.59941 18.334 3.75V16.25C18.334 17.4006 17.4016 18.333 16.251 18.333H3.75098C2.60038 18.333 1.66797 17.4006 1.66797 16.25V3.75C1.66797 2.59941 2.60038 1.66699 3.75098 1.66699H16.251ZM7.91797 16.667H16.251C16.4811 16.667 16.668 16.4801 16.668 16.25V7.91699H7.91797V16.667ZM3.33398 16.25C3.33398 16.4801 3.52086 16.667 3.75098 16.667H6.25098V7.91699H3.33398V16.25ZM3.75098 3.33301C3.52086 3.33301 3.33398 3.51988 3.33398 3.75V6.25H16.668V3.75C16.668 3.51988 16.4811 3.33301 16.251 3.33301H3.75098Z" fill="#575179"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.251 1.66699C17.4016 1.66699 18.334 2.59941 18.334 3.75V16.25C18.334 17.4006 17.4016 18.333 16.251 18.333H3.75098C2.60038 18.333 1.66797 17.4006 1.66797 16.25V3.75C1.66797 2.59941 2.60038 1.66699 3.75098 1.66699H16.251ZM7.91797 16.667H16.251C16.4811 16.667 16.668 16.4801 16.668 16.25V7.91699H7.91797V16.667ZM3.33398 16.25C3.33398 16.4801 3.52086 16.667 3.75098 16.667H6.25098V7.91699H3.33398V16.25ZM3.75098 3.33301C3.52086 3.33301 3.33398 3.51988 3.33398 3.75V6.25H16.668V3.75C16.668 3.51988 16.4811 3.33301 16.251 3.33301H3.75098Z" fill="#B7B2DF"/>
          </svg>
          <span>列表设置</span>
        </div>
      </div>
      <div class="app-form-main-padding">
      <el-form-item class="app-form-main-form-item">
        <div class="app-form-main-form-item-input-box">
          <p class="title">条目名称(单数)</p>
          <el-input  clearable class="app-form-input" placeholder="条目"></el-input>
          <p class="app-form-p">将在整个目录中用于所有条目的名称，例如搜索栏提示、分类为空时的名称、提交按钮等。</p>
        </div>
      </el-form-item>
      <el-form-item class="app-form-main-form-item">
        <div class="app-form-main-form-item-input-box">
          <p class="title">搜索占位文字</p>
          <el-input  clearable class="app-form-input" placeholder="搜索条目"></el-input>
          <p class="app-form-p">将显示在搜索按钮上的文字。</p>
        </div>
      </el-form-item>

      <el-form-item class="app-form-main-form-item">
        <div class="app-form-main-form-item-input-box">
          <p class="title">搜索按钮文字</p>
          <el-input  clearable class="app-form-input" placeholder="搜索"></el-input>
          <p class="app-form-p">将显示在搜索按钮上的文字。</p>
        </div>
      </el-form-item>

      <el-form-item class="app-form-main-form-item">
        <div class="app-form-main-form-item-input-box">
          <p class="title">条目卡片按钮文字</p>
          <el-input  clearable class="app-form-input" placeholder="查看更多"></el-input>
          <p class="app-form-p">将显示在条目卡片按钮上的文字。</p>
        </div>
      </el-form-item>

      <el-form-item class="app-form-main-form-item">
        <div class="app-form-main-form-item-input-box">
          <p class="title">条目网址按钮文字</p>
          <el-input  clearable class="app-form-input" placeholder="访问网站"></el-input>
          <p class="app-form-p">将显示在查看条目页面中“访问条目”按钮上的文字。</p>
        </div>
      </el-form-item>

      <el-form-item class="app-form-main-form-item">
        <div class="app-form-main-form-item-box">
          <div class="top">
            <el-switch v-model="form.delivery" />
            <span>在列表卡片上显示URL按钮</span>
          </div>
          <p class="p1">启用后，列表卡片上将显示URL。</p>
        </div>
      </el-form-item>

      <el-form-item class="app-form-main-form-item">
        <div class="app-form-main-form-item-box">
          <div class="top">
            <el-switch v-model="form.delivery" />
            <span>在列表上显示地图</span>
          </div>
          <p class="p1">启用后，地图将显示在列表页面上。</p>
        </div>
      </el-form-item>

      <el-form-item class="app-form-main-form-item">
        <div class="app-form-main-form-item-input-box">
          <p class="title">条目“拨打电话”按钮文字</p>
          <el-input  clearable class="app-form-input" placeholder="电话"></el-input>
          <p class="app-form-p">将显示在查看条目页面中“拨打电话”按钮上的文字。</p>
        </div>
      </el-form-item>

      <el-form-item class="app-form-main-form-item">
        <div class="app-form-main-form-item-input-box">
          <p class="title">条目“发送邮件”按钮文字</p>
          <el-input  clearable class="app-form-input" placeholder="发送邮件"></el-input>
          <p class="app-form-p">将显示在查看条目页面中“发送邮件”按钮上的文字。</p>
        </div>
      </el-form-item>

      <el-form-item class="app-form-main-form-item">
        <div class="app-form-main-form-item-input-box">
          <p class="title">相似条目标题</p>
          <el-input  clearable class="app-form-input" placeholder="Similar :listing"></el-input>
          <p class="app-form-p">将显示在相似条目区域上方的标题。</p>
        </div>
      </el-form-item>

      <el-form-item class="app-form-main-form-item">
        <div class="app-form-main-form-item-input-box">
          <p class="title">与条目相关的文章标题</p>
          <el-input  clearable class="app-form-input" placeholder="变量::article"></el-input>
          <p class="app-form-p">将显示在与条目相关的文章区域上方的标题。变量::article</p>
        </div>
      </el-form-item>

      <el-form-item class="app-form-main-form-item">
        <div class="app-form-main-form-item-input-box">
          <p class="title">与文章相关的条目标题</p>
          <el-input  clearable class="app-form-input" placeholder="变量::listing"></el-input>
          <p class="app-form-p">将显示在与文章相关的条目区域上方的标题。变量::listing</p>
        </div>
      </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">邮箱地址</p>
            <H1>富文本占位</H1>
            <p class="app-form-p">当搜索不到任何列表时将显示的文本。</p>
            <p class="app-form-p">注意:您可以使用以下变量::listing,:category.</p>
            <p class="app-form-p">:listing 将被替换为列表名称的复数形式。</p>
          </div>
        </el-form-item>


        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">每页显示条目数</p>
            <el-input  clearable class="app-form-input" placeholder="12"></el-input>
            <p class="app-form-p">每页将显示的条目数量。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">默认排序方式</p>
            <el-select class="app-form-select" v-model="form.region" popper-class="app-form-select-popper" :class="{'app-form-select-100':isMobile}" placeholder="please select your zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">默认排序方向</p>
            <el-select class="app-form-select" v-model="form.region" popper-class="app-form-select-popper" :class="{'app-form-select-100':isMobile}" placeholder="please select your zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>自动调整封面图片大小</span>
            </div>
            <p class="p1">启用后，封面图片将被调整为1280x720或其他16:9比例。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">默认纵横比</p>
            <el-select class="app-form-select" v-model="form.region" popper-class="app-form-select-popper" :class="{'app-form-select-100':isMobile}" placeholder="please select your zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
            <p class="app-form-p">如果关闭自动调整，则此设置无效。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">封面图片最大高度</p>
            <el-select class="app-form-select" v-model="form.region" popper-class="app-form-select-popper" :class="{'app-form-select-100':isMobile}" placeholder="please select your zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
            <p class="app-form-p">此高度类将用于封面图的最大高度设置(在自动调整时生效)。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>禁用跳转到条目详情页</span>
            </div>
            <p class="p1">启用后，条目将不再有可访问的独立页面。</p>
          </div>
        </el-form-item>

        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>显示投票数</span>
            </div>
            <p class="p1">启用后，投票结果将显示在条目卡片上。</p>
          </div>
        </el-form-item>


        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>在条目卡片上显示分类</span>
            </div>
            <p class="p1">启用后，分类将显示在条目卡片上。</p>
          </div>
        </el-form-item>


    </div>
      <div class="app-form-top-title-view app-border-top">
        <div class="app-form-top-title-view-top">
          <svg v-if="activeThemeName=='normal'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4834 14.4353C14.8079 14.1093 15.3349 14.1073 15.6611 14.4314L18.9951 17.7507C19.3209 18.0754 19.3224 18.6024 18.998 18.9285C18.6734 19.2546 18.1455 19.2561 17.8193 18.9314L14.4863 15.613C14.1604 15.2884 14.1591 14.7614 14.4834 14.4353ZM13.6328 1.19507C13.8944 1.04718 14.2162 1.05081 14.4736 1.20581C14.7308 1.36085 14.8843 1.64292 14.876 1.94312L14.7344 7.04468L18.5195 10.4871C18.7425 10.6898 18.8391 10.9981 18.7715 11.2917C18.7037 11.5852 18.4824 11.8193 18.1934 11.9041L13.2725 13.3464L11.1533 17.9958C11.0288 18.269 10.7668 18.454 10.4678 18.4802C10.1689 18.5063 9.87912 18.3699 9.70898 18.1228L6.80957 13.9099L1.71191 13.3396C1.41264 13.3061 1.15455 13.113 1.03711 12.8357C0.919891 12.5584 0.961344 12.2389 1.14551 12.0007L4.27148 7.95679L3.24316 2.95776C3.18254 2.66336 3.28517 2.3594 3.51172 2.16187C3.73834 1.96441 4.05357 1.90343 4.33691 2.00366L9.17188 3.71655L13.6328 1.19507ZM9.66113 5.35522C9.45138 5.47366 9.19975 5.49511 8.97266 5.41479L5.17285 4.06812L5.98242 7.99585C6.0314 8.23385 5.97385 8.48136 5.8252 8.67358L3.37012 11.8474L7.37402 12.2957L7.46289 12.3103C7.66693 12.3559 7.84795 12.4771 7.96777 12.6511L10.2471 15.9656L11.9141 12.3083L11.9561 12.2283C12.0631 12.0482 12.2354 11.9138 12.4385 11.8542L16.2998 10.7214L13.3291 8.02124C13.1496 7.858 13.0501 7.62412 13.0566 7.38159L13.1689 3.37085L9.66113 5.35522Z" fill="#575179"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4828 14.4352C14.8073 14.1092 15.3353 14.1071 15.6615 14.4313L18.9945 17.7506C19.3205 18.0752 19.3226 18.6022 18.9984 18.9284C18.6737 19.2545 18.1458 19.2559 17.8197 18.9313L14.4867 15.6129C14.1608 15.2884 14.1587 14.7614 14.4828 14.4352ZM13.6331 1.19496C13.8948 1.04708 14.2165 1.05066 14.474 1.2057C14.7311 1.36074 14.8846 1.6429 14.8763 1.943L14.7337 7.04554L18.5199 10.4879C18.7426 10.6906 18.8384 10.9981 18.7708 11.2916C18.7031 11.585 18.4825 11.8191 18.1937 11.9039L13.2728 13.3463L11.1537 17.9957C11.0291 18.2689 10.7672 18.4549 10.4681 18.4811C10.1691 18.5073 9.8785 18.37 9.70834 18.1227L6.80893 13.9098L1.71127 13.3395C1.4122 13.3059 1.1539 13.1137 1.03647 12.8366C0.919156 12.5594 0.960893 12.2398 1.14487 12.0016L4.27182 7.95667L3.2435 2.95765C3.18286 2.66318 3.2854 2.35928 3.51205 2.16175C3.73867 1.96436 4.05394 1.90333 4.33725 2.00355L9.17123 3.71644L13.6331 1.19496ZM9.66049 5.35511C9.4508 5.47339 9.19997 5.49496 8.97299 5.41468L5.17221 4.068L5.98276 7.99574C6.03174 8.23369 5.9741 8.48126 5.82553 8.67347L3.37045 11.8473L7.37436 12.2955L7.46225 12.3102C7.66639 12.3558 7.84825 12.4769 7.96811 12.651L10.2474 15.9655L11.9144 12.3092L11.9564 12.2282C12.0633 12.0483 12.235 11.9147 12.4378 11.8551L16.3001 10.7223L13.3294 8.02113C13.1499 7.85786 13.0504 7.62405 13.057 7.38148L13.1693 3.37074L9.66049 5.35511Z" fill="#B7B2DF"/>
          </svg>
          <span>精选条目设置</span>
        </div>
      </div>
      <div class="app-form-main-padding">
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>显示精选条目标识</span>
            </div>
            <p class="p1">启用后，“精选”标识将显示在条目卡片上。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">精选条目标识文字</p>
            <el-input  clearable class="app-form-input" placeholder="精选"></el-input>
            <p class="app-form-p">此文字将显示在“精选”条目的标识标签上。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">精选条目标识颜色</p>
            <el-input  clearable  class="app-form-input" placeholder="#4848FD">
              <template #suffix>
                <el-color-picker class="app-form-color-picker"  v-model="form.color1" />
              </template>
            </el-input>
            <p class="app-form-p">用于设置精选标识的背景颜色。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">精选条目标识文字颜色</p>
            <el-input  clearable  class="app-form-input" placeholder="#78D5AD">
              <template #suffix>
                <el-color-picker class="app-form-color-picker"  v-model="form.color1" />
              </template>
            </el-input>
            <p class="app-form-p">用于设置精选标识中文字的颜色。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">精选标识位置</p>
            <el-select class="app-form-select" v-model="form.region" popper-class="app-form-select-popper" :class="{'app-form-select-100':isMobile}" placeholder="please select your zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
            <p class="app-form-p">设置精选标识在条目卡片中的位置。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">精选标识尺寸</p>
            <el-select class="app-form-select" v-model="form.region" popper-class="app-form-select-popper" :class="{'app-form-select-100':isMobile}" placeholder="please select your zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
            <p class="app-form-p">设置精选标识的显示尺寸。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">精选标识自定义 CSS 类(支持 Tailwind)</p>
            <el-input  clearable class="app-form-input" placeholder="精选"></el-input>
            <p class="app-form-p">可添加自定义 CSS类以整样式。</p>
          </div>
        </el-form-item>
      </div>
      <div class="app-form-top-title-view">
        <div class="app-form-top-title-view-top">
          <svg v-if="activeThemeName=='normal'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.833 0.833008C16.7535 0.833008 17.5 1.57953 17.5 2.5V17.5C17.5 18.4205 16.7535 19.167 15.833 19.167H4.16699C3.24652 19.167 2.5 18.4205 2.5 17.5V2.5C2.5 1.57953 3.24652 0.833008 4.16699 0.833008H15.833ZM4.16699 17.5H15.833V2.5H4.16699V17.5ZM6.25 13.333C6.71025 13.333 7.08301 13.7067 7.08301 14.167C7.08283 14.6271 6.71014 15 6.25 15C5.78986 15 5.41717 14.6271 5.41699 14.167C5.41699 13.7067 5.78975 13.333 6.25 13.333ZM13.75 13.333C14.2102 13.333 14.583 13.7068 14.583 14.167C14.5828 14.6271 14.2101 15 13.75 15H8.75C8.28987 15 7.91717 14.6271 7.91699 14.167C7.91699 13.7068 8.28976 13.333 8.75 13.333H13.75ZM6.25 9.16699C6.71025 9.16699 7.08301 9.53975 7.08301 10C7.08301 10.4602 6.71025 10.833 6.25 10.833C5.78975 10.833 5.41699 10.4602 5.41699 10C5.41699 9.53975 5.78975 9.16699 6.25 9.16699ZM13.75 9.16699C14.2102 9.16699 14.583 9.53976 14.583 10C14.583 10.4602 14.2102 10.833 13.75 10.833H8.75C8.28976 10.833 7.91699 10.4602 7.91699 10C7.91699 9.53976 8.28976 9.16699 8.75 9.16699H13.75ZM6.25 5C6.71014 5 7.08283 5.37291 7.08301 5.83301C7.08301 6.29326 6.71025 6.66699 6.25 6.66699C5.78975 6.66699 5.41699 6.29326 5.41699 5.83301C5.41717 5.37291 5.78986 5 6.25 5ZM13.75 5C14.2101 5 14.5828 5.37292 14.583 5.83301C14.583 6.29324 14.2102 6.66699 13.75 6.66699H8.75C8.28976 6.66699 7.91699 6.29325 7.91699 5.83301C7.91717 5.37292 8.28987 5 8.75 5H13.75Z" fill="#575179"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.833 0.833008C16.7535 0.833008 17.5 1.57953 17.5 2.5V17.5C17.5 18.4205 16.7535 19.167 15.833 19.167H4.16699C3.24652 19.167 2.5 18.4205 2.5 17.5V2.5C2.5 1.57953 3.24652 0.833008 4.16699 0.833008H15.833ZM4.16699 17.5H15.833V2.5H4.16699V17.5ZM6.25 13.333C6.71025 13.333 7.08301 13.7067 7.08301 14.167C7.08283 14.6271 6.71014 15 6.25 15C5.78986 15 5.41717 14.6271 5.41699 14.167C5.41699 13.7067 5.78975 13.333 6.25 13.333ZM13.75 13.333C14.2102 13.333 14.583 13.7068 14.583 14.167C14.5828 14.6271 14.2101 15 13.75 15H8.75C8.28987 15 7.91717 14.6271 7.91699 14.167C7.91699 13.7068 8.28976 13.333 8.75 13.333H13.75ZM6.25 9.16699C6.71025 9.16699 7.08301 9.53975 7.08301 10C7.08301 10.4602 6.71025 10.833 6.25 10.833C5.78975 10.833 5.41699 10.4602 5.41699 10C5.41699 9.53975 5.78975 9.16699 6.25 9.16699ZM13.75 9.16699C14.2102 9.16699 14.583 9.53976 14.583 10C14.583 10.4602 14.2102 10.833 13.75 10.833H8.75C8.28976 10.833 7.91699 10.4602 7.91699 10C7.91699 9.53976 8.28976 9.16699 8.75 9.16699H13.75ZM6.25 5C6.71014 5 7.08283 5.37291 7.08301 5.83301C7.08301 6.29326 6.71025 6.66699 6.25 6.66699C5.78975 6.66699 5.41699 6.29326 5.41699 5.83301C5.41717 5.37291 5.78986 5 6.25 5ZM13.75 5C14.2101 5 14.5828 5.37292 14.583 5.83301C14.583 6.29324 14.2102 6.66699 13.75 6.66699H8.75C8.28976 6.66699 7.91699 6.29325 7.91699 5.83301C7.91717 5.37292 8.28987 5 8.75 5H13.75Z" fill="#B7B2DF"/>
          </svg>
          <span>认领条目设置</span>
        </div>
      </div>
      <div class="app-form-main-padding">
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-box">
            <div class="top">
              <el-switch v-model="form.delivery" />
              <span>允许用户认领条目?</span>
            </div>
            <p class="p1">启用后，用户可以认领条目所有权。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">认领条目按钮文字</p>
            <el-input  clearable class="app-form-input" placeholder="认领条目"></el-input>
            <p class="app-form-p">显示在认领按钮上的文字内容。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">精选条目标识颜色</p>
            <el-input  clearable  class="app-form-input" placeholder="#3227ff">
              <template #suffix>
                <el-color-picker class="app-form-color-picker"  v-model="form.color1" />
              </template>
            </el-input>
            <p class="app-form-p">用于设置精选标识的背景颜色。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">认领按钮边框颜色</p>
            <el-input  clearable  class="app-form-input" placeholder="#2721d6">
              <template #suffix>
                <el-color-picker class="app-form-color-picker"  v-model="form.color1" />
              </template>
            </el-input>
            <p class="app-form-p">设置认领按钮的边框颜色。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">认领按钮文字颜色</p>
            <el-input  clearable  class="app-form-input" placeholder="#ffffff">
              <template #suffix>
                <el-color-picker class="app-form-color-picker"  v-model="form.color1" />
              </template>
            </el-input>
            <p class="app-form-p">设置认领按钮上的文字颜色。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">认领按钮尺寸</p>
            <el-select class="app-form-select" v-model="form.region" popper-class="app-form-select-popper" :class="{'app-form-select-100':isMobile}" placeholder="please select your zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
            <p class="app-form-p">设置认领条目按钮的显示尺寸。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">认领按钮 CSS 类(支持 Tailwind)</p>
            <el-input  clearable class="app-form-input" placeholder="认领条目"></el-input>
            <p class="app-form-p">可添加Tailwind CSS 类名以自定义按钮样式。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">姓名输入占位符</p>
            <el-input  clearable class="app-form-input" placeholder="您的姓名"></el-input>
            <p class="app-form-p">显示在“姓名”输入框中的提示文字。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">邮箱输入占位符</p>
            <el-input  clearable class="app-form-input" placeholder="您的邮箱"></el-input>
            <p class="app-form-p">显示在“邮箱”输入框中的提示文字。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">所有权证明占位符</p>
            <el-input  clearable class="app-form-input" placeholder="所有权证明"></el-input>
            <p class="app-form-p">显示在“所有权证明”输入框中的提示文字。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">提交认领按钮文字</p>
            <el-input  clearable class="app-form-input" placeholder="提交认领"></el-input>
            <p class="app-form-p">显示在认领条目的提交按钮上。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">取消按钮文字</p>
            <el-input  clearable class="app-form-input" placeholder="取消"></el-input>
            <p class="app-form-p">显示在认领流程中的取消按钮上。</p>
          </div>
        </el-form-item>
        <el-form-item class="app-form-main-form-item">
          <div class="app-form-main-form-item-input-box">
            <p class="title">提交成功提示语</p>
            <el-input  clearable class="app-form-input" placeholder="您的认领请求已成功提交。"></el-input>
            <p class="app-form-p">在认领提交成功后显示的提示信息。</p>
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