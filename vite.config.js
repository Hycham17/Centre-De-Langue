import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input:
             ['resources/css/app.css', 'resources/js/app.js',
              'resources/js/assets/Logo/logo2.png' // lien symbolique
             ],
            refresh: true,
        }),
    ],
});
