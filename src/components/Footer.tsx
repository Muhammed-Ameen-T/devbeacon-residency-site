import { Code2, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  onHireClick: () => void;
}

export function Footer({ onHireClick }: FooterProps) {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Code2 className="h-8 w-8" strokeWidth={2.5} />
              <span className="text-xl font-bold">DevBeacon</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming aspiring developers into production-ready engineers through
              expert mentorship and hands-on learning.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Programs</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button className="hover:text-primary transition-colors">
                  MERN Stack
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">
                  Java Full-Stack
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">
                  Python Full-Stack
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button className="hover:text-primary transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={onHireClick}
                  className="hover:text-primary transition-colors"
                >
                  Hire From Us
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Connect</h4>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 DevBeacon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
