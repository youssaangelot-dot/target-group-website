import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

const ContactForm = () => {
  const { language } = useLanguage();
  const t = (key) => {
    const translations = {
      en: {
        contact: {
          form: {
            name: "Full Name",
            email: "Email Address",
            subject: "Subject",
            message: "Your Message",
            submit: "Send Message",
            success: "Your message has been sent successfully!",
            error: "There was an error sending your message. Please try again."
          }
        }
      },
      fr: {
        contact: {
          form: {
            name: "Nom Complet",
            email: "Adresse E-mail",
            subject: "Objet",
            message: "Votre Message",
            submit: "Envoyer le Message",
            success: "Votre message a été envoyé avec succès !",
            error: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer."
          }
        }
      }
    };
    return translations[language]?.contact?.form?.[key] || key;
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate API call
    setTimeout(() => {
      // In a real app, you would send this data to a backend
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitMessage(t('success'));
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          {t('name')}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 pl-4"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          {t('email')}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 pl-4"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          {t('subject')}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 pl-4"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          {t('message')}
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 pl-4"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 ${
          isSubmitting ? 'animate-pulse' : ''
        }`}
      >
        {isSubmitting ? 'Sending...' : t('submit')}
      </button>
      {submitMessage && (
        <p className={`mt-4 text-sm ${submitMessage === t('success') ? 'text-green-600' : 'text-red-600'}`}>
          {submitMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;