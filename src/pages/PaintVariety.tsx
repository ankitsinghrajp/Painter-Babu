
import { useState } from 'react';
import { Palette, Star, Award, Shield, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import royalAspira from "../assets/royale-aspira.png";
import royalAtmos from "../assets/royale-atmos.png";
import apexUltima from "../assets/apex-ultima.png";
import royaleShyne from "../assets/royale-shyne.png";
import tractorEmulsion from "../assets/tractor-emulsion-advanced.png";
import aceExterior from "../assets/ace-exterior-emulsion.png";
import velvetTouch from "../assets/velvet-touch.png";
import promisePbr from "../assets/promise-pbr.png";
import easyClean from "../assets/easyclean.png";
import weatherShieldMax from "../assets/weathershield.png";
import superlux from "../assets/superlux.png";
import walls from "../assets/walls.png";

const PaintVariety = () => {
  const [activeTab, setActiveTab] = useState('asian-paints');
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleWhatsApp = (brand, product) => {
    const message = `Hello Painter Babu, I'm interested in ${brand} - ${product}. Please provide more details and pricing.`;
    window.open(`https://wa.me/919630009838?text=${encodeURIComponent(message)}`, '_blank');
  };

  const asianPaints = [
    {
      name: 'Royale Aspira',
      type: 'Premium Interior',
      features: ['Easy Maintenance', 'Rich Finish', 'Long Lasting'],
      price: '₹450-650/litre',
      description: 'Premium quality interior paint with superior finish and durability.',
      image: royalAspira,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Royale Atmos',
      type: 'Air Purifying',
      features: ['Air Purifying', 'Anti-Bacterial', 'Odor Free'],
      price: '₹550-750/litre',
      description: 'Revolutionary paint that purifies indoor air and eliminates harmful bacteria.',
      image: royalAtmos,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      name: 'Apex Ultima',
      type: 'Exterior Weather Shield',
      features: ['Weather Resistant', '15 Year Warranty', 'Fade Resistant'],
      price: '₹380-520/litre',
      description: 'Premium exterior paint designed to withstand harsh weather conditions.',
      image: apexUltima,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Royale Shyne',
      type: 'Luxury Silk Finish',
      features: ['Silk Finish', 'Washable', 'Premium Look'],
      price: '₹320-480/litre',
      description: 'Luxury silk finish paint for elegant and sophisticated interiors.',
      image: royaleShyne,
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      name: 'Tractor Emulsion',
      type: 'Budget Friendly',
      features: ['Value for Money', 'Good Coverage', 'Easy Application'],
      price: '₹180-280/litre',
      description: 'Quality paint at an affordable price without compromising on performance.',
      image: tractorEmulsion,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Ace Exterior',
      type: 'Premium Exterior',
      features: ['UV Protection', 'Crack Resistance', 'Long Lasting'],
      price: '₹280-380/litre',
      description: 'Durable exterior paint with excellent coverage and protection.',
      image: aceExterior,
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  const dulux = [
    {
      name: 'Velvet Touch',
      type: 'Premium Interior',
      features: ['Velvet Finish', 'Luxury Feel', 'Rich Colors'],
      price: '₹520-720/litre',
      description: 'Premium interior paint with luxurious velvet finish for sophisticated spaces.',
      image: velvetTouch,
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      name: 'Promise PBR',
      type: 'Advanced Exterior',
      features: ['Paintable Before Rain', 'Quick Dry', 'Weather Shield'],
      price: '₹420-580/litre',
      description: 'Innovative exterior paint that can be applied even before rain.',
      image: promisePbr,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'EasyClean',
      type: 'Stain Resistant',
      features: ['Stain Resistant', 'Easy Maintenance', 'Washable'],
      price: '₹380-550/litre',
      description: 'Perfect for high-traffic areas with superior stain resistance.',
      image: easyClean,
      gradient: 'from-sky-500 to-blue-500'
    },
    {
      name: 'Weathershield Max',
      type: 'Premium Exterior',
      features: ['12 Year Protection', 'Algae Resistant', 'Color Lock'],
      price: '₹450-650/litre',
      description: 'Maximum protection exterior paint with guaranteed color retention.',
      image: weatherShieldMax,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'Superlux',
      type: 'Super Premium',
      features: ['Silk Finish', 'Anti-Bacterial', 'Luxury Range'],
      price: '₹680-850/litre',
      description: 'Top-of-the-line premium paint for the most discerning customers.',
      image: superlux,
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      name: 'Walls & More',
      type: 'Value Range',
      features: ['Good Coverage', 'Affordable', 'Reliable Quality'],
      price: '₹220-320/litre',
      description: 'Reliable quality paint offering great value for money.',
      image: walls,
      gradient: 'from-slate-500 to-gray-500'
    }
  ];

  const currentPaints = activeTab === 'asian-paints' ? asianPaints : dulux;
  const currentBrand = activeTab === 'asian-paints' ? 'Asian Paints' : 'Dulux';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar/>
  
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white  overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
           
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent animate-fade-in">
              Premium Paint Varieties
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-blue-100 animate-slide-up">
              Discover our exclusive collection of premium paints from leading brands. 
              Choose from Asian Paints and Dulux for unmatched quality and stunning finishes.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Brand Tabs */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-3 shadow-2xl border border-white/20">
              <button
                onClick={() => setActiveTab('asian-paints')}
                className={`px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform ${
                  activeTab === 'asian-paints'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl scale-105'
                    : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
                }`}
              >
                Asian Paints
              </button>
              <button
                onClick={() => setActiveTab('dulux')}
                className={`px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform ${
                  activeTab === 'dulux'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl scale-105'
                    : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
                }`}
              >
                Dulux
              </button>
            </div>
          </div>

          {/* Brand Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
              {currentBrand} 
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent ml-4">
                Collection
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Premium quality paints with advanced technology and superior finishes for your dream spaces.
            </p>
          </div>

          {/* Paint Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPaints.map((paint, index) => (
              <div 
                key={index}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 hover:scale-105 ${
                  hoveredCard === index ? 'ring-4 ring-blue-500/20' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                  <img 
                    src={paint.image} 
                    alt={`${paint.name} paint bucket`}
                    className="w-full rounded-md h-full object-contain transition-transform duration-700 group-hover:scale-110 filter drop-shadow-lg"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                    <Palette className="w-5 h-5 text-slate-700" />
                  </div>
                  <div className="absolute bottom-4 left-4 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {paint.name}
                    </h3>
                    <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-4 py-1">
                      <Award className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-700">{paint.type}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">{paint.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-emerald-500" />
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {paint.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                          <CheckCircle className="w-4 h-4 mr-3 text-emerald-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {paint.price}
                      </span>
                      <div className="text-xs text-slate-500 mt-1">*Price may vary</div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                 
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Why Choose Our 
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent ml-4">
                Premium Paints
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We partner with leading paint manufacturers to offer you the best quality, 
              latest technology, and stunning finishes for your projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mx-2 lg:grid-cols-3 md:mx-8 lg:mx-8 gap-8">
            {[
             
              {
                icon: Award,
                title: 'Expert Application',
                description: 'Professional painters trained in latest techniques',
                color: 'from-blue-500 to-indigo-500'
              },
              {
                icon: Palette,
                title: 'Color Consultation',
                description: 'Free color matching and design consultation',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Star,
                title: 'Premium Service',
                description: 'Complete painting solutions from preparation to finish',
                color: 'from-orange-500 to-red-500'
              }
            ].map((feature, index) => (
              <div key={index} className="group text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${feature.color} p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer/>
      <WhatsAppFloat/>
    </div>
  );
};

export default PaintVariety;