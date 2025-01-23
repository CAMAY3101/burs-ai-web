import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";

export default defineConfig({
    plugins: [
        react(),
        {
            name: 'load+transform-js-files-as-jsx',
            async transform(code, id) {
                if (!id.match(/src\/.*\.js$/)) {
                    return null;
                }

                // Use the exposed transform from vite, instead of directly
                // transforming with esbuild
                return transformWithEsbuild(code, id, {
                    loader: 'jsx',
                    jsx: 'automatic', // 👈 this is important
                });
            },
        },
    ],
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    // Workaround before renaming .js to .jsx
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            },
        },
    },
    server: {
        port: import.meta.env.VITE_PORT,
        host: '0.0.0.0',
        open: false,
    },
})