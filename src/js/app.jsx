import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/header.jsx';
import TranslationContext from './context/translations';
import Title from './components/title.jsx';
import { getTranslations } from './translations';
import languageContainer from './containers/language.container';

const App = ({ language }) => (
    <TranslationContext.Provider value={getTranslations(language)}>
        <Header />
        <Title />
    </TranslationContext.Provider>
);

App.propTypes = {
    language: PropTypes.string.isRequired
};

export default languageContainer(App);
