import React from 'react'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import Carousel from '../../Components/Carousel/Carousel';
import FeatureCard from '../../Components/FeatureCard/FeatureCard';

import { Users, Wifi, Shield } from 'lucide-react';

export default function Homepage() {
  return (
   <div>
      <HeroSection />
      <StatsSection />
    <Carousel />
      
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Where Innovation Meets Comfort
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a community of forward-thinking professionals in our thoughtfully designed spaces
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Users}
              title="Community Driven"
              description="Connect with like-minded professionals and grow your network in our vibrant community spaces."
            />
            <FeatureCard
              icon={Wifi}
              title="Premium Amenities"
              description="High-speed internet, modern furniture, and all the tools you need to stay productive."
              highlight={true}
            />
            <FeatureCard
              icon={Shield}
              title="Secure & Safe"
              description="24/7 security, controlled access, and a safe environment for you and your belongings."
            />
          </div>
        </div>
      </div>
    </div>
  )
}
