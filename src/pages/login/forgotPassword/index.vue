<script setup lang="ts">
import { reactive,computed,ref,watch,onMounted } from 'vue'
import {validateEmail,validateRepeatpassword} from "../../register/registerValidate.ts";
import {ElNotification, FormInstance,ElMessage} from "element-plus";
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
  rePassWord: [
    {
      required: true,
      trigger: 'blur',
      validator: (rule, value,callback) => validateRepeatpassword(form.value.passWord)(rule, value,callback),
    },
  ],

})
// do not use same name with ref
const form = ref({
  userName: '',
  email:'',
  passWord:'',
  rePassWord:'',
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
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
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
</script>

<template>
  <div class="register-main-view">
    <div class="register-main">
      <div class="top-view">
        <img v-if="activeThemeName=='normal'" src="@@/assets/images/layouts/logo.png" alt="">
        <img v-else src="@@/assets/images/layouts/logo2.png" alt="">
        <span class="register-text">忘记密码</span>
        <p class="bottom">
          <span @click="loginClick">返回登录</span>
        </p>
      </div>
      <el-form :model="form" label-width="auto" ref="ruleFormRef" :rules="rules" >
        <el-form-item label="电子邮件" prop="email" class="app-portrait-form-item  app-form-item-after emailleftWidth  ">
          <el-input  v-model="form.email" clearable class="app-form-input"></el-input>
        </el-form-item>
        <el-button type="primary" :loading="loading" round class="submitButton"  @click="submitForm(ruleFormRef)">注册</el-button>
      </el-form>
      <div class="sentSuccess">
        <p class="top">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9993 8.00033C13.9993 6.34331 13.3287 4.84402 12.2422 3.75749C11.1557 2.67097 9.65637 2.00033 7.99935 2.00033C6.34233 2.00033 4.84305 2.67097 3.75651 3.75749C2.66999 4.84402 1.99935 6.34331 1.99935 8.00033C1.99935 9.65735 2.66999 11.1566 3.75651 12.2432C4.84305 13.3297 6.34233 14.0003 7.99935 14.0003C9.65637 14.0003 11.1557 13.3297 12.2422 12.2432C13.3287 11.1566 13.9993 9.65734 13.9993 8.00033ZM10.8613 5.52897C11.1217 5.26862 11.5437 5.26862 11.804 5.52897C12.0644 5.78932 12.0644 6.21133 11.804 6.47168L7.80404 10.4717C7.54369 10.732 7.12168 10.732 6.86133 10.4717L4.86133 8.47168L4.81575 8.4209C4.60219 8.15905 4.61725 7.77305 4.86133 7.52897C5.10541 7.28489 5.49141 7.26983 5.75325 7.4834L5.80404 7.52897L7.33268 9.05762L10.8613 5.52897ZM15.3327 8.00033C15.3327 10.0252 14.5112 11.8595 13.1849 13.1859C11.8586 14.5122 10.0242 15.3337 7.99935 15.3337C5.9745 15.3337 4.14016 14.5122 2.8138 13.1859C1.48746 11.8595 0.666016 10.0252 0.666016 8.00033C0.666016 5.97548 1.48747 4.14113 2.8138 2.81478C4.14016 1.48844 5.9745 0.666992 7.99935 0.666992C10.0242 0.666992 11.8586 1.48844 13.1849 2.81478C14.5112 4.14113 15.3327 5.97548 15.3327 8.00033Z" fill="#18B451"/>
          </svg>
          <span>我们已将密码重置链接发送至您的邮箱。</span>
        </p>
        <p class="bottom">如果您的账户不存在，您将不会收到这封邮件。</p>
      </div>
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
    width: 400px;
    height: fit-content;
    flex-direction: column;
    gap: 16px;
    padding: 16px 24px 24px 24px;
    border-radius: 24px;
    border: 0.5px solid var(--app-border-color);
    box-sizing: border-box;
    background: var(--app-login-bg-color);
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
        color: var(--app-login-text-color);
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
          text-align: center;
          color: var(--app-h2-text-Dark-color);
          font-family: "Alibaba PuHuiTi 2.0";
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          text-decoration-line: underline;
          text-decoration-thickness: 8%;
          text-underline-offset: 16%;
          text-underline-position: from-font;
          text-decoration-skip-ink: auto;
          &:nth-child(2){
            color: var(--app-h2-text-Dark-color);
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

.sentSuccess{
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px;
  border-radius: 12px;
  border: 0.5px solid #bdbbc5;
  box-sizing: border-box;
  background: #d0d7e3;
  box-shadow: 0px 4px 8px #a7a0d33b;
  .top{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:4px;
    svg{
      width:16px;
      height:16px;
    }
    span{
      color: var(--Text-1, #433d63);
      font-family: "Alibaba PuHuiTi 2.0";
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
    }
  }
  .bottom{
    width:100%;
    text-align: center;
    color: var(--Text-2, #66637c);
    font-family: "Alibaba PuHuiTi 2.0";
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
}
}


</style>