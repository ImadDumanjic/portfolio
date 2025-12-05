import { Award, Mic, Medal, Trophy } from "lucide-react";

const achievements = [
    {
        icon: Trophy,
        title: "Golden Plaque Award",
        description: "Awarded for co-founding REBED, an innovative learning platform for young students to learn programming languages",
        year: "2024",
        color: "from-yellow-500 to-amber-600",
        bgColor: "bg-yellow-500/10",
    },
    {
        icon: Mic,
        title: "Council of Europe Speaker",
        description: "Invited to present on 'AI in Law' — exploring the ethical and practical implications of artificial intelligence in legal systems",
        year: "2025",
        color: "from-primary to-accent",
        bgColor: "bg-primary/10",
    },
    {
        icon: Medal,
        title: "National Swimming Medals",
        description: "15-year professional swimming career with multiple national championships and medals across various competitions",
        year: "2008-2023",
        color: "from-cyan-500 to-blue-600",
        bgColor: "bg-cyan-500/10",
    },
    {
        icon: Award,
        title: "Academic Excellence",
        description: "Maintaining high academic standing while balancing athletics, project development, and professional speaking engagements",
        year: "Ongoing",
        color: "from-emerald-500 to-green-600",
        bgColor: "bg-emerald-500/10",
    },
];

const stats = [
    { value: "1", label: "Golden Plaque" },
    { value: "15", label: "Years Swimming" },
    { value: "10+", label: "Projects Built" },
    { value: "1", label: "International Talk" },
];

const AchievementsSection = () => {
    return (
        <section id="achievements" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10 section-container">
                <div className="text-center space-y-4 mb-16">
                    <span className="text-primary font-semibold tracking-wider text-sm">RECOGNITION</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        Achievements & <span className="gradient-text">Awards</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Milestones that reflect my dedication to excellence across technology,
                        athletics and public engagement.
                    </p>
                </div>

                {/* Achievements grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                        <div
                            key={achievement.title}
                            className="glass-card-hover p-8 relative overflow-hidden group"
                        >
                            {/* Gradient accent */}
                            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${achievement.color}`} />

                            <div className="flex gap-6">
                                {/* Icon */}
                                <div className={`shrink-0 w-16 h-16 rounded-2xl ${achievement.bgColor} flex items-center justify-center`}>
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} p-[2px]`}>
                                        <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                                            <achievement.icon className="w-5 h-5 text-foreground" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {achievement.title}
                                        </h3>
                                        <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.color} text-primary-foreground`}>
                                            {achievement.year}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats row */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="glass-card p-6 text-center">
                            <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                            <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
