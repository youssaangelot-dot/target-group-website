import { useLanguage } from '../context/LanguageContext';
import BusinessCard from './BusinessCard';

const BusinessesSection = () => {
  const { language } = useLanguage();
  // Import the translation files to get business data for the current language
  const enBusinesses = require('../translations/en.json').businesses;
  const frBusinesses = require('../translations/fr.json').businesses;
  const businessesData = language === 'en' ? enBusinesses : frBusinesses;

  const businessList = Object.keys(businessesData).map(key => ({
    slug: key,
    ...businessesData[key]
  }));

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Businesses
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {businessList.map((business) => (
            <BusinessCard key={business.slug} business={business} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessesSection;