import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
      Components({
      resolvers: [VantResolver()],
      }),
  ],
  server: {
    host: '0.0.0.0',
    port: 8090,   //项目于启动端口
    hmr: true,   //自动热编译
    open: true   //启动项目自动打开浏览器
  },
})







