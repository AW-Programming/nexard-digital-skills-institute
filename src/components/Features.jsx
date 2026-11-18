import { Monitor, Users, Briefcase, Award, BookOpen, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Monitor,
      title: 'Modern Computer Lab',
      description: 'State-of-the-art computers and software for hands-on learning experience',
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Experienced Instructors',
      description: 'Learn from industry professionals with years of real-world experience',
      color: 'orange',
    },
    {
      icon: BookOpen,
      title: 'Project-Based Learning',
      description: 'Work on real-life projects that prepare you for actual workplace challenges',
      color: 'blue',
    },
    {
      icon: Award,
      title: 'Certificates Provided',
      description: 'Earn recognized certifications upon successful completion of your course',
      color: 'orange',
    },
    {
      icon: Briefcase,
      title: 'Career Support',
      description: 'Get assistance with job placement and career guidance after graduation',
      color: 'blue',
    },
    {
      icon: Zap,
      title: 'Flexible Schedules',
      description: 'Choose from morning, afternoon, or evening classes to fit your schedule',
      color: 'orange',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Nexard?</h2>
          <p className="section-subtitle">
            We're committed to your success with comprehensive support and modern learning facilities
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClass = colorClasses[feature.color];

            return (
              <div
                key={index}
                className="card p-8 text-center group"
              >
                <div className={`${colorClass} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 gradient-bg rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-blue-100 text-lg">Graduates Trained</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">95%</p>
              <p className="text-blue-100 text-lg">Employment Rate</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">20+</p>
              <p className="text-blue-100 text-lg">Industry Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
