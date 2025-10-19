import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "3D Modeling Workshop",
      date: "December 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "ME Dept Lab 3",
      description: "Learn advanced SolidWorks techniques from industry professionals. Hands-on session covering parametric modeling and assembly design.",
      status: "Open for Registration",
    },
    {
      title: "CAD Competition 2025",
      date: "January 10, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Main Auditorium",
      description: "Annual design competition with exciting prizes. Categories include mechanical design, architectural modeling, and creative innovation.",
      status: "Registration Closes Soon",
    },
    {
      title: "Fusion 360 Basics",
      date: "December 22, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "Computer Lab 2",
      description: "Introduction to Fusion 360 for beginners. Learn the interface, basic modeling, and cloud collaboration features.",
      status: "Open for Registration",
    },
  ];

  const pastEvents = [
    {
      title: "AutoCAD Certification Workshop",
      date: "November 2025",
      description: "50+ students received hands-on training and certification preparation guidance.",
      image: "🏆",
    },
    {
      title: "Industry Visit to Manufacturing Plant",
      date: "October 2025",
      description: "Members visited a local manufacturing facility to see CAD in real-world applications.",
      image: "🏭",
    },
    {
      title: "Guest Lecture: Design Thinking",
      date: "September 2025",
      description: "Industry expert shared insights on modern design methodologies and career paths.",
      image: "💡",
    },
    {
      title: "3D Printing Workshop",
      date: "August 2025",
      description: "Learned CAD-to-print workflow with hands-on experience with FDM and resin printers.",
      image: "🖨️",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Workshops</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Join our upcoming workshops and competitions to enhance your CAD skills
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{event.status}</Badge>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription className="space-y-2 mt-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{event.location}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Past Events Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="text-6xl text-center mb-4">{event.image}</div>
                  <CardTitle className="text-lg text-center">{event.title}</CardTitle>
                  <CardDescription className="text-center text-accent font-medium">
                    {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Stay Updated?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Follow us on social media or join our mailing list to receive notifications about upcoming events and workshops.
        </p>
      </section>
    </div>
  );
};

export default Events;
