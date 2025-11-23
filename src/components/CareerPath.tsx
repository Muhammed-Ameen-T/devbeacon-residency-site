import { Card, CardContent } from "./ui/card";

const phases = [
  {
    phase: "Phase 1",
    weeks: "Weeks 1-8",
    title: "Foundations",
    description:
      "Master core programming concepts, data structures, algorithms, and version control. Build strong fundamentals that will support your entire career.",
    highlights: ["Core Programming", "Git & GitHub", "Problem Solving"],
  },
  {
    phase: "Phase 2",
    weeks: "Weeks 9-16",
    title: "Full-Stack Basics",
    description:
      "Learn frontend and backend technologies. Build complete applications with databases, APIs, and modern UI frameworks.",
    highlights: ["Frontend Frameworks", "REST APIs", "Database Design"],
  },
  {
    phase: "Phase 3",
    weeks: "Weeks 17-24",
    title: "Advanced Development",
    description:
      "Dive deep into system design, microservices, authentication, and deployment. Learn to architect scalable production systems.",
    highlights: ["System Design", "Authentication", "Cloud Deployment"],
  },
  {
    phase: "Phase 4",
    weeks: "Weeks 25-30",
    title: "Capstone & Career Prep",
    description:
      "Build a production-grade capstone project. Prepare for technical interviews, optimize your portfolio, and get placement support.",
    highlights: ["Capstone Project", "Interview Prep", "Job Placement"],
  },
];

export function CareerPath() {
  return (
    <section id="career-path" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Your 30-Week <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A carefully designed curriculum that takes you from beginner to 
            production-ready developer in just 30 weeks.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background shadow-lg z-10"></div>

                {/* Content card */}
                <div className="w-full lg:w-5/12">
                  <Card className="hover-lift border-border bg-card">
                    <CardContent className="p-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-primary uppercase tracking-wider">
                          {phase.phase}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {phase.weeks}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {phase.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
