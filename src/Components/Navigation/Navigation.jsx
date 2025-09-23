import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const [currentPage, setCurrentPage] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home', path: "/" },
    { id: 'offers', label: 'Spaces', path: "/offers" },
    { id: 'features', label: 'Why Choose Us', path: "/features" }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log('Scroll position:', scrollPosition); // Debug log
      setIsScrolled(scrollPosition > 50 ? true : false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const redirect = (path, id) => {
    setCurrentPage(id);
    navigate(path);
  };

  return (
    <nav className={`text-white sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-opacity-90 backdrop-blur-sm' 
        : 'bg-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-amber-400">GH Tower</div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => redirect(item.path, item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-amber-400 text-slate-900'
                      : 'text-gray-300 hover:bg-slate-700 hover:bg-opacity-70 hover:text-white'
                  } ${isScrolled ? 'text-slate-900' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-colors ${
            isScrolled ? 'bg-slate-800 bg-opacity-90 backdrop-blur-sm' : 'bg-slate-800'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setIsMenuOpen(false);
                  redirect(item.path)
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  currentPage === item.id
                    ? 'bg-amber-400 text-slate-900'
                    : 'text-gray-300 hover:bg-slate-700 hover:bg-opacity-70 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation