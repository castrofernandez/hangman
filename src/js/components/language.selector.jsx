import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LANGUAGES from '../constants/languages';
import languageContainer from '../containers/language.container';
import TranslationContext from '../context/translations';
import STYLES from '../utils/styles';

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const Item = styled.li`
    min-width: 53px;
    padding: 8px;
    border-radius: 50%;
    text-align: center;
    text-transform: lowercase;
    border: 3px solid transparent;
    font-weight: bold;

    &.active {
        border-color: ${STYLES.colours.selected};
        
        a {
            color: ${STYLES.colours.selected};
        }
    }
`;

const Anchor = styled.a`
    text-decoration: none;
    color: #333;
`;

const Help = styled.p`
    margin: 0 0 5px 0;
    font-family: ${STYLES.fonts.help};
    text-align: right;
    text-transform: lowercase;
    color: ${STYLES.colours.help};
`;

const onLanguageChange = (changeLanguage, id) => (e) => {
    e.preventDefault();
    changeLanguage(id);
};

const LanguageSelector = ({ language, changeLanguage }) => {
    const translations = useContext(TranslationContext);

    return (
        <React.Fragment>
            <Help>{ translations.selectLanguage }</Help>
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
