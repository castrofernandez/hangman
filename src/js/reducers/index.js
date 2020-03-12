import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import QueryString from '../utils/querystring';
import languageFilter from './language';
import remainingLettersFilter from './remaining.letters';
import chosenLettersFilter from './chosen.letters';
import wordFilter from './word';
import finishedFilter from './finished';

QueryString.load();

const reducers = (state = {}, action) => {
    const partial = {
        language: languageFilter(state.language, action),
        remaining: remainingLettersFilter(state.remaining, action),
        chosen: chosenLettersFilter(state.chosen, action),
        word: wordFilter(state.word, action)
    };

    return {
        ...partial,
        ...finishedFilter(partial)
    };
};

export const store = createStore(reducers, applyMiddleware(thunk));
