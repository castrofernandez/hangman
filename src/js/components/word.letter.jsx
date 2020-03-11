import React from 'react';
import PropTypes from 'prop-types';

const WordLetter = ({ letter }) => (
    <React.Fragment>
        <span>*</span>
    </React.Fragment>
);

WordLetter.propTypes = {
    letter: PropTypes.string.isRequired
};

export default WordLetter;
