import { MapPin, Palette, Home, Droplets, Star, Award, Clock, Shield, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Navbar from '@/components/Navbar';

const PuneWeather = () => {
  
const puneFoods = [
  {
    name: "Misal Pav",
    description: "Spicy, tangy sprouted curry topped with farsan, onions, lemon, and served with pav — Pune's iconic breakfast dish.",
    image: "https://images.unsplash.com/photo-1606491956391-70868b5d0f47?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    places: "Bedekar Misal, Katakirrr, Aware Misal",
    rating: 4.8
  },
  {
    name: "Vada Pav",
    description: "The ultimate Maharashtrian snack — spicy potato vada inside pav, with garlic chutney and fried green chili.",
    image: "https://s3-ap-southeast-1.amazonaws.com/img.tasteofcity.com/tasteimages/201702/image_original/1C36C34C0DB8C769_02_Vada_Pav.jpg",
    places: "JJ Garden Vada Pav, Garden Vada Pav near Camp",
    rating: 4.7
  },
  {
    name: "Mastani",
    description: "A thick milkshake topped with ice cream, dry fruits, and syrups. Available in flavors like mango, rose, and chocolate.",
    image: "https://en-media.thebetterindia.com/uploads/2019/05/Representative-image-only-71.jpg",
    places: "Sujata Mastani, Gujar Mastani",
    rating: 4.9
  },
  {
    name: "Sabudana Khichdi",
    description: "Made with soaked sago, peanuts, and chilies — light yet flavorful. A common breakfast or fasting food.",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/4/BF/KN/IW/137055355/sabudana-khichadi-500x500.jpg",
    places: "Vaishali, Roopali, and most Maharashtrian joints",
    rating: 4.5
  },
  {
    name: "Bhakarwadi",
    description: "Spicy, crunchy pinwheel snacks made from gram flour dough stuffed with a tangy filling — popular for tea-time and gifting.",
    image: "https://i.ndtvimg.com/i/2017-07/bhakarwadi-240x180_620x350_41500449521.jpg",
    places: "Chitale Bandhu Mithaiwale",
    rating: 4.6
  },
  {
    name: "Shrewsbury Biscuits",
    description: "These buttery, melt-in-the-mouth cookies are a Pune specialty, perfect with chai.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6wqLU0gtdnJCzg7Ks-7_mq23SFgbHw3o4g&s",
    places: "Kayani Bakery, East Street — legendary since 1955",
    rating: 4.8
  }
];

const services = [
  { icon: Shield, title: "Wall Damp Check", desc: "Professional site inspection" },
  { icon: Palette, title: "Color Consultation", desc: "Free theme suggestions" },
  { icon: Award, title: "Expert Teams", desc: "Pune-based painting professionals" },
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
      <div className="bg-blue-50 rounded-lg p-3">
        <div className="flex items-center text-sm text-blue-800">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="font-medium">Try at: </span>
        </div>
        <p className="text-sm text-blue-700 mt-1">{food.places}</p>
      </div>
    </div>
  </div>
);

return (
  <div className="min-h-screen bg-gray-50">
    <Navbar/>
    
    {/* Hero Section with Pune Image */}
    <section className="relative h-96 overflow-hidden">
      <img 
        // src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
        src="https://images.unsplash.com/photo-1553064483-f10fe837615f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Beautiful view of Pune city with modern buildings and traditional architecture"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Best Paints for Pune Homes
          </h1>
          <p className="text-xl font-medium md:text-2xl text-gray-200">
             Painting solutions for Pune's unique weather conditions
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
            Use Weatherproof & Dust-Resistant Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Asian Paints Apex Dust Proof</li>
              <li className="text-lg text-gray-700">• Berger WeatherCoat Long Life</li>
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
            Use Washable, Stain-Resistant Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Asian Paints Royale Aspira</li>
              <li className="text-lg text-gray-700">• JSW Pixa Elegant</li>
              <li className="text-lg text-gray-700">• Nerolac Excel Total</li>
            </ul>
          
          </div>
        </div>

        {/* Bathrooms, Kitchens & Balconies */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-3 bg-blue-100 px-6 py-3 rounded-full mb-6">
            <Droplets className="w-6 h-6 text-blue-600" />
            <span className="text-blue-800 font-semibold">Bathrooms, Kitchens & Balconies</span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Use Moisture & Mold-Resistant Paints:
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">• Asian Paints Damp Proof</li>
              <li className="text-lg text-gray-700">• Dulux EasyCare Damp Protect</li>
            </ul>
            
          </div>
        </div>
      </section>

      {/* Best Paint Solutions by Pune Locality */}
      <section className="bg-white rounded-3xl shadow-xl md:p-12 p-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Best Paint Solutions by Pune Locality
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
                <td className="p-4 border font-semibold text-gray-700">Kothrud, Baner</td>
                <td className="p-4 border text-gray-600">Anti-dust exterior & luxury washable paints</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border font-semibold text-gray-700">Wagholi, Hinjewadi</td>
                <td className="p-4 border text-gray-600">UV-resistant & dust-proof emulsions</td>
              </tr>
              <tr>
                <td className="p-4 border font-semibold text-gray-700">Camp, Sadashiv Peth</td>
                <td className="p-4 border text-gray-600">Damp-proof paints for old heritage homes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border font-semibold text-gray-700">Hadapsar, Kharadi</td>
                <td className="p-4 border text-gray-600">Moisture-resistant paints for high-rise flats</td>
              </tr>
            </tbody>
          </table>
        </div>

         <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <p className="text-gray-700 text-lg">
            We use premium products from <span className="font-bold text-blue-600">Asian Paints, Berger, Dulux, Nerolac, JSW</span> and more, tailored specifically for Pune's weather conditions.
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
            Famous Foods of Pune
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            While we paint your walls beautiful, discover the delicious flavors that make Pune a food lover's paradise!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {puneFoods.map((food, index) => (
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

export default PuneWeather;