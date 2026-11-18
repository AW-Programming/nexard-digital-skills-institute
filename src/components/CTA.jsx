import { Phone, MessageCircle, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join the May 2026 intake and get 20% OFF if you're among the first 9 students!
            Don't miss this opportunity to transform your career.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:0726754566"
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: 0726 754 566</span>
            </a>
            <a
              href="https://wa.me/254726754566"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <p className="mt-8 text-orange-100 text-sm">
             Limited slots available. Enroll today!
          </p>
        </div>
      </div>
    </section>
  );
}
