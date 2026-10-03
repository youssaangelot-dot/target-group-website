import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TheGroup from './pages/TheGroup';
import OurBusinesses from './pages/OurBusinesses';
import Ecosystem from './pages/Ecosystem';
import GlobalPresence from './pages/GlobalPresence';
import Contact from './pages/Contact';
import BusinessDetail from './pages/BusinessDetail';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white text-gray-900">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/the-group" element={<TheGroup />} />
              <Route path="/our-businesses" element={<OurBusinesses />} />
              <Route path="/our-businesses/:slug" element={<BusinessDetail />} />
              <Route path="/ecosystem" element={<Ecosystem />} />
              <Route path="/global-presence" element={<GlobalPresence />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;