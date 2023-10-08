import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Main/Root'
import AuthControl from './Auth/AuthControl'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthControl>
      <RouterProvider router={router}></RouterProvider>
    </AuthControl>
  </React.StrictMode>,
)
