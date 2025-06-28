import { Head } from "$fresh/runtime.ts";
import MobileMenu from "../islands/MobileMenu.tsx";

export default function GrowthPlan() {
  return (
    <>
      <Head>
        <title>Professional Growth Plan - Mohammed Sebbagh</title>
        <meta name="description" content="Professional growth plan focused on physics education innovation and educational technology integration." />
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
                <a href="/philosophy" class="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 transition-colors">Philosophy</a>
                <a href="/resume" class="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 transition-colors">Resume</a>
                <a href="/growth-plan" class="text-blue-600 font-semibold px-3 py-2 border-b-2 border-blue-600">Growth Plan</a>
              </nav>
              
              <MobileMenu />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main class="container mx-auto px-4 sm:px-6 py-8 sm:py-16 max-w-4xl content-layer">
          <div class="modern-card rounded-2xl p-6 sm:p-12">
            
            <header class="text-center mb-12">
              <h1 class="text-3xl sm:text-5xl font-bold heading-font text-gray-900 mb-4">
                Professional Growth Plan
              </h1>
              <div class="geometric-divider w-32 sm:w-48 mx-auto mb-6"></div>
              <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Bridging physics education and technology innovation for enhanced student learning
              </p>
            </header>

            <div class="space-y-12 sm:space-y-16">
              
              {/* Professional Development Journey */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-blue-600 mb-6">
                  How I Have Developed as a Teacher
                </h2>
                <div class="modern-card p-6 sm:p-8 bg-blue-50/50 mb-6">
                  <p class="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                    My journey as an educator has been shaped by my unique background combining physics education with software engineering expertise. Starting as a teaching assistant at NJIT in 2017, I've evolved from supporting pre-college programs to leading curriculum development for AP Physics.
                  </p>
                </div>
                
                <div class="grid sm:grid-cols-2 gap-6">
                  <div class="modern-card p-4 sm:p-6 bg-blue-50/30">
                    <h3 class="font-semibold text-blue-700 mb-3">Early Career (2017-2019)</h3>
                   <ul class="space-y-2 text-gray-700 text-sm">
                     <li class="flex items-start">
                       <span class="geometric-bullet"></span>
                       <span>Focused on foundational teaching skills and classroom management</span>
                     </li>
                     <li class="flex items-start">
                       <span class="geometric-bullet"></span>
                       <span>Developed understanding of secondary physics education</span>
                     </li>
                     <li class="flex items-start">
                       <span class="geometric-bullet"></span>
                       <span>Built relationships with students and families</span>
                     </li>
                   </ul>
                 </div>
                 <div class="modern-card p-4 sm:p-6 bg-green-50/30">
                   <h3 class="font-semibold text-green-700 mb-3">Current Expertise (2019-Present)</h3>
                   <ul class="space-y-2 text-gray-700 text-sm">
                     <li class="flex items-start">
                       <span class="geometric-bullet" style="background: #10b981;"></span>
                       <span>Leadership in AP Physics curriculum development</span>
                     </li>
                     <li class="flex items-start">
                       <span class="geometric-bullet" style="background: #10b981;"></span>
                       <span>Integration of educational technology and software development</span>
                     </li>
                     <li class="flex items-start">
                       <span class="geometric-bullet" style="background: #10b981;"></span>
                       <span>Mentoring 80+ students annually in scientific thinking</span>
                     </li>
                   </ul>
                 </div>
               </div>
             </section>

             {/* Professional Development Activities */}
             <section>
               <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-green-600 mb-6">
                 Professional Development Activities
               </h2>
               
               <div class="space-y-6">
                 <div class="modern-card p-6 sm:p-8 bg-green-50/50">
                   <h3 class="text-lg font-semibold text-green-700 mb-4">Educational Technology Development</h3>
                   <div class="grid sm:grid-cols-2 gap-4">
                     <div>
                       <h4 class="font-medium text-gray-800 mb-2">Software Engineering Projects</h4>
                       <ul class="space-y-1 text-gray-700 text-sm">
                         <li class="flex items-start">
                           <span class="geometric-bullet"></span>
                           <span>Developed heap memory tracking tools at OSLabs Beta</span>
                         </li>
                         <li class="flex items-start">
                           <span class="geometric-bullet"></span>
                           <span>Created SMART Web Applications for educational use</span>
                         </li>
                         <li class="flex items-start">
                           <span class="geometric-bullet"></span>
                           <span>Applied modern technology stack to education solutions</span>
                         </li>
                       </ul>
                     </div>
                     <div>
                       <h4 class="font-medium text-gray-800 mb-2">Educational Technology Integration</h4>
                       <ul class="space-y-1 text-gray-700 text-sm">
                         <li class="flex items-start">
                           <span class="geometric-bullet" style="background: #10b981;"></span>
                           <span>Integrated software tools into physics curriculum</span>
                         </li>
                         <li class="flex items-start">
                           <span class="geometric-bullet" style="background: #10b981;"></span>
                           <span>Enhanced data analysis capabilities in labs</span>
                         </li>
                         <li class="flex items-start">
                           <span class="geometric-bullet" style="background: #10b981;"></span>
                           <span>Created technology-enhanced assessment tools</span>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
               </div>
             </section>

             {/* Collaboration Example */}
             <section>
               <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-purple-600 mb-6">
                 Collaborative Professional Learning
               </h2>
               
               <div class="modern-card p-6 sm:p-8 bg-purple-50/50">
                 <h3 class="text-lg font-semibold text-purple-700 mb-4">
                   Cross-Curricular AP Physics Curriculum Development
                 </h3>
                 <div class="grid sm:grid-cols-2 gap-6">
                   <div>
                     <h4 class="font-medium text-gray-800 mb-3">The Collaboration</h4>
                     <p class="text-gray-700 text-sm mb-4">
                       As Curriculum Planner for AP Physics at North Star Academy, I collaborated with Content Directors, Instructional Leaders, and diverse teachers to design engaging, rigorous, college-ready instruction.
                     </p>
                     
                     <h4 class="font-medium text-gray-800 mb-3">My Contributions</h4>
                     <ul class="space-y-1 text-gray-700 text-sm">
                       <li class="flex items-start">
                         <span class="geometric-bullet"></span>
                         <span>Led physics content development and lab design</span>
                       </li>
                       <li class="flex items-start">
                         <span class="geometric-bullet"></span>
                         <span>Integrated educational technology solutions</span>
                       </li>
                     </ul>
                   </div>
                   
                   <div>
                     <h4 class="font-medium text-gray-800 mb-3">Professional Growth</h4>
                     <ul class="space-y-2 text-gray-700 text-sm">
                       <li class="flex items-start">
                         <span class="geometric-bullet" style="background: #8b5cf6;"></span>
                         <span><strong>Enhanced Leadership:</strong> Learned to facilitate diverse teams</span>
                       </li>
                       <li class="flex items-start">
                         <span class="geometric-bullet" style="background: #8b5cf6;"></span>
                         <span><strong>Improved Communication:</strong> Translate technical concepts effectively</span>
                       </li>
                       <li class="flex items-start">
                         <span class="geometric-bullet" style="background: #8b5cf6;"></span>
                         <span><strong>Data-Driven Decisions:</strong> Use student data to inform instruction</span>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
             </section>

             {/* Professional Goal */}
             <section>
               <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-red-600 mb-6">
                 Specific Professional Growth Goal
               </h2>
               
               <div class="modern-card p-6 sm:p-8 bg-red-50/50">
                 <div class="text-center mb-6">
                   <h3 class="text-xl sm:text-2xl font-bold text-red-700 mb-2">
                     Goal: Develop Comprehensive Educational Technology Platform for Physics Education
                   </h3>
                   <p class="text-gray-600 text-sm sm:text-base">
                     Timeline: 3-year development and implementation plan
                   </p>
                 </div>
                 
                 <div class="grid sm:grid-cols-2 gap-6">
                   <div>
                     <h4 class="font-semibold text-red-700 mb-3">Why This Goal?</h4>
                     <p class="text-gray-700 text-sm mb-4">
                       Building on my unique combination of physics education expertise and software engineering skills, I aim to create a platform that revolutionizes how students interact with physics concepts.
                     </p>
                     
                     <h4 class="font-semibold text-red-700 mb-3">Expected Outcomes</h4>
                     <ul class="space-y-1 text-gray-700 text-sm">
                       <li class="flex items-start">
                         <span class="geometric-bullet"></span>
                         <span>Enhanced student engagement in physics concepts</span>
                       </li>
                       <li class="flex items-start">
                         <span class="geometric-bullet"></span>
                         <span>Improved scientific thinking and data analysis skills</span>
                       </li>
                       <li class="flex items-start">
                         <span class="geometric-bullet"></span>
                         <span>Scalable solution for physics educators nationwide</span>
                       </li>
                     </ul>
                   </div>
                   
                   <div>
                     <h4 class="font-semibold text-red-700 mb-3">Success Indicators</h4>
                     <ul class="space-y-1 text-gray-700 text-sm">
                       <li class="flex items-start">
                         <span class="geometric-bullet" style="background: #dc2626;"></span>
                         <span>Platform adoption by 10+ educational institutions</span>
                       </li>
                       <li class="flex items-start">
                         <span class="geometric-bullet" style="background: #dc2626;"></span>
                         <span>Measurable improvement in student AP Physics scores</span>
                       </li>
                       <li class="flex items-start">
                         <span class="geometric-bullet" style="background: #dc2626;"></span>
                         <span>Recognition from physics education organizations</span>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
             </section>

             {/* Implementation Plan */}
             <section>
               <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-indigo-600 mb-6">
                 Goal Accomplishment Plan
               </h2>
               
               <div class="space-y-6">
                 <div class="modern-card p-6 sm:p-8 bg-indigo-50/50">
                   <h3 class="text-lg font-semibold text-indigo-700 mb-4">Year 1: Foundation Development</h3>
                   <div class="grid sm:grid-cols-2 gap-4">
                     <div>
                       <h4 class="font-medium text-gray-800 mb-2">Research & Planning</h4>
                       <ul class="space-y-1 text-gray-700 text-sm">
                         <li class="flex items-start">
                           <span class="geometric-bullet"></span>
                           <span>Conduct comprehensive needs assessment with physics educators</span>
                         </li>
                         <li class="flex items-start">
                           <span class="geometric-bullet"></span>
                           <span>Develop technical specifications and user requirements</span>
                         </li>
                       </ul>
                     </div>
                     <div>
                       <h4 class="font-medium text-gray-800 mb-2">Technical Development</h4>
                       <ul class="space-y-1 text-gray-700 text-sm">
                         <li class="flex items-start">
                           <span class="geometric-bullet" style="background: #6366f1;"></span>
                           <span>Build core platform architecture</span>
                         </li>
                         <li class="flex items-start">
                           <span class="geometric-bullet" style="background: #6366f1;"></span>
                           <span>Develop interactive simulation modules</span>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 
                 <div class="modern-card p-6 sm:p-8 bg-indigo-50/50">
                   <h3 class="text-lg font-semibold text-indigo-700 mb-4">Year 2-3: Implementation & Scale</h3>
                   <div class="grid sm:grid-cols-2 gap-4">
                     <div>
                       <h4 class="font-medium text-gray-800 mb-2">Beta Testing & Refinement</h4>
                       <ul class="space-y-1 text-gray-700 text-sm">
                         <li class="flex items-start">
                           <span class="geometric-bullet"></span>
                           <span>Launch beta version with select physics classes</span>
                         </li>
                         <li class="flex items-start">
                           <span class="geometric-bullet"></span>
                           <span>Collect extensive user feedback and usage data</span>
                         </li>
                       </ul>
                     </div>
                     <div>
                       <h4 class="font-medium text-gray-800 mb-2">Full Launch & Impact</h4>
                       <ul class="space-y-1 text-gray-700 text-sm">
                         <li class="flex items-start">
                           <span class="geometric-bullet" style="background: #6366f1;"></span>
                           <span>Full platform release to broader education community</span>
                         </li>
                         <li class="flex items-start">
                           <span class="geometric-bullet" style="background: #6366f1;"></span>
                           <span>Conduct comprehensive impact study on student outcomes</span>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
               </div>
             </section>

           </div>

           {/* Navigation */}
           <div class="text-center py-8 sm:py-12 mt-12">
             <div class="modern-card p-6 sm:p-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
               <h2 class="text-2xl sm:text-3xl font-bold mb-4">Explore My Complete Portfolio</h2>
               <p class="mb-6 opacity-90 text-base sm:text-lg">
                 Discover how my professional growth plans align with my teaching philosophy and experience.
               </p>
               <div class="flex flex-col sm:flex-row gap-4 justify-center">
                 <a href="/philosophy" class="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                   Teaching Philosophy
                 </a>
                 <a href="/resume" class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                   Professional Resume
                 </a>
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
