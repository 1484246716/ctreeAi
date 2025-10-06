<script setup lang="ts">
import {useTheme} from "@@/composables/useTheme.ts";
const { activeThemeName } = useTheme()


</script>

<template>
    <div class="module-1">
      <img class="top-img" src="@@/assets/images/defaultPages/home/module-1-OBJECTS.png" alt="">
      <p class="title">
        <span>最专业的</span>
        <span>自助导航建站</span>
        <span>工具</span>
      </p>
      <p class="p1">无需代码，只需几分钟，即可搭建一个可盈利的导航网站。分享您精心策制的站都资源，通过多种渠道来盈利。</p>

      <button class="startNow">
        <img src="@@/assets/images/defaultPages/home/module-4-start.png" alt="">
        <span>现在开始</span>
      </button>
      <p class="p2">查看演示</p>

      <div class="demo-view demo-view-pc">
        <img v-if="activeThemeName=='normal'" src="@@/assets/images/defaultPages/home/banner1.png" alt="">
        <img v-else="activeThemeName=='normal'" src="@@/assets/images/defaultPages/home/banner2.png" alt="">
      </div>
      <div class="demo-view demo-view-h5">
        <img v-if="activeThemeName=='normal'" src="@@/assets/images/defaultPages/home/banner3.png" alt="">
        <img v-else="activeThemeName=='normal'" src="@@/assets/images/defaultPages/home/banner4.png" alt="">
      </div>
    </div>
</template>

<style scoped lang="scss">

.module-1{
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("@@/assets/images/defaultPages/home/module-1-homepage_image.png") no-repeat;
  background-size: 100% 100%;
  padding:76px 0 68px 0;
  box-sizing: border-box;
  .top-img{
    width:573px;
    margin:0 auto;
  }
  .title{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:16px;
    span{
      color: var(--app-h2-text-Light-color);
      font-family: "Alibaba PuHuiTi 2.0 1000";
      font-size: 48px;
      &:nth-child(2){
        color: var(--app-h2-text-Dark-color);
      }
    }
  }
  .p1{
    color:var(--app-module-box-p1);
    font-family: "Smiley Sans";
    font-weight: 400;
    font-size: 14px;
    margin-bottom:32px;
    text-align: center;
    padding:0 !important;
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
    background: var(--app-purpleButton-bg-color);
    box-shadow: 0px 2px 8px var(--app-purpleButton-bg-boxshow-color);
    border:0;
    margin-bottom:16px;
    animation: slideUp 0.8s ease-out forwards;
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
    cursor: pointer;
    margin-bottom:32px;
    color: var(--app-h2-text-Light-color);
    font-family: "Alibaba PuHuiTi 2.0";
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    text-decoration-thickness: 8%;
    text-underline-offset: 25%;
    text-underline-position: from-font;
    padding:0 !important;
    opacity: 0;
    animation: slideUp 1s 0.5s ease-out forwards;
  }
  .demo-view{
    animation: slideUp 1s 0.5s ease-out forwards;
    opacity: 0;
    max-width: 1048px;
    height: fit-content;
    padding:10px;
    border-radius: 24px;
    border: 0.5px solid var(--app-border-color);
    box-sizing: border-box;
    background: var(--app-module-box-demo-bg);
    &:hover{
      box-shadow: 0px 4px 8px var(--Shadow-1, #a7a0d33b);
    }
    img{
      width:100%;
    }
  }
  .demo-view-pc{
    display: block;
  }
  .demo-view-h5{
    display: none;
  }
}
@media (max-width:1000px) {
  .module-1{
    background: none !important;
    padding-top:15px !important;
    padding-bottom:0 !important;
    .title{
      margin-bottom:16px !important;
      span{
        font-size:24px !important;
      }
    }
    .p1{

    }
  }
}

@media (max-width:750px) {
  .demo-view-pc {
    display: none !important;
  }
  .demo-view-h5{
    width:100% !important;
    display: block !important;
  }
}


@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>