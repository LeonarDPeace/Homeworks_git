import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App.jsx';
import { Provider } from 'react-redux'
import {store } from './store/store.jsx';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)