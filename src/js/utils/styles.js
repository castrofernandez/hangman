const styles = {
    colours: {
        hangman: {
            failed: '#555555',
            notFailed: '#CCCCCC'
        }
    }
};

export default styles;

export const getHangmanColour = (failed = false) => failed ? styles.colours.hangman.failed : styles.colours.hangman.notFailed;
