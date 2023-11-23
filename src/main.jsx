import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from "./components/Header";
import Grid from "./components/Grid";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Header />
    <Grid />

  </React.StrictMode>,
)
