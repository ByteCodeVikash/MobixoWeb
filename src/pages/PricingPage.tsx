import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShieldCheck, CreditCard, Lock, Download, Info, Wallet, Package, CheckCircle } from "lucide-react";
import mobixoLogo from "@/assets/mobixo-logo.png";

const PricingPage = () => {
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
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Buy</a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Sell</a>
              <a href="#" className="text-sm font-medium text-primary">Pricing</a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Security</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg border border-border">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search devices..."
                className="bg-transparent border-none outline-none text-sm w-40"
              />
            </div>
            <Button variant="default">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-12 bg-gradient-to-br from-sky-50 via-cyan-50 to-teal-50">
          <div className="container-main">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pricing & Payments Transparency
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Secure, escrow-backed transactions powered by Razorpay. No hidden costs, just honest business.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-16">
          <div className="container-main">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Buyers Card */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Package className="w-4 h-4 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">For Buyers: Simple & Clear</h2>
                </div>

                <div className="card-base p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground">iPhone 13 Price Breakdown</h3>
                      <p className="text-sm text-muted-foreground">Sample checkout experience</p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">EXAMPLE</span>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-3 text-sm pb-2 border-b">
                      <span className="text-muted-foreground">Item</span>
                      <span className="text-muted-foreground">Description</span>
                      <span className="text-muted-foreground text-right">Amount</span>
                    </div>
                    <div className="grid grid-cols-3 text-sm">
                      <span className="text-foreground">Base Price</span>
                      <span className="text-muted-foreground">Refurbished iPhone 13 128GB</span>
                      <span className="text-foreground text-right">₹42,372</span>
                    </div>
                    <div className="grid grid-cols-3 text-sm">
                      <span className="text-foreground">GST (18%)</span>
                      <span className="text-muted-foreground">Integrated Goods & Service Tax</span>
                      <span className="text-foreground text-right">₹7,627</span>
                    </div>
                    <div className="grid grid-cols-3 text-sm pt-4 border-t">
                      <span className="font-semibold text-accent">Total Payable</span>
                      <span className="text-muted-foreground">Final inclusive price</span>
                      <span className="font-bold text-accent text-right">₹49,999</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-4">No delivery fees on orders above ₹10,000</p>
                  <a href="#" className="text-sm text-primary font-medium hover:underline mt-2 inline-block">
                    Download Sample Invoice ↗
                  </a>
                </div>
              </div>

              {/* Sellers Card */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                    <span className="text-yellow-600">💎</span>
                  </div>
                  <h2 className="text-xl font-semibold">For Sellers: Higher Earnings</h2>
                </div>

                <div className="card-base p-6">
                  <h3 className="font-semibold text-foreground mb-1">Earnings Calculator</h3>
                  <p className="text-sm text-muted-foreground mb-4">Mobixo charges a flat 5% platform fee</p>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground block mb-2">Enter Sale Price (₹)</label>
                      <Input type="text" defaultValue="₹ 50000" className="w-full" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="p-4 bg-secondary/50 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Platform Fee (5%)</p>
                        <p className="text-lg font-semibold text-destructive">- ₹2,500</p>
                      </div>
                      <div className="p-4 bg-success/10 rounded-lg">
                        <p className="text-sm text-success mb-1">Your Net Payout</p>
                        <p className="text-lg font-bold text-success">₹47,500</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg">
                      <Info className="w-4 h-4 text-primary mt-0.5" />
                      <p className="text-xs text-muted-foreground">
                        Payouts are initiated within 24 hours of buyer confirmation. Funds are deposited directly into your linked bank account.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Escrow Works */}
        <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          <div className="container-main max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">How Escrow Payment Works</h2>
              <p className="text-muted-foreground">
                We act as a neutral third party to protect both buyers and sellers throughout the entire transaction.
              </p>
            </div>

            <div className="space-y-0">
              {[
                { icon: Wallet, title: "1. Buyer Pays", description: "Buyer makes the payment via Razorpay. Multiple options including UPI, Cards, and Net Banking are available.", color: "bg-primary" },
                { icon: Lock, title: "2. Mobixo Holds", description: "Payment is securely held in our escrow account. Both parties are notified that the funds are secured.", color: "bg-primary" },
                { icon: Package, title: "3. Seller Delivers", description: "Seller ships the device using Mobixo-partnered delivery. Tracking information is automatically shared.", color: "bg-primary" },
                { icon: CheckCircle, title: "4. Buyer Confirms", description: "Buyer receives and inspects the device. Once they confirm the condition, the release process begins.", color: "bg-primary" },
                { icon: CreditCard, title: "5. Funds Released", description: "Mobixo releases the payout (minus the platform fee) to the seller's verified bank account instantly.", color: "bg-success" },
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    {index < 4 && <div className="w-0.5 h-12 bg-border" />}
                  </div>
                  <div className="pb-8">
                    <h3 className={`font-semibold ${step.color === "bg-success" ? "text-success" : "text-foreground"}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bank Grade Security */}
        <section className="section-padding bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Bank-Grade Security</h2>
              <p className="text-muted-foreground">Your financial data is protected by industry-leading protocols</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, title: "PCI-DSS Compliant", description: "Certified for secure credit & debit card processing." },
                { icon: Lock, title: "256-bit SSL", description: "End-to-end encryption for all session data." },
                { icon: CreditCard, title: "Razorpay Partner", description: "Direct integration for 100% secure gateway processing." },
                { icon: ShieldCheck, title: "Fraud Detection", description: "AI-driven algorithms to prevent payment risks." },
              ].map((feature, index) => (
                <div key={index} className="card-base p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container-main">
            <div className="gradient-primary rounded-2xl p-12 text-center text-primary-foreground">
              <h2 className="text-3xl font-bold mb-4">Ready to trade with confidence?</h2>
              <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
                Join 50,000+ users who trust Mobixo for secure mobile device transactions across India.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button variant="white" size="lg">Start Buying</Button>
                <Button variant="whiteOutline" size="lg">Start Selling</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-gradient-to-r from-slate-50 via-zinc-50 to-gray-50">
        <div className="container-main">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={mobixoLogo} alt="Mobixo Logo" className="w-10 h-10 rounded-lg" />
                <span className="font-bold text-foreground">Mobixo</span>
              </div>
              <p className="text-sm text-muted-foreground">
                India's first escrow-backed marketplace for pre-owned smartphones.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#">About Us</a></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Safety Guide</a></li>
                <li><a href="#">Escrow 101</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✉️ support@mobixo.com</li>
                <li>📞 1800-MO-BIXO</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>© 2026 Mobixo Technologies Pvt Ltd. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
              <a href="#" className="hover:text-foreground">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;
