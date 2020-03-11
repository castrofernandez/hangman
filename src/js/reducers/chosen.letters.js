import CONSTANTS from '../constants/actions';

const chosenLettersFilter = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LETTER:
            return [...state, action.letter];
        default:
            return state;
    }
};

export default chosenLettersFilter;
