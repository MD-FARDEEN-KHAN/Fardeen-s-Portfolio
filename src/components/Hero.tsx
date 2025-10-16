import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import Scene3D from "./Scene3D";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 3D Scene */}
      <Scene3D />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in mt-16 md:mt-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-accent animate-glow tracking-wide" style={{ fontFamily: 'Orbitron, monospace', fontWeight: '700', textShadow: '0 0 20px hsl(var(--accent) / 0.5)' }}>
                MD FARDEEN ISMAIL KHAN
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Crafting intelligent solutions through cutting-edge technology. Passionate about AI, full-stack development, and building impactful digital experiences.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20"
              >
                View My Work
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-primary text-primary hover:bg-primary/10"
              >
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a 
                href="https://www.linkedin.com/in/md-fardeen-ismail-khan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-primary transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://github.com/md-fardeen-khan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-primary transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://www.instagram.com/kool_khan_1548" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-accent transition-all hover:scale-110"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5 text-accent" />
              </a>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="p-3 rounded-lg border border-border hover:border-primary transition-all hover:scale-110"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-slide-up">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-glow" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20">
                <img 
                  src={profilePhoto} 
                  alt="MD Fardeen Ismail Khan - AI & ML Enthusiast"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
