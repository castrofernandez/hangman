import React, { useContext } from 'react';
import TranslationContext from '../context/translations';
import styled from 'styled-components';

const TheTitle = styled.h1`
    margin: 0;
    text-align: center;
    font-size: 60px;
    line-height: 40px;
    transform: rotate(-2deg);
`;

const Title = ({ }) => {
    const translations = useContext(TranslationContext);

    return <TheTitle>{ translations.title }</TheTitle>;
};

export default Title;
