import ContactForm from '../components/ContactForm';
import { useLanguage } from '../context/LanguageContext';

const ContactPage = () => {
  const { language } = useLanguage();
  const t = (key) => {
    const translations = {
      en: {
        contact: {
          title: "Contact Us",
          subtitle: "Get in touch for inquiries, partnerships, or business opportunities"
        }
      },
      fr: {
        contact: {
          title: "Contactez-Nous",
          subtitle: "Prenez contact pour des demandes, des partenariats ou des opportunités commerciales"
        }
      }
    };
    return translations[language]?.contact?.[key] || key;
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">{t('title')}</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;