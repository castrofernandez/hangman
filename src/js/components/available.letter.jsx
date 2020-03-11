import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import letterContainer from '../containers/letter.container';

const Letter = styled.a`
    box-sizing: border-box;
    display: inline-block;
    font-size: 30px;
    padding: 10px;
    margin: 4px;
    cursor: pointer;
    border: 3px solid transparent;
    border-radius: 50%;
    min-width: 60px;
    text-align: center;

    &.disabled {
        color: gray;
        cursor: default;
        border-color: gray;
        text-decoration: line-through;

        &.contained {
            border-color: red;
            text-decoration: none;
        }
    }
`;

const AvailableLetter = ({ letter, word, addLetter }) => {
    const [enabled, setEnabled] = useState(true);
    const isContained = word.split('').includes(letter);

    const onClick = (e) => {
        e.preventDefault();
        setEnabled(false);
        addLetter(letter);
    };

    return (
        <Letter className={`${isContained ? 'contained' : ''} ${enabled ? 'enabled' : 'disabled'}`}
            onClick={onClick}>{ letter }</Letter>
    );
};

AvailableLetter.propTypes = {
    letter: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    addLetter: PropTypes.func.isRequired
};

export default letterContainer(AvailableLetter);
