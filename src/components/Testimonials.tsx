import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mohammed Ayazuddin",
      role: "Wells Fargo",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayazuddin",
      quote: "Fardeen is an exceptional developer with a keen eye for detail and innovation. His work ethic and technical skills are truly impressive."
    },
    {
      name: "Mohammed Ayub Khan",
      role: "Qualcomm",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=AyubKhan",
      quote: "Working with Fardeen has been a great experience. His ability to solve complex problems and deliver quality solutions is remarkable."
    },
    {
      name: "Syeda Sidrah Fatima",
      role: "Tech Mahindra",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sidrah",
      quote: "Fardeen's passion for technology and continuous learning makes him stand out. He brings creativity and technical excellence to every project."
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What People <span className="text-accent">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Testimonials from colleagues and industry professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="w-10 h-10 text-accent mb-4" />
              
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
