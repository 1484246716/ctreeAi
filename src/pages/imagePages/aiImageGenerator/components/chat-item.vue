<script setup>

</script>

<template>
    <div class="chat-item">
        <!-- 文字和工具 -->
        <div class="chat-item-top">
            <div class="chat-item-top-text">
                你好，我想知道你是男是女
            </div>
             <div class="chat-item-top-tools">
                <el-icon><Plus /></el-icon>
             </div>


        </div>
        <!-- 图片 -->
        <div class="chat-item-images">
            <img src="https://guangxikejiguan1.oss-cn-guangzhou.aliyuncs.com/attach/2025/10/cced8202510091713176651.png"
                alt="">
            <img src="https://guangxikejiguan1.oss-cn-guangzhou.aliyuncs.com/attach/2025/10/31f4a202510091713144209.png"
                alt="">
                <img src="https://guangxikejiguan1.oss-cn-guangzhou.aliyuncs.com/attach/2025/10/cced8202510091713176651.png"
                alt="">
            <img src="https://guangxikejiguan1.oss-cn-guangzhou.aliyuncs.com/attach/2025/10/31f4a202510091713144209.png"
                alt="">
                
        </div>
        <!-- 底部提示 -->
        <div class="chat-item-bottom ">由 SDXL V1.0 提供支持</div>
    </div>
</template>

<style scoped lang="scss">
.chat-item {
    max-width: 1334px;
    width: 100%;
    background-color: #F7F7F7;
    padding: 16px;
    border-radius: var(--app-radius-size);
}

.chat-item-top{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #333;
}

.chat-item-images {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
     margin-top: 12px;

    img{
        width: calc(25% - 9px);
        background-color: #E4F2FE;
        border-radius: 12px;
    }
}

.chat-item-bottom {
    margin-top: 12px;
    font-size: 14px;
    color: rgba(10, 13, 51, 0.45);
}
</style>
