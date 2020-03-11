import en from './en';
import es from './es';

export const languages = { en: 'en', es: 'es' };

export const translations = { en, es };

export const getTranslations = (language = languages.en) => translations[language] || {};
