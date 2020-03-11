import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Letter = styled.span`
    display: inline-block;
    font-size: 30px;
    padding: 20px;
`;

const AvailableLetter = ({ letter }) => {
    return (
        <Letter>{ letter }</Letter>
    );
};

AvailableLetter.propTypes = {
    letter: PropTypes.string.isRequired
};

export default AvailableLetter;
