import { copyFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves static files with no server-side rewrites, so a hard
// refresh on /about would hit GitHub's own 404 page instead of the app.
// Shipping a copy of the SPA shell as 404.html makes GitHub hand the request
// back to React Router, which then renders the right route.
function spaFallback(): Plugin {
  let outDir = 'dist'
  return {
    name: 'spa-404-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      copyFileSync(join(outDir, 'index.html'), join(outDir, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  // Served from a custom domain, which always sits at the root. If this ever
  // moves back to hunab-ku-co.github.io/saara-website/, change this to
  // '/saara-website/' or every asset URL will 404.
  base: '/',
  plugins: [react(), spaFallback()],
  build: {
    // Better cache behaviour: dependencies change far less often than app
    // code, so a repeat visitor only re-downloads the small app chunk.
    // The function form is used because the object form is not accepted by
    // Vite 8's Rolldown-based typings.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
})
