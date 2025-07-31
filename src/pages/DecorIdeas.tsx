import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Palette, 
  ArrowRight, 
  Eye, 
  Brush,
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import decor1 from "../assets/decor-first-image.jpg";
import decor2 from "../assets/decor-second-image.jpg";
import decor3 from "../assets/decor-third-image.jpg";
import decor4 from "../assets/decor-fourth-image.jpg";
import decor5 from "../assets/decor-fifth-image.jpg";
import decor6 from "../assets/decor-sixth-image.jpg";
import decor7 from "../assets/decor-seventh-image.jpg";
import decor8 from "../assets/decor-eigth-image.jpg";
import decor9 from "../assets/decor-ninth-image.jpg";

const DecorIdeas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images for the slider - replace with your actual decor images
  const sliderImages = [
      decor1,
      decor2,
      decor3,
      decor4,
      decor5,
      decor6,
      decor7,
      decor8,
      decor9
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50/30">
      <Navbar/>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50/50">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-orange-400/3 to-red-400/5"></div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-orange-200/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-8 h-8 bg-red-200/20 rounded-full blur-md animate-pulse"></div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Decor Ideas
            </span>{' '}
            That Inspire
          </h1>

          <Card className="max-w-8xl mx-auto bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Brush className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                At Painterbabu, we believe <strong className="text-gray-900 bg-yellow-100 px-2 py-1 rounded">
                beautiful interiors start with the perfect coat of paint
                </strong>. Whether you're decorating a new home or refreshing an old one, our expert-backed decor ideas—combined with professional painting services—bring your vision to life.
              </p>

             
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Auto-Running Image Slider */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          
      

          {/* Image Slider */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-0 relative">
                
                {/* Main Image Display - Optimized for Vertical Images */}
                <div className="relative h-[600px] md:h-[500px] lg:h-[500px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  {sliderImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center ${
                        index === currentSlide 
                          ? 'opacity-100 transform scale-100' 
                          : 'opacity-0 transform scale-105'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Interior Design ${index + 1}`}
                        className="max-h-full max-w-full object-contain shadow-2xl rounded-lg"
                        style={{ maxHeight: '95%', maxWidth: '95%' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>
                    </div>
                  ))}

                  {/* Navigation Arrows - Repositioned for vertical layout */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group z-10"
                  >
                    <ChevronLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform duration-300" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group z-10"
                  >
                    <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  {/* Slide Counter - Repositioned */}
                  <div className="absolute top-6 right-6 bg-black/60 text-white px-5 py-3 rounded-full text-sm font-semibold z-10 backdrop-blur-sm">
                    {currentSlide + 1} / {sliderImages.length}
                  </div>
                </div>

                {/* Dot Indicators - Enhanced for vertical layout */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full">
                  {sliderImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                        index === currentSlide 
                          ? 'bg-yellow-500 border-yellow-300 scale-125 shadow-lg' 
                          : 'bg-white/40 border-white/60 hover:bg-white/70 hover:border-white/80'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Progress Bar */}
            <div className="mt-6 bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 h-full transition-all duration-300 ease-linear"
                style={{
                  width: `${((currentSlide + 1) / sliderImages.length) * 100}%`
                }}
              />
            </div>
          </div>

          {/* Slider Controls Info */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              ✨ Auto-playing gallery • Click arrows or dots to navigate manually
            </p>
            
          </div>
        </div>
      </div>

     
      <Footer/>   
      <WhatsAppFloat/>
      </div>
  );
};

export default DecorIdeas;