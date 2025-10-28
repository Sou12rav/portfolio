import { MapPin, MessageSquare, Home, Award } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Travel Buddy | TechTitans",
      role: "Team Lead (Final Year Project, 2025)",
      description: "Led a team of four to develop an AI-powered personalized travel planner integrating weather, maps, and transport APIs. Designed backend in Python and frontend in ReactJS ensuring seamless real-time data flow. Deployed the application on cloud infrastructure using Docker and optimized API latency by 25%.",
      icon: MapPin,
      gradient: "from-blue-500/30 via-purple-500/20 to-blue-400/30",
      iconColor: "text-blue-600",
      tech: ["Python", "ReactJS", "Docker", "Cloud", "APIs"]
    },
    {
      title: "AI Content Engine",
      role: "RAG-Based Document Analyzer",
      description: "Developed a Retrieval-Augmented Generation (RAG) system to compare and analyze 10-K reports (Alphabet, Tesla, Uber). Built semantic search using LlamaIndex, ChromaDB, and BERT. Created a Streamlit chatbot interface for contextual document-based Q&A.",
      icon: MessageSquare,
      gradient: "from-purple-500/30 via-pink-500/20 to-purple-400/30",
      iconColor: "text-purple-600",
      tech: ["RAG", "LlamaIndex", "ChromaDB", "BERT", "Streamlit"]
    },
    {
      title: "Homies",
      role: "2nd Place - Inter-College Business Idea Competition 2022",
      description: "Secured 2nd place in an Inter-College Business Idea Competition. Designed and developed a website for finding nearby stays and PG accommodations. Demonstrated innovation in solving real-world housing search problems.",
      icon: Home,
      gradient: "from-green-500/30 via-emerald-500/20 to-green-400/30",
      iconColor: "text-green-600",
      tech: ["Web Development", "UI/UX", "Full Stack"]
    },
    {
      title: "Flight Delay Prediction",
      role: "Tata Steel Vocational Training Project",
      description: "Implemented a machine learning pipeline for flight delay prediction using regression techniques. Conducted EDA, feature engineering, and performance optimization. Strengthened understanding of deployment workflows and model evaluation metrics.",
      icon: Award,
      gradient: "from-amber-500/30 via-orange-500/20 to-amber-400/30",
      iconColor: "text-amber-600",
      tech: ["Machine Learning", "Python", "EDA", "Regression"]
    }
  ];

  return (
    <section id="projects" className="py-20" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="projects-title">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="projects-subtitle">
            Real-world applications of data science and AI technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-card rounded-xl overflow-hidden shadow-lg card-hover"
              data-testid={`project-card-${index}`}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
                <project.icon className={`h-16 w-16 ${project.iconColor} relative z-10`} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-primary mb-3 font-medium" data-testid={`project-role-${index}`}>
                  {project.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="skill-badge bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium"
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
