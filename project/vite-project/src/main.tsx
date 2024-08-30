import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/globals.css'
import { ThemeProvider } from './components/business/theme/theme-provider/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
  </ThemeProvider>
)
