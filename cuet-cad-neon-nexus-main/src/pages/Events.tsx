import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data } = await supabase
      .from("events")
      .select("*")
      .eq("is_active", true)
      .order("event_date", { ascending: true });
    
    if (data) setEvents(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-primary animate-pulse">Loading events...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-primary text-glow">Upcoming Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for exciting CAD events, competitions, and networking opportunities
          </p>
        </div>

        {events.length === 0 ? (
          <Card className="p-12 text-center bg-card border-primary/20">
            <p className="text-xl text-muted-foreground">No events scheduled at the moment. Check back soon!</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden bg-card border-primary/20 hover:border-primary/40 transition-all hover:glow-sm">
                {event.image_url && (
                  <img
                    src={event.image_url}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-6">
                  {event.is_featured && (
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
                      Featured Event
                    </span>
                  )}
                  <h2 className="text-2xl font-bold text-primary mb-4">{event.title}</h2>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      {new Date(event.event_date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        {event.location}
                      </div>
                    )}
                  </div>
                  <p className="text-foreground/80 mb-6">{event.description}</p>
                  {event.registration_link && (
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <a href={event.registration_link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Register Now <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
