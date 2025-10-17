import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Linkedin, Mail, Briefcase, Award } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export default function Alumni() {
  const [alumni, setAlumni] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAlumni();
  }, []);

  const fetchAlumni = async () => {
    const { data } = await supabase
      .from("alumni")
      .select("*")
      .eq("is_active", true)
      .order("graduation_year", { ascending: false });
    
    if (data) setAlumni(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-primary animate-pulse">Loading alumni...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-primary text-glow">Our Alumni</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating our graduates who are making an impact in the engineering world
          </p>
        </div>

        {alumni.length === 0 ? (
          <Card className="p-12 text-center bg-card border-primary/20">
            <p className="text-xl text-muted-foreground">Alumni profiles will be added soon!</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.map((alum) => (
              <Card key={alum.id} className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all hover:glow-sm">
                {alum.image_url ? (
                  <img
                    src={alum.image_url}
                    alt={alum.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-primary/20"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-primary/20 bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl text-primary">{alum.name.charAt(0)}</span>
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-primary mb-1 text-center">{alum.name}</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Class of {alum.graduation_year}
                  {alum.department && ` • ${alum.department}`}
                </p>

                {alum.current_position && (
                  <div className="flex items-start gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{alum.current_position}</p>
                      {alum.company && (
                        <p className="text-xs text-muted-foreground">{alum.company}</p>
                      )}
                    </div>
                  </div>
                )}

                {alum.achievements && (
                  <div className="flex items-start gap-2 mb-4">
                    <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{alum.achievements}</p>
                  </div>
                )}

                <div className="flex justify-center gap-3 mt-4 pt-4 border-t border-primary/20">
                  {alum.email && (
                    <a
                      href={`mailto:${alum.email}`}
                      className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                    </a>
                  )}
                  {alum.linkedin_url && (
                    <a
                      href={alum.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all"
                    >
                      <Linkedin className="w-4 h-4 text-primary" />
                    </a>
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
