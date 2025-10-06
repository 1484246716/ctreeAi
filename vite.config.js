import { copyFileSync, mkdirSync, existsSync, readdirSync } from 'fs'
import { resolve } from "node:path"
import vue from "@vitejs/plugin-vue"
import UnoCSS from "unocss/vite"
import AutoImport from "unplugin-auto-import/vite"
import SvgComponent from "unplugin-svg-component/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"
import { defineConfig, loadEnv } from "vite"
import { VueMcp } from "vite-plugin-vue-mcp"
import svgLoader from "vite-svg-loader"
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@@': resolve(__dirname, 'src/common'),
    },
  },
  server: {
    // 是否监听所有地址
    host: true,
    // 端口号
    port: 3333,
    // 端口被占用时，是否直接退出
    strictPort: false,
    // 是否自动打开浏览器
    open: true,
    // 反向代理
    proxy: {
      "/api/v1": {
        target: "https://apifoxmock.com/m1/2930465-2145633-default",
        // 是否为 WebSocket
        ws: false,
        // 是否允许跨域
        changeOrigin: true
      }
    },
    // 是否允许跨域
    cors: true,
    // 预热常用文件，提高初始页面加载速度
    warmup: {
      clientFiles: [
        "./src/layouts/**/*.*",
        "./src/pinia/**/*.*",
        "./src/router/**/*.*"
      ]
    }
  },

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
    // 文件复制插件
    {
      name: 'copy-files',
      writeBundle: () => {
        // 复制manifest.json
        copyFileSync(
          resolve(__dirname, 'manifest.json'),
          resolve(__dirname, 'dist/manifest.json')
        )
        
        // 复制icons文件夹
        const iconsSrc = resolve(__dirname, 'icons')
        const iconsDest = resolve(__dirname, 'dist/icons')
        
        if (existsSync(iconsSrc)) {
          if (!existsSync(iconsDest)) {
            mkdirSync(iconsDest, { recursive: true })
          }
          
          // 复制所有图标文件
          const iconFiles = ['icon16.png', 'icon48.png', 'icon128.png']
          iconFiles.forEach(file => {
            const srcPath = resolve(iconsSrc, file)
            const destPath = resolve(iconsDest, file)
            if (existsSync(srcPath)) {
              copyFileSync(srcPath, destPath)
            }
          })
        }
        
        // 复制background.js
        const backgroundSrc = resolve(__dirname, 'src/google/background.js')
        const backgroundDest = resolve(__dirname, 'dist/google/background.js')
        const backgroundDestDir = resolve(__dirname, 'dist/google')
        if (existsSync(backgroundSrc)) {
          if (!existsSync(backgroundDestDir)) {
            mkdirSync(backgroundDestDir, { recursive: true })
          }
          copyFileSync(backgroundSrc, backgroundDest)
        }
        
        // 复制style.css
        const styleSrc = resolve(__dirname, 'src/google/style.css')
        const styleDest = resolve(__dirname, 'dist/style.css')
        if (existsSync(styleSrc)) {
          copyFileSync(styleSrc, styleDest)
        }
      }
    }
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      // 为content script创建单独的配置
      input: {
        main: 'index.html'
      },
      output: {
        entryFileNames: '[name]/index.js',
        chunkFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: 'assets/[ext]/[name].[hash].[ext]'
      }
    }
  },
  // 为content script创建单独的构建配置
  optimizeDeps: {
    include: ['vue']
  }
})