import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' => עובד בכל כתובת של GitHub Pages בלי להגדיר homepage
export default defineConfig({ plugins: [react()], base: './' });
