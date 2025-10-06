

<template>
  <el-dialog v-model="newWayShow"    style="border-radius:24px;"
             :style="{'width':windowSize=='mobile'?'90%':'560px'}"
             :before-close="beforeClose"
  >
    <div class="newWay-main">
      <svg v-if="isMobile" style="margin-bottom:16px;" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="24" fill="#F23A3A" fill-opacity="0.2"/>
        <path d="M31.9912 17.5039C32.4387 17.5441 32.8095 17.8809 32.8867 18.3311L33.3438 21H37C37.5523 21 38 21.4477 38 22C38 22.5523 37.5523 23 37 23H35.4375L34.498 37.5645C34.4641 38.0906 34.0273 38.5 33.5 38.5H22.5C21.9728 38.4999 21.5359 38.0906 21.502 37.5645L20.5625 23H19C18.4477 23 18 22.5523 18 22C18 21.4477 18.4477 21 19 21H22.6582L23.1152 18.3311L23.1348 18.2422C23.2502 17.8084 23.6442 17.5002 24.1006 17.5H31.9014L31.9912 17.5039ZM23.4375 36.5H32.5625L33.4336 23H22.5664L23.4375 36.5ZM30.5 32.5C31.0523 32.5 31.5 32.9477 31.5 33.5C31.5 34.0523 31.0523 34.5 30.5 34.5H25.5C24.9477 34.5 24.5 34.0523 24.5 33.5C24.5 32.9477 24.9477 32.5 25.5 32.5H30.5ZM24.6865 21H31.3154L31.0576 19.5H24.9443L24.6865 21Z" fill="#E85D3A"/>
      </svg>
      <svg v-else width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="24" fill="#F23A3A" fill-opacity="0.2"/>
        <path d="M31.9912 17.5039C32.4387 17.5441 32.8095 17.8809 32.8867 18.3311L33.3438 21H37C37.5523 21 38 21.4477 38 22C38 22.5523 37.5523 23 37 23H35.4375L34.498 37.5645C34.4641 38.0906 34.0273 38.5 33.5 38.5H22.5C21.9728 38.4999 21.5359 38.0906 21.502 37.5645L20.5625 23H19C18.4477 23 18 22.5523 18 22C18 21.4477 18.4477 21 19 21H22.6582L23.1152 18.3311L23.1348 18.2422C23.2502 17.8084 23.6442 17.5002 24.1006 17.5H31.9014L31.9912 17.5039ZM23.4375 36.5H32.5625L33.4336 23H22.5664L23.4375 36.5ZM30.5 32.5C31.0523 32.5 31.5 32.9477 31.5 33.5C31.5 34.0523 31.0523 34.5 30.5 34.5H25.5C24.9477 34.5 24.5 34.0523 24.5 33.5C24.5 32.9477 24.9477 32.5 25.5 32.5H30.5ZM24.6865 21H31.3154L31.0576 19.5H24.9443L24.6865 21Z" fill="#D95F5B"/>
      </svg>
      <p class="p1">删除个人访问令牌</p>
      <p class="p2">你确定要这样做吗？</p>
      <div class="btn-view">
        <el-button class=" btn btn-active">确认</el-button>
        <el-button class=" btn" @click="beforeClose">取消</el-button>
      </div>
    </div>
  </el-dialog>
</template>
<script setup lang="ts">
import {reactive, ref, watch} from 'vue'
import {ElMessage, FormInstance} from "element-plus";
import useWindowResize from "@/hooks/useWindowResize";
import VisitorChart from './components/VisitorChart.vue';
import Table from "./components/Table.vue"

import {useTheme} from "@@/composables/useTheme.ts";
import {useDevice} from "@@/composables/useDevice.ts";
const { activeThemeName } = useTheme()
const { isMobile } = useDevice()
const { windowSize }  = useWindowResize();
const ruleFormRef = ref<FormInstance>()
const rules = reactive({
  bankName: [ { required: true, message: "请选择收款方式", trigger: "blur" }, ],
  bankAccount: [ { required: true, message: "收款地址", trigger: "blur" }, ],
})
const form = ref({
  bankName: '',//方法
  bankAccount: '',//收款账号
  realName: '',//收款人
  bankInfo: '',//备注
})
const bankListOptions=ref([])//绑定银行选项
const newWayShow=ref(false);
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
    required: true // 是否必传
  }
})

const emit = defineEmits(["refreshWithdrawallistFn"]);
watch(
    () => props.show,
    (newVal, oldVal) => {
      if(newVal){
        newWayShow.value=true;
        init()

      }
    }
)
const init=()=>{
  // getBankList()
}
// do not use same name with ref

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      bindBank()
    } else {
      console.log('error submit!')
      return false
    }
  })
}
const bindBank=()=>{
  let data={
    sessionKey:UserStore.token,
    bankName:form.value.bankName,
    bankAccount:form.value.bankAccount,
    realName:form.value.realName,
    bankInfo: form.value.bankInfo
  };
  console.log(data,'请求参数')
  request({
    url: 'User/BindBank',
    method: 'post',
    data: data
  }).then((res) => {
    console.log(res, '===res===')
    ElMessage({
      message:res.message,
      type:res.code?'success':'error',
      duration: 3000
    })
    emit("refreshWithdrawallistFn");//刷新列表

  }).finally(()=>{
    newWayShow.value=false;//关闭弹窗
  })
}
/**
 * 关闭弹窗
 * */
const beforeClose=()=>{
  newWayShow.value=false;//关闭弹窗
  ruleFormRef.value.resetFields()

}
</script>
<style scoped lang="scss">
.newWay-main{
  display: flex;
  flex-direction: column;
  align-items: center;

  .p1{
    color: var(--app-h2-text-Light-color);
    font-family: "Alibaba PuHuiTi 2.0";
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-bottom:8px;
  }
  .p2{
    color: var(--app-text-color);
    font-family: "Alibaba PuHuiTi 2.0";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom:24px;
  }
  .btn-view{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:16px;
    width:100%;
    :deep(.btn){
      width:100%;
      max-width: 248.5px;
      box-sizing: border-box;
      border:0.5px solid var(--app-border-color);
      background: var(--deleteDialog-btn-bg-color) !important;
      padding:0 !important;
      border-radius: 12px !important;
      height: fit-content !important;
      span{
        display: flex;
        place-content: center;
        place-items: center;
        gap: 10px;
        flex-shrink: 0;
        padding: 8px 16px;
        color: var(--deleteDialog-btn-text-color);
        font-family: "Alibaba PuHuiTi 2.0";
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    }
    :deep(.btn-active){
      border:0.5px solid var(--app-purpleButton-bg-color);
      background: var(--app-purpleButton-bg-color) !important;
      box-shadow: 0px 2px 8px var(--app-purpleButton-bg-boxshow-color);
      span{
        color: var(--deleteDialog-btn-text-active-color);
      }
    }
  }
}


</style>