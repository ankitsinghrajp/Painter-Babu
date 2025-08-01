import { MapPin, Palette, Home, Droplets, Star, Award, Clock, Shield, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Navbar from '@/components/Navbar';
import BangloreImage from "../assets/banglore-final-image.jpg"

const BangaloreWeather = () => {
  
const bangaloreFoods = [
  {
    name: "Masala Dosa",
    description: "Crispy, golden, and spicy. A South Indian breakfast staple that's become Bangalore's signature dish.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXFOwNRJLmXDAQnoBFcEiBnCMC3gWXT-wSQ&s",
    places: "CTR, Vidyarthi Bhavan, MTR",
    rating: 4.9
  },
  {
    name: "Idli-Vada with Filter Coffee",
    description: "The classic South Indian breakfast combo - soft steamed idlis, crispy vadas, and aromatic filter coffee.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVJldy43JJbMRSYSX6TURgENGlfvLjv3mmQ&s",
    places: "Brahmin's Coffee Bar, Central Tiffin Room",
    rating: 4.8
  },
  {
    name: "Ragi Mudde with Soppu Saaru",
    description: "Traditional Karnataka meal - finger millet balls served with leafy green curry. A nutritious local favorite.",
    image: "https://pbs.twimg.com/media/DV5GZScX4AAbrhF.jpg",
    places: "Local traditional restaurants, Halli Mane",
    rating: 4.6
  },
  {
    name: "Bisi Bele Bath",
    description: "Hot lentil-rice medley cooked with vegetables and aromatic spices. Comfort food at its best.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6J-IWDVWgKhDd8mD_zfa4YSvs3m94PFWtIA&s",
    places: "MTR, Halli Mane, SLV",
    rating: 4.7
  },
  {
    name: "Pani Puri & Chaat",
    description: "Crispy puris filled with spicy, tangy water and chutneys. The ultimate street food experience.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjf4Eh6vFkIfyIKG52US7p0e155slJpB5AQ&s",
    places: "VV Puram Food Street, Jayanagar 4th Block",
    rating: 4.8
  },
  {
    name: "Mysore Pak",
    description: "Ghee-loaded sweet delight that melts in your mouth. A must-try traditional Karnataka sweet.",
    image: "https://www.shreemithai.com/cdn/shop/products/spl-mysore-pak-206182.jpg?v=1707820107&width=800",
    places: "Anand Sweets, Krishna Sweets",
    rating: 4.5
  }
];

const services = [
  { icon: Shield, title: "Wall Damp Check", desc: "Professional site inspection" },
  { icon: Palette, title: "Color Consultation", desc: "Free theme suggestions" },
  { icon: Award, title: "Expert Teams", desc: "Bangalore-based painting professionals" },
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
      <div className="bg-green-50 rounded-lg p-3">
        <div className="flex items-center text-sm text-green-800">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="font-medium">Try at: </span>
        </div>
        <p className="text-sm text-green-700 mt-1">{food.places}</p>
      </div>
    </div>
  </div>
);

return (
  <div className="min-h-screen bg-gray-50">
    <Navbar/>
    
    {/* Hero Section with Bangalore Image */}
    <section className="relative h-96 overflow-hidden">
      <img 
        src= {BangloreImage}
        alt="Beautiful view of Bangalore city with modern buildings and traditional architecture"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Best Paints for Bangalore Homes
          </h1>
          <p className="text-xl font-medium md:text-2xl text-gray-200">
             Painting solutions for Bangalore's unique weather conditions
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
            Use Weatherproof Emulsions:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Asian Paints Apex Ultima</li>
              <li className="text-lg text-gray-700">• Berger WeatherCoat Long Life</li>
              <li className="text-lg text-gray-700">• Dulux Weathershield</li>
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
            Use Washable Emulsions:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Asian Paints Royale</li>
              <li className="text-lg text-gray-700">• Nerolac Impressions Eco Clean</li>
            </ul>
          
          </div>
        </div>

        {/* Ceilings & Bathrooms */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-3 bg-blue-100 px-6 py-3 rounded-full mb-6">
            <Droplets className="w-6 h-6 text-blue-600" />
            <span className="text-blue-800 font-semibold">Ceilings & Bathrooms</span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Use Anti-moisture Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Asian Paints Damp Block</li>
              <li className="text-lg text-gray-700">• Berger Anti Damp Plus</li>
            </ul>
            
          </div>
        </div>
      </section>

      {/* Best Paint Solutions by Bangalore Locality */}
      <section className="bg-white rounded-3xl shadow-xl p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Best Paint Solutions by Bangalore Locality
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-4 font-bold text-gray-800 border">Area</th>
                <th className="text-left p-4 font-bold text-gray-800 border">Recommended Paint Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border font-semibold text-gray-700">Koramangala, Indiranagar</td>
                <td className="p-4 border text-gray-600">Anti-pollution, high-durability paints</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border font-semibold text-gray-700">Jayanagar, JP Nagar</td>
                <td className="p-4 border text-gray-600">Stain-resistant, elegant matte interiors</td>
              </tr>
              <tr>
                <td className="p-4 border font-semibold text-gray-700">Whitefield, Sarjapur</td>
                <td className="p-4 border text-gray-600">Exterior waterproof paints for villas</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border font-semibold text-gray-700">RT Nagar, Malleshwaram</td>
                <td className="p-4 border text-gray-600">Anti-fungal paints for older buildings</td>
              </tr>
            </tbody>
          </table>
        </div>

         <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <p className="text-gray-700 text-lg">
            We use premium products from <span className="font-bold text-blue-600">Asian Paints, Berger, Dulux, Nerolac, JSW</span> and more, tailored specifically for Bangalore's weather conditions.
          </p>
        </div>
      </section>


      {/* Famous Foods Section */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-yellow-100 px-6 py-3 rounded-full mb-4">
            <span className="text-2xl">🍽️</span>
            <span className="text-yellow-800 font-semibold">Local Flavors</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Famous Foods of Bangalore
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            While we paint your walls beautiful, discover the delicious flavors that make Bangalore a food lover's paradise!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bangaloreFoods.map((food, index) => (
            <FoodCard key={index} food={food} />
          ))}
        </div>
      </section>
    </div>
    
    <Footer/>
    <WhatsAppFloat/>
  </div>
);
};

export default BangaloreWeather;