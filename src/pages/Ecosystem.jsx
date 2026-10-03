import Ecosystem from '../components/Ecosystem';
import { useLanguage } from '../context/LanguageContext';

const EcosystemPage = () => {
  const { language } = useLanguage();
  const t = (key) => {
    const translations = {
      en: {
        ecosystem: {
          title: "The Target Group Ecosystem",
          subtitle: "Where our businesses create value through synergy"
        }
      },
      fr: {
        ecosystem: {
          title: "L'Écosystème du Groupe Target",
          subtitle: "Où nos entreprises créent de la valeur par la synergie"
        }
      }
    };
    return translations[language]?.ecosystem?.[key] || key;
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">{t('title')}</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
        <Ecosystem />
      </div>
    </section>
  );
};

export default EcosystemPage;