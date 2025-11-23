import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle2, Clock, Users } from "lucide-react";

const courses = [
  {
    title: "MERN Stack Residency",
    duration: "30 Weeks",
    stack: "MongoDB • Express • React • Node.js",
    description:
      "Master the complete JavaScript ecosystem. Build scalable web applications with modern React, Node.js backend, and MongoDB database.",
    features: [
      "React 18+ with Hooks & Context",
      "Node.js & Express REST APIs",
      "MongoDB & Mongoose ODM",
      "Authentication & Authorization",
    ],
  },
  {
    title: "Java Full-Stack Residency",
    duration: "30 Weeks",
    stack: "Spring Boot • React • PostgreSQL",
    description:
      "Learn enterprise-grade Java development. Build robust applications with Spring Boot backend and modern React frontend.",
    features: [
      "Spring Boot & Spring MVC",
      "JPA & Hibernate ORM",
      "PostgreSQL & Database Design",
      "Microservices Architecture",
    ],
  },
  {
    title: "Python Full-Stack Residency",
    duration: "30 Weeks",
    stack: "Django • React • PostgreSQL",
    description:
      "Become proficient in Python web development. Create powerful applications with Django backend and React frontend.",
    features: [
      "Django & Django REST Framework",
      "Python Best Practices",
      "PostgreSQL & SQL Optimization",
      "Celery & Background Tasks",
    ],
  },
];

interface CourseDetailsProps {
  onCtaClick: () => void;
}

export function CourseDetails({ onCtaClick }: CourseDetailsProps) {
  return (
    <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Choose Your <span className="gradient-text">Path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All programs include weekly expert reviews, real-world projects, and 
            career placement support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="hover-lift border-border bg-card flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="space-y-4 pb-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {course.title}
                  </h3>
                  <p className="text-sm font-medium text-primary">{course.stack}</p>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Expert Review</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 flex-grow flex flex-col">
                <p className="text-muted-foreground leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-2 flex-grow">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={onCtaClick}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Apply for this Program
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
