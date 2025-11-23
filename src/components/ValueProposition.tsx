import { CheckCircle2, Code2, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: CheckCircle2,
    title: "Expert Code Review",
    description:
      "Weekly one-on-one sessions with senior engineers who review your code, provide feedback, and guide you towards industry best practices.",
  },
  {
    icon: Code2,
    title: "Production-Ready Code",
    description:
      "Learn to write clean, maintainable code that meets industry standards. Build real-world projects that you can confidently showcase to employers.",
  },
  {
    icon: TrendingUp,
    title: "Architecture-First Learning",
    description:
      "Master system design and architectural patterns from day one. Understand how to build scalable applications that grow with business needs.",
  },
];

export function ValueProposition() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="gradient-text">DevBeacon</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our unique approach combines structured learning with personalized mentorship
            to accelerate your development career.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="hover-lift border-border bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
