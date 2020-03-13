import React, { useContext } from 'react';
import TranslationContext from '../context/translations';
import styled from 'styled-components';
import STYLES from '../utils/styles';

const TheTitle = styled.h1`
    margin: 0;
    text-align: center;
    font-size: 80px;
    line-height: 40px;
    transform: rotate(-2deg);
    text-transform: lowercase;

    @media (max-width: ${STYLES.sizes.tablet}px) {
        margin-top: 30px;
    } 
`;

const Title = () => {
    const translations = useContext(TranslationContext);

    return <TheTitle>{ translations.title }</TheTitle>;
};

export default Title;
