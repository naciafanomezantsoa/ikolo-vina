// vite.config.ts
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

const routes = [
  '/',
  '/wellness',
  '/digital',
  '/events',
  '/enterprise',
  '/rse',
  '/blog',
  '/contact',
  '/privacy',
  '/legal'
];

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }), 
    tailwindcss(),
    sitemap({
      hostname: 'https://ikolo-vina.com',
      dynamicRoutes: routes,
      generateRobotsTxt: true,
      robots: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin', '/api']
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // SUPPRIMER la ligne 'seo: ['react-helmet-async']'
          // OU la remplacer par autre chose
          ui: ['framer-motion', 'sonner'] // exemple
        }
      }
    }
  }
})