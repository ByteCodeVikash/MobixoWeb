import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trash2, Mail, Download, ArrowUp } from "lucide-react";
import mobixoLogo from "@/assets/mobixo-logo.png";

const DataDeletionPage = () => {
    const sections = [
        { id: "request-deletion", icon: Trash2, label: "1. How to Request" },
        { id: "contact", icon: Mail, label: "2. Contact" },
    ];

    const handleDownload = () => {
        window.print();
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-border bg-gradient-to-r from-sky-50 via-cyan-50 to-teal-50 backdrop-blur print:hidden">
                <div className="container-main flex h-16 items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={mobixoLogo} alt="Mobixo Logo" className="w-10 h-10 rounded-lg" />
                        <span className="font-bold text-xl text-foreground">Mobixo</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">Home</Link>
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Products</a>
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Support</a>
                        <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">Contact</Link>
                    </nav>

                    <Button variant="default">Get Started</Button>
                </div>
            </header>

            <main className="flex-1 py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 print:bg-white print:p-0">
                <div className="container-main">
                    {/* Breadcrumb */}
                    <div className="text-sm text-muted-foreground mb-6 print:hidden">
                        <Link to="/" className="hover:text-foreground">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-primary">Data Deletion</span>
                    </div>

                    {/* Title */}
                    <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-4xl font-bold text-foreground mb-2">User Data Deletion Instructions</h1>
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-1 text-xs font-medium bg-red-500/10 text-red-600 rounded">Data Policy</span>
                                <span className="text-sm text-muted-foreground">Mobixo users can request deletion of their account and personal data.</span>
                            </div>
                        </div>
                        <Button variant="white" onClick={handleDownload} className="gap-2 shadow-sm print:hidden">
                            <Download className="w-4 h-4" />
                            Download Instructions
                        </Button>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Sidebar Table of Contents */}
                        <div className="lg:col-span-1 print:hidden">
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
                            {/* 1. How to Request */}
                            <section id="request-deletion">
                                <h2 className="text-2xl font-bold text-primary mb-4">1. How to request data deletion</h2>
                                <div className="card-base p-6 space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">1</div>
                                        <div>
                                            <p className="text-foreground font-medium">Send an email request</p>
                                            <p className="text-muted-foreground text-sm">Send an email to <a href="mailto:support@mobixoapp.online" className="text-primary hover:underline">support@mobixoapp.online</a></p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
                                        <div>
                                            <p className="text-foreground font-medium">Use the Subject Line</p>
                                            <p className="text-muted-foreground text-sm">Use subject line: <span className="font-medium text-foreground">"Account Deletion Request"</span></p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">3</div>
                                        <div>
                                            <p className="text-foreground font-medium">Provide Details</p>
                                            <p className="text-muted-foreground text-sm">Mention your registered email or phone number in the email.</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4 text-muted-foreground">
                                    We will process the deletion request within 7 working days.
                                </p>
                            </section>

                            {/* 2. Contact */}
                            <section id="contact">
                                <h2 className="text-2xl font-bold text-primary mb-4">2. Contact</h2>
                                <div className="card-base p-6 bg-primary/5 border border-primary/10">
                                    <p className="text-muted-foreground mb-4">
                                        If you have any questions, contact us at:
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
            <footer className="border-t border-border py-6 bg-gradient-to-r from-slate-50 via-zinc-50 to-gray-50 print:hidden">
                <div className="container-main flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <img src={mobixoLogo} alt="Mobixo Logo" className="w-8 h-8 rounded-lg" />
                        <span className="font-medium text-foreground">Mobixo</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
                        <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
                        <a href="#" className="hover:text-foreground">Security</a>
                    </div>
                    <p>© 2026 Mobixo Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default DataDeletionPage;
