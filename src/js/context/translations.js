import React from 'react';

import { getTranslations } from '../translations';

const TranslationContext = React.createContext(getTranslations());

export default TranslationContext;
