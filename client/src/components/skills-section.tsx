import { Code, TrendingUp, Brain } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "primary",
      skills: ["Python", "Java"]
    },
    {
      title: "Core Concepts", 
      icon: Brain,
      color: "accent",
      skills: ["Data Structures & Algorithms", "Operating Systems", "OOP", "DBMS", "Computer Networks"]
    },
    {
      title: "Frameworks & Tools",
      icon: TrendingUp,
      color: "primary", 
      skills: ["ReactJS", "Streamlit", "Git", "Docker", "Linux", "LlamaIndex", "ChromaDB"]
    },
    {
      title: "Databases",
      icon: Code,
      color: "accent", 
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "AI/ML & Analytics",
      icon: Brain,
      color: "primary", 
      skills: ["BERT", "RAG", "Data Analytics", "Machine Learning"]
    },
    {
      title: "Soft Skills",
      icon: TrendingUp,
      color: "accent", 
      skills: ["Problem Solving", "Team Leadership", "Collaboration", "Analytical Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-20" data-testid="skills-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="skills-title">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="skills-subtitle">
            Technical proficiencies across data science and software development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card rounded-xl p-8 shadow-lg card-hover"
              data-testid={`skill-category-${index}`}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-${category.color}/10 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className={`text-${category.color} text-2xl h-8 w-8`} />
                </div>
                <h3 className="text-xl font-semibold mb-2" data-testid={`skill-category-title-${index}`}>
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="skill-badge bg-secondary text-secondary-foreground px-3 py-1 rounded-lg text-sm font-medium"
                    data-testid={`skill-badge-${index}-${skillIndex}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
