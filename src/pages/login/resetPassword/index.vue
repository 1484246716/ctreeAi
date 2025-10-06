
<template>
  <div class="register-main-view">
    <div class="register-main">
      <div class="top-view">
        <img src="@@/assets/images/layouts/logo.png" alt="">
        <span class="register-text">注册</span>
        <p class="bottom">
          <span>或</span>
          <span @click="loginClick">登录已有账号</span>
        </p>
      </div>
      <el-form :model="form" label-width="auto" ref="ruleFormRef" :rules="rules" >
        <el-form-item label="电子邮件" prop="email" class="app-portrait-form-item  app-form-item-after emailleftWidth  ">
          <el-input  v-model="form.email" clearable class="app-form-input"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord" class="app-portrait-form-item  app-form-item-after leftWidth  ">
          <el-input type="password" show-password clearable v-model="form.passWord" class="app-form-input"></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="rePassWord" class="app-portrait-form-item  app-form-item-after emailleftWidth   app-form-item-Noafter">
          <el-input type="password"  show-password clearable v-model="form.rePassWord" class="app-form-input"> </el-input>
        </el-form-item>
        <div class="rember">
          <el-checkbox label="记住账号"
                       v-model="form.check" name="type"
                       @change="handleCheckedCitiesChange"></el-checkbox>
        </div>
        <el-button type="primary" :loading="loading" round class="submitButton"  @click="submitForm(ruleFormRef)">注册</el-button>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive,computed,ref,watch,onMounted } from 'vue'
import {validateEmail,validateRepeatpassword} from "../../register/registerValidate.ts";
import {ElNotification, FormInstance,ElMessage} from "element-plus";
import {getTimeState} from "@/utils";
import {useRoute, useRouter} from 'vue-router'
import { request } from "@/http/axios"
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
    border: 0.5px solid var(--Stroke-default, #c6c2da);
    box-sizing: border-box;
    background: var(--Bg-3, #dde4f0);
    box-shadow: 0px 4px 8px var(--Shadow-1, #a7a0d33b);
    .top-view{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom:20px;
      border-bottom:0.5px solid #c6c2da;
      img{
        width:144px;
        height:30px;
        margin-bottom:16px;
      }
      .register-text{
        color: var(--Text-1, #433d63);
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
    .submitButton{
      width: 352px;
      height: 36px;
      display: flex;
      place-content: center;
      place-items: center;
      gap: 8px;
      flex-shrink: 0;
      padding: 12px 24px;
      border-radius: 12px;
      background: var(--Main-1, #8167ff);
      box-shadow: 0px 2px 8px #4532c966;
    }
  }


}

</style>