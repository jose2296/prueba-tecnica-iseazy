import en from '@assets/i18n/en.json';
import es from '@assets/i18n/es.json';
import { LOCAL_STORAGE_KEY } from '@shared/store/user-settings-store';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    'en': { translation: en },
    'es': { translation: es },
};
const defaultLanguage: string = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{ "state": { "language": "en"}}')?.state?.language || 'en' as string;
const lng = Object.keys(resources).includes(defaultLanguage) ? defaultLanguage : 'en';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
