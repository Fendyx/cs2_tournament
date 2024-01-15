import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // base: '/vite',
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: path.resolve(__dirname, './src/'),
      },
      {
        find: 'assets',
        replacement: path.resolve(__dirname, './src/assets/'),
      },
      {
        find: 'styles',
        replacement: path.resolve(__dirname, './src/styles/'),
      },
      {
        find: 'pages',
        replacement: path.resolve(__dirname, './src/pages/'),
      },
    ],
  },
});
