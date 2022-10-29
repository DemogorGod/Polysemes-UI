import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

import * as path from 'path'

export default defineConfig({
  
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
      './runtimeConfig': './runtimeConfig.browser',
    },
    // extensions: [
    //   '.js',
    //   '.json',
    //   '.jsx',
    //   '.mjs',
    //   '.ts',
    //   '.tsx',
    //   '.vue',
    // ]
  },
  plugins: [vue()]
})