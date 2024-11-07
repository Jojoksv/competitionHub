import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import './assets/css/menu.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <React.Suspense>
        <App />
      </React.Suspense>
  </React.StrictMode>,
)
