import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TranslationContext from '../context/translations';
import AvailableLetter from './available.letter';
import STYLES from '../utils/styles';

const ALL_LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Panel = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Help = styled.p`
    margin: 0;
    font-family: ${STYLES.fonts.help};
    font-size: 20px;
    color: ${STYLES.colours.help};
    text-align: right;
    text-transform: lowercase;
`;

const AvailableLetters = ({ finished }) => {
    const translations = useContext(TranslationContext);

    return (
        <section>
            <Help>{ translations.selectLetter }</Help>
            <Panel>
                {
                    ALL_LETTERS.map((letter, index) => (
                        <AvailableLetter key={index} letter={letter} finished={finished} />)
                    )
                }
            </Panel>
        </section>
    );
};

AvailableLetters.propTypes = {
    finished: PropTypes.bool.isRequired
};

export default AvailableLetters;
