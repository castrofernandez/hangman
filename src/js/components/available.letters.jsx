import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TranslationContext from '../context/translations';
import AvailableLetter from './available.letter';

const ALL_LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Panel = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const AvailableLetters = ({ finished }) => {
    const translations = useContext(TranslationContext);

    return (
        <section>
            <p>{ translations.selectLetter }</p>
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
