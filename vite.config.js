import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svg from '@neodx/svg/vite';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svg({
      root: 'src/assets',
      group: true,
      output: 'public',
      // definitions: 'src/shared/ui/icon/sprite.h.ts',
      resetColors: {
        replaceUnknown: 'currentColor',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      pages: path.resolve(__dirname, './src/pages'),
      assets: path.resolve(__dirname, './src/assets/'),
      scss: path.resolve(__dirname, './src/assets/scss/'),
    },
  },
});
