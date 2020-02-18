import querystringme from 'querystringme';

import { DEFAULT_LANGUAGE, LANGUAGE_IDS } from '../constants/languages';

const load = () => {
    querystringme.load({
        localStorage: true,
        defaultValues: {
            language: {
                default: DEFAULT_LANGUAGE,
                validator: v => LANGUAGE_IDS.includes(v)
            }
        }
    });
};

export default {
    load
};
