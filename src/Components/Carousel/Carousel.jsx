import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required modules
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

const defaultImages = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    title: "Modern Workspace",
    description: "Open collaborative spaces with natural lighting and ergonomic furniture",
    badge: "Popular"
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    title: "Coffee Lounge",
    description: "Relaxing break areas with premium coffee and comfortable seating"
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    title: "Private Offices",
    description: "Professional private spaces for focused work and confidential meetings"
  },
  {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    title: "Meeting Rooms",
    description: "State-of-the-art conference rooms with video conferencing capabilities"
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Garden Terrace",
    description: "Outdoor workspace with greenery for fresh air and inspiration"
  }
];

const Carousel = ({ 
  images = defaultImages, 
  autoPlay = true, 
  interval = 4000,
  effect = "slide", // slide, fade, cube, coverflow, flip
  spaceBetween = 30,
  centeredSlides = true,
  loop = true,
  title = "Explore Our Spaces",
  subtitle = "Take a virtual tour of our thoughtfully designed spaces that inspire productivity and collaboration"
}) => {
  const swiperConfig = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween,
    centeredSlides,
    loop,
    autoplay: autoPlay ? {
      delay: interval,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    } : false,
    pagination: {
      clickable: true,
      dynamicBullets: true,
      bulletActiveClass: 'swiper-pagination-bullet-active-custom',
      bulletClass: 'swiper-pagination-bullet-custom',
    },
    navigation: {
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev-custom',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
    speed: 600,
    effect: effect,
    slidesPerView: 1.5,
  };

  return (
    <div className='w-full mx-10 my-20'>

        {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && (
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {title.includes(' ') ? (
                <>
                  {title.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="text-amber-400">{title.split(' ').slice(-1)}</span>
                </>
              ) : (
                <span className="text-amber-400">{title}</span>
              )}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

        <div className="relative max-w-7xl mx-auto h-[400px] rounded-2xl overflow-hidden shadow-lg group">
            <Swiper {...swiperConfig} className="h-full w-full">
                {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                    {/* Image */}
                    <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    
                    {/* Overlay gradient for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Badge */}
                    {image.badge && (
                        <div className="absolute top-4 right-4 bg-amber-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold z-10 animate-pulse">
                        {image.badge}
                        </div>
                    )}

                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300">
                        <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{image.title}</h3>
                        <p className="text-gray-200 text-sm drop-shadow-md leading-relaxed">{image.description}</p>
                    </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="swiper-button-prev-custom absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 backdrop-blur-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            
            <button className="swiper-button-next-custom absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 backdrop-blur-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Custom Styles */}
            <style jsx>{`
                .swiper-pagination-bullet-custom {
                width: 12px;
                height: 12px;
                background: rgba(255, 255, 255, 0.5);
                opacity: 1;
                transition: all 0.3s ease;
                cursor: pointer;
                }
                
                .swiper-pagination-bullet-active-custom {
                background: #fbbf24;
                transform: scale(1.2);
                }
                
                .swiper-pagination-bullet-custom:hover {
                background: rgba(255, 255, 255, 0.8);
                transform: scale(1.1);
                }
                
                .swiper {
                --swiper-pagination-bottom: 16px;
                --swiper-pagination-bullet-size: 12px;
                --swiper-pagination-bullet-horizontal-gap: 6px;
                }
            `}</style>
        </div>
    </div>
   
  );
};

export default Carousel;