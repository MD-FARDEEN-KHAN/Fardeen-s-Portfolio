import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email directly.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mohammedfardeenismailkhan@gmail.com",
      link: "mailto:mohammedfardeenismailkhan@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "11k+ Connections",
      link: "https://www.linkedin.com/in/md-fardeen-ismail-khan"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@md-fardeen-khan",
      link: "https://github.com/md-fardeen-khan"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hyderabad, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's connect and discuss opportunities in AI, ML, or collaboration on exciting projects.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  required
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <a 
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-muted-foreground text-sm break-all">{info.value}</p>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
