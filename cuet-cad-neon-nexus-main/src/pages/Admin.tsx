import { useEffect, useState } from "react";
import { useNavigate, Routes, Route, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Shield, Users, Calendar, BookOpen, GraduationCap, MessageSquare, Image, FileText } from "lucide-react";

export default function Admin() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    const { data } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();

    setIsAdmin(!!data);
    setLoading(false);

    if (!data) {
      navigate("/");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-primary animate-pulse">Checking access...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const isOnDashboard = location.pathname === "/admin" || location.pathname === "/admin/";

  if (!isOnDashboard) {
    return (
      <div className="min-h-screen py-20 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <Link to="/admin">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                ← Back to Dashboard
              </Button>
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
          </Routes>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-12 h-12 text-primary" />
            <h1 className="text-5xl font-bold text-primary text-glow">Admin Dashboard</h1>
          </div>
          <p className="text-xl text-muted-foreground">Manage your CAD Society website content</p>
        </div>

        <AdminDashboard />
      </div>
    </div>
  );
}

function AdminDashboard() {
  const adminSections = [
    {
      title: "Messages",
      description: "Manage leadership messages",
      icon: MessageSquare,
      path: "/admin/messages",
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Committee",
      description: "Manage committee members",
      icon: Users,
      path: "/admin/committee",
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Events",
      description: "Create and manage events",
      icon: Calendar,
      path: "/admin/events",
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Workshops",
      description: "Manage workshop listings",
      icon: BookOpen,
      path: "/admin/workshops",
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Alumni",
      description: "Manage alumni profiles",
      icon: GraduationCap,
      path: "/admin/alumni",
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Activities",
      description: "Post recent activities",
      icon: FileText,
      path: "/admin/activities",
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Media Gallery",
      description: "Manage photo gallery",
      icon: Image,
      path: "/admin/gallery",
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Registrations",
      description: "View registration submissions",
      icon: Users,
      path: "/admin/registrations",
      color: "from-primary/20 to-primary/5",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {adminSections.map((section) => (
        <Card
          key={section.path}
          className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all hover:glow-sm cursor-not-allowed opacity-75"
        >
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center mb-4`}>
            <section.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-2">{section.title}</h3>
          <p className="text-muted-foreground mb-4">{section.description}</p>
          <p className="text-sm text-muted-foreground italic">Admin panels coming soon...</p>
        </Card>
      ))}
    </div>
  );
}
