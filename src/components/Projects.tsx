import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import jarvisImg from "@/assets/jarvis-project.jpg";
import wastexImg from "@/assets/wastex-project.jpg";
import lungCancerImg from "@/assets/lung-cancer-project.jpg";
import yoloMesImg from "@/assets/yolo-mes-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Jarvis AI Assistant",
      description: "Built an AI-powered virtual assistant using Python, APIs, and web technologies to automate tasks, control applications, and provide voice interaction features. Developed modular architecture using PyQt5 for GUI and edge-tts for voice output.",
      tags: ["Python", "PyQt5", "NLP", "Speech Recognition"],
      image: jarvisImg,
      link: "#",
      github: "https://github.com/md-fardeen-khan"
    },
    {
      title: "WasteX – Smart Waste Management System",
      description: "Developed an intelligent system to detect, classify, and monitor waste using machine learning and IoT sensors. Designed real-time monitoring dashboard with Python, OpenCV, and ThingSpeak. Reduced overflow by 30% in pilot testing.",
      tags: ["Python", "OpenCV", "IoT", "ThingSpeak", "ML"],
      image: wastexImg,
      link: "#",
      github: "https://github.com/md-fardeen-khan"
    },
    {
      title: "Lung Cancer Prediction Using CNN",
      description: "Developed a CNN-based deep learning model using TensorFlow to detect lung cancer from chest X-ray images. Achieved 92% accuracy and 89% recall with preprocessing of 10,000+ medical images. Deployed as Flask web application.",
      tags: ["Python", "TensorFlow", "CNN", "Flask", "Medical AI"],
      image: lungCancerImg,
      link: "#",
      github: "https://github.com/md-fardeen-khan"
    },
    {
      title: "YOLO-MES: Underwater Garbage Detection",
      description: "An effective lightweight underwater garbage detection scheme for marine ecosystems using YOLO-based object detection. Developed to identify and classify marine debris, helping protect ocean environments through AI-powered monitoring.",
      tags: ["YOLO", "Computer Vision", "Marine AI", "Python", "Object Detection"],
      image: yoloMesImg,
      link: "#",
      github: "https://github.com/md-fardeen-khan"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my work in AI, machine learning, and software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 flex-1"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-border hover:border-primary/50"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
