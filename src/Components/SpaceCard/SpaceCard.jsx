import React from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const SpaceCard = ({
  title,
  path,
  description,
  price,
  features,
  image,
  popular = false,
}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative max-w-2xl mx-auto">
      {popular && (
        <div className="absolute top-4 left-4 bg-amber-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold z-10">
          Most Popular
        </div>
      )}

      {/* Cover Image */}
      <div className="h-72 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-slate-900">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="text-3xl font-bold text-amber-500 mb-6">{price}</div>

        <ul className="space-y-2 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-700">
              <Check size={20} className="text-green-500 mr-3" />
              {feature}
            </li>
          ))}
        </ul>

        <button onClick={() => navigate(`/space-details/${path}`)} className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-semibold transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SpaceCard;
