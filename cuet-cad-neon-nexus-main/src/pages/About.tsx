import { Card } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-primary text-glow">About CUET CAD Society</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A student-led organization dedicated to advancing Computer-Aided Design knowledge and skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-all hover:glow-sm text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower CUET students with cutting-edge CAD skills and provide a platform for
              innovation, collaboration, and professional growth in engineering design.
            </p>
          </Card>

          <Card className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-all hover:glow-sm text-center">
            <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the leading student organization in Bangladesh for CAD education and create a
              community of skilled engineers ready for industry challenges.
            </p>
          </Card>

          <Card className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-all hover:glow-sm text-center">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              Excellence, Innovation, Collaboration, Learning, and Community - guiding principles
              that drive everything we do at CUET CAD Society.
            </p>
          </Card>
        </div>

        <Card className="p-12 bg-card border-primary/20 mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6 text-glow">Our Story</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Founded by passionate engineering students at Chittagong University of Engineering & Technology,
              the CUET CAD Society emerged from a shared vision to bridge the gap between academic learning
              and industry requirements in Computer-Aided Design.
            </p>
            <p>
              Since our establishment, we have organized numerous workshops, seminars, and competitions that
              have helped hundreds of students develop professional-grade CAD skills. Our initiatives include
              hands-on training sessions, industry collaborations, and mentorship programs.
            </p>
            <p>
              Today, we stand as a vibrant community of engineers, designers, and innovators, continuously
              pushing the boundaries of what's possible with CAD technology. We take pride in our alumni
              who have gone on to work at leading engineering firms and tech companies worldwide.
            </p>
          </div>
        </Card>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-8 text-glow">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Workshops", desc: "Regular hands-on training sessions" },
              { title: "Competitions", desc: "CAD design challenges and contests" },
              { title: "Networking", desc: "Connect with industry professionals" },
              { title: "Resources", desc: "Access to CAD tools and materials" },
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all hover:glow-sm">
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
