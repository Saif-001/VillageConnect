// src/components/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ name, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;