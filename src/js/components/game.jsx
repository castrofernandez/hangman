import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import TranslationContext from '../context/translations';
import gameContainer from '../containers/game.container';
import WordLetter from './word.letter';
import AvailableLetters from './available.letters';

const getRandomWord = ({ animals = [] }) => animals[Math.floor(Math.random() * animals.length)];

const Game = ({ language, changeWord }) => {
    const translations = useContext(TranslationContext);
    const [word, setWord] = useState('');

    const onChangeWord = () => {
        const word = getRandomWord(translations.words);
        changeWord(word);
        setWord(word);
    };

    useEffect(onChangeWord, [language]);

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
    language: PropTypes.string.isRequired,
    changeWord: PropTypes.func.isRequired
};

export default gameContainer(Game);
