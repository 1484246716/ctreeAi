
<script setup lang="ts">
import { reactive,computed,ref,watch,onMounted } from 'vue'
import {validateEmail} from "./loginValidate";
import {ElNotification, FormInstance,ElMessage} from "element-plus";
import { useUserStore } from "@/pinia/stores/user"
import {getTimeState} from "@/utils";
import {useRoute, useRouter} from 'vue-router'
import { request } from "@/http/axios"

import {useTheme} from "@@/composables/useTheme.ts";
import {useDevice} from "@@/composables/useDevice.ts";
const { activeThemeName } = useTheme()
const { isMobile } = useDevice()

const router =useRouter();
const route=useRoute();
const ruleFormRef = ref<FormInstance>()
const userStore = useUserStore()
const rules = reactive({
  userName: [ { required: true, message: "请输入名称", trigger: "blur" }, ],
  email: [
    {
      required: true,
      trigger: 'blur',
      validator:validateEmail,
    },
  ],
  passWord: [{ required: true, message: "请输入密码", trigger: "blur" },],

})
// do not use same name with ref
const form = ref({
  email:'123456@163.com',
  passWord:'123456',
  isUpdate:true,
  check:false
})
const regType=ref(1);//登录类型1广告主 2频道主
const switchButtonData=ref(false)

const loading=ref(false);
onMounted(()=>{
  getRoleTypeOptions()
})
/**
 * 注册角色
 * */
const getRoleTypeOptions=()=>{
  const paramData = route.query.roleTypeOptions;
  if(paramData){
    let roleTypeOptions=JSON.parse(
        decodeURIComponent(typeof paramData === 'string' ? paramData : '')//对象解密
    )
    changeLoginType(roleTypeOptions)
  }

}
const changeLoginType=(type)=>{
  regType.value=type;
  ruleFormRef.value.resetFields()
  if(type===1){
    switchButtonData.value=false
  }else{
    switchButtonData.value=true

  }
}

const switchButtonDataChange=(val)=>{
  if(val){
    changeLoginType(2)
  }else{
    changeLoginType(1)
  }
}
const registerClick=()=>{
  router.push("/register")
}
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {

      userStore.setToken('123456')
      router.push("/admin")
      return;
      if(!form.value.isUpdate){
        ElMessage({
          message: '请接受有关更新和销售的电子邮件',
          grouping: true,
          type: 'error',
        })
      }

      let params={
        userName: form.value.userName,
        email: form.value.email,
        passWord: form.value.passWord,
        rePassWord: form.value.rePassWord,
        regType: regType.value,
        isUpdate:form.value.isUpdate,

      }
      register(params)
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const register=(data)=>{
  loading.value=true
  request({ url: '/User/Register',
    method: 'post',
    data:data
  }).then((res)=>{
    loading.value=false
    ElMessage({
      message: res.message,
      grouping: true,
      type: res.code==1?'success':'error',
    })
    if(res.code==1){
      // console.log(res,'====res=====')
      router.push({
        path:'/registerSuccess'
      })
    }
  }).catch((err)=>{
    loading.value=false
    ElMessage({
      message:err,
      grouping: true,
      type:'error',
    })
  })
}
const openLink=(name,path)=>{
  const href = router.resolve({ //使用resolve
    name:name,    //这里是跳转页面的name
    path:path,
  })
  window.open(href.href, '_blank')
}
/**
 * 登录
 * */
const loginClick=()=>{
  router.push({
    path:'/login'
  })
}
const handleCheckedCitiesChange=(val)=>{
  // if(val){
  //   localStorage.setItem("lNm",ruleForm.name)
  //   localStorage.setItem("lPs",ruleForm.pass)
  //
  // }else{
  //   localStorage.setItem("lNm","")
  //   localStorage.setItem("lPs","")
  // }
}
const openForgetPassword=()=>{
  router.push({
    path:'/forgotPassword'
  })
}
</script>

<template>
  <div class="register-main-view">
    <div class="register-main">
      <div class="top-view">
        <img v-if="activeThemeName=='normal'" src="@@/assets/images/layouts/logo.png" alt="">
        <img v-else src="@@/assets/images/layouts/logo2.png" alt="">
        <span class="register-text">登录</span>
        <p class="bottom">
          <span>或</span>
          <span @click="registerClick">注册新账号</span>
        </p>
      </div>
      <el-form :model="form" label-width="auto" ref="ruleFormRef" :rules="rules" >
        <el-form-item label="邮箱地址" prop="email" class="app-portrait-form-item  app-form-item-after emailleftWidth  ">
          <el-input  v-model="form.email" clearable class="app-form-input"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord" class="app-portrait-form-item  app-form-item-after leftWidth  ">
          <el-input type="password" show-password clearable v-model="form.passWord" class="app-form-input"></el-input>
          <span class="app-form-item-right-text  forgetPassword" @click="openForgetPassword">忘记密码</span>
        </el-form-item>
        <div class="rember">
          <el-checkbox label="记住账号"
                       v-model="form.check" name="type"
                       @change="handleCheckedCitiesChange"></el-checkbox>
        </div>
        <el-button type="primary" :loading="loading" round class="submitButton"  @click="submitForm(ruleFormRef)">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.register-main-view{
  width:100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .register-main{
    display: flex;
    max-width: 400px;
    width:90%;
    height: fit-content;
    flex-direction: column;
    gap: 16px;
    padding: 16px 24px 24px 24px;
    border-radius: 24px;
    border: 0.5px solid var(--app-border-color);
    box-sizing: border-box;
    background: var(--app-login-bg-color);
    //box-shadow: 0px 4px 8px var(--Shadow-1, #a7a0d33b);
    .top-view{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom:20px;
      border-bottom:0.5px solid var(--app-border-color);
      img{
        width:144px;
        height:30px;
        margin-bottom:16px;
      }
      .register-text{
        color: var(--app-h2-text-Light-color);
        font-family: "Alibaba PuHuiTi 2.0";
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        margin-bottom:6px;
      }
      .bottom{
        display: flex;
        align-items: center;
        span{
          color: var(--Text-1, #433d63);
          font-family: "Alibaba PuHuiTi 2.0";
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          &:nth-child(2){
            color: var(--Main-1, #8167ff);
            font-weight: 700;
            text-decoration-line: underline;
            cursor: pointer;
          }
        }
      }
    }
    :deep(.leftWidth){
      .el-form-item__error{
        left:38px !important;
      }
    }
    :deep(.emailleftWidth){
      .el-form-item__error{
        left:53px !important;
      }
    }
    :deep(.rember){
      margin-bottom:16px;
      .el-checkbox__inner{
        color: #8167ff !important;
        border-radius: 100% !important;
      }
    }
    .forgetPassword{
      cursor: pointer;
      &:hover{
        color: var(--Main-1, #8167ff);
        text-decoration-line: underline;
      }
    }
    .submitButton{
      width:100%;
      height: 36px;
      display: flex;
      place-content: center;
      place-items: center;
      gap: 8px;
      flex-shrink: 0;
      padding: 12px 24px;
      border-radius: 12px;
      background: var(--app-purpleButton-bg-color) !important;
      border-color: var(--app-purpleButton-bg-color) !important;
      box-shadow: 0px 2px 8px var(--app-purpleButton-bg-boxshow-color) !important;
    }
  }


}

</style>