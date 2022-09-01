import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

const isProduction = process.env.NODE_ENV !== 'development';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      entry: resolve(__dirname, 'src/main.js'),
      inject: {
        data: {
          title: '性格测试分析',
          testExample: JSON.stringify([{"question":"当你要在一个星期内完成一个大项目，你在开始时候会","optionA":"把要做的工作依次列出","optionB":"马上动工","optionAValue":"JNKV","optionBValue":"bXbb"},{"question":"要做许多人也做的事，你比较喜欢","optionA":"按照一般认可的方法做","optionB":"构想一个自己的想法","optionAValue":"l9lS","optionBValue":"LXMP"},{"question":"下面每一对词语中，哪个词语更合你心意","optionA":"文静","optionB":"爱合群","optionAValue":"znAw","optionBValue":"albq"},{"question":"要作决定时，你认为比较重要的是","optionA":"据事实衡量","optionB":"考虑他人的感受和意见 ","optionAValue":"HoIK","optionBValue":"bGaC"}]),
          jsCdn: (
            isProduction
            ?
            []
            :
            []
          ),
        }
      },
    })
  ],
  base: './',
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.json'],
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5180,
    proxy: {
      '/api': {
        target: 'http://localhost:5200', // dev
        changeOrigin: true,
        rewrite: (path) => path.replace('^/api', '')
      }
    }
  },
  build: {
    target: 'es2015',
    assetsDir: 'static',
    // manifest: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      }
    },
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true,
    //   }
    // }
  }
});
