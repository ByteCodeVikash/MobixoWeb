import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Shield, Star, Smartphone, Lock, ShieldCheck, Play } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import mobixoLogo from "@/assets/mobixo-logo.png";
import homeScreen from "@/assets/app-preview/home-screen.png";
import allPhones from "@/assets/app-preview/all-phones.png";
import phoneDetails from "@/assets/app-preview/phone-details.png";
import cart from "@/assets/app-preview/cart.png";
import sellPhone from "@/assets/app-preview/sell-phone.png";

const DownloadPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-gradient-to-r from-sky-50 via-cyan-50 to-teal-50 backdrop-blur">
        <div className="container-main flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={mobixoLogo} alt="Mobixo Logo" className="w-10 h-10 rounded-lg" />
            <span className="font-bold text-xl text-foreground">Mobixo</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">Home</Link>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Features</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Security</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Support</a>
          </nav>

          <Link to="/">
            <Button variant="default">Home</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-sky-50 via-cyan-50 to-teal-50">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Download Official Mobixo App for Android
                </h1>
                <p className="text-lg text-muted-foreground">
                  Experience secure, real-time payment management. Our official APK is built for reliability and global compliance standards.
                </p>
                <div className="flex items-center gap-4">
                  <span className="badge-verified">
                    <CheckCircle className="w-4 h-4" />
                    Verified Secure
                  </span>
                  <span className="badge-verified">
                    <Shield className="w-4 h-4" />
                    No Harmful Permissions
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-64 bg-gradient-to-br from-primary to-primary/80 rounded-[2.5rem] p-6 shadow-xl">
                  <div className="bg-white/20 rounded-2xl aspect-square flex items-center justify-center p-8">
                    <img src={mobixoLogo} alt="Mobixo Logo" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notice */}
        <section className="pb-8">
          <div className="container-main">
            <div className="gradient-primary rounded-xl p-6 text-primary-foreground">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Official App Download Notice</h3>
                  <p className="text-sm text-primary-foreground/80">
                    To ensure full compliance with Razorpay's direct processing requirements and provide the latest security patches instantly, we host the official Mobixo APK on our secure servers. This version is functionally identical to Play Protect monitored builds and undergoes daily security scans.
                  </p>
                  <a href="#" className="text-sm text-primary-foreground font-medium hover:underline mt-2 inline-block">
                    Learn more about our security compliance →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Card */}
        <section className="pb-12">
          <div className="container-main">
            <div className="card-base p-6">
              <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center">
                    <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-success-foreground" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">Mobixo v1.2.3</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      File Size: 73.5MB |January 15, 2026
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Requires Android 8.0 or higher
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <a href="/Mobixo.apk" download="Mobixo_v1.2.3.apk">
                    <Button variant="default" size="lg" className="gap-2">
                      <Download className="w-4 h-4" />
                      Download Mobixo APK
                    </Button>
                  </a>
                  <p className="text-xs text-muted-foreground">SHA-256 Available After Download</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { value: "500K+", label: "Total Downloads" },
                { value: "4.9/5", label: "Security Rating", icon: Star },
                { value: "99.9%", label: "Compatibility" },
              ].map((stat, index) => (
                <div key={index} className="card-base p-6 text-center">
                  <div className="text-2xl font-bold text-foreground flex items-center justify-center gap-1">
                    {stat.value}
                    {stat.icon && <stat.icon className="w-5 h-5 text-yellow-500 fill-yellow-500" />}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Guarantee */}
        <section className="pb-12">
          <div className="container-main">
            <div className="card-base p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-success" />
                <h3 className="font-semibold text-foreground">Security & Trust Guarantee</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Your security is our top priority. Every build is rigorously tested before release to ensure a safe transaction environment.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Digital Signature Verified</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>No Harmful Permissions</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Play Protect Scanned</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>SSL Encryption Active</span>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <Lock className="w-6 h-6 text-muted-foreground" />
                <ShieldCheck className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
          </div>
        </section>

        {/* How to Install */}
        <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">How to install Mobixo APK</h2>
              <p className="text-muted-foreground">Follow these 3 simple steps to get started in minutes.</p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="card-base p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="step-indicator">1</span>
                      <h3 className="font-semibold text-lg">Enable "Unknown Sources"</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Go to your phone **Settings {">"} Security**, and toggle on **"Install Unknown Apps"**. This allows you to install apps from official sources outside the Play Store.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="card-base p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="step-indicator">2</span>
                      <h3 className="font-semibold text-lg">Download & Open APK</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Click the green download button above. Once the download is complete, tap on the file from your notification bar or downloads folder to start.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Download className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="card-base p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="step-indicator">3</span>
                      <h3 className="font-semibold text-lg">Complete Installation</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Follow the on-screen prompts and click "Install". Once finished, open the Mobixo app and log in to manage your payments securely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Preview */}
        <section className="section-padding bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">App Preview</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { src: homeScreen, label: "Home Screen" },
                { src: allPhones, label: "All Phones" },
                { src: phoneDetails, label: "Phone Details" },
                { src: cart, label: "Cart" },
                { src: sellPhone, label: "Sell Phone" },
              ].map((preview, i) => (
                <div key={i} className="aspect-[9/16] bg-white rounded-2xl shadow-lg overflow-hidden border border-border">
                  <img src={preview.src} alt={preview.label} className="w-full h-full object-cover object-top" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <div className="container-main max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="card-base px-6">
                <AccordionTrigger className="hover:no-underline">
                  Is the Mobixo APK safe to download?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, the Mobixo APK is completely safe. It undergoes rigorous security testing and is digitally signed to ensure authenticity.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="card-base px-6">
                <AccordionTrigger className="hover:no-underline">
                  Why isn't it available on the Play Store?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  To provide instant updates and ensure compliance with payment processing requirements, we host the APK directly on our secure servers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="card-base px-6">
                <AccordionTrigger className="hover:no-underline">
                  How do I receive updates?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The app will notify you when updates are available, and you can download the latest version directly from within the app.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-gradient-to-r from-slate-50 via-zinc-50 to-gray-50">
        <div className="container-main">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={mobixoLogo} alt="Mobixo Logo" className="w-10 h-10 rounded-lg" />
                <span className="font-bold text-foreground">Mobixo</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Mobixo is a secure, enterprise-ready payment management platform built for modern business demands.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About Us</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
                <li><a href="#" className="hover:text-foreground">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground">Security</a></li>
                <li><a href="#" className="hover:text-foreground">Compliance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 Mobixo Technologies Private Limited. All rights reserved.</p>
            <p>🌐 English United States</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DownloadPage;
