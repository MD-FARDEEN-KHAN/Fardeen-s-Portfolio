import { Card } from "@/components/ui/card";
import { Brain, Users, Trophy, Code2 } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & ML Focus",
      description: "Deep interest in artificial intelligence and machine learning technologies"
    },
    {
      icon: Users,
      title: "Campus Leader",
      description: "Campus Lead at EdVenture Park, fostering innovation and learning"
    },
    {
      icon: Trophy,
      title: "Problem Solver",
      description: "Passionate about tackling complex challenges with creative solutions"
    },
    {
      icon: Code2,
      title: "Python Full Stack Developer",
      description: "Expert in building scalable applications and data analytics solutions"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A Python Full Stack Developer and Data Analyst with expertise in AI/ML, 
            passionate about cutting-edge technology and building impactful solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
