import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Download, HelpCircle, Package, ShoppingBag, CheckCircle, Info, ArrowRight, SlidersHorizontal, Grid3X3, CreditCard, Clock, MessageSquare, Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";
import mobixoLogo from "@/assets/mobixo-logo.png";

const RefundPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-gradient-to-r from-sky-50 via-cyan-50 to-teal-50 backdrop-blur">
        <div className="container-main flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <img src={mobixoLogo} alt="Mobixo Logo" className="w-10 h-10 rounded-lg" />
              <span className="font-bold text-xl text-foreground">Mobixo</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Shop</a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Sellers</a>
              <a href="#" className="text-sm font-medium text-primary">Refund Policy</a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">FAQ</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg border border-border">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search policies..."
                className="bg-transparent border-none outline-none text-sm w-40"
              />
            </div>
            <Button variant="default">Sign In</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-primary py-16 text-primary-foreground">
          <div className="container-main text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Refund, Cancellation &<br />Return Policy
            </h1>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Transparency and fairness in every transaction. Understand how our refund process works for both buyers and sellers with Mobixo.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="white" size="lg" className="gap-2">
                <Download className="w-4 h-4" />
                Download PDF Policy
              </Button>
              <Button variant="whiteOutline" size="lg" className="gap-2">
                <HelpCircle className="w-4 h-4" />
                View Help Center
              </Button>
            </div>
          </div>
        </section>

        {/* For Buyers & Sellers */}
        <section className="section-padding bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <div className="container-main">
            <div className="grid md:grid-cols-2 gap-8">
              {/* For Buyers */}
              <div className="card-base p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg text-foreground">For Buyers</h2>
                    <p className="text-sm text-muted-foreground">Buying with confidence</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">7-Day Window:</span>
                      <span className="text-muted-foreground"> Most electronics can be returned within 7 days of delivery.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Condition:</span>
                      <span className="text-muted-foreground"> Products must be in original condition with all tags and original packaging.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Instant Pickups:</span>
                      <span className="text-muted-foreground"> Free pickup for defective or damaged items.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Refund Status Tool</p>
                  <Button variant="outline" className="w-full">Check my refund status</Button>
                </div>
              </div>

              {/* For Sellers */}
              <div className="card-base p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg text-foreground">For Sellers</h2>
                    <p className="text-sm text-muted-foreground">Managing returns efficiently</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Restocking Fees:</span>
                      <span className="text-muted-foreground"> A 10% fee may apply for change-of-mind returns on non-defective units.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Dispute Resolution:</span>
                      <span className="text-muted-foreground"> 48-hour window to contest a buyer return if product damage is found.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Payout Adjustments:</span>
                      <span className="text-muted-foreground"> Refunds are deducted from the next weekly payout cycle.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Seller Dashboard</p>
                  <Button variant="secondary" className="w-full">Manage return requests</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Razorpay Refund Process */}
        <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          <div className="container-main">
            <div className="card-base p-8">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-xl font-bold text-foreground">Razorpay Refund Process</h2>
                <span className="px-2 py-1 text-xs font-medium bg-success/10 text-success rounded uppercase">Secure Gateway</span>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {[
                  { icon: SlidersHorizontal, step: "1. Approval", description: "Mobixo verifies the return condition" },
                  { icon: Grid3X3, step: "2. Razorpay API", description: "Refund initiated via Razorpay dashboard" },
                  { icon: CreditCard, step: "3. Original Method", description: "Funds credited back to your bank/card" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl border border-border flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.step}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    {index < 2 && (
                      <ArrowRight className="w-5 h-5 text-muted-foreground mx-auto mt-4 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">5-7 Business Days</h4>
                    <p className="text-sm text-muted-foreground">Standard timeline for the amount to reflect in your account after approval.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500" />
                  <div className="w-8 h-8 rounded-full bg-blue-600" />
                  <div className="w-8 h-8 rounded-full bg-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="section-padding bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
          <div className="container-main">
            <h2 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-8">
              Our dedicated support team is available 24/7 to help you with any issues related to returns, refunds, or technical problems with your order.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-base p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email Support</p>
                    <p className="font-medium text-foreground">support@mobixo.com</p>
                  </div>
                </div>
              </div>

              <div className="card-base p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Call Us</p>
                    <p className="font-medium text-foreground">+1 (234) 567-890</p>
                  </div>
                </div>
              </div>

              <div className="card-base p-6 text-center">
                <MessageSquare className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-3">Average response time: 2 minutes</p>
                <Button variant="hero" className="w-full">Start Chat Now</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 bg-gradient-to-r from-slate-50 via-zinc-50 to-gray-50">
        <div className="container-main flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img src={mobixoLogo} alt="Mobixo Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-medium text-foreground">Mobixo</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground">Terms of Service</a>
            <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <a href="#" className="hover:text-foreground">Cookie Settings</a>
          </div>
          <p>© 2026 Mobixo Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RefundPage;
