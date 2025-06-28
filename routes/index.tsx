// routes/index.tsx - Modern Moroccan with Background Pattern & Fixed Mobile Menu
import { Head } from "$fresh/runtime.ts";
import MobileMenu from "../islands/MobileMenu.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohammed Sebbagh - Professional Teaching Portfolio</title>
        <meta name="description" content="Professional teaching portfolio showcasing educational philosophy, experience, and growth." />
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
          
          /* Ensure content is above the overlay */
          .content-layer {
            position: relative;
            z-index: 2;
          }
          
          /* Modern color palette */
          :root {
            --moroccan-blue: #3b82f6;
            --moroccan-teal: #06b6d4;
            --moroccan-sage: #10b981;
            --moroccan-gold: #f59e0b;
            --moroccan-coral: #f97316;
          }
          
          /* Improved mobile menu */
          .mobile-menu {
            transform: translateX(-100%);
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .mobile-menu.open {
            transform: translateX(0);
          }
          
          /* Hamburger menu animation */
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
            transform: translateY(-4px);
            box-shadow: 
              0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
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
            background: var(--moroccan-gold);
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          }
          
          .geometric-bullet {
            width: 6px;
            height: 6px;
            background: var(--moroccan-blue);
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
            margin-right: 12px;
            flex-shrink: 0;
            margin-top: 8px;
          }
          
          .geometric-bullet.teal { background: var(--moroccan-teal); }
          .geometric-bullet.sage { background: var(--moroccan-sage); }
          .geometric-bullet.gold { background: var(--moroccan-gold); }
          .geometric-bullet.coral { background: var(--moroccan-coral); }
          
          /* Responsive utilities */
          @media (max-width: 768px) {
            .hero-text { font-size: 2.5rem; }
            .hero-subtext { font-size: 1.25rem; }
            .section-padding { padding: 2rem 1rem; }
          }
        `}</style>
      </Head>
      
      <div class="min-h-screen bg-gray-50 moroccan-bg body-font">
        {/* Mobile-friendly header */}
        <header class="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-40 content-layer">
          <div class="container mx-auto px-4 sm:px-6 py-4 max-w-6xl">
            <div class="flex justify-between items-center">
              {/* Logo/Name */}
              <div class="text-left">
                <h1 class="text-xl sm:text-2xl font-bold heading-font text-gray-900">
                  Mohammed Sebbagh
                </h1>
                <p class="text-sm text-gray-600 hidden sm:block">
                  Physics Teacher & Educational Technology Developer
                </p>
              </div>
              
              {/* Desktop Navigation */}
              <nav class="hidden md:flex space-x-8">
                <a href="/" class="text-blue-600 font-semibold px-3 py-2 border-b-2 border-blue-600">Home</a>
                <a href="/philosophy" class="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 transition-colors">Philosophy</a>
                <a href="/resume" class="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 transition-colors">Resume</a>
                <a href="/growth-plan" class="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 transition-colors">Growth Plan</a>
              </nav>
              
              {/* Mobile menu component */}
              <MobileMenu />
            </div>
          </div>
        </header>

        {/* Main content */}
        <main class="container mx-auto px-4 sm:px-6 max-w-6xl content-layer">
          {/* Hero section - mobile optimized */}
          <section class="text-center py-12 sm:py-20 mb-16 sm:mb-24">
            <h1 class="hero-text text-4xl sm:text-6xl md:text-7xl font-bold heading-font text-gray-900 mb-6 sm:mb-8">
              Professional Teaching Portfolio
            </h1>
            <p class="hero-subtext text-lg sm:text-2xl text-gray-600 mb-4 sm:mb-6 max-w-3xl mx-auto px-4">
              Physics Teacher & Educational Technology Developer
            </p>
            <div class="geometric-divider w-48 sm:w-64 mx-auto mb-8 sm:mb-12"></div>
            <p class="text-base sm:text-lg text-gray-500 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed px-4">
              Dedicated to developing students' scientific thinking through interactive labs, 
              inquiry-based learning, and innovative technology integration
            </p>
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <a href="/philosophy" class="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                Teaching Philosophy
              </a>
              <a href="/resume" class="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center">
                View Resume
              </a>
            </div>
          </section>

          {/* Feature cards - mobile responsive grid */}
          <section class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24 px-4">
            <div class="modern-card p-6 sm:p-8 rounded-xl text-center">
              <div class="text-5xl sm:text-6xl mb-4 sm:mb-6">🔬</div>
              <h3 class="text-xl sm:text-2xl font-semibold heading-font text-gray-900 mb-3 sm:mb-4">Physics Education</h3>
              <div class="geometric-divider w-12 sm:w-16 mx-auto mb-4 sm:mb-6"></div>
              <p class="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                AP Physics and General Physics instruction with emphasis on inquiry-based learning and scientific discourse.
              </p>
              <a href="/philosophy" class="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Read More →
              </a>
            </div>

            <div class="modern-card p-6 sm:p-8 rounded-xl text-center">
              <div class="text-5xl sm:text-6xl mb-4 sm:mb-6">💻</div>
              <h3 class="text-xl sm:text-2xl font-semibold heading-font text-gray-900 mb-3 sm:mb-4">Educational Technology</h3>
              <div class="geometric-divider w-12 sm:w-16 mx-auto mb-4 sm:mb-6"></div>
              <p class="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Software engineering background with open-source educational tools and SMART Web Applications.
              </p>
              <a href="/resume" class="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                View Experience →
              </a>
            </div>

            <div class="modern-card p-6 sm:p-8 rounded-xl text-center">
              <div class="text-5xl sm:text-6xl mb-4 sm:mb-6">🌱</div>
              <h3 class="text-xl sm:text-2xl font-semibold heading-font text-gray-900 mb-3 sm:mb-4">Professional Growth</h3>
              <div class="geometric-divider w-12 sm:w-16 mx-auto mb-4 sm:mb-6"></div>
              <p class="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Continuous development in curriculum design, leadership, and innovative teaching practices.
              </p>
              <a href="/growth-plan" class="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn More →
              </a>
            </div>
          </section>

          {/* Professional highlights - mobile optimized */}
          <section class="modern-card p-6 sm:p-12 rounded-2xl mx-4">
            <div class="text-center mb-12 sm:mb-16">
              <h2 class="text-3xl sm:text-4xl font-bold heading-font text-gray-900 mb-4">Professional Highlights</h2>
              <div class="geometric-divider w-24 sm:w-32 mx-auto"></div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
              <div>
                <h3 class="text-xl sm:text-2xl font-semibold heading-font text-gray-900 mb-6 sm:mb-8">Teaching Excellence</h3>
                <ul class="space-y-3 sm:space-y-4">
                  <li class="flex items-start">
                    <div class="geometric-bullet"></div>
                    <span class="text-gray-700 text-sm sm:text-base">5+ years of physics education experience</span>
                  </li>
                  <li class="flex items-start">
                    <div class="geometric-bullet teal"></div>
                    <span class="text-gray-700 text-sm sm:text-base">AP Physics curriculum development</span>
                  </li>
                  <li class="flex items-start">
                    <div class="geometric-bullet sage"></div>
                    <span class="text-gray-700 text-sm sm:text-base">11th Grade Team Leadership</span>
                  </li>
                  <li class="flex items-start">
                    <div class="geometric-bullet gold"></div>
                    <span class="text-gray-700 text-sm sm:text-base">Mentoring 80+ students annually</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-xl sm:text-2xl font-semibold heading-font text-gray-900 mb-6 sm:mb-8">Technical Innovation</h3>
                <ul class="space-y-3 sm:space-y-4">
                  <li class="flex items-start">
                    <div class="geometric-bullet"></div>
                    <span class="text-gray-700 text-sm sm:text-base">Software engineering expertise</span>
                  </li>
                  <li class="flex items-start">
                    <div class="geometric-bullet teal"></div>
                    <span class="text-gray-700 text-sm sm:text-base">Educational technology development</span>
                  </li>
                  <li class="flex items-start">
                    <div class="geometric-bullet coral"></div>
                    <span class="text-gray-700 text-sm sm:text-base">Open-source project contributions</span>
                  </li>
                  <li class="flex items-start">
                    <div class="geometric-bullet gold"></div>
                    <span class="text-gray-700 text-sm sm:text-base">SMART Web Application creator</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        {/* Mobile-friendly footer */}
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
