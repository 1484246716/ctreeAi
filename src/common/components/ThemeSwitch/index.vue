<script lang="ts" setup>
import { useTheme } from "@@/composables/useTheme"
import { MagicStick } from "@element-plus/icons-vue"

const { themeList, activeThemeName, setTheme } = useTheme()
</script>

<template>
  <el-dropdown trigger="click">
    <div>
      <el-tooltip effect="dark" content="主题模式" placement="bottom">
<!--        <el-icon :size="20">-->
<!--          <MagicStick />-->
<!--        </el-icon>-->
        <svg class="m-l-[16px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z" fill="#615B7C"/>
          <path d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20V22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22V20C16.4183 20 20 16.4183 20 12Z" fill="#615B7C"/>
        </svg>

      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(theme, index) in themeList"
          :key="index"
          :disabled="activeThemeName === theme.name"
          @click="(e: MouseEvent) => setTheme(e, theme.name)"
        >
          <span>{{ theme.title }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
