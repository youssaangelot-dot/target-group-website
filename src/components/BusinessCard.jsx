import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const BusinessCard = ({ business }) => {
  const { language } = useLanguage();
  const t = (key) => {
    // We'll pass the business data already translated? Actually we'll pass the business object with the current language.
    // For simplicity, we assume the business object has the correct language.
    // But we can also use the hook to get translations for static parts.
    // We'll just use the business object passed.
    return business[key] || key;
  };

  return (
    <Link to={`/business/${business.slug}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow border">
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900">{business.name}</h3>
            <p className="mt-2 text-sm text-gray-500">{business.tagline}</p>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-3">{business.description}</p>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <span className="text-sm font-medium text-gray-900">Learn more →</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BusinessCard;