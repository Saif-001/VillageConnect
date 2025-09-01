import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">VillageConnect</h3>
            <p className="text-gray-400">
              Connecting our community, one click at a time. Empowering our village with technology.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="hover:text-brand-primary transition-colors">Marketplace</Link></li>
              <li><Link to="/news" className="hover:text-brand-primary transition-colors">News & Events</Link></li>
              <li><Link to="/forum" className="hover:text-brand-primary transition-colors">Forum</Link></li>
              <li><Link to="/emergency" className="hover:text-brand-primary transition-colors">Emergency</Link></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Village Office, Lucknow, Uttar Pradesh</p>
            <p className="text-gray-400">Email: contact@villageconnect.info</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} VillageConnect. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
