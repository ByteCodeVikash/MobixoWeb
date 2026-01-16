import { Link } from "react-router-dom";
import mobixoLogo from "@/assets/mobixo-logo.png";

const Footer = () => {
    return (
        <footer className="bg-foreground text-primary-foreground">
            <div className="container-main py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img src={mobixoLogo} alt="Mobixo Logo" className="w-10 h-10 rounded-lg" />
                            <span className="font-bold text-xl">Mobixo</span>
                        </div>
                        <p className="text-sm text-primary-foreground/70 leading-relaxed">
                            Mobixo is India's premier P2P marketplace for refurbished smartphones. Focused on safety, trust, and quality.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-primary-foreground/70">
                            <li><Link to="/" className="hover:text-primary-foreground transition-colors">Buy Smartphones</Link></li>
                            <li><a href="#" className="hover:text-primary-foreground transition-colors">Sell Your Phone</a></li>
                            <li><a href="#" className="hover:text-primary-foreground transition-colors">Grading Guide</a></li>
                            <li><a href="#" className="hover:text-primary-foreground transition-colors">Verification Process</a></li>
                        </ul>
                    </div>

                    {/* Support & Policy */}
                    <div>
                        <h4 className="font-semibold mb-4">Support & Policy</h4>
                        <ul className="space-y-3 text-sm text-primary-foreground/70">
                            <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Support</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link></li>
                            <li><Link to="/data-deletion" className="hover:text-primary-foreground transition-colors">Data Deletion</Link></li>
                            <li><Link to="/refund" className="hover:text-primary-foreground transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>

                    {/* Mobixo Pvt Ltd */}
                    <div>
                        <h4 className="font-semibold mb-4">Mobixo Pvt Ltd</h4>
                        <ul className="space-y-3 text-sm text-primary-foreground/70">
                            <li className="flex items-start gap-2">
                                <span>📍</span>
                                <span>Ramlila maidan zamania RS Ghazipur Uttar Pradesh 232331</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>✉️</span>
                                <span>support@mobixoapp.online</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📞</span>
                                <span>9616495025</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
                    <p>© 2026 Mobixo Technologies Private Limited. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1">
                            <span>💳</span> Razorpay Verified Merchant
                        </span>
                        <span className="flex items-center gap-1">
                            <span>🔒</span> Secure SSL Encryption
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
