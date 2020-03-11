import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Letter = styled.span`
    font-size: 60px;
    margin: 0 10px;
    border-bottom: 3px solid gray;
`;

const WordLetter = ({ letter, guessed }) => (
    <Letter>{ guessed ? letter : '*' }</Letter>
);

WordLetter.propTypes = {
    letter: PropTypes.string.isRequired,
    guessed: PropTypes.bool
};

export default WordLetter;
