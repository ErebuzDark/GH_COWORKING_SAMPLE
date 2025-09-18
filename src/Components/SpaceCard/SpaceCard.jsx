import React from 'react'

import { Check } from 'lucide-react';

const SpaceCard = ({ title, description, price, features, image, popular = false }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 relative">
      {popular && (
        <div className="absolute top-4 right-4 bg-amber-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold z-10">
          Most Popular
        </div>
      )}
      <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
        <div className="text-slate-500 text-lg font-medium">{image}</div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-slate-900">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="text-3xl font-bold text-amber-500 mb-6">{price}</div>
        <ul className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <Check size={20} className="text-green-500 mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-semibold transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SpaceCard;