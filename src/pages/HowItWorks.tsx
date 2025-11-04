import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuoteForm from "@/components/QuoteForm";
import { MessageSquare, Ruler, Cog, Truck, CheckCircle, Clock, Shield, Award, Users, FileText, Package, ArrowRight } from "lucide-react";
const HowItWorks = () => {
  const steps = [{
    number: "01",
    title: "Get Your Quote",
    description: "Contact us with your requirements or fill out our detailed quote form. We'll respond within 24 hours with pricing and timeline.",
    icon: MessageSquare,
    details: ["Free consultation and assessment", "24-hour response guarantee", "No obligation quote", "Expert recommendations"]
  }, {
    number: "02",
    title: "Design & Specifications",
    description: "Our team works with you to finalize specifications, dimensions, materials, and any custom branding requirements.",
    icon: Ruler,
    details: ["Precise measurement assistance", "Material selection guidance", "Custom design mockups", "Brand integration options"]
  }, {
    number: "03",
    title: "Manufacturing",
    description: "Your mudflaps are professionally manufactured using premium materials and our proven quality control processes.",
    icon: Cog,
    details: ["USA-based manufacturing", "Quality control at every step", "Premium material sourcing", "Skilled craftsman production"]
  }, {
    number: "04",
    title: "Quality Check & Shipping",
    description: "Each mudflap undergoes final quality inspection before careful packaging and fast shipping to your location.",
    icon: Package,
    details: ["Comprehensive quality inspection", "Secure protective packaging", "Fast shipping options", "Tracking information provided"]
  }];
  const timeline = [{
    stage: "Quote Request",
    time: "Same Day",
    description: "Submit requirements, receive initial response"
  }, {
    stage: "Design Finalization",
    time: "2-3 Days",
    description: "Specifications confirmed, design approved"
  }, {
    stage: "Manufacturing",
    time: "10-15 Days",
    description: "Production and quality control processes"
  }, {
    stage: "Shipping",
    time: "3-5 Days",
    description: "Packaging and delivery to your location"
  }];
  return <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              How Our Process Works
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              From initial consultation to delivery, we've streamlined our process to make 
              getting custom mudflaps simple, fast, and hassle-free.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven process ensures you get exactly what you need, when you need it, 
              with the quality and service you expect.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && <div className="hidden md:block absolute left-16 top-24 w-0.5 h-16 bg-border"></div>}
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Step Number and Icon */}
                  <div className="md:col-span-2 flex flex-col items-center md:items-start">
                    <div className="bg-gradient-to-br from-primary to-primary-light text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                      {step.number}
                    </div>
                    <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-6">
                    <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => <li key={detailIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>)}
                    </ul>
                  </div>

                  {/* Visual/Card */}
                  <div className="md:col-span-4">
                    <Card className="p-6 bg-muted/30 border-l-4 border-l-primary">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">
                          {index === 0 && "24hrs"}
                          {index === 1 && "2-3 Days"}
                          {index === 2 && "10-15 Days"}
                          {index === 3 && "3-5 Days"}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {index === 0 && "Response Time"}
                          {index === 1 && "Design Time"}
                          {index === 2 && "Production Time"}
                          {index === 3 && "Shipping Time"}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              10-15 Days
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most projects are completed within 10-15 business days from quote approval to delivery.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-border"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {timeline.map((item, index) => <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-14 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  <Card className="p-6 text-center mt-8 md:mt-20">
                    <div className="text-2xl font-bold text-primary mb-2">{item.time}</div>
                    <h3 className="font-semibold mb-3">{item.stage}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Quality Assurance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every mudflap we produce goes through rigorous quality control to ensure 
              it meets our high standards and your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Material Inspection</h3>
              <p className="text-muted-foreground">
                All raw materials are inspected for quality, thickness, and durability 
                before entering production.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Production Standards</h3>
              <p className="text-muted-foreground">
                Every step of manufacturing follows strict protocols to ensure 
                consistent quality and precision.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Final Inspection</h3>
              <p className="text-muted-foreground">
                Each completed mudflap undergoes final quality checks before 
                packaging and shipping.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Support & Warranty */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ongoing Support & Warranty
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our commitment doesn't end with delivery. We provide comprehensive 
                support and stand behind our products with a solid warranty.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Expert Support Team</h3>
                    <p className="text-muted-foreground">
                      Our knowledgeable team is available to help with installation 
                      questions and technical support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Quality Guarantee</h3>
                    <p className="text-muted-foreground">
                      We guarantee the quality of our workmanship and materials 
                      with a comprehensive warranty program.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-success/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Installation Resources</h3>
                    <p className="text-muted-foreground">
                      Detailed installation guides, video tutorials, and technical 
                      documentation included with every order.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <QuoteForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Experience our streamlined process and exceptional quality for yourself. 
            Get your free quote today and see why thousands trust us for their mud flap needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto bg-white hover:bg-white/90 text-slate-50">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="xl" className="w-full sm:w-auto border-white text-white bg-transparent">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default HowItWorks;