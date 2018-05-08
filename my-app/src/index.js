import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers'

const store = applyMiddleware(promise)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>   
        , document.getElementById('root'));
registerServiceWorker();
