import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LANGUAGES from '../constants/languages';
import languageContainer from '../containers/language.container';
import TranslationContext from '../context/translations';

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
`;

const Item = styled.li`
    padding: 10px;
    border-radius: 50%;

    &.active {
        background-color: red;

        a {
            color: white;
        }
    }
`;

const Anchor = styled.a`
    text-decoration: none;
    color: #333;
`;

const onLanguageChange = (changeLanguage, id) => (e) => {
    e.preventDefault();
    changeLanguage(id);
};

const LanguageSelector = ({ language, changeLanguage }) => {
    const translations = useContext(TranslationContext);

    return (
        <React.Fragment>
            <span>{ translations.selectLanguage }</span>
            <List>
                {Object.entries(LANGUAGES).map(([id, name]) => {
                    return (
                        <Item className={id === language ? 'active' : ''} key={id}>
                            <Anchor className=""
                                href={`/?lang=${id}`}
                                title={name}
                                onClick={onLanguageChange(changeLanguage, id)}>
                                {id.toString().toUpperCase()}
                            </Anchor>
                        </Item>
                    );
                })}
            </List>
        </React.Fragment>
    );
};

LanguageSelector.propTypes = {
    changeLanguage: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired
};

export default languageContainer(LanguageSelector);
