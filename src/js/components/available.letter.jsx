import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import letterContainer from '../containers/letter.container';

const Letter = styled.a`
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

const getContainedClass = (isContained) => isContained ? 'contained' : '';

const getEnabledClass = (enabled) => enabled ? 'enabled' : 'disabled';

const getFinishedClass = (finished) => finished ? 'finished' : '';

const getClassName = (isContained, enabled, finished) => {
    return `${getContainedClass(isContained)} ${getEnabledClass(enabled)} ${getFinishedClass(finished)}`;
};

const AvailableLetter = ({ letter, word, addLetter, finished }) => {
    const [enabled, setEnabled] = useState(true);
    const isContained = word.split('').includes(letter);

    const onClick = (e) => {
        e.preventDefault();
        setEnabled(false);
        addLetter(letter);
    };

    useEffect(() => {
        setEnabled(true);
    }, [word]);

    return (
        <Letter className={getClassName(isContained, enabled, finished)}
            onClick={finished ? () => {} : onClick}>{ letter }</Letter>
    );
};

AvailableLetter.propTypes = {
    letter: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    addLetter: PropTypes.func.isRequired,
    finished: PropTypes.bool.isRequired
};

export default letterContainer(AvailableLetter);
