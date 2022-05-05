import React from 'react'

import { ApiProvider } from '@reduxjs/toolkit/query/react'
import ReactDOM from 'react-dom/client'

import { githubApi } from './api/githubApi'
import './index.css'
import { App } from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)
root.render(
  <ApiProvider api={githubApi}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApiProvider>,
)
