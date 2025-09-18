import React from 'react'
import FeatureCard from '../../Components/FeatureCard/FeatureCard';


// icons
import { MapPin, Users, Wifi, Coffee, Shield, Clock, Star } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Strategically located in the heart of business districts with easy access to transportation, restaurants, and amenities."
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Work on your schedule with round-the-clock access to your workspace, because great ideas don't keep business hours."
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Enterprise-grade fiber internet with 99.9% uptime guarantee, because your connection should never be the bottleneck."
    },
    {
      icon: Coffee,
      title: "Premium Amenities",
      description: "From barista-quality coffee to ergonomic furniture, every detail is designed to enhance your productivity and comfort."
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description: "Join a network of entrepreneurs, freelancers, and professionals. Regular networking events and workshops included."
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "State-of-the-art security systems, controlled access, and privacy options to keep your business safe and confidential."
    }
  ];

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Why Choose <span className="text-amber-400">GH Tower</span>?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another coworking space. We're your partner in success, 
            providing everything you need to thrive in today's dynamic business environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlight={index === 1 || index === 4}
            />
          ))}
        </div>
        
        {/* Testimonial Section */}
        <div className="bg-slate-900 rounded-3xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} className="text-amber-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-light mb-8 italic">
              "GH Tower transformed the way our team works. The environment is inspiring, 
              the community is supportive, and the amenities are world-class. It's more than 
              a workspace - it's where our business truly began to thrive."
            </blockquote>
            <div className="text-lg">
              <div className="font-semibold">Sarah Chen</div>
              <div className="text-amber-400">CEO, InnovateTech Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;