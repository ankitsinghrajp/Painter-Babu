import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleClick = () => {
    window.open('https://wa.me/919630009838?text=Hello%20Painter%20Babu,%20I%20would%20like%20to%20inquire%20about%20your%20painting%20services.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-luxury hover:shadow-gold transition-all duration-300 hover:scale-110 animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
    </button>
  );
};

export default WhatsAppFloat;