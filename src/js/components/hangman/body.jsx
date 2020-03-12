import React from 'react';
import PropTypes from 'prop-types';
import { getHangmanColour } from '../../utils/styles';

const Body = ({ failed }) => (
    <path d="M399.518,206.006 C398.287,242.35 410.344,291.392 409.809,326.038"
        fillOpacity="0" stroke={getHangmanColour(failed)} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
);

Body.propTypes = {
    failed: PropTypes.bool.isRequired
};

export default Body;
