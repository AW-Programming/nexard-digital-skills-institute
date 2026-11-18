import { Monitor, Palette, Megaphone, Code, BarChart3, Clock } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      icon: Monitor,
      title: 'Computer Packages',
      duration: '2 Months',
      color: 'blue',
      items: [
        'Office Productivity Suites (Word, Excel, PowerPoint)',
        'Data Management (MS Access)',
        'Internet & Email, Basic navigation',
        'Web research, electronic communication',
      ],
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      duration: '2 Months',
      color: 'orange',
      items: [
        'Canva & Photoshop Basics',
        'Social Media Graphics',
        'Poster & Flyer Design',
      ],
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      duration: '2 Months',
      color: 'blue',
      items: [
        'Social Media Marketing',
        'Facebook/Instagram Ads',
        'Content Strategy',
        'Analytics & Reporting',
      ],
    },
    {
      icon: Code,
      title: 'Coding & Computer Programming',
      duration: '6 Months',
      color: 'orange',
      items: [
        'Web Development: JavaScript, HTML, CSS',
        'Data/Backend: SQL, PHP, Python | Backend Servers',
        'Systems/Cloud: Rust, Go, C++ | High Performance, Safety, Concurrency',
        'Mobile: App Development Swift, Kotlin | iOS & Android App Dev',
      ],
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      duration: '6 Months',
      color: 'blue',
      items: [
        'Data Collection & Cleaning (Wrangling)',
        'Data Management & SQL',
        'Data Analysis & Statistics',
        'Programming Languages: Python (Pandas, NumPy) or R',
        'Data Visualization: Tableau, Power BI, Excel',
        'Domain Knowledge & Soft Skills',
        'Practical Projects',
      ],
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      header: 'bg-blue-600',
      icon: 'bg-blue-500',
      text: 'text-blue-600',
    },
    orange: {
      bg: 'bg-orange-50',
      header: 'bg-orange-500',
      icon: 'bg-orange-500',
      text: 'text-orange-600',
    },
  };

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Courses</h2>
          <p className="section-subtitle">
            Choose from our wide range of job-oriented courses designed to kickstart your career
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            const colors = colorClasses[course.color];

            return (
              <div
                key={index}
                className={`card overflow-hidden ${colors.bg}`}
              >
                {/* Card Header */}
                <div className={`${colors.header} text-white p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{course.title}</h3>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center space-x-2 bg-white/20 rounded-lg p-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 bg-white">
                  <ul className="space-y-3">
                    {course.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <svg
                          className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/254726754566?text=I'm%20interested%20in%20the%20${course.title}%20course"
                    className={`mt-6 block w-full ${colors.header} hover:opacity-90 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300`}
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
