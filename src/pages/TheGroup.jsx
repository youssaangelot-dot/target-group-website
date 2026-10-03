import { useLanguage } from '../context/LanguageContext';
import OwnBuildConnect from '../components/OwnBuildConnect';

const TheGroup = () => {
  const { language } = useLanguage();
  const t = (key) => {
    const translations = {
      en: {
        theGroup: {
          title: "The Group",
          subtitle: "Vision, Mission, and Strategic Identity",
          visionTitle: "Vision",
          visionText: "To be a leading diversified conglomerate with global impact, creating sustainable value for stakeholders through innovation, excellence, and responsible growth.",
          missionTitle: "Mission",
          missionText: "To own, build, and connect businesses that address critical needs and opportunities, fostering economic development and social progress in our communities and beyond.",
          ownBuildConnectTitle: "Our Strategic Identity: OWN · BUILD · CONNECT"
        }
      },
      fr: {
        theGroup: {
          title: "Le Groupe",
          subtitle: "Vision, Mission et Identité Stratégique",
          visionTitle: "Vision",
          visionText: "Être un conglomérat diversifié de premier plan avec un impact mondial, créant une valeur durable pour les parties prenantes grâce à l'innovation, l'excellence et une croissance responsable.",
          missionTitle: "Mission",
          missionText: "Posséder, créer et connecter des entreprises qui répondent à des besoins et des opportunités critiques, favorisant le développement économique et le progrès social dans nos communautés et au-delà.",
          ownBuildConnectTitle: "Notre Identité Stratégique : POSSEDER · CRÉER · CONNECTER"
        }
      }
    };
    return translations[language]?.theGroup?.[key] || key;
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">{t('title')}</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('visionTitle')}</h2>
            <p className="text-gray-600">{t('visionText')}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('missionTitle')}</h2>
            <p className="text-gray-600">{t('missionText')}</p>
          </div>
        </div>
        <OwnBuildConnect className="mt-16" />
      </div>
    </section>
  );
};

export default TheGroup;