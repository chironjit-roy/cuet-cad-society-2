import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

export default function Workshops() {
  const [workshops, setWorkshops] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWorkshops();
  }, []);

  const fetchWorkshops = async () => {
    const { data } = await supabase
      .from("workshops")
      .select("*")
      .eq("is_active", true)
      .order("workshop_date", { ascending: true });
    
    if (data) setWorkshops(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-primary animate-pulse">Loading workshops...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-primary text-glow">CAD Workshops</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn industry-standard CAD tools and techniques from experienced professionals
          </p>
        </div>

        {workshops.length === 0 ? (
          <Card className="p-12 text-center bg-card border-primary/20">
            <p className="text-xl text-muted-foreground mb-6">No workshops scheduled at the moment. Check back soon!</p>
            <Link to="/register">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Register for Updates
              </Button>
            </Link>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workshops.map((workshop) => (
              <Card key={workshop.id} className="overflow-hidden bg-card border-primary/20 hover:border-primary/40 transition-all hover:glow-sm">
                {workshop.image_url && (
                  <img
                    src={workshop.image_url}
                    alt={workshop.title}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-4">{workshop.title}</h2>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {workshop.workshop_date && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm">
                          {new Date(workshop.workshop_date).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    {workshop.duration && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm">{workshop.duration}</span>
                      </div>
                    )}
                    {workshop.capacity && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm">{workshop.capacity} seats</span>
                      </div>
                    )}
                    {workshop.instructor && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-sm">{workshop.instructor}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-foreground/80 mb-4">{workshop.description}</p>
                  
                  {workshop.requirements && (
                    <div className="mb-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Requirements:</h4>
                      <p className="text-sm text-muted-foreground">{workshop.requirements}</p>
                    </div>
                  )}

                  <Link to="/register">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Register for Workshop
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
