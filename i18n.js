import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        locationPlaceholder: 'e.g. town or postcode',
        locationLabel: 'Location',
        loading: 'Loading...',
        jobTitlePlaceholder: 'e.g. Sales Executive',
        jobTitleLabel: 'Keywords / Job Title / Job Ref',
        searchButtonLabel: 'Find jobs now',
        distanceLabel: 'Distance',
        jobsByLocationTabLabel: 'Jobs by Location',
        jobsByIndustryTabLabel: 'Jobs by Industry'
      },
    },
    fr: {
      translation: {
        locationPlaceholder: 'par exemple. ville ou code postal',
        locationLabel: 'Emplacement',
        loading: 'Chargement...',
        jobTitlePlaceholder: 'par exemple. Directeur des ventes',
        jobTitleLabel: "Titre d'emploi",
        searchButtonLabel: 'Trouvez un emploi maintenant',
        distanceLabel: 'Distance',
        jobsByLocationTabLabel: 'Emplois par emplacement',
        jobsByIndustryTabLabel: 'Emplois par secteur'
      },
    },
  },
  lng: 'en-GB', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
