import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock, FileText, Users, Shield, Eye, Mail, ArrowUp } from "lucide-react";
import mobixoLogo from "@/assets/mobixo-logo.png";

const PrivacyPage = () => {
  const sections = [
    { id: "introduction", icon: FileText, label: "1. Introduction" },
    { id: "collection", icon: Eye, label: "2. Information We Collect" },
    { id: "usage", icon: FileText, label: "3. How We Use Information" },
    { id: "sharing", icon: Users, label: "4. Data Sharing" },
    { id: "security", icon: Shield, label: "5. Data Security" },
    { id: "contact", icon: Mail, label: "6. Contact" },
  ];

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
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">About Us</a>
            <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">Contact</Link>
          </nav>

          <Button variant="default">Get Started</Button>
        </div>
      </header>

      <main className="flex-1 py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container-main">
          {/* Breadcrumb */}
          <div className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Privacy Policy</span>
          </div>

          {/* Title */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
            <div className="flex items-center gap-3">
              <span className="px-2 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-600 rounded">Official Policy</span>
              <span className="text-sm text-muted-foreground">Last Updated: January 2026</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 card-base p-6">
                <h3 className="font-semibold text-foreground mb-1">Table of Contents</h3>
                <p className="text-xs text-muted-foreground mb-4">Quick navigation</p>

                <nav className="space-y-1">
                  {sections.map((section, index) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${index === 0
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                    >
                      <section.icon className="w-4 h-4" />
                      {section.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-10">
              {/* 1. Introduction */}
              <section id="introduction">
                <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Mobixo respects the privacy of its users. This Privacy Policy explains how we collect, use, and protect user information when you use our mobile application.
                  </p>
                </div>
              </section>

              {/* 2. Information We Collect */}
              <section id="collection">
                <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
                <div className="card-base p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">Name</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">Email address</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">Profile information provided by Facebook during login</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 3. How We Use Information */}
              <section id="usage">
                <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Information</h2>
                <div className="card-base p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">To authenticate users</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">To provide app services</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">To improve user experience</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 4. Data Sharing */}
              <section id="sharing">
                <h2 className="text-2xl font-bold text-primary mb-4">4. Data Sharing</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground">
                    We do not sell or share user data with third parties except as required for app functionality.
                  </p>
                </div>
              </section>

              {/* 5. Data Security */}
              <section id="security">
                <h2 className="text-2xl font-bold text-primary mb-4">5. Data Security</h2>
                <div className="flex items-center gap-4 bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <Lock className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">
                    We take reasonable measures to protect user data.
                  </p>
                </div>
              </section>

              {/* 6. Contact */}
              <section id="contact">
                <h2 className="text-2xl font-bold text-primary mb-4">6. Contact Information</h2>
                <div className="card-base p-6 bg-primary/5 border border-primary/10">
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this Privacy Policy, contact us at:
                  </p>
                  <p className="flex items-center gap-2 font-medium text-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    support@mobixoapp.online
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 bg-gradient-to-r from-slate-50 via-zinc-50 to-gray-50">
        <div className="container-main flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img src={mobixoLogo} alt="Mobixo Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-medium text-foreground">Mobixo</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-foreground text-foreground font-medium">Privacy Policy</Link>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
          <p>© 2026 Mobixo Inc. All rights reserved.</p>
          <button className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90">
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPage;
