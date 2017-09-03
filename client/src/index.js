import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
// import promise from 'redux-promise';

import './style.css';

import App from './components/App.js';
// import registerServiceWorker from './registerServiceWorker';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    // <Provider store={createStoreWithMiddleware(reducers)}>
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
