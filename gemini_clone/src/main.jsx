import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import ContextProvider from './context/context.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
    <StrictMode>
      <ContextProvider>
        <App/>
      </ContextProvider>
    </StrictMode>

)
