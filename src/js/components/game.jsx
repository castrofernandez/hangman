import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TranslationContext from '../context/translations';
import gameContainer from '../containers/game.container';
import WordLetter from './word.letter';
import AvailableLetters from './available.letters';
import STYLES from '../utils/styles';

const Board = styled.section`
    position: relative;
`;

const BoardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    opacity: ${props => props.finished ? '0.5' : '1'};

    @media (max-width: ${STYLES.sizes.tablet}px) {
        display: block;
    } 

    > * {
        flex: 1 1 auto;
    }
`;

const Word = styled.div`
    display: flex;
    justify-content: center;
`;

const getRandomWord = ({ animals = [] }) => animals[Math.floor(Math.random() * animals.length)];

const Game = ({ language, changeWord, chosen, finished }) => {
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
                    <AvailableLetters finished={finished} />
                </BoardWrapper>
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
    finished: PropTypes.bool.isRequired
};

export default gameContainer(Game);
