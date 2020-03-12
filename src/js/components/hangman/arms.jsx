import React from 'react';
import PropTypes from 'prop-types';
import { getHangmanColour } from '../../utils/styles';

const Arms = ({ failed }) => (
    <g>
        <path d="M402.967,250.923 C430.004,241.016 462.535,230.768 490.404,223.268"
            fillOpacity="0" stroke={getHangmanColour(failed)} strokeWidth="6"
            strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M316.155,238.083 C345.199,240.918 374.433,244.757 402.967,250.923"
            fillOpacity="0" stroke={getHangmanColour(failed)} strokeWidth="6"
            strokeLinecap="round" strokeLinejoin="round"/>
    </g>
);

Arms.propTypes = {
    failed: PropTypes.bool.isRequired
};

export default Arms;
