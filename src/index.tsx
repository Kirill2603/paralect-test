import React from 'react'

import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";

import { App } from './App'
import { store } from "./store/store";
import { CssResetStyles } from './styles/cssReset.styles';
import { GlobalStyles } from './styles/globalStyles.styles';

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
