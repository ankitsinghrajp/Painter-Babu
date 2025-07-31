import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const RefundPolicy = () => {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919630009838?text=Hello%20Painter%20Babu,%20I%20have%20questions%20about%20your%20refund%20policy.',
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
              Refund <span className="text-gradient-gold">Policy</span>
            </h1>
            <p className="text-xl leading-relaxed animate-slide-up">
              Painterbabu (a venture by Arway Global Services) prioritizes transparency and customer clarity in all financial matters.
            </p>
          </div>
        </div>
      </section>

      {/* Updated Refund Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-elegant p-8 space-y-8">

            <h2 className="text-4xl font-bold text-foreground text-center mb-4">
              Painterbabu Refund Policy
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              <strong>Painterbabu</strong> (a venture by Arway Global Services) provides a hassle-free painting solution that is faster, cleaner, and better than traditional methods. All painting work is executed by trained professionals.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Advance Payment Clause</h3>
                <p className="text-muted-foreground">
                  The company does not bear responsibility for refunds on any advance payment made by the customer.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Refund Due to Delay in Work Commencement</h3>
                <p className="text-muted-foreground">
                  If the company fails to start the work on the agreed timeline after receiving the advance, a refund will be initiated within 7 days. For payments via debit/credit card or wallets, timelines may vary based on the bank’s conditions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Failed Online Payment</h3>
                <p className="text-muted-foreground">
                  In case of a failed transaction where the amount is debited, please allow up to 7 days for automatic reversal. If unresolved, contact your bank directly and provide a bank statement stating: <em>“Money has been debited from my account and I have not received the service or refund.”</em> Only the account holder can initiate this process.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Service Postponement</h3>
                <p className="text-muted-foreground">
                  If the customer postpones the service, the payment will be held by the company and applied to the rescheduled date as decided by the customer.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Refund Holding Rights</h3>
                <p className="text-muted-foreground">
                  If applicable, the company reserves the right to hold the refund until a written, signed request is received from the customer.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Policy Agreement</h3>
                <p className="text-muted-foreground">
                  This refund policy is an integral part of the Painterbabu Terms & Conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-luxury">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Questions About Our Refund Policy?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Need clarification or have questions about your payment or refund status? Reach out to our team directly for support.
          </p>
          <button onClick={handleWhatsApp} className="btn-gold" aria-label="Contact support team via WhatsApp">
            Contact Support Team
          </button>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default RefundPolicy;
