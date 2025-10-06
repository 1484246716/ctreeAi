<script setup lang="ts">
import { ref} from 'vue'
const options=ref([
  {
    index:1,
    title:"提交我的产品是免费的吗？",
    content:"是的。您可以免费提交产品，获得 3 个 dofollow 链接，提升您的 SEO。但是，免费方案有限制：- 需在 72 小时内审核并上架 - 需要提供指向我们网站的反向链接 - 不提供客服支持"
  },
  {
    index:2,
    title:"Pro 计划有哪些好处？",
    content:"Pro 计划提供多项优势： - 至少 3 个 dofollow 链接 - 立即列出，或随时发布 - 永久链接，无需反向链接 - 在带有奖励图标的列表中展示 - 通过我们的社交媒体和时事通讯进行推广 - 高级客户支持"
  },
  {
    index:3,
    title:"免费计划和专业计划之间有何区别？",
    content:"免费套餐提交将在 72 小时内审核并上架，但需要提供指向我们网站的反向链接。专业套餐提交可立即上架，无需提供反向链接。两种套餐均可随时启动，并随时更新产品信息。"
  },
  {
    index:4,
    title:"我需要为我的列表提供反向链接吗？",
    content:"对于免费套餐，需要提供指向我们网站的反向链接。反向链接为https://demo.mkdirs.com。但是，如果您选择专业套餐，您将获得永久链接，无需任何反向链接要求。"
  },
])
</script>

<template>
  <div class="module-2">
    <h2>常见问题</h2>
    <p class="p1">有疑问？我们为您准备好了答案！</p>
    <div class="el-collapse-box">
      <el-collapse class="collapse-main">
        <el-collapse-item :title="item.title" :name="item.index" v-for="(item,index) in options">
          <div>
            {{item.content}}
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<style scoped lang="scss">
.module-2{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    font-weight: 900;
    font-size: 36px;
    color: var(--app-module-box-h2);
    margin-bottom:8px;
    font-family: "Alibaba PuHuiTi 2.0 1000";
  }
  .p1{
    color:var(--app-module-box-p1);
    font-family: "Smiley Sans";
    font-weight: 400;
    font-size: 14px;
    margin-bottom:40px;
  }
  .el-collapse-box{
    width:100%;
    max-width:788px;
    margin:0 auto;
  }
  :deep(.collapse-main){
    //border-color:var(--mkdirs-app-border-color);
    //
    display: flex;
    flex-direction: column;
    width:100%;
    margin:0 auto;
    gap:8px;
    padding: 8px;
    border-radius: 12px;
    border: 0.5px solid var(--app-border-color);
    box-sizing: border-box;

    .el-collapse-item{
      padding:12px;
      border-radius: 8px;
      border: 0.5px solid var(--app-border-color);
      box-sizing: border-box;
      background: var(--app-module8-box-bg-color);

      box-sizing: border-box;
      &:hover{
        box-shadow: 0px 4px 8px var(--Shadow-1, #a7a0d33b);
      }
      .el-collapse-item__title{
        position: relative;
        padding-left:13px;

        &:before{
          content: "";
          border-radius:100%;
          width: 6px;
          height: 6px;
          background: var(--app-module8-collapse-item-title-before-color);
          position: absolute;
          top:0;
          bottom:0;
          left:0;
          margin:auto;
        }
      }
      .el-collapse-item__arrow{
        color:var(--app-module8-collapse-item-title-before-color);
      }
    }
    .el-collapse-item__header{
      background: transparent !important;
      height:auto;
      line-height: inherit;
      color: var(--app-module8-collapse-item-header-color);
      font-family: "Alibaba PuHuiTi 2.0";
      font-weight: 700;
      font-size: 16px;
      border:0;
      i{
        font-size:1rem;
        font-weight: 700;
      }
    }
    .el-collapse-item__wrap{
      background: transparent !important;
      border:0;
    }
    .el-collapse-item__content{
      padding:16px 0;
      color: var(--app-module8-el-collapse-item-content-color);
      font-family: "Alibaba PuHuiTi 2.0";
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
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
}
</style>