import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import setupAppconfig from './setup-app-config'
import { StoreProvider } from '@/store'
import App from './App'

import './antd.theme.less'

setupAppconfig(() => {
  ReactDOM.render(
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root')
  )
})
