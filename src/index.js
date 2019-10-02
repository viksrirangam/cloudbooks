import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './store/store'
import App from './components/App';
// import {getAll} from './actions/index'

const store = appStore();

const template = (
  <Provider store={store}>
    <BrowserRouter>    
      <App />    
    </BrowserRouter>
  </Provider>
);

// store.dispatch(getAll());
render(template, document.getElementById('root'));