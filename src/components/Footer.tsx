const Footer = () => {
  return (
    <footer className="bg-[#0A0F1A] text-gray-300 pt-14 pb-8 mt-10">
<div className="container mx-auto px-6 md:px-14 grid lg:grid-cols-4 sm:grid-cols-4 sm:gap-3 gap-10">
  
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">RVS</h2>
          <p className="text-sm text-gray-400 mt-2">
            Royal Value Solutions  
            <br /> IT Consulting & Services
          </p>

          <p className="text-sm text-gray-500 mt-4">
            Empowering Businesses Through  
            <br /> Technology • Training • Talent
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-primary transition">Home</a></li>
            <li><a href="#services" className="hover:text-primary transition">Services</a></li>
            <li><a href="#roles" className="hover:text-primary transition">Roles</a></li>
            <li><a href="#whats-next" className="hover:text-primary transition">What Next</a></li>
            <li><a href="#clients" className="hover:text-primary transition">Clients</a></li>
            <li><a href="#team" className="hover:text-primary transition">Team</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:RVS.DigitalGen@gmail.com"
                className="hover:text-primary transition">
                Email Support
              </a>
            </li>
            <li>
              <a href="tel:+918248948143" 
                className="hover:text-primary transition">
                Call Us
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank"
                className="hover:text-primary transition">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
 
        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Address</h3>
          <p className="text-sm text-gray-400 leading-6">
            RVS (Royal Value Solutions)  
            <br /> Thanjavur, Tamil Nadu  
            <br /> India – 613001
          </p>

          <p className="text-sm text-gray-500 mt-3">
            Working Hours:  
            <br /> Mon – Sat : 10AM to 10PM
          </p>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center">
        <p className="text-xs text-gray-500">
          © 2025 RVS IT Consulting & Services. All rights reserved.  
          Powered by{" "}
          <a 
            href="https://spatakal.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Spatakal
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
