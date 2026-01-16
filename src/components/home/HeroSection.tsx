import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroPhoneMockup from "@/assets/hero-phone-mockup.png";

const HeroSection = () => {
    return (
        <section className="py-12 md:py-20 bg-gradient-to-br from-sky-50 via-cyan-50 to-teal-50">
            <div className="container-main">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="inline-block">
                            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                                REFURBISHED & RELIABLE
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-tight">
                            India's Most Trusted Marketplace for Refurbished Smartphones
                        </h1>

                        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                            Buy and sell quality-graded phones with Aadhar verification and Razorpay escrow protection. Secure deals, transparent grading, total peace of mind.
                        </p>

                        <div className="flex items-center gap-4">
                            <Link to="/download">
                                <Button variant="hero" size="lg">
                                    Download App
                                </Button>
                            </Link>
                            <Button variant="heroOutline" size="lg">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Right - Phone Mockup */}
                    <div className="relative flex justify-center">
                        <div className="relative">
                            {/* Phone Image */}
                            <img
                                src={heroPhoneMockup}
                                alt="Refurbished smartphone"
                                className="w-72 md:w-96 drop-shadow-2xl"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 right-0 md:right-4 bg-card rounded-xl shadow-lg p-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-success" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Verified Listings</p>
                                    <p className="font-semibold text-foreground">100% Inspected</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { icon: "✓", label: "Aadhar Verified" },
                        { icon: "🛡️", label: "Escrow Protection" },
                        { icon: "⭐", label: "Quality Graded" },
                        { icon: "💳", label: "Powered by Razorpay" },
                    ].map((badge, index) => (
                        <div key={index} className="flex items-center gap-3 text-muted-foreground">
                            <span className="text-primary">{badge.icon}</span>
                            <span className="text-sm font-medium">{badge.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
