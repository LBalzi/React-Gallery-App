import { defineConfig } from 'vite'

export default defineConfig(() => ({
  esbuild: {
    loader: 'jsx', // This specifies that JSX files should use the 'jsx' loader.
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx', // The correct field is 'loaders', not 'loader'
      },
    },
  },
}))
