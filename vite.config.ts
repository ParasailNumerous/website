import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/",
  appType: "mpa",
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        404: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
})