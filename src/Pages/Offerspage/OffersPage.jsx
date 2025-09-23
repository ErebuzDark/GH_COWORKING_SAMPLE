import React from "react";
import { useNavigate } from "react-router-dom";

import SpaceCard from "../../Components/SpaceCard/SpaceCard";

const OffersPage = () => {
  const navigate = useNavigate();
  const spaces = [
    {
      title: "Hot Desk",
      path: "hot-desk",
      description:
        "Perfect for freelancers and remote workers who need flexibility",
      price: "₱1,500/day",
      features: [
        "Shared workspace",
        "High-speed WiFi",
        "Coffee & Tea",
        "Printing access",
        "Community events",
      ],
      image:
        "https://cdn-ilblgal.nitrocdn.com/LtOfWpqsvRVXueIPEGVTBaxpvBAGgdOw/assets/images/optimized/rev-022236d/www.officespacesoftware.com/wp-content/uploads/iStock-1308274885-blog-hero.jpg",
    },
    {
      title: "Private Office",
      path: "private-office",
      description: "Dedicated space for teams and growing businesses",
      price: "₱25,000/month",
      features: [
        "Private room for 2-8 people",
        "24/7 access",
        "Meeting room credits",
        "Storage space",
        "Custom branding",
      ],
      image:
        "https://www.officeevolution.com/wp-content/uploads/2025/02/OE-Arlington-Private-Office-scaled-1.jpg",
      popular: true,
    },
    {
      title: "Meeting Rooms",
      path: "meeting-rooms",
      description: "Professional meeting spaces for important discussions",
      price: "₱800/hour",
      features: [
        "4-12 person capacity",
        "Video conferencing",
        "Whiteboard & projector",
        "Catering options",
        "Professional ambiance",
      ],
      image:
        "https://media.maiortvlift.com/maiormover/uploads/2024/05/tech-meeting-room-1024x538.jpg",
    },
    {
      title: "Event Space",
      path: "event-space",
      description:
        "Host workshops, product launches, or networking events in style",
      price: "₱3,500/hour",
      features: [
        "Up to 50 attendees",
        "AV equipment included",
        "Catering coordination",
        "Flexible seating layouts",
        "On-site support staff",
      ],
      image:
        "https://images.squarespace-cdn.com/content/v1/60da576b8b440e12699c9263/84391c8c-f6a3-415a-988e-ff0534ace4fc/ovation+2.jpg",
    },
    {
      title: "Podcast Studio",
      path: "podcase-studio",
      description: "Record professional-quality audio or video content",
      price: "₱1,200/hour",
      features: [
        "Soundproof booth",
        "High-end microphones",
        "Video recording setup",
        "On-site technician",
        "Editing support available",
      ],
      image:
        "https://img.peerspace.com/image/upload/f_auto,q_auto,dpr_auto,w_3840/lf8hjobaxyeu9swcwms5",
    },
    {
      title: "Day Pass",
      path: "dev-pass",
      description: "Record professional-quality audio or video content",
      price: "₱1,200/hour",
      features: [
        "Soundproof booth",
        "High-end microphones",
        "Video recording setup",
        "On-site technician",
        "Editing support available",
      ],
      image:
        "https://hubble.imgix.net/listings/uploads/spaces/4591/Gracechurch_Street_Coworking_Space_20.jpg?auto=format%2Ccompress&ar=4%3A3&fit=crop&q=30&w=1680",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Choose Your Perfect <span className="text-amber-400">Space</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From flexible hot desks to private offices, find the workspace
            solution that fits your needs and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <SpaceCard key={index} {...space} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 bg-white rounded-2xl p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Need a Custom Solution?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                We offer flexible packages and custom arrangements for larger
                teams, enterprise clients, and unique requirements. Let's
                discuss what works best for you.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Contact Our Team
              </button>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Enterprise Solutions
              </h4>
              <p className="text-gray-600">
                Custom pricing and packages available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
