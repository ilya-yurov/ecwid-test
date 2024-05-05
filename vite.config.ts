import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite";
import { fileURLToPath, URL } from "node:url";
import svgLoader from 'vite-svg-loader'

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            include: [/\.[tj]sx?$/, /\.vue$/],
            imports: ["vue", "vue-router", "pinia"],
            vueTemplate: true,
            dts: true,
            eslintrc: {
                enabled: true,
                filepath: "./.eslintrc-auto-import.json",
                globalsPropValue: true
            },
        }),
        svgLoader(),
    ],
    test: {
        globals: true,
        environment: 'happy-dom'
    },
    resolve: {
        alias: {
            "@presentation": fileURLToPath(new URL("./src/presentation", import.meta.url)),
            "@constant": fileURLToPath(new URL("./src/constant", import.meta.url))
        }
    },
    base: "/",
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "@presentation/mixins/mq";
                    @import "@presentation/styles/index.scss";
                `,
            },
        },
    },
    server: {
        port: 3000
    }
})
