import { Briefcase, Network } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Internship & Simulations",
      subtitle: "Data Analysis, Machine Learning, and AI-based projects",
      description: "Gained hands-on experience through various data analysis internships and simulation projects, working with real-world datasets and developing practical solutions for business challenges.",
      icon: Briefcase,
      color: "primary"
    },
    {
      title: "Capstone & Assignments",
      subtitle: "Applied RAG, ML models, and data-driven problem solving",
      description: "Led comprehensive capstone projects implementing cutting-edge technologies like RAG, advanced machine learning models, and data-driven solutions for complex academic and practical challenges.",
      icon: Network,
      color: "accent"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30" data-testid="experience-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="experience-title">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="experience-subtitle">
            Professional development through internships and practical applications
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <div 
              key={experience.title}
              className="bg-card rounded-xl p-8 shadow-lg card-hover"
              data-testid={`experience-card-${index}`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-${experience.color}/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                  <experience.icon className={`text-${experience.color} h-6 w-6`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2" data-testid={`experience-title-${index}`}>
                    {experience.title}
                  </h3>
                  <p className="text-muted-foreground mb-4" data-testid={`experience-subtitle-${index}`}>
                    {experience.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed" data-testid={`experience-description-${index}`}>
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
