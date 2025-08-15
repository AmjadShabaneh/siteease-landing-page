import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="SiteEase - WordPress Development Made Easy" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero-2 opacity-90"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-16 h-16 bg-primary/20 rounded-lg backdrop-blur-sm animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-primary-dark/30 rounded-full backdrop-blur-sm animate-pulse delay-500"></div>
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Zap className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white/90 text-sm font-medium">Lightning-fast WordPress development</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build WordPress Sites
            <span className="block bg-gradient-to-r from-white via-primary/80 to-primary-dark/80 bg-clip-text text-transparent">
              10x Faster
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            A lightweight framework and starter themes that leverage WordPress's flexibility 
            while delivering near-static site performance and modern developer workflow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="hero" className="px-8 py-4 text-lg">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg text-white border-white/30 hover:bg-white/10">
              View Documentation
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-6 text-white/90">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Code className="w-5 h-5 mr-2" />
              <span className="font-medium">Developer-First</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Zap className="w-5 h-5 mr-2" />
              <span className="font-medium">Ultra Performance</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Rocket className="w-5 h-5 mr-2" />
              <span className="font-medium">Quick Deploy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;