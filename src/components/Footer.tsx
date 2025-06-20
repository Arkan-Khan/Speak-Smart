import { Mail, MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { 
      icon: "facebook", 
      href: "https://www.facebook.com/speakenglishwithreshma", 
      label: "Facebook",
      bgColor: "bg-blue-600 hover:bg-blue-700"
    },
    { 
      icon: "instagram", 
      href: "https://www.instagram.com/speakenglishwithreshmad", 
      label: "Instagram",
      bgColor: "bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600"
    },
    { 
      icon: "youtube", 
      href: "https://www.youtube.com/@speaksmart2021", 
      label: "YouTube",
      bgColor: "bg-red-600 hover:bg-red-700"
    },
    { 
      icon: "whatsapp", 
      href: "https://wa.me/+918600357700", 
      label: "WhatsApp",
      bgColor: "bg-green-500 hover:bg-green-600"
    }
  ];

  const renderIcon = (iconType) => {
    switch (iconType) {
      case "facebook":
        return (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      case "youtube":
        return (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      case "whatsapp":
        return (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
          </svg>
        );
      default:
        return <MessageCircle className="w-5 h-5 text-white" />;
    }
  };

  return (
    <footer className="bg-[#222] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 order-1 lg:order-1">
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
          <div className="flex items-center space-x-4 order-2 lg:order-2">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 ${social.bgColor} rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110`}
                aria-label={social.label}
              >
                {renderIcon(social.icon)}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center space-y-3 order-3 lg:order-3">
            {/* Email */}
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-gray-300" />
              <a 
                href="mailto:speakenglishwithreshmad@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
              >
                speakenglishwithreshmad@gmail.com
              </a>
            </div>
            
            {/* Phone Number */}
            <div className="flex items-center space-x-2">
              <Phone className="w-6 h-6 text-gray-300" />
              <a 
                href="tel:+918600357700" 
                className="text-green-400 hover:text-green-300 transition-colors text-lg sm:text-xl font-semibold"
              >
                +91 8600357700
              </a>
            </div>
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