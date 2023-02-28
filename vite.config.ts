import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//@ts-ignore
import viteCompression from 'vite-plugin-compression'
import { getEntryPath } from './build/utils'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 开发或生产环境服务的公共基础路径 配置引入相对路径
  root: path.resolve(__dirname, 'src/pages'),//项目根目录（index.html 文件所在的位置）
  plugins: [
    vue(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/assets/style/main.scss";'
      }
    }
  },
  //启动服务配置
  server: {
    host: '0.0.0.0',
    port: 8000,
    open: true,
    https: false,
    proxy: {}
  },
  // 生产环境打包配置
  //去除 console debugger
  build: {
    outDir:'../../dist',// 指定dist打包文件输出路径
    sourcemap: false, // 构建后是否生成 source map 文件
    rollupOptions:{
      input: {
        index:path.resolve(__dirname,'src/pages/index.html'),
        ...getEntryPath()
      }//root路径下多页面文件入口配置
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
