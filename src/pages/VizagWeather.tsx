import { MapPin, Palette, Home, Droplets, Star, Award, Clock, Shield, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Navbar from '../components/Navbar';
import VizagImage from "../assets/vizag-rk-beach.jpg";

const VizagWeather = () => {
  const vizagFoods = [
    {
      name: "Chepala Pulusu (Fish Curry)",
      description: "A spicy and tangy Andhra-style fish curry made with tamarind, red chili, and local spices — slow-cooked for bold flavors.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-AVtuAQRvRroxa7jR-iHRPKLwQfBF3v98Q&s",
      places: "Dharani (Fortune Hotel), Sea Inn, Sai Ram Parlour",
      rating: 4.8
    },
    {
      name: "Andhra Meals (Unlimited Thali)",
      description: "A full spread featuring rice, pappu (dal), sambar, rasam, vegetable fry, pickles, curd, papad, and sometimes non-veg curries — all served on a banana leaf.",
      image: "https://lifeandtrendz.com/wp-content/uploads/2025/04/New-Project-47-2.jpg",
      places: "Hotel Daspalla, Subbayya Gari Hotel, Raju Gari Dhaba",
      rating: 4.9
    },
    {
      name: "Royyala Vepudu (Prawn Fry)",
      description: "Spicy stir-fried prawns with curry leaves, red chilies, and onions — fiery and addictive!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi10FEpre2Ip_maCj95stf84h1Q5f5FJfCyg&s",
      places: "Sri Sairam Parlour, coastal dhabas",
      rating: 4.7
    },
    {
      name: "Bongulo Chicken (Bamboo Chicken)",
      description: "A tribal delicacy from Araku Valley — chicken marinated in masalas and cooked inside bamboo stems over fire.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxme450fJmxukA6hmkfXPrIkfC1AIwYi9D7g&s",
      places: "Found en route to Araku, at tribal stalls or select restaurants",
      rating: 4.6
    },
    {
      name: "Pesarattu (Green Gram Dosa)",
      description: "A protein-rich dosa made with green gram, often stuffed with upma and served with spicy ginger chutney.",
      image: "https://i.ytimg.com/vi/c0PQz7TF7RQ/maxresdefault.jpg",
      places: "Venkatadri Vantillu, Sairam Parlour",
      rating: 4.5
    },
    {
      name: "Pootharekulu (Paper Sweet)",
      description: "Thin rice paper sheets filled with jaggery, dry fruits, and ghee — a famous Andhra sweet originally from Atreyapuram.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFaIaXWg60FjTh4IhS8-iOYnl-2leFXA48g&s",
      places: "Local sweet shops or Godavari Sweets",
      rating: 4.4
    }
  ];

  const services = [
    { icon: Shield, title: "Wall Damp Check", desc: "Free home or site inspection" },
    { icon: Palette, title: "Color Consultation", desc: "Texture & color suggestions" },
    { icon: Award, title: "Expert Teams", desc: "Local, skilled painting professionals" },
    { icon: Droplets, title: "Waterproofing", desc: "Complete weatherproofing solutions" }
  ];

  const FoodCard = ({ food }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={food.image} 
          alt={food.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold text-gray-800">{food.rating}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{food.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{food.description}</p>
        <div className="bg-orange-50 rounded-lg p-3">
          <div className="flex items-center text-sm text-orange-800">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="font-medium">Try at: </span>
          </div>
          <p className="text-sm text-orange-700 mt-1">{food.places}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with Vizag Image */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src= {VizagImage}
          alt="Beautiful coastal view of Vizag with beaches and modern architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Best Paints for Vizag Weather
            </h1>
            <p className="text-xl font-medium md:text-2xl text-gray-200">
              Salt-Resistant, Waterproof & Humidity-Proof painting solutions
            </p>
          </div>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        
        {/* Paint Options Section */}
        <section>
          
          {/* Exterior Paints */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-3 bg-orange-100 px-6 py-3 rounded-full mb-6">
              <Home className="w-6 h-6 text-orange-600" />
              <span className="text-orange-800 font-semibold">Exterior Paints</span>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Use Salt-Resistant & Waterproof Paints:
            </h2>
            
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <ul className="space-y-3 mb-6">
                <li className="text-lg text-gray-700">• Asian Paints Apex Ultima Protek</li>
                <li className="text-lg text-gray-700">• Berger WeatherCoat Long Life 10</li>
                <li className="text-lg text-gray-700">• Dulux Weathershield Max</li>
              </ul>
            </div>
          </div>

          {/* Interior Paints */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-3 bg-green-100 px-6 py-3 rounded-full mb-6">
              <Palette className="w-6 h-6 text-green-600" />
              <span className="text-green-800 font-semibold">Interior Paints</span>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Use Anti-Fungal & Moisture-Resistant Paints:
            </h2>
            
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <ul className="space-y-3 mb-6">
                <li className="text-lg text-gray-700">• Asian Paints Royale Health Shield</li>
                <li className="text-lg text-gray-700">• JSW Pixa Elegant</li>
                <li className="text-lg text-gray-700">• Nerolac Excel Total</li>
              </ul>
            </div>
          </div>

          {/* Bathrooms, Kitchens & Basements */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-3 bg-blue-100 px-6 py-3 rounded-full mb-6">
              <Droplets className="w-6 h-6 text-blue-600" />
              <span className="text-blue-800 font-semibold">Bathrooms, Kitchens & Basements</span>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Use Damp-Proof & Mold-Proof Paints:
            </h2>
            
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <ul className="space-y-3 mb-6">
                <li className="text-lg text-gray-700">• Asian Paints Damp Sheath Interior</li>
                <li className="text-lg text-gray-700">• Dulux EasyCare Damp Protect</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Paint Suggestions by Vizag Area */}
        <section className="bg-white rounded-3xl shadow-xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Paint Suggestions by Vizag Area
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 font-bold text-gray-800 border">Area</th>
                  <th className="text-left p-4 font-bold text-gray-800 border">Suggested Paint Features</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border font-semibold text-gray-700">Beach Road, RK Beach</td>
                  <td className="p-4 border text-gray-600">Salt-proof exterior paints</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-semibold text-gray-700">Gajuwaka, NAD</td>
                  <td className="p-4 border text-gray-600">UV-resistant and damp-proof paints</td>
                </tr>
                <tr>
                  <td className="p-4 border font-semibold text-gray-700">MVP Colony, Seethammadhara</td>
                  <td className="p-4 border text-gray-600">Anti-fungal, stain-resistant interior emulsions</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-semibold text-gray-700">Dwaraka Nagar, Jagadamba</td>
                  <td className="p-4 border text-gray-600">Long-lasting waterproof emulsions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 text-center">
            <p className="text-gray-700 text-lg">
              We use top-quality paints from <span className="font-bold text-orange-600">Asian Paints, Berger, Dulux, JSW, and Nerolac</span>, selected to perform best in Vizag's coastal conditions.
            </p>
          </div>
        </section>

        {/* Famous Foods Section */}
        <section>
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-yellow-100 px-6 py-3 rounded-full mb-4">
              <span className="text-2xl">🍴</span>
              <span className="text-yellow-800 font-semibold">Vizag Cuisine</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Famous Foods of Vizag
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              While we protect your walls from coastal weather, explore the spicy coastal Andhra cuisine that makes Vizag a food lover's paradise!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vizagFoods.map((food, index) => (
              <FoodCard key={index} food={food} />
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 text-center">
            <p className="text-gray-800 text-lg font-medium">
              Vizag's cuisine is a fiery coastal celebration—every dish packs the punch of authentic Andhra flavors! 🌶️
            </p>
          </div>
        </section>

      </div>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default VizagWeather;