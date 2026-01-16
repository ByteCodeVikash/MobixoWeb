import { CreditCard, Smartphone, Building2 } from "lucide-react";

const PaymentSection = () => {
    return (
        <section className="section-padding bg-secondary/30">
            <div className="container-main">
                <div className="card-base p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Safe & Secure Payments
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Mobixo integrates with Razorpay to offer India's most secure payment gateway. Your funds are protected by our Escrow system and only released after your verification.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                                    <CreditCard className="w-6 h-6 text-foreground" />
                                </div>
                                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                                    <Smartphone className="w-6 h-6 text-foreground" />
                                </div>
                                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                                    <Building2 className="w-6 h-6 text-foreground" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-secondary/50 rounded-xl p-6 text-center">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                                Official Payment Partner
                            </p>
                            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                                Razorpay
                            </div>
                            <p className="text-xs text-muted-foreground mt-3">
                                PCI-DSS COMPLIANT & 256 BIT ENCRYPTION
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentSection;
