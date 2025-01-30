import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";  // 👈 Usa el compilador estándar de React
import tailwindcss from "tailwindcss";

export default defineConfig({
    plugins: [
        react(), // 👈 Usa @vitejs/plugin-react en lugar de SWC
        {
            name: 'load+transform-js-files-as-jsx',
            async transform(code, id) {
                if (!id.match(/src\/.*\.js$/)) {
                    return null;
                }
                return transformWithEsbuild(code, id, {
                    loader: 'jsx',
                    jsx: 'automatic',
                });
            },
        },
    ],
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            },
        },
    },
    server: {
        port: 8080,
        host: '0.0.0.0',
        allowedHosts: ['burs-web-su6v4.ondigitalocean.app', 'app.burs.com.mx'],
    },
});
