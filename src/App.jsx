import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FilmmakerPage from './pages/FilmmakerPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#121212] text-[#f2f2f2] film-grain flex flex-col selection:bg-[#FFC400] selection:text-black">
      <Navbar />

      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/filmmaker" element={<FilmmakerPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </PageTransition>

      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
      <Footer onPrivacyClick={() => setShowPrivacy(true)} />
    </div>
  );
}
