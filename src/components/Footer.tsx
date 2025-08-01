import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Paint Variety', path: '/paint-variety' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];


  const cityServices = [
    { name: 'Pune', path: '/pune' },
    { name: 'Mumbai', path: '/mumbai' },
    { name: 'Bangalore', path: '/bangalore' },
    { name: 'Hyderabad', path: '/hyderabad' },
    { name: 'Kolkata', path: '/kolkata' },
    { name: 'Vizag', path: '/vizag' },
    { name: 'Indore', path: '/indore' },
    { name: 'Raipur', path: '/raipur' },
  ];

  const supportLinks = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Refund Policy', path: '/refund-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/919630009838?text=Hello%20Painter%20Babu,%20I%20would%20like%20to%20inquire%20about%20your%20services.', '_blank');
  };

 
  return (
    <footer className="bg-[#624992] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gradient-gold">Painterbabu</span>
              </div>
            </div>
            
            <p className="text-primary-foreground leading-relaxed">
              Transforming spaces with premium painting solutions. We bring luxury, quality, and professionalism to every project across India.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+91 9630009838</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span>contact.painterbabu@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-secondary" />
                <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>Serving Across India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-secondary">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-primary-foreground hover:text-secondary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Cities We Serve */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-secondary">Cities We Serve</h3>
            <div className="space-y-3">
              {cityServices.map((city) => (
                <Link
                  key={city.name}
                  to={city.path}
                  className="block text-primary-foreground hover:text-secondary transition-colors duration-300"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Support & Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-secondary">Support</h3>
            <div className="space-y-3">
              {supportLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-primary-foreground hover:text-secondary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <h4 className="text-lg font-semibold text-secondary mt-8">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Painter-Babu/100010432382679/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-xl hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/painterbabu1/#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-xl hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCJeZcvqwhMKiJ35lrJfVIYg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-xl hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href=" https://x.com/painterji"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-xl hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              
            </div>

            <button 
              onClick={handleWhatsApp}
              className="btn-gold text-black/80 font-semibold w-full mt-6"
            >
              WhatsApp Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground text-sm">
              © {currentYear} Painter Babu. All rights reserved. Premium Painting Services Across India.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/terms-conditions" className="text-primary-foreground hover:text-secondary transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/refund-policy" className="text-primary-foreground hover:text-secondary transition-colors">
                Refund Policy
              </Link>
              <Link to="/privacy-policy" className="text-primary-foreground hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;