import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Code2, ArrowRight } from "lucide-react";

const About = () => {
  const mvpFeatures = [
    "Starter Theme with Pink→Purple gradient styling",
    "Essential Plugin Bundle (Cache, SEO, Customizer)",
    "Onboarding Wizard for quick setup",
    "CLI Deploy Script (siteease init)",
    "Demo Landing Page template",
    "Developer Documentation"
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Built for
              <span className="block bg-gradient-text bg-clip-text text-transparent">
                Modern WordPress
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              SiteEase is a lightweight framework that makes it trivial to spin up high-performance 
              WordPress sites. Leverage WordPress's ubiquity and flexibility while delivering 
              near-static site speed and modern developer workflow.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold">For Developers</div>
                  <div className="text-sm text-muted-foreground">Fast, opinionated scaffold</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Code2 className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold">For Content Editors</div>
                  <div className="text-sm text-muted-foreground">Low-friction editing</div>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="group">
              View Documentation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <Card className="border border-border/50 shadow-2xl bg-card backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                MVP Features
              </h3>
              <ul className="space-y-4">
                {mvpFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-border">
                <div className="text-sm text-muted-foreground mb-2">Coming Soon:</div>
                <div className="text-sm text-muted-foreground">
                  Advanced templates library, multi-site support, automated updates, 
                  and comprehensive tutorial hub.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;