import { Briefcase, Award, Users } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Vocational Training | Tata Steel Ltd.",
      subtitle: "Flight Delay Prediction using Machine Learning",
      description: "Built a machine learning model to predict flight delays using regression techniques. Performed data cleaning, feature engineering, and model evaluation. Strengthened understanding of EDA and deployment workflows. Recognized for analytical excellence and initiative.",
      icon: Briefcase,
      color: "primary"
    },
    {
      title: "Team Lead | TechTitans",
      subtitle: "Final Year AI Project - Travel Buddy (2025)",
      description: "Led a 4-member team to build an AI-powered travel planner integrating weather, maps, and transport APIs. Developed backend in Python and frontend in ReactJS for real-time, seamless user interaction. Optimized API calls to improve system performance.",
      icon: Users,
      color: "accent"
    },
    {
      title: "Leadership & Achievements",
      subtitle: "Competition Winner & Academic Excellence",
      description: "2nd Place in Inter-College Business Idea Competition for 'Homies'. Completed Google Data Analytics Capstone with 100% score. Demonstrated strong problem-solving, team leadership, and analytical thinking throughout academic journey.",
      icon: Award,
      color: "primary"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-green-50/30 to-blue-50/30" data-testid="experience-section">
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
