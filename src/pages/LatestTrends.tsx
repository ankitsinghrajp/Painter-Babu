import { useState } from 'react';
import { Palette,PaintRoller, TrendingUp,Building2, Sparkles, Eye, Brush, Home,Wand2, Building, Star, ArrowRight, Heart, Zap, Layers, Globe, Sun, Moon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import latestTrend2 from "../assets/latest-trend-7e3770b61c463be907e4b38ca09b078d.jpg";
import latestTrend3 from "../assets/latest-trend-8-master-bedroom-colour-combinations-from-asian-paints.jpg";
import latestTrend4 from "../assets/latest-trend-8689d7eeab49f322650546a4cad4ab64.jpg";
import latestTrend5 from "../assets/latest-trend-b2c4e238c48093786793ef0440bbf44d.jpg";
import latestTrend6 from "../assets/latest-trend-ea02f3c08fd16b0b423020634a48feb7.jpg";
import latestTrend8 from "../assets/latest-trend-image-31-768x524.png";
import latestTrend9 from "../assets/latest-trend-intro-1728591855.jpg";

 

const LatestTrends = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredTrend, setHoveredTrend] = useState(null);

  const handleWhatsApp = (trend, category) => {
    const message = `Hello Painter Babu, I'm interested in the latest ${trend} trend for ${category}. Please provide more details and consultation.`;
    window.open(`https://wa.me/919630009838?text=${encodeURIComponent(message)}`, '_blank');
  };


const paintingTrends = [
  {
    id: 1,
    title: 'Elegant Living Room Brilliance',
    category: 'Interior Design',
    type: 'residential',
    description: 'A premium paint finish that adds warmth and luxury to modern living rooms.',
    features: ['Sophisticated Look', 'Warm Tones', 'Balanced Contrast'],
    popularity: '91%',
    image: latestTrend8,
    gradient: 'from-yellow-300 to-orange-400',
    icon: Home
  },
  {
    id: 2,
    title: 'Master Bedroom Serenity',
    category: 'Color Palette',
    type: 'residential',
    description: 'Soft, calming colors designed to promote relaxation and peaceful sleep.',
    features: ['Sleep-Friendly', 'Elegant Neutrals', 'Comfort Vibe'],
    popularity: '89%',
    image: latestTrend3,
    gradient: 'from-blue-100 to-indigo-200',
    icon: Star
  },
  {
    id: 3,
    title: 'Contemporary Color Palette',
    category: 'Trendy Colors',
    type: 'both',
    description: 'Bold yet harmonious shades ideal for modern residential or commercial spaces.',
    features: ['Vibrant Hues', 'Stylish Finish', 'Statement Look'],
    popularity: '86%',
    image: latestTrend9,
    gradient: 'from-orange-300 to-red-300',
    icon: Sparkles
  },
  {
    id: 4,
    title: 'Modern Wall Styling',
    category: 'Techniques',
    type: 'residential',
    description: 'Minimalist-inspired paint styles that complement architectural precision.',
    features: ['Clean Lines', 'Urban Appeal', 'Subtle Glamour'],
    popularity: '90%',
    image: latestTrend5,
    gradient: 'from-gray-300 to-gray-500',
    icon: Wand2
  },
  {
    id: 5,
    title: 'Classic Meets Contemporary',
    category: 'Fusion Styles',
    type: 'both',
    description: 'A balanced blend of timeless tones with modern accents for luxurious spaces.',
    features: ['Rich Contrast', 'Luxury Feel', 'Transitional Design'],
    popularity: '93%',
    image: latestTrend6,
    gradient: 'from-stone-300 to-stone-500',
    icon: PaintRoller
  },
  {
    id: 6,
    title: 'Accent Wall in Action',
    category: 'Craftsmanship',
    type: 'commercial',
    description: 'A behind-the-scenes look at skilled painters bringing bold ideas to life.',
    features: ['Precision Work', 'Pro Application', 'Live Transformation'],
    popularity: '88%',
    image: latestTrend2,
    gradient: 'from-rose-300 to-pink-400',
    icon: Building2
  },
  {
    id: 7,
    title: 'Welcoming Exterior Elevation',
    category: 'Mood Setting',
    type: 'residential',
    description: 'Inviting shades perfect for entryways and open spaces, creating a warm first impression.',
    features: ['Calming Entry', 'Elegant Finish', 'Soft Texture'],
    popularity: '94%',
    image: latestTrend4,
    gradient: 'from-amber-200 to-yellow-300',
    icon: Eye
  }
];


  const filteredTrends = activeCategory === 'all' 
    ? paintingTrends 
    : paintingTrends.filter(trend => trend.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar/>
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 mb-8 animate-pulse">
              <TrendingUp className="w-6 h-6 mr-3 text-yellow-400" />
              <span className="text-lg font-semibold">Trending Now in 2025</span>
            </div>
            <h1 className="text-5xl pb-3 md:text-7xl font-bold mb-5 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent animate-fade-in">
              Latest Painting Trends
            </h1>
            <div className="text-xl md:text-2xl leading-relaxed text-blue-100 animate-slide-up space-y-4">
              <p>
                When it comes to transforming spaces, painting is more than just a fresh coat of color—it's a statement of style, mood, and innovation. As a leading painting service provider, staying ahead of trends helps you deliver cutting-edge results your clients love.
              </p>
              <p className="text-yellow-200 font-semibold">
                Here are the <strong>top painting trends of 2025</strong> that homeowners and commercial clients are demanding—and how your painting service can stand out by embracing them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
         

          {/* Trends Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: TrendingUp, value: '2025', label: 'Latest Trends' },
              { icon: Palette, value: '8+', label: 'Hot Categories' },
              { icon: Star, value: '90%+', label: 'Client Satisfaction' },
              { icon: Sparkles, value: '100%', label: 'Trend Accuracy' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trends Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrends.map((trend, index) => (
              <div 
                key={trend.id}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 ${
                  hoveredTrend === trend.id ? 'ring-4 ring-blue-500/20' : ''
                }`}
                onMouseEnter={() => setHoveredTrend(trend.id)}
                onMouseLeave={() => setHoveredTrend(null)}
              >
                {/* Trend Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center p-3">
                  <img 
                    src={trend.image} 
                    alt={trend.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105 filter drop-shadow-lg rounded-lg"
                    style={{
                      minHeight: '180px',
                      width: 'auto',
                      height: 'auto'
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${trend.gradient} opacity-10 group-hover:opacity-15 transition-opacity duration-500 rounded-lg`}></div>
                  
                 
                  
                  {/* Type Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2 z-10">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                      {trend.type === 'residential' && <Home className="w-4 h-4 text-slate-700" />}
                      {trend.type === 'commercial' && <Building className="w-4 h-4 text-slate-700" />}
                      {trend.type === 'both' && (
                        <div className="flex space-x-1">
                          <Home className="w-3 h-3 text-slate-700" />
                          <Building className="w-3 h-3 text-slate-700" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`bg-gradient-to-r ${trend.gradient} p-3 rounded-xl shadow-lg`}>
                      <trend.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {trend.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {trend.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
                      Key Benefits
                    </h4>
                    <div className="space-y-2">
                      {trend.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${trend.gradient} mr-3`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
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

      {/* Why Choose Our Trend Services */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Why Choose Our 
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent ml-4">
                Trending Services
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with our expert knowledge of the latest painting trends. 
              We bring cutting-edge styles and techniques to transform your space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Trend Expertise',
                description: 'First to adopt and master the latest painting trends and techniques',
                color: 'from-blue-500 to-indigo-500'
              },
              {
                icon: Palette,
                title: 'Color Consultation',
                description: 'Professional color matching and trend-based design consultation',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Brush,
                title: 'Premium Techniques',
                description: 'Specialized skills in textured finishes and artistic applications',
                color: 'from-emerald-500 to-teal-500'
              },
              {
                icon: Sparkles,
                title: 'Innovative Results',
                description: 'Instagram-worthy finishes that make your space stand out',
                color: 'from-orange-500 to-red-500'
              }
            ].map((service, index) => (
              <div key={index} className="group text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${service.color} p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
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

export default LatestTrends;