import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { getIfirestoreApp } from './config/getFirestoreApp'

getIfirestoreApp()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
