import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import TranslationContext from '../context/translations';
import languageContainer from '../containers/language.container';
import WordLetter from './word.letter';
import AvailableLetters from './available.letters';

const getRandomWord = ({ animals = [] }) => animals[Math.floor(Math.random() * animals.length)];

const Game = ({ language }) => {
    const translations = useContext(TranslationContext);
    const [word, setWord] = useState(getRandomWord(translations.words));

    useEffect(() => {
        setWord(getRandomWord(translations.words));
    }, [language]);

    return (
        <section>
            game
            <p>{ word }</p>
            {
                word.split('').map((letter, index) => <WordLetter key={index} letter={letter} />)
            }
            <AvailableLetters />
        </section>
    );
};

Game.propTypes = {
    language: PropTypes.string.isRequired
};

export default languageContainer(Game);
