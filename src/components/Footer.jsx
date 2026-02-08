import React from 'react';

const Footer = () => {
  const hillcrestRealtyBg = '../../src/img/Heading@2x.png'; 

  return (
    <footer className="relative py-16 px-6 md:px-12 lg:px-24">
      <div 
        className="absolute inset-0 bg-no-repeat bg-center opacity-5 pointer-events-none"
        style={{ 
          backgroundImage: `url(${hillcrestRealtyBg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center bottom'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 max-w-md">
            Clear guidance for buying and selling homes.
          </h2>
        </div>

        {/* Bottom section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Contact Info Column */}
          <div>
            <div className="mb-6">
              <p className="text-gray-500 text-sm mb-2">Email</p>
              <a 
                href="mailto:hello@cresthillrealty.com" 
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                hello@cresthillrealty.com
              </a>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-2">Phone</p>
              <a 
                href="tel:+14551234567" 
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                +1 (455) 123-4567
              </a>
            </div>
          </div>

          {/* Sitemap Column */}
          <div>
            <h3 className="text-gray-500 text-sm mb-4">Sitemap</h3>
            <nav className="flex flex-col space-y-3">
              <a href="/" className="text-gray-900 hover:text-gray-600 transition-colors">
                Home
              </a>
              <a href="/listings" className="text-gray-900 hover:text-gray-600 transition-colors">
                Listings
              </a>
              <a href="/services" className="text-gray-900 hover:text-gray-600 transition-colors">
                Services
              </a>
              <a href="/about" className="text-gray-900 hover:text-gray-600 transition-colors">
                About
              </a>
              <a href="/valuation" className="text-gray-900 hover:text-gray-600 transition-colors">
                Valuation Request
              </a>
              <a href="/contact" className="text-gray-900 hover:text-gray-600 transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-gray-500 text-sm mb-4">Social</h3>
            <nav className="flex flex-col space-y-3">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                Twitter (X)
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                Instagram
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;