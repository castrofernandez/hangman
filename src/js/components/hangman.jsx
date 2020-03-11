import React from 'react';
import PropTypes from 'prop-types';

const Hangman = ({ failures }) => (
    <span>hangman {failures}</span>
);

Hangman.propTypes = {
    failures: PropTypes.number.isRequired
};

export default Hangman;
