import React from 'react';
import PropTypes from 'prop-types';

import Deck from './deck';
import Post from './post';
import Bar from './bar';
import Head from './head';
import Body from './body';
import Arms from './arms';
import Legs from './legs';

const Hangman = ({ failures }) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="500" height="500" viewBox="0, 0, 500, 500">
        <g>
            <Deck failed={failures > 0} />
            <Post failed={failures > 1} />
            <Bar failed={failures > 2} />
            <Arms failed={failures > 5} />
            <Legs failed={failures > 6} />
            <Body failed={failures > 4} />
            <Head failed={failures > 3} />
        </g>
    </svg>
);

Hangman.propTypes = {
    failures: PropTypes.number.isRequired
};

export default Hangman;
