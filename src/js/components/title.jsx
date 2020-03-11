import React, { useContext } from 'react';
import TranslationContext from '../context/translations';

const Title = ({ }) => {
    const translations = useContext(TranslationContext);

    return (
        <h1>{ translations.title }</h1>
    );
};

export default Title;
