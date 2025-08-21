import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, Rocket, ArrowLeft } from "lucide-react";
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
         
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl/[100px] font-bold text-white mb-6  ">
        حوّل فكرتك إلى موقع حقيقي
في وقت قياسي وبجودة استثنائية
         
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
           نصمّم ونطوّر مواقع مرنة وسريعة، سواء على ووردبريس أو باستخدام أحدث تقنيات الويب مثل React و Next.js.
مواقعنا مبنية لتكبر معك وتمنحك حضور رقمي يليق بطموحك.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="hero" className="px-8 py-4 text-lg">
          ابدأ مشروعك الآن
             <ArrowLeft className=" w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg text-white border-white/30 hover:bg-white/10">
              اطّلع على أعمالنا
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-6 text-white/90">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="font-medium">طور موقعك بسرعة</span>  
              <Code className="w-5 h-5 mr-2" />
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
           <span className="font-medium">أداء عالي</span>   
              <Zap className="w-5 h-5 mr-2" />
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="font-medium">تصميم عصري</span>  
              <Rocket className="w-5 h-5 mr-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;