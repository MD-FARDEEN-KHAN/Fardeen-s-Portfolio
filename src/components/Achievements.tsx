import { Award, Trophy, Users, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      icon: Users,
      title: "10,000+ LinkedIn Connections",
      description: "Active engagement in tech communities and collaborative initiatives"
    },
    {
      icon: Trophy,
      title: "Hackathon Finalist",
      description: "HackPrix, Hackcelerate, Microsoft Hackathon, Solution Challenge, Hackhazards"
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description: "Microsoft, Coursera, Infosys, Cisco, IBM, Google, Goldman Sachs, Accenture"
    },
    {
      icon: Globe,
      title: "Multilingual",
      description: "Fluent in English, Hindi, Telugu, Urdu, and German"
    }
  ];

  return (
    <section id="achievements" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-accent">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition and accomplishments throughout my journey in technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={idx}
                className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
