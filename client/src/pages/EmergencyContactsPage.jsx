import React from 'react';
import { Phone, User, Shield, Hospital } from 'lucide-react';

const ContactCard = ({ name, role, number, icon }) => {
    const Icon = icon;
    return (
        <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-between">
            <div className="flex items-center">
                <div className="p-3 bg-brand-light rounded-full mr-4">
                    <Icon className="text-brand-primary" size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-brand-dark">{name}</h3>
                    <p className="text-gray-500">{role}</p>
                </div>
            </div>
            <a href={`tel:${number}`} className="flex items-center space-x-2 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors">
                <Phone size={16} />
                <span>Call Now</span>
            </a>
        </div>
    );
};

const EmergencyContactsPage = () => {
    // This data can be fetched from your database later
    const contacts = [
        { name: 'Village Head (Pradhan)', role: 'Local Governance', number: '+919876543210', icon: User },
        { name: 'District Magistrate Office', role: 'District Administration', number: '0522-2622255', icon: Shield },
        { name: 'Local Police Station', role: 'Emergency Services', number: '112', icon: Shield },
        { name: 'Community Hospital', role: 'Medical Emergency', number: '108', icon: Hospital },
        { name: 'Ambulance Service', role: 'Medical Transport', number: '102', icon: Hospital },
    ];

    return (
        <div className="p-4 md:p-8 bg-brand-light">
            <div className="container mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-brand-dark mb-2">Emergency Contacts</h1>
                    <p className="text-lg text-gray-600">Quick access to essential services. Stay safe.</p>
                </header>
                <div className="space-y-6 max-w-4xl mx-auto">
                    {contacts.map((contact, index) => (
                        <ContactCard key={index} {...contact} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmergencyContactsPage;
