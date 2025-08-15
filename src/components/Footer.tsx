import { Github, Twitter, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SE</span>
              </div>
              <span className="text-xl font-bold">SiteEase</span>
            </div>
            <p className="text-white mb-6 max-w-md">
              The fastest way to build beautiful, high-performance WordPress sites. 
              Modern developer workflow meets WordPress flexibility.
            </p>
            
            {/* Feedback Section */}
            <div className="bg-background/5 rounded-lg p-4 backdrop-blur-sm">
              <h4 className="font-semibold mb-2 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                Share Your Feedback
              </h4>
              <p className="text-sm text-white mb-3">
                Help us improve SiteEase by sharing your thoughts and feature requests.
              </p>
              <a 
                href="https://github.com/siteease/feedback/issues" 
                className="text-sm text-primary hover:text-primary/80 transition-colors underline"
              >
                Submit Feedback →
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t text-white mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm mb-4 md:mb-0">
            © 2024 SiteEase. MIT Licensed. Made for the WordPress community.
          </p>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors">
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;