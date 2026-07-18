import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App'

// Progressive enhancement: solo ocultamos `.will-reveal` de entrada si JS
// corrió (para que GSAP los revele); sin JS, quedan visibles por defecto.
document.documentElement.classList.add('js')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
