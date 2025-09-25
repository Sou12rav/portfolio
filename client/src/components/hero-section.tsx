import { Button } from "@/components/ui/button";
import { Download, User } from "lucide-react";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // Create a simple resume content for demonstration
    const resumeContent = `
COMPUTER SCIENCE & DATA ANALYTICS PROFESSIONAL

EDUCATION
- B.Tech in Computer Science and Engineering (2025)

SKILLS
- Programming: Python, R, SQL, Java
- Data Analytics: Data Cleaning, Visualization, EDA, Business Insights
- Machine Learning/AI: Supervised Learning, BERT, RAG, Recommendation Systems

CERTIFICATIONS
- Google Data Analytics Specialization (Coursera)
- Supervised Machine Learning (Coursera)
- Crash Course on Python (Coursera)
- Java Programming: Solving Problems with Software (with Honors)

PROJECTS
1. Data Analyst Job Simulation
2. Flight Delay Prediction
3. Content Engine with RAG
4. AI-Powered E-Learning Platform
5. Weather Chatbot for Metro Cities
6. Educational Website

EXPERIENCE
- Internships & Simulations in Data Analysis, ML, and AI
- Capstone projects with RAG, ML models, and data-driven solutions

HOBBIES
- Writing, Photography, Poetry
    `.trim();

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
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
              <span className="gradient-text block">Data Scientist</span>
              <span className="text-foreground">& AI Enthusiast</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="hero-description">
              B.Tech Computer Science graduate passionate about transforming data into insights. 
              Specialized in Machine Learning, AI, and Data Analytics with hands-on experience 
              in Python, R, and cutting-edge technologies.
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
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-2xl" data-testid="profile-placeholder">
              <User className="h-24 w-24 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
