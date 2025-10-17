import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export default function Index() {
  const [messages, setMessages] = useState<any[]>([]);
  const [activities, setActivities] = useState<any[]>([]);
  const [committee, setCommittee] = useState<any[]>([]);
  const [gallery, setGallery] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [messagesData, activitiesData, committeeData, galleryData] = await Promise.all([
      supabase.from("messages").select("*").eq("is_active", true).order("display_order"),
      supabase.from("activities").select("*").eq("is_active", true).order("activity_date", { ascending: false }).limit(6),
      supabase.from("committee_members").select("*").eq("is_active", true).order("display_order").limit(6),
      supabase.from("media_gallery").select("*").eq("is_active", true).order("display_order").limit(6),
    ]);

    if (messagesData.data) setMessages(messagesData.data);
    if (activitiesData.data) setActivities(activitiesData.data);
    if (committeeData.data) setCommittee(committeeData.data);
    if (galleryData.data) setGallery(galleryData.data);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            Welcome to
            <br />
            <span className="text-primary">CUET CAD Society</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Empowering future engineers with cutting-edge Computer-Aided Design knowledge and skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-md">
                Join Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/events">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Explore Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Messages Section */}
      {messages.length > 0 && (
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary text-glow">
              Messages from Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {messages.map((message) => (
                <Card key={message.id} className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all hover:glow-sm">
                  {message.image_url && (
                    <img
                      src={message.image_url}
                      alt={message.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary/20"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-primary mb-2 text-center">{message.name}</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">{message.position}</p>
                  <p className="text-foreground/80 line-clamp-4">{message.message}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Activities */}
      {activities.length > 0 && (
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary text-glow">
              Recent Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity) => (
                <Card key={activity.id} className="overflow-hidden bg-card border-primary/20 hover:border-primary/40 transition-all hover:glow-sm group">
                  {activity.image_url && (
                    <img
                      src={activity.image_url}
                      alt={activity.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {new Date(activity.activity_date).toLocaleDateString()}
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{activity.title}</h3>
                    <p className="text-foreground/80 line-clamp-3">{activity.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Committee Preview */}
      {committee.length > 0 && (
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary text-glow">
              Our Committee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {committee.map((member) => (
                <Card key={member.id} className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all hover:glow-sm text-center">
                  {member.image_url && (
                    <img
                      src={member.image_url}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-primary/20"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{member.position}</p>
                  {member.department && (
                    <p className="text-xs text-muted-foreground">{member.department}</p>
                  )}
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/committee">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  View Full Committee <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Media Gallery */}
      {gallery.length > 0 && (
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary text-glow">
              Media Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((item) => (
                <div key={item.id} className="relative overflow-hidden rounded-lg group aspect-square border border-primary/20 hover:border-primary/40 transition-all hover:glow-sm">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-semibold">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 glow-md">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4 text-primary text-glow">Join the CAD Community</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of a vibrant community of engineers and designers. Learn, collaborate, and grow together.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Register Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
