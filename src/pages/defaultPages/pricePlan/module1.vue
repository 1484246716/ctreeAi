<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(true)

const List1=ref([
  {
    label:'最多3个项目',
    icon:1,
  },
  {
    label:'1GB存储空间',
    icon:1,
  },
  {
    label:'基础分析功能 ',
    icon:1,
  },
  {
    label:'社区支持',
    icon:1,
  }, {
    label:'不支持自定义域名',
    icon:2,
  },{
    label:'不支持自定义品牌',
    icon:2,
  },{
    label:'不支持终身更新',
    icon:2,
  },

])
const List2=ref([
  {
    label:'最多3个项目',
    icon:1,
  },
  {
    label:'1GB存储空间',
    icon:1,
  },
  {
    label:'基础分析功能 ',
    icon:1,
  },
  {
    label:'社区支持',
    icon:1,
  }, {
    label:'不支持自定义域名',
    icon:1,
  },{
    label:'不支持自定义品牌',
    icon:2,
  },{
    label:'不支持终身更新',
    icon:2,
  },

])
const List3=ref([
  {
    label:'最多3个项目',
    icon:1,
  },
  {
    label:'1GB存储空间',
    icon:1,
  },
  {
    label:'基础分析功能 ',
    icon:1,
  },
  {
    label:'社区支持',
    icon:1,
  }, {
    label:'不支持自定义域名',
    icon:1,
  },{
    label:'不支持自定义品牌',
    icon:1,
  },{
    label:'不支持终身更新',
    icon:1,
  },

])

</script>
<template>
  <div class="module-1">
    <h2>价格方案</h2>
    <p class="p1">挑选最适合您需求的订阅计划。</p>
    <div class="switch-view">
      <div class="app-switch">
      <el-switch
          class="app-switch"
          v-model="value"
          active-text="年付"
          inactive-text="月付"
      />
      </div>
    </div>
    <div class="price-main">
      <div class="price-main-box">
        <div class="top-view">
          <div class="top">单个</div>
          <div class="price-number-view">
            <span>$19</span>
            <span>/month</span>
          </div>
          <p class="p2">适用于个人使用的基本功能</p>

        </div>
        <div class="line"></div>
        <div class="price-ul">
          <div class="price-li" v-for="(item,index) in List1" :key="index">
            <svg v-if="item.icon==1" class="before" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8C14 6.34298 13.3294 4.8437 12.2428 3.75716C11.1563 2.67065 9.65702 2 8 2C6.34298 2 4.8437 2.67064 3.75716 3.75716C2.67064 4.8437 2 6.34298 2 8C2 9.65702 2.67065 11.1563 3.75716 12.2428C4.8437 13.3294 6.34299 14 8 14C9.65702 14 11.1563 13.3294 12.2428 12.2428C13.3294 11.1563 14 9.65702 14 8ZM10.862 5.52865C11.1223 5.2683 11.5443 5.2683 11.8047 5.52865C12.065 5.78899 12.065 6.211 11.8047 6.47135L7.80469 10.4714C7.54434 10.7317 7.12233 10.7317 6.86198 10.4714L4.86198 8.47135L4.81641 8.42057C4.60284 8.15872 4.6179 7.77272 4.86198 7.52865C5.10606 7.28457 5.49206 7.26951 5.75391 7.48307L5.80469 7.52865L7.33333 9.05729L10.862 5.52865ZM15.3333 8C15.3333 10.0248 14.5119 11.8592 13.1855 13.1855C11.8592 14.5119 10.0248 15.3333 8 15.3333C5.97515 15.3333 4.14081 14.5119 2.81445 13.1855C1.48812 11.8592 0.666667 10.0248 0.666667 8C0.666667 5.97515 1.48812 4.14081 2.81445 2.81445C4.14081 1.48812 5.97515 0.666667 8 0.666667C10.0248 0.666667 11.8592 1.48812 13.1855 2.81445C14.5119 4.14081 15.3333 5.97515 15.3333 8Z" fill="#2FAD98"/>
            </svg>
            <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0.666992C12.0501 0.666992 15.333 3.94991 15.333 8C15.333 12.0501 12.0501 15.333 8 15.333C3.94991 15.333 0.666992 12.0501 0.666992 8C0.666992 3.94991 3.94991 0.666992 8 0.666992ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM9.41504 5.64355C9.6754 5.38333 10.0971 5.38325 10.3574 5.64355C10.6173 5.90389 10.6175 6.32571 10.3574 6.58594L8.94336 8L10.3574 9.41406C10.6175 9.67443 10.6177 10.0972 10.3574 10.3574C10.0972 10.6175 9.67541 10.6172 9.41504 10.3574L8 8.94238L6.58594 10.3574C6.32571 10.6175 5.90389 10.6173 5.64355 10.3574C5.38325 10.0971 5.38333 9.6754 5.64355 9.41504L7.05762 8L5.64355 6.58594C5.38321 6.32559 5.38321 5.90293 5.64355 5.64258C5.90387 5.3827 6.32571 5.38256 6.58594 5.64258L8.00098 7.05762L9.41504 5.64355Z" fill="#E85D3A"/>
            </svg>
            <span>{{item.label}}</span>
          </div>
        </div>
        <div class="line"></div>
        <div class="bottom-view">
          <button class="startNow">
            <img src="@@/assets/images/defaultPages/home/module6-Play.png" alt="">
            <span>开始免费试用</span>
          </button>
        </div>
      </div>
      <div class="price-main-box">
        <div class="top-view">
          <div class="top">单个 <span class="tips">热门</span></div>
          <div class="price-number-view">
            <span>$19</span>
            <span>/month</span>
          </div>
          <p class="p2">适用于个人使用的基本功能</p>

        </div>
        <div class="line"></div>
        <div class="price-ul">
          <div class="price-li" v-for="(item,index) in List2" :key="index">
            <svg v-if="item.icon==1" class="before" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8C14 6.34298 13.3294 4.8437 12.2428 3.75716C11.1563 2.67065 9.65702 2 8 2C6.34298 2 4.8437 2.67064 3.75716 3.75716C2.67064 4.8437 2 6.34298 2 8C2 9.65702 2.67065 11.1563 3.75716 12.2428C4.8437 13.3294 6.34299 14 8 14C9.65702 14 11.1563 13.3294 12.2428 12.2428C13.3294 11.1563 14 9.65702 14 8ZM10.862 5.52865C11.1223 5.2683 11.5443 5.2683 11.8047 5.52865C12.065 5.78899 12.065 6.211 11.8047 6.47135L7.80469 10.4714C7.54434 10.7317 7.12233 10.7317 6.86198 10.4714L4.86198 8.47135L4.81641 8.42057C4.60284 8.15872 4.6179 7.77272 4.86198 7.52865C5.10606 7.28457 5.49206 7.26951 5.75391 7.48307L5.80469 7.52865L7.33333 9.05729L10.862 5.52865ZM15.3333 8C15.3333 10.0248 14.5119 11.8592 13.1855 13.1855C11.8592 14.5119 10.0248 15.3333 8 15.3333C5.97515 15.3333 4.14081 14.5119 2.81445 13.1855C1.48812 11.8592 0.666667 10.0248 0.666667 8C0.666667 5.97515 1.48812 4.14081 2.81445 2.81445C4.14081 1.48812 5.97515 0.666667 8 0.666667C10.0248 0.666667 11.8592 1.48812 13.1855 2.81445C14.5119 4.14081 15.3333 5.97515 15.3333 8Z" fill="#2FAD98"/>
            </svg>
            <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0.666992C12.0501 0.666992 15.333 3.94991 15.333 8C15.333 12.0501 12.0501 15.333 8 15.333C3.94991 15.333 0.666992 12.0501 0.666992 8C0.666992 3.94991 3.94991 0.666992 8 0.666992ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM9.41504 5.64355C9.6754 5.38333 10.0971 5.38325 10.3574 5.64355C10.6173 5.90389 10.6175 6.32571 10.3574 6.58594L8.94336 8L10.3574 9.41406C10.6175 9.67443 10.6177 10.0972 10.3574 10.3574C10.0972 10.6175 9.67541 10.6172 9.41504 10.3574L8 8.94238L6.58594 10.3574C6.32571 10.6175 5.90389 10.6173 5.64355 10.3574C5.38325 10.0971 5.38333 9.6754 5.64355 9.41504L7.05762 8L5.64355 6.58594C5.38321 6.32559 5.38321 5.90293 5.64355 5.64258C5.90387 5.3827 6.32571 5.38256 6.58594 5.64258L8.00098 7.05762L9.41504 5.64355Z" fill="#E85D3A"/>
            </svg>
            <span>{{item.label}}</span>
          </div>
        </div>
        <div class="line"></div>
        <div class="bottom-view">
          <button class="startNow">
            <img src="@@/assets/images/defaultPages/home/module6-Play.png" alt="">
            <span>开始免费试用</span>
          </button>
        </div>
      </div>
      <div class="price-main-box">
        <div class="top-view">
          <div class="top">终身版</div>
          <div class="price-number-view">
            <span>$199</span>
            <span>/month</span>
          </div>
          <p class="p2">专业人士的高级功能</p>

        </div>
        <div class="line"></div>
        <div class="price-ul">
          <div class="price-li" v-for="(item,index) in List3" :key="index">
            <svg v-if="item.icon==1" class="before" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8C14 6.34298 13.3294 4.8437 12.2428 3.75716C11.1563 2.67065 9.65702 2 8 2C6.34298 2 4.8437 2.67064 3.75716 3.75716C2.67064 4.8437 2 6.34298 2 8C2 9.65702 2.67065 11.1563 3.75716 12.2428C4.8437 13.3294 6.34299 14 8 14C9.65702 14 11.1563 13.3294 12.2428 12.2428C13.3294 11.1563 14 9.65702 14 8ZM10.862 5.52865C11.1223 5.2683 11.5443 5.2683 11.8047 5.52865C12.065 5.78899 12.065 6.211 11.8047 6.47135L7.80469 10.4714C7.54434 10.7317 7.12233 10.7317 6.86198 10.4714L4.86198 8.47135L4.81641 8.42057C4.60284 8.15872 4.6179 7.77272 4.86198 7.52865C5.10606 7.28457 5.49206 7.26951 5.75391 7.48307L5.80469 7.52865L7.33333 9.05729L10.862 5.52865ZM15.3333 8C15.3333 10.0248 14.5119 11.8592 13.1855 13.1855C11.8592 14.5119 10.0248 15.3333 8 15.3333C5.97515 15.3333 4.14081 14.5119 2.81445 13.1855C1.48812 11.8592 0.666667 10.0248 0.666667 8C0.666667 5.97515 1.48812 4.14081 2.81445 2.81445C4.14081 1.48812 5.97515 0.666667 8 0.666667C10.0248 0.666667 11.8592 1.48812 13.1855 2.81445C14.5119 4.14081 15.3333 5.97515 15.3333 8Z" fill="#2FAD98"/>
            </svg>
            <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0.666992C12.0501 0.666992 15.333 3.94991 15.333 8C15.333 12.0501 12.0501 15.333 8 15.333C3.94991 15.333 0.666992 12.0501 0.666992 8C0.666992 3.94991 3.94991 0.666992 8 0.666992ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM9.41504 5.64355C9.6754 5.38333 10.0971 5.38325 10.3574 5.64355C10.6173 5.90389 10.6175 6.32571 10.3574 6.58594L8.94336 8L10.3574 9.41406C10.6175 9.67443 10.6177 10.0972 10.3574 10.3574C10.0972 10.6175 9.67541 10.6172 9.41504 10.3574L8 8.94238L6.58594 10.3574C6.32571 10.6175 5.90389 10.6173 5.64355 10.3574C5.38325 10.0971 5.38333 9.6754 5.64355 9.41504L7.05762 8L5.64355 6.58594C5.38321 6.32559 5.38321 5.90293 5.64355 5.64258C5.90387 5.3827 6.32571 5.38256 6.58594 5.64258L8.00098 7.05762L9.41504 5.64355Z" fill="#E85D3A"/>
            </svg>
            <span>{{item.label}}</span>
          </div>
        </div>
        <div class="line"></div>
        <div class="bottom-view">
          <button class="startNow">
            <img src="@@/assets/images/defaultPages/home/module6-Play.png" alt="">
            <span>开启终身会员</span>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.module-1{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h2{
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
    margin-bottom:56px;
    padding:0 !important;
  }
  .switch-view{
    margin-bottom:40px;
  }

  .price-main{
    width:100%;
    display: flex;
    justify-content: center;
    gap:32px;
    display: grid;
    grid-template-columns: repeat(3, 1fr) ;
    .price-main-box{
      width: 100%;
      max-width: 400px;
      padding:24px 0;
      border: 0.5px solid var(--app-border-color);
      border-radius: 24px;
      box-sizing: border-box;
      .top-view{
        padding:0 24px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap:16px;
        .top{
          width: 100%;
          padding: 8px 16px;
          border-radius: 16px;
          border: 1px solid var(--app-border-color);
          box-sizing: border-box;
          background: var(--app-module6-top-bg-color);

          color: var(--app-module6-top-text-color);
          font-family: "Alibaba PuHuiTi 2.0";
          font-weight: 700;
          font-size: 16px;
          display: flex;
          align-items: center;
          &:hover{
            box-shadow: 0px 4px 8px var(--Shadow-1, #a7a0d33b);
          }
          .tips{
            width: fit-content;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0px 8px;
            border-radius: 8px;
            background: var(--app-module6-number-left-color);
            color: var(--white-1, #e2e2ff);
            font-family: "Alibaba PuHuiTi 2.0";
            font-weight: 700;
            font-size: 14px;
            line-height: 20px;
            margin-left:4px;
          }
        }
        .p2{
          color: var(--app-h2-text-Light-color);
          font-family: "Alibaba PuHuiTi 2.0";
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          padding:0 !important;
        }
        .price-number-view{
          display: flex;
          align-items: flex-end;
          span{
            &:first-child{
              color: var(--app-module6-number-left-color);
              font-family: "Alibaba PuHuiTi 2.0 900";
              font-weight: 900;
              font-size: 36px;
            }
            &:last-child{
              color: var(--app-module6-content-text-color);
              font-size: 16px;
              padding-bottom:10px;
              padding-left:5px;
            }
          }
        }
      }
      .line{
        width:100%;
        height: 1px;
        background: var(--app-border-color);
        margin:16px 0;
      }
      .price-ul{
        display: flex;
        flex-direction: column;
        gap:8px;
        padding:16px 24px;
        box-sizing: border-box;
        .price-li{
          display: flex;
          align-items: center;
          gap:7px;
          .before{
            width: 16px;
            height: 16px;
          }
          span{
            color: var(--app-module6-content-text-color);
            font-family: "Alibaba PuHuiTi 2.0";
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
      .bottom-view{
        padding:0 24px;
        box-sizing: border-box;
        .startNow{
          width:100%;
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
        }
      }

      .bottom-p{
        color: var(--Text-2, #66637c);
        font-family: "Alibaba PuHuiTi 2.0";
        font-weight: 400;
        font-size: 12px;
      }

    }
  }

}
@media (max-width:1000px)  {
  .price-main{
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .p1{
    margin-bottom:16px !important;
  }
  .switch-view{
    margin-bottom:16px !important;
  }
}
@media (max-width:750px)  {
  .price-main{
    grid-template-columns: repeat(1, 1fr) !important;
  }
}
</style>