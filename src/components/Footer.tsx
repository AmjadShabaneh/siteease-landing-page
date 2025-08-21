import { Instagram, TwitterIcon , Facebook, MessageSquare } from "lucide-react";
import logo from "@/assets/logo2.png"
const Footer = () => {
  return (
    <footer className="bg-background text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
             
               <img src={logo} alt="logo" className="h-20 w-22" />
            
            </div>
            <p className="text-white mb-6 max-w-md">
              نحن شركة ناشئة متخصصة في تصميم وتطوير مواقع عصرية وسريعة الأداء باستخدام ووردبريس وأحدث تقنيات الويب، لنساعدك على بناء حضور رقمي مؤثر.
            </p>
            
            {/* Feedback Section */}
            <div className="bg-background/5 rounded-lg p-4 backdrop-blur-sm">
              <h4 className="font-semibold mb-2 flex items-center">
               
               شاركنا مراجعاتك
         <MessageSquare className="w-4 h-4 mr-2" />      </h4>
              <p className="text-sm text-white mb-3">
                ساعدنا في تطوير عملنا من خلال مرجعااتم و اقتراحاتك من خلال قنوات التواصل 
              </p>
              <a 
                href="https://github.com/siteease/feedback/issues" 
                className="text-sm text-white hover:text-primary/80 transition-colors "
              >
               ارسل مراجعاتك
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#features" className="hover:text-primary transition-colors">خدماتنا</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">قنوات التواصل</h3>
            <ul className="space-y-2 text-white">
              <li><a href="https://www.facebook.com/profile.php?id=61577183308676" className="hover:text-primary transition-colors">Facebook</a></li>
              <li><a href="https://www.instagram.com/siteease/" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="https://x.com/Site_Ease" className="hover:text-primary transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t text-white mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm mb-4 md:mb-0">
           © 2024 جميع الحقوق محفوظة – SiteEase.
          </p>
          
            <div className="flex items-center gap-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;