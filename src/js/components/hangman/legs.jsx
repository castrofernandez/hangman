import React from 'react';
import PropTypes from 'prop-types';
import { getHangmanColour } from '../../utils/styles';

const Legs = ({ failed }) => (
    <g>
        <path d="M409.809,326.037 C387.47,342.968 362.667,383.368 343.454,402.755"
            fillOpacity="0" stroke={getHangmanColour(failed)} strokeWidth="6"
            strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M409.809,326.037 C432.496,342.053 465.899,401.532 488.503,411.353"
            fillOpacity="0" stroke={getHangmanColour(failed)} strokeWidth="6"
            strokeLinecap="round" strokeLinejoin="round"/>
    </g>
);

Legs.propTypes = {
    failed: PropTypes.bool.isRequired
};

export default Legs;
