import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github, Download } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Card className="max-w-4xl mx-auto border border-border/30 shadow-2xl bg-card/95 backdrop-blur-lg">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
             جاهز لإطلاق موقعك ؟
              
            </h2>
            
            <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
             دعنا نحوّل فكرتك إلى موقع متكامل بتصميم عصري وأداء متفوّق، باستخدام ووردبريس أو أحدث تقنيات الويب.
ابدأ الآن وامنح مشروعك الحضور الرقمي الذي يستحقه.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="hero" className="px-8 py-4 text-lg">
               
                تصفّح أعمالنا
               
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              
                 اطلب عرضًا الآن
              </Button>
            </div>

          
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;