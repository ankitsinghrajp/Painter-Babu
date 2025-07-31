import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, User, Phone as PhoneIcon, Mail as MailIcon, MapPin as LocationIcon } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    mobile: '',
    email: '',
    city: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsApp = (type) => {
    const messages = {
      general:
        "Hello Painterbabu, I would like to inquire about your painting services.",
      quote:
        "Hello Painterbabu, I would like to get a quote for my painting project.",
      emergency:
        "Hello Painterbabu, I need emergency painting services. Please contact me urgently.",
      consultation:
        "Hello Painterbabu, I would like to schedule a free consultation.",
    };

    const message = messages[type] || messages.general;
    window.open(
      `https://wa.me/919630009838?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message from form data
    const message = `Hello Painterbabu! I'm interested in your services.

📋 *Service Needed:* ${formData.service}
👤 *Name:* ${formData.name}
📱 *Mobile:* ${formData.mobile}
✉️ *Email:* ${formData.email}
📍 *City:* ${formData.city}

Please contact me for consultation and quote. Thank you!`;

    // Open WhatsApp with the message
    window.open(
      `https://wa.me/919630009838?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        service: '',
        name: '',
        mobile: '',
        email: '',
        city: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9630009838",
      description: "Available 24/7 for emergency services",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact.painterbabu@gmail.com ",
      description: "Get detailed quotes and project information",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sat: 9:00 AM - 8:00 PM",
      description: "Sunday: 10:00 AM - 6:00 PM",
    },
    {
      icon: MapPin,
      title: "Service Areas",
      value: "All major cities",
      description: "Pune, Mumbai, Bangalore, Hyderabad, Kolkata, Vizag",
    },
  ];

  const services = [
    "Interior Painting",
    "Exterior Painting",
    "Texture Painting",
    "Waterproofing",
    "Wood Polishing",
    "Wall Putty",
    "Color Consultation",
    "Emergency Services",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Get In <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl leading-relaxed animate-slide-up text-blue-100">
              Ready to transform your space? Contact Painterbabu today for
              premium painting services. We're here to bring your vision to life
              with expert craftsmanship and luxury finishes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Contact <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Information</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple ways to reach us for all your painting needs. Choose what
              works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group"
              >
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-lg font-semibold text-blue-600 mb-2">
                  {info.value}
                </p>
                <p className="text-slate-600 text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive painting solutions for all your needs. Contact us
              for any of these premium services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center cursor-pointer group"
                onClick={() => handleWhatsApp("quote")}
              >
                <p className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Form Header */}
            <div className="text-center mb-12">
             
              <p className="text-2xl font-medium text-slate-600">
                Fill out the form below and we'll get back to you with a personalized quote via WhatsApp
              </p>
            </div>

            {/* Animated Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 transform transition-all duration-500 hover:scale-[1.02]">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Service Dropdown - Mobile Responsive */}
                <div className="group">
                  <label className="block text-base md:text-lg font-semibold text-slate-700 mb-3">
                    What service do you need? <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 md:px-6 py-4 md:py-5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white text-slate-800 group-hover:border-gray-300 text-base md:text-lg font-medium appearance-none cursor-pointer"
                      style={{ 
                        WebkitAppearance: 'none', 
                        MozAppearance: 'none',
                        backgroundImage: 'none'
                      }}
                    >
                      <option value="" className="text-gray-500 py-2">Select your service...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="text-slate-800 py-2 px-2">
                          {service}
                        </option>
                      ))}
                    </select>
                    {/* Custom Arrow */}
                    <div className="absolute inset-y-0 right-3 md:right-4 flex items-center pointer-events-none">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1.5 md:p-2 rounded-full">
                        <svg 
                          className="w-3 h-3 md:w-4 md:h-4 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          strokeWidth="3"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Name Input */}
                <div className="group">
                  <label className="block text-base md:text-lg font-semibold text-slate-700 mb-3">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 p-1.5 md:p-2 rounded-full">
                      <User className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full pl-12 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white placeholder-gray-500 text-slate-800 text-base md:text-lg font-medium group-hover:border-gray-300"
                    />
                  </div>
                </div>

                {/* Mobile Input */}
                <div className="group">
                  <label className="block text-base md:text-lg font-semibold text-slate-700 mb-3">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 md:p-2 rounded-full">
                      <PhoneIcon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full pl-12 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white placeholder-gray-500 text-slate-800 text-base md:text-lg font-medium group-hover:border-gray-300"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="group">
                  <label className="block text-base md:text-lg font-semibold text-slate-700 mb-3">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 p-1.5 md:p-2 rounded-full">
                      <MailIcon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full pl-12 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white placeholder-gray-500 text-slate-800 text-base md:text-lg font-medium group-hover:border-gray-300"
                    />
                  </div>
                </div>

                {/* City Input */}
                <div className="group">
                  <label className="block text-base md:text-lg font-semibold text-slate-700 mb-3">
                    Your City <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-500 p-1.5 md:p-2 rounded-full">
                      <LocationIcon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      placeholder="Mumbai, Delhi, Bangalore..."
                      className="w-full pl-12 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white placeholder-gray-500 text-slate-800 text-base md:text-lg font-medium group-hover:border-gray-300"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 md:py-5 px-8 rounded-xl font-bold text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 md:h-6 md:w-6 border-b-2 border-white mr-3"></div>
                        <span>Sending to WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                        <span>Submit</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Form Footer */}
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 md:p-6 border border-green-200">
                  <div className="flex items-center justify-center mb-2">
                    <MessageCircle className="w-5 h-5 md:w-6 text-green-600 mr-2 animate-bounce" />
                    <span className="text-green-700 font-bold text-base md:text-lg">Instant WhatsApp Response!</span>
                  </div>
                  <p className="text-green-600 text-sm md:text-base font-medium">
                    Your details will be sent directly to our WhatsApp for immediate consultation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="pt-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8499.67247732301!2d73.90097618010078!3d18.544064219342136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c106dff9a20b%3A0x181fbf0c761279a9!2sPainterbabu!5e1!3m2!1sen!2sin!4v1753794687031!5m2!1sen!2sin" 
              width="100%"
              height="600" 
              loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </section>

    

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Contact;