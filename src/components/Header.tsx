import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logo from "@/assets/logo2.png";
const Header = () => {
  return (
    <div className="w-full bg-slate-400 z-40 flex justify-center">
    <header className="fixed top-6 w-7/12 z-50 bg-background/90 backdrop-blur-lg border-b border-border mx-auto rounded-xl">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            
              <img src={logo} className="h-16 w-18 -ml-1" ></img>
           
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors mx-10">
                 الميزات
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors mx-10 ">
              من نحن
            </a>
            <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors mx -10">
              الأسعار
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="hero">ابدأ</Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;