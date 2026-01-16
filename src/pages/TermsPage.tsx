import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUp, Book, AlertCircle, FileText, Scale, Users, Shield, ShieldAlert, Mail } from "lucide-react";
import mobixoLogo from "@/assets/mobixo-logo.png";

const TermsPage = () => {
    const sections = [
        { id: "acceptance", icon: FileText, label: "1. Acceptance of Terms" },
        { id: "accounts", icon: Users, label: "2. User Accounts" },
        { id: "use-app", icon: Book, label: "3. Use of the App" },
        { id: "responsibilities", icon: AlertCircle, label: "4. User Responsibilities" },
        { id: "privacy", icon: Shield, label: "5. Data & Privacy" },
        { id: "termination", icon: ShieldAlert, label: "6. Account Termination" },
        { id: "liability", icon: Scale, label: "7. Limitation of Liability" },
        { id: "changes", icon: FileText, label: "8. Changes to Terms" },
        { id: "contact", icon: Mail, label: "9. Contact Information" },
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
                        <span className="text-primary">Terms of Service</span>
                    </div>

                    {/* Title */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
                        <div className="flex items-center gap-3">
                            <span className="px-2 py-1 text-xs font-medium bg-amber-500/10 text-amber-600 rounded">Legal Agreement</span>
                            <span className="text-sm text-muted-foreground">Last Updated: January 2026. Please read carefully.</span>
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
                            {/* Introduction */}
                            <div className="prose prose-slate max-w-none mb-8">
                                <p className="text-muted-foreground">
                                    By using the Mobixo mobile application, you agree to the following terms and conditions.
                                </p>
                            </div>

                            {/* 1. Acceptance */}
                            <section id="acceptance">
                                <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p className="text-muted-foreground">
                                        By accessing or using Mobixo, you agree to be bound by these Terms of Service.
                                    </p>
                                </div>
                            </section>

                            {/* 2. User Accounts */}
                            <section id="accounts">
                                <h2 className="text-2xl font-bold text-primary mb-4">2. User Accounts</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p className="text-muted-foreground mb-2">
                                        Users may sign in using phone number, email, or social login (such as Facebook).
                                    </p>
                                    <p className="text-muted-foreground">
                                        You are responsible for maintaining the confidentiality of your account.
                                    </p>
                                </div>
                            </section>

                            {/* 3. Use of the App */}
                            <section id="use-app">
                                <h2 className="text-2xl font-bold text-primary mb-4">3. Use of the App</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p className="text-muted-foreground mb-2">
                                        Mobixo is a platform for buying and selling mobile phones.
                                    </p>
                                    <p className="text-muted-foreground mb-2">
                                        Users must provide accurate information while using the app.
                                    </p>
                                    <p className="text-muted-foreground">
                                        Any misuse, fraud, or illegal activity may result in account suspension.
                                    </p>
                                </div>
                            </section>

                            {/* 4. User Responsibilities */}
                            <section id="responsibilities">
                                <h2 className="text-2xl font-bold text-primary mb-4">4. User Responsibilities</h2>
                                <div className="prose prose-slate max-w-none">
                                    <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                                        <li>Do not post false or misleading listings</li>
                                        <li>Do not violate any applicable laws</li>
                                        <li>Respect other users on the platform</li>
                                    </ul>
                                </div>
                            </section>

                            {/* 5. Data & Privacy */}
                            <section id="privacy">
                                <h2 className="text-2xl font-bold text-primary mb-4">5. Data & Privacy</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p className="text-muted-foreground mb-2">
                                        Your personal data is handled according to our Privacy Policy.
                                    </p>
                                    <p className="text-muted-foreground">
                                        We do not sell user data to third parties.
                                    </p>
                                </div>
                            </section>

                            {/* 6. Account Termination */}
                            <section id="termination">
                                <h2 className="text-2xl font-bold text-primary mb-4">6. Account Termination</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p className="text-muted-foreground">
                                        Mobixo reserves the right to suspend or terminate accounts that violate these terms.
                                    </p>
                                </div>
                            </section>

                            {/* 7. Limitation of Liability */}
                            <section id="liability">
                                <h2 className="text-2xl font-bold text-primary mb-4">7. Limitation of Liability</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p className="text-muted-foreground">
                                        Mobixo is not responsible for losses arising from transactions between users.
                                    </p>
                                </div>
                            </section>

                            {/* 8. Changes to Terms */}
                            <section id="changes">
                                <h2 className="text-2xl font-bold text-primary mb-4">8. Changes to Terms</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p className="text-muted-foreground mb-2">
                                        We may update these Terms of Service from time to time.
                                    </p>
                                    <p className="text-muted-foreground">
                                        Continued use of the app means you accept the updated terms.
                                    </p>
                                </div>
                            </section>

                            {/* 9. Contact Information */}
                            <section id="contact">
                                <h2 className="text-2xl font-bold text-primary mb-4">9. Contact Information</h2>
                                <div className="card-base p-6 bg-primary/5 border border-primary/10">
                                    <p className="text-muted-foreground mb-4">
                                        If you have any questions about these Terms, contact us at:
                                    </p>
                                    <div className="space-y-2">
                                        <p className="flex items-center gap-2 font-medium text-foreground">
                                            <Mail className="w-4 h-4 text-primary" />
                                            support@mobixoapp.online
                                        </p>
                                        <p className="flex items-center gap-2 text-sm text-muted-foreground pl-6">
                                            Ramlila maidan zamania RS Ghazipur Uttar Pradesh 232331
                                        </p>
                                    </div>
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
                        <a href="#" className="hover:text-foreground text-foreground font-medium">Terms of Service</a>
                        <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
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

export default TermsPage;
