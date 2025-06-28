import { Head } from "$fresh/runtime.ts";
import MobileMenu from "../islands/MobileMenu.tsx";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Professional Resume - Mohammed Sebbagh</title>
        <meta name="description" content="Professional physics teaching resume including education, certifications, experience, and achievements." />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
          
          .moroccan-bg {
            background-image: url('/moroccan-pattern.png');
            background-size: 300px 300px;
            background-repeat: repeat;
            position: relative;
          }
          
          .moroccan-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(248, 250, 252, 0.95);
            pointer-events: none;
            z-index: 1;
          }
          
          .content-layer {
            position: relative;
            z-index: 2;
          }
          
          .mobile-menu {
            transform: translateX(-100%);
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .mobile-menu.open {
            transform: translateX(0);
          }
          
          .hamburger {
            cursor: pointer;
            width: 24px;
            height: 24px;
            transition: all 0.25s;
            position: relative;
          }
          
          .hamburger-top,
          .hamburger-middle,
          .hamburger-bottom {
            position: absolute;
            top: 0;
            left: 0;
            width: 24px;
            height: 2px;
            background: currentColor;
            transform: rotate(0);
            transition: all 0.3s ease;
          }
          
          .hamburger-middle {
            transform: translateY(7px);
          }
          
          .hamburger-bottom {
            transform: translateY(14px);
          }
          
          .hamburger.open .hamburger-top {
            transform: rotate(45deg) translateY(6px) translateX(6px);
          }
          
          .hamburger.open .hamburger-middle {
            opacity: 0;
          }
          
          .hamburger.open .hamburger-bottom {
            transform: rotate(-45deg) translateY(6px) translateX(-6px);
          }
          
          .modern-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 
              0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: all 0.3s ease;
          }
          
          .modern-card:hover {
            transform: translateY(-2px);
            box-shadow: 
              0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
          
          .heading-font { font-family: 'Playfair Display', serif; }
          .body-font { font-family: 'Inter', sans-serif; }
          
          .geometric-divider {
            height: 2px;
            background: linear-gradient(90deg, 
              transparent 0%, 
              rgba(59, 130, 246, 0.3) 20%, 
              rgba(245, 158, 11, 0.5) 50%, 
              rgba(59, 130, 246, 0.3) 80%, 
              transparent 100%
            );
            position: relative;
          }
          
          .geometric-divider::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 8px;
            height: 8px;
            transform: translate(-50%, -50%) rotate(45deg);
            background: #f59e0b;
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          }
          
          .geometric-bullet {
            width: 6px;
            height: 6px;
            background: #3b82f6;
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
            margin-right: 12px;
            flex-shrink: 0;
            margin-top: 8px;
          }
          
          @media print {
            .no-print { display: none !important; }
            .modern-card { background: white !important; box-shadow: none !important; }
            .moroccan-bg::before { display: none !important; }
          }
        `}</style>
      </Head>
      
      <div class="min-h-screen bg-gray-50 moroccan-bg body-font">
        {/* Header */}
        <header class="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-10 content-layer no-print">
          <div class="container mx-auto px-4 sm:px-6 py-4 max-w-6xl">
            <div class="flex justify-between items-center">
              <div class="text-left">
                <h1 class="text-xl sm:text-2xl font-bold heading-font text-gray-900">
                  Mohammed Sebbagh
                </h1>
                <p class="text-sm text-gray-600 hidden sm:block">
                  Physics Teacher & Educational Technology Developer
                </p>
              </div>
              
              <nav class="hidden md:flex space-x-8">
                <a href="/" class="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 transition-colors">Home</a>
                <a href="/philosophy" class="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 transition-colors">Philosophy</a>
                <a href="/resume" class="text-blue-600 font-semibold px-3 py-2 border-b-2 border-blue-600">Resume</a>
                <a href="/growth-plan" class="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 transition-colors">Growth Plan</a>
              </nav>
              
              <MobileMenu />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main class="container mx-auto px-4 sm:px-6 py-8 sm:py-16 max-w-4xl content-layer">
          <div class="modern-card rounded-2xl p-6 sm:p-12">
            
            {/* Header */}
            <div class="text-center mb-12">
              <h1 class="text-3xl sm:text-5xl font-bold heading-font text-gray-900 mb-2">Mohammed Sebbagh</h1>
              <p class="text-lg sm:text-xl text-gray-600 mb-4">Physics Teacher & Educational Technology Developer</p>
              <div class="geometric-divider w-32 sm:w-48 mx-auto mb-4"></div>
              <div class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 text-sm sm:text-base">
                <span>mohammedsebbagh@gmail.com</span>
                <span>201-898-6407</span>
                <span>New Jersey</span>
              </div>
            </div>

            {/* Professional Summary */}
            <section class="mb-8 sm:mb-12">
              <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-blue-600 mb-4 sm:mb-6">Professional Summary</h2>
              <div class="modern-card p-4 sm:p-6 bg-blue-50/50">
                <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Dedicated physics educator with 5+ years of experience in secondary education, combining strong scientific background with innovative educational technology development. Proven track record of developing students' scientific thinking skills through inquiry-based learning, interactive labs, and collaborative projects. Experienced in AP Physics curriculum development, team leadership, and cross-functional collaboration.
                </p>
              </div>
            </section>

            {/* Education */}
            <section class="mb-8 sm:mb-12">
              <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-green-600 mb-4 sm:mb-6">Education</h2>
              <div class="modern-card p-4 sm:p-6 bg-green-50/50">
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 class="text-lg font-semibold text-green-700">Bachelor of Science in Applied Physics</h3>
                    <p class="text-gray-700 font-medium">Optical Science and Engineering</p>
                    <p class="text-gray-700">New Jersey Institute of Technology (NJIT), Newark, NJ</p>
                  </div>
                  <span class="text-gray-600 font-medium text-sm sm:text-base mt-2 sm:mt-0">December 2017</span>
                </div>
                <p class="text-gray-600 text-sm">
                  Specialized in optical science and engineering with comprehensive foundation in physics principles, 
                  mathematical modeling, and scientific research methodologies.
                </p>
              </div>
            </section>

            {/* Languages & Skills */}
            <section class="mb-8 sm:mb-12">
              <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-purple-600 mb-4 sm:mb-6">Languages & Technical Skills</h2>
              <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div class="modern-card p-4 bg-purple-50/50">
                  <h3 class="font-semibold text-purple-700 mb-2">Languages</h3>
                  <p class="text-sm text-gray-600">English, Arabic, French</p>
                </div>
                <div class="modern-card p-4 bg-purple-50/50">
                  <h3 class="font-semibold text-purple-700 mb-2">Technical Skills</h3>
                  <p class="text-sm text-gray-600">Software Engineering, Educational Technology Development, Data Analysis Tools</p>
                </div>
              </div>
            </section>

            {/* Teaching Experience */}
            <section class="mb-8 sm:mb-12">
              <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-orange-600 mb-4 sm:mb-6">Teaching Experience</h2>
              <div class="space-y-6">
                
                {/* Current Position */}
                <div class="modern-card p-4 sm:p-6 bg-orange-50/50">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <h3 class="text-lg font-semibold text-orange-700">Physics Teacher</h3>
                      <p class="text-gray-700 font-medium">Union City Board Of Education</p>
                      <p class="text-gray-600">Union City, NJ</p>
                    </div>
                    <span class="text-gray-600 font-medium text-sm sm:text-base mt-2 sm:mt-0">2023 - Present</span>
                  </div>
                  <ul class="list-none space-y-2 text-gray-700 text-sm">
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Developed students' questioning, modeling, explaining, data analysis, argumentation, and strategic thinking skills</span>
                    </li>
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Cultivated supportive learning environment encouraging student engagement in scientific discourse</span>
                    </li>
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Facilitated student-led inquiries on various scientific topics, fostering critical thinking</span>
                    </li>
                  </ul>
                </div>

                {/* North Star Academy */}
                <div class="modern-card p-4 sm:p-6 bg-orange-50/50">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <h3 class="text-lg font-semibold text-orange-700">Teacher (AP Physics and General Physics)</h3>
                      <p class="text-gray-700 font-medium">North Star Academy Charter School Newark</p>
                      <p class="text-gray-600">Newark, NJ</p>
                    </div>
                    <span class="text-gray-600 font-medium text-sm sm:text-base mt-2 sm:mt-0">2018 - 2022</span>
                  </div>
                  
                  <div class="mb-4">
                    <h4 class="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Key Leadership Roles:</h4>
                    <div class="space-y-3 text-sm">
                      <div>
                        <h5 class="font-medium text-orange-600">11th Grade Team Lead (2021-2022)</h5>
                        <ul class="list-none space-y-1 text-gray-700 ml-4 text-xs sm:text-sm">
                          <li class="flex items-start">
                            <span class="geometric-bullet" style="background: #10b981;"></span>
                            <span>Conducted classroom environmental walkthroughs to improve learning environment</span>
                          </li>
                          <li class="flex items-start">
                            <span class="geometric-bullet" style="background: #10b981;"></span>
                            <span>Facilitated cross-functional team meetings to foster collaboration</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 class="font-medium text-orange-600">Curriculum Planner for AP Physics (2021-2022)</h5>
                        <ul class="list-none space-y-1 text-gray-700 ml-4 text-xs sm:text-sm">
                          <li class="flex items-start">
                            <span class="geometric-bullet" style="background: #f59e0b;"></span>
                            <span>Collaborated with Content Directors and Instructional Leaders on curriculum design</span>
                          </li>
                          <li class="flex items-start">
                            <span class="geometric-bullet" style="background: #f59e0b;"></span>
                            <span>Delivered yearlong professional development sessions to enhance teaching practices</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 class="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Teaching Achievements:</h4>
                    <ul class="list-none space-y-1 text-gray-700 text-xs sm:text-sm">
                      <li class="flex items-start">
                        <span class="geometric-bullet"></span>
                        <span>Instructed and mentored 80+ students across multiple classes</span>
                      </li>
                      <li class="flex items-start">
                        <span class="geometric-bullet"></span>
                        <span>Prepared students for AP Physics and collegiate-level coursework</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Technology Experience */}
            <section class="mb-8 sm:mb-12">
              <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-red-600 mb-4 sm:mb-6">Technology & Software Development</h2>
              <div class="modern-card p-4 sm:p-6 bg-red-50/50">
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <div>
                    <h3 class="text-lg font-semibold text-red-700">Software Engineer</h3>
                    <p class="text-gray-700 font-medium">OSLabs Beta</p>
                  </div>
                  <span class="text-gray-600 font-medium text-sm sm:text-base mt-2 sm:mt-0">2022 - 2023</span>
                </div>
                <ul class="list-none space-y-2 text-gray-700 text-sm">
                  <li class="flex items-start">
                    <span class="geometric-bullet"></span>
                    <span>Built developer tool for heap memory usage tracking using modern technology stack</span>
                  </li>
                  <li class="flex items-start">
                    <span class="geometric-bullet"></span>
                    <span>Developed SMART Web Applications for educational use</span>
                  </li>
                  <li class="flex items-start">
                    <span class="geometric-bullet"></span>
                    <span>Applied software engineering principles to create educational technology solutions</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Core Competencies */}
            <section class="mb-8 sm:mb-12">
              <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-teal-600 mb-4 sm:mb-6">Core Competencies</h2>
              <div class="modern-card p-4 sm:p-6 bg-teal-50/50">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <h3 class="font-semibold text-teal-700 mb-3">Physics Education</h3>
                    <ul class="space-y-1 text-gray-700 text-xs sm:text-sm">
                      <li>• AP Physics Curriculum Development</li>
                      <li>• Inquiry-Based Learning</li>
                      <li>• Scientific Discourse Facilitation</li>
                      <li>• Interactive Lab Design</li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="font-semibold text-teal-700 mb-3">Educational Technology</h3>
                    <ul class="space-y-1 text-gray-700 text-xs sm:text-sm">
                      <li>• Software Development</li>
                      <li>• Educational App Creation</li>
                      <li>• SMART Web Applications</li>
                      <li>• Open Source Development</li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="font-semibold text-teal-700 mb-3">Leadership & Collaboration</h3>
                    <ul class="space-y-1 text-gray-700 text-xs sm:text-sm">
                      <li>• Team Leadership (11th Grade)</li>
                      <li>• Curriculum Planning</li>
                      <li>• Professional Development Delivery</li>
                      <li>• Cross-Functional Collaboration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Download/Print Section */}
            <div class="text-center py-6 sm:py-8 no-print">
              <div class="modern-card p-6 sm:p-8 bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <h2 class="text-xl sm:text-2xl font-bold mb-4">Ready to Connect?</h2>
                <p class="mb-6 opacity-90 text-sm sm:text-base">
                  Interested in learning more about my qualifications and experience?
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onclick="window.print()" class="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Print Resume
                  </button>
                  <a href="/growth-plan" class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                    View Growth Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer class="bg-white/80 backdrop-blur-md border-t border-gray-200/50 py-8 sm:py-12 mt-16 sm:mt-24 content-layer no-print">
          <div class="container mx-auto px-4 sm:px-6 max-w-6xl text-center">
            <div class="geometric-divider w-16 sm:w-24 mx-auto mb-4 sm:mb-6"></div>
            <p class="text-gray-500 text-sm sm:text-base">
              Built with Fresh & Deno • Inspired by Moroccan Geometric Patterns
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
