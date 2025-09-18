import React from 'react'

const FeatureCard = ({ icon: Icon, title, description, highlight = false }) => {
   return (
    <div className={`p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 ${
      highlight 
        ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-slate-900 shadow-2xl' 
        : 'bg-white shadow-lg hover:shadow-xl'
    }`}>
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
        highlight ? 'bg-white bg-opacity-20' : 'bg-slate-100'
      }`}>
        <Icon size={32} className={highlight ? 'text-slate-900' : 'text-slate-700'} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className={`text-lg ${highlight ? 'text-slate-800' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
