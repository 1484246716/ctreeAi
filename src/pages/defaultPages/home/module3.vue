<script setup lang="ts">

</script>

<template>

  <div class="module-3">
    <div class="top-Dot">
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
      <div class="line1"></div>
      <div class="Dot"></div>
    </div>
    <h2>高级功能</h2>
    <p class="p1">利用这些强大功能，将您的目录提升到全新水平。</p>
    <div class="steps-box">
      <div class="steps-box-item">
        <img src="@@/assets/images/defaultPages/home/module-3-1.png" alt="">
        <div class="content">
          <img src="@@/assets/images/defaultPages/home/module-3-icon1.png" alt="">
          <span>浏览器插件</span>
        </div>
        <p >只需一键，即可从任何网站将链接保存到您的目录中。</p>
      </div>
      <div class="steps-box-item">
        <img src="@@/assets/images/defaultPages/home/module-3-2.png" alt="">
        <div class="content">
          <img src="@@/assets/images/defaultPages/home/module-3-icon2.png" alt="">
          <span>AI 内容生成器</span>
        </div>
        <p >自动为您的列表创建专业、符合 SEO 优化的内容。</p>
      </div>
      <div class="steps-box-item">
        <img src="@@/assets/images/defaultPages/home/module-3-3.png" alt="">
        <div class="content">
          <img src="@@/assets/images/defaultPages/home/module-3-icon3.png" alt="">
          <span>资源集成</span>
        </div>
        <p >将您的目录与其他服务连接，实现无缝集成。</p>
      </div>
      <div class="steps-box-item">
        <img src="@@/assets/images/defaultPages/home/module-3-4.png" alt="">
        <div class="content">
          <img src="@@/assets/images/defaultPages/home/module-3-icon4.png" alt="">
          <span>自定义字段</span>
        </div>
        <p >创建自定义字段，精确收集您所需的信息。</p>
      </div>
      <div class="steps-box-item">
        <img src="@@/assets/images/defaultPages/home/module-3-5.png" alt="">
        <div class="content">
          <img src="@@/assets/images/defaultPages/home/module-3-icon5.png" alt="">
          <span>博客功能</span>
        </div>
        <p >创建并发布博客文章，吸引更多访客。</p>
      </div>
      <div class="steps-box-item">
        <img src="@@/assets/images/defaultPages/home/module-3-6.png" alt="">
        <div class="content">
          <img src="@@/assets/images/defaultPages/home/module-3-icon6.png" alt="">
          <span>SEO 优化</span>
        </div>
        <p >通过高级 SEO 功能提升您的搜索引擎排名。</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.module-3{
  display: flex;
  flex-direction: column;
  align-items: center;
  .top-Dot{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:32px;
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

  h2{
    font-weight: 900;
    font-size: 36px;
    color: var(--app-module-box-h2);
    margin-bottom:8px;
    font-family: "Alibaba PuHuiTi 2.0";
  }
  .p1{
    color:var(--app-module-box-p1);
    font-family: "Smiley Sans";
    font-weight: 400;
    font-size: 14px;
    margin-bottom:32px;
    padding:0 !important;
  }
  .steps-box{
    display: grid;
    gap:32px;
    grid-template-columns: repeat(1, 1fr);
    width:100%;
    .steps-box-item{
      position: relative;
      display: flex;
      flex-direction: column;
      place-content: center;
      place-items: center;
      flex-shrink: 0;
      padding: 8px 16px 24px 16px;
      border-radius: 24px;
      border: 0.5px solid var(--app-border-color);
      box-sizing: border-box;
      cursor: pointer;
      img{
        width:200px;
        height:200px;
      }
      .content{
        display:flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 4px 16px;
        border-radius: 12px;
        border: 0.5px solid var(--app-module3-box-border-color);
        box-sizing: border-box;
        background:  var(--app-module3-box-bg-color);
        box-shadow: 0px 4px 8px var(--app-module3-box-show-color);
        margin:8px 0;
        img{
          width:24px;
          height:24px;
        }
        span{
          color: var(--app-module3-box-text-color);
          font-family: "Alibaba PuHuiTi 2.0";
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
        }
      }
      p{
        color: var(--app-module-box-p2);
        font-family: "Alibaba PuHuiTi 2.0";
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
      }
      &:hover{
        box-shadow: 0px 4px 8px #a7a0d33b;
      }
    }

  }
}
@media (min-width: 1000px) {
  .steps-box {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}
@media (min-width: 700px) and (max-width: 999px) {
  .steps-box {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
@media (max-width: 1000px) {
  h2{
    font-size: 24px !important;
  }
  .p1{
    margin-bottom:16px !important;
  }
  .steps-box{
    gap:16px !important;
  }
}
</style>