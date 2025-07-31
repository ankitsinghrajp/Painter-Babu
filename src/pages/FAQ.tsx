import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919630009838?text=Hello%20Painter%20Babu,%20I%20have%20a%20question%20not%20covered%20in%20your%20FAQ.', '_blank');
  };

  const faqs = [
    {
      question: 'What brands of paint do you use?',
      answer: 'We exclusively use premium brands like Asian Paints and Dulux to ensure the highest quality and durability. These brands offer superior coverage, longevity, and a wide range of color options to suit every preference and budget.'
    },
    {
      question: 'Do you provide warranty on your painting work?',
      answer: 'Yes, we provide a comprehensive 5-year warranty on all interior painting work and up to 15 years on exterior painting with premium weather-resistant paints. Our warranty covers peeling, cracking, and color fading under normal conditions.'
    },
    {
      question: 'How do you calculate painting costs?',
      answer: 'Our pricing is transparent and based on per square foot rates. Interior painting starts from ₹12/sq.ft, exterior from ₹18/sq.ft, and texture painting from ₹25/sq.ft. Final costs depend on paint brand, number of coats, surface preparation needed, and project complexity.'
    },
    {
      question: 'Do you provide free site visits and quotations?',
      answer: 'Absolutely! We provide completely free site visits and detailed quotations. Our experts will visit your location, assess the work required, discuss your preferences, and provide a comprehensive written estimate with no hidden charges.'
    },
    {
      question: 'How long does a typical painting project take?',
      answer: 'Project duration depends on the scope of work. A 2BHK apartment typically takes 3-5 days, while a 3BHK may take 5-7 days. Exterior painting and texture work may require additional time. We provide realistic timelines during our site visit.'
    },
    {
      question: 'Do you handle surface preparation?',
      answer: 'Yes, proper surface preparation is crucial for lasting results. We handle all preparation work including cleaning, sanding, filling cracks, applying primer, and wall putty where needed. This ensures perfect paint adhesion and a smooth finish.'
    },
    {
      question: 'Can you help with color selection?',
      answer: 'Definitely! Our experts provide free color consultation services. We help you choose the perfect color combinations based on your space, lighting, preferences, and latest trends. We can also provide color samples for testing.'
    },
    {
      question: 'Do you work in all weather conditions?',
      answer: 'We carefully plan our work based on weather conditions. Interior painting can be done year-round, but exterior painting is scheduled during favorable weather to ensure proper curing and adhesion. We use advanced paints that are less weather-dependent.'
    },
    {
      question: 'What safety measures do you follow?',
      answer: 'Safety is our top priority. Our team uses proper safety equipment, eco-friendly paints with low VOC content, and follows all safety protocols. We ensure minimal disruption to your daily routine and maintain cleanliness throughout the project.'
    },
    {
      question: 'Do you provide emergency painting services?',
      answer: 'Yes, we offer 24/7 emergency services for urgent repairs like water damage, stain coverage, or preparation for sudden events. Contact us anytime for emergency assistance, and we\'ll respond as quickly as possible.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods including cash, bank transfers, UPI, and card payments. We typically work on a milestone-based payment schedule with an advance, progress payments, and final payment upon completion.'
    },
    {
      question: 'Do you clean up after the project?',
      answer: 'Absolutely! Complete cleanup is included in our service. We remove all equipment, dispose of materials responsibly, clean the work area thoroughly, and ensure your space is ready for immediate use upon project completion.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-luxury text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h1>
            <p className="text-xl leading-relaxed animate-slide-up">
              Find answers to the most common questions about our premium painting services. 
              Still have questions? Contact us directly for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl shadow-elegant border border-border overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-secondary transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-border">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Still Have Questions */}
            <div className="mt-16 bg-gradient-luxury rounded-3xl p-8 text-center text-primary-foreground">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-xl text-primary-foreground/90 mb-6">
                Our experts are here to help! Get instant answers to your specific questions 
                through WhatsApp or schedule a free consultation.
              </p>
              <button 
                onClick={handleWhatsApp}
                className="btn-gold group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Ask Your Question
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Need <span className="text-gradient-gold">Immediate Help?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">WhatsApp Support</h3>
                <p className="text-muted-foreground mb-4">Get instant responses to your queries</p>
                <button 
                  onClick={handleWhatsApp}
                  className="btn-luxury"
                >
                  Chat Now
                </button>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Phone Support</h3>
                <p className="text-muted-foreground mb-4">Speak directly with our experts</p>
                <a 
                  href="tel:+919630009838"
                  className="btn-luxury inline-block"
                >
                  Call +91 9630009838
                </a>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Free Site Visit</h3>
                <p className="text-muted-foreground mb-4">Schedule a free consultation</p>
                <button 
                  onClick={() => window.open('https://wa.me/919630009838?text=Hello%20Painter%20Babu,%20I%20would%20like%20to%20schedule%20a%20free%20site%20visit.', '_blank')}
                  className="btn-luxury"
                >
                  Book Visit
                </button>
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

export default FAQ;