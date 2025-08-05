import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Leaf, Users, TrendingUp, Shield, Clock, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-400" />
              <h3 className="text-xl font-bold">AgriConnect Next</h3>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Connecting farmers, suppliers, and agricultural communities worldwide. 
              Empowering sustainable farming through technology and innovation.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-green-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-green-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-green-300 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-green-300 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-green-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors text-sm">Marketplace</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors text-sm">Weather Forecast</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors text-sm">Crop Management</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors text-sm">Expert Consultation</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors text-sm">Agricultural News</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors text-sm">Community Forum</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-300">Our Services</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <TrendingUp className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-green-100 text-sm">Market Price Analysis</span>
              </li>
              <li className="flex items-start space-x-2">
                <Users className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-green-100 text-sm">Farmer Networking</span>
              </li>
              <li className="flex items-start space-x-2">
                <Shield className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-green-100 text-sm">Crop Insurance</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-green-100 text-sm">24/7 Support</span>
              </li>
              <li className="flex items-start space-x-2">
                <Award className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-green-100 text-sm">Quality Certification</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-300">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-green-100 text-sm">
                  <p>123 Agriculture Avenue</p>
                  <p>Farm District, AG 12345</p>
                  <p>Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-green-100 text-sm">+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-green-100 text-sm">info@agriconnectnext.com</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-green-300 mb-2">Stay Updated</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 bg-green-800 text-white placeholder-green-300 rounded-l border border-green-700 focus:outline-none focus:border-green-500 text-sm"
                />
                <button className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-r transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-green-200">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Help Center</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
            </div>
            <div className="text-sm text-green-200">
              © {currentYear} AgriConnect Next. All rights reserved.
            </div>
          </div>
          
          {/* Additional Info Bar */}
          <div className="mt-4 pt-4 border-t border-green-800 text-center">
            <p className="text-xs text-green-300">
              Certified Agricultural Technology Platform | ISO 27001 Certified | Supporting 50,000+ Farmers Worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;