import React, { useState, useEffect } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Sparkles,
  Wrench,
  Clock,
  CreditCard,
  Palette,
  Eye,
  Star,
  MapPin,
  Users,
  Award,
  CheckCircle,
  Zap,
  LocateFixed,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import mumbaiImage from "../assets/city-mumbai.jpg";
import kolkataImage from "../assets/city-kolkata.jpg";
import hyderabadImage from "../assets/city-hyderabad.jpg";
import woodPolish from "../assets/wood-polish.jpg";
import sprayPaint from "../assets/spray-paint.jpg";


const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsApp = (service) => {
    const message = `Hello Painter Babu, I'm interested in ${service}. Please provide more details.`;
    window.open(
      `https://wa.me/919630009838?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const services = [
    {
      imageSrc: "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2021/10/featured-image-paint-with-roller-e1618531082991.jpeg",
      title: "Roller Painting",
      description:
        "Professional roller painting services that ensure a smooth, even finish and enhance the overall look of your walls with a clean, modern appeal.",
      features: ["Smooth Finish", "Quick Coverage", "Even Texture"],
      color: "from-blue-500 to-blue-600",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1622250544703-997d69d856e3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Brush Paint",
      description:
        "Expert brush painting services that provide a classic, detailed finish, bringing depth and character to your walls with precision and care.",
      features: ["Detailed Work", "Premium Finish", "Artistic Touch"],
      color: "from-green-500 to-green-600",
    },
    {
      imageSrc:
        "https://indigopaints.com/wp-content/uploads/2020/02/2IDG1-Wall-putty-1.webp",
      title: "Wall Putty",
      description:
        "We apply wall putty carefully to smooth out rough patches and cracks, giving your walls a clean, even surface that's ready for perfect paint.",
      features: ["Crack Filling", "Smooth Surface", "Paint Ready"],
      color: "from-orange-500 to-orange-600",
    },
    {
      imageSrc: woodPolish,
      title: "Wood Polish",
      description:
        "We bring life back to your wooden surfaces with expert polishing that restores shine, enhances natural grain, and protects the wood.",
      features: ["Shine Restoration", "Grain Enhancement", "Long Protection"],
      color: "from-amber-500 to-amber-600",
    },
    {
      imageSrc:
        "https://www.baumerk.com/storage/app/media/su-yalitim-malzemeleri-nelerdir/firca-ile-zemin-izolasyon-yapan-adam.jpg",
      title: "Water Proofing",
      description:
        "We protect your home from leaks and dampness with reliable waterproofing solutions, keeping your walls and roof safe during every season.",
      features: ["Leak Protection", "Damp Prevention", "Weather Shield"],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      imageSrc: sprayPaint,
      title: "Spray Paint",
      description:
        "We use spray painting for a fast, smooth, and even finish—perfect for giving your walls or furniture a clean and modern look in less time.",
      features: ["Fast Application", "Even Coverage", "Modern Finish"],
      color: "from-purple-500 to-purple-600",
    },
  ];

  const features = [
    {
      icon: CreditCard,
      title: "Flexible Payment Plans & Easy EMI",
      description: "Convenient payment solutions to fit your budget perfectly",
      color: "bg-pink-100 text-pink-600",
      hoverColor: "hover:bg-pink-200",
    },
    {
      icon: Shield,
      title: "Trained & Verified Painters",
      description:
        "Professional craftsmen with verified credentials and years of experience",
      color: "bg-blue-100 text-blue-600",
      hoverColor: "hover:bg-blue-200",
    },
    {
      icon: Sparkles,
      title: "Dust-Free & Mess-Free Process",
      description:
        "Clean painting process without disrupting your daily life and space",
      color: "bg-green-100 text-green-600",
      hoverColor: "hover:bg-green-200",
    },
    {
      icon: Wrench,
      title: "Latest Tools & Branded Paints",
      description:
        "Premium equipment and top-quality paint brands for lasting results",
      color: "bg-orange-100 text-orange-600",
      hoverColor: "hover:bg-orange-200",
    },
    {
      icon: Clock,
      title: "On-Time Work Completion",
      description:
        "Guaranteed project delivery within agreed timeline, every time",
      color: "bg-purple-100 text-purple-600",
      hoverColor: "hover:bg-purple-200",
    },
    {
      icon: Palette,
      title: "Expert Color Consultation",
      description:
        "Professional guidance for perfect color selection and combinations",
      color: "bg-indigo-100 text-indigo-600",
      hoverColor: "hover:bg-indigo-200",
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      color: "text-blue-600",
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      color: "text-green-600",
    },
    {
      icon: MapPin,
      number: "All",
      label: "Major Cities",
      color: "text-orange-600",
    },
  ];

  const cities = [
    {
      name: "Mumbai",
      imgSrc: mumbaiImage,
    },
    {
      name: "Kolkata",
      imgSrc: kolkataImage,
    },
    {
      name: "Pune",
      imgSrc: "https://media.istockphoto.com/id/1265056529/photo/beautiful-evening-sky-during-sunset-in-the-city.jpg?s=612x612&w=0&k=20&c=YpO0J-Gg02RqMea0bROR72JcAdSX72yfLCmv0AbNBa4=",
    },
    {
      name: "Banglore",
      imgSrc: "https://static.toiimg.com/photo/54559212.cms",
    },
    {
      name: "Hyderabad",
      imgSrc: hyderabadImage,
    },
    {
      name: "Indore",
      imgSrc: "https://blogs.pathbeat.in/wp-content/uploads/2024/12/m2Bg2Broad2Band2B2Bholkarstedium2B2B01a_credit_raju2Bpawar.jpg",
    },
    {
      name: "Vizag",
      imgSrc: "https://taxilotrip.com/uploads/0000/312/2024/06/22/picture13.png",
    },
    {
      name: "Raipur",
      imgSrc: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/08/d67a307473ae9534f49f4d0642a370f8_1000x1000.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navbar />
      <Hero />
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        
        <div className="relative w-full py-20">


          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            

            {/* Main Heading */}
            <h1 className="text-5xl w-full md:text-6xl font-black text-red-600 mb-4 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-red-600 via-red-600 to-red-600 bg-clip-text text-transparent">
                Painterbabu
              </span>
            </h1>

    <Card className=" w-full border-0 shadow-none bg-transparent">
      <div className="text-center pt-5 pb-2 px-4">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-gray-600 leading-tight">
          Professional Painting Services
        </h2>
      </div>

       <div className="bg-gradient-to-r my-4 from-yellow-100 to-orange-100 p-6">
                    <p className="text-lg text-gray-800">
                      Whether it's a{" "}
                      <strong className="text-yellow-700">1BHK flat</strong> or
                      a{" "}
                      <strong className="text-orange-700">
                        multi-floor commercial building
                      </strong>
                      , we make your painting experience{" "}
                      <strong className="text-red-700">
                        affordable, professional, and hassle-free
                      </strong>
                      , first time painting in EMI.
                    </p>
                  </div>
      
    </Card>

 {/* Services Section */}
      <div className="py-20 bg-gradient-to-br mt-10 from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-red-500/10"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
          
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
                 Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of luxury painting services
              designed to transform your space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 border-0 shadow-xl hover:-translate-y-4 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <div className="absolute top-4 right-4">
                   
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                 
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

            {/* Subtitle Cards */}
            <div className="max-w-8xl mx-auto mb-12">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-8">
                 
                      <Badge className="bg-gradient-to-r mt-6 from-yellow-500 to-red-500 text-white px-6 py-2 text-base font-semibold mb-6">
              <LocateFixed className="w-4 h-4 mr-2" />
              Cities We Serve
            </Badge>
               

                  {/* Cities */}
                  <div className="py-6">
                   
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((city, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white hover:-translate-y-3 hover:rotate-1 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img 
                    className="h-[180px] w-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src={city.imgSrc} 
                    alt={city.name}
                  />
                  
                  {/* Subtle overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                </div>

                {/* City Name */}
                <div className="p-6 text-center">
                  <CardTitle className="text-xl font-medium text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">
                    {city.name}
                  </CardTitle>
                </div>
              </CardContent>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 pointer-events-none"></div>
            </Card>
          ))}
        </div>
          </div>

                </CardContent>
              </Card>
            </div>

     <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6 pt-10">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardContent className="p-6 text-center">
                    <stat.icon
                      className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
           
          </div>
        </div>
      </div>

        {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 text-base font-semibold mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Why Choose Painterbabu
            </Badge>
             <p className="text-xl md:text-xl text-gray-700 mb-6 leading-relaxed">
                    India's leading{" "}
                    <strong className="text-gray-900 bg-yellow-100 px-2 py-1 rounded">
                      home and commercial painting service provider
                    </strong>
                    , offering expert painting solutions across major cities.
                  </p>

                    
          </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  {features.map((feature, index) => {
    const IconComponent = feature.icon;
    const total = features.length;

    // For centering last row (only works well when total % 4 === 2 or 1)
    const isSecondLastRowCentered =
      index >= total - (total % 4 || 4) &&
      total % 4 !== 0 &&
      index === total - (total % 4);

    const colStartClass =
      total % 4 === 2 && isSecondLastRowCentered
        ? 'xl:col-start-2'
        : total % 4 === 1 && isSecondLastRowCentered
        ? 'xl:col-start-3'
        : '';

    return (
      <Card
        key={index}
        className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white hover:-translate-y-3 hover:rotate-1 cursor-pointer overflow-hidden ${colStartClass}`}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent className="p-8 relative">
          <div className="flex flex-col items-center text-center relative z-10">
            <div
              className={`w-20 h-20 ${feature.color} ${feature.hoverColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
            >
              <IconComponent className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg leading-tight group-hover:text-blue-600 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              {feature.description}
            </p>

            <div
              className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            ></div>
          </div>
        </CardContent>
      </Card>
    );
  })}
</div>

        </div>
      </div>
    

      <WhatsAppFloat/>
      <Footer />
    </div>
  );
};

export default Index;