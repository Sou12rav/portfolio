import { Button } from "@/components/ui/button";
import { Download, User } from "lucide-react";

export default function HeroSection() {
  const handleDownloadResume = () => {
    const resumeContent = `
SOURAV ACHERJEE
Hyderabad, Telangana, India
Email: souravacherjee2110@email.com | Phone: +91 9508687335 / +91 8142739057
LinkedIn: https://www.linkedin.com/in/sourav-acherjee-a41023230

OBJECTIVE
Motivated Computer Science graduate with hands-on experience in AI-driven and full-stack projects. 
Proficient in Python, Java, and web technologies with a strong grasp of data structures, algorithms, 
and software design principles. Passionate about creating scalable, reliable, and user-focused 
applications. Looking to contribute as a Software Developer in Hyderabad.

TECHNICAL SKILLS
• Languages: Python, Java
• Core Concepts: Data Structures & Algorithms, Operating Systems, OOP, DBMS, Computer Networks
• Frameworks & Tools: ReactJS, Streamlit, Git, Docker, Linux, LlamaIndex, ChromaDB
• Databases: MySQL, MongoDB
• AI/ML: BERT, Retrieval-Augmented Generation (RAG), Data Analytics, Machine Learning
• Soft Skills: Problem Solving, Team Leadership, Collaboration, Analytical Thinking

PROJECTS
• Travel Buddy | TechTitans (Final Year Project, 2025)
  - Led a 4-member team to build an AI-powered travel planner integrating weather, maps, and transport APIs
  - Developed backend in Python and frontend in ReactJS for real-time, seamless user interaction
  - Optimized API calls to improve system performance and enhance user experience

• AI Content Engine (RAG-Based Document Analyzer)
  - Created a Retrieval-Augmented Generation system to compare multiple company reports (Alphabet, Tesla, Uber)
  - Implemented semantic search using LlamaIndex, ChromaDB, and BERT
  - Built an interactive Streamlit chatbot for document-based Q&A

• Homies (Business Idea Competition Project)
  - Secured 2nd place in an Inter-College Business Idea Competition (2022)
  - Designed and developed a website for finding nearby stays and PG accommodations

VOCATIONAL TRAINING
Tata Steel Ltd. - Flight Delay Prediction using Machine Learning
- Built a machine learning model to predict flight delays using regression techniques
- Performed data cleaning, feature engineering, and model evaluation
- Strengthened understanding of EDA and deployment workflows

EDUCATION
Bachelor of Technology (B.Tech) – Computer Science and Engineering
Techno International Newtown, Kolkata | Graduated: 2025

CERTIFICATIONS
• Google Data Analytics Professional Certificate – Coursera
• Supervised Machine Learning: Regression and Classification – Coursera
• Crash Course on Python – Coursera
• Java Programming: Solving Problems with Software (with Honors) – Coursera

LEADERSHIP & ACHIEVEMENTS
• Team Lead, TechTitans – Final Year AI Project
• Completed Google Data Analytics Capstone with 100% score
• Recognized at Tata Steel for analytical excellence and initiative
• 2nd Place, Inter-College Business Idea Competition for 'Homies'
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
              <span className="gradient-text block">Sourav Acherjee</span>
              <span className="text-foreground text-2xl sm:text-3xl lg:text-4xl">Software Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="hero-description">
              B.Tech Computer Science graduate from Kolkata, now in Hyderabad. 
              Passionate about AI-driven and full-stack projects with expertise in Python, Java, 
              ReactJS, and cutting-edge ML technologies. Building scalable, user-focused applications.
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
