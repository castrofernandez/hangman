import React from 'react';
import Reactdom from 'react-dom';
import App from './app.jsx';

import { Provider } from 'react-redux';
import { store } from './reducers/index';

Reactdom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
