import CONSTANTS from '../constants/actions';

const chosenLettersFilter = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LETTER:
            return [...state, action.letter];
        case CONSTANTS.CHANGE_WORD:
            return [];
        default:
            return state;
    }
};

export default chosenLettersFilter;
