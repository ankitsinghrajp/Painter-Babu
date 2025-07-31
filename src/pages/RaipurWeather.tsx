import { MapPin, Palette, Home, Droplets, Star, Award, Clock, Shield, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Navbar from '@/components/Navbar';

const RaipurWeather = () => {
  
const raipurFoods = [
  {
    name: "Chana Samosa",
    description: "Raipur's signature street snack — samosa served crushed and topped with spicy black gram (chana) curry, onions, and chutneys.",
    image: "https://curryhutindianbistro.ca/wp-content/uploads/2021/11/Samosa-With-Chana.jpg",
    places: "Chana Samosa Wale (Sadar Bazar), Jai Ambey Chana Samosa (Pandri)",
    rating: 4.7
  },
  {
    name: "Faraa (Steamed Rice Dumplings)",
    description: "Made from rice flour and lightly spiced, these soft, steamed dumplings are a staple Chhattisgarhi breakfast or snack. Healthy and light!",
    image: "https://i.ytimg.com/vi/6vrGOQ1Xs5w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCM73H1mmB4SrgGTNMnNa6rqoiFLg",
    places: "Local home-style eateries",
    rating: 4.6
  },
  {
    name: "Chousela (Rice Puri)",
    description: "Deep-fried puris made from rice flour, served with spicy mutton or kadhi — festive and flavorful.",
    image: "https://images.slurrp.com/prod/rich_article/w7c94l57nlc.webp?impolicy=slurrp-20210601&width=1200&height=675",
    places: "Tribal food festivals or authentic Chhattisgarhi thali joints",
    rating: 4.5
  },
  {
    name: "Bore Baasi (Boiled Rice in Water)",
    description: "A summer cooler dish where rice is soaked overnight in water and eaten cold with raw onion, green chili, or curd. Rustic and nutritious!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU-ErPiEge7qGesq8QJdB7URO7-zK9Zkaq2g&s",
    places: "Rural households, traditional eateries",
    rating: 4.2
  },
  {
    name: "Raipur-style Chaat",
    description: "A spicy mix of aloo tikki, curd, chutneys, and sev — similar to north Indian chaat but with extra spice and local masala.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjf4Eh6vFkIfyIKG52US7p0e155slJpB5AQ&s",
    places: "Gol Bazar, Telibandha Lake, Marine Drive stalls",
    rating: 4.6
  },
  {
    name: "Jalebi & Poha",
    description: "Like Indore, Raipur loves a plate of soft poha topped with sev — and the combo isn't complete without fresh jalebi from a roadside vendor.",
    image: "https://cms.patrika.com/wp-content/uploads/2022/12/04/capture_1.jpg",
    places: "Pandri Cloth Market, Shastri Bazaar mornings",
    rating: 4.8
  }
];

const services = [
  { icon: Shield, title: "Wall Damp Check", desc: "Professional site inspection" },
  { icon: Palette, title: "Color Consultation", desc: "Free theme suggestions" },
  { icon: Award, title: "Expert Teams", desc: "Raipur-based painting professionals" },
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
      <div className="bg-teal-50 rounded-lg p-3">
        <div className="flex items-center text-sm text-teal-800">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="font-medium">Try at: </span>
        </div>
        <p className="text-sm text-teal-700 mt-1">{food.places}</p>
      </div>
    </div>
  </div>
);

return (
  <div className="min-h-screen bg-gray-50">
    <Navbar/>
    
    {/* Hero Section with Raipur Image */}
    <section className="relative h-96 overflow-hidden">
      <img 
        src="https://sundayguardianlive.com/wp-content/uploads/2018/02/Naya%20Raipur%20is%20the%20crown%20of%20Chhattisgarh%20and%20has%20set%20off%20a%20benchmark%20for%20the%20future%20smart%20cities%20in%20India%20copy.jpg"
        alt="Beautiful view of Raipur city with modern buildings and traditional architecture"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Best Paints for Raipur Homes
          </h1>
          <p className="text-xl font-medium md:text-2xl text-gray-200">
            Painting solutions for Raipur's unique weather conditions
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
            Use Weather-Proof Exterior Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Dulux Weather-Proof Paints</li>
              <li className="text-lg text-gray-700">• Berger Weather-Proof Solutions</li>
              <li className="text-lg text-gray-700">• Asian Paints Exterior Emulsions</li>
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
            Use Moisture & UV Resistant Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Dulux Interior Solutions</li>
              <li className="text-lg text-gray-700">• Berger Anti-Moisture Paints</li>
              <li className="text-lg text-gray-700">• Asian Paints UV Protection Range</li>
            </ul>
          
          </div>
        </div>

        {/* High Humidity Areas */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-3 bg-blue-100 px-6 py-3 rounded-full mb-6">
            <Droplets className="w-6 h-6 text-blue-600" />
            <span className="text-blue-800 font-semibold">High Humidity Areas</span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Use Anti-Mold & Mildew Resistant Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Dulux Anti-Mold Solutions</li>
              <li className="text-lg text-gray-700">• Berger Moisture Barrier Paints</li>
              <li className="text-lg text-gray-700">• Asian Paints Humidity Control Range</li>
            </ul>
            
          </div>
        </div>
      </section>

      {/* Best Paint Solutions by Raipur Locality */}
      <section className="bg-white rounded-3xl shadow-xl p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Best Paint Solutions by Raipur Locality
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
                <td className="p-4 border font-semibold text-gray-700">Civil Lines, Shankar Nagar</td>
                <td className="p-4 border text-gray-600">Premium anti-dust, luxury interior paints</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border font-semibold text-gray-700">Pandri, Samta Colony</td>
                <td className="p-4 border text-gray-600">Monsoon-resistant, anti-algae exterior coatings</td>
              </tr>
              <tr>
                <td className="p-4 border font-semibold text-gray-700">Tatibandh, Kota</td>
                <td className="p-4 border text-gray-600">Heat-reflective, crack-resistant paints</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border font-semibold text-gray-700">Devendra Nagar, Tikrapara</td>
                <td className="p-4 border text-gray-600">Anti-fungal, moisture-proof wall solutions</td>
              </tr>
            </tbody>
          </table>
        </div>

         <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <p className="text-gray-700 text-lg">
            We use premium products from <span className="font-bold text-blue-600">Dulux, Berger, Asian Paints, Stanvac, INDIGO, Nippon Paint</span> and more, tailored specifically for Raipur's weather conditions.
          </p>
        </div>
      </section>


      {/* Famous Foods Section */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-yellow-100 px-6 py-3 rounded-full mb-4">
            <span className="text-2xl">🍽️</span>
            <span className="text-yellow-800 font-semibold">Chhattisgarh Flavors</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Famous Foods of Raipur
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            While we paint your walls beautiful, discover the authentic flavors of Chhattisgarhi cuisine and traditional tribal delicacies!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {raipurFoods.map((food, index) => (
            <FoodCard key={index} food={food} />
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            🌆 Best Places for Food in Raipur
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Gol Bazaar & Sadar Bazar</h4>
              <p className="text-gray-700 text-sm">Classic snacks, sweets, and chaats</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Pandri Market</h4>
              <p className="text-gray-700 text-sm">Local eateries, street vendors, and breakfast joints</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Marine Drive (Telibandha Lake)</h4>
              <p className="text-gray-700 text-sm">Popular evening hangout with fast food stalls</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <Footer/>
    <WhatsAppFloat/>
  </div>
);
};

export default RaipurWeather;