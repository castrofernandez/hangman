import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import QueryString from '../utils/querystring';
import languageFilter from './language';
import remainingLettersFilter from './remaining.letters';
import wordFilter from './word';

QueryString.load();

const reducers = (state = {}, action) => {
    return {
        language: languageFilter(state.language, action),
        remaining: remainingLettersFilter(state.remaining, action),
        word: wordFilter(state.word, action)
    };
};

export const store = createStore(reducers, applyMiddleware(thunk));
