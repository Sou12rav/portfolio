import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import profileImage from "@assets/dp_1761667356615.jpg";
import resumePDF from "@assets/Sourav_Acherjee_Software_Engineer_Resume_1761667072658.pdf";

export default function HeroSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Sourav_Acherjee_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center hero-gradient" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="hero-title">
              <span className="text-foreground">Hi, I'm</span>
              <span className="gradient-text block">Sourav Acherjee</span>
              <span className="text-foreground text-2xl sm:text-3xl lg:text-4xl">Software Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="hero-description">
              Passionate Computer Science Engineer with expertise in AI, Cloud, and Systems software development. 
              Proficient in Python, Java, and Linux environments with a strong foundation in data structures, 
              algorithms, and distributed systems. Building scalable, high-performance, and secure software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleDownloadResume}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                data-testid="button-download-resume"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <a 
                href="#contact" 
                onClick={handleContactClick}
                className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-secondary transition-colors text-center"
                data-testid="link-contact"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="lg:justify-end flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 shadow-2xl ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300" data-testid="profile-image">
              <img 
                src={profileImage} 
                alt="Sourav Acherjee - Software Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
