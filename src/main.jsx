<<<<<<< HEAD
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import StorecontextProvider from './Storeontext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <StorecontextProvider>
   <App />
   </StorecontextProvider>
  </BrowserRouter>
)
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
>>>>>>> d0c59be80de637280969f84523e38fd2e23ebd99
