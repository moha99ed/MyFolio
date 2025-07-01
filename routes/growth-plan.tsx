
import { Head } from "$fresh/runtime.ts";
import MobileMenu from "../islands/MobileMenu.tsx";

export default function GrowthPlan() {
  return (
    <>
      <Head>
        <title>Professional Growth Plan - Mohammed Sebbagh</title>
        <meta name="description" content="Individualized professional growth plan focused on culturally responsive physics education and continuous improvement." />
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
                  <a href="/artifacts" class="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 transition-colors">Artifacts</a>
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
                Individualized Professional Growth Plan
              </h1>
              <div class="geometric-divider w-32 sm:w-48 mx-auto mb-6"></div>
              <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                My journey in developing culturally responsive physics education and leveraging technology for enhanced student learning
              </p>
            </header>

            <div class="space-y-12 sm:space-y-16">
              
              {/* How I Have Developed */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-blue-600 mb-6">
                  How I Have Developed as a Teacher
                </h2>
                <div class="modern-card p-6 sm:p-8 bg-blue-50/50 mb-6">
                  <p class="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                    When I started teaching physics seven years ago, I thought having strong content knowledge was enough. I knew physics well from my applied physics degree, and I figured I could just explain concepts clearly and students would learn. I quickly discovered that knowing physics and teaching physics are two completely different skills.
                  </p>
                  <p class="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                    My biggest growth has been learning that students don't all learn the same way. Some need to see concepts visually, others need to build things with their hands, and many need to connect physics to their own lives and experiences. This realization changed everything about how I approach teaching.
                  </p>
                  <p class="text-gray-700 leading-relaxed text-base sm:text-lg">
                    The other major area of growth has been understanding how to use technology effectively. My software engineering background gave me technical skills, but I had to learn when and how to use technology to actually improve learning rather than just making lessons look modern. I've learned that technology should solve real problems in the classroom, not just replace traditional tools.
                  </p>
                </div>
              </section>

              {/* Professional Development Activities */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-green-600 mb-6">
                  Professional Development Activities
                </h2>
                
                <div class="space-y-6">
                  <div class="modern-card p-6 sm:p-8 bg-green-50/50">
                    <h3 class="text-lg font-semibold text-green-700 mb-4">Formal Coursework and Training</h3>
                    <p class="text-gray-700 leading-relaxed text-base mb-4">
                      My master's program in Science Education at Western Governors University, which I expect to complete in July 2025, has been the foundation of my development as a teacher. The coursework helped me understand learning theory and research-based teaching methods. Before this program, I was teaching based on how I learned physics in college, which didn't work for most of my high school students.
                    </p>
                    <p class="text-gray-700 leading-relaxed text-base mb-4">
                      The program introduced me to the SAMR model (Puentedura, 2006) for technology integration and differentiated instruction strategies. Learning about SAMR helped me move from just using technology as a substitute for traditional tools to actually transforming how students learn. The differentiated instruction coursework showed me how to adapt lessons for different learning styles and student needs based on Gardner's (1983) theory of multiple intelligences.
                    </p>
                    <p class="text-gray-700 leading-relaxed text-base">
                      Most recently, I completed a 15-hour professional development series called "Transforming Science Practice with Culturally Relevant Teaching: Foundations" through the Inspire Institute in April 2025. This training gave me specific strategies for connecting physics concepts to students' cultural backgrounds and life experiences. I learned how to make my building projects more inclusive and relevant to students from different backgrounds.
                    </p>
                  </div>

                  <div class="modern-card p-6 sm:p-8 bg-green-50/50">
                    <h3 class="text-lg font-semibold text-green-700 mb-4">Self-Directed Learning</h3>
                    <p class="text-gray-700 leading-relaxed text-base mb-4">
                      Beyond my formal coursework, I've done extensive learning on my own about educational technology integration. This research helped me create automated grade tracking tools and develop Chrome extensions that save teachers time on administrative tasks.
                    </p>
                    <p class="text-gray-700 leading-relaxed text-base">
                      I've also researched project-based learning and engineering design processes. This research helped me develop the building projects I use in each unit, from balloon racers to egg drop challenges. Learning about the engineering design process gave me a framework for helping students work through problems systematically.
                    </p>
                  </div>
                </div>
              </section>

              {/* Collaboration Example */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-purple-600 mb-6">
                  Specific Example of Collaboration with a Colleague
                </h2>
                
                <div class="modern-card p-6 sm:p-8 bg-purple-50/50">
                  <p class="text-gray-700 leading-relaxed text-base mb-4">
                    One of the most impactful collaborations happened when I worked with a fellow physics teacher to redesign our approach to teaching Newton's Laws. We both noticed that students were struggling to connect the abstract concepts to real-world applications, especially when working with force diagrams and problem-solving.
                  </p>
                  <p class="text-gray-700 leading-relaxed text-base mb-4">
                    We spent several weeks planning together, sharing different demonstration ideas and lab activities. My colleague had been using traditional textbook problems, while I had been focusing more on building projects. We decided to combine both approaches, creating a unit that started with hands-on building challenges and then moved to more formal problem-solving.
                  </p>
                  <p class="text-gray-700 leading-relaxed text-base mb-4">
                    The collaboration resulted in much better student understanding of force concepts. Students could explain Newton's Laws using examples from their building projects, and they performed better on traditional physics problems because they had concrete experiences to connect to abstract concepts.
                  </p>
                  <p class="text-gray-700 leading-relaxed text-base">
                    This experience taught me the value of working with other physics teachers who have different strengths and approaches. Now I regularly share ideas with colleagues and ask for feedback on new activities I'm developing.
                  </p>
                </div>
              </section>

              {/* Professional Organization Resources */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-orange-600 mb-6">
                  Utilizing Professional Education Organization Resources
                </h2>
                
                <div class="modern-card p-6 sm:p-8 bg-orange-50/50">
                  <p class="text-gray-700 leading-relaxed text-base mb-4">
                    Engineering Tomorrow (engineeringtomorrow.org) has been my most valuable professional resource. I joined this organization to access free engineering and physics education resources and participate in their live workshops and lab sessions.
                  </p>
                  <p class="text-gray-700 leading-relaxed text-base mb-4">
                    Before using Engineering Tomorrow resources, I was creating most of my building projects from scratch without much guidance on best practices for engineering design in the classroom. I knew I wanted students to build things, but I wasn't sure how to structure the activities to maximize learning.
                  </p>
                  <p class="text-gray-700 leading-relaxed text-base mb-4">
                    After joining Engineering Tomorrow and participating in their workshops, I learned how to better integrate engineering design principles into my physics projects. Their resources showed me how to guide students through the design process more effectively - from creating blueprints to building prototypes to testing and improving their designs.
                  </p>
                  <p class="text-gray-700 leading-relaxed text-base mb-4">
                    The live lab sessions were particularly helpful because I could see experienced educators demonstrate activities and ask questions in real time. I learned new project ideas that I adapted for my classroom, like improving my egg drop challenge design and creating better assessment rubrics for building projects.
                  </p>
                  <p class="text-gray-700 leading-relaxed text-base">
                    Most importantly, Engineering Tomorrow resources helped me understand how to connect physics concepts to real-world engineering applications. This made my projects more meaningful for students and helped them see potential career paths in engineering and technology fields.
                  </p>
                </div>
              </section>

              {/* Professional Goal */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-red-600 mb-6">
                  Specific Goal for How I Want to Improve as a Teacher
                </h2>
                
                <div class="modern-card p-6 sm:p-8 bg-red-50/50">
                  <p class="text-gray-700 leading-relaxed text-base mb-4">
                    My main goal for the next year is to get better at connecting physics concepts to my students' cultural backgrounds and lived experiences. While I've made progress creating engaging, hands-on lessons, I want to make physics more relevant and meaningful for students from diverse backgrounds.
                  </p>
                  <p class="text-gray-700 leading-relaxed text-base mb-4">
                    Many of my current students come from different cultural and linguistic backgrounds than I do. I want to learn how to incorporate examples, applications, and project ideas that reflect their communities and experiences. This means going beyond just making lessons "fun" to making them truly connected to students' lives outside school.
                  </p>
                  
                  <div class="bg-white/70 rounded-lg p-4 mb-4">
                    <h4 class="font-semibold text-red-700 mb-3">Specifically, I want to develop skills in:</h4>
                    <ul class="space-y-2 text-gray-700 text-sm">
                      <li class="flex items-start">
                        <span class="geometric-bullet"></span>
                        <span>Finding physics applications that connect to students' home cultures and communities</span>
                      </li>
                      <li class="flex items-start">
                        <span class="geometric-bullet"></span>
                        <span>Using examples and contexts that all students can relate to, not just mainstream American experiences</span>
                      </li>
                      <li class="flex items-start">
                        <span class="geometric-bullet"></span>
                        <span>Understanding how cultural factors might influence how students approach learning and problem-solving</span>
                      </li>
                      <li class="flex items-start">
                        <span class="geometric-bullet"></span>
                        <span>Creating an inclusive classroom environment where all students see themselves as capable physics learners</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Goal Accomplishment Plan */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-indigo-600 mb-6">
                  How I Will Accomplish This Goal
                </h2>
                
                <div class="space-y-6">
                  <div class="modern-card p-6 sm:p-8 bg-indigo-50/50">
                    <h3 class="text-lg font-semibold text-indigo-700 mb-4">Formal Learning Opportunities</h3>
                    <p class="text-gray-700 leading-relaxed text-base mb-4">
                      I plan to enroll in a graduate-level course on multicultural education or culturally responsive science teaching at a local university. This will give me deeper theoretical understanding and practical strategies for inclusive education.
                    </p>
                    <p class="text-gray-700 leading-relaxed text-base">
                      I will also attend the National Science Teachers Association (NSTA) conference, particularly sessions focused on equity and inclusion in science education. These conferences provide both research-based strategies and practical classroom ideas from teachers working with diverse student populations.
                    </p>
                  </div>

                  <div class="modern-card p-6 sm:p-8 bg-indigo-50/50">
                    <h3 class="text-lg font-semibold text-indigo-700 mb-4">Professional Reading and Research</h3>
                    <p class="text-gray-700 leading-relaxed text-base mb-4">
                      I'm reading "Culturally Responsive Teaching: Theory, Research, and Practice" by Geneva Gay (2018) to better understand how culture influences learning. I'm also exploring research on multicultural science education and effective practices for English language learners in science classrooms.
                    </p>
                    <p class="text-gray-700 leading-relaxed text-base">
                      I plan to research physics applications and examples from different cultures and communities. This includes learning about traditional technologies and scientific practices from various cultures that demonstrate physics principles.
                    </p>
                  </div>

                  <div class="modern-card p-6 sm:p-8 bg-indigo-50/50">
                    <h3 class="text-lg font-semibold text-indigo-700 mb-4">Classroom Action Research</h3>
                    <p class="text-gray-700 leading-relaxed text-base mb-4">
                      I will conduct action research in my own classroom to document how culturally responsive strategies affect student engagement and learning. This will involve surveying students about their interests, backgrounds, and career goals; tracking participation rates and academic performance across different student groups; and collecting feedback on which activities and examples students find most relevant and engaging.
                    </p>
                  </div>

                  <div class="modern-card p-6 sm:p-8 bg-indigo-50/50">
                    <h3 class="text-lg font-semibold text-indigo-700 mb-4">Community Engagement and Collaboration</h3>
                    <p class="text-gray-700 leading-relaxed text-base mb-4">
                      I want to develop partnerships with local community organizations to find ways to connect physics concepts to local issues and student interests. This might include working with environmental groups to study local pollution or energy issues, collaborating with engineering firms to show students career pathways and real applications, and connecting with cultural organizations to learn about traditional technologies.
                    </p>
                    <p class="text-gray-700 leading-relaxed text-base">
                      I will also work with colleagues from diverse backgrounds to learn about different cultural perspectives on science and education, seeking mentorship from teachers who have successfully implemented culturally responsive practices in their classrooms.
                    </p>
                  </div>
                </div>
              </section>

              {/* Measuring Success */}
              <section>
                <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-teal-600 mb-6">
                  Measuring Success
                </h2>
                
                <div class="modern-card p-6 sm:p-8 bg-teal-50/50">
                  <p class="text-gray-700 leading-relaxed text-base mb-4">
                    I will know I'm making progress when students from all backgrounds participate more actively in class discussions and activities, academic performance gaps between different student groups decrease, and students express greater interest in physics and see connections to their lives and potential careers.
                  </p>
                  <p class="text-gray-700 leading-relaxed text-base mb-4">
                    I will document my growth through reflective journaling, student feedback surveys, and regular check-ins with mentors and colleagues. I'll also track quantitative measures like participation rates, assignment completion, and assessment performance across different student groups.
                  </p>
                  <p class="text-gray-700 leading-relaxed text-base">
                    This goal aligns with my commitment to ensuring that all students can succeed in physics, regardless of their background. By making physics more culturally responsive and relevant, I can help all students see themselves as capable science learners and potential STEM professionals.
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
                    <p>Gardner, H. (1983). <em>Frames of mind: The theory of multiple intelligences</em>. Basic Books.</p>
                    <p>Gay, G. (2018). <em>Culturally responsive teaching: Theory, research, and practice</em> (3rd ed.). Teachers College Press.</p>
                    <p>Puentedura, R. R. (2006). Transformation, technology, and education. Retrieved from http://hippasus.com/resources/tte/</p>
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