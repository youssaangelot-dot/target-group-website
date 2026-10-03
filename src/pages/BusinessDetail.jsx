import { useLanguage } from '../context/LanguageContext';
import { useParams } from 'react-router-dom';

const BusinessDetail = () => {
  const { language } = useLanguage();
  const { slug } = useParams();

  // Load business data based on language
  const enBusinesses = require('../translations/en.json').businesses;
  const frBusinesses = require('../translations/fr.json').businesses;
  const businessesData = language === 'en' ? enBusinesses : frBusinesses;

  const business = businessesData[slug];

  if (!business) {
    return <div>Business not found</div>;
  }

  const t = (key) => {
    const translations = {
      en: {
        businessDetail: {
          backToAll: "Back to All Businesses"
        }
      },
      fr: {
        businessDetail: {
          backToAll: "Retour à toutes les activités"
        }
      }
    };
    return translations[language]?.businessDetail?.[key] || key;
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6">
          <a href="/our-businesses" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            ← {t('backToAll')}
          </a>
        </div>
        <div className="bg-gray-50 rounded-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{business.name}</h1>
          <p className="text-lg text-gray-500 mb-6">{business.tagline}</p>
          <p className="text-gray-600 mb-6">{business.description}</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessDetail;