// src/components/ServicesList.jsx
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ServiceCard from './ServiceCard';

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Use env variable with fallback to localhost
  const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
  const apiUrl = `${API_BASE}/api/services`;

  // ✅ Stable fetch function
  const fetchServices = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  // ✅ Call fetchServices on component mount
  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  if (loading) {
    return <p className="text-center text-lg mt-8">Loading services...</p>;
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <ServiceCard
            key={service._id}
            name={service.name}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
