import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Users } from "lucide-react";

const Committee = () => {
  const executiveBoard = [
    {
      name: "Arif Rahman",
      position: "President",
      department: "Mechanical Engineering",
      year: "4th Year",
      email: "president@cuetcad.club",
      image: "👨‍💼",
    },
    {
      name: "Nusrat Jahan",
      position: "Vice President",
      department: "Industrial & Production Engineering",
      year: "3rd Year",
      email: "vp@cuetcad.club",
      image: "👩‍💼",
    },
    {
      name: "Kamal Hossain",
      position: "General Secretary",
      department: "Civil Engineering",
      year: "3rd Year",
      email: "secretary@cuetcad.club",
      image: "👨‍💻",
    },
  ];

  const teamMembers = [
    {
      name: "Fatima Ahmed",
      position: "Workshop Coordinator",
      department: "Mechanical Engineering",
      year: "3rd Year",
    },
    {
      name: "Rakib Islam",
      position: "Technical Lead",
      department: "Electrical & Electronic Engineering",
      year: "4th Year",
    },
    {
      name: "Sabrina Khan",
      position: "Event Manager",
      department: "Architecture",
      year: "2nd Year",
    },
    {
      name: "Tanvir Hassan",
      position: "Public Relations Officer",
      department: "Computer Science & Engineering",
      year: "3rd Year",
    },
    {
      name: "Ayesha Siddique",
      position: "Treasurer",
      department: "Mechanical Engineering",
      year: "3rd Year",
    },
    {
      name: "Mahmudul Hasan",
      position: "Design Lead",
      department: "Industrial & Production Engineering",
      year: "2nd Year",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Committee Members</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Meet the dedicated team driving our club's mission forward
          </p>
        </div>
      </section>

      {/* Faculty Advisor */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Faculty Advisor</h2>
        </div>
        <Card className="max-w-2xl mx-auto hover:shadow-lg transition-all">
          <CardContent className="flex flex-col md:flex-row items-center gap-6 pt-6">
            <div className="text-7xl">👨‍🏫</div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold mb-2">Dr. Mohammad Ali</h3>
              <p className="text-lg text-muted-foreground mb-2">Professor, Department of Mechanical Engineering</p>
              <p className="text-muted-foreground mb-4">
                Dr. Ali brings over 20 years of experience in CAD/CAM and manufacturing engineering. His guidance has been instrumental in shaping our club's technical direction.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="mailto:dr.ali@cuet.ac.bd" className="text-primary hover:text-primary/80">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Executive Board */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Executive Board</h2>
            <p className="text-muted-foreground text-lg">Leading our club's initiatives and programs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {executiveBoard.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4 mx-auto">{member.image}</div>
                  <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                  <p className="text-accent font-semibold">{member.position}</p>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">{member.department}</p>
                  <p className="text-sm text-muted-foreground">{member.year}</p>
                  <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 mt-2">
                    <Mail className="w-4 h-4" />
                    {member.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Committee Members</h2>
          <p className="text-muted-foreground text-lg">Our dedicated team working behind the scenes</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-accent font-medium">{member.position}</p>
              </CardHeader>
              <CardContent className="space-y-1">
                <p className="text-sm text-muted-foreground">{member.department}</p>
                <p className="text-sm text-muted-foreground">{member.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Join Committee CTA */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container mx-auto px-4 text-center">
          <Users className="w-16 h-16 mx-auto mb-4 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in Joining the Committee?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            We hold elections annually for committee positions. Stay connected to learn about upcoming opportunities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Committee;
