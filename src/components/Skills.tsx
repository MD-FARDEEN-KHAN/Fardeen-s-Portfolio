import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "AI & Machine Learning",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision", "NLP", "TensorFlow", "PyTorch", "Scikit-learn"]
    },
    {
      category: "Programming",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "R", "Bash"]
    },
    {
      category: "Web Development",
      skills: ["React", "Node.js", "HTML/CSS", "Tailwind CSS", "REST APIs", "Express.js", "Django", "Flask"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Docker", "AWS", "Google Cloud", "Jupyter", "PostgreSQL"]
    },
    {
      category: "Soft Skills",
      skills: ["Leadership", "Problem Solving", "Team Collaboration", "Public Speaking", "Networking", "Project Management"]
    },
    {
      category: "Languages",
      skills: ["English", "Hindi", "Urdu", "German"]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A diverse skill set spanning artificial intelligence, software development, and leadership.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="animate-slide-up text-center"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{category.category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIdx) => (
                  <Badge 
                    key={skillIdx}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-accent/20 text-accent border border-accent/30 hover:border-accent hover:bg-accent/30 transition-all cursor-default hover:scale-105 font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
