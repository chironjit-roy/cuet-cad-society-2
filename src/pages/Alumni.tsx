import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Trophy, Users } from "lucide-react";

const Alumni = () => {
  const featuredAlumni = [
    {
      name: "Dr. Rashid Ahmed",
      graduation: "Class of 2015",
      position: "Senior Design Engineer",
      company: "Boeing",
      achievement: "Led the CAD team for 787 Dreamliner components",
      image: "👨‍🔬",
    },
    {
      name: "Eng. Tahmina Rahman",
      graduation: "Class of 2017",
      position: "CAD Manager",
      company: "Tesla",
      achievement: "Pioneered new parametric modeling workflows",
      image: "👩‍💼",
    },
    {
      name: "Farhan Karim",
      graduation: "Class of 2018",
      position: "Product Design Lead",
      company: "Apple",
      achievement: "Key contributor to MacBook Pro design innovations",
      image: "👨‍💻",
    },
  ];

  const alumniStats = [
    { icon: GraduationCap, label: "Total Alumni", value: "500+" },
    { icon: Briefcase, label: "Employed", value: "95%" },
    { icon: Trophy, label: "Industry Awards", value: "50+" },
    { icon: Users, label: "Countries", value: "25+" },
  ];

  const alumniByYear = [
    {
      year: "2023",
      count: 45,
      highlights: "Record placement in top tech companies",
    },
    {
      year: "2022",
      count: 42,
      highlights: "Highest graduate school admission rate",
    },
    {
      year: "2021",
      count: 38,
      highlights: "Multiple international conference publications",
    },
    {
      year: "2020",
      count: 40,
      highlights: "Founded 5 successful CAD startups",
    },
  ];

  const successStories = [
    {
      title: "From Student to Startup Founder",
      name: "Sabbir Hossain",
      year: "Class of 2019",
      story: "Founded CAD Solutions BD, now serving 200+ manufacturing companies across Bangladesh with custom CAD training and consulting.",
    },
    {
      title: "Research Excellence",
      name: "Dr. Nadia Islam",
      year: "Class of 2016",
      story: "Published groundbreaking research on AI-assisted CAD modeling, currently Assistant Professor at MIT.",
    },
    {
      title: "Industry Innovation Award",
      name: "Rahim Khan",
      year: "Class of 2018",
      story: "Received the Young Engineer Award for developing an innovative parametric design system for automotive manufacturing.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni Network</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Celebrating the achievements of our graduated members making impact worldwide
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-8 relative z-20 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {alumniStats.map((stat, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Alumni</h2>
          <p className="text-muted-foreground text-lg">Outstanding members making their mark in the industry</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredAlumni.map((alumni, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4 mx-auto">{alumni.image}</div>
                <CardTitle className="text-xl mb-2">{alumni.name}</CardTitle>
                <p className="text-accent font-medium">{alumni.graduation}</p>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="font-semibold">{alumni.position}</p>
                <p className="text-muted-foreground">{alumni.company}</p>
                <p className="text-sm text-muted-foreground mt-4">{alumni.achievement}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Alumni by Year */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Graduating Classes</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumniByYear.map((batch, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-primary">{batch.year}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-3xl font-bold">{batch.count}</p>
                  <p className="text-sm text-muted-foreground">Members</p>
                  <p className="text-sm mt-4">{batch.highlights}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-muted-foreground text-lg">Inspiring journeys from our alumni community</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-lg mb-2">{story.title}</CardTitle>
                <p className="text-primary font-semibold">{story.name}</p>
                <p className="text-sm text-accent">{story.year}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{story.story}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Alumni Network CTA */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Alumni Network
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Stay connected with fellow alumni, mentor current students, and continue being part of the CUET CAD Club community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
