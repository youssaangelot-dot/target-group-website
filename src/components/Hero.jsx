import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { language } = useLanguage();
  const t = (key) => {
    // Simple translation getter for hero
    const translations = {
      en: {
        hero: {
          title: "OWN · BUILD · CONNECT",
          subtitle: "Target Group is a diversified conglomerate based in Yaoundé, Cameroon, with global ambitions.",
          btnLearnMore: "Learn More",
          btnContactUs: "Contact Us"
        }
      },
      fr: {
        hero: {
          title: "POSSEDER · CRÉER · CONNECTER",
          subtitle: "Target Group est un conglomérat diversifié basé à Yaoundé, au Cameroun, avec des ambitions mondiales.",
          btnLearnMore: "En Savoir Plus",
          btnContactUs: "Nous Contacter"
        }
      }
    };
    return translations[language]?.hero?.[key] || key;
  };

  return (
    <section className="relative bg-gray-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-gray-100 to-white"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">{t('title')}</h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
            <Link to="/our-businesses" className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium">
              {t('btnLearnMore')}
            </Link>
            <Link to="/contact" className="flex-1 px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-medium">
              {t('btnContactUs')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;