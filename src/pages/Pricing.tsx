import React, { useState, useEffect } from 'react';
import { Phone, Check, Star, Zap, Heart, Crown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Navbar from '@/components/Navbar';

const PricingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pricingData = [
    {
      label: '1 BHK',
      subtitle: 'Paint Package',
      price: '₹15,000',
      originalPrice: '₹18,000',
      badge: 'STARTER',
      badgeVariant: 'default',
      icon: <Heart className="w-6 h-6" />,
      features: ['Premium Paint', 'Wide Color Range',  'Professional Tools'],
      popular: false,
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    {
      label: '2 BHK',
      subtitle: 'Paint Package', 
      price: '₹25,000',
      originalPrice: '₹30,000',
      badge: 'POPULAR',
      badgeVariant: 'destructive',
      icon: <Star className="w-6 h-6" />,
      features: ['Premium Paint', 'Wide Color Range', 'Professional Tools'],
      popular: true,
      gradient: 'from-pink-500 to-rose-500',
      delay: 0.1
    },
    {
      label: '3 BHK',
      subtitle: 'Paint Package',
      price: '₹30,000',
      originalPrice: '₹38,000',
      badge: 'PREMIUM',
      badgeVariant: 'secondary',
      icon: <Crown className="w-6 h-6" />,
      features: ['Luxury Paint', 'Designer Colors', 'Professional Equipment'],
      popular: false,
      gradient: 'from-purple-500 to-indigo-500',
      delay: 0.2
    },
    {
      label: 'CUSTOM',
      subtitle: 'Paint Package',
      price: 'Call Us',
      badge: 'FLEXIBLE',
      badgeVariant: 'outline',
      icon: <Zap className="w-6 h-6" />,
      features: ['Tailored Solutions', 'Any Size Property', 'Custom Colors', 'Flexible Timeline', 'Expert Consultation'],
      popular: false,
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.3,
      isCustom: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar/>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="py-20 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">₹</span>
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                PRICING
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl md:mx-auto mx-4 leading-relaxed">
              Transform your space with our professional painting services at unbeatable prices
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 px-4 md:mx-2 mx-4 my-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingData.map((item, idx) => (
                <div
                  key={idx}
                  className={`transform transition-all duration-700 ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${item.delay}s` }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card className={`relative overflow-hidden h-full transition-all duration-300 hover:shadow-2xl border-0 ${
                    item.popular 
                      ? 'ring-2 ring-pink-500 shadow-lg scale-105' 
                      : 'hover:scale-105'
                  } ${
                    hoveredCard === idx ? 'shadow-2xl -translate-y-2' : ''
                  }`}>
                    
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5 transition-opacity duration-300 ${
                      hoveredCard === idx ? 'opacity-10' : ''
                    }`}></div>
                    
                    {/* Popular Badge */}
                    {item.popular && (
                      <div className="absolute -top-0 -right-0 z-10">
                        <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                          MOST POPULAR
                        </div>
                      </div>
                    )}

                    <CardHeader className="text-center pb-4 relative z-10">
                      {/* Icon */}
                      <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-white mb-4 transform transition-transform duration-300 ${
                        hoveredCard === idx ? 'scale-110 rotate-12' : ''
                      }`}>
                        {item.icon}
                      </div>
                      
                      <Badge variant={'outline'} className="mx-auto mb-3 animate-pulse">
                        {item.badge}
                      </Badge>
                      
                      <CardTitle className="text-2xl font-bold text-gray-800">
                        {item.label}
                      </CardTitle>
                      
                      <CardDescription className="text-gray-600">
                        {item.subtitle}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="text-center pb-6 relative z-10">
                      {/* Pricing */}
                      <div className="mb-6">
                        {item.originalPrice && (
                          <div className="text-sm text-gray-400 line-through mb-1">
                            {item.originalPrice}
                          </div>
                        )}
                        <div className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                          {item.price}
                          {!item.isCustom && <span className="text-lg text-gray-500">/-*</span>}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {item.features.map((feature, featureIdx) => (
                          <div 
                            key={featureIdx}
                            className={`flex items-center gap-2 text-sm text-gray-600 transform transition-all duration-300 ${
                              hoveredCard === idx 
                                ? 'translate-x-2 text-gray-800' 
                                : ''
                            }`}
                            style={{ transitionDelay: `${featureIdx * 0.1}s` }}
                          >
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="pt-0 relative z-10">
                      {item.isCustom ? (
                        <Button 
                          asChild 
                          className={`w-full bg-gradient-to-r ${item.gradient} hover:shadow-lg transform transition-all duration-300 hover:scale-105`}
                        >
                          <a
                            href="https://wa.me/919630009838"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            <Phone className="w-4 h-4" />
                            Contact Us
                          </a>
                        </Button>
                      ) : (
                       <></>
                      )}
                    </CardFooter>

                    {/* Animated border effect */}
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${item.gradient} opacity-0 transition-opacity duration-300 ${
                      hoveredCard === idx ? 'opacity-20' : ''
                    }`} style={{ padding: '2px' }}>
                      <div className="w-full h-full bg-white rounded-lg"></div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer/>
      <WhatsAppFloat/>
    </div>
  );
};

export default PricingPage;