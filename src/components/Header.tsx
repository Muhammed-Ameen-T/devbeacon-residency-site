import { Code2 } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  onCtaClick: () => void;
}

export function Header({ onCtaClick }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-primary">
            <Code2 className="h-8 w-8" strokeWidth={2.5} />
            <span className="text-xl font-bold">DevBeacon</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("career-path")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Career Path
          </button>
          <button
            onClick={() => scrollToSection("courses")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Courses
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Testimonials
          </button>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            onClick={onCtaClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
          >
            Get Admission Slot
          </Button>
        </div>
      </nav>
    </header>
  );
}
