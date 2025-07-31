import { useState } from 'react';
import { Star, Award, Users, MapPin, Clock, ArrowRight, Play, Video } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import artWall from "../assets/gallery-art-wall.jpg";
import butterfly from "../assets/gallery-butterfly.jpg";
import exteriorPainting1 from "../assets/gallery-exterior-painting-1.jpg";
import exteriorPainting2 from "../assets/gallery-exterior-painting-2.jpg";
import floor from "../assets/gallery-floor.jpg";
import interiorBedroom from "../assets/gallery-interior-painting.jpg";
import kidsRoom from "../assets/gallery-kids-room.jpg";
import office from "../assets/gallery-office.jpg";
import temple from "../assets/gallery-temple.jpg";
import windowDesign from "../assets/gallery-window.jpg";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [likedProjects, setLikedProjects] = useState(new Set());
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const handleWhatsApp = (projectType) => {
    const message = `Hello Painter Babu, I saw your ${projectType} work in the gallery and I'm interested in similar services for my project.`;
    window.open(`https://wa.me/919630009838?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleVideoWhatsApp = (videoTitle) => {
    const message = `Hello Painter Babu, I watched your ${videoTitle} video and I'm interested in your painting services.`;
    window.open(`https://wa.me/919630009838?text=${encodeURIComponent(message)}`, '_blank');
  };

  const toggleLike = (projectId) => {
    const newLikedProjects = new Set(likedProjects);
    if (newLikedProjects.has(projectId)) {
      newLikedProjects.delete(projectId);
    } else {
      newLikedProjects.add(projectId);
    }
    setLikedProjects(newLikedProjects);
  };

  const projects = [
    {
      "id": 1,
      "title": "Art Wall Design",
      "category": "Interior",
      "description": "An artistic wall design perfect for modern living spaces.",
      "imageLink": artWall,
      "tags": ["premium", "texture", "artistic"]
    },
    {
      "id": 2,
      "title": "Butterfly Room",
      "category": "Kids Room",
      "description": "Whimsical butterfly-themed wall painting for children's bedrooms.",
      "imageLink": butterfly,
      "tags": ["playful", "vibrant", "decorative"]
    },
    {
      "id": 3,
      "title": "Exterior Painting Design 1",
      "category": "Exterior",
      "description": "Modern exterior wall design with elegant color palette.",
      "imageLink": exteriorPainting1,
      "tags": ["exterior", "modern", "durable"]
    },
    {
      "id": 4,
      "title": "Exterior Painting Design 2",
      "category": "Exterior",
      "description": "Stylish and weather-resistant exterior painting for homes.",
      "imageLink": exteriorPainting2,
      "tags": ["weatherproof", "premium", "elegant"]
    },
    {
      "id": 5,
      "title": "Floor Covering",
      "category": "Flooring",
      "description": "A luxurious floor covering with a textured finish.",
      "imageLink": floor,
      "tags": ["texture", "luxury", "floor"]
    },
    {
      "id": 6,
      "title": "Interior Bedroom Wall",
      "category": "Bedroom",
      "description": "Warm and inviting wall colors ideal for bedrooms.",
      "imageLink": interiorBedroom,
      "tags": ["cozy", "premium", "interior"]
    },
    {
      "id": 7,
      "title": "Kids Room Painting",
      "category": "Kids Room",
      "description": "Colorful and fun wall painting designed for kids' spaces.",
      "imageLink": kidsRoom,
      "tags": ["fun", "vibrant", "child-friendly"]
    },
    {
      "id": 8,
      "title": "Modern Office Space",
      "category": "Office",
      "description": "Professional office wall design with a sleek finish.",
      "imageLink": office,
      "tags": ["minimalist", "corporate", "texture"]
    },
    {
      "id": 9,
      "title": "Temple Design",
      "category": "Religious/Temple",
      "description": "Traditional wall art designed for temple or meditation rooms.",
      "imageLink": temple,
      "tags": ["spiritual", "cultural", "premium"]
    },
    {
      "id": 10,
      "title": "Decorative Window Area",
      "category": "Interior",
      "description": "Creative paint and design around window space.",
      "imageLink": windowDesign,
      "tags": ["accent", "decorative", "texture"]
    }
  ];

  const videos = [
    {
      "id": 1,
      "title": "Professional Painting Showcase",
      "description": "Watch our expert team transform spaces with precision and creativity.",
      "youtubeId": "l9aphg2UJVI",
      "duration": "2:45",
      "tags": ["professional", "showcase", "transformation"]
    },
    {
      "id": 2,
      "title": "Interior Design Excellence",
      "description": "Discover our interior painting techniques and artistic approaches.",
      "youtubeId": "Ve_TWqEvRyY",
      "duration": "3:12",
      "tags": ["interior", "design", "techniques"]
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar/>
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
           
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent animate-fade-in">
              Our Portfolio
            </h1>
            <div className="text-xl md:text-2xl leading-relaxed text-blue-100 animate-slide-up space-y-4">
              <p>
                Painterbabu is your trusted professional painting service provider. Explore our portfolio of residential and commercial projects across cities like Mumbai, Hyderabad, Bangalore, Indore, Kolkata, Raipur, and Vizag.
              </p>
              <p className="text-yellow-200">
                We specialize in interior painting, exterior painting, wall texture finishes, stencil work, waterproof coatings, and more. Each photo below showcases the high-quality finishes, expert detailing, and trendy colors we bring to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed', icon: Award },
              { number: '15+', label: 'Years Experience', icon: Clock },
              { number: 'All', label: 'Cities Served', icon: MapPin },
              { number: '100%', label: 'Satisfaction Rate', icon: Users }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 ${
                  hoveredProject === project.id ? 'ring-4 ring-blue-500/20' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Image Container - Optimized for Desktop Images */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center p-4">
                  <img 
                    src={project.imageLink} 
                    alt={project.title}
                    className="max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-105 filter drop-shadow-lg rounded-lg"
                    style={{
                      minHeight: '200px',
                      width: 'auto',
                      height: 'auto'
                    }}
                  />
                  
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* CTA Button Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <button 
                      onClick={() => handleWhatsApp(project.category)}
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-3 px-4 rounded-xl hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center"
                    >
                      <span className="mr-2">Get Similar Design</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex space-x-1 ml-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-gradient-to-r from-slate-100 to-gray-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium hover:from-blue-100 hover:to-indigo-100 hover:text-blue-700 transition-all duration-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
              </div>
            ))}
          </div> 
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-6">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
              Watch Our Work in Action
            </h2>
          
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <div 
                key={video.id}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-red-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Video Thumbnail Container */}
                <div className="relative overflow-hidden rounded-t-2xl bg-black">
                  <div className="aspect-video w-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    {/* Video Thumbnail - Using different approach for better reliability */}
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Video Title and Description */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {video.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-red-200 transition-colors duration-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                
                </div>

                {/* Subtle Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/10 to-transparent rounded-tr-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
      <WhatsAppFloat/>
    </div>
  );
};

export default Gallery;