import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Send, Linkedin, Github, Mail, Twitter } from "lucide-react";
import type { InsertContactMessage } from "@shared/schema";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields.",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="contact-title">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="contact-subtitle">
            Let's discuss opportunities and collaborate on exciting projects
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    data-testid="input-email"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  placeholder="Project opportunity"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  data-testid="input-subject"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
                  data-testid="textarea-message"
                />
              </div>
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                data-testid="button-submit"
              >
                <Send className="mr-2 h-4 w-4" />
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-border">
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground mb-2">Connect with me</p>
                <p className="text-sm font-medium">souravacherjee2110@email.com</p>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:+919508687335" className="hover:text-primary transition-colors">+91 9508687335</a>
                  {" / "}
                  <a href="tel:+918142739057" className="hover:text-primary transition-colors">+91 8142739057</a>
                </p>
              </div>
              <div className="flex justify-center space-x-6" data-testid="social-links">
                <a 
                  href="https://www.linkedin.com/in/sourav-acherjee-a41023230" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-linkedin"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:souravacherjee2110@email.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-email"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
