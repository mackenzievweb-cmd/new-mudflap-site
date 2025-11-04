import QuoteForm from "@/components/QuoteForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageSquare, Headphones, FileText, Truck } from "lucide-react";
const Contact = () => {
  return <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Ready to get started on your custom mud flap project? Fill out our detailed quote form 
              or contact us directly. We'll respond within 24 hours with pricing and timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-2xl font-bold text-primary mb-2">888-792-2980</p>
              <p className="text-sm text-muted-foreground">Mon-Fri 8AM-6PM</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm font-semibold text-primary mb-2 break-all">themudflapguy@gmail.com</p>
              <p className="text-sm text-muted-foreground">24hr response time</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-lg font-bold text-primary mb-2">24 Hours</p>
              <p className="text-sm text-muted-foreground">Average quote response</p>
            </Card>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Quote Form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Contact Info */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">888-792-2980</p>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <p className="font-semibold">themudflapguy@gmail.com</p>
                      <p className="text-sm text-muted-foreground">
                        We respond to all emails within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-success mt-1" />
                    <div>
                      <p className="font-semibold">
                        123 Industrial Way<br />
                        Manufacturing City, ST 12345
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Facility tours available by appointment
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* What to Expect */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <div>
                      <p className="font-semibold">Quick Response</p>
                      <p className="text-sm text-muted-foreground">
                        We'll review your requirements and respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-accent/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-accent">2</span>
                    </div>
                    <div>
                      <p className="font-semibold">Detailed Quote</p>
                      <p className="text-sm text-muted-foreground">
                        Receive comprehensive pricing with timeline and specifications
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-success/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-success">3</span>
                    </div>
                    <div>
                      <p className="font-semibold">Expert Consultation</p>
                      <p className="text-sm text-muted-foreground">
                        Discuss options and finalize details with our team
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Popular Services */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Popular Services</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Truck className="h-4 w-4 text-primary" />
                    <span className="text-sm">Medium and Heavy duty truck Mud flaps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="h-4 w-4 text-accent" />
                    <span className="text-sm">Light duty Truck Mud flaps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-4 w-4 text-success" />
                    <span className="text-sm">Custom Logo Branding</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span className="text-sm">Fleet Volume Orders</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Headphones className="h-4 w-4 text-accent" />
                    <span className="text-sm">Custom Sizing Solutions</span>
                  </div>
                </div>
              </Card>

              {/* Emergency Contact */}
              <Card className="p-6 bg-accent/5 border-accent/20">
                <h3 className="text-lg font-semibold mb-3">Need Mud flaps ASAP?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent orders and rush production, call us directly to discuss 
                  expedited options and emergency pricing.
                </p>
                <Button variant="cta" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Call for Rush Order
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Callout */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Have Questions Before Requesting a Quote?
          </h2>
          <p className="text-muted-foreground mb-6">
            Check out our comprehensive FAQ section covering everything from sizing 
            and customization to installation and warranty information.
          </p>
          <Button variant="outline" size="lg">
            <MessageSquare className="h-4 w-4 mr-2" />
            View FAQ
          </Button>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24hrs</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;