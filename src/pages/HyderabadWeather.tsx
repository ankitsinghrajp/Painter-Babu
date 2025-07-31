import { MapPin, Palette, Home, Droplets, Star, Award, Clock, Shield, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Navbar from '@/components/Navbar';

const HyderabadWeather = () => {
  
const hyderabadFoods = [
  {
    name: "Hyderabadi Biryani",
    description: "The crown jewel of Hyderabad! Fragrant basmati rice layered with spiced marinated meat, cooked in dum style. Served with Mirchi ka Salan & Raita.",
    image: "https://vismaifood.com/storage/app/uploads/public/980/eb9/ed6/thumb__1200_0_0_0_auto.jpg",
    places: "Paradise, Bawarchi, Shah Ghouse, Hotel Shadab",
    rating: 4.9
  },
  {
    name: "Haleem",
    description: "A rich, slow-cooked stew made of wheat, lentils, and meat — blended into a paste and topped with fried onions, ghee, lemon, and mint. High on protein & flavor.",
    image: "https://c.ndtvimg.com/haleem_625x300_1528714425749.jpg",
    places: "Pista House, Café 555, Sarvi, Shah Ghouse",
    rating: 4.8
  },
  {
    name: "Pathar ka Gosht",
    description: "Tender cuts of mutton marinated in spices and cooked on a flat stone slab over hot coals — a smoky, juicy Hyderabadi delicacy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTviXbDBA-dBkr-sFnPZ-aD1evnXoPM-_gvFw&s",
    places: "Bade Miyan, Hotel Shadab, Charminar area",
    rating: 4.7
  },
  {
    name: "Seekh Kebabs",
    description: "Delicious minced meat grilled on skewers or stuffed with yogurt and spices, these kebabs are melt-in-the-mouth starters.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjM4-HD2f7Dp13SVo7P1gynMrNP8HJYtzodQ&s",
    places: "Paradise, Shah Ghouse, Alhamdulillah Hotel",
    rating: 4.6
  },
  {
    name: "Double Ka Meetha",
    description: "Hyderabad's take on bread pudding — made with fried bread slices soaked in sugar syrup, milk, saffron, and dry fruits. Served at most weddings and biryani joints.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXlqEXdqd0oMe6bXVK3XyFb1xJgjgiww7odg&s",
    places: "Paradise, Shah Ghouse, Hotel Shadab",
    rating: 4.5
  },
  {
    name: "Irani Chai & Osmania Biscuits",
    description: "A legacy of the old Irani cafés, this strong chai is best enjoyed with sweet-and-salty Osmania biscuits.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzG8WWc2aFYt_hm33CFb7NLh44O9O3F727Jg&s",
    places: "Nimrah Café (Charminar), Café Niloufer, Shah Ghouse",
    rating: 4.8
  }
];

const services = [
  { icon: Shield, title: "Site Moisture Inspection", desc: "Professional wall assessment" },
  { icon: Palette, title: "Color Consultation", desc: "Free theme suggestions" },
  { icon: Award, title: "Expert Teams", desc: "Hyderabad-based painting professionals" },
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
    
    {/* Hero Section with Hyderabad Image */}
    <section className="relative h-96 overflow-hidden">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/f/f7/A_typical_charminar_evening.jpg"
        alt="Beautiful view of Hyderabad city with Charminar and modern buildings"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Best Paints for Hyderabad Weather
          </h1>
          <p className="text-xl font-medium md:text-2xl text-gray-200">
            Heat-Resistant & Moisture-Proof Paint Solutions for Hyderabad's Climate
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
            Use Heat-Reflective & Waterproof Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Asian Paints Apex Ultima Heat Shield</li>
              <li className="text-lg text-gray-700">• Berger WeatherCoat Anti Dust</li>
              <li className="text-lg text-gray-700">• Nerolac Excel Total</li>
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
            Use Stain-Resistant, Easy-Clean Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Asian Paints Royale Aspira</li>
              <li className="text-lg text-gray-700">• Dulux Velvet Touch</li>
              <li className="text-lg text-gray-700">• JSW Pixa Elegant</li>
            </ul>
          </div>
        </div>

        {/* Bathrooms & Kitchens */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-3 bg-blue-100 px-6 py-3 rounded-full mb-6">
            <Droplets className="w-6 h-6 text-blue-600" />
            <span className="text-blue-800 font-semibold">Bathrooms & Kitchens</span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Use Anti-Fungal, Anti-Moisture Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Asian Paints Royale Health Shield</li>
              <li className="text-lg text-gray-700">• Dulux EasyCare Damp Protect</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Paint Solutions by Hyderabad Locality */}
      <section className="bg-white rounded-3xl shadow-xl p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Best Paint Solutions by Locality in Hyderabad
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-4 font-bold text-gray-800 border">Area</th>
                <th className="text-left p-4 font-bold text-gray-800 border">Paint Feature Needed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border font-semibold text-gray-700">Gachibowli, Hitech City</td>
                <td className="p-4 border text-gray-600">Dust-resistant, heat-reflective paints</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border font-semibold text-gray-700">Banjara Hills, Jubilee Hills</td>
                <td className="p-4 border text-gray-600">Luxury interior paints with rich finishes</td>
              </tr>
              <tr>
                <td className="p-4 border font-semibold text-gray-700">Secunderabad, Tarnaka</td>
                <td className="p-4 border text-gray-600">Anti-fungal paints for older homes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border font-semibold text-gray-700">Uppal, LB Nagar</td>
                <td className="p-4 border text-gray-600">Waterproof exterior emulsions</td>
              </tr>
            </tbody>
          </table>
        </div>

         <div className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 text-center">
          <p className="text-gray-700 text-lg">
            We use premium products from <span className="font-bold text-orange-600">Asian Paints, Berger, Dulux, Nerolac, JSW</span> and more, tailored specifically for Hyderabad's heat and monsoon conditions.
          </p>
        </div>
      </section>

      {/* Famous Foods Section */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-yellow-100 px-6 py-3 rounded-full mb-4">
            <span className="text-2xl">🍴</span>
            <span className="text-yellow-800 font-semibold">Hyderabadi Cuisine</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Famous Foods of Hyderabad
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            While we protect your walls from Hyderabad's climate, explore the royal Nizami cuisine that makes the City of Nizams India's biryani capital!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hyderabadFoods.map((food, index) => (
            <FoodCard key={index} food={food} />
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 text-center">
          <p className="text-gray-800 text-lg font-medium">
            Hyderabad's cuisine is a royal feast—every bite tells a story of Nizami heritage! 👑
          </p>
        </div>
      </section>
    </div>
    
    <Footer/>
    <WhatsAppFloat/>
  </div>
);
};

export default HyderabadWeather;