import en from './en';
import es from './es';
import cat from './cat';
import pt from './pt';
import ast from './ast';

export const languages = { en: 'en', es: 'es', cat: 'cat', pt: 'pt', ast: 'ast' };

export const translations = { en, es, cat, pt, ast };

export const getTranslations = (language = languages.en) => translations[language] || {};
