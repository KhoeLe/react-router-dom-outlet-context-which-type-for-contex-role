import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import LoadingSpinner from './components/LoadingSpinner.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<LoadingSpinner />}>
        <App />
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
