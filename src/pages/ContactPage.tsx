import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MessageSquare, MapPin, ArrowRight } from "lucide-react";
import mobixoLogo from "@/assets/mobixo-logo.png";

const ContactPage = () => {
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
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Products</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Support</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">About Us</a>
          </nav>

          <Button variant="default">Login</Button>
        </div>
      </header>

      <main className="flex-1 py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container-main">
          {/* Title */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact Mobixo Support</h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              We're here to help with your orders, payments, and technical inquiries. Reach out via any of the channels below or send us a message directly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Methods */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Email Us */}
                <div className="card-base p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><span className="font-medium text-foreground">Support:</span> support@mobixoapp.online</p>
                    <p><span className="font-medium text-foreground">Orders:</span> orders@mobixoapp.online</p>
                  </div>
                </div>

                {/* Call Us */}
                <div className="card-base p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-1">Available Mon-Fri, 9am - 6pm</p>
                  <a href="tel:+919616495025" className="text-primary font-medium hover:underline">
                    9616495025
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="card-base p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-2">Get instant responses for quick queries.</p>
                  <a href="#" className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1">
                    Chat with us <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Corporate Office */}
                <div className="card-base p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Corporate Office</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Ramlila maidan zamania RS Ghazipur Uttar Pradesh 232331
                  </p>
                  <p className="text-xs text-muted-foreground">
                    GST: 09AAACM1234F1Z5
                  </p>
                </div>
              </div>

              {/* Razorpay Support */}
              <div className="card-base p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">₹</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Razorpay Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Having payment gateway issues or transaction failures? Contact our dedicated Razorpay team.
                    </p>
                  </div>
                </div>
                <Button variant="hero">Contact Razorpay</Button>
              </div>

              {/* Headquarters */}
              <div className="card-base overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-8 flex items-center justify-center">
                    <div className="w-32 h-32 bg-amber-200/50 rounded-full" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">VISIT US</p>
                    <h3 className="font-semibold text-foreground mb-2">Our Headquarters</h3>
                    <p className="text-sm text-muted-foreground">
                      Explore our facility and meet our engineering teams in person. Open for visitors with prior appointment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links removed */}
            </div>

            {/* Right - Contact Form */}
            <div className="card-base p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">Send us a message</h2>

              <form className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Full Name</label>
                  <Input type="text" placeholder="John Doe" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Email Address</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Phone Number</label>
                  <Input type="tel" placeholder="+91 00000 00000" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Subject</label>
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="General Inquiry" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-border">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="order">Order Issue</SelectItem>
                      <SelectItem value="refund">Refund Request</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Message</label>
                  <Textarea placeholder="How can we help you?" rows={4} />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <div className="card-base aspect-video flex items-center justify-center bg-secondary/50">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="font-medium">Interactive Map Placeholder</p>
                <p className="text-sm">Location: Ramlila maidan zamania RS Ghazipur Uttar Pradesh 232331</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-gradient-to-r from-slate-50 via-zinc-50 to-gray-50">
        <div className="container-main text-center text-sm text-muted-foreground">
          <p>© 2026 Mobixo Technologies Private Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
