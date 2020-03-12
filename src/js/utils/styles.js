const styles = {
    colours: {
        hangman: {
            failed: '#555555',
            notFailed: '#EEEEEE'
        }
    }
};

export default styles;

export const getHangmanColour = (failed = false) => {
    return failed ? styles.colours.hangman.failed : styles.colours.hangman.notFailed;
};
