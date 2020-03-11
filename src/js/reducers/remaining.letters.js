import CONSTANTS from '../constants/actions';

const remainingLettersFilter = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_WORD:
            return action.word.split('');
        case CONSTANTS.ADD_LETTER:
            return state.filter((letter) => letter !== action.letter);
        default:
            return state;
    }
};

export default remainingLettersFilter;
