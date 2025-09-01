import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import HomePage from './pages/HomePage';
import EmergencyContactsPage from './pages/EmergencyContactsPage';
import ForumPage from './pages/ForumPage'; // Corrected import path

// Placeholder pages for future development
const MarketplacePage = () => <div className="p-8 text-center"><h1 className="text-4xl">Marketplace Coming Soon!</h1></div>;
const NewsAndEventsPage = () => <div className="p-8 text-center"><h1 className="text-4xl">News & Events Coming Soon!</h1></div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-light font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/news" element={<NewsAndEventsPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/emergency" element={<EmergencyContactsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

