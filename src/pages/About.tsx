import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuoteForm from "@/components/QuoteForm";
import { Factory, Users, Award, Shield, Target, Heart, CheckCircle, Star, MapPin, Calendar } from "lucide-react";
const About = () => {
  const values = [{
    icon: Shield,
    title: "Quality First",
    description: "Every mud flap is manufactured to the highest standards using premium materials and rigorous quality control processes."
  }, {
    icon: Users,
    title: "Customer Service",
    description: "We believe in building lasting relationships through exceptional service, clear communication, and reliable support."
  }, {
    icon: Target,
    title: "Innovation",
    description: "Continuously improving our processes, materials, and designs to deliver the best possible products for our customers."
  }, {
    icon: Heart,
    title: "Integrity",
    description: "Honest pricing, transparent processes, and standing behind our work with comprehensive warranties and guarantees."
  }];
  const milestones = [{
    year: "2008",
    title: "Company Founded",
    description: "Started as a small family business specializing in custom mud flaps for local trucking companies."
  }, {
    year: "2012",
    title: "Expanded Operations",
    description: "Moved to larger facility and began serving customers nationwide with improved production capacity."
  }, {
    year: "2016",
    title: "Technology Upgrade",
    description: "Invested in state-of-the-art manufacturing equipment to improve quality and reduce production times."
  }, {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched online ordering system and streamlined customer experience while maintaining personal service."
  }, {
    year: "2024",
    title: "Industry Leader",
    description: "Now serving thousands of customers with over 5,000 mud flaps delivered and 98% customer satisfaction."
  }];
  const teamMembers = [{
    name: "Mike Thompson",
    role: "Founder & CEO",
    description: "15+ years in commercial vehicle accessories. Started the company with a vision to provide the highest quality custom mud flaps in the industry."
  }, {
    name: "Sarah Chen",
    role: "Operations Manager",
    description: "Oversees production, quality control, and customer fulfillment. Ensures every order meets our exacting standards."
  }, {
    name: "David Rodriguez",
    role: "Design Specialist",
    description: "Expert in custom branding and design. Works with customers to create exactly what they envision for their vehicles."
  }, {
    name: "Lisa Johnson",
    role: "Customer Success",
    description: "Dedicated to customer satisfaction. Helps customers through the ordering process and provides ongoing support."
  }];
  return <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About The Mudflap Guy
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Founded on the principles of quality, service, and integrity, we've been the trusted 
              choice for custom mud flaps and commercial vehicle accessories for 28 years.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The Mud Flap guy has been in the truck parts and equipment business for over 30 years. Today, we're proud to have delivered thousands of mud flaps to satisfied customers, from individual owner-operators to large commercial fleets. Our success is built on simple principles: use the best materials, provide exceptional service, and stand behind our work.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="cta" size="lg">
                    Work With Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">28</div>
                <div className="text-sm text-muted-foreground">Years in Business</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100,000+</div>
                <div className="text-sm text-muted-foreground">Mud flaps Delivered</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">24hr</div>
                <div className="text-sm text-muted-foreground">Quote Response</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do, from how we design and manufacture 
              our products to how we interact with customers every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Location & Facility */}
      <section className="py-20 bg-transparent mx-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our Facility
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Our supplier, DuraGuard Inc, is located in Eastern Tennessee and has always been a small family-owned business. Their goal is to provide the highest quality product and the shortest lead times to serve the transportation industry in an efficient manner.
                </p>
              </div>
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
            Experience The Mudflap Guy difference for yourself. Get a free quote 
            and discover why thousands of customers trust us for their mud flap needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="xl" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default About;