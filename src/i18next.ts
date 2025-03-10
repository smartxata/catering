import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';

i18next
.use(initReactI18next)
.use(Backend)
.init({
    debug: true,
    fallbackLng: 'en' 
})