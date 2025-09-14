//This `index.jsx` is the entry point of the React application, rendering the main `App` component inside the HTML element with ID `root` while applying global styles from `index.css` and wrapping the app in `React.StrictMode` to help identify potential problems during development.

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
