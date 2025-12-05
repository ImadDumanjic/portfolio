import {
    Code2,
    Database,
    Brain,
    Palette,
    Globe,
    Server,
    Sparkles,
    FileCode
} from "lucide-react";

const skills = [
    {
        name: "Java",
        icon: Code2,
        category: "Backend",
        color: "from-orange-500 to-red-500",
    },
    {
        name: "Python",
        icon: FileCode,
        category: "AI & Backend",
        color: "from-blue-500 to-yellow-500",
    },
    {
        name: "JavaScript",
        icon: Sparkles,
        category: "Frontend",
        color: "from-yellow-400 to-yellow-600",
    },
    {
        name: "React",
        icon: Globe,
        category: "Frontend",
        color: "from-cyan-400 to-blue-500",
    },
    {
        name: "Node.js",
        icon: Server,
        category: "Backend",
        color: "from-green-500 to-emerald-600",
    },
    {
        name: "SQL & MongoDB",
        icon: Database,
        category: "Databases",
        color: "from-blue-600 to-indigo-600",
    },
    {
        name: "AI & Prompt Engineering",
        icon: Brain,
        category: "AI/ML",
        color: "from-purple-500 to-pink-500",
    },
    {
        name: "UI/UX Design",
        icon: Palette,
        category: "Design",
        color: "from-pink-500 to-rose-500",
    },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />

            <div className="relative z-10 section-container">
                <div className="text-center space-y-4 mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Technical Expertise</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        Skills & <span className="gradient-text">Technologies</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive toolkit spanning full-stack development, artificial intelligence,
                        and modern design principles.
                    </p>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="group relative"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Glow effect on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />

                            <div className="relative skill-badge flex-col items-center text-center p-6 h-full">
                                {/* Icon with gradient background */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.color} p-[1px] mb-4`}>
                                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                                        <skill.icon className="w-6 h-6 text-foreground" />
                                    </div>
                                </div>

                                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {skill.name}
                                </h3>
                                <span className="text-xs text-muted-foreground mt-1">{skill.category}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional skills bar */}
                <div className="mt-16">
                    <div className="glass-card p-6">
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <span className="text-muted-foreground font-medium">Also experienced with:</span>
                            {["HTML5", "CSS3", "Git", "REST APIs", "Agile", "Linux", "Docker"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 rounded-full bg-secondary/50 text-sm text-foreground border border-border hover:border-primary/50 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
