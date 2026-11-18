import { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `*New Inquiry from Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Course of Interest:* ${formData.course || 'Not specified'}%0A` +
      `*Message:* ${formData.message}`;

    // WhatsApp number with country code
    const whatsappNumber = '254726754566';

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have questions? We're here to help you choose the right course
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Visit Us</h4>
                    <p className="text-gray-600">
                      Joysam Plaza, 1st Floor<br />
                      Mama Ngina Street<br />
                      Thika, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Call / WhatsApp</h4>
                    <a href="tel:0726754566" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                      0726 754 566
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                    <a href="mailto:info@nexardinstitute.com" className="text-blue-600 hover:text-blue-700">
                      info@nexardinstitute.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Opening Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/NEXARDINSTITUTE"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="http://www.nexardinstitute.com"
                  className="w-12 h-12 bg-gray-700 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Globe className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="0726 754 566"
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                  Course of Interest
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a course</option>
                  <option value="Computer Packages">Computer Packages</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Coding & Programming">Coding & Programming</option>
                  <option value="Data Analytics">Data Analytics</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your learning goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send via WhatsApp</span>
              </button>

              <p className="text-xs text-gray-500 text-center mt-2">
                This will open WhatsApp with your message pre-filled
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
