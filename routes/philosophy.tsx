import { Head } from "$fresh/runtime.ts";
import MobileMenu from "../islands/MobileMenu.tsx";

export default function Philosophy() {
  return (
    <>
      <Head>
        <title>Teaching Philosophy - Mohammed Sebbagh</title>
        <meta name="description" content="My educational philosophy focused on inquiry-based physics education and scientific discourse." />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
          
          /* Moroccan pattern background */
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
          
          /* Mobile menu styles */
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
          
          /* Modern card styling */
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
          
          /* Typography */
          .heading-font { font-family: 'Playfair Display', serif; }
          .body-font { font-family: 'Inter', sans-serif; }
          
          /* Geometric accents */
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
        `}</style>
      </Head>
      
      <div class="min-h-screen bg-gray-50 moroccan-bg body-font">
        {/* Header */}
        <header class="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-10 content-layer">
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
                <a href="/philosophy" class="text-blue-600 font-semibold px-3 py-2 border-b-2 border-blue-600">Philosophy</a>
                <a href="/resume" class="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 transition-colors">Resume</a>
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
            <header class="text-center mb-12">
              <h1 class="text-3xl sm:text-5xl font-bold heading-font text-gray-900 mb-4">
                Teaching Philosophy
              </h1>
              <div class="geometric-divider w-32 sm:w-48 mx-auto mb-6"></div>
              <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                My beliefs, methodologies, and commitment to fostering student growth through evidence-based educational practices
              </p>
            </header>

            {/* Content Sections */}
            <div class="space-y-12 sm:space-y-16">
              
              {/* Why Teaching is Important */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-blue-600 mb-6">
                  Why Physics Education is Important to Me
                </h2>
                <div class="modern-card p-6 sm:p-8 bg-blue-50/50">
                  <p class="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Physics education is more than teaching formulas and equations—it's about developing critical thinking, problem-solving, and scientific reasoning skills that students will use throughout their lives. As someone with both a physics background and software engineering experience, I understand how scientific thinking translates into real-world innovation and technological advancement.
                  </p>
                </div>
              </section>

              {/* Professional Beliefs */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-green-600 mb-6">
                  My Beliefs About Teaching and Learning Physics
                </h2>
                <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div class="modern-card p-4 sm:p-6 bg-green-50/50">
                    <h3 class="font-semibold text-green-700 mb-3">Inquiry-Based Learning</h3>
                    <p class="text-gray-700 text-sm sm:text-base">
                      Students learn best when they ask questions, form hypotheses, and conduct investigations to discover scientific principles themselves.
                    </p>
                  </div>
                  <div class="modern-card p-4 sm:p-6 bg-green-50/50">
                    <h3 class="font-semibold text-green-700 mb-3">Scientific Discourse</h3>
                    <p class="text-gray-700 text-sm sm:text-base">
                      Learning happens through discussion, debate, and collaborative exploration of scientific concepts and real-world applications.
                    </p>
                  </div>
                  <div class="modern-card p-4 sm:p-6 bg-green-50/50">
                    <h3 class="font-semibold text-green-700 mb-3">Hands-On Exploration</h3>
                    <p class="text-gray-700 text-sm sm:text-base">
                      Interactive labs and projects develop students' ability to model, explain, and analyze scientific phenomena.
                    </p>
                  </div>
                  <div class="modern-card p-4 sm:p-6 bg-green-50/50">
                    <h3 class="font-semibold text-green-700 mb-3">Technology Integration</h3>
                    <p class="text-gray-700 text-sm sm:text-base">
                      Modern technology tools enhance learning and prepare students for the digital world they'll enter.
                    </p>
                  </div>
                </div>
              </section>

              {/* Teaching Methods */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-orange-600 mb-6">
                  Teaching Methods and Instructional Strategies
                </h2>
                <div class="modern-card p-6 sm:p-8 bg-orange-50/50">
                  <h3 class="font-semibold text-orange-700 mb-4">Evidence-Based Practices from My Experience</h3>
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span class="text-sm sm:text-base"><strong>Interactive Labs & Projects:</strong> Hands-on exploration that develops scientific thinking skills through direct manipulation and observation</span>
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span class="text-sm sm:text-base"><strong>Student-Led Inquiries:</strong> Facilitating student-driven investigations on scientific topics to foster ownership and critical thinking</span>
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span class="text-sm sm:text-base"><strong>Technology Integration:</strong> Leveraging educational technology tools and my software development background to enhance learning experiences</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Assessment Strategies */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-purple-600 mb-6">
                  Assessment Strategies
                </h2>
                <div class="modern-card p-6 sm:p-8 bg-purple-50/50">
                  <p class="text-gray-700 leading-relaxed mb-6">
                    Assessment in physics should mirror the scientific process and evaluate students' developing scientific thinking:
                  </p>
                  <div class="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 class="font-semibold text-purple-700 mb-3">Formative Assessment</h3>
                      <ul class="text-sm space-y-2 text-gray-700">
                        <li>• Lab observations and scientific notebooks</li>
                        <li>• Peer discussions and explanations</li>
                        <li>• Real-time questioning during investigations</li>
                        <li>• Digital tools for immediate feedback</li>
                      </ul>
                    </div>
                    <div>
                      <h3 class="font-semibold text-purple-700 mb-3">Summative Assessment</h3>
                      <ul class="text-sm space-y-2 text-gray-700">
                        <li>• AP Physics exam preparation</li>
                        <li>• Project-based demonstrations</li>
                        <li>• Scientific argumentation assessments</li>
                        <li>• Problem-solving portfolios</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/* Call to Action */}
            <div class="text-center py-8 sm:py-12 mt-12">
              <div class="modern-card p-6 sm:p-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <h2 class="text-2xl sm:text-3xl font-bold mb-4">Ready to Learn More?</h2>
                <p class="mb-6 opacity-90 text-base sm:text-lg">Explore my professional experience and growth plan.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/resume" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">View Resume</a>
                  <a href="/growth-plan" class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">Growth Plan</a>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer class="bg-white/80 backdrop-blur-md border-t border-gray-200/50 py-8 sm:py-12 mt-16 sm:mt-24 content-layer">
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
