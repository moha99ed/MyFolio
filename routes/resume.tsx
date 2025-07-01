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
                  <a href="/resume" class="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 transition-colors">Resume</a>
                  <a href="/growth-plan" class="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 transition-colors">Growth Plan</a>
                  <a href="/artifacts" class="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 transition-colors">Artifacts</a>
                </nav>
              
              <MobileMenu />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main class="container mx-auto px-4 sm:px-6 py-8 sm:py-16 max-w-4xl content-layer">
          <div class="modern-card rounded-2xl p-6 sm:p-12">
            
            {/* Header */}
            <div class="text-center mb-8">
              <h1 class="text-3xl sm:text-5xl font-bold heading-font text-gray-900 mb-2">Mohammed Sebbagh</h1>
              <div class="geometric-divider w-32 sm:w-48 mx-auto mb-4"></div>
              <div class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 text-sm sm:text-base mb-6">
                <span>Jersey City, NJ 07306</span>
                <span>201-898-6407</span>
                <span>mohammedsebbagh@gmail.com</span>
              </div>
              
              {/* PDF Download Button */}
              <div class="mb-8">
                <a 
                  href="/Mohammed_Sebbagh_Resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  View Resume PDF
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <section class="mb-8 sm:mb-12">
              <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-blue-600 mb-4 sm:mb-6">Professional Summary</h2>
              <div class="modern-card p-4 sm:p-6 bg-blue-50/50">
                <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Dedicated physics educator with expertise in AP and general physics instruction, curriculum development, and student-centered learning. Proven track record developing critical thinking skills through interactive laboratory experiences and inquiry-based learning. Skilled in differentiated instruction, assessment design, and collaborative professional development to enhance student achievement.
                </p>
              </div>
            </section>

            {/* Education */}
            <section class="mb-8 sm:mb-12">
              <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-green-600 mb-4 sm:mb-6">Education</h2>
              <div class="space-y-4">
                {/* Master's Degree */}
                <div class="modern-card p-4 sm:p-6 bg-green-50/50">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h3 class="text-lg font-semibold text-green-700">Master of Arts, Secondary Science Education (Physics)</h3>
                      <p class="text-gray-700">Western Governors University, Salt Lake City, UT</p>
                    </div>
                    <span class="text-gray-600 font-medium text-sm sm:text-base mt-2 sm:mt-0">Anticipated July 2025</span>
                  </div>
                </div>
                
                {/* Bachelor's Degree */}
                <div class="modern-card p-4 sm:p-6 bg-green-50/50">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h3 class="text-lg font-semibold text-green-700">Bachelor of Science, Applied Physics – Optical Science and Engineering</h3>
                      <p class="text-gray-700">New Jersey Institute of Technology, Newark, NJ</p>
                    </div>
                    <span class="text-gray-600 font-medium text-sm sm:text-base mt-2 sm:mt-0">December 2017</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Certification/Licensure */}
            <section class="mb-8 sm:mb-12">
              <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-indigo-600 mb-4 sm:mb-6">Certification/Licensure</h2>
              <div class="modern-card p-4 sm:p-6 bg-indigo-50/50">
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 class="text-lg font-semibold text-indigo-700">New Jersey Standard Teaching Certificate - Physics</h3>
                  </div>
                  <span class="text-gray-600 font-medium text-sm sm:text-base mt-2 sm:mt-0">Pending 2025</span>
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
                      <h3 class="text-lg font-semibold text-orange-700">Union City Board of Education, Union City, NJ | Physics Teacher</h3>
                    </div>
                    <span class="text-gray-600 font-medium text-sm sm:text-base mt-2 sm:mt-0">2023 - Present</span>
                  </div>
                  <ul class="list-none space-y-2 text-gray-700 text-sm">
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Developed questioning, modeling, explaining, data analysis, and argumentation skills through interactive labs</span>
                    </li>
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Facilitated student-led scientific inquiries fostering critical thinking and exploration</span>
                    </li>
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Collaborated with families to ensure access to appropriate learning resources</span>
                    </li>
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Cultivated supportive environment encouraging student engagement in scientific discourse</span>
                    </li>
                  </ul>
                </div>

                {/* North Star Academy */}
                <div class="modern-card p-4 sm:p-6 bg-orange-50/50">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <h3 class="text-lg font-semibold text-orange-700">North Star Academy Charter School, Newark, NJ | Teacher (AP Physics and General Physics)</h3>
                    </div>
                    <span class="text-gray-600 font-medium text-sm sm:text-base mt-2 sm:mt-0">2018 - 2022</span>
                  </div>
                  <ul class="list-none space-y-2 text-gray-700 text-sm">
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Instructed and mentored 80+ students across multiple classes preparing for AP Physics examinations</span>
                    </li>
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Designed engaging, rigorous, college-ready, and culturally sustaining instruction as Curriculum Planner</span>
                    </li>
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Delivered professional development sessions enhancing content knowledge and pedagogical practice</span>
                    </li>
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Served as 11th Grade Team Lead facilitating cross-functional meetings and environmental assessments</span>
                    </li>
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Incorporated differentiated instruction, technology-infused lessons, and varying assessment strategies</span>
                    </li>
                  </ul>
                </div>

                {/* Teaching Assistant */}
                <div class="modern-card p-4 sm:p-6 bg-orange-50/50">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <h3 class="text-lg font-semibold text-orange-700">Center of Pre-College Programs (NJIT), Newark, NJ | Teaching Assistant</h3>
                    </div>
                    <span class="text-gray-600 font-medium text-sm sm:text-base mt-2 sm:mt-0">Summer 2017</span>
                  </div>
                  <ul class="list-none space-y-2 text-gray-700 text-sm">
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Supervised high school students during class sessions and field trips</span>
                    </li>
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Assisted instructors with student activities and monitored classroom behavior</span>
                    </li>
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Mentored students with emphasis on building positive relationships</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Other Experience */}
            <section class="mb-8 sm:mb-12">
              <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-red-600 mb-4 sm:mb-6">Other Experience</h2>
              <div class="space-y-6">
                
                {/* Parallel */}
                <div class="modern-card p-4 sm:p-6 bg-red-50/50">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <h3 class="text-lg font-semibold text-red-700">Parallel, Remote | Software Engineer</h3>
                    </div>
                    <span class="text-gray-600 font-medium text-sm sm:text-base mt-2 sm:mt-0">2023 - Present</span>
                  </div>
                  <ul class="list-none space-y-2 text-gray-700 text-sm">
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Implemented Next.js for server-side rendering optimizing SEO and user experiences</span>
                    </li>
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Developed React component-based architecture improving code reusability and maintenance</span>
                    </li>
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Collaborated with cross-functional teams converting requirements into technical solutions</span>
                    </li>
                  </ul>
                </div>

                {/* Denosoar */}
                <div class="modern-card p-4 sm:p-6 bg-red-50/50">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <h3 class="text-lg font-semibold text-red-700">Denosoar, Remote | Software Engineer</h3>
                    </div>
                    <span class="text-gray-600 font-medium text-sm sm:text-base mt-2 sm:mt-0">2022 - 2023</span>
                  </div>
                  <ul class="list-none space-y-2 text-gray-700 text-sm">
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Leveraged React Fresh's rendering optimization reducing page load time by over 50%</span>
                    </li>
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Developed server applications efficiently handling up to 1000 websocket connections</span>
                    </li>
                    <li class="flex items-start">
                      <span class="geometric-bullet"></span>
                      <span>Created interactive real-time data visualization tools improving analysis capabilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Call to Action Section */}
            <div class="text-center py-6 sm:py-8 no-print">
              <div class="modern-card p-6 sm:p-8 bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <h2 class="text-xl sm:text-2xl font-bold mb-4">Ready to Connect?</h2>
                <p class="mb-6 opacity-90 text-sm sm:text-base">
                  Interested in exploring more of my professional portfolio?
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/growth-plan" class="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    View Growth Plan
                  </a>
                  <a href="/artifacts" class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                    View Artifacts
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
            <div class="space-y-2">
              <p class="text-gray-500 text-sm sm:text-base font-medium">
                &copy; 2025 Mohammed Sebbagh | Professional Teaching Portfolio
              </p>
              <p class="text-gray-400 text-xs sm:text-sm italic">
                Dedicated to fostering scientific literacy, critical thinking, and lifelong learning in all students
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}