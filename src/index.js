import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './components/App'
import combinedReducers from './reducers'
import appliedMiddlwares from './middlewares'
import { BrowserRouter } from 'react-router-dom'
const store = createStore(combinedReducers, appliedMiddlwares);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

