<script setup lang="ts">
import { reactive,ref, computed } from 'vue'
import Pagination from "@/layouts/components/Pagination/index.vue"
import { useDevice } from "@@/composables/useDevice.ts"
import type { VxeGridInstance } from 'vxe-table'
// 定义类型接口替代不存在的CheckboxChangeParams
interface CheckboxChangeParams {
  checked: boolean
  records: any[]
}
const { isMobile } = useDevice()
const borderColor = ref('')
const gridRef=ref<VxeGridInstance | null>(null)
const gridOptions = reactive({
  round: true,
  align: 'left' as const,
  rowConfig: {
    isCurrent: true,
    isHover: true,
    drag: true
  },
  showHeaderOverflow: true,

  radioConfig: {
    labelField: 'name',
    trigger: 'row' as const
  },
  columns: [
    { field: 'Drag', title: '', width: 60,dragSort: true,headerAlign: 'left' as const },
    { type: 'checkbox' as const, width: 60,headerAlign: 'left' as const },
    { field: 'title', title: '标题',headerAlign: 'left' as const,slots: { default: 'title_default' } },
    { field: 'type', title: '类型',headerAlign: 'left' as const,slots: { default: 'type_default' } },
    { field: 'status', title: '状态',headerAlign: 'left' as const,slots: { default: 'status_default' } },
    { field: 'objective', title: '目标', showOverflow: true,headerAlign: 'left' as const },
    { field: 'restriction', title: '限制',headerAlign: 'left' as const },
    { field: 'reviewer', title: '审阅者',headerAlign: 'left' as const },
    { field: 'operation', title: '',width: 60,headerAlign: 'right' as const,slots: { default: 'operation_default' } },

  ],
  data: [
    { id: 10001, title: 'Test1', type: 'Develop', status: '1', objective: 28, restriction: 'test abc', reviewer: 'reviewer' },
    { id: 10002, title: 'Test1', type: 'Develop', status: '2', objective: 28, restriction: 'test abc', reviewer: 'reviewer' },
    { id: 10003, title: 'Test1', type: 'Develop', status: '2', objective: 28, restriction: 'test abc', reviewer: 'reviewer' },
    { id: 10004, title: 'Test1', type: 'Develop', status: '2', objective: 28, restriction: 'test abc', reviewer: 'reviewer' },
    { id: 10005, title: 'Test1', type: 'Develop', status: '1', objective: 28, restriction: 'test abc', reviewer: 'reviewer' },
  ]
})

const selectAllChangeEvent = ({ checked }: CheckboxChangeParams) => {
  const $grid = gridRef.value
  if ($grid) {
    const records = $grid.getCheckboxRecords()
    console.log(checked ? '所有勾选事件' : '所有取消事件', records)
  }
}
const selectChangeEvent = ({ checked }: CheckboxChangeParams) => {
  const $grid = gridRef.value
  if ($grid) {
    const records = $grid.getCheckboxRecords()
    console.log(checked ? '勾选事件' : '取消事件', records)
  }
}
const total=ref(100)
const handleSizeChange=()=>{

}
const handleCurrentChange=()=>{

}

</script>

<template>
  <div class="table-view">
    <div :class="{ 'mobile-table-container': isMobile }">
      <div class="table-content-wrapper">
        <vxe-grid
        class="vxeTableView"
        ref="gridRef"
        :style="{
        '--vxe-ui-font-color': 'var(--vxe-table-text-color)',
        '--vxe-ui-table-header-font-color': 'var(--vxe-table--header-text-color)',
        '--vxe-ui-table-border-color': 'var(--app-border-color)',
        '--vxe-ui-table-row-hover-background-color':'var(--vxe-table--header-hover-bg-color)',
        '--vxe-ui-table-row-current-background-color':'var(--vxe-table--header-active-bg-color)',
        '--vxe-ui-table-row-hover-current-background-color':'var(--vxe-table--header-active-bg-color)',
        '--vxe-ui-table-column-hover-background-color': 'var(--vxe-table--header-active-bg-color)',
        '--vxe-ui-table-column-current-background-color': 'var(--vxe-table--header-active-bg-color)',
        '--vxe-ui-table-column-hover-current-background-color':'var(--vxe-table--header-active-bg-color)',
      }"
        v-bind="gridOptions"
        @checkbox-all="selectAllChangeEvent"
        @checkbox-change="selectChangeEvent">
      <template #title_default="{ row }">
        <div class="title-style">{{row.title}}</div>
      </template>
      <template #type_default="{ row }">
        <div class="type-style">{{row.type}}</div>
      </template>
      <template #status_default="{ row }">
        <div class="status-style">
          <svg v-if="row.status==1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12.667C8.36808 12.667 8.66682 12.965 8.66699 13.333V14.667C8.66682 15.035 8.36808 15.333 8 15.333C7.63192 15.333 7.33318 15.035 7.33301 14.667V13.333C7.33318 12.965 7.63192 12.667 8 12.667ZM4.75586 12.2852C4.94001 11.9665 5.34821 11.857 5.66699 12.041C5.98576 12.2251 6.09508 12.6333 5.91113 12.9521L5.24414 14.1074C5.05994 14.426 4.65174 14.5346 4.33301 14.3506C4.01461 14.1665 3.90517 13.7591 4.08887 13.4404L4.75586 12.2852ZM10.334 12.041C10.6527 11.8574 11.0601 11.9667 11.2441 12.2852L11.9111 13.4404C12.0949 13.7592 11.9856 14.1665 11.667 14.3506C11.3482 14.5346 10.94 14.4261 10.7559 14.1074L10.0898 12.9521C9.90579 12.6333 10.0151 12.2251 10.334 12.041ZM3.04883 10.0889C3.36751 9.90543 3.77498 10.0146 3.95898 10.333C4.14305 10.6518 4.0336 11.06 3.71484 11.2441L2.56055 11.9111C2.24178 12.0951 1.83357 11.9856 1.64941 11.667C1.46536 11.3481 1.57471 10.9399 1.89355 10.7559L3.04883 10.0889ZM12.041 10.333C12.2251 10.0143 12.6334 9.90488 12.9521 10.0889L14.1074 10.7559C14.4259 10.9401 14.5346 11.3483 14.3506 11.667C14.1665 11.9855 13.7591 12.0948 13.4404 11.9111L12.2852 11.2441C11.9664 11.06 11.857 10.6518 12.041 10.333ZM2.66699 7.33301C3.03503 7.33318 3.33301 7.63192 3.33301 8C3.33301 8.36808 3.03503 8.66682 2.66699 8.66699H1.33301C0.964968 8.66682 0.666992 8.36808 0.666992 8C0.666992 7.63192 0.964968 7.33318 1.33301 7.33301H2.66699ZM14.667 7.33301C15.035 7.33318 15.333 7.63192 15.333 8C15.333 8.36808 15.035 8.66682 14.667 8.66699H13.333C12.965 8.66682 12.667 8.36808 12.667 8C12.667 7.63192 12.965 7.33318 13.333 7.33301H14.667ZM13.4404 4.08887C13.7591 3.90526 14.1665 4.01459 14.3506 4.33301C14.5346 4.6517 14.4259 5.0599 14.1074 5.24414L12.9521 5.91113C12.6333 6.09516 12.2251 5.98575 12.041 5.66699C11.857 5.34817 11.9664 4.93997 12.2852 4.75586L13.4404 4.08887ZM1.64941 4.33301C1.83359 4.01441 2.2418 3.90488 2.56055 4.08887L3.71484 4.75586C4.0336 4.93999 4.14305 5.34817 3.95898 5.66699C3.77499 5.9855 3.36753 6.09462 3.04883 5.91113L1.89355 5.24414C1.57471 5.06006 1.46536 4.65186 1.64941 4.33301ZM4.33398 1.64941C4.65281 1.46554 5.0601 1.57478 5.24414 1.89355L5.91113 3.04785C6.09496 3.36655 5.98548 3.77386 5.66699 3.95801C5.34817 4.14208 4.93999 4.0336 4.75586 3.71484L4.08984 2.55957C3.90584 2.24072 4.01516 1.83349 4.33398 1.64941ZM10.7559 1.89355C10.9399 1.57471 11.3481 1.46536 11.667 1.64941C11.9855 1.83352 12.0948 2.24088 11.9111 2.55957L11.2441 3.71484C11.06 4.03359 10.6518 4.14207 10.333 3.95801C10.0147 3.7738 9.90507 3.36649 10.0889 3.04785L10.7559 1.89355ZM8 0.666992C8.36808 0.666992 8.66682 0.964968 8.66699 1.33301V2.66699C8.66682 3.03503 8.36808 3.33301 8 3.33301C7.63192 3.33301 7.33318 3.03503 7.33301 2.66699V1.33301C7.33318 0.964968 7.63192 0.666992 8 0.666992Z" fill="#6C658E"/>
          </svg>
          <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8C14 6.34298 13.3294 4.8437 12.2428 3.75716C11.1563 2.67065 9.65702 2 8 2C6.34298 2 4.8437 2.67064 3.75716 3.75716C2.67065 4.8437 2 6.34298 2 8C2 9.65702 2.67065 11.1563 3.75716 12.2428C4.8437 13.3294 6.34299 14 8 14C9.65702 14 11.1563 13.3294 12.2428 12.2428C13.3294 11.1563 14 9.65702 14 8ZM10.862 5.52865C11.1223 5.2683 11.5443 5.2683 11.8047 5.52865C12.065 5.78899 12.065 6.211 11.8047 6.47135L7.80469 10.4714C7.54434 10.7317 7.12233 10.7317 6.86198 10.4714L4.86198 8.47135L4.81641 8.42057C4.60284 8.15872 4.6179 7.77272 4.86198 7.52865C5.10606 7.28457 5.49206 7.26951 5.75391 7.48307L5.80469 7.52865L7.33333 9.05729L10.862 5.52865ZM15.3333 8C15.3333 10.0248 14.5119 11.8592 13.1855 13.1855C11.8592 14.5119 10.0248 15.3333 8 15.3333C5.97515 15.3333 4.14081 14.5119 2.81445 13.1855C1.48812 11.8592 0.666667 10.0248 0.666667 8C0.666667 5.97515 1.48812 4.14081 2.81445 2.81445C4.14081 1.48812 5.97515 0.666667 8 0.666667C10.0248 0.666667 11.8592 1.48812 13.1855 2.81445C14.5119 4.14081 15.3333 5.97515 15.3333 8Z" fill="#2FAD98"/>
          </svg>
          <span>{{row.status==1?'进行中':'完成'}}</span>
        </div>
      </template>
      <template #operation_default="{ row }">
        <el-popover placement="bottom" :show-arrow="false" :width="90" trigger="click" popper-class="table-popper1">
          <template #reference>
            <div class="operation_default">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </template>
          <div class="popover-main">
            <div class="top-view">
              <div class="popover-item">编辑</div>
              <div class="popover-item">复制</div>
              <div class="popover-item">喜欢</div>
            </div>
            <div class="top-view" style="border-top:1px solid var(--app-border-color);">
             <div class="popover-item" style="color:var(--vxe-table-popover-item-text-del-color);">删除</div>
            </div>
          </div>
        </el-popover>
      </template>

        </vxe-grid>
      </div>
    </div>

    <div class="h5-bottom m-t-[16px]" v-if="isMobile">
      <span class="left">第 1页，共7 页</span>
      <div class="right">
        <el-button class="default-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9121 4.41113C12.2375 4.0857 12.7644 4.0857 13.0898 4.41113C13.4152 4.73658 13.4152 5.26347 13.0898 5.58887L8.67969 10L13.0898 14.4111C13.4152 14.7366 13.4152 15.2635 13.0898 15.5889C12.7644 15.9143 12.2376 15.9142 11.9121 15.5889L6.91211 10.5889C6.58667 10.2634 6.58667 9.73657 6.91211 9.41113L11.9121 4.41113Z" fill="#6C658E"/>
          </svg>
        </el-button>
        <el-button class="default-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.91211 4.41113C7.23755 4.0857 7.76441 4.0857 8.08984 4.41113L13.0898 9.41113C13.4152 9.73658 13.4152 10.2635 13.0898 10.5889L8.08984 15.5889C7.76445 15.9143 7.23756 15.9142 6.91211 15.5889C6.58667 15.2634 6.58667 14.7366 6.91211 14.4111L11.3223 10L6.91211 5.58887C6.58667 5.26343 6.58667 4.73657 6.91211 4.41113Z" fill="#6C658E"/>
          </svg>
        </el-button>
      </div>
    </div>

    <div class="bottom-text m-t-[16px]" v-else>
      <span class="left">已选择0行（共68行）</span>
      <Pagination  :total="total" @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange"></Pagination>
    </div>


  </div>
</template>

<style scoped lang="scss">
.table-view{
  display: flex;
  flex-direction: column;

}
:deep(.vxeTableView){
  border-radius:16px;
  overflow: hidden;
  border:1px solid var(--app-border-color);
  border-bottom:0px solid #bdbbc5;
  //margin-bottom:26px;
  .vxe-table--header-wrapper{
    background:var(--vxe-table--header-bg-color) !important;//表头颜色
  }
  .vxe-table--render-wrapper{//行透明
    background: transparent !important;
  }
  .vxe-table--body{//行透明
    background: transparent !important;
  }
  .vxe-table--body-wrapper{
    background: transparent !important;
  }
  .vxe-table--layout-wrapper{
    background: transparent !important;
  }

  .title-style{
    color: var(--vxe-table--header-text-color);
    font-family: "Alibaba PuHuiTi 2.0";
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  .type-style{
    padding: 2px 8px;
    border-radius: 8px;
    border: 1px solid  var(--app-border-color);
    box-sizing: border-box;
    width: fit-content;
    color: var(--vxe-table-text-color);
    font-family: "Alibaba PuHuiTi 2.0";
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  .status-style{
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border-radius: 8px;
    border: 1px solid var(--app-border-color);
    box-sizing: border-box;

    svg{
      font-size:8px;
    }
    span{
      color: var(--Text-3, #615b7c);
      font-family: "Alibaba PuHuiTi 2.0";
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .operation_default{
    width:56px;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:2px;
    cursor: pointer;
    span{
      width:3px;
      height:3px;
      background: #6c658e;
      border-radius:100%;
    }
  }
}
.bottom-text{
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left{
    color: var(--app-text-color);
    font-family: "Alibaba PuHuiTi 2.0";
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
}
  .mobile-table-container {
    display: block;
    position: relative;
    max-width: 100%;
    overflow-x: auto;
    box-sizing: border-box;
    float: none;
    clear: both;
    // 添加滚动条样式优化
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: #4532c9 transparent;

    // 增强容器固定性，防止被内部表格撑开
    .table-content-wrapper {
      min-width: 1024px; // 确保H5端表格有固定宽度，与PC端保持一致
      display: inline-block;
    }
    &::-webkit-scrollbar {
      height: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: #4532c9;
      border-radius:20px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background-color: #4532c9;
    }
  }
</style>
<style lang="scss">
.table-popper1{
  padding:0 !important;
  background: none !important;
  border:0 !important;
  .popover-main{
    width: 89px;
    height: 120px;

    border-radius: 8px;
    border: 0.5px solid var(--vxe-table-popover-item-border-color);
    box-sizing: border-box;
    background: var(--vxe-table-popover-item-bg-color);
    .top-view{
      padding: 4px ;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 4px;

    }
    .popover-item{
      width: 100%;
      height: fit-content;
      display: inline-flex;
      padding: 2px 4px;
      border-radius: 4px;
      cursor: pointer;
      &:hover{
        background: var(--vxe-table-popover-item-hover-bg-color);
      }
    }
  }
}
.h5-bottom{
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left{
    color: var(--app-h2-text-Light-color);
    font-family: "Alibaba PuHuiTi 2.0";
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
  }
  .right{
    .default-button{
      border-color:var(--app-border-color) !important;
      padding:4px !important;
      border-radius: 8px !important;
      height: fit-content !important;
      background:transparent !important;

      svg{
        color: var(--app-h2-text-Light-color) !important;
      }
    }
  }
}
</style>
