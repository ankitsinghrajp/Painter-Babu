import { MapPin, Palette, Home, Droplets, Star, Award, Clock, Shield, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Navbar from '@/components/Navbar';
import IndoreImage from '../assets/indore-railway-image2.jpg'

const IndoreWeather = () => {
  
const indoreFoods = [
  {
    name: "Poha Jalebi",
    description: "A classic Indori breakfast combo — soft, steamed poha topped with sev, onions, and jeeravan masala, served with crispy, sweet jalebis.",
    image: "https://cms.patrika.com/wp-content/uploads/2022/12/04/capture_1.jpg",
    places: "Young Tarang (Chhappan Dukan), Rajwada area",
    rating: 4.9
  },
  {
    name: "Garadu (Fried Yam Chaat)",
    description: "Fried chunks of yam tossed in lemon juice and spicy masala — especially popular in winter. Hot, spicy, tangy, and very local!",
    image: "https://nishamadhulika.com/imgpst/featured/garadu_chaat.jpg",
    places: "Sarafa Bazaar (evening onwards)",
    rating: 4.7
  },
  {
    name: "Johnny Hot Dog",
    description: "A desi-style burger with aloo tikki or egg, served in a bun. Simple, spicy, and famous across Indore.",
    image: "https://b.zmtcdn.com/data/pictures/chains/5/1400315/d464789d84c842dfc3f6c5c1d283f361.jpg?fit=around|960:500&crop=960:500;*,*",
    places: "Johnny Hot Dog – Chhappan Dukan",
    rating: 4.6
  },
  {
    name: "Khopra Patties",
    description: "Mashed potato balls stuffed with a coconut-spice filling, deep-fried and served with chutneys. Crunchy outside, flavorful inside.",
    image: "https://images.timesnownews.com/thumb/msid-112257586,thumbsize-1464545,width-1280,height-720,resizemode-75/112257586.jpg",
    places: "Vijay Chaat House (Rajwada)",
    rating: 4.5
  },
  {
    name: "Shikanji (Indore Version)",
    description: "Not the lemon drink — Indore's Shikanji is a rich, thick milk-based drink made with rabri, dry fruits, saffron, and cardamom. Very filling!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7HCGCDXWHdKismiXUTXvfgIKRMSSz8AOVw&s",
    places: "Madhuram Sweets, Sarafa",
    rating: 4.8
  },
  {
    name: "Indori Namkeen",
    description: "A huge variety of snacks — laung sev, kachori sev, dal moth, and more — available at every corner and great for gifting.",
    image: "https://www.indore.online/cdn/shop/articles/namkeen_Im_1_720x.jpg?v=1698393541",
    places: "Om Namkeen, Apna Sweets",
    rating: 4.7
  }
];

const services = [
  { icon: Shield, title: "Wall Damp Check", desc: "Professional site inspection" },
  { icon: Palette, title: "Color Consultation", desc: "Free theme suggestions" },
  { icon: Award, title: "Expert Teams", desc: "Indore-based painting professionals" },
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
    <Navbar/>
    
    {/* Hero Section with Indore Image */}
    <section className="relative h-96 overflow-hidden">
      <img 
        src= {IndoreImage}
        alt="Beautiful view of Indore city with modern buildings and traditional architecture"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Best Paints for Indore Homes
          </h1>
          <p className="text-xl font-medium md:text-2xl text-gray-200">
            Painting solutions for Indore's unique weather conditions
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
            Use Heat-Reflective & Dust-Resistant Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Asian Paints Apex Dust Proof</li>
              <li className="text-lg text-gray-700">• Berger WeatherCoat Anti Dust</li>
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
            Use Washable, Low-Maintenance Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Asian Paints Royale Aspira</li>
              <li className="text-lg text-gray-700">• Nerolac Beauty Gold</li>
              <li className="text-lg text-gray-700">• JSW Pixa Elegant</li>
            </ul>
          
          </div>
        </div>

        {/* Kitchens & Bathrooms */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-3 bg-blue-100 px-6 py-3 rounded-full mb-6">
            <Droplets className="w-6 h-6 text-blue-600" />
            <span className="text-blue-800 font-semibold">Kitchens & Bathrooms</span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Use Anti-Moisture Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Asian Paints Damp Sheath Interior</li>
              <li className="text-lg text-gray-700">• Dulux EasyCare Anti-Bacterial</li>
            </ul>
            
          </div>
        </div>
      </section>

      {/* Best Paint Solutions by Indore Locality */}
      <section className="bg-white rounded-3xl shadow-xl md:p-12 p-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Best Paint Solutions by Indore Locality
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
                <td className="p-4 border font-semibold text-gray-700">Vijay Nagar, Palasia</td>
                <td className="p-4 border text-gray-600">Luxury interiors, low dust paint</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border font-semibold text-gray-700">Rajwada, Malharganj</td>
                <td className="p-4 border text-gray-600">Moisture-resistant paints for old homes</td>
              </tr>
              <tr>
                <td className="p-4 border font-semibold text-gray-700">Nipania, MR-10</td>
                <td className="p-4 border text-gray-600">Heat-reflective exterior emulsions</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border font-semibold text-gray-700">Rau, Khandwa Road</td>
                <td className="p-4 border text-gray-600">Durable, anti-crack waterproof coatings</td>
              </tr>
            </tbody>
          </table>
        </div>

         <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <p className="text-gray-700 text-lg">
            We use premium products from <span className="font-bold text-blue-600">Asian Paints, Berger, Dulux, Nerolac, JSW</span> and more, tailored specifically for Indore's weather conditions.
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
            Famous Foods of Indore
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            While we paint your walls beautiful, discover the incredible street food culture that makes Indore India's street food capital!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indoreFoods.map((food, index) => (
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

export default IndoreWeather;