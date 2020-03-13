import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import QueryString from '../utils/querystring';

QueryString.load();

const reducers = (state = {}, action) => {
    return {

    };
};

export const store = createStore(reducers, applyMiddleware(thunk));
