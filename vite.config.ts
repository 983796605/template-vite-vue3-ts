import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import postCssPxToRem from "postcss-pxtorem"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src")
        },
        extensions: ['.js', '.ts', '.vue']
    },
    // 项目部署的基础路径
    base: './',
    // 混淆器，terser构建后文件体积更小
    minify: 'terser',
    build: {
        // 混淆器，terser构建后文件体积更小
        minify: 'terser',
        //打包前先清空原有打包文件
        emptyOutDir: true,
        // 自定义底层的 Rollup 打包配置
        rollupOptions: {
            output: {
                chunkFileNames: () => `assets/js/[name].[hash].js`,
                entryFileNames: () => `assets/js/[name]-[hash].js`,
                assetFileNames: () => `assets/[ext]/[name]-[hash][extname]`
            }
        },
        // 清除console
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
    css: {
        // 此代码为适配移动端px2rem
        // postcss: {
        //     plugins: [
        //         postCssPxToRem({
        //             rootValue: 100, // 1rem的大小  按照设计稿375，将会自动转换px为rem
        //             propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        //         })
        //     ]
        // },
        // 引入全局基础less变量
        preprocessorOptions: {
            less: {
                modifyVars: {
                    // hack: `true; @import (reference) "${resolve("src/assets/css/base.less")}";`,
                },
                javascriptEnabled: true,
            },
        },
    }
})
