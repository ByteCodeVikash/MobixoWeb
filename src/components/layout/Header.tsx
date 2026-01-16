import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import mobixoLogo from "@/assets/mobixo-logo.png";

const Header = () => {
    const location = useLocation();

    const navLinks = [
        { name: "How It Works", path: "/#how-it-works" },
        { name: "Why Choose Us", path: "/#why-choose" },
        { name: "Featured Phones", path: "/#featured" },
        { name: "Reviews", path: "/#reviews" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-gradient-to-r from-sky-50 via-cyan-50 to-teal-50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container-main flex h-16 items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src={mobixoLogo} alt="Mobixo Logo" className="w-10 h-10 rounded-lg" />
                    <span className="font-bold text-xl text-foreground">Mobixo</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <Link to="/download">
                    <Button variant="hero" size="default">
                        Download App
                    </Button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
