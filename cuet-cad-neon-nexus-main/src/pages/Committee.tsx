import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export default function Committee() {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    const { data } = await supabase
      .from("committee_members")
      .select("*")
      .eq("is_active", true)
      .order("display_order");
    
    if (data) setMembers(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-primary animate-pulse">Loading committee...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-primary text-glow">Our Committee</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated team driving innovation and excellence at CUET CAD Society
          </p>
        </div>

        {members.length === 0 ? (
          <Card className="p-12 text-center bg-card border-primary/20">
            <p className="text-xl text-muted-foreground">Committee information will be updated soon!</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <Card key={member.id} className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all hover:glow-sm text-center group">
                {member.image_url ? (
                  <img
                    src={member.image_url}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-primary/20 group-hover:border-primary/60 transition-all"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-primary/20 bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl text-primary">{member.name.charAt(0)}</span>
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-muted-foreground mb-2">{member.position}</p>
                
                {member.department && (
                  <p className="text-xs text-muted-foreground mb-1">{member.department}</p>
                )}
                {member.session && (
                  <p className="text-xs text-muted-foreground mb-4">Session: {member.session}</p>
                )}

                <div className="flex justify-center gap-3 mt-4">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                    </a>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                    </a>
                  )}
                  {member.facebook_url && (
                    <a
                      href={member.facebook_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all"
                    >
                      <Facebook className="w-4 h-4 text-primary" />
                    </a>
                  )}
                  {member.linkedin_url && (
                    <a
                      href={member.linkedin_url}
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
