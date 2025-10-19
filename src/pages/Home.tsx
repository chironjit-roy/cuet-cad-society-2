import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, Lightbulb, Users, Wrench, Quote } from "lucide-react";
import { NavLink } from "react-router-dom";
import heroImage from "@/assets/hero-cad.jpg";

const Home = () => {
  const stats = [
    { icon: Users, label: "Active Members", value: "150+" },
    { icon: Lightbulb, label: "Projects", value: "50+" },
    { icon: Calendar, label: "Events Yearly", value: "20+" },
    { icon: Wrench, label: "Workshops", value: "30+" },
  ];

  const updates = [
    {
      title: "3D Modeling Workshop",
      date: "Dec 15, 2025",
      description: "Learn advanced SolidWorks techniques from industry professionals.",
    },
    {
      title: "CAD Competition 2025",
      date: "Jan 10, 2026",
      description: "Annual design competition with exciting prizes and recognition.",
    },
    {
      title: "New Resources Added",
      date: "Dec 1, 2025",
      description: "Check out our updated tutorial library for AutoCAD and Fusion 360.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to CUET CAD Club
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Where Design Meets Innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <NavLink to="/join">Join the Club</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
              <NavLink to="/about">Learn More</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-16 relative z-20 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
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

      {/* Latest Updates */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Updates</h2>
          <p className="text-muted-foreground text-lg">Stay informed about our recent activities</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {updates.map((update, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-xl">{update.title}</CardTitle>
                <CardDescription className="text-accent font-medium">{update.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{update.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <NavLink to="/events">View All Events</NavLink>
          </Button>
        </div>
      </section>

      {/* Messages Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Messages from Leadership</h2>
          <p className="text-muted-foreground text-lg">Words of wisdom and guidance</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Faculty Advisor */}
          <Card className="hover:shadow-lg transition-all">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4 mx-auto">👨‍🏫</div>
              <CardTitle className="text-xl">Dr. Mohammad Ali</CardTitle>
              <CardDescription className="text-accent font-medium">Faculty Advisor</CardDescription>
              <CardDescription className="text-sm">Professor, Mechanical Engineering</CardDescription>
            </CardHeader>
            <CardContent>
              <Quote className="w-8 h-8 text-accent/30 mb-3" />
              <p className="text-muted-foreground italic">
                "The CUET CAD Club represents the perfect blend of creativity and technical excellence. I am proud to see our students pushing boundaries and developing skills that will shape the future of engineering design."
              </p>
            </CardContent>
          </Card>

          {/* President */}
          <Card className="hover:shadow-lg transition-all border-2 border-primary/20">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4 mx-auto">👨‍💼</div>
              <CardTitle className="text-xl">Arif Rahman</CardTitle>
              <CardDescription className="text-accent font-medium">President</CardDescription>
              <CardDescription className="text-sm">Mechanical Engineering, 4th Year</CardDescription>
            </CardHeader>
            <CardContent>
              <Quote className="w-8 h-8 text-accent/30 mb-3" />
              <p className="text-muted-foreground italic">
                "Together, we are building a community where innovation thrives. Our club is not just about learning software—it's about transforming ideas into reality and preparing for the challenges of tomorrow's engineering landscape."
              </p>
            </CardContent>
          </Card>

          {/* General Secretary */}
          <Card className="hover:shadow-lg transition-all">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4 mx-auto">👨‍💻</div>
              <CardTitle className="text-xl">Kamal Hossain</CardTitle>
              <CardDescription className="text-accent font-medium">General Secretary</CardDescription>
              <CardDescription className="text-sm">Civil Engineering, 3rd Year</CardDescription>
            </CardHeader>
            <CardContent>
              <Quote className="w-8 h-8 text-accent/30 mb-3" />
              <p className="text-muted-foreground italic">
                "Every workshop, every project, every collaboration makes us stronger as designers and engineers. I invite you to join us in this exciting journey of continuous learning and growth."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Media Gallery</h2>
            <p className="text-muted-foreground text-lg">Capturing moments from our events and activities</p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-lg transition-all hover-scale cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl">
                    🖥️
                  </div>
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-center">Workshop Session</p>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-lg transition-all hover-scale cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-6xl">
                    🏆
                  </div>
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-center">Competition Winners</p>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-lg transition-all hover-scale cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl">
                    👥
                  </div>
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-center">Team Activities</p>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-lg transition-all hover-scale cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-6xl">
                    🎓
                  </div>
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-center">Guest Lectures</p>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-lg transition-all hover-scale cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-6xl">
                    🔧
                  </div>
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-center">Hands-on Training</p>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-lg transition-all hover-scale cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl">
                    🎨
                  </div>
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-center">Design Projects</p>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-lg transition-all hover-scale cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-6xl">
                    🏭
                  </div>
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-center">Industry Visits</p>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-lg transition-all hover-scale cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl">
                    🎉
                  </div>
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-center">Club Events</p>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-lg transition-all hover-scale cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-6xl">
                    📐
                  </div>
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-center">CAD Tutorials</p>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-lg transition-all hover-scale cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl">
                    🤝
                  </div>
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-center">Collaboration</p>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-lg transition-all hover-scale cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-6xl">
                    💡
                  </div>
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-center">Innovation Lab</p>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-lg transition-all hover-scale cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl">
                    🎯
                  </div>
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-center">Goal Achievement</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <NavLink to="/events">View All Photos</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your CAD Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join our community of passionate designers and engineers. Learn, create, and innovate together.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/join">Become a Member</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
