import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";

const About = () => {
  const committee = [
    { name: "Dr. Ahmed Rahman", role: "Faculty Advisor", department: "Mechanical Engineering" },
    { name: "Sarah Islam", role: "President", year: "4th Year" },
    { name: "Rakib Hasan", role: "Vice President", year: "3rd Year" },
    { name: "Nadia Khan", role: "General Secretary", year: "3rd Year" },
    { name: "Fahim Ahmed", role: "Treasurer", year: "2nd Year" },
    { name: "Tasnim Jahan", role: "Workshop Coordinator", year: "3rd Year" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About CUET CAD Club</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Fostering excellence in Computer-Aided Design through learning, collaboration, and innovation
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Target className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To provide students with hands-on CAD experience and industry-relevant skills through workshops, projects, and mentorship.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Award className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be the leading student organization fostering design innovation and technical excellence at CUET and beyond.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all">
            <CardHeader>
              <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle>Our Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A diverse community of passionate students from all departments, united by a love for design and engineering.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Do</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Workshops & Training</h3>
              <p className="text-muted-foreground">
                Regular hands-on sessions covering AutoCAD, SolidWorks, Fusion 360, and other industry-standard tools.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Project Development</h3>
              <p className="text-muted-foreground">
                Collaborative projects that solve real-world problems and build portfolios for future careers.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Competitions</h3>
              <p className="text-muted-foreground">
                Annual design challenges and participation in national/international CAD competitions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Industry Connections</h3>
              <p className="text-muted-foreground">
                Networking events with professionals, guest lectures, and industry visit opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Committee</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {committee.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-accent font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.department || member.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
