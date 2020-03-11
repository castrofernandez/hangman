import CONSTANTS from '../constants/actions';

export const changeLanguage = (language) => ({
    type: CONSTANTS.CHANGE_LANGUAGE,
    language
});

export const changeWord = (word) => ({
    type: CONSTANTS.CHANGE_WORD,
    word
});

export const addLetter = (letter) => ({
    type: CONSTANTS.ADD_LETTER,
    letter
});
