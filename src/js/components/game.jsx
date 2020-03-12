import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TranslationContext from '../context/translations';
import gameContainer from '../containers/game.container';
import WordLetter from './word.letter';
import AvailableLetters from './available.letters';
import Hangman from './hangman/hangman';
import FinishedBar from './finishedBar';

const Board = styled.section`
    display: flex;
    flex-direction: row;
    margin-top: 40px;

    > * {
        flex: 1 1 auto;
    }
`;

const HangManWrapper = styled.div`
    width: 80%;
    margin-right: 20px;
`;

const Word = styled.div`
    display: flex;
    justify-content: center;
`;

const getRandomWord = ({ animals = [] }) => animals[Math.floor(Math.random() * animals.length)];

const Game = ({ language, changeWord, chosen, failures, finished, success }) => {
    const translations = useContext(TranslationContext);
    const [word, setWord] = useState('');

    const onChangeWord = () => {
        const word = getRandomWord(translations.words);
        changeWord(word);
        setWord(word);
    };

    useEffect(onChangeWord, [language]);

    return (
        <React.Fragment>
            <Board>
                <HangManWrapper>
                    <Hangman failures={failures.length} />
                    <FinishedBar finished={finished} success={success} onClick={onChangeWord} />
                </HangManWrapper>
                <AvailableLetters finished={finished} />
            </Board>
            <Word>
                {
                    word.split('').map((letter, index) => (
                        <WordLetter key={index} letter={letter} guessed={chosen.includes(letter)} />)
                    )
                }
            </Word>
        </React.Fragment>
    );
};

Game.propTypes = {
    language: PropTypes.string.isRequired,
    changeWord: PropTypes.func.isRequired,
    chosen: PropTypes.array.isRequired,
    failures: PropTypes.array.isRequired,
    finished: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired
};

export default gameContainer(Game);
