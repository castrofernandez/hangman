import CONSTANTS from '../constants/actions';

const wordFilter = (state = '', action) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_WORD:
            return action.word;
        default:
            return state;
    }
};

export default wordFilter;
