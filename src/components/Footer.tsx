import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} MD Fardeen Ismail Khan. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/md-fardeen-ismail-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border hover:border-primary transition-all hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://github.com/md-fardeen-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border hover:border-primary transition-all hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://www.instagram.com/kool_khan_1548"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border hover:border-accent transition-all hover:scale-110"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5 text-accent" />
            </a>
            <a
              href="#contact"
              className="p-2 rounded-lg border border-border hover:border-primary transition-all hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
