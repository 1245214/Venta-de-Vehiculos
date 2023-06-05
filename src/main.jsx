import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline';
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>

        <App />
      </BrowserRouter>
    </React.Fragment>
  </React.StrictMode>

)
