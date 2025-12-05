import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import AchievementsSection from "../components/AchievementsSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <AchievementsSection />
                <ContactSection />
                <FooterSection />
            </main>
        </div>
    )
}