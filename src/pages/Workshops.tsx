import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, Award } from "lucide-react";

const Workshops = () => {
  const upcomingWorkshops = [
    {
      title: "Introduction to SolidWorks",
      date: "January 20, 2026",
      time: "2:00 PM - 5:00 PM",
      instructor: "Prof. Ahmed Rahman",
      level: "Beginner",
      seats: "30 seats available",
      description: "Learn the fundamentals of SolidWorks including sketch-based modeling, part design, and assembly creation.",
    },
    {
      title: "Advanced AutoCAD Techniques",
      date: "January 28, 2026",
      time: "3:00 PM - 6:00 PM",
      instructor: "Eng. Sarah Khan",
      level: "Advanced",
      seats: "20 seats available",
      description: "Master advanced AutoCAD features including 3D modeling, parametric constraints, and dynamic blocks.",
    },
    {
      title: "Fusion 360 for Product Design",
      date: "February 5, 2026",
      time: "2:00 PM - 5:00 PM",
      instructor: "Fahim Hossain",
      level: "Intermediate",
      seats: "25 seats available",
      description: "Explore Fusion 360's cloud-based workflow for collaborative product design and manufacturing.",
    },
  ];

  const pastWorkshops = [
    {
      title: "CATIA V5 Fundamentals",
      date: "December 2025",
      participants: 45,
      rating: "4.8/5",
    },
    {
      title: "Parametric Modeling Masterclass",
      date: "November 2025",
      participants: 38,
      rating: "4.9/5",
    },
    {
      title: "CAD for Manufacturing",
      date: "October 2025",
      participants: 52,
      rating: "4.7/5",
    },
    {
      title: "3D Rendering & Visualization",
      date: "September 2025",
      participants: 40,
      rating: "4.8/5",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Workshops & Training</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Hands-on learning experiences to master CAD software and design techniques
          </p>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Upcoming Workshops</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingWorkshops.map((workshop, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{workshop.level}</Badge>
                </div>
                <CardTitle className="text-xl">{workshop.title}</CardTitle>
                <CardDescription className="space-y-2 mt-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-accent" />
                    <span>{workshop.seats}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-accent" />
                    <span>{workshop.instructor}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{workshop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Past Workshops */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Past Workshops</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastWorkshops.map((workshop, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{workshop.title}</CardTitle>
                  <CardDescription className="text-accent font-medium">
                    {workshop.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{workshop.participants} participants</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4" />
                    <span>Rating: {workshop.rating}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">How to Register</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Registration opens two weeks before each workshop. Members receive priority access and special discounts.
        </p>
      </section>
    </div>
  );
};

export default Workshops;
