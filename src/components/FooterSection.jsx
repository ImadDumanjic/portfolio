import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border bg-card/50">
            <div className="section-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo/Name */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-accent p-[1px]">
                            <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                                <span className="font-bold gradient-text">ID</span>
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold text-foreground">Imad Dumanjić</p>
                            <p className="text-sm text-muted-foreground">Software Engineer & AI Enthusiast</p>
                        </div>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-4">
                        {[
                            { icon: Linkedin, href: "https://linkedin.com/in/imaddumanjic", label: "LinkedIn" },
                            { icon: Github, href: "https://github.com/imaddumanjic", label: "GitHub" },
                            { icon: Mail, href: "mailto:imad.dumanjic@gmail.com", label: "Email" },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                className="w-10 h-10 rounded-lg bg-secondary/50 hover:bg-primary/20 flex items-center justify-center transition-colors group"
                                aria-label={social.label}
                            >
                                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
                    <p>© {currentYear} Imad Dumanjić. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
