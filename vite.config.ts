import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

const enableWayfinder = process.env.WAYFINDER_DISABLE !== 'true';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        // 👇 Only include Wayfinder if not disabled
        ...(enableWayfinder
            ? [
                  wayfinder({
                      formVariants: true,
                  }),
              ]
            : []),
    ],
    esbuild: {
        jsx: 'automatic',
    },
});
