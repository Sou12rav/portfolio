import { MapPin, MessageSquare, Home, Award } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Travel Buddy | TechTitans",
      role: "Team Lead (Final Year Project, 2025)",
      description: "Led a 4-member team to build an AI-powered travel planner integrating weather, maps, and transport APIs. Developed backend in Python and frontend in ReactJS for real-time, seamless user interaction. Optimized API calls to improve system performance and enhance user experience.",
      icon: MapPin,
      gradient: "from-primary/20 to-accent/20",
      tech: ["Python", "ReactJS", "APIs", "AI"]
    },
    {
      title: "AI Content Engine",
      role: "RAG-Based Document Analyzer",
      description: "Created a Retrieval-Augmented Generation system to compare multiple company reports (Alphabet, Tesla, Uber). Implemented semantic search using LlamaIndex, ChromaDB, and BERT. Built an interactive Streamlit chatbot for document-based Q&A.",
      icon: MessageSquare,
      gradient: "from-accent/20 to-primary/20",
      tech: ["LlamaIndex", "ChromaDB", "BERT", "Streamlit"]
    },
    {
      title: "Homies",
      role: "2nd Place - Inter-College Business Idea Competition 2022",
      description: "Secured 2nd place in an Inter-College Business Idea Competition. Designed and developed a website for finding nearby stays and PG accommodations. Demonstrated innovation in solving real-world housing search problems.",
      icon: Home,
      gradient: "from-primary/20 to-accent/20",
      tech: ["Web Development", "UI/UX", "Full Stack"]
    },
    {
      title: "Flight Delay Prediction",
      role: "Tata Steel Vocational Training Project",
      description: "Built a machine learning model to predict flight delays using regression techniques. Performed data cleaning, feature engineering, and model evaluation. Strengthened understanding of EDA and deployment workflows.",
      icon: Award,
      gradient: "from-accent/20 to-primary/20",
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
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <project.icon className="h-16 w-16 text-primary" />
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
