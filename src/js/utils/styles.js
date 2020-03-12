const SELECTED = '#E30535';

const styles = {
    colours: {
        hangman: {
            failed: '#555555',
            notFailed: '#F1F1F1'
        },
        help: '#999999',
        selected: SELECTED,
        guessed: SELECTED,
        notGuessed: '#AAAAAA'
    },
    fonts: {
        default: '"Gloria Hallelujah", cursive',
        title: '"Permanent Marker", cursive'
    }
};

export default styles;

export const getHangmanColour = (failed = false) => {
    return failed ? styles.colours.hangman.failed : styles.colours.hangman.notFailed;
};
