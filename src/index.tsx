import React from 'react'

import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";

import { App } from './App'
import { CssResetStyles } from './externalStyles/cssReset.styles';
import { GlobalStyles } from './externalStyles/globalStyles.styles';
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

root.render(
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyles />
        <CssResetStyles />
        <App />
      </Provider>
    </React.StrictMode>,
)
