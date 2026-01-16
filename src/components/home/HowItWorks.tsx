import { useState } from "react";
import { Search, ShieldCheck, Truck } from "lucide-react";
import homeScreen from "@/assets/app-preview/home-screen.png";
import sellPhone from "@/assets/app-preview/sell-phone.png";

const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState<"buyers" | "sellers">("buyers");

    const buyerSteps = [
        {
            icon: Search,
            title: "Browse Verified Listings",
            description: "Explore thousands of quality-checked smartphones with detailed reports."
        },
        {
            icon: ShieldCheck,
            title: "Secure Escrow Payment",
            description: "Your money is held safely by Razorpay Escrow until you confirm delivery."
        },
        {
            icon: Truck,
            title: "Get Your Device",
            description: "Inspected device delivered to your doorstep within 48 hours."
        }
    ];

    return (
        <section id="how-it-works" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div className="container-main">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Trading with Mobixo is simple, secure, and transparent. Choose your role to see the process.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-secondary rounded-lg p-1">
                        <button
                            onClick={() => setActiveTab("buyers")}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${activeTab === "buyers"
                                ? "bg-background text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            For Buyers
                        </button>
                        <button
                            onClick={() => setActiveTab("sellers")}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${activeTab === "sellers"
                                ? "bg-background text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            For Sellers
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Steps */}
                    <div className="space-y-6">
                        {buyerSteps.map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <step.icon className="w-5 h-5" />
                                </div>
                                <div className="border-l-2 border-primary/20 pl-4 pb-6">
                                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Phone Preview */}
                    <div className="flex justify-center">
                        <div className="w-64 md:w-72 bg-gradient-to-br from-teal-600 to-teal-700 rounded-[2rem] p-4 shadow-xl">
                            <div className="bg-teal-800/50 rounded-[1.5rem] aspect-[9/16] overflow-hidden">
                                <img
                                    src={activeTab === "buyers" ? homeScreen : sellPhone}
                                    alt={activeTab === "buyers" ? "Buy Phone Preview" : "Sell Phone Preview"}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
