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