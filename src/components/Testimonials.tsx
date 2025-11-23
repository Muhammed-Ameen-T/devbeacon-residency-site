import { Card, CardContent } from "./ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Tech Corp",
    content:
      "DevBeacon's expert review sessions were game-changing. My mentor helped me understand architectural patterns that I still use daily in my job.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Full-Stack Developer at StartupXYZ",
    content:
      "The structured roadmap combined with personalized feedback made all the difference. I landed my dream job within 2 weeks of graduating.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Backend Engineer at Enterprise Inc",
    content:
      "Coming from a non-tech background, DevBeacon gave me the confidence and skills to transition into software development successfully.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of developers who transformed their careers with DevBeacon.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-lift border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-4">
                <Quote className="h-10 w-10 text-primary/20" />
                
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
