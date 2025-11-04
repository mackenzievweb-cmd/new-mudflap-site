import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import QuoteForm from "@/components/QuoteForm";
import { 
  Truck, 
  Settings, 
  Shield, 
  Palette,
  CheckCircle,
  Star,
  Ruler,
  Package
} from "lucide-react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "light-duty", name: "Light Duty trucks" },
    { id: "heavy-duty", name: "Heavy Duty trucks" },
    { id: "trailer", name: "Trailer mud flaps" },
  ];

  const products = [
    {
      id: 1,
      category: "heavy-duty",
      name: "Heavy duty truck mud flaps",
      features: [
        "DOT compliant design",
        "Weather-resistant rubber",
        "Custom logo options",
        "24\" x 30\" standard size"
      ],
      popular: true,
    },
    {
      id: 2,
      category: "light-duty",
      name: "Light Duty truck mud flaps",
      features: [
        "Easy bolt-on installation",
        "Multiple size options",
        "Durable construction",
        "Custom branding available"
      ],
      popular: false,
    },
    {
      id: 3,
      category: "trailer",
      name: "Trailer mud flaps",
      features: [
        "Lightweight design",
        "Fleet-friendly options",
        "Quick installation",
        "Professional appearance"
      ],
      popular: false,
    },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Professional Mudflap Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Explore our complete range of high-quality custom mudflaps designed for 
              commercial vehicles, pickup trucks, and specialized applications.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Premium Materials</h3>
              <p className="text-sm text-muted-foreground">Heavy-duty rubber compounds</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Palette className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Custom Branding</h3>
              <p className="text-sm text-muted-foreground">Logo and color options</p>
            </div>
            <div className="text-center">
              <div className="bg-success/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Settings className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold mb-2">Easy Installation</h3>
              <p className="text-sm text-muted-foreground">Professional hardware included</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-sm text-muted-foreground">Built to last in harsh conditions</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="p-6 mb-8">
                <h3 className="font-semibold text-lg mb-4">Product Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Need Help Choosing?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our experts can help you select the perfect mudflaps for your specific needs.
                </p>
                <Link to="/contact">
                  <Button variant="outline" size="sm" className="w-full">
                    Get Expert Advice
                  </Button>
                </Link>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-display font-bold">
                {categories.find(cat => cat.id === selectedCategory)?.name}
              </h2>
              <p className="text-muted-foreground">
                {filteredProducts.length} products found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-primary to-primary-light h-48 flex items-center justify-center">
                      <Truck className="h-20 w-20 text-white" />
                    </div>
                    {product.popular && (
                      <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                        Popular
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex gap-2">
                      <Link to="/contact" className="flex-1">
                        <Button variant="cta" className="w-full">
                          Get Quote
                        </Button>
                      </Link>
                      <Button variant="outline" size="default">
                        <Package className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Customization Options */}
            <Card className="p-8 mb-12">
              <h3 className="text-2xl font-display font-bold mb-6 text-center">
                Customization Options
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ruler className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Custom Sizing</h4>
                  <p className="text-sm text-muted-foreground">
                    Any dimensions to fit your specific vehicle requirements
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2">Logo & Branding</h4>
                  <p className="text-sm text-muted-foreground">
                    Company logos, text, and custom graphics professionally applied
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-success" />
                  </div>
                  <h4 className="font-semibold mb-2">Material Options</h4>
                  <p className="text-sm text-muted-foreground">
                    Rubber and polyethylene in various thicknesses
                  </p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link to="/contact">
                  <Button variant="default" size="lg">
                    Discuss Custom Options
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Quote Form */}
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;