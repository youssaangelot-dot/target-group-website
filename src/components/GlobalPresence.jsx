import { useLanguage } from '../context/LanguageContext';

const GlobalPresence = () => {
  const { language } = useLanguage();
  const t = (key) => {
    const translations = {
      en: {
        globalPresence: {
          title: "Global Presence",
          subtitle: "Rooted in Yaoundé, reaching the world",
          description: "While headquartered in Yaoundé, Cameroon, Target Group operates with a global mindset, serving international clients and exploring opportunities worldwide.",
          headquarters: "Headquarters",
          internationalReach: "International Reach",
          investorCredibility: "Investor & Partner Credibility"
        }
      },
      fr: {
        globalPresence: {
          title: "Présence Mondiale",
          subtitle: "Ancrée à Yaoundé, tournée vers le monde",
          description: "Bien que basée à Yaoundé, au Cameroun, Target Group opère avec une mentalité mondiale, desservant des clients internationaux et explorant des opportunités dans le monde entier.",
          headquarters: "Siège Social",
          internationalReach: "Portée Internationale",
          investorCredibility: "Crédibilité Auprès des Investisseurs & Partenaires"
        }
      }
    };
    return translations[language]?.globalPresence?.[key] || key;
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t('title')}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{t('description')}</p>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="mx-auto mb-4 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">🏢</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('headquarters')}</h3>
            <p className="text-gray-600">Yaoundé, Cameroon</p>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="mx-auto mb-4 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">🌍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('internationalReach')}</h3>
            <p className="text-gray-600">Serving clients across Africa, Europe, and North America with expanding global footprint.</p>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="mx-auto mb-4 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">💎</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('investorCredibility')}</h3>
            <p className="text-gray-600">Transparent governance, sustainable practices, and proven track record build trust with investors and partners.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;