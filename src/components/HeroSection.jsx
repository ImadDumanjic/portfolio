import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Mail } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />

            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow delay-500" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="absolute top-20 left-20 text-primary/20 text-6xl font-mono animate-float">&lt;/&gt;</div>
            <div className="absolute bottom-32 right-20 text-accent/20 text-5xl font-mono animate-float delay-300">{"{}"}</div>
            <div className="absolute top-40 right-40 text-neon-cyan/10 text-4xl font-mono animate-float delay-500">AI</div>

            <div className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-in-up">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Available for opportunities
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up delay-100">
                                <span className="text-foreground">Imad Dumanjić</span>
                                <br />
                                <span className="gradient-text">Software Engineer</span>
                                <br />
                                <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl">&amp; AI Enthusiast</span>
                            </h1>
                        </div>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
                            3rd-year IT student at <span className="text-foreground font-medium">International Burch University</span>,
                            passionate about building innovative solutions at the intersection of software engineering and artificial intelligence.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
                            <Button variant="hero" size="xl" asChild>
                                <a href="#projects">
                                    Projects
                                    <ArrowRight />
                                </a>
                            </Button>
                            <Button variant="hero-outline" size="xl" asChild>
                                <a href="#contact">
                                    <Mail className="mr-1" />
                                    Contact
                                </a>
                            </Button>
                            <Button variant="hero-outline" size="xl" asChild>
                                <a href="#resume">
                                    <FileText className="mr-1" />
                                    Resume
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Profile image area */}
                    <div className="relative flex justify-center lg:justify-end animate-fade-in-up delay-400">
                        <div className="relative">
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30 scale-110" />

                            {/* Image container */}
                            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent p-[3px]">
                                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                                        {/* Placeholder with initials */}
                                        <div className="w-full h-full bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                                            <span className="text-6xl md:text-7xl font-bold gradient-text">ID</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -top-4 -right-4 glass-card px-4 py-2 animate-float">
                                    <span className="text-neon-cyan font-semibold">🏆 Golden Plaque</span>
                                </div>
                                <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 animate-float delay-300">
                                    <span className="text-primary font-semibold">🎤 Council of Europe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
                    <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
                </div>
            </div>

        </section>
    );
}

export default HeroSection;