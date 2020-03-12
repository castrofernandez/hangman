import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import STYLES from '../utils/styles';

const Letter = styled.span`
    font-size: 80px;
    line-height: 85px;
    margin: 0 10px;
    border-bottom: 5px solid ${STYLES.colours.help};
    padding-bottom: 15px;

    &.finished.not-guessed {
        color: ${STYLES.colours.selected};
    }
`;

const getClassName = (guessed, finished) => {
    return `${guessed ? 'guessed' : 'not-guessed'} ${finished ? 'finished' : 'not-finished'}`;
};

const WordLetter = ({ letter, guessed, finished }) => (
    <Letter className={getClassName(guessed, finished)}>
        { guessed || finished ? letter : '*' }
    </Letter>
);

WordLetter.propTypes = {
    letter: PropTypes.string.isRequired,
    guessed: PropTypes.bool,
    finished: PropTypes.bool
};

export default WordLetter;
