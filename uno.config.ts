// UnoCSS配置文件
import { defineConfig } from 'unocss'

// 导出UnoCSS配置
export default defineConfig({
  // 自定义规则
  rules: [],
  // 自定义变体
  variants: [],
  // 自定义快捷键
  shortcuts: {},
  // 主题配置
  theme: {
    // 可以在这里定义自定义颜色、字体等
    colors: {},
    fontFamily: {},
  },
  // 配置预设
  presets: [],
  // 配置安全列表（在某些情况下，如果自动检测不工作，可以手动指定要生成的类）
  safelist: [],
})