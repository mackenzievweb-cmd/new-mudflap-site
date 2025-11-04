import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import QuoteForm from "@/components/QuoteForm";
import { MessageCircle, HelpCircle, Phone, Mail } from "lucide-react";
const FAQ = () => {
  const faqCategories = [{
    title: "General Questions",
    icon: HelpCircle,
    faqs: [{
      question: "What types of vehicles do you make mud flaps for?",
      answer: "We manufacture custom mud flaps for all types of commercial and personal vehicles including semi-trucks, pickup trucks, commercial vans, box trucks, trailers, and specialty equipment. If you have a unique vehicle, we can create custom solutions to fit your specific needs."
    }, {
      question: "How long does it take to receive my mud flaps?",
      answer: "Most standard orders are completed within 10-15 business days from approval of design and specifications."
    }, {
      question: "Do you offer quantity discounts for fleet orders?",
      answer: "Yes! We offer competitive pricing for fleet orders and bulk purchases. Volume discounts begin at 50 sets and increase based on quantity. Contact us for a customized fleet pricing quote."
    }, {
      question: "What materials are your mud flaps made from?",
      answer: "Our rubber mud flaps consist of an extruded and blended rubber material and our polyethylene flaps are constructed of a low-density polyethylene. Custom material formulations are also available."
    }]
  }, {
    title: "Customization & Design",
    icon: MessageCircle,
    faqs: [{
      question: "Can you add my company logo to the mud flaps?",
      answer: "Absolutely! We specialize in custom branding and can incorporate company logos, text, graphics, and even color-matching to your corporate colors. We work with vector files, high-resolution images, or can help recreate your logo if you only have low-resolution versions."
    }, {
      question: "What are the size limitations for custom mud flaps?",
      answer: "We can manufacture mud flaps in virtually any size needed. Our standard sizes range from small trailer applications (6\" x 10\") to large semi-truck mud flaps (24\" x 24\" or larger). Custom sizes are available for specialty applications with no minimum or maximum size restrictions."
    }, {
      question: "How much does custom branding cost?",
      answer: "As with any mud flap manufacturer, we have a one-time tooling charge for the printing plate used on your flaps. The one-time charge of that printing plate depends on the size and complexity of your design or logo. We provide detailed quotes showing all tooling costs upfront with no hidden fees."
    }, {
      question: "Can you match specific colors or designs?",
      answer: "Yes, we can color-match to specific Pantone colors, RAL colors, or color samples you provide. We can also replicate existing designs or work with you to create new designs that match your branding guidelines and aesthetic preferences."
    }]
  }, {
    title: "Ordering & Shipping",
    icon: Mail,
    faqs: [{
      question: "How do I place an order?",
      answer: "Start by requesting a quote through our website form, calling us, or emailing your specifications. We'll provide a detailed quote with pricing and timeline. Once approved, we'll send an invoice and begin production immediately upon payment."
    }, {
      question: "What information do you need for a quote?",
      answer: "We need to know the material you prefer for your flaps. Is it rubber or plastic? Also, we need the dimensions of the flap and the thickness of the material. In order to provide an accurate quote on the one-time tooling charge, we will need a PDF or high resolution photo of your design or logo. We will contact you if any other information is needed."
    }, {
      question: "What are your shipping options?",
      answer: "We offer standard ground shipping by truck. All shipments are FOB- Newport, TN or PrePaid and Add. All shipments are tracked and insured. Local pickup is also available from our facility."
    }]
  }, {
    title: "Quality & Warranty",
    icon: HelpCircle,
    faqs: [{
      question: "What kind of warranty do you offer?",
      answer: "We will warranty all products from defects of workmanship. We are not responsible for alterations or installations of our products, since these products are used in variable conditions."
    }, {
      question: "How do you ensure quality?",
      answer: "Every mud flap goes through multiple quality control checkpoints including material inspection, production monitoring, and final inspection before shipping. We use only premium materials and have over 15 years of experience in commercial vehicle accessories."
    }, {
      question: "What if I'm not satisfied with my order?",
      answer: "Customer satisfaction is our top priority. If you're not completely satisfied with your mud flaps, contact us within 30 days and we'll work to resolve any issues. This may include modifications, replacements, or refunds depending on the situation."
    }, {
      question: "Are your mud flaps DOT compliant?",
      answer: "Yes, all our commercial vehicle mud flaps are designed to meet or exceed DOT requirements for size, placement, and visibility. We stay current with regulations and can provide documentation for compliance verification if needed for fleet requirements."
    }]
  }];
  return <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Find answers to common questions about our custom mud flaps, ordering process, 
              and services. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground mb-3">Speak directly with our experts</p>
              <p className="font-semibold">888-792-2980</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground mb-3">Get detailed answers via email</p>
              <p className="font-semibold">themudflapguy@gmail.com</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="bg-success/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold mb-2">Get Quote</h3>
              <p className="text-sm text-muted-foreground mb-3">Request a custom quote</p>
              <Link to="/contact">
                <Button variant="cta" size="sm">Start Here</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Content */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => <div key={categoryIndex}>
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-display font-bold">{category.title}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.faqs.map((faq, faqIndex) => <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="border border-border rounded-lg px-6">
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="font-semibold">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>)}
                  </Accordion>
                </div>)}
            </div>

            {/* Still Have Questions */}
            <Card className="p-8 mt-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <div className="text-center">
                <h3 className="text-2xl font-display font-bold mb-4">Still Have Questions?</h3>
                <p className="text-muted-foreground mb-6">
                  Our expert team is here to help with any questions about custom mud flaps, 
                  installation, or specifications. Get personalized assistance today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="cta" size="lg" className="w-full sm:w-auto">
                      Get Free Quote
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Phone className="h-4 w-4 mr-2" />
                    Call 888-792-2980
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Quick Quote Form */}
              <QuoteForm variant="compact" className="mb-8" />

              {/* Popular Topics */}
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Popular Topics</h3>
                <div className="space-y-3">
                  <a href="#custom-branding" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Custom Logo & Branding Options
                  </a>
                  <a href="#sizing" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Sizing & Measurements
                  </a>
                  <a href="#fleet-discounts" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Fleet Volume Discounts
                  </a>
                  <a href="#timeline" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Production Timeline
                  </a>
                  <a href="#warranty" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    → Warranty Information
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Have your questions answered? Get your free custom mud flap quote today 
            and experience our exceptional quality and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto bg-white hover:bg-white/90 text-slate-50">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="xl" className="w-full sm:w-auto border-white text-white bg-transparent">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default FAQ;