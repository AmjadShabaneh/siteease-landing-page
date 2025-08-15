import { Card, CardContent } from "@/components/ui/card";
import { Zap, Layers, Palette, Terminal, Shield, Rocket } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Lightning Performance",
      description: "Near-static site speed with intelligent caching and asset optimization built-in."
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "Starter Theme Bundle",
      description: "Clean, responsive themes with modular block-based layouts and your brand gradient."
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Brand-First Design",
      description: "Customizer shortcuts for gradients, colors, and fonts. Your brand, perfectly styled."
    },
    {
      icon: <Terminal className="w-8 h-8 text-primary" />,
      title: "Developer Workflow",
      description: "CLI commands to spin up fresh WP instances with all dependencies preconfigured."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Essential Plugins Only",
      description: "Curated bundle: caching, SEO controls, and customization tools. No bloat."
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "5-Minute Setup",
      description: "Guided onboarding wizard handles sample content, gradients, and brand configuration."
    }
  ];

  return (
    <section id="features" className="py-24 bg-card border-t-gray-100">
      <div className="container mx-auto px-6 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to
            <span className="block bg-gradient-text bg-clip-text text-transparent">
              Ship Fast
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SiteEase combines WordPress flexibility with modern development practices, 
            giving you the perfect foundation for high-performance websites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border/50 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;