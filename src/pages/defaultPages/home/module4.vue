<script setup lang="ts">
import {useTheme} from "@@/composables/useTheme.ts";
const { activeThemeName } = useTheme()
</script>


<template>
  <div class="module-4">
    <img class="bgimg" v-if="activeThemeName=='normal'" src="@@/assets/images/defaultPages/home/module-4-bg.png" alt="">
    <img class="bgimg" v-else src="@@/assets/images/defaultPages/home/module-4-2.png" alt="">
    <div class="top-Dot">
      <div class="Dot"></div>
      <div class="line1"></div>
      <div class="Dot"></div>
      <div class="line1"></div>
      <div class="Dot Dot1"></div>
      <div class="line2 "></div>
      <div class="Dot"></div>
      <div class="line1"></div>
      <div class="Dot"></div>
      <div class="line1"></div>
      <div class="Dot"></div>
      <div class="line1"></div>
      <div class="Dot"></div>
      <div class="line1"></div>
      <div class="Dot"></div>
    </div>
    <div class="h2-view">
      <h2>准备好</h2>
      <h2 class="bg">开始</h2>
      <h2>了吗？</h2>
    </div>
    <p class="p1">立即创建您的免费目录树,从第一天起就开始有收入</p>

    <button class="startNow">
      <img src="@@/assets/images/defaultPages/home/module-4-start.png" alt="">
      <span>现在开始</span>
    </button>
    <p class="p2">只需几分钟，使用 ctree.io 即可轻松创建一个拥有自定义品牌形象的专业导航站点。</p>
    <p class="p3">无需掌握任何编程技能，无需服务器部署或繁复的配置流程——我们为你做好了一切准备。你只需专注于内容本身，其余的交给平台。无论你是个人创作者、内容策展人、SaaS 产品开发者，还是想要构建行业资源库的运营团队，ctree.io 都能帮助你以极快的速度上线一个高质量的目录网站。通过简单直观的 DNS 设置，你可以将导航站无缝接入自己的独立域名，完全展现品牌风格，提升专业感与信任度。。</p>
    <p class="p2">让你的导航站不再只是一个工具页，而是一个真正属于你的内容资产平台。</p>

  </div>
</template>

<style scoped lang="scss">
  .module-4{
    display: flex;
    flex-direction: column;
    align-items: center;
    height:763px;
    width: 100%;
    position: relative;
    .bgimg{
      width:100%;
      height:100%;
      position: absolute;
      top:0;
      left:0;
      z-index:0;
    }
    .top-Dot{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom:32px;
      margin-top:80px;
      .line1{
        width:8px;
        height:1px;
      }
      .line2{
        width: 24px;
        height: 1px;
        background: linear-gradient(270deg, var(--app-line2-bg-left-color) 0%, var(--app-line2-bg-right-color) 98.08%);
      }
      .Dot{
        width: 10px;
        height: 10px;
        border-radius:100%;
        border: 1px solid var(--app-Dot-border-color);
        box-sizing: border-box;
      }
      .Dot1{
        background: var(--app-Dot1-bg-color);
      }
    }

    .h2-view{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom:16px;
      font-family: "Alibaba PuHuiTi 2.0 1000";
      font-size: 48px;
      h2{
        font-weight: 700;
        color:var(--app-h2-text-Light-color);
        &:nth-child(2){
          color:var(--app-h2-text-Dark-color);
        }
      }
    }
    .p1{
      color: var(--app-module4-text1-color);
      font-family: "Smiley Sans";
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
    .startNow{
      width: 140px;
      height: 48px;
      display: flex;
      place-content: center;
      place-items: center;
      gap: 8px;
      flex-shrink: 0;
      padding: 12px 24px;
      border-radius: 12px;
      margin-bottom:96px;
      margin-top:40px;
      cursor: pointer;
      background: var(--app-purpleButton-bg-color);
      box-shadow: 0px 2px 8px var(--app-purpleButton-bg-boxshow-color);
      border:0;
      z-index:1;
      &:hover{
        box-shadow: 0px 2px 8px var(--app-purpleButton-hover-boxshow-color);
      }
      img{
        width: 20px;
        height: 20px;
      }
      span{
        color: #e2e2ff;
        font-family: "Alibaba PuHuiTi 2.0";
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
      }
    }
    .p2{
      text-align: center;
      color: var(--app-module4-text1-color);
      font-family: "Alibaba PuHuiTi 2.0";
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
    }
    .p3{
      max-width: 822px;
      text-align: center;
      color: var(--app-module4-text2-color);
      font-family: "Alibaba PuHuiTi 2.0";
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }

  }
  @media (max-width: 1000px) {
    .module-4{
      height:auto !important;
      .top-Dot{
        margin-top:0 !important;
      }
      .bgimg{
        display: none;
      }
      .top-Dot{
        margiin:0 !important;
      }
      .startNow{
        margin:16px 0 !important;
      }
      h2{
        font-size: 24px !important;
      }
    }

  }
</style>