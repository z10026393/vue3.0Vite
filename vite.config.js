import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
    plugins: [
        vue(),
        styleImport({
            libs: [{
                libraryName: 'element-plus',
                esModule: true,
                ensureStyleFile: true,
                resolveStyle: (name) => {
                    name = name.slice(3)
                    return `element-plus/packages/theme-chalk/src/${name}.scss`;
                },
                resolveComponent: (name) => {
                    return `element-plus/lib/${name}`;
                },
            }]
        })
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: "@import './src/assets/css/index.scss';",
            }
        },
        // postcss: {
        //     plugins: [
        //         require('autoprefixer'),
        //     ]
        // }
    },
    server: {
        port: 8080,
        open: false,
        proxy: {
            '/api/v1/chart': {
                target: 'http://192.168.12.116:8887',
                changeOrigin: true
            },
            '/api/v1': {
                target: 'http://192.168.12.116:8888',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/v1/, '')
            }
        }
    }
})