import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'
import SvgComponent from 'unplugin-svg-component/vite'
import svgLoader from "vite-svg-loader";
import AutoImport from "unplugin-auto-import/vite";
import {ElementPlusResolver} from "unplugin-vue-components/dist/resolvers.js";
import Components from "unplugin-vue-components/dist/vite.js";
import {VueMcp} from "vite-plugin-vue-mcp";

// 为content script专门配置的vite配置
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    // SVG组件插件
    svgLoader({
      defaultImport: "url",
      svgoConfig: {
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                // @see https://github.com/svg/svgo/issues/1128
                removeViewBox: false
              }
            }
          }
        ]
      }
    }),
    // 自动生成 SvgIcon 组件和 SVG 雪碧图
    SvgComponent({
      iconDir: [resolve(__dirname, "src/common/assets/icons")],
      preserveColor: resolve(__dirname, "src/common/assets/icons/preserve-color"),
      dts: true,
      dtsDir: resolve(__dirname, "types/auto")
    }),
    // 原子化 CSS
    UnoCSS(),
    // 自动按需导入 API
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: "types/auto/auto-imports.d.ts",
      resolvers: [ElementPlusResolver()]
    }),
    // 自动按需导入组件
    Components({
      dts: "types/auto/components.d.ts",
      resolvers: [ElementPlusResolver()]
    }),
    // 为项目开启 MCP Server
    VueMcp(),
  ],
  build: {
    outDir: 'dist/google',
    emptyOutDir: false, // 不清理整个dist目录，只清理google目录
    rollupOptions: {
      input: 'src/google/index.js',
      output: {
        entryFileNames: 'index.js',
        format: 'iife', // 确保输出为非模块格式的JavaScript
        inlineDynamicImports: true, // 内联动态导入
        manualChunks: undefined // 禁用代码分割
      }
    }
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-browser.prod.js' // 使用适合浏览器的Vue构建版本
    }
  }
})