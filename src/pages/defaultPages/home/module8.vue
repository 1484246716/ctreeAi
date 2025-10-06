<script setup lang="ts">
import { ref} from 'vue'
const options=ref([
  {
    index:1,
    title:"什么是 Ctree？",
    content:"是的。您可以免费提交产品，获得 3 个 dofollow 链接，提升您的 SEO。但是，免费方案有限制：- 需在 72 小时内审核并上架 - 需要提供指向我们网站的反向链接 - 不提供客服支持"
  },
  {
    index:2,
    title:"设置我的目录网站需要多长时间？",
    content:"Pro 计划提供多项优势： - 至少 3 个 dofollow 链接 - 立即列出，或随时发布 - 永久链接，无需反向链接 - 在带有奖励图标的列表中展示 - 通过我们的社交媒体和时事通讯进行推广 - 高级客户支持"
  },
  {
    index:3,
    title:"使用 Ctree 需要编程或设计技能吗？",
    content:"不需要。Ctree 专为各类用户设计，无论您是否具备技术背景。平台提供易用的模板、主题和直观的界面，让您无需任何编程或设计知识，也能轻松创建专业的目录网站。"
  },
  {
    index:4,
    title:"Ctree 只适合懂技术的用户使用吗？",
    content:"完全不是！Ctree 专为非技术用户打造。我们提供易用的模板、拖放式操作功能和逐步引导。如果您会使用电子邮件或社交媒体，就能轻松用 Directify 创建一个专业的目录网站。"
  },
  {
    index:5,
    title:"如果我只有一个小型目录网站怎么办？",
    content:"完全没问题！我们每月 $19 的方案正是专为单一目录网站设计的。无论您是在管理本地商家目录、资源清单，还是小众社群的目录网站，Ctree 都能满足您的需求且经济实惠。"
  },
  {
    index:6,
    title:"我不懂技术——会不会卡住或者需要帮助？",
    content:"完全不会。Ctree 是为非技术用户量身打造的，并可根据您的需求灵活扩展。我们提供直观易用的操作界面，引导您完成每一个步骤，同时客服团队也随时为您提供支持。大多数用户在注册后一小时内就能成功上线他们的第一个目录网站。"
  },
  {
    index:7,
    title:"如果我的目录网站发展得比预期更大怎么办？",
    content:"那是好消息！Ctree 能够根据您的业务无缝扩展。无论是添加更多列表项、功能，还是建立额外的目录网站，您都可以轻松升级套餐。平台会自动处理所有技术层面的扩展，无需您操心。"
  },
  {
    index:8,
    title:"对于小型企业或副业项目来说，这会不会太贵了？",
    content:"其实，Ctree 能帮您省钱！我们的 $19/月方案，相比雇佣开发者（通常需 $2,000+）、购买主机（每月 $10–50）以及后续维护费用，性价比极高。每天不到一美元，您就能拥有一个专业的目录网站。"
  },
  {
    index:9,
    title:"Ctree 与 Google 表格的集成是如何工作的？",
    content:"Ctree 提供无缝的 Google 表格集成功能，让您轻松管理目录内容。您可以直接从 Google 表格导入现有数据，使用我们提供的模板，或连接您自己的表格（需授权访问权限）。设置完成后，您的目录网站将与 Google 表格保持同步 —— 无论您是手动更新还是自动更新，只需更改表格内容，目录数据也会随之更新。"
  },
  {
    index:10,
    title:"我可以使用自己的域名来搭建目录网站吗？",
    content:"当然可以！Ctree 完全支持自定义域名，让您的目录网站更具个性化与专业感。DNS 设置非常简单，而且您的网站上不会有任何水印或第三方品牌标识。"
  },
  {
    index:11,
    title:"Ctree 支持 SEO 优化吗？",
    content:"是的，Ctree 专为 SEO 优化，帮助您的目录网站在搜索引擎中获得良好排名。平台支持程序化 SEO 页面（pSEO）、自动生成网站地图（sitemap）和结构化摘要信息（rich snippets），让您的网站轻松被 Google 收录和提升曝光。"
  },
  {
    index:12,
    title:"我可以免费试用 Ctree 吗？",
    content:"当然可以！我们提供 7 天免费试用，您可以尽情体验所有功能，看看 Ctree 是否适合您的需求。"
  },
  {
    index:13,
    title:"我需要担心托管和部署的问题吗？",
    content:"完全不需要。Ctree 会为您处理所有托管和部署事务，您无需操心服务器或主机配置。您只需专注于目录的创建与维护，其余我们来搞定。"
  },
])
</script>

<template>
  <div class="module-8">
    <div class="top-Dot">
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
      <div class="line1"></div>
      <div class="Dot"></div>
      <div class="line1"></div>
      <div class="Dot"></div>
      <div class="line2 "></div>
      <div class="Dot Dot1"></div>
    </div>
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
.module-8{
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
    margin-bottom:40px;
    padding:0 !important;
  }
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