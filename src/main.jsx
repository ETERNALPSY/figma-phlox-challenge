import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from './context/cartContext.jsx'
import App from './App.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <BrowserRouter>
         <CartProvider>
            <App />
         </CartProvider>
      </BrowserRouter>
   </React.StrictMode>,
)
