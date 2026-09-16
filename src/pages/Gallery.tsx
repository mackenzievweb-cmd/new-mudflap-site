import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryItems = [
  {
    image: "/images/gallery/Side_Dump_Industries.jpeg",
    name: "Side Dump Industries",
    description: "Custom branding built for hardworking equipment.",
  },
  {
    image: "/images/gallery/Elite_Trailers.JPEG",
    name: "Elite Trailers",
    description: "A clean, durable finish for trailer applications.",
  },
  {
    image: "/images/gallery/Deer_Creek_Truck.jpeg",
    name: "Deer Creek Truck Sales",
    description: "Professional graphics that stand out on the road.",
  },
  {
    image: "/images/gallery/CRJ_Trucks.jpeg",
    name: "CRJ Heavy Trucks & Parts",
    description: "Bold, custom mud flaps made for fleet visibility.",
  },
  {
    image: "/images/gallery/Cooper's.jpeg",
    name: "Cooper's Specialty Truck Sales",
    description: "Durable protection with a signature company look.",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-sm font-medium mb-6">
              <Camera className="h-4 w-4" />
              Built for the road
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our Work in the Wild
            </h1>
            <p className="text-xl text-primary-foreground/90">
              See how businesses put their brand in motion with custom mud flaps
              from The Mudflap Guy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <article
                key={item.image}
                className={`group overflow-hidden rounded-lg bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className={`overflow-hidden bg-muted ${index === 0 ? "aspect-[16/9]" : "aspect-[4/5]"}`}>
                  <img
                    src={item.image}
                    alt={`${item.name} custom mud flap`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h2 className="text-xl font-display font-bold mb-2">{item.name}</h2>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">
            Put your name on the road
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Share your logo and vehicle details with us, and we’ll help create a
            custom look that represents your business from every angle.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg">
              Start Your Custom Order
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
