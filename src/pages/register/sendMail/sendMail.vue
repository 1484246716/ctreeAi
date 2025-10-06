

<template>
  <div class="sendMail-main app-right-body app-right-body-padding">

    <el-image  class="topimg app-body-bottom"  :src="sendemail()"></el-image>

    <p class="p1 app-body-bottom">确认你的邮件地址</p>
    <p class="p2 app-body-bottom">感谢您的注册！在开始之前，您可以通过单击我们刚刚通过电子邮件发送给您的链接来验证您的电子邮件地址吗？如果您没有收到电子邮件，我们很乐意向您发送另一封电子邮件。</p>
    <el-button class="again-btn app-body-bottom">重新发送验证邮件</el-button>
    <el-button class="setting-btn">用户设置</el-button>

  </div>
</template>
<script setup lang="ts">
const sendemail = () =>{
  return new URL(`/src/assets/image1/sendemail.png`,import.meta.url).href
}

</script>
<style scoped lang="scss">
.sendMail-main{
  display: flex;
  flex-direction: column;
  align-items: center;
  .topimg{
    width:240px;
    height:240px;
  }
  .p1{
    font-weight: bold;
    font-size: 16px;
    color: #4F4F4F;
    line-height: 19px;
  }
  .p2{
    font-weight: 400;
    font-size: 16px;
    color: #4F4F4F;
    line-height: 19px;
    max-width: 803px;
    text-align: center;
  }
  :deep(.again-btn){
    width: 215px;
    height: 52px;
    background: #0F7FEF;
    box-shadow: 0px 6px 11px 0px rgba(15,127,239,0.37);
    border-radius: 63px 63px 63px 63px;
    border: 1px solid #0F7FEF;
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 19px;
    padding:0;
  }
  :deep(.setting-btn){
    width: 215px;
    height: 52px;
    box-shadow: 0px 6px 11px 0px rgba(15,127,239,0.37);
    border-radius: 63px 63px 63px 63px;
    border: 1px solid #0F7FEF;
    font-weight: bold;
    font-size: 16px;
    color: #0F7FEF;
    line-height: 19px;
    padding:0;
    margin-left: 0;
  }

}
</style>