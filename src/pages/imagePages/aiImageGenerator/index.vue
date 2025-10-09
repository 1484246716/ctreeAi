<script setup>
import ChatItem from './components/chat-item.vue'

import { ref } from 'vue'

const inputText = ref('')

</script>

<template>
  <div class="box">
    <!-- 显示区 -->
    <div class="output-box">
      <ChatItem :inputText="123123123" />

    </div>

    <!-- 输入区 -->
    <div class="input-box">
      <!-- 顶部工具 -->
      <div class="top">
        <div class="top_left">
          <div class="chat-item-top-tools">
                <el-icon><Plus /></el-icon>
             </div>
        </div>
        <div class="top_right">
         <div class="chat-item-top-tools">
                <el-icon><Plus /></el-icon>
             </div>
        </div>
      </div>
      <!-- 输入框 -->
      <div class="input-box-content">
        <el-input type="textarea" autosize v-model="inputText" placeholder="描述您想要创建的图片..." />

        <el-button type="primary">
          <template #icon>✔</template>
          生成</el-button>
      </div>
      <!-- 底部提示 -->
      <div class="bottom">例如：风景；人物；动物；商品；</div>

    </div>
  </div>

</template>

<style scoped lang="scss">
.box {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.output-box {
  max-width: 1334px;
  width: 100%;
  height: calc(100% - 164px);
}

.input-box {
  background-color: #fff;
  max-width: 1336px;
  width: 100%;
  height: 152px;
  padding-top: 12px;

  .top {
    display: flex;
    justify-content: space-between;
  }

  .input-box-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input-box-content {
    display: flex;
    justify-content: center;
    align-items: end;
    margin-top: 12px;
    gap: 12px;

    .el-textarea {
      //height: 46px;

    }

    ::v-deep .el-textarea__inner {
      //height: 46px !important;
      border-radius: var(--app-radius-size) !important;
      max-height: 156px;
      padding: 12px;
      font-size: 14px;
    }

    .el-button {
      height: 46px;
      border-radius: var(--app-radius-size);
    }
  }

  .bottom{
    font-size: 14px;
    color: rgba(0, 0, 0, 0.35);
    padding: 12px 0px;
  }


}
</style>