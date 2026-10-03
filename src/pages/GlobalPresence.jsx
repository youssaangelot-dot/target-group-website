import GlobalPresence from '../components/GlobalPresence';
import { useLanguage } from '../context/LanguageContext';

const GlobalPresencePage = () => {
  const { language } = useLanguage();
  const t = (key) => {
    const translations = {
      en: {
        globalPresence: {
          title: "Global Presence",
          subtitle: "Rooted in Yaoundé, reaching the world"
        }
      },
      fr: {
        globalPresence: {
          title: "Présence Mondiale",
          subtitle: "Ancrée à Yaoundé, tournée vers le monde"
        }
      }
    };
    return translations[language]?.globalPresence?.[key] || key;
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">{t('title')}</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
        <GlobalPresence />
      </div>
    </section>
  );
};

export default GlobalPresencePage;