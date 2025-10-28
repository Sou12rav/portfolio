import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-secondary/30" data-testid="education-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="education-title">Education</h2>
          <p className="text-muted-foreground text-lg" data-testid="education-subtitle">
            Academic foundation in Computer Science and Engineering
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-lg card-hover" data-testid="education-card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                <GraduationCap className="text-primary-foreground text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold" data-testid="degree-title">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-muted-foreground font-medium" data-testid="degree-major">Computer Science and Engineering</p>
                <p className="text-muted-foreground" data-testid="graduation-year">Techno International Newtown, Kolkata | Graduated: 2025</p>
              </div>
            </div>
            <p className="text-muted-foreground" data-testid="degree-description">
              Comprehensive study in computer science fundamentals including Data Structures & Algorithms, 
              Operating Systems, Object-Oriented Programming, Database Management Systems, and Computer Networks.
              Specialized focus on AI/ML technologies and full-stack development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
