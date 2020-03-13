const SELECTED = '#ED0033';

const styles = {
    colours: {
        hangman: {
            failed: '#555555',
            notFailed: '#F1F1F1'
        },
        help: '#BBBBBB',
        selected: SELECTED,
        guessed: SELECTED,
        notGuessed: '#AAAAAA'
    },
    fonts: {
        default: '"Gloria Hallelujah", cursive',
        help: '"Permanent Marker", cursive'
    },
    sizes: {
        mobile: 767,
        bigPhablet: 550,
        tablet: 1023,
        tabletLandscape: 1024,
        smallDesktop: 1300
    }
};

export default styles;

export const getHangmanColour = (failed = false) => {
    return failed ? styles.colours.hangman.failed : styles.colours.hangman.notFailed;
};
