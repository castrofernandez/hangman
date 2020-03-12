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
`;

const WordLetter = ({ letter, guessed }) => (
    <Letter>{ guessed ? letter : '*' }</Letter>
);

WordLetter.propTypes = {
    letter: PropTypes.string.isRequired,
    guessed: PropTypes.bool
};

export default WordLetter;
