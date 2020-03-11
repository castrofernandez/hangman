import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import letterContainer from '../containers/letter.container';

const Letter = styled.a`
    display: inline-block;
    font-size: 30px;
    padding: 20px;
    cursor: pointer;

    &.disabled {
        color: gray;
        cursor: default;
    }
`;

const AvailableLetter = ({ letter, addLetter }) => {
    const [enabled, setEnabled] = useState(true);

    const onClick = (e) => {
        e.preventDefault();
        setEnabled(false);
        addLetter(letter);
    };

    return (
        <Letter className={enabled ? 'enabled' : 'disabled'} onClick={onClick}>{ letter }</Letter>
    );
};

AvailableLetter.propTypes = {
    letter: PropTypes.string.isRequired,
    addLetter: PropTypes.func.isRequired
};

export default letterContainer(AvailableLetter);
