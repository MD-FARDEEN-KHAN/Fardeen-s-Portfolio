import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const experiences = [
    {
      type: "leadership",
      icon: Briefcase,
      title: "Campus Lead",
      organization: "EdVenture Park & LetsUpgrade",
      period: "Oct 2024 - Present",
      description: "Led campus-wide tech initiatives, organized innovation challenges, and promoted entrepreneurship among students. Conducted workshops and peer mentorship programs on Python, AI/ML, and startup development."
    },
    {
      type: "internship",
      icon: Briefcase,
      title: "Artificial Intelligence Intern",
      organization: "Ram Infotech",
      period: "Nov 2024 - Dec 2024",
      description: "Designed and implemented basic AI models to solve real-time business problems using structured data. Assisted in data preprocessing, model evaluation, and integration of AI functionalities into internal tools."
    },
    {
      type: "internship",
      icon: Briefcase,
      title: "Python Developer Intern",
      organization: "CodeAlpha",
      period: "June 2024 - July 2024",
      description: "Developed Python-based applications and implemented machine learning models for data-driven solutions. Handled data preprocessing, model tuning, and performance evaluation."
    },
    {
      type: "internship",
      icon: Briefcase,
      title: "Software Developer Intern",
      organization: "Hackerrank",
      period: "2024",
      description: "Contributed to software development projects, enhanced coding skills, and worked on real-world development challenges in a collaborative environment."
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Bachelor of Technology - CSE (AI & ML)",
      organization: "Lords Institute of Engineering and Technology",
      period: "Expected April 2026",
      description: "Pursuing Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning. Current CGPA: 91.2%. Focus on AI/ML, Data Structures, Algorithms, and Software Development."
    }
  ];

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Experience & <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in technology and leadership.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {experiences.map((exp, index) => (
                  <div 
                    key={index}
                    className="min-w-full px-2"
                  >
                    <Card 
                      className="p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <div className="flex gap-4 md:gap-6">
                        <div className="flex-shrink-0">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <exp.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">
                              {exp.title}
                            </h3>
                            <span className="text-sm text-primary font-semibold">
                              {exp.period}
                            </span>
                          </div>
                          
                          <p className="text-lg text-muted-foreground mb-3">
                            {exp.organization}
                          </p>
                          
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevExperience}
              variant="outline"
              size="icon"
              className="rounded-full border-primary hover:bg-primary/10"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </Button>
            
            <div className="flex items-center gap-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground'
                  }`}
                  aria-label={`Go to experience ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextExperience}
              variant="outline"
              size="icon"
              className="rounded-full border-primary hover:bg-primary/10"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
