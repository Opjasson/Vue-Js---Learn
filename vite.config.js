import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        rollupOptions: {
          // Regist setiap komponen baru untuk diproses vite
            input: {
                index: "index.html",
                hallo: "hallo.html",
            },
        },
    },
});
