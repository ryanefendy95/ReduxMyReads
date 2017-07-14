import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import './index.css'

const createStoreWithMiddleware = applyMiddleware()(createStore);

// connect store to redux
ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <App />
</Provider>, document.getElementById('root'));
