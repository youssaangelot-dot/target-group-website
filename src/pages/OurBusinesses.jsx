import BusinessesSection from '../components/BusinessesSection';
import { useLanguage } from '../context/LanguageContext';

const OurBusinesses = () => {
  const { language } = useLanguage();
  const t = (key) => {
    const translations = {
      en: {
        ourBusinesses: {
          title: "Our Businesses",
          subtitle: "Discover the diverse portfolio of Target Group"
        }
      },
      fr: {
        ourBusinesses: {
          title: "Nos Activités",
          subtitle: "Découvrez le portefeuille diversifié du Groupe Target"
        }
      }
    };
    return translations[language]?.ourBusinesses?.[key] || key;
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">{t('title')}</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
        <BusinessesSection />
      </div>
    </section>
  );
};

export default OurBusinesses;