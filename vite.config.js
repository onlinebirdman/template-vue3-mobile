import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtorem from 'postcss-pxtorem'
import postcssPresetEnv from 'postcss-preset-env'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 200, // 设计稿尺寸 / 10
          propList: [
            '*',
            '!border'
          ]
        }),
        postcssPresetEnv()
      ]
    }
  }
})
