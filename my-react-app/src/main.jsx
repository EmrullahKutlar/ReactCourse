import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
  {/* StrictMode'un acık kalması daha iyiymis react kodun dogru oldugunu kontrol ediyormus */}
  {/* https://www.youtube.com/watch?v=yHdX4dCl5CY&list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR&index=6   15:35 */}
    <App />
  </React.StrictMode>
)
