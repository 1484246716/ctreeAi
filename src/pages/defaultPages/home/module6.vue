<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(false)


const leftList=ref([
  {
    label:'1 个网站',
  },
  {
    label:'自定义域名',
  },
  {
    label:'无限列表项',
  },{
    label:'无限协作者',
  },{
    label:'无限自定义页面',
  },{
    label:'免费 SSL 与 CDN',
  },
  {
    label:'支持自定义 HTML/CSS/JS',
  },{
    label:'支持收款功能',
  },{
    label:'潜在客户收集',
  },{
    label:'可投放付费广告',
  },{
    label:'无水印',
  },{
    label:'支持 Webhooks',
  },{
    label:'即将推出 API',
  },{
    label:'邮件支持 & Discord 社群支持',
  },
])

const rightList=ref([
  {
    label:'无限网站数量',
  },
  {
    label:'无限自定义域名',
  },
  {
    label:'无限列表项',
  },{
    label:'无限协作者',
  },{
    label:'无限自定义页面',
  },{
    label:'免费 SSL 与 CDN',
  },
  {
    label:'支持自定义 HTML/CSS/JS',
  },{
    label:'支持收款功能',
  },{
    label:'潜在客户收集',
  },{
    label:'可投放付费广告',
  },{
    label:'无水印',
  },{
    label:'支持 Webhooks',
  },{
    label:'即将推出 API',
  },{
    label:'邮件支持 & Discord 社群支持',
  },
])
</script>
<template>

  <div class="module-6">
    <div class="top-Dot">
      <div class="Dot"></div>
      <div class="line1"></div>
      <div class="Dot"></div>
      <div class="line1"></div>
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
    </div>

    <h2>选择您的方案</h2>
    <p class="p1">挑选最适合您需求的订阅计划。</p>
    <div class="switch-view">
      <el-switch
          class="app-switch"
          v-model="value"
          active-text="年付"
          inactive-text="月付"
      />
    </div>
    <div class="price-main">
      <div class="price-main-box" :class="{'price-main-box-active':!value}">
        <div class="top">单个</div>
        <div class="line"></div>
        <div class="price-number-view">
          <span>$19</span>
          <span>/month</span>
        </div>
        <div class="price-ul">
          <div class="price-li" v-for="(item,index) in leftList" :key="index">
            <div class="before"></div>
            <span>{{item.label}}</span>
          </div>
        </div>
        <div class="line"></div>
        <button class="startNow">
          <img src="@@/assets/images/defaultPages/home/module6-Play.png" alt="">
          <span>开始免费试用</span>
        </button>
        <p class="bottom-p">7天免费试用 • 随时取消</p>
      </div>
      <div class="price-main-box" :class="{'price-main-box-active':value}">
        <div class="top">无限制</div>
        <div class="line"></div>
        <div class="price-number-view">
          <span>$19</span>
          <span>/month</span>
        </div>
        <div class="price-ul">
          <div class="price-li" v-for="(item,index) in leftList" :key="index">
            <div class="before"></div>
            <span>{{item.label}}</span>
          </div>
        </div>
        <div class="line"></div>
        <button class="startNow">
          <img src="@@/assets/images/defaultPages/home/module6-Play.png" alt="">
          <span>开始免费试用</span>
        </button>
        <p class="bottom-p">7天免费试用 • 随时取消</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.module-6{
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
    margin-bottom:56px;
    padding:0 !important;
  }
  .switch-view{
    margin-bottom:40px;
  }
  .price-main{
    display: flex;
    justify-content: center;
    gap:32px;
    .price-main-box{
      width: 400px;
      padding:24px 32px;
      box-sizing: border-box;
      box-shadow: 0px 4px 8px var(--Shadow-1, #a7a0d33b);
      border-radius: 24px;
      border: 1px solid transparent;
      .top{
        width: 100%;
        padding: 8px 16px;
        border-radius: 16px;
        border: 1px solid var(--app-border-color);
        box-sizing: border-box;
        background: var(--app-module6-top-bg-color);
        box-shadow: 0px 4px 8px #a7a0d33b;
        color: var(--app-module6-top-text-color);
        font-family: "Alibaba PuHuiTi 2.0";
        font-weight: 700;
        font-size: 16px;
      }
      .line{
        width:100%;
        height: 1px;
        background: var(--app-border-color);
        margin:24px 0;
      }
      .price-number-view{
        display: flex;
        align-items: flex-end;
        margin-bottom:24px;
        span{
          &:first-child{
            color: var(--app-module6-number-left-color);
            font-family: "Alibaba PuHuiTi 2.0 900";
            font-size: 36px;

          }
          &:last-child{
            color: var(--app-module6-content-text-color);
            font-weight: 700;
            font-size: 16px;
            padding-left:5px;
            padding-bottom:5px;
          }
        }
      }

      .price-ul{
        display: flex;
        flex-direction: column;
        gap:4px;
        .price-li{
          display: flex;
          align-items: center;
          gap:9px;
          .before{
            width: 6px;
            height: 6px;
            border-radius: 100%;
            border: 1px solid #8167ff;
            box-sizing: border-box;
          }
          span{
            color: var(--app-module6-content-text-color);
            font-family: "Alibaba PuHuiTi 2.0";
            font-weight: 400;
            font-size: 16px;
          }
        }
      }
      .startNow{
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
        margin-bottom:24px;
        margin-top:32px;
        &:hover{
          box-shadow: 0px 2px 8px var(--app-purpleButton-hover-boxshow-color);
        }
        img{
          width: 20px;
          height: 20px;
        }
        span{
          color: var(--white-1, #e2e2ff);
          font-family: "Alibaba PuHuiTi 2.0";
          font-weight: 700;
          font-size: 16px;
        }
        &:hover{
          box-shadow: 0px 2px 8px #4532c9b2;
        }
      }
      .bottom-p{
        color: var(--app-module6-content-text-color);
        font-family: "Alibaba PuHuiTi 2.0";
        font-weight: 400;
        font-size: 12px;
      }

    }
    .price-main-box-active{
      border: 1px solid var(--app-module6-border-color);
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
  .switch-view{
    margin-bottom:16px !important;
  }
  .price-main{
    gap:16px !important;
  }
}
@media (max-width: 750px)  {
  .price-main{
    width: 100% !important;
    flex-direction: column !important;
    .price-main-box{
      width:100% !important;
    }
  }
}
</style>