import { Head } from "$fresh/runtime.ts";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Professional Resume - Mohammed Sebbagh</title>
        <meta name="description" content="Professional physics teaching resume including education, certifications, experience, and achievements." />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      
      <div class="min-h-screen bg-gray-50">
        {/* Header */}
        <header class="bg-white shadow-sm border-b">
          <div class="container mx-auto px-4 py-4 max-w-4xl">
            <div class="flex items-center justify-between">
              <div>
                <h1 class="text-2xl font-bold text-gray-800">Mohammed Sebbagh</h1>
                <p class="text-gray-600">Physics Teacher & Educational Technology Developer</p>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav class="bg-gray-100 border-b">
          <div class="container mx-auto px-4 max-w-4xl">
            <ul class="flex space-x-8 py-4">
              <li><a href="/" class="font-medium text-gray-700 hover:text-blue-600">Home</a></li>
              <li><a href="/philosophy" class="font-medium text-gray-700 hover:text-blue-600">Teaching Philosophy</a></li>
              <li><a href="/resume" class="font-medium text-blue-600 border-b-2 border-blue-600 pb-1">Resume</a></li>
              <li><a href="/growth-plan" class="font-medium text-gray-700 hover:text-blue-600">Growth Plan</a></li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main class="container mx-auto px-4 py-8 max-w-4xl">
          <div class="bg-white rounded-lg shadow-lg p-8">
            {/* Header */}
            <div class="text-center mb-8">
              <h1 class="text-4xl font-bold text-gray-800 mb-2">Mohammed Sebbagh</h1>
              <p class="text-xl text-gray-600 mb-4">Physics Teacher & Educational Technology Developer</p>
              <div class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600">
                <span>mohammedsebbagh@gmail.com</span>
                <span>201-898-6407</span>
                <span>New Jersey</span>
              </div>
            </div>

            {/* Professional Summary */}
            <section class="mb-8">
              <h2 class="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-100 pb-2">Professional Summary</h2>
              <div class="bg-blue-50 p-6 rounded-lg">
                <p class="text-gray-700 leading-relaxed">
                  Dedicated physics educator with 5+ years of experience in secondary education, combining strong scientific background with innovative educational technology development. Proven track record of developing students' scientific thinking skills through inquiry-based learning, interactive labs, and collaborative projects. Experienced in AP Physics curriculum development, team leadership, and cross-functional collaboration. Unique blend of physics education expertise and software engineering skills enables innovative approaches to teaching and learning.
                </p>
              </div>
            </section>

            {/* Education */}
            <section class="mb-8">
              <h2 class="text-2xl font-semibold text-green-600 mb-4 border-b-2 border-green-100 pb-2">Education</h2>
              <div class="bg-green-50 p-6 rounded-lg">
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <h3 class="text-lg font-semibold text-green-700">Bachelor of Science in Applied Physics</h3>
                    <p class="text-gray-700 font-medium">Optical Science and Engineering</p>
                    <p class="text-gray-700">New Jersey Institute of Technology (NJIT), Newark, NJ</p>
                  </div>
                  <span class="text-gray-600 font-medium">December 2017</span>
                </div>
                <p class="text-gray-600 text-sm">
                  Specialized in optical science and engineering with comprehensive foundation in physics principles, 
                  mathematical modeling, and scientific research methodologies.
                </p>
              </div>
            </section>

            {/* Languages & Skills */}
            <section class="mb-8">
              <h2 class="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-100 pb-2">Languages & Technical Skills</h2>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-purple-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-purple-700 mb-2">Languages</h3>
                  <p class="text-sm text-gray-600">English, Arabic, French</p>
                </div>
                <div class="bg-purple-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-purple-700 mb-2">Technical Skills</h3>
                  <p class="text-sm text-gray-600">Software Engineering, Educational Technology Development, Data Analysis Tools</p>
                </div>
              </div>
            </section>

            {/* Teaching Experience */}
            <section class="mb-8">
              <h2 class="text-2xl font-semibold text-orange-600 mb-4 border-b-2 border-orange-100 pb-2">Teaching Experience</h2>
              <div class="space-y-6">
                
                {/* Current Position */}
                <div class="bg-orange-50 p-6 rounded-lg">
                  <div class="flex justify-between items-start mb-3">
                    <div>
                      <h3 class="text-lg font-semibold text-orange-700">Physics Teacher</h3>
                      <p class="text-gray-700 font-medium">Union City Board Of Education</p>
                      <p class="text-gray-600">Union City, NJ</p>
                    </div>
                    <span class="text-gray-600 font-medium">2023 - Present</span>
                  </div>
                  <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    <li>Developed students' questioning, modeling, explaining, data analysis, argumentation, and strategic thinking skills through interactive labs and projects</li>
                    <li>Cultivated supportive learning environment that encouraged student engagement and participation in scientific discourse</li>
                    <li>Facilitated student-led inquiries on various scientific topics, fostering critical thinking and exploration</li>
                    <li>Collaborated with students' families to ensure access to appropriate resources for supporting their child's learning</li>
                  </ul>
                </div>

                {/* North Star Academy */}
                <div class="bg-orange-50 p-6 rounded-lg">
                  <div class="flex justify-between items-start mb-3">
                    <div>
                      <h3 class="text-lg font-semibold text-orange-700">Teacher (AP Physics and General Physics)</h3>
                      <p class="text-gray-700 font-medium">North Star Academy Charter School Newark</p>
                      <p class="text-gray-600">Newark, NJ</p>
                    </div>
                    <span class="text-gray-600 font-medium">2018 - 2022</span>
                  </div>
                  
                  {/* Leadership Roles */}
                  <div class="mb-4">
                    <h4 class="font-semibold text-gray-800 mb-2">Leadership Positions:</h4>
                    <div class="ml-4 space-y-3">
                      <div>
                        <h5 class="font-medium text-orange-600">11th Grade Team Lead (2021-2022)</h5>
                        <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                          <li>Developed and maintained class bulletin board to enhance classroom engagement</li>
                          <li>Conducted classroom environmental walkthroughs to assess and improve learning environment</li>
                          <li>Co-created agendas and facilitated cross-functional team meetings to foster collaboration</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 class="font-medium text-orange-600">Curriculum Planner for AP Physics (2021-2022)</h5>
                        <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                          <li>Collaborated with Content Directors, Instructional Leaders, and diverse group of teachers to design engaging, rigorous, college-ready, and culturally sustaining instruction</li>
                          <li>Delivered yearlong professional development sessions to enhance content knowledge, curriculum design, pedagogical practice, data analysis, and leadership skills</li>
                          <li>Aligned program with high school-wide priorities, piloted innovative approaches, and incorporated feedback to improve student achievement</li>
                          <li>Ensured organizational initiatives were integrated into curriculum while staying current with college readiness advancements</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Teaching Responsibilities */}
                  <div class="mb-4">
                    <h4 class="font-semibold text-gray-800 mb-2">Teaching Responsibilities:</h4>
                    <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                      <li>Instructed and mentored 80+ students across multiple classes, preparing them for AP Physics and collegiate-level coursework</li>
                      <li>Developed students' scientific thinking skills through interactive labs and hands-on projects</li>
                      <li>Cultivated supportive learning environment encouraging student engagement in scientific discourse</li>
                      <li>Facilitated student-led inquiries fostering critical thinking and exploration</li>
                      <li>Collaborated with families to ensure access to appropriate learning resources</li>
                    </ul>
                  </div>

                  {/* Professional Development */}
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-2">Professional Development & Collaboration:</h4>
                    <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                      <li>Engaged in practice-based professional development, mentorship, and coaching sessions</li>
                      <li>Collaborated with grade level team members to set academic goals and implement effective instructional strategies</li>
                    </ul>
                  </div>
                </div>

                {/* Teaching Assistant */}
                <div class="bg-orange-50 p-6 rounded-lg">
                  <div class="flex justify-between items-start mb-3">
                    <div>
                      <h3 class="text-lg font-semibold text-orange-700">Teaching Assistant</h3>
                      <p class="text-gray-700 font-medium">Center of Pre-College Programs (NJIT)</p>
                      <p class="text-gray-600">Newark, NJ</p>
                    </div>
                    <span class="text-gray-600 font-medium">Summer 2017</span>
                  </div>
                  <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    <li>Supervised group of high school students in class, on campus and off campus field trips</li>
                    <li>Assisted instructors in activities related to students and monitored behavior in and outside classrooms</li>
                    <li>Mentored students with personal emphasis on building positive bonds</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Technology Experience */}
            <section class="mb-8">
              <h2 class="text-2xl font-semibold text-red-600 mb-4 border-b-2 border-red-100 pb-2">Technology & Software Development Experience</h2>
              <div class="bg-red-50 p-6 rounded-lg">
                <div class="flex justify-between items-start mb-3">
                  <div>
                    <h3 class="text-lg font-semibold text-red-700">Software Engineer</h3>
                    <p class="text-gray-700 font-medium">OSLabs Beta</p>
                  </div>
                  <span class="text-gray-600 font-medium">2022 - 2023</span>
                </div>
                <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Built developer tool that helps developers track heap memory usage using modern technology stack</li>
                  <li>Developed various open source projects to ease teaching experience (SMART Web Application)</li>
                  <li>Applied software engineering principles to create educational technology solutions</li>
                  <li>Demonstrated ability to bridge technology and education through innovative tool development</li>
                </ul>
              </div>
            </section>

            {/* Core Competencies */}
            <section class="mb-8">
              <h2 class="text-2xl font-semibold text-indigo-600 mb-4 border-b-2 border-indigo-100 pb-2">Core Competencies</h2>
              <div class="bg-indigo-50 p-6 rounded-lg">
                <div class="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 class="font-semibold text-indigo-700 mb-3">Physics Education</h3>
                    <ul class="space-y-1 text-gray-700 text-sm">
                      <li>• AP Physics Curriculum Development</li>
                      <li>• Inquiry-Based Learning</li>
                      <li>• Scientific Discourse Facilitation</li>
                      <li>• Interactive Lab Design</li>
                      <li>• Student-Led Investigations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="font-semibold text-indigo-700 mb-3">Educational Technology</h3>
                    <ul class="space-y-1 text-gray-700 text-sm">
                      <li>• Software Development</li>
                      <li>• Educational App Creation</li>
                      <li>• SMART Web Applications</li>
                      <li>• Memory Usage Tracking Tools</li>
                      <li>• Open Source Development</li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="font-semibold text-indigo-700 mb-3">Leadership & Collaboration</h3>
                    <ul class="space-y-1 text-gray-700 text-sm">
                      <li>• Team Leadership (11th Grade)</li>
                      <li>• Curriculum Planning</li>
                      <li>• Professional Development Delivery</li>
                      <li>• Cross-Functional Collaboration</li>
                      <li>• Family Partnership</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Achievements */}
            <section class="mb-8">
              <h2 class="text-2xl font-semibold text-teal-600 mb-4 border-b-2 border-teal-100 pb-2">Professional Achievements</h2>
              <div class="bg-teal-50 p-6 rounded-lg">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 class="font-semibold text-teal-700 mb-3">Teaching Excellence</h3>
                    <ul class="space-y-2 text-gray-700 text-sm">
                      <li>• Successfully mentored 80+ students in AP Physics preparation</li>
                      <li>• Led curriculum development for college-ready physics instruction</li>
                      <li>• Delivered professional development sessions school-wide</li>
                      <li>• Developed innovative approaches to scientific thinking skills</li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="font-semibold text-teal-700 mb-3">Technology Innovation</h3>
                    <ul class="space-y-2 text-gray-700 text-sm">
                      <li>• Created SMART Web Application for educational use</li>
                      <li>• Developed developer tools for memory usage tracking</li>
                      <li>• Contributed to open source educational projects</li>
                      <li>• Integrated technology solutions into physics education</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Download/Print Section */}
          <div class="text-center py-8">
            <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg">
              <h2 class="text-2xl font-bold mb-4">Ready to Connect?</h2>
              <p class="mb-6 opacity-90">
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
        </main>
      </div>
    </>
  );
}
