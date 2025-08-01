import { MapPin, Palette, Home, Droplets, Star, Award, Clock, Shield, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Navbar from '@/components/Navbar';

const MumbaiWeather = () => {
  
const mumbaiFoods = [
  {
    name: "Vada Pav",
    description: "Known as Mumbai's answer to the burger, this spicy potato fritter is sandwiched in a pav (bun), served with chutneys and fried chilies.",
    image: "https://blog.swiggy.com/wp-content/uploads/2024/11/Image-1_mumbai-vada-pav-1024x538.png",
    places: "Anand Stall (Vile Parle), Ashok Vada Pav (Dadar)",
    rating: 4.9
  },
  {
    name: "Pav Bhaji",
    description: "A buttery, spicy vegetable mash served with soft, toasted pav. A must-try dish that originated on the streets of Mumbai.",
    image: "https://www.chefkunalkapur.com/wp-content/uploads/2023/02/DSC08513-1300x731.jpg?v=1676714719",
    places: "Sardar Pav Bhaji (Tardeo), Cannon Pav Bhaji (VT Station)",
    rating: 4.8
  },
  {
    name: "Bombay Sandwich",
    description: "Layered with vegetables, mint chutney, and sometimes cheese — this street sandwich is toasted or grilled to crispy perfection.",
    image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/garlic_bread_bombay_76544_16x9.jpg",
    places: "Street vendors near Churchgate, CST",
    rating: 4.6
  },
  {
    name: "Misal Pav",
    description: "A spicy Maharashtrian curry made with sprouts and topped with farsan (crunchy mixture), onions, and lemon, served with pav.",
    image: "https://i.ytimg.com/vi/VcaD_GI1Emc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBHjTlqwjNCkntYxxavPCaP5G8h2A",
    places: "Aaswad (Dadar), Mamledar Misal (Thane)",
    rating: 4.7
  },
  {
    name: "Bombil Fry (Bombay Duck)",
    description: "Despite the name, it's a fish, not a duck! Bombil is deep-fried in a masala coating — crispy on the outside, soft on the inside.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xPJHgbPSohJuXoZoTfqnagliZdyMabEc7jaEMfzRuTQtURFVjkY2-cMXPlCzqIy9E8c&usqp=CAU",
    places: "Gajalee, Trishna, Mahesh Lunch Home",
    rating: 4.5
  },
  {
    name: "Bhel Puri & Sev Puri",
    description: "These iconic chaat items are tangy, spicy, crunchy, and sweet all at once — a true flavor explosion.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkjI_xzLrcipfylQD5JQPz_KEvT9iACmEeg&s",
    places: "Marine Drive, Juhu Beach vendors",
    rating: 4.8
  }
];

const services = [
  { icon: Shield, title: "Damp Check", desc: "Professional site inspection" },
  { icon: Palette, title: "Color Consultation", desc: "Free theme suggestions" },
  { icon: Award, title: "Expert Teams", desc: "Mumbai-based painting professionals" },
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
    
    {/* Hero Section with Mumbai Image */}
    <section className="relative h-96 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
        alt="Beautiful view of Mumbai city skyline and Marine Drive"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Best Paints for Mumbai Weather
          </h1>
          <p className="text-xl font-medium md:text-2xl text-gray-200">
            Anti-Damp, Waterproof & Coastal-Proof Paint Solutions for Mumbai's Climate
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
            Use Waterproof & Salt-Proof Paints:
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
            Use Anti-Damp & Washable Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Asian Paints Royale Health Shield</li>
              <li className="text-lg text-gray-700">• Nerolac Excel Mica Marble</li>
              <li className="text-lg text-gray-700">• JSW Halo Advanced</li>
            </ul>
           
          </div>
        </div>

        {/* Bathrooms, Basements & Kitchens */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-3 bg-blue-100 px-6 py-3 rounded-full mb-6">
            <Droplets className="w-6 h-6 text-blue-600" />
            <span className="text-blue-800 font-semibold">Bathrooms, Basements & Kitchens</span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Use High Moisture & Mold-Resistant Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Dulux EasyCare Damp Protect</li>
              <li className="text-lg text-gray-700">• Asian Paints Damp Sheath Interior</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Paint Solutions by Mumbai Locality */}
      <section className="bg-white rounded-3xl shadow-xl md:p-12 p-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Paint Needs by Locality in Mumbai
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
                <td className="p-4 border font-semibold text-gray-700">Colaba, Worli, Marine Lines</td>
                <td className="p-4 border text-gray-600">Salt-resistant, waterproof exterior paints</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border font-semibold text-gray-700">Andheri, Bandra, Juhu</td>
                <td className="p-4 border text-gray-600">Anti-fungal, luxury interior paints</td>
              </tr>
              <tr>
                <td className="p-4 border font-semibold text-gray-700">Mulund, Thane, Chembur</td>
                <td className="p-4 border text-gray-600">Moisture-proof and anti-mold coatings</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border font-semibold text-gray-700">Borivali, Goregaon</td>
                <td className="p-4 border text-gray-600">Stain-resistant, easy-clean wall paints</td>
              </tr>
            </tbody>
          </table>
        </div>

         <div className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 text-center">
          <p className="text-gray-700 text-lg">
            We use premium products from <span className="font-bold text-orange-600">Asian Paints, Berger, Dulux, Nerolac, JSW</span> and more, tailored specifically for Mumbai's coastal and monsoon weather conditions.
          </p>
        </div>
      </section>

      {/* Famous Foods Section */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-yellow-100 px-6 py-3 rounded-full mb-4">
            <span className="text-2xl">🍴</span>
            <span className="text-yellow-800 font-semibold">Mumbai Street Food</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Famous Foods of Mumbai
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            While we protect your walls from Mumbai's weather, explore the incredible street food culture that makes Mumbai India's food capital!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mumbaiFoods.map((food, index) => (
            <FoodCard key={index} food={food} />
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 text-center">
          <p className="text-gray-800 text-lg font-medium">
            Mumbai's street food isn't just cuisine—it's an emotion, a culture, and the soul of the city! 🌟
          </p>
        </div>
      </section>
    </div>
    
    <Footer/>
    <WhatsAppFloat/>
  </div>
);
};

export default MumbaiWeather;