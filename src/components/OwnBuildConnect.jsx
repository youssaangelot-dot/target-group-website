import { useLanguage } from '../context/LanguageContext';

const OwnBuildConnect = () => {
  const { language } = useLanguage();
  const t = (key) => {
    const translations = {
      en: {
        ownBuildConnect: {
          title: "Our Strategic Identity",
          own: {
            title: "OWN",
            description: "Own and operate businesses within the Group."
          },
          build: {
            title: "BUILD",
            description: "Identify needs, opportunities and create new businesses, products or services."
          },
          connect: {
            title: "CONNECT",
            description: "Connect clients, Group businesses and external partners (business dev, referrals, partnerships)."
          }
        }
      },
      fr: {
        ownBuildConnect: {
          title: "Notre Identité Stratégique",
          own: {
            title: "POSSEDER",
            description: "Posséder et exploiter des entreprises au sein du Groupe."
          },
          build: {
            title: "CRÉER",
            description: "Identifier les besoins, les opportunités et créer de nouvelles entreprises, produits ou services."
          },
          connect: {
            title: "CONNECTER",
            description: "Connecter les clients, les entreprises du Groupe et les partenaires externes (développement commercial, références, partenariats)."
          }
        }
      }
    };
    return translations[language]?.ownBuildConnect?.[key] || key;
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          {t('title')}
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="mx-auto mb-4 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">{t('own.title')}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('own.title')}</h3>
            <p className="text-gray-600">{t('own.description')}</p>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="mx-auto mb-4 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">{t('build.title')}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('build.title')}</h3>
            <p className="text-gray-600">{t('build.description')}</p>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="mx-auto mb-4 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">{t('connect.title')}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('connect.title')}</h3>
            <p className="text-gray-600">{t('connect.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnBuildConnect;