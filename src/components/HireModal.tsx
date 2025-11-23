import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface HireFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  roleNeeds: string;
}

export function HireModal({ isOpen, onClose }: HireModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState<HireFormData>({
    companyName: "",
    contactPerson: "",
    email: "",
    roleNeeds: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate EmailJS integration - in production, this would send to EmailJS
    try {
      // Placeholder for EmailJS send function
      // await emailjs.send('service_id', 'hire_template_id', formData, 'public_key');
      
      console.log("Hiring inquiry data:", formData);
      
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Inquiry Submitted!",
        description: "Our placement team will contact you within 48 hours.",
      });

      setFormData({ companyName: "", contactPerson: "", email: "", roleNeeds: "" });
      onClose();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Hire From DevBeacon</DialogTitle>
          <DialogDescription>
            Looking for talented developers? Our graduates are production-ready and
            eager to contribute. Tell us about your hiring needs.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name *</Label>
            <Input
              id="companyName"
              required
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
              placeholder="Acme Inc."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactPerson">Contact Person *</Label>
            <Input
              id="contactPerson"
              required
              value={formData.contactPerson}
              onChange={(e) =>
                setFormData({ ...formData, contactPerson: e.target.value })
              }
              placeholder="Jane Smith"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="jane@acme.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="roleNeeds">Role Requirements *</Label>
            <Textarea
              id="roleNeeds"
              required
              value={formData.roleNeeds}
              onChange={(e) =>
                setFormData({ ...formData, roleNeeds: e.target.value })
              }
              placeholder="Tell us about the roles you're looking to fill, tech stack requirements, and team size..."
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
