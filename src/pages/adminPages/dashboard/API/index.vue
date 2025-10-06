<script setup lang="ts">
import {ref} from "vue"
import customPagination from "./customPagination.vue"
import deleteDialog from "./deleteDialog.vue"
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
const newWayShow=ref(false);
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

const openNewWayDialo=()=>{
  newWayShow.value=true;
  nextTick(()=>{
    newWayShow.value=false;
  })
}
</script>

<template>
  <el-form  label-width="auto">
    <div class="directoryHomepage-main">
      <div class="app-form-top-title-view">
        <div class="app-form-top-title-view-top">
          <svg v-if="activeThemeName=='normal'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_760_42419)">
              <path d="M19.0558 1.89621L18.1094 0.949777C18.0736 0.914063 18.029 0.898438 17.9821 0.898438C17.9352 0.898438 17.8906 0.916295 17.8549 0.949777L16.1562 2.64844C15.4178 2.14811 14.546 1.88136 13.654 1.88281C12.5111 1.88281 11.3683 2.31808 10.4955 3.19085L8.22096 5.4654C8.18773 5.49896 8.16908 5.54429 8.16908 5.59152C8.16908 5.63875 8.18773 5.68407 8.22096 5.71763L14.2857 11.7824C14.3214 11.8181 14.366 11.8337 14.4129 11.8337C14.4576 11.8337 14.5044 11.8158 14.5402 11.7824L16.8147 9.50781C18.3527 7.96763 18.5335 5.58594 17.3571 3.84933L19.0558 2.15067C19.125 2.07924 19.125 1.9654 19.0558 1.89621V1.89621ZM15.7388 8.43415L14.4129 9.76004L10.2433 5.5904L11.5692 4.26451C12.125 3.70871 12.866 3.40067 13.654 3.40067C14.4419 3.40067 15.1808 3.70647 15.7388 4.26451C16.2946 4.82031 16.6027 5.56138 16.6027 6.34933C16.6027 7.13728 16.2946 7.87612 15.7388 8.43415V8.43415ZM11.4933 10.7779C11.4597 10.7447 11.4144 10.726 11.3672 10.726C11.3199 10.726 11.2746 10.7447 11.241 10.7779L9.75444 12.2645L7.73882 10.2489L9.22766 8.76004C9.29685 8.69085 9.29685 8.57701 9.22766 8.50781L8.41516 7.69531C8.38159 7.66208 8.33627 7.64344 8.28904 7.64344C8.24181 7.64344 8.19649 7.66208 8.16292 7.69531L6.67409 9.18415L5.71426 8.22433C5.6976 8.20765 5.67774 8.19451 5.65588 8.18569C5.63402 8.17687 5.6106 8.17255 5.58703 8.17299C5.54239 8.17299 5.49551 8.19085 5.4598 8.22433L3.18748 10.4989C1.64953 12.0391 1.46873 14.4208 2.64507 16.1574L0.946406 17.856C0.913174 17.8896 0.894531 17.9349 0.894531 17.9821C0.894531 18.0294 0.913174 18.0747 0.946406 18.1083L1.89283 19.0547C1.92855 19.0904 1.97319 19.106 2.02007 19.106C2.06694 19.106 2.11158 19.0882 2.1473 19.0547L3.84596 17.356C4.59819 17.8672 5.47319 18.1217 6.34819 18.1217C7.49105 18.1217 8.63391 17.6864 9.50667 16.8136L11.7812 14.5391C11.8504 14.4699 11.8504 14.356 11.7812 14.2868L10.8214 13.327L12.3102 11.8382C12.3794 11.769 12.3794 11.6551 12.3102 11.5859L11.4933 10.7779V10.7779ZM8.43078 15.7422C8.15759 16.0168 7.83268 16.2345 7.47483 16.3828C7.11699 16.5311 6.73331 16.6069 6.34596 16.606C5.55801 16.606 4.81917 16.3002 4.26114 15.7422C3.98654 15.469 3.76882 15.1441 3.62055 14.7862C3.47228 14.4284 3.3964 14.0447 3.3973 13.6574C3.3973 12.8694 3.7031 12.1306 4.26114 11.5725L5.58703 10.2467L9.75667 14.4163L8.43078 15.7422V15.7422Z" fill="#433D63"/>
            </g>
            <defs>
              <clipPath id="clip0_760_42419">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_673_20561)">
              <path d="M19.0558 1.89621L18.1094 0.949777C18.0736 0.914063 18.029 0.898438 17.9821 0.898438C17.9352 0.898438 17.8906 0.916295 17.8549 0.949777L16.1562 2.64844C15.4178 2.14811 14.546 1.88136 13.654 1.88281C12.5111 1.88281 11.3683 2.31808 10.4955 3.19085L8.22096 5.4654C8.18773 5.49896 8.16909 5.54429 8.16909 5.59152C8.16909 5.63875 8.18773 5.68407 8.22096 5.71763L14.2857 11.7824C14.3214 11.8181 14.366 11.8337 14.4129 11.8337C14.4576 11.8337 14.5044 11.8158 14.5402 11.7824L16.8147 9.50781C18.3527 7.96763 18.5335 5.58594 17.3571 3.84933L19.0558 2.15067C19.125 2.07924 19.125 1.9654 19.0558 1.89621ZM15.7388 8.43415L14.4129 9.76005L10.2433 5.5904L11.5692 4.26451C12.125 3.70871 12.866 3.40067 13.654 3.40067C14.4419 3.40067 15.1808 3.70647 15.7388 4.26451C16.2946 4.82031 16.6027 5.56138 16.6027 6.34933C16.6027 7.13728 16.2946 7.87612 15.7388 8.43415ZM11.4933 10.7779C11.4597 10.7447 11.4144 10.726 11.3672 10.726C11.3199 10.726 11.2746 10.7447 11.241 10.7779L9.75444 12.2645L7.73882 10.2489L9.22766 8.76004C9.29685 8.69085 9.29685 8.57701 9.22766 8.50781L8.41516 7.69531C8.38159 7.66208 8.33627 7.64344 8.28904 7.64344C8.24181 7.64344 8.19649 7.66208 8.16292 7.69531L6.67409 9.18415L5.71426 8.22433C5.6976 8.20765 5.67774 8.19451 5.65588 8.18569C5.63402 8.17687 5.6106 8.17255 5.58703 8.17299C5.54239 8.17299 5.49551 8.19085 5.4598 8.22433L3.18748 10.4989C1.64953 12.0391 1.46873 14.4208 2.64507 16.1574L0.946406 17.856C0.913174 17.8896 0.894531 17.9349 0.894531 17.9821C0.894531 18.0294 0.913174 18.0747 0.946406 18.1083L1.89284 19.0547C1.92855 19.0904 1.97319 19.106 2.02007 19.106C2.06694 19.106 2.11158 19.0882 2.1473 19.0547L3.84596 17.356C4.59819 17.8672 5.47319 18.1217 6.34819 18.1217C7.49105 18.1217 8.63391 17.6864 9.50667 16.8136L11.7812 14.5391C11.8504 14.4699 11.8504 14.356 11.7812 14.2868L10.8214 13.327L12.3102 11.8382C12.3794 11.769 12.3794 11.6551 12.3102 11.5859L11.4933 10.7779ZM8.43078 15.7422C8.15759 16.0168 7.83268 16.2345 7.47483 16.3828C7.11699 16.5311 6.73331 16.6069 6.34596 16.606C5.55801 16.606 4.81917 16.3002 4.26114 15.7422C3.98654 15.469 3.76882 15.1441 3.62055 14.7862C3.47228 14.4284 3.3964 14.0447 3.3973 13.6574C3.3973 12.8694 3.7031 12.1306 4.26114 11.5725L5.58703 10.2467L9.75667 14.4163L8.43078 15.7422Z" fill="#C0BCDF"/>
            </g>
            <defs>
              <clipPath id="clip0_673_20561">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span class="app-form-p">API</span>
        </div>
        <p class="app-form-p">管理您的账户信息。</p>
      </div>

      <div class="app-form-main-padding app-border-bottom">
        <el-form-item class="app-form-main-form-item">
          <div class="app-row-col">
            <div class="app-form-main-form-item-input-box">
              <p class="app-form-title-14-4">API</p>
              <el-input  clearable class="app-form-input" placeholder="请输入"></el-input>
              <p class="app-form-p">此密钥仅会显示一次，请妥善保存在安全的地方。</p>
            </div>
            <el-button class="app-form-submit-botton-nolineheight">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1445 1.07422C8.39674 1.07422 5.35879 4.11217 5.35879 7.85993C5.35879 9.42913 5.89228 10.8733 6.78513 12.0229L5.86772 12.9403L4.4771 11.5497C4.4431 11.5164 4.39743 11.4978 4.34987 11.4978C4.3023 11.4978 4.25663 11.5164 4.22263 11.5497L3.33424 12.4381C3.30098 12.4721 3.28235 12.5177 3.28235 12.5653C3.28235 12.6129 3.30098 12.6585 3.33424 12.6925L4.72487 14.0831L3.72263 15.0854L2.33201 13.6948C2.29801 13.6615 2.25234 13.6429 2.20478 13.6429C2.15721 13.6429 2.11154 13.6615 2.07754 13.6948L1.18915 14.5831C1.15589 14.6171 1.13726 14.6628 1.13726 14.7104C1.13726 14.7579 1.15589 14.8036 1.18915 14.8376L2.57978 16.2282L1.12219 17.6858C1.08895 17.7194 1.07031 17.7647 1.07031 17.8119C1.07031 17.8592 1.08895 17.9045 1.12219 17.9381L2.06638 18.8823C2.13558 18.9515 2.24942 18.9515 2.31862 18.8823L7.97933 13.2215C9.17095 14.1458 10.6365 14.6469 12.1445 14.6456C15.8923 14.6456 18.9302 11.6077 18.9302 7.85993C18.9302 4.11217 15.8923 1.07422 12.1445 1.07422ZM15.7427 11.4581C14.7829 12.4202 13.5039 12.9492 12.1445 12.9492C10.7851 12.9492 9.50612 12.4202 8.5463 11.4581C7.58424 10.4983 7.05522 9.21931 7.05522 7.85993C7.05522 6.50056 7.58424 5.22154 8.5463 4.26172C9.50612 3.29967 10.7851 2.77065 12.1445 2.77065C13.5039 2.77065 14.7829 3.29967 15.7427 4.26172C16.7048 5.22154 17.2338 6.50056 17.2338 7.85993C17.2338 9.21931 16.7048 10.4983 15.7427 11.4581Z" fill="#E2E2FF"/>
              </svg>
              <div class="text">生成API密钥</div>
            </el-button>
          </div>
        </el-form-item>

      </div>
      <div class="app-form-main-padding app-border-bottom">
        <div class="app-form-p-16">
          这是您生成的API密钥列表。您可以删除它们。"token"列已加密。
        </div>
      </div >

      <div class="CustomTable">
          <div class="table_header">
              <div class="title" style="width: 440px;">Token</div>
              <div class="title" style="width: 220px;">创建时间</div>
          </div>
          <div class="table-main">
            <div class="table-tr app-border-bottom" v-for="(item,index) in 10" :key="index" >
              <div class="table-td" >
                <span >101|KTC2iPtTjygiC0tebQQfljwHRUduXbDqNHiWXNiu243fb655</span>
              </div>
              <div class="table-td" style="width: 220px;">
                <span >Aug 8, 2025 11:18:23</span>

                <svg @click="openNewWayDialo" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.9912 1.50391C16.4387 1.54413 16.8095 1.8809 16.8867 2.33105L17.3438 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H19.4375L18.498 21.5645C18.4641 22.0906 18.0273 22.5 17.5 22.5H6.5C5.97278 22.4999 5.53593 22.0906 5.50195 21.5645L4.5625 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H6.6582L7.11523 2.33105L7.13477 2.24219C7.2502 1.80839 7.64425 1.50018 8.10059 1.5H15.9014L15.9912 1.50391ZM7.4375 20.5H16.5625L17.4336 7H6.56641L7.4375 20.5ZM14.5 16.5C15.0523 16.5 15.5 16.9477 15.5 17.5C15.5 18.0523 15.0523 18.5 14.5 18.5H9.5C8.94772 18.5 8.5 18.0523 8.5 17.5C8.5 16.9477 8.94772 16.5 9.5 16.5H14.5ZM8.68652 5H15.3154L15.0576 3.5H8.94434L8.68652 5Z" fill="#E85D3A"/>
                </svg>

              </div>
            </div>
          </div>

      </div>
      <div class="p-[16px_24px]">
        <customPagination/>
      </div>
    </div>

  </el-form>
  <deleteDialog :show="newWayShow" @refreshWithdrawallistFn="refreshWithdrawallistFn" />
</template>

<style scoped lang="scss">
.directoryHomepage-main{

}

.CustomTable{
  display: flex;
  flex-direction: column;

  .table_header{
    width: 100%;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px 24px;
    opacity: 0.9;
    border-bottom: 0.5px solid var(--app-border-color);
    border-right: 0.5px solid var(--app-border-color);
    background: var(--CustomTable-top-bg-color);

    .title{
      color: var(--CustomTable-header-color);
      font-family: "Alibaba PuHuiTi 2.0";
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }

  .table-main{
    display: flex;
    flex-direction: column;
    .table-tr{
      display: flex;
      align-items: center;
      padding: 16px 24px;
      box-sizing: border-box;
      .table-td{
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:nth-child(1){
          max-width: 440px;
          width: 100%;
          span{
            width: 100%;
            word-wrap:break-word;
            word-break:normal;
          }
        }
        &:nth-child(2){
          max-width: 220px;
          width: 100%;
        }
        span{
          color:var(--CustomTable-td-color);
          font-family: "Alibaba PuHuiTi 2.0";
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
        }

      }
    }
  }
}
@media (max-width: 1000px)  {
  .table_header{
    .title{
      &:nth-child(2){
        display: none ;
      }
    }
  }
  .table-tr{
    display: flex;
    flex-direction: column !important;
    align-items: flex-start !important;
    gap:16px;
    .table-td{
      flex-direction: column !important;
      align-items: flex-start !important;
      gap:16px;
      &:nth-child(1){

        width: 100%;
      }
    }
  }
 .app-row-col{
   display: flex;
   flex-direction: column;
   gap:16px;
   align-items: flex-start;
 }


}

</style>