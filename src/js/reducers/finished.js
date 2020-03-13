import CONSTANTS from '../utils/constants';

const failuresFilter = ({ word = '', chosen = [], remaining = [] }) => {
    const failures = chosen.filter((letter) => !word.includes(letter));
    const guessed = remaining.length === 0;
    const finished = failures.length >= CONSTANTS.failureNumber || guessed;

    return {
        failures,
        finished
    };
};

export default failuresFilter;
