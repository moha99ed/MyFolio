
import { Head } from "$fresh/runtime.ts";
import MobileMenu from "../islands/MobileMenu.tsx";

export default function Philosophy() {
  return (
    <>
      <Head>
        <title>Teaching Philosophy - Mohammed Sebbagh</title>
        <meta name="description" content="My educational philosophy focused on hands-on physics education, building projects, and culturally responsive teaching." />
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
            <header class="text-center mb-12">
              <h1 class="text-3xl sm:text-5xl font-bold heading-font text-gray-900 mb-4">
                Teaching Philosophy Essay
              </h1>
              <div class="geometric-divider w-32 sm:w-48 mx-auto mb-6"></div>
              <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                My beliefs, methodologies, and commitment to hands-on, culturally responsive physics education
              </p>
            </header>

            {/* Content Sections */}
            <div class="space-y-12 sm:space-y-16">
              
              {/* Why Teaching is Important */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-blue-600 mb-6">
                  Why Teaching is Important to Me
                </h2>
                <div class="modern-card p-6 sm:p-8 bg-blue-50/50">
                  <p class="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                    Teaching physics matters to me because it's more than just formulas and equations. Physics helps students develop problem-solving skills and critical thinking they'll use their whole lives. My background in both physics and software engineering shows me how scientific thinking leads to real innovation and technology that changes the world.
                  </p>
                  <p class="text-gray-700 leading-relaxed text-base sm:text-lg">
                    I want my students to be prepared for whatever comes next in their lives. That means not just passing tests, but learning how to think scientifically, ask good questions, and solve problems they've never seen before. In today's world, these skills matter more than ever.
                  </p>
                </div>
              </section>

              {/* Professional Beliefs */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-green-600 mb-6">
                  My Beliefs About Teaching and Learning
                </h2>
                <div class="modern-card p-6 sm:p-8 bg-green-50/50 mb-6">
                  <p class="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                    I believe students learn physics best when they're actively doing things, not just sitting and listening. Here's what works in my classroom:
                  </p>
                </div>
                
                <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div class="modern-card p-4 sm:p-6 bg-green-50/50">
                    <h3 class="font-semibold text-green-700 mb-3">Students learn by building things</h3>
                    <p class="text-gray-700 text-sm sm:text-base">
                      Every unit includes hands-on projects where students construct something that demonstrates physics principles. This approach aligns with Vygotsky's (1978) social learning theory, which shows that students learn better through hands-on experience and working with others.
                    </p>
                  </div>
                  <div class="modern-card p-4 sm:p-6 bg-green-50/50">
                    <h3 class="font-semibold text-green-700 mb-3">Students learn by talking to each other</h3>
                    <p class="text-gray-700 text-sm sm:text-base">
                      When students explain physics concepts to their classmates, they understand better themselves. Eric Mazur's (1997) research on peer instruction proves that students who explain concepts to classmates understand physics better than students who just listen to lectures.
                    </p>
                  </div>
                  <div class="modern-card p-4 sm:p-6 bg-green-50/50">
                    <h3 class="font-semibold text-green-700 mb-3">Students need to see connections to their lives</h3>
                    <p class="text-gray-700 text-sm sm:text-base">
                      I try to be culturally responsive and make physics relevant to my students' backgrounds and interests. I want them to enjoy my class while learning something useful.
                    </p>
                  </div>
                  <div class="modern-card p-4 sm:p-6 bg-green-50/50">
                    <h3 class="font-semibold text-green-700 mb-3">Technology should enhance learning</h3>
                    <p class="text-gray-700 text-sm sm:text-base">
                      I want to be on the frontline of teachers using advanced technology like AI. Many teachers didn't like calculators because they thought students wouldn't learn mental math, but calculators became essential tools. I believe AI and other new technologies will become important for learning when used thoughtfully.
                    </p>
                  </div>
                </div>

                <div class="modern-card p-6 sm:p-8 bg-gray-50/50 mt-6">
                  <h3 class="text-xl font-semibold text-gray-800 mb-4">Research That Supports My Approach</h3>
                  <p class="text-gray-700 leading-relaxed text-base">
                    My teaching methods are based on proven research that supports hands-on, collaborative learning in physics education.
                  </p>
                </div>
              </section>

              {/* Student Outcomes */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-orange-600 mb-6">
                  What I Want Students to Learn
                </h2>
                <div class="modern-card p-6 sm:p-8 bg-orange-50/50">
                  <p class="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                    Beyond physics content, I want my students to develop several important skills:
                  </p>
                  <div class="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 class="font-semibold text-orange-700 mb-3">Problem-solving abilities</h3>
                      <p class="text-gray-700 text-sm sm:text-base mb-4">
                        Through building projects, students learn to break complex problems into steps, create plans, test solutions, and make improvements. These skills work in any career, not just science.
                      </p>
                    </div>
                    <div>
                      <h3 class="font-semibold text-orange-700 mb-3">Growth mindset</h3>
                      <p class="text-gray-700 text-sm sm:text-base mb-4">
                        When projects don't work the first time, students learn that failure is part of learning and leads to better solutions. This helps them tackle challenges throughout their lives.
                      </p>
                    </div>
                    <div>
                      <h3 class="font-semibold text-orange-700 mb-3">Hands-on skills</h3>
                      <p class="text-gray-700 text-sm sm:text-base mb-4">
                        Many of my students don't know how to use basic tools or build things. Through projects, they develop practical skills while learning physics principles. This also helps them see potential career paths in engineering and technology.
                      </p>
                    </div>
                    <div>
                      <h3 class="font-semibold text-orange-700 mb-3">Scientific thinking</h3>
                      <p class="text-gray-700 text-sm sm:text-base">
                        Students should be able to understand scientific concepts, evaluate claims they hear in the media, and use evidence to support their ideas.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Teaching Methods */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-purple-600 mb-6">
                  How I Teach to Achieve These Goals
                </h2>
                <div class="modern-card p-6 sm:p-8 bg-purple-50/50">
                  <div class="space-y-6">
                    <div>
                      <h3 class="font-semibold text-purple-700 mb-3">Building Projects</h3>
                      <p class="text-gray-700 text-sm sm:text-base mb-2">
                        Each unit starts or ends with a hands-on building project. Students follow engineering design principles and learn to use tools while applying physics concepts:
                      </p>
                      <ul class="text-sm space-y-1 text-gray-700 ml-4">
                        <li>• Balloon racers for kinematics</li>
                        <li>• Paper roller coasters for energy</li>
                        <li>• Egg drop challenges for momentum</li>
                        <li>• Handmade instruments for sound</li>
                        <li>• Paper airplanes for fluids</li>
                      </ul>
                    </div>
                    <div>
                      <h3 class="font-semibold text-purple-700 mb-3">Group Work</h3>
                      <p class="text-gray-700 text-sm sm:text-base">
                        Students work in teams on building challenges and problem-solving activities. This develops both physics understanding and communication skills.
                      </p>
                    </div>
                    <div>
                      <h3 class="font-semibold text-purple-700 mb-3">Culturally Responsive Teaching</h3>
                      <p class="text-gray-700 text-sm sm:text-base">
                        I connect projects to students' interests and backgrounds to make physics enjoyable and relevant to their lives.
                      </p>
                    </div>
                    <div>
                      <h3 class="font-semibold text-purple-700 mb-3">Technology Integration</h3>
                      <p class="text-gray-700 text-sm sm:text-base">
                        I use simulations, data collection tools, and emerging technologies like AI to enhance learning while teaching digital literacy skills.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Assessment Strategies */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-indigo-600 mb-6">
                  How I Assess Student Learning
                </h2>
                <div class="modern-card p-6 sm:p-8 bg-indigo-50/50">
                  <div class="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 class="font-semibold text-indigo-700 mb-3">During Learning</h3>
                      <p class="text-gray-700 text-sm sm:text-base mb-3">
                        I use lab observations, peer discussions, and quick check-ins to see what students understand daily. This helps me adjust my teaching in real time.
                      </p>
                    </div>
                    <div>
                      <h3 class="font-semibold text-indigo-700 mb-3">End of Unit</h3>
                      <p class="text-gray-700 text-sm sm:text-base mb-3">
                        Students complete building projects and explain their design choices using physics principles. They also write about their problem-solving process and what they learned from failures and improvements.
                      </p>
                    </div>
                  </div>
                  <p class="text-gray-700 text-sm sm:text-base mt-4">
                    These assessments focus on understanding and application rather than memorization, which gives me better information about what students can actually do with physics knowledge.
                  </p>
                </div>
              </section>

              {/* Building Relationships */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-teal-600 mb-6">
                  Building Positive Relationships
                </h2>
                <div class="grid sm:grid-cols-3 gap-4 sm:gap-6">
                  <div class="modern-card p-4 sm:p-6 bg-teal-50/50">
                    <h3 class="font-semibold text-teal-700 mb-3">With Students</h3>
                    <p class="text-gray-700 text-sm sm:text-base">
                      I create a classroom where students feel safe making mistakes and taking risks. I build trust by being consistent, giving specific feedback, and showing genuine interest in each student's success.
                    </p>
                  </div>
                  <div class="modern-card p-4 sm:p-6 bg-teal-50/50">
                    <h3 class="font-semibold text-teal-700 mb-3">With Families</h3>
                    <p class="text-gray-700 text-sm sm:text-base">
                      I communicate regularly with parents about student progress and give specific suggestions for supporting learning at home. I help parents understand why hands-on, project-based learning is more effective than traditional lecture methods.
                    </p>
                  </div>
                  <div class="modern-card p-4 sm:p-6 bg-teal-50/50">
                    <h3 class="font-semibold text-teal-700 mb-3">With Colleagues</h3>
                    <p class="text-gray-700 text-sm sm:text-base">
                      I value working with other teachers and sharing what I've learned. I lead professional development sessions on educational technology and learn from other teachers' expertise.
                    </p>
                  </div>
                </div>

                <div class="modern-card p-6 sm:p-8 bg-teal-50/50 mt-6">
                  <h3 class="text-xl font-semibold text-teal-800 mb-4">How My Actions Impact These Relationships</h3>
                  <p class="text-gray-700 leading-relaxed text-base mb-4">
                    When I differentiate instruction for different learning styles, I show students that I believe everyone can learn physics with the right support. When I give detailed, timely feedback on projects, students know I care about their learning and want to help them improve.
                  </p>
                  <p class="text-gray-700 leading-relaxed text-base">
                    When I use technology thoughtfully, I show respect for students as digital natives while keeping the focus on learning. When I share resources with colleagues and lead professional development, I contribute to a better learning environment for all students.
                  </p>
                </div>
              </section>

              {/* Conclusion */}
              <section>
                <div class="modern-card p-6 sm:p-8 bg-gray-50/50 text-center">
                  <p class="text-gray-700 leading-relaxed text-base sm:text-lg">
                    My goal is to create an environment where all students can succeed in physics by building things, working together, and connecting science to their lives and futures.
                  </p>
                </div>
              </section>

              {/* References */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-gray-600 mb-6">
                  References
                </h2>
                <div class="modern-card p-6 sm:p-8 bg-gray-50/50">
                  <div class="text-sm text-gray-700 space-y-2">
                    <p>Mazur, E. (1997). <em>Peer instruction: A user's manual</em>. Prentice Hall.</p>
                    <p>Vygotsky, L. S. (1978). <em>Mind in society: The development of higher psychological processes</em>. Harvard University Press.</p>
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