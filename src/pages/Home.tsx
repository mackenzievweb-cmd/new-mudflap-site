import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuoteForm from "@/components/QuoteForm";
import { Shield, Clock, Award, Truck, Wrench, Star, CheckCircle, Users, Factory } from "lucide-react";
const Home = () => {
  return <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                Custom Mud flaps for
                <span className="text-accent"> Commercial Vehicles</span>
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Professional-grade custom mud flaps for medium duty and heavy duty trucks, 3/4 Ton and 1 Ton trucks and other commercial vehicles. 
                Expert craftsmanship, custom logos or designs and guaranteed quality with fast turnaround times.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    Get Free Quote
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" size="xl" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                    View Products
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Free Quotes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Fast Turnaround</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <QuoteForm variant="compact" className="bg-white/10 backdrop-blur-sm border-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-sm text-muted-foreground">Mud flaps Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24hrs</div>
              <div className="text-sm text-muted-foreground">Quote Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Why Choose The Mudflap Guy?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're the trusted choice for commercial vehicle owners and fleet managers 
              who demand quality, reliability, and professional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Quality Materials</h3>
              <p className="text-muted-foreground">
                Heavy duty extruded and blended thermoplastic elastomer consisting mostly of recycled tires. Poly flaps are made from a blended Low density polyethylene. Both materials are designed to withstand the toughest road conditions and commercial use.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Design & Branding</h3>
              <p className="text-muted-foreground">
                Complete customization options including company logos, custom colors, 
                and specialized sizes to match your exact specifications.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fast Turnaround Times</h3>
              <p className="text-muted-foreground">
                Quick production and shipping to minimize your vehicle downtime. 
                Most orders are completed within 10-15 business days.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Industry Expertise</h3>
              <p className="text-muted-foreground">
                15+ years of experience serving commercial fleets, owner-operators, 
                and automotive professionals across the country.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fleet Solutions</h3>
              <p className="text-muted-foreground">
                Specialized programs for fleet managers including volume discounts, 
                standardized specifications, and ongoing support.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Made in USA</h3>
              <p className="text-muted-foreground">
                Proudly manufactured in our USA facility using American materials 
                and supporting American jobs and quality standards.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our Product Range
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional mud flaps designed for every type of commercial vehicle and application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-primary to-primary-light h-48 flex items-center justify-center">
                <Truck className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Medium and Heavy duty truck Mud flaps</h3>
                <p className="text-muted-foreground mb-4">
                  Heavy-duty mud flaps designed for Medium and Heavy duty commercial trucks. 
                  Available in standard and custom sizes with optional branding.
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• DOT compliant designs</li>
                  <li>• Custom logo options</li>
                  <li>• Weather-resistant materials</li>
                </ul>
                <Link to="/products">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-accent to-accent-light h-48 flex items-center justify-center">
                <Truck className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Light duty Truck Mud flaps</h3>
                <p className="text-muted-foreground mb-4">
                  Custom mud flaps for ¾ Ton and 1 Ton flatbeds, stake bodies and dump bodies. 
                  Perfect for contractors, utility companies, and personal use.
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• Easy installation</li>
                  <li>• Multiple size options</li>
                  <li>• Custom designs available</li>
                  <li>• Durable construction</li>
                </ul>
                <Link to="/products">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-secondary to-primary h-48 flex items-center justify-center">
                <Wrench className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized mud flaps for unique applications, custom vehicles, 
                  and specialty equipment. We can create exactly what you need.
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• Fully customizable</li>
                  <li>• Any size or shape</li>
                  <li>• Special materials</li>
                </ul>
                <Link to="/contact">
                  <Button variant="cta" className="w-full">Get Quote</Button>
                </Link>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="default" size="lg">
                View All Products
              </Button>
            </Link>
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
              Get your free quote today and discover why thousands of commercial vehicle 
              owners trust The Mudflap Guy for their mud flap needs.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto bg-white hover:bg-white/90 text-slate-50">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="xl" className="w-full sm:w-auto border-white text-slate-50 bg-transparent">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;