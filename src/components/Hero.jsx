import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold text-sm">
              🎉 MAY 2026 INTAKE ONGOING!
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Job-Oriented
              <span className="text-gradient block">Courses in Thika</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Transform your career with practical digital skills. Learn from industry experts, 
              work on real projects, and get certified. Join hundreds of successful graduates 
              who've landed their dream jobs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#courses"
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/254726754566"
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <PlayCircle className="w-5 h-5" />
                <span>Enroll Now</span>
              </a>
            </div>

            {/* Special Offer Badge */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">🎁 FIRST 9 STUDENTS GET 20% OFF!</p>
              <p className="text-orange-100 mt-2">Limited slots available. Enroll today!</p>
            </div>
          </div>

          {/* Right Content - Image/Graphic */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">💻</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Modern Computer Lab</p>
                    <p className="text-sm text-gray-600">Hands-on practice</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-orange-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">👨‍🏫</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Expert Instructors</p>
                    <p className="text-sm text-gray-600">Industry professionals</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-green-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📜</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Certification</p>
                    <p className="text-sm text-gray-600">Recognized certificates</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-purple-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Career Support</p>
                    <p className="text-sm text-gray-600">Job placement assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
