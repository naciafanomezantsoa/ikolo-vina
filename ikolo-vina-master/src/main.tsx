// main.tsx (PAS DE CHANGEMENT nécessaire)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@/App.css'
import App from './App.tsx'
import "./i18n.js";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)