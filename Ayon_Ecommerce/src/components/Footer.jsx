import React from 'react';

const Footer = ({
  logoSrc = '/assets/logo.svg',
  socialIcons = {
    facebook: '/assets/facebook.svg',
    twitter: '/assets/x.svg',
    instagram: '/assets/instagram.svg',
  },
  quickLinks = ['Home', 'About Us', 'Contact Us', 'Blogs', 'Profile'],
  shopLinks = ['Collections', 'Trending', 'On Sale', 'New Arrivals', 'T-Shirts'],
  contactInfo = {
    address: 'D NO 1-4/49(1), Perumalchetty Street, Ilampillai, Salem, Tamil Nadu - 637502',
    phone: '+91 63810 67077',
    email: 'support@ayon.in',
  },
}) => {
  return (
    <footer className="bg-[#f0f0f0] py-12">
      <div className="max-w-[1360px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description Section */}
          <div className="space-y-4 text-center md:text-left">
            <img src={logoSrc} alt="Logo" className="w-[206px] h-[93px] mx-auto md:mx-0" />
            <p className="text-gray-600 text-[16px]">
              We have clothes that suit your style and which you are proud to wear. From women to men.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={socialIcons.twitter} alt="Twitter" className="w-8 h-8" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={socialIcons.facebook} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={socialIcons.instagram} alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-black font-semibold text-[16px] mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-black/60 text-[16px] hover:text-black relative group">
                    {link}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Now Section */}
          <div>
            <h3 className="text-black font-semibold text-[16px] mb-4">Shop Now</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-black/60 text-[16px] hover:text-black relative group">
                    {link}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-black font-semibold text-[16px] mb-4">Reach Us</h3>
            <div className="space-y-3">
              <p className="text-black/60 text-[16px] leading-tight">
                {contactInfo.address}
              </p>
              <div className="flex items-center space-x-2">
                <img src="/assets/contact.svg" alt="Phone" className="w-[21px] h-[22px]" />
                <span className="text-black/60 text-[16px]">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/assets/mail.svg" alt="Email" className="w-[22px] h-[22px]" />
                <span className="text-black/60 text-[16px]">{contactInfo.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8">
          <hr className="border-gray-300" />
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-gray-600 text-[14px]">
          &copy; {new Date().getFullYear()} Ayon. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
