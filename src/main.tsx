import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'

import "./assets/styles/css/main.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
