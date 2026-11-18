import { Globe, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="inline-block bg-white rounded-lg p-2">
              <img src="/logo.png" alt="Nexard Digital Skills Institute" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of digital professionals with practical, job-oriented skills.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Courses</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Computer Packages</li>
              <li>Graphic Design</li>
              <li>Digital Marketing</li>
              <li>Coding & Programming</li>
              <li>Data Analytics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Joysam Plaza, 1st Floor<br />
                  Mama Ngina Street, Thika
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href="tel:0726754566" className="text-gray-400 hover:text-orange-400 text-sm">
                  0726 754 566
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href="mailto:info@nexardinstitute.com" className="text-gray-400 hover:text-orange-400 text-sm">
                  info@nexardinstitute.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Nexard Digital Skills Institute. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="http://www.nexardinstitute.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                <Globe className="w-4 h-4" />
                <span>www.nexardinstitute.com</span>
              </a>
              <a
                href="https://facebook.com/NEXARDINSTITUTE"
                className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>@NEXARDINSTITUTE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
