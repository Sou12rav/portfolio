import { BarChart3, Plane, MessageSquare, GraduationCap, CloudSun, Laptop } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Data Analyst Job Simulation",
      problem: "Need for real-world data analysis experience",
      solution: "Analyzed complex datasets and prepared business reports",
      impact: "Extracted actionable insights for strategic decision-making",
      icon: BarChart3,
      gradient: "from-primary/20 to-accent/20"
    },
    {
      title: "Flight Delay Prediction",
      problem: "Unpredictable flight delays affecting passengers",
      solution: "Built ML model using EDA and predictive modeling",
      impact: "Improved prediction accuracy for better planning",
      icon: Plane,
      gradient: "from-accent/20 to-primary/20"
    },
    {
      title: "Content Engine with RAG",
      problem: "Difficulty comparing multiple business reports",
      solution: "Implemented RAG with LlamaIndex, ChromaDB, BERT",
      impact: "Created intelligent chatbot for document analysis",
      icon: MessageSquare,
      gradient: "from-primary/20 to-accent/20"
    },
    {
      title: "AI-Powered E-Learning Platform",
      problem: "One-size-fits-all learning approaches",
      solution: "Developed adaptive platform with AI recommendations",
      impact: "Personalized learning experiences as Team Leader",
      icon: GraduationCap,
      gradient: "from-accent/20 to-primary/20"
    },
    {
      title: "Weather Chatbot for Metro Cities",
      problem: "Need for quick weather information access",
      solution: "Created conversational bot with API integration",
      impact: "Real-time weather updates through natural conversation",
      icon: CloudSun,
      gradient: "from-primary/20 to-accent/20"
    },
    {
      title: "Educational Website",
      problem: "Limited access to educational content online",
      solution: "Built complete web platform for streaming content",
      impact: "First full-stack project showcasing web development skills",
      icon: Laptop,
      gradient: "from-accent/20 to-primary/20"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-semibold mb-3" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <div className="text-muted-foreground text-sm leading-relaxed" data-testid={`project-description-${index}`}>
                  <p><strong>Problem:</strong> {project.problem}</p>
                  <p><strong>Solution:</strong> {project.solution}</p>
                  <p><strong>Impact:</strong> {project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
