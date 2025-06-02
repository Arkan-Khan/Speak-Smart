
import { Facebook, Instagram, Youtube, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/speakenglishwithreshma", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/speakenglishwithreshmad", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@speaksmart2021", label: "YouTube" },
    { icon: MessageCircle, href: "https://wa.me/8600357700", label: "WhatsApp" }
  ];

  return (
    <footer className="bg-[#222] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/8169f376-7ae0-4490-a86c-2c09c3a37911.png" 
                alt="Speak Smart Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-semibold text-white">Speak Smart</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-gray-300" />
            <a 
              href="mailto:speakenglishwithreshmad@gmail.com" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              speakenglishwithreshmad@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-600 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Speak Smart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
