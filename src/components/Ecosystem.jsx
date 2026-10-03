import { useLanguage } from '../context/LanguageContext';

const Ecosystem = () => {
  const { language } = useLanguage();
  const t = (key) => {
    const translations = {
      en: {
        ecosystem: {
          title: "The Target Group Ecosystem",
          subtitle: "Where our businesses create value through synergy",
          description: "Through the CONNECT function, Target Group facilitates collaboration between its businesses, clients, and partners, creating a virtuous cycle of growth and innovation.",
          synergy: "Synergy",
          partnerships: "Partnerships",
          businessDevelopment: "Business Development"
        }
      },
      fr: {
        ecosystem: {
          title: "L'Écosystème du Groupe Target",
          subtitle: "Où nos entreprises créent de la valeur par la synergie",
          description: "Grâce à la fonction CONNECTER, Target Group facilite la collaboration entre ses entreprises, ses clients et ses partenaires, créant un cercle vertueux de croissance et d'innovation.",
          synergy: "Synergie",
          partnerships: "Partenariats",
          businessDevelopment: "Développement Commercial"
        }
      }
    };
    return translations[language]?.ecosystem?.[key] || key;
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t('title')}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{t('description')}</p>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="mx-auto mb-4 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">🔄</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('synergy')}</h3>
            <p className="text-gray-600">Our businesses leverage shared resources, knowledge, and capabilities to create greater value together than they could individually.</p>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="mx-auto mb-4 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('partnerships')}</h3>
            <p className="text-gray-600">We actively seek and nurture partnerships with external organizations to expand our reach and capabilities.</p>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="mx-auto mb-4 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">📈</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('businessDevelopment')}</h3>
            <p className="text-gray-600">Our dedicated team identifies and develops new business opportunities across our portfolio and beyond.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;