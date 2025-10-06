<template>
  <div class="main">
    <div class="pagination-view">
<!--      <div>每页行数</div>-->
      <el-pagination
          class="pagination-main"
          :default-page-size="defaultPageSize"
          :page-sizes="[10, 20, 30, 40]"
          layout="sizes, prev, pager, next"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange">
     </el-pagination>
<!--      <div>第1页，共7页</div>-->
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue'
import useWindowResize from "@/hooks/useWindowResize";
const { windowSize }  = useWindowResize();
const emit = defineEmits(["handleSizeChange","handleCurrentChange"])

import leftCircle from "./left-circle.png"

const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  defaultPageSize:{
    type: Number,
    default: 10,
  },
})
const currentPage2 = ref(5)
const pageSize2 = ref(100)
const handleSizeChange=(val)=> {
  console.log(val,'handleSizeChange')
  emit('handleSizeChange',val);
}
//页数
const handleCurrentChange=(val)=> {
  console.log(val,'handleCurrentChange')
  emit('handleCurrentChange',val);
}

const protest = () => {
  let aaa = 1;
  return new Promise((resolve) => {
    resolve(aaa);
  });
};

onMounted(() => {
  protest().then((res) => {
    console.log(res); // 这将在控制台打印 '1'
  });
});
</script>
<style scoped lang="scss">
.pagination-view{
  display: flex;
  align-items: center;
  justify-content: center;
}
.main{
  :deep(.pagination-main){
    max-width:100%;
    position: relative;
    .el-select{

      .el-select__wrapper{
        background: transparent !important;
      }
    }
    .btn-prev{
      background: transparent !important;
    }
    .btn-next{
      background: transparent !important;
    }
    .el-pager{
      li{
        background: transparent !important;
      }
    }
    //background: #eee;
    .is-first{
      //i {
      //  display: none;
      //}
      //position: absolute;
      //right: 70px;
      //border-radius: 100%;
      //color:#1174ec;
      //.el-icon{
      //  color:#1174ec;
      //}
      //&:before {
      //  content: ""; /* 必须指定 content 属性 */
      //
      //  background-size: 100% 100%;
      //  width: 100%;
      //  height: 100%;
      //  position: absolute;
      //  top: 0;
      //  right: 0;
      //}
    }
    .is-last {
      //i {
      //  display: none;
      //}
      //border-radius: 100%;
      //position: absolute;
      //right: 10px;
      //color: #1174ec;
      //&:before {
      //  content: ""; /* 必须指定 content 属性 */
      //  background: url('@/assets/image1/others/other/1.png') no-repeat;
      //  background-size: 100% 100%;
      //  width: 100%;
      //  height: 100%;
      //  position: absolute;
      //  top: 0;
      //  right: 0;
      //}
    }
    .el-pager{
      //li{
      //  border-radius: 100%;
      //  border: 2px solid #1174ec;
      //  color: #1174ec;
      //  margin-right: 10px;
      //  font-size: 20px;
      //  padding: 4px;
      //  width: 35px;
      //  height: 35px;
      //  font-weight: bold;
      //}
      //.is-active{
      //  background:#0F7FEF !important;
      //  color:#fff;
      //}
    }
  }
}
@media print,screen and (max-width:750px) {
  .main{
    :deep(.pagination-main){
      max-width:100%;
      position: relative;
      //background: #eee;
      .is-first{
        display: none !important;
      }
      .is-last {
        display: none !important;
      }

    }
  }
}
</style>