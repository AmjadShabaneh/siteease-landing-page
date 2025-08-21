import { Card, CardContent } from "@/components/ui/card";
import { Zap, Layers, Palette, Terminal, Shield, Rocket } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "سرعة وأداء متميز",
      description: "مواقع محسّنة بمعايير حديثة تضمن سرعة التصفح وتجربة استخدام سلسة لزوارك."
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "قوالب مرنة ومخصصة",
      description: "تصاميم متجاوبة قابلة للتخصيص بالكامل، تناسب مختلف الأجهزة وتمنحك مظهرًا احترافيًا."
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "تصميم يرتكز على هويتك",
      description: "ألوان متناسقة، خطوط واضحة، وتجربة مستخدم تعكس شخصية علامتك التجارية بدقة."
    },
    {
      icon: <Terminal className="w-8 h-8 text-primary" />,
      title: "تطوير وفق احتياجاتك",
      description: "كل موقع يُبنى بما يتناسب مع طبيعة نشاطك، سواء كان متجرًا إلكترونيًا، مدونة، أو موقعًا تعريفيًا."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "حلول متكاملة وواقعية",
      description: "نوفّر أساسيات الموقع التي تحتاجها فعلًا: الأمان، تحسين محركات البحث، وإدارة المحتوى بشكل منظم."
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "دعم مستمر وتحديثات",
      description: "لا ينتهي عملنا بتسليم الموقع، بل نرافقك بخدمات الدعم الفني والتطوير المستمر لتبقى مواقعك مواكبة للتغيرات."
    }
  ];

  return (
    <section id="features" className="py-24 bg-card border-t-gray-100">
      <div className="container mx-auto px-6 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 ">
          كل ما تحتاجه لإطلاق موقعك 
            <span className="block bg-gradient-text bg-clip-text mt-3 text-transparent p-1">
            بسرعة واحترافية
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-10">
نقوم بتصميم وتطوير مواقع عصرية عالية الأداء باستخدام أحدث التقنيات، لنمنحك حضورًا رقميًا يعكس هوية مشروعك ويحقق أهدافك.          </p>
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