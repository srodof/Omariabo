import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/store.css'
import StoreApp from './store/StoreApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreApp />
  </StrictMode>,
)
