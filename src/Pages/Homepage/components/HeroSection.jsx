import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
    const navigate = useNavigate();
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your <span className="text-amber-400">Perfect</span>
            <br />
            Workspace Awaits
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Premium coworking spaces, private offices, and meeting rooms designed for professionals who demand excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button  onClick={() => navigate("/offers")}className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center">
              Explore Spaces <ArrowRight className="ml-2" size={20} />
            </button>
            <button onClick={() => navigate("/contact")} className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
