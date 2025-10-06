<script setup lang="ts">
import module2 from "./components/module2.vue"
import module3 from "./components/module3.vue"
import module4 from "./components/module4.vue"
import homeBottom from "../home/homeBottom.vue"

</script>

<template>
  <div class="about-main app-header-max-width">
    <div class="top-view">
      <div class="title">
        <div class="flex items-center">
          <span>面向</span>
          <span class="active">创作者</span>
          <span>与</span>
          <span class="active">企业家</span>
        </div>
        <span>的零代码目录网站构建工具</span>
      </div>
    </div>
    <p class="p1">我们深知您希望打造一个出色的目录网站，却不想为编写代码而费心，因此我们打造了 Ctree 来帮助您轻松实现这一目标。</p>
    <div class="Statistics">
      <div class="box">
        <span>2000+</span>
        <span>我们赢得创业者的信任</span>
      </div>
      <div class="box">
        <span>500+</span>
        <span>目录已启动</span>
      </div>
    </div>
    <img class="topimg" src="@@/assets/images/defaultPages/about/Group.png" alt="">
    <div class="contentbox">
      <module2 />
      <module3 />
      <module4 />
      <homeBottom />
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-main{
  display: flex;
  flex-direction: column;
  align-items: center;
  .top-view{
    display: flex;
    align-items: center;
    justify-content: center;

    .logleft{
      width: 196px;
      height: 80px;
      display: flex;
      flex-direction: column;
      place-content: center;
      place-items: center;
      gap: 10px;
      flex-shrink: 0;
      padding: 16px;
      border-radius: 24px;
      border: 1px solid var(--Stroke-default, #c6c2da);
      box-sizing: border-box;
      background: var(--Bg-3, #dde4f0);
      box-shadow: 0px 4px 8px var(--Shadow-1, #a7a0d33b);
    }
    .title{
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        color: var(--app-h2-text-Light-color);
        font-family: "Alibaba PuHuiTi 2.0 1000";
        font-weight: 1000;
        font-size: 36px;
      }
      .active{
        color: var(--app-h2-text-Dark-color);
      }
    }
  }
  .p1{
    color: #66637c;
    font-family: "Smiley Sans";
    font-weight: 400;
    font-size: 14px;
    margin-bottom:55px;
    text-align: center;
  }
  .Statistics{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 42px;
    .box{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap:8px;
      span{
        &:nth-child(1){
          color: var(--app-h2-text-Dark-color);
          font-family: "Alibaba PuHuiTi 2.0 900";
          font-weight: 900;
          font-size: 36px;
          line-height: 44px;
        }
        &:nth-child(2){
          color: var(--app-h2-text-Light-color);
          font-family: "Alibaba PuHuiTi 2.0";
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
  .topimg{
    width:100%;
    margin-top:4px;
    margin-bottom:4px;

  }

  .contentbox{
    display: flex;
    flex-direction: column;
    gap: 56px;
  }



}
@media (max-width: 1000px)  {
  .top-view{
    .title{
      flex-direction: column !important;
      margin-bottom:16px !important;
      span{
        font-size:24px !important;
      }
    }
  }
  .p1{
    max-width: 269px;
    margin-bottom:16px !important;
  }
  .contentbox{
    gap:16px !important;
  }
}
</style>