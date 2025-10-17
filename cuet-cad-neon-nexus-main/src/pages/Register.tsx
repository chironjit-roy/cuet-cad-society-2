import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const registrationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  studentId: z.string().min(4, "Student ID is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  department: z.string().min(2, "Department is required"),
  session: z.string().min(4, "Session is required"),
});

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    email: "",
    phone: "",
    department: "",
    session: "",
    registrationType: "event",
    eventId: "",
    workshopId: "",
  });
  const [events, setEvents] = useState<any[]>([]);
  const [workshops, setWorkshops] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = async () => {
    const [eventsData, workshopsData] = await Promise.all([
      supabase.from("events").select("id, title").eq("is_active", true).order("event_date"),
      supabase.from("workshops").select("id, title").eq("is_active", true).order("workshop_date"),
    ]);
    
    if (eventsData.data) setEvents(eventsData.data);
    if (workshopsData.data) setWorkshops(workshopsData.data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      registrationSchema.parse(formData);

      const registrationData = {
        full_name: formData.fullName,
        student_id: formData.studentId,
        email: formData.email,
        phone: formData.phone,
        department: formData.department,
        session: formData.session,
        registration_type: formData.registrationType,
        event_id: formData.registrationType === "event" ? formData.eventId || null : null,
        workshop_id: formData.registrationType === "workshop" ? formData.workshopId || null : null,
        status: "pending",
      };

      const { error } = await supabase.from("registrations").insert([registrationData]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your registration has been submitted successfully.",
      });

      // Reset form
      setFormData({
        fullName: "",
        studentId: "",
        email: "",
        phone: "",
        department: "",
        session: "",
        registrationType: "event",
        eventId: "",
        workshopId: "",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit registration",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-primary text-glow">Register</h1>
          <p className="text-xl text-muted-foreground">
            Join CUET CAD Society events and workshops
          </p>
        </div>

        <Card className="p-8 bg-card border-primary/20 glow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="bg-input border-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="studentId">Student ID *</Label>
              <Input
                id="studentId"
                value={formData.studentId}
                onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                required
                className="bg-input border-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-input border-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-input border-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="department">Department *</Label>
              <Input
                id="department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                required
                placeholder="e.g., Mechanical Engineering"
                className="bg-input border-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="session">Session *</Label>
              <Input
                id="session"
                value={formData.session}
                onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                required
                placeholder="e.g., 2020-21"
                className="bg-input border-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="type">Registration Type</Label>
              <Select
                value={formData.registrationType}
                onValueChange={(value) => setFormData({ ...formData, registrationType: value })}
              >
                <SelectTrigger className="bg-input border-primary/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="event">Event</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.registrationType === "event" && events.length > 0 && (
              <div>
                <Label htmlFor="event">Select Event (Optional)</Label>
                <Select
                  value={formData.eventId}
                  onValueChange={(value) => setFormData({ ...formData, eventId: value })}
                >
                  <SelectTrigger className="bg-input border-primary/20">
                    <SelectValue placeholder="Choose an event" />
                  </SelectTrigger>
                  <SelectContent>
                    {events.map((event) => (
                      <SelectItem key={event.id} value={event.id}>
                        {event.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {formData.registrationType === "workshop" && workshops.length > 0 && (
              <div>
                <Label htmlFor="workshop">Select Workshop (Optional)</Label>
                <Select
                  value={formData.workshopId}
                  onValueChange={(value) => setFormData({ ...formData, workshopId: value })}
                >
                  <SelectTrigger className="bg-input border-primary/20">
                    <SelectValue placeholder="Choose a workshop" />
                  </SelectTrigger>
                  <SelectContent>
                    {workshops.map((workshop) => (
                      <SelectItem key={workshop.id} value={workshop.id}>
                        {workshop.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Registration"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
