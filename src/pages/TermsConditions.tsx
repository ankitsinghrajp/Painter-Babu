import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { FileText } from 'lucide-react';

const TermsConditions = () => {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919630009838?text=Hello%20Painter%20Babu,%20I%20have%20questions%20about%20your%20terms%20and%20conditions.',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-luxury text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Terms & <span className="text-gradient-gold">Conditions</span>
            </h1>
            <p className="text-xl leading-relaxed animate-slide-up">
              Read the official terms and conditions for using Painterbabu's painting services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-muted-foreground">
            <div className="bg-card rounded-2xl p-8 shadow-elegant space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-gold p-3 rounded-xl shadow-gold">
                  <FileText className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Painterbabu Terms & Conditions</h2>
              </div>

              <p><strong>Painterbabu</strong> (a venture by Arway Global Services) provides a hassle-free painting solution that is faster, cleaner, and better than traditional methods. Our trained painters use specialized equipment depending on painting conditions and site-specific needs. With Lewis Berger products, we ensure peaceful painting for your home.</p>

              <p>Our services include painting advisory, surface evaluation, estimation, and a dedicated team for execution.</p>

              <p>A painting project includes surface preparation, primer application, and finish coats. While we provide trained contractors, quality depends on wall condition, moisture levels, pollutants, and other factors. Issues like water seepage can affect outcomes. Painterbabu does not offer masonry or plumbing services. Customers should inspect surfaces independently before beginning.</p>

              <p>Our in-house team executes projects under direct contract. We supply paint via authorized dealers and ensure high-standard service completion.</p>

              <p>Upon contract, our services may include:</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Furniture covering and taping</li>
                <li>Wall scraping (if needed)</li>
                <li>Putty/textured coating mixing</li>
                <li>Paint application</li>
                <li>Surface finishing (as per condition)</li>
                <li>Post-job cleanup</li>
              </ul>

              <p>Where required, tools like multi-mixers, sanders, and auto rollers may be used. Not all tools apply to every project.</p>

              <p>This is a proprietary service to provide customers with a premium, worry-free experience. By using this platform or transacting with us, you agree to the terms mentioned herein.</p>

              <p>Services are offered via trained teams across India. Regional terms may apply. By using our services, you agree to abide by the applicable local conditions.</p>

              <h3 className="text-2xl font-semibold text-foreground mt-6">Communication Consent</h3>
              <p>Once contact details are submitted via website or call center, our representative may reach you through call, SMS, email, or app notifications. You agree that this communication is not considered unsolicited as per Telecom Commercial Communication Customer Preference Regulations, 2010.</p>

              <h3 className="text-2xl font-semibold text-foreground mt-6">Service Guarantee & Customer Responsibilities</h3>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>3-month service guarantee from Painterbabu</li>
                <li>Customer must choose final paint color; any changes will incur additional cost</li>
                <li>Color output may vary from the shade card</li>
                <li>Material is 100% genuine from the manufacturer</li>
                <li>Customer cannot assign project to others once Painterbabu accepts the job</li>
                <li>Full payment is due upon job completion as per quotation</li>
              </ul>

              <p>Final finish quality depends on the surface and number of coats applied. Fewer coats may reduce quality, and the responsibility lies with the customer.</p>

              <p className="text-red-600 font-semibold">IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY CLAIM, INJURY, OR DAMAGE ARISING FROM YOUR USE OF THE SERVICE.</p>

              <h3 className="text-2xl font-semibold text-foreground mt-6">Contact Information</h3>
              <p>For assistance, contact our Consumer Relations Manager at <strong>+91 96300 09838</strong> or email <a href="mailto:contact@painterbabu.co.in" className="underline">contact@painterbabu.co.in</a>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-luxury">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Need clarification about any of our terms and conditions? Contact us for 
            detailed explanations and personalized assistance.
          </p>
          <button onClick={handleWhatsApp} className="btn-gold">
            Contact for Clarification
          </button>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default TermsConditions;
