import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import iphone14ProImg from "@/assets/phones/iphone-14-pro.png";
import galaxyS23UltraImg from "@/assets/phones/galaxy-s23-ultra.png";
import pixel7ProImg from "@/assets/phones/pixel-7-pro.png";
import iphone13Img from "@/assets/phones/iphone-13.png";
import oneplus11Img from "@/assets/phones/oneplus-11.png";
import iphoneSeImg from "@/assets/phones/iphone-se.png";
import nothingPhone2Img from "@/assets/phones/nothing-phone-2.png";
import pixel6aImg from "@/assets/phones/pixel-6a.png";

interface Phone {
    name: string;
    storage: string;
    color: string;
    price: string;
    badge?: "new" | "excellent" | "good";
    image: string;
}

const FeaturedPhones = () => {
    const phones: Phone[] = [
        { name: "iPhone 14 Pro", storage: "128GB", color: "Space Black", price: "₹64,999", badge: "new", image: iphone14ProImg },
        { name: "Galaxy S23 Ultra", storage: "256GB", color: "Green", price: "₹58,999", badge: "excellent", image: galaxyS23UltraImg },
        { name: "Pixel 7 Pro", storage: "128GB", color: "Obsidian", price: "₹32,499", badge: "new", image: pixel7ProImg },
        { name: "iPhone 13", storage: "128GB", color: "Starlight", price: "₹38,999", badge: "excellent", image: iphone13Img },
        { name: "OnePlus 11", storage: "256GB", color: "Titan Black", price: "₹42,999", badge: "new", image: oneplus11Img },
        { name: "iPhone SE (2022)", storage: "64GB", color: "Product Red", price: "₹19,999", badge: "excellent", image: iphoneSeImg },
        { name: "Nothing Phone (2)", storage: "256GB", color: "Dark Grey", price: "₹34,999", badge: "new", image: nothingPhone2Img },
        { name: "Pixel 6a", storage: "128GB", color: "Charcoal", price: "₹16,499", badge: "good", image: pixel6aImg },
    ];

    const getBadgeClass = (badge?: string) => {
        switch (badge) {
            case "new":
                return "badge-new";
            case "excellent":
                return "badge-excellent";
            case "good":
                return "inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-yellow-500 text-white";
            default:
                return "";
        }
    };

    return (
        <section id="featured" className="section-padding bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
            <div className="container-main">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Featured Phones</h2>
                        <p className="text-muted-foreground">The most popular deals on the market right now.</p>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline">
                        View All Phones <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {phones.map((phone, index) => (
                        <Link to="/download" key={index} className="card-base card-hover overflow-hidden cursor-pointer">
                            {/* Image */}
                            <div className="aspect-square bg-secondary/30 flex items-center justify-center p-4">
                                <img
                                    src={phone.image}
                                    alt={phone.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-foreground text-sm">{phone.name}</h3>
                                    {phone.badge && (
                                        <span className={getBadgeClass(phone.badge)}>{phone.badge}</span>
                                    )}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    {phone.storage} • {phone.color}
                                </p>
                                <div className="flex items-center justify-between pt-2">
                                    <span className="font-bold text-accent">{phone.price}</span>
                                    <Button variant="link" size="sm" className="text-xs p-0 h-auto">
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <a href="#" className="inline-flex items-center gap-2 text-primary font-medium">
                        View All Phones <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedPhones;
