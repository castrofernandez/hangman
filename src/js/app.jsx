import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/header';
import TranslationContext from './context/translations';
import Title from './components/title';
import { getTranslations } from './translations';
import languageContainer from './containers/language.container';
import Game from './components/game';

const App = ({ language }) => (
    <TranslationContext.Provider value={getTranslations(language)}>
        <Header />
        <Title />
        <Game />
    </TranslationContext.Provider>
);

App.propTypes = {
    language: PropTypes.string.isRequired
};

export default languageContainer(App);
