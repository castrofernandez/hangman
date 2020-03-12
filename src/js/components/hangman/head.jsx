import React from 'react';
import PropTypes from 'prop-types';
import { getHangmanColour } from '../../utils/styles';

const Head = ({ failed }) => (
    <g>
        <path d="M394.427,36.102 C395.851,69.657 394.542,86.004 395.444,91.985"
            fillOpacity="0" stroke={getHangmanColour(failed)} strokeWidth="6"
            strokeLinecap="round" strokeLinejoin="round"/>
        <g>
            <path d="M407.131,107.318 C394.427,97.967 366.164,106.419 354.533,122.789
                C330.592,156.487 346.798,199.124 382.786,203.634 C403.092,206.179
                415.127,202.881 429.265,191.725 C464.655,163.801 439.813,107.647
                409.991,100.047" fillOpacity="0" stroke={getHangmanColour(failed)} strokeWidth="6"
            strokeLinecap="round" strokeLinejoin="round"/>
            <g>
                <path d="M368.253,140.988 C372.904,136.552 377.536,132.2 382.944,128.714"
                    fillOpacity="0" stroke={getHangmanColour(failed)} strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M368.484,125.99 C373.585,132.507 378.496,138.576 384.212,143.735"
                    fillOpacity="0" stroke={getHangmanColour(failed)} strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g>
                <path d="M408.279,139.606 C412.229,135.622 415.546,131.201 418.978,126.769"
                    fillOpacity="0" stroke={getHangmanColour(failed)} strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M404.98,126.553 C412.271,130.829 416.686,134.983 423.277,139.837"
                    fillOpacity="0" stroke={getHangmanColour(failed)} strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g>
                <path d="M366.27,172.27 C387.442,170.113 408.619,165.114 429.883,165.442"
                    fillOpacity="0" stroke={getHangmanColour(failed)} strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M399.611,169.943 C405.093,184.954 422.64,181.126 422.858,166.974"
                    fillOpacity="0" stroke={getHangmanColour(failed)} strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </g>
        </g>
    </g>
);

Head.propTypes = {
    failed: PropTypes.bool.isRequired
};

export default Head;
