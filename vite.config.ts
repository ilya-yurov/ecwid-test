import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite";
import { fileURLToPath, URL } from "node:url";
import svgLoader from 'vite-svg-loader'
import Components from 'unplugin-vue-components/vite'

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
        Components({dirs: ["src/presentation/components"], dts: true}),
        svgLoader(),
    ],
    test: {
        globals: true,
        environment: 'happy-dom'
    },
    resolve: {
        alias: {
            "@presentation": fileURLToPath(new URL("./src/presentation", import.meta.url)),
            "@constant": fileURLToPath(new URL("./src/constant", import.meta.url)),
            "@store": fileURLToPath(new URL("./src/store", import.meta.url)),
            "@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
            "@core": fileURLToPath(new URL("./src/core", import.meta.url)),
            "@service": fileURLToPath(new URL("./src/service", import.meta.url)),
            "@entity": fileURLToPath(new URL("./src/entity", import.meta.url)),
            "@helpers": fileURLToPath(new URL("./src/helpers", import.meta.url)),
        }
    },
    base: "/",
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "@presentation/mixins/index.scss";
                    @import "@presentation/styles/index.scss";
                `,
            },
        },
    },
    server: {
        port: 3000
    }
})
