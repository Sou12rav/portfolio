import { PenTool, Camera, Feather } from "lucide-react";

export default function HobbiesSection() {
  const hobbies = [
    {
      title: "Writing",
      description: "Crafting emotionally reflective pieces that explore themes of resilience and human experience.",
      icon: PenTool,
      color: "primary"
    },
    {
      title: "Photography", 
      description: "Capturing moments and perspectives through the lens, finding beauty in everyday scenes.",
      icon: Camera,
      color: "accent"
    },
    {
      title: "Poetry",
      description: "Expressing complex emotions and thoughts through verse, often focusing on human struggles.",
      icon: Feather,
      color: "primary"
    }
  ];

  return (
    <section id="hobbies" className="py-20" data-testid="hobbies-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="hobbies-title">
            Beyond Technology
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="hobbies-subtitle">
            Creative pursuits and personal interests
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div key={hobby.title} className="text-center" data-testid={`hobby-card-${index}`}>
              <div className={`w-20 h-20 bg-${hobby.color}/10 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <hobby.icon className={`text-${hobby.color} text-2xl h-8 w-8`} />
              </div>
              <h3 className="text-xl font-semibold mb-4" data-testid={`hobby-title-${index}`}>
                {hobby.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`hobby-description-${index}`}>
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
