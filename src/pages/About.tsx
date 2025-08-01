import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import {
  Award,
  Users,
  Clock,
  Shield,
  Star,
  Target,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import customerFirst from "../assets/customer-first.png";
import excellence from "../assets/excellence.jpg";
import trust from "../assets/trust.jpg";
import timelyDelivery from "../assets/on-time.jpg";


const About = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919630009838?text=Hello%20Painter%20Babu,%20I%20would%20like%20to%20know%20more%20about%20your%20company%20and%20services.",
      "_blank"
    );
  };

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "6", label: "Major Cities", icon: Target },
    { number: "100%", label: "Satisfaction Rate", icon: Star },
  ];

  const values = [
    {
      imgSrc: excellence,
      title: "Excellence",
      description:
        "We strive for perfection in every project, delivering top-quality results that exceed expectations.",
    },
    {
      imgSrc: trust,
      title: "Trust",
      description:
        "Built on years of reliable service, we are your trusted partner for all painting needs.",
    },
    {
      imgSrc:customerFirst,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We listen, understand, and deliver exactly what you envision.",
    },
    {
      imgSrc: timelyDelivery,
      title: "Timely Delivery",
      description:
        "We respect your time and complete projects within agreed timelines without compromising quality.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-luxury text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              About <span className="text-gradient-gold">Painter Babu</span>
            </h1>
            <p className="text-xl leading-relaxed animate-slide-up">
              Finding painters is no longer a hassle — just call like a friend
              or click on our website.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
       <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-5">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-10">
              Our <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">Story</span>
            </h2>
           
          </div>

          {/* Story Content */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-5 md:gap-6">
              
              {/* First Paragraph */}
              <div className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-amber-200 hover:border-amber-400">
                  <div className="flex  items-start space-x-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full mt-3  flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                     <div className="flex gap-4 flex-col">
                    <p className="text-lg text-black/90 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      A renowned Pune based home and office painting service provider company. Empowered by qualified team we have been able to successfully execute our all assignments. In Painterbabu we believe that you just handover your home and leave all worries on us.
                    </p>
                     <p className="text-lg text-black/90 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      <span className="font-semibold text-amber-600">Painterbabu</span> provides you with expert home painting services, understands your taste to match it. We ensure the entire home painting work is done in smoothest way possible.
                    </p>
                     <p className="text-lg text-black/90 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      Our dedicated and experienced team is largely helpful in our success as a painting services provider. It is the willingness and readiness of our workforce that has made us a foremost organization in this domain.
                      The commitment of our team is reflected on the customer appreciation that has been nurturing us from
the very beginning.
                    </p>
                    <p className="text-lg text-black/90 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      Our service is available in <strong className="text-blue-900">Pune, Raipur, Indore, Hyderabad, Visakhapatnam, Bangalore &amp; Mumbai. </strong>
                    </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Values Section */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4">
         
         <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="text-lg text-gray-600">These core values guide everything we do, ensuring every project
              reflects our commitment to excellence and customer satisfaction.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:-translate-y-6 hover:rotate-2"
      
            >
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/10 transition-all duration-500"></div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>

              <CardContent className="p-8 text-center relative z-10">
                {/* Image Container with Enhanced Effects */}
                <div className="relative mb-6 flex justify-center items-center">
                  {/* Image Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
                  
                  {/* Image */}
                  <div className="relative w-48 h-48 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-2xl">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      src={value.imgSrc} 
                      alt={value.title}
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-500"></div>
                    
                    {/* Rotating Border */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500"></div>
                  </div>

                  
                </div>

                {/* Title with Enhanced Typography */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 group-hover:scale-105">
                  {value.title}
                </h3>

                {/* Description with Better Spacing */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 group-hover:scale-105">
                  {value.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
              </CardContent>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 pointer-events-none skew-x-12"></div>
              
              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-200 group-hover:shadow-glow transition-all duration-500"></div>
            </Card>
          ))}
        </div>
      </div>

    </div>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default About;
