

<template>
  <div class="forgotPassword-main app-right-body app-right-body-padding">
    <img class="lockimg" src="@/assets/image1/default/register/3.png" alt="" />
    <p class="p1">注册成功</p>
    <p class="p2">
      点击<span @click="toLogin">登录</span>
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import {useUserStore} from "@/store/modules/user"
const ruleFormRef = ref<FormInstance>()
const router = useRouter()
const UserStore = useUserStore()
const loading = ref(false)
interface RuleForm {
  email: string
}

const toLogin=()=>{
  router.push({
    path:'/login'
  })
}


</script>
<style scoped lang="scss">
.forgotPassword-main{

  display: flex;
  flex-direction: column;
  align-items: center;
  .lockimg{
    width:140px;
    height:130px;
    margin-bottom:32px;
  }
  .p1{
    font-weight: bold;
    font-size: 16px;
    color: #0F7FEF;
    line-height: 19px;
    margin-bottom:16px;
  }
  .p2{
    font-weight: 400;
    font-size: 16px;
    color: #53A7FC;
    line-height: 19px;

    span{
      text-decoration: underline;
      cursor: pointer;
    }

  }
}
:deep(.setting-form-item){
  margin-bottom:32px !important;
  .el-form-item__content{
    margin-left:0 !important;
  }
  .el-input__wrapper{
    background: #F0F8FF;
    border-radius: 56px 56px 56px 56px;
    padding:11px 16px;
    input{
      font-weight: 400;
      font-size: 14px;
      color: #53A7FC;
      line-height:0;
      height: auto;
    }
  }
  .el-form-item__label-wrap{
    margin-left:9px !important;
    .el-form-item__label{
      font-weight: bold;
      font-size: 16px !important;
      color: #4F4F4F;
    }
  }

}
:deep(.subBtn){
  margin:0 auto;
  margin-bottom:32px;
  width: 224px;
  height: 52px;

  background: #0F7FEF;
  box-shadow: 0px 6px 11px 0px rgba(15,127,239,0.37);
  border-radius: 63px 63px 63px 63px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 19px;
}
.bottom-tips{
  margin:0 auto;
  width: fit-content;
  background: #EB5757;
  border-radius: 34px 34px 34px 34px;
  padding:4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    font-weight: 400;
    font-size: 12px;
    color: #FFFFFF;
    line-height: 14px;
  }
}
.green-bg{
  background: #27AE60;
}
</style>