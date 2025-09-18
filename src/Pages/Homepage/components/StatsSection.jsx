import React from 'react'

export default function StatsSection() {
  const stats = [
    { number: '500+', label: 'Happy Members' },
    { number: '24/7', label: 'Access' },
    { number: '15+', label: 'Locations' },
    { number: '99%', label: 'Satisfaction' }
  ];

  return (
    <div className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
