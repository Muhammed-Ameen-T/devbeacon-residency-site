import { Button } from "./ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-developer.jpg";

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                <Code2 className="h-4 w-4" />
                30-Week Intensive Residency
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Master Full-Stack Development with{" "}
              <span className="gradient-text">Expert Review</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              DevBeacon's ∣Residency∣ program combines structured roadmaps, 
              self-paced learning, and weekly expert code reviews to transform 
              you into a production-ready developer.
            </p>

            <div className="space-y-3">
              {[
                "Personalized Learning Roadmap",
                "Weekly Expert Code Reviews",
                "Production-Ready Architecture Training",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base md:text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={onCtaClick}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all group"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById("career-path");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-lg px-8 py-6"
              >
                Explore Program
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3"></div>
            <img
              src={heroImage}
              alt="Developer coding at modern workspace"
              className="relative rounded-3xl shadow-2xl hover-lift w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Code2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
