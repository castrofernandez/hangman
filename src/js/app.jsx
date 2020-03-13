import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './components/header';
import TranslationContext from './context/translations';
import Title from './components/title';
import { getTranslations } from './translations';
import languageContainer from './containers/language.container';

const Wrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`;

const App = ({ language }) => (
    <TranslationContext.Provider value={getTranslations(language)}>
        <Wrapper>
            <Header />
            <Title />
        </Wrapper>
    </TranslationContext.Provider>
);

App.propTypes = {
    language: PropTypes.string.isRequired
};

export default languageContainer(App);
