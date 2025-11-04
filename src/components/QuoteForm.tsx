import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Truck, User } from "lucide-react";

interface QuoteFormProps {
  className?: string;
  variant?: "compact" | "full";
}

const QuoteForm = ({ className = "", variant = "full" }: QuoteFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    vehicleType: "",
    quantity: "",
    customBranding: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours with a detailed quote.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      vehicleType: "",
      quantity: "",
      customBranding: "",
      timeline: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (variant === "compact") {
    return (
      <div className={`bg-card p-6 rounded-lg border shadow-sm ${className}`}>
        <h3 className="text-xl font-semibold mb-4 text-center">Get Your Free Quote</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="pl-10"
              required
            />
          </div>
          <Textarea
            name="message"
            placeholder="Tell us about your mud flap needs..."
            value={formData.message}
            onChange={handleChange}
            rows={3}
          />
          <Button 
            type="submit" 
            variant="cta" 
            size="lg" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get Free Quote"}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className={`bg-card p-8 rounded-lg border shadow-sm ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold mb-4">Get Your Custom Quote</h2>
        <p className="text-muted-foreground text-lg">
          Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>
            <Input
              type="text"
              name="company"
              placeholder="Company Name (Optional)"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Project Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Project Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                required
              >
                <option value="">Select Vehicle Type</option>
                <option value="heavy-duty-truck">Heavy-duty truck</option>
                <option value="light-duty-truck">Light Duty truck</option>
                <option value="box-truck">Box Truck</option>
                <option value="trailer">Trailer</option>
                <option value="other">Other</option>
              </select>
            </div>
            <Input
              type="text"
              name="quantity"
              placeholder="Quantity Needed"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
            <div>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                required
              >
                <option value="">Project Timeline</option>
                <option value="asap">ASAP</option>
                <option value="1-2-weeks">1-2 Weeks</option>
                <option value="1-month">Within 1 Month</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            <Input
              type="text"
              name="customBranding"
              placeholder="Rubber or Polyethylene"
              value={formData.customBranding}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Additional Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Additional Details</h3>
          <Textarea
            name="message"
            placeholder="Please provide any additional details about your mud flap requirements, including dimensions, materials, colors, or special features..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />
        </div>

        <Button 
          type="submit" 
          variant="cta" 
          size="xl" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting Your Quote..." : "Get My Free Quote"}
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          By submitting this form, you agree to receive communications from The Mudflap Guy. 
          We respect your privacy and will never share your information.
        </p>
      </form>
    </div>
  );
};

export default QuoteForm;