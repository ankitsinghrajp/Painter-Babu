import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-50 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Privacy <span className="text-blue-600">Policy</span></h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. Please read this policy carefully before using our website.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-12 text-muted-foreground">

          <div className="bg-card rounded-2xl p-8 shadow-elegant space-y-6">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Painterbabu Privacy Commitment</h2>
            <p>
              Painterbabu (a venture by Arway Global Services), has created this privacy policy for 
              <strong> www.painterbabu.co.in</strong> (the “Site”) in order to demonstrate its firm commitment to privacy. (“We” or “Us”, as used in this Privacy Policy, may include the Painterbabu family of companies, and websites within the Painterbabu family of companies.)
            </p>
            <p>
              The following discloses Company’s information gathering and dissemination practices for the information collected through this Site. We encourage you to read this Policy before using this Site. Your use of this Site signifies that you agree with all terms of this Policy, so please do not use this Site if you disagree with any part of this Policy.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-elegant space-y-6">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Privacy Statement</h2>

            <h3 className="text-xl font-bold text-foreground mt-4">I. Company's Collection and Use of Information</h3>

            <div>
              <h4 className="font-semibold text-lg text-foreground">A. Personally Identifiable Information</h4>
              <p>
                We will collect personally identifiable information about you, such as your name, postal address, telephone number, e-mail address, when you provide it to us while on this Site. 
                You may provide personally identifiable information when you create an account, enter a sweepstakes on this Site or on a third party site, sign up for email communications, participate in a survey, contact customer service, engage in a promotion online or otherwise interact with this Site.
              </p>
              <p>
                Your personally identifiable information may be used by us for all legal purposes, which may include, but are not limited to, responding to your requests, processing your transactions, for administrative purposes such as conducting contests, tracking which parts of the Site are of interest to you, and processing prizes.
              </p>
              <p>
                If you choose to opt-in, you may receive certain future information or communications from the Company, and we may share your personally identifiable information with the Company's subsidiaries or affiliated entities (Affiliated Entities) for purposes of sending you information about the programs of Company or its Affiliated Entities and, occasionally, sending you advertising/promotional material from some of their advertising and strategic partners.
              </p>
              <p>
                We may also use your personally identifiable information for internal business purposes, such as optimizing Site experiences and analyzing and managing our businesses.
              </p>
              <p className="italic">
                Note Regarding Use of this Site by Children: We request that children do not provide personally identifiable information through the Site.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-foreground">B. Demographic Information</h4>
              <p>
                We may also collect demographic data, such as your gender and postcode, when you provide this information to us.
                Demographic data may be used to tailor your experience at this Site, such as showing you content including special events and advertising that you might be interested in, and displaying the content according to your postcode.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-foreground">C. Passive Collection of Non-Personal Information</h4>
              <p>
                This Site often requires the use of encrypted or non-encrypted cookies. Cookies are data that a web server transfers to an individual's computer for record keeping purposes.
                Cookies are an industry standard used by most websites and help facilitate users’ ongoing access to and use of a particular website — for example, by providing information used to deliver content specific to your interests and for other purposes, such as security and administrative functions.
              </p>
            </div>
          </div>

        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
