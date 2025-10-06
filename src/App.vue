<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
import { useGreyAndColorWeakness } from "@@/composables/useGreyAndColorWeakness"
import { useTheme } from "@@/composables/useTheme"
import { ElMessage } from "element-plus"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import zhCn from "element-plus/es/locale/lang/zh-cn" // Element Plus 中文包

const app = getCurrentInstance()!.appContext.app

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const { initTheme } = useTheme()
const { initGreyAndColorWeakness } = useGreyAndColorWeakness()

// 全局挂载 ElMessage
app.config.globalProperties.$message = ElMessage

// 初始化主题
initTheme()

// 初始化灰色模式和色弱模式
initGreyAndColorWeakness()

// #endregion
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>
