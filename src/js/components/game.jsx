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
    position: relative;
`;

const BoardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    opacity: ${props => props.finished ? '0.5' : '1'};

    > * {
        flex: 1 1 auto;
    }
`;

const HangManWrapper = styled.div`
    width: 80%;
    margin-right: 20px;
    padding-top: 45px;
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
        let newWord = getRandomWord(translations.words);

        while (newWord === word) {
            newWord = getRandomWord(translations.words);
        }

        changeWord(newWord);
        setWord(newWord);
    };

    useEffect(onChangeWord, [language]);

    return (
        <React.Fragment>
            <Board>
                <BoardWrapper finished={finished}>
                    <HangManWrapper>
                        <Hangman failures={failures.length} />
                    </HangManWrapper>
                    <AvailableLetters finished={finished} />
                </BoardWrapper>
                <FinishedBar finished={finished} success={success} onClick={onChangeWord} />
            </Board>
            <Word>
                {
                    word.split('').map((letter, index) => (
                        <WordLetter key={index} letter={letter}
                            guessed={chosen.includes(letter)} finished={finished} />)
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
