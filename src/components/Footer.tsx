import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-display font-bold mb-4">
              The Mudflap Guy
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your trusted partner for premium custom mud flaps. We specialize in high-quality, 
              durable mud flaps for commercial vehicles, light duty trucks, and specialty applications 
              with custom branding options.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>888-792-2980</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>themudflapguy@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Rubber and poly mud flaps</li>
              <li>Snow plow deflectors</li>
              <li>Snow plow cutting edges</li>
              <li>Rubber matting</li>
              <li>Rolled sheeting</li>
              <li>Tool box liners</li>
              <li>Custom die-cutting</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 The Mudflap Guy. All rights reserved.
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://www.facebook.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            {/* Legal Links */}
            <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;