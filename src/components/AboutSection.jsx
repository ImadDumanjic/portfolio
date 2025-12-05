import { Award, BookOpen, Mic, Waves } from "lucide-react";

const milestones = [
    {
        icon: Award,
        title: "Golden Plaque",
        description: "Received the Golden Plaque for REBED, an innovative platform for learning programming languages",
        year: "2023",
        color: "text-yellow-400"
    },
    {
        icon: BookOpen,
        title: "IT Student at IBU",
        description: "Pursuing a degree in Information Technologies at International Burch University",
        year: "2023 - Present",
        color: "text-blue-400"
    },
    {
        icon: Mic,
        title: "Council of Europe Speaker",
        description: "Delivered a talk on 'AI in Law' exploring the intersection of technology and legal systems",
        year: "2025",
        color: "text-cyan-100"
    },
    {
        icon: Waves,
        title: "Professional Swimming Career",
        description: "14 years of competitive swimming with national medals and achievements",
        year: "2008 - 2023",
        color: "text-neon-cyan"
    },
];

const AboutSection = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

            <div className="relative z-10 section-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Image/Visual */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative aspect-square max-w-md mx-auto">
                            {/* Background glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl" />

                            {/* Main card */}
                            <div className="relative glass-card p-8 h-full">
                                <div className="h-full flex flex-col justify-between">
                                    {/* Quote */}
                                    <div className="space-y-4">
                                        <div className="text-5xl text-primary/30">"</div>
                                        <p className="text-xl md:text-2xl text-foreground/90 italic leading-relaxed">
                                            Building the future through code, one line at a time.
                                        </p>
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-4 mt-8">
                                        <div className="glass-card p-4 text-center">
                                            <div className="text-3xl font-bold gradient-text">15</div>
                                            <div className="text-sm text-muted-foreground">Years Swimming</div>
                                        </div>
                                        <div className="glass-card p-4 text-center">
                                            <div className="text-3xl font-bold gradient-text">3rd</div>
                                            <div className="text-sm text-muted-foreground">Year Student</div>
                                        </div>
                                        <div className="glass-card p-4 text-center">
                                            <div className="text-3xl font-bold gradient-text">10+</div>
                                            <div className="text-sm text-muted-foreground">Projects Built</div>
                                        </div>
                                        <div className="glass-card p-4 text-center">
                                            <div className="text-3xl font-bold gradient-text">∞</div>
                                            <div className="text-sm text-muted-foreground">Passion</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Real Content */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="space-y-4">
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm">About Me</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                Driven by <span className="gradient-text">Curiosity</span> & <span className="gradient-text">Innovation</span>
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I'm a third-year IT student at International Burch University with a deep passion for
                            software development and artificial intelligence. My journey combines academic excellence
                            with real-world project experience, from building educational platforms to exploring
                            the ethical implications of AI in legal systems.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Beyond technology, my 15-year career as a professional swimmer has taught me discipline,
                            perseverance, and the value of continuous improvement — qualities I bring to every
                            project I undertake.
                        </p>

                        {/* Milestones */}
                        <div className="space-y-4 mt-12">
                            <h3 className="text-xl font-semibold text-foreground">Key Milestones</h3>
                            <div className="grid gap-4">
                                {milestones.map((milestone, index) => (
                                    <div
                                        key={index}
                                        className="glass-card-hover p-4 flex items-start gap-4 group"
                                    >
                                        <div className={`p-3 rounded-xl bg-secondary ${milestone.color}`}>
                                            <milestone.icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                                    {milestone.title}
                                                </h4>
                                                <span className="text-sm text-muted-foreground">{milestone.year}</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;