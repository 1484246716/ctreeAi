<script setup lang="ts">

</script>

<template>
  <div class="module-4">
    <h2>深受创作者与企业家喜爱</h2>
    <p class="p1">加入数以千计信赖 Ctree 的创业者行列，轻松打造属于您的专业目录网站。</p>
    <div class="module-4-box">
      <div class="box">
        <span>48小时</span>
        <span>上线后仅用 48 小时就实现首笔 1,000 美元销售额</span>
      </div>
      <div class="box">
        <span>97%</span>
        <span>有 97% 的用户会在网上搜索本地服务</span>
      </div>
      <div class="box">
        <span>电子邮件&Discord</span>
        <span>通过 电子邮件和 Discord 社区支持，为您的目录项目提供全程助力，助您快速取得成功</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.module-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    font-weight: 900;
    font-size: 36px;
    color: var(--app-module-box-h2);
    margin-bottom:8px;
    font-family: "Alibaba PuHuiTi 2.0 900";
  }
  .p1{
    color:var(--app-module-box-p1);
    font-family: "Smiley Sans";
    font-weight: 400;
    font-size: 14px;
    margin-bottom:32px;
    padding:0 !important;
  }
  .module-4-box{
    display: flex;
    align-items:flex-start;

    gap: 42px;
    .box{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap:8px;
      width:30%;
      justify-content: center;
      span{
        &:nth-child(1){
          color: var(--app-h2-text-Dark-color);
          font-family: "Alibaba PuHuiTi 2.0 900";
          font-weight: 900;
          font-size: 24px;
          line-height: 32px;
        }
        &:nth-child(2){
          color: var(--app-h2-text-Light-color);
          font-family: "Alibaba PuHuiTi 2.0";
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
        }
      }
    }
  }
}
@media (max-width: 1000px) {
  h2{
    font-size: 24px !important;
  }
  .p1{
    margin-bottom:16px !important;
  }
  .module-4-box{
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    .box{
      width: 100% !important;
    }
  }
}
</style>