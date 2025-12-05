import { Mail, MapPin, Send, Linkedin, Github, InstagramIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://formspree.io/f/xanrbane", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast({
                    title: "Success",
                    description: "Message sent successfully! I'll get back to you as soon as possible.",
                });

                {/* Reset form */ }
                setFormData({ name: "", email: "", message: "" });

            } else {
                toast({
                    title: "Error",
                    description: "Something went wrong. Please try again later.",
                });
            }

        } catch (error) {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-background to-background" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10 section-container">
                <div className="text-center space-y-4 mb-16">
                    <span className="text-primary font-semibold tracking-wider text-sm">GET IN TOUCH</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Interested in collaborating or have a project in mind?
                        I'd love to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact info */}
                    <div className="space-y-8">
                        <div className="glass-card p-8 space-y-6">
                            <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Email</p>
                                        <a href="mailto:imad.dumanjic@gmail.com" className="text-foreground hover:text-primary transition-colors">
                                            imad.dumanjic@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Location</p>
                                        <p className="text-foreground">Sarajevo, Bosnia & Herzegovina</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social links */}
                            <div className="pt-6 border-t border-border">
                                <p className="text-sm text-muted-foreground mb-4">Connect on social</p>
                                <div className="flex gap-3">
                                    {[
                                        { icon: Linkedin, href: "https://www.linkedin.com/in/imad-dumanji%C4%87-158b31255/", label: "LinkedIn" },
                                        { icon: Github, href: "https://github.com/imadDumanjic", label: "GitHub" },
                                        { icon: InstagramIcon, href: "https://www.instagram.com/imad_dumanjic/", label: "Instagram" },
                                    ].map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            className="w-12 h-12 rounded-xl bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors group"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="glass-card p-8">
                        <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                                    placeholder="Tell me about your project or opportunity..."
                                    required
                                />
                            </div>

                            <Button type="submit" variant="hero" size="xl" className="w-full disabled={isSubmitting}">
                                <Send className="w-4 h-4 mr-2" />
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
