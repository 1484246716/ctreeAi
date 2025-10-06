<script setup lang="ts">
const isActive=ref(false)
const page=ref(10)
const handleVisible=(e)=>{
  console.log(e)
  isActive.value=e
}

const handleCommand = (command) => {
  page.value=command
}


</script>

<template>
    <div class="customPagination" :class="{'customPagination-active':isActive}">
      <div class="left">每页</div>
      <el-dropdown trigger="click" popper-class="customPagination-dropdown"  @visible-change="handleVisible"   @command="handleCommand">
        <div class="right-box">
         {{page}}
          <svg style="cursor: pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.90048 13C9.59115 12.9845 9.25216 12.8266 8.97763 12.54L5.44052 8.84668C4.95252 8.33687 4.85384 7.61384 5.21982 7.23144C5.58598 6.84907 6.27844 6.95217 6.7667 7.46191L9.99912 10.8379L13.2315 7.46191C13.7198 6.95203 14.4132 6.84903 14.7794 7.23145C15.1452 7.61396 15.0458 8.33696 14.5577 8.84668L11.0216 12.5391C10.7471 12.8257 10.4081 12.9844 10.0987 13L9.90048 13Z" fill="#575179"/>
          </svg>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="5">5</el-dropdown-item>
            <el-dropdown-item command="10">10</el-dropdown-item>
            <el-dropdown-item command="25">25</el-dropdown-item>
            <el-dropdown-item command="'全部'">全部</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

    </div>
</template>

<style scoped lang="scss">
  .customPagination{
    width: fit-content;
    display: flex;
    align-items: center;
    border-radius:8px;
    border: 0.5px solid var(--app-border-color);
    .left{
      padding: 8px 16px;
      border-right: 0.5px solid var(--app-border-color);
      color: var(--CustomTable-td-color);
      font-family: "Alibaba PuHuiTi 2.0";
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
    .right-box{
      display:flex;
      align-items: center;
      gap: 10px;
      padding: 8px 16px;
      flex:1;
      color: var(--CustomTable-td-color);
      font-family: "Alibaba PuHuiTi 2.0";
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      svg{
        color: var(--CustomTable-td-color);

      }
    }
  }
  .customPagination-active{
    border: 1px solid var(--Main-1, #8167ff);
    box-shadow: 0px 0px 4px var(--Main-1, #8167ff);
  }

  @media (max-width: 1000px) {
    .customPagination{
      width:100% !important;
      .left{
        width:50% !important;
        text-align: center;
      }
      .el-dropdown{
        width:50% !important;
        .right-box{
          width:100% !important;
         justify-content: center !important;

        }
      }

    }

  }
</style>

<style>

.customPagination-dropdown{
  border: 0.5px solid var(--app-border-color);
  background: var(--app-bg-color) !important;

  .el-dropdown-menu{
    padding:4px ;
    box-sizing: border-box;
    background: var(--app-bg-color) !important;
    .el-dropdown-menu__item{
      color:var(--customPagination-dropdown-menu-text-color);
      border-radius: 4px;
      &:hover{
        background: var(--customPagination-dropdown-menu-active-bg-color);
        color: var(--customPagination-dropdown-menu-active-text-color);
      }
    }
  }
  .el-popper__arrow{
    display: none;
  }
}


</style>