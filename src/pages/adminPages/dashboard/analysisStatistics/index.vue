<script setup lang="ts">
import {useTheme} from "@@/composables/useTheme.ts";
import {useDevice} from "@@/composables/useDevice.ts";
const { activeThemeName } = useTheme()
const { isMobile } = useDevice()
import MyEditor from '@/layouts/components/MyEditor/index.vue';
</script>
<template>
<!--  <div class="app-form-main-padding">-->
<!--    <div class="text-[#433d63] font-bold text-[14px] leading-[20px]" style="font-family: 'Alibaba PuHuiTi 2.0'">分析代码</div>-->
<!--    <div class="text-[#66637c] font-normal text-[14px] leading-[20px]" style="font-family: 'Alibaba PuHuiTi 2.0'">如果你需要添加多个分析工具，请将每一段代码分开写在独立行中。</div>-->
<!--  <MyEditor  />-->

<!--  </div>-->
  <el-form  label-width="auto">
    <div class="directoryHomepage-main">

      <div class="app-form-main-padding">
        <div class="h-fit flex flex-col gap-[4px] ">
          <div class="text-[var(--app-h2-text-Light-color)] font-bold text-[14px] leading-[20px]" style="font-family: 'Alibaba PuHuiTi 2.0'">分析代码</div>
          <div class="text-[var(--app-header-text-color)] font-normal text-[14px] leading-[20px]" style="font-family: 'Alibaba PuHuiTi 2.0'">如果你需要添加多个分析工具，请将每一段代码分开写在独立行中。</div>
          <div class="max-w-[548px] w-full">
            <MyEditor editorHeight="280" />
          </div>
          <div class="text-[var(--app-header-text-color)] font-normal text-[14px] leading-[20px] max-w-[548px] w-full" style="font-family: 'Alibaba PuHuiTi 2.0'">将你的 Google Analytics、Plausible、PostHog 或 DataFast 等分析代码粘贴到此处。（或粘贴你希望用于追踪的任何其他代码）</div>
        </div>

      </div>
      <div class="py-[16px] px-[24px] m-t-[16px] border-t border-[var(--app-border-color)] border-t-[0.5px]">
        <el-button class="app-form-submit-botton" :class="{'app-form-submit-botton-width-100':isMobile}">
          <img src="@@/assets/images/adminPages/sub.png" alt="">
          <div class="text">保存</div>
        </el-button>
      </div>
    </div>
  </el-form>
</template>

<style scoped lang="scss">
.directoryHomepage-main{

}

.a{
  color: var(--Text-3, #615b7c);
  font-family: "Alibaba PuHuiTi 2.0";
  font-weight: 400;
  font-size: 14px;

}


</style>