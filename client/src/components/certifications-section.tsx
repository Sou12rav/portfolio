import { Award, Bot, Globe } from "lucide-react";
import { SiPython, SiR } from "react-icons/si";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Google Data Analytics Specialization",
      provider: "Coursera",
      description: "8-course series covering SQL, R, Spreadsheets, Visualization, and Capstone project",
      icon: Award,
      color: "primary"
    },
    {
      title: "Supervised Machine Learning",
      provider: "Coursera", 
      description: "Advanced machine learning techniques and model development",
      icon: Bot,
      color: "accent"
    },
    {
      title: "Crash Course on Python",
      provider: "Coursera",
      description: "Comprehensive Python programming fundamentals and applications",
      icon: SiPython,
      color: "primary"
    },
    {
      title: "Java Programming: Solving Problems with Software",
      provider: "with Honors",
      description: "Advanced Java programming and problem-solving methodologies",
      icon: Globe,
      color: "accent"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-purple-50/30 to-blue-50/40" data-testid="certifications-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="certifications-title">
            Certifications
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="certifications-subtitle">
            Professional development and specialized training
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className="bg-card rounded-xl p-6 shadow-lg card-hover"
              data-testid={`certification-card-${index}`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-${cert.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  {cert.icon === SiPython ? (
                    <SiPython className={`text-${cert.color} text-xl`} />
                  ) : (
                    <cert.icon className={`text-${cert.color} h-6 w-6`} />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1" data-testid={`certification-title-${index}`}>
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2" data-testid={`certification-provider-${index}`}>
                    {cert.provider}
                  </p>
                  <p className="text-sm" data-testid={`certification-description-${index}`}>
                    {cert.description}
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
