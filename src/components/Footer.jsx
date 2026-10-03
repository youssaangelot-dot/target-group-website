import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const t = (key) => {
    // Simple translation getter for footer
    const translations = {
      en: {
        footer: {
          rights: "All rights reserved.",
          privacy: "Privacy Policy",
          terms: "Terms of Service"
        }
      },
      fr: {
        footer: {
          rights: "Tous droits réservés.",
          privacy: "Politique de Confidentialité",
          terms: "Conditions Générales"
        }
      }
    };
    return translations[language]?.footer?.[key] || key;
  };

  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-500">{t('rights')} © {new Date().getFullYear()} TARGET GROUP</p>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row sm:space-x-4">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              {t('privacy')}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              {t('terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;