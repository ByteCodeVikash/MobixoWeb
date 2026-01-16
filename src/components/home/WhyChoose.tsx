const StatsSection = () => {
    const stats = [
        { value: "10k+", label: "Phones Sold" },
        { value: "₹5Cr+", label: "Escrow Managed" },
        { value: "4.8/5", label: "User Rating" },
        { value: "100%", label: "Aadhar Verified" },
    ];

    return (
        <section className="gradient-primary py-10">
            <div className="container-main">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-primary-foreground/80">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
