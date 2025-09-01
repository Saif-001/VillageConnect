import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Newspaper, Phone, MessageSquare, Megaphone } from 'lucide-react';

// A reusable card component for the dashboard grid
const FeatureCard = ({ to, icon, title, description, color }) => {
  const Icon = icon;
  return (
    <Link to={to} className={`block p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ${color}`}>
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-white/30 rounded-full">
          <Icon className="text-white" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>
      </div>
    </Link>
  );
};

const HomePage = () => {
  // Mock data for announcements - this can be fetched from an API later
  const announcements = [
    { id: 1, text: "Weekly market will be held on Sunday at 9 AM near the community hall.", icon: Megaphone },
    { id: 2, text: "Free health check-up camp on September 5th at the primary school.", icon: Megaphone },
  ];

  return (
    <div className="p-4 md:p-8 bg-brand-light">
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-2">Welcome to VillageConnect</h1>
          <p className="text-lg text-gray-600">Your one-stop portal for all community information and services.</p>
        </header>
        
        {/* Announcements Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 border-l-4 border-brand-primary pl-3">Announcements</h2>
          <div className="space-y-3">
            {announcements.map(announcement => (
              <div key={announcement.id} className="flex items-center p-4 bg-white rounded-lg shadow animate-pulse-slow">
                <Megaphone className="text-brand-secondary mr-4" size={24} />
                <p className="text-gray-700">{announcement.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <FeatureCard 
            to="/marketplace" 
            icon={ShoppingCart} 
            title="Local Marketplace" 
            description="Buy and sell goods within the village." 
            color="bg-gradient-to-br from-blue-500 to-blue-600"
          />
          <FeatureCard 
            to="/news" 
            icon={Newspaper} 
            title="News & Events" 
            description="Stay updated with the latest happenings." 
            color="bg-gradient-to-br from-green-500 to-green-600"
          />
          <FeatureCard 
            to="/forum" 
            icon={MessageSquare} 
            title="Community Forum" 
            description="Discuss and share with your neighbors." 
            color="bg-gradient-to-br from-yellow-500 to-yellow-600"
          />
          <FeatureCard 
            to="/emergency" 
            icon={Phone} 
            title="Emergency Contacts" 
            description="Quick access to important numbers." 
            color="bg-gradient-to-br from-red-500 to-red-600"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
