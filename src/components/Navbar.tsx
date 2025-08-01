import { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);
  const location = useLocation();

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Paint Variety', path: '/paint-variety' },
    { name: 'Decor Ideas', path: '/decor-ideas' },
    { name: 'Latest Trends', path: '/latest-trends' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const cityPages = [
    { name: 'Pune', path: '/pune' },
    { name: 'Mumbai', path: '/mumbai' },
    { name: 'Kolkata', path: '/kolkata' },
    { name: 'Hyderabad', path: '/hyderabad' },
    { name: 'Vizag', path: '/vizag' },
    { name: 'Bangalore', path: '/bangalore' },
    { name: 'Indore', path: '/indore'},
    { name: 'Raipur', path: '/raipur'}
  ];

  const supportPages = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Pricing Policy', path: '/pricing-policy' },
    { name: 'Refund Policy', path: '/refund-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
  ];

  const isActiveRoute = (path: string) => location.pathname === path;

  const handleWhatsApp = () => {
    window.open('https://wa.me/919630009838?text=Hello%20Painter%20Babu,%20I%20would%20like%20to%20inquire%20about%20your%20services.', '_blank');
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#624992] text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-3 h-3 mr-1" />
              <span>+91 9630009838</span>
            </div>
          </div>
          <button 
            onClick={handleWhatsApp}
            className="btn-gold text-black/80 text-xs py-2 shadow-md shadow-black/20 font-bold px-3 hover:scale-105"
          >
            Quick Enquiry
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-elegant">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
                <Link to="/" className="flex items-center">
                  <img 
                    src="/logo.png"  // or .svg or .jpg as per your actual file
                    alt="Painter Babu Logo"
                    className="h-12 w-auto"
                  />
                </Link>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium transition-colors duration-300 hover:text-yellow-700 ${
                    isActiveRoute(item.path) ? 'text-secondary' : 'text-red-600'
                  }`}
                >
                  {item.name}
                  {isActiveRoute(item.path) && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-600 rounded-full" />
                  )}
                </Link>
              ))}
              
              {/* Cities Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsCitiesOpen(true)}
                  onMouseLeave={() => setIsCitiesOpen(false)}
                  className={`relative font-medium mr-10 transition-colors duration-300 hover:text-secondary flex items-center ${
                    cityPages.some(city => isActiveRoute(city.path)) ? 'text-secondary' : 'text-red-600'
                  }`}
                >
                  Painters near me
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isCitiesOpen ? 'rotate-180' : ''}`} />
                  {cityPages.some(city => isActiveRoute(city.path)) && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-gold rounded-full" />
                  )}
                </button>
                
                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-luxury z-50 transition-all duration-300 ${
                    isCitiesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setIsCitiesOpen(true)}
                  onMouseLeave={() => setIsCitiesOpen(false)}
                >
                  <div className="py-2">
                    {cityPages.map((city) => (
                      <Link
                        key={city.name}
                        to={city.path}
                        className={`block px-4  py-3 text-sm transition-colors duration-300 hover:bg-muted ${
                          isActiveRoute(city.path) 
                            ? 'bg-gradient-gold text-secondary-foreground font-medium' 
                            : 'text-red-600 font-medium hover:text-secondary'
                        }`}
                        onClick={() => setIsCitiesOpen(false)}
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
       {isOpen && (
  <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
    <div className="px-5 py-6 space-y-6 text-gray-800">
      
      {/* Main Navigation */}
      <div>
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Main Menu</h3>
        <div className="space-y-2">
          {mainNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                isActiveRoute(item.path)
                  ? 'bg-yellow-100 text-yellow-900 font-semibold shadow-sm'
                  : 'hover:bg-gray-100'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* City Pages */}
      <div>
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Painters near me</h3>
        <div className="grid grid-cols-2 gap-2">
          {cityPages.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Support Pages */}
      <div>
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Support</h3>
        <div className="space-y-2">
          {supportPages.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded-lg text-sm hover:bg-gray-100 text-gray-700 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div>
        <button
          onClick={handleWhatsApp}
          className="w-full bg-yellow-500 text-white text-sm font-bold py-3 rounded-lg shadow hover:bg-yellow-600 transition"
        >
          Get Quote via WhatsApp
        </button>
      </div>
    </div>
  </div>
)}

      </nav>
    </>
  );
};

export default Navbar;