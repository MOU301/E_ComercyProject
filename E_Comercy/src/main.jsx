import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ShopeConextProvider from './Context/ShopContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ShopeConextProvider>
          <App />
     </ShopeConextProvider>
  </StrictMode>,
)
