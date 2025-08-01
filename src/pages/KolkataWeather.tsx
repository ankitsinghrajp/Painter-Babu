import { MapPin, Palette, Home, Droplets, Star, Award, Clock, Shield, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Navbar from '@/components/Navbar';

const KolkataWeather = () => {
  
const kolkataFoods = [
  {
    name: "Kolkata Biryani",
    description: "A unique, mild-flavored biryani with soft mutton or chicken, fragrant rice, boiled egg, and a signature aloo (potato) — a legacy of Nawabi influence.",
    image: "https://i0.wp.com/ishitaunblogged.com/wp-content/uploads/2023/07/729bc-header-copy.jpg?fit=1200%2C600&ssl=1",
    places: "Arsalan, Royal Indian Hotel, Aminia, Zeeshan",
    rating: 4.9
  },
  {
    name: "Kolkata Kathi Roll",
    description: "Paratha wrapped around spicy chicken, egg, or paneer fillings, garnished with onions and chutneys — the original 'wrap' of India!",
    image: "https://assets.cntraveller.in/photos/628f7ec3213f2af0645a407d/16:9/w_1920,h_1080,c_limit/Kolkata-kati-rolls-lead.jpg",
    places: "Nizam's (New Market), Kusum Rolls (Park Street)",
    rating: 4.8
  },
  {
    name: "Shorshe Ilish",
    description: "Hilsa fish cooked in pungent mustard paste — the ultimate Bengali delicacy. Best enjoyed with plain rice and minimal distractions!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPep220c9ynentCH9r7HyL3W-kixTm0gi5wQ&s",
    places: "Bhojohori Manna, 6 Ballygunge Place",
    rating: 4.7
  },
  {
    name: "Macher Jhol",
    description: "A staple Bengali dish — fresh river fish cooked with potatoes, tomatoes, and spices in a thin, comforting curry.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcKm5qLh5ZV4aV6g_Zd2KUwSmlAv0_-4Ajg&s",
    places: "Kewpie's Kitchen, Bhojohori Manna",
    rating: 4.6
  },
  {
    name: "Rasgulla & Rajbhog",
    description: "Soft, spongy balls made from chhena (cottage cheese), soaked in sugar syrup — Kolkata is the original home of this iconic sweet.",
    image: "https://staticimg.amarujala.com/image/original/2014/09/14/food-5415603b54c88.jpg",
    places: "K.C. Das, Balaram Mullick & Radharaman Mullick",
    rating: 4.9
  },
  {
    name: "Mishti Doi",
    description: "Thick, creamy, caramel-flavored curd served chilled — a traditional Bengali dessert that's as soulful as it gets. Often served in clay pots for extra flavor.",
    image: "https://aahaaramonline.com/wp-content/uploads/2015/10/Bengali_Mishti_Doi.png",
    places: "Putiram, K.C. Das, Local sweet shops",
    rating: 4.8
  }
];

const services = [
  { icon: Shield, title: "Moisture Inspection", desc: "Professional wall moisture assessment" },
  { icon: Palette, title: "Color Consultation", desc: "Free theme suggestions" },
  { icon: Award, title: "Expert Teams", desc: "Kolkata-based painting professionals" },
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
    
    {/* Hero Section with Kolkata Image */}
    <section className="relative h-96 overflow-hidden">
      <img 
        src="https://s7ap1.scene7.com/is/image/incredibleindia/howrah-bridge-kolkata-west-bengal-2-attr-hero?qlt=82&ts=1742153659633"
        alt="Beautiful view of Kolkata city with Howrah Bridge and river Ganges"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Best Paints for Kolkata Weather
          </h1>
          <p className="text-xl font-medium md:text-2xl text-gray-200">
            Anti-Damp, Mold-Resistant & Coastal-Safe Paint Solutions for Kolkata's Climate
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
            <span className="text-orange-800 font-semibold">Exterior Walls</span>
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
            <span className="text-green-800 font-semibold">Interior Walls</span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Use Anti-Damp & Fungus-Resistant Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Asian Paints Royale Health Shield</li>
              <li className="text-lg text-gray-700">• JSW Halo Advanced</li>
              <li className="text-lg text-gray-700">• Nerolac Excel Total</li>
            </ul>
         
          </div>
        </div>

        {/* Kitchen, Bathroom & Basements */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-3 bg-blue-100 px-6 py-3 rounded-full mb-6">
            <Droplets className="w-6 h-6 text-blue-600" />
            <span className="text-blue-800 font-semibold">Kitchen, Bathroom & Basements</span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Use Moisture Control Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Dulux EasyCare Damp Protect</li>
              <li className="text-lg text-gray-700">• Asian Paints Damp Sheath Interior</li>
            </ul>
           
          </div>
        </div>
      </section>

      {/* Paint Solutions by Locality in Kolkata */}
      <section className="bg-white rounded-3xl shadow-xl md:p-12 p-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Paint Solutions by Locality in Kolkata
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-4 font-bold text-gray-800 border">Area</th>
                <th className="text-left p-4 font-bold text-gray-800 border">Paint Features Recommended</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border font-semibold text-gray-700">Salt Lake, New Town</td>
                <td className="p-4 border text-gray-600">Anti-fungal interior & waterproof exterior</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border font-semibold text-gray-700">Behala, Tollygunge</td>
                <td className="p-4 border text-gray-600">Anti-damp paints for older walls</td>
              </tr>
              <tr>
                <td className="p-4 border font-semibold text-gray-700">Howrah, Shibpur</td>
                <td className="p-4 border text-gray-600">Salt-resistant paints for coastal exposure</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border font-semibold text-gray-700">Ballygunge, Park Street</td>
                <td className="p-4 border text-gray-600">Luxury interior finishes + stain protection</td>
              </tr>
            </tbody>
          </table>
        </div>

         <div className="mt-8 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 text-center">
          <p className="text-gray-700 text-lg">
            We use premium products from <span className="font-bold text-teal-600">Asian Paints, Berger, Dulux, Nerolac, JSW</span> and more, tailored specifically for Kolkata's humid and coastal weather conditions.
          </p>
        </div>
      </section>

      {/* Famous Foods Section */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-yellow-100 px-6 py-3 rounded-full mb-4">
            <span className="text-2xl">🍴</span>
            <span className="text-yellow-800 font-semibold">Kolkata Cuisine</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Famous Foods of Kolkata
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            While we protect your walls from Kolkata's climate, explore the incredible culinary heritage that makes the City of Joy India's cultural capital!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kolkataFoods.map((food, index) => (
            <FoodCard key={index} food={food} />
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 text-center">
          <p className="text-gray-800 text-lg font-medium">
            Kolkata's food isn't just cuisine—it's poetry, tradition, and pure emotion! 🌟
          </p>
        </div>
      </section>
    </div>
    
    <Footer/>
    <WhatsAppFloat/>
  </div>
);
};

export default KolkataWeather;