import { Head } from "$fresh/runtime.ts";

export default function Philosophy() {
  return (
    <>
      <Head>
        <title>Teaching Philosophy - Mohammed Sebbagh</title>
        <meta name="description" content="My educational philosophy focused on inquiry-based physics education and scientific discourse." />
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
              <li><a href="/philosophy" class="font-medium text-blue-600 border-b-2 border-blue-600 pb-1">Teaching Philosophy</a></li>
              <li><a href="/resume" class="font-medium text-gray-700 hover:text-blue-600">Resume</a></li>
              <li><a href="/growth-plan" class="font-medium text-gray-700 hover:text-blue-600">Growth Plan</a></li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main class="container mx-auto px-4 py-8 max-w-4xl">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <header class="text-center mb-12">
              <h1 class="text-4xl font-bold text-gray-800 mb-4">Teaching Philosophy</h1>
              <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Developing scientific thinking through inquiry-based learning, hands-on exploration, and meaningful discourse
              </p>
            </header>

            {/* Why Teaching is Important */}
            <section class="mb-12">
              <h2 class="text-2xl font-semibold text-blue-600 mb-6 border-b-2 border-blue-100 pb-2">
                Why Physics Education is Important to Me
              </h2>
              <div class="bg-blue-50 p-6 rounded-lg mb-6">
                <p class="text-gray-700 leading-relaxed">
                  Physics education is more than teaching formulas and equations—it's about developing critical thinking, problem-solving, and scientific reasoning skills that students will use throughout their lives. As someone with both a physics background and software engineering experience, I understand how scientific thinking translates into real-world innovation and technological advancement. Every student who learns to question, model, and analyze the world around them becomes equipped to tackle complex challenges in any field they choose.
                </p>
              </div>
            </section>

            {/* Professional Beliefs */}
            <section class="mb-12">
              <h2 class="text-2xl font-semibold text-green-600 mb-6 border-b-2 border-green-100 pb-2">
                My Beliefs About Teaching and Learning Physics
              </h2>
              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div class="bg-green-50 p-6 rounded-lg">
                  <h3 class="font-semibold text-green-700 mb-3">Inquiry-Based Learning</h3>
                  <p class="text-gray-700 text-sm">
                    Students learn best when they ask questions, form hypotheses, and conduct investigations to discover scientific principles themselves.
                  </p>
                </div>
                <div class="bg-green-50 p-6 rounded-lg">
                  <h3 class="font-semibold text-green-700 mb-3">Scientific Discourse</h3>
                  <p class="text-gray-700 text-sm">
                    Learning happens through discussion, debate, and collaborative exploration of scientific concepts and real-world applications.
                  </p>
                </div>
                <div class="bg-green-50 p-6 rounded-lg">
                  <h3 class="font-semibold text-green-700 mb-3">Hands-On Exploration</h3>
                  <p class="text-gray-700 text-sm">
                    Interactive labs and projects develop students' ability to model, explain, and analyze scientific phenomena.
                  </p>
                </div>
                <div class="bg-green-50 p-6 rounded-lg">
                  <h3 class="font-semibold text-green-700 mb-3">Technology Integration</h3>
                  <p class="text-gray-700 text-sm">
                    Modern technology tools enhance learning and prepare students for the digital world they'll enter.
                  </p>
                </div>
              </div>
            </section>

            {/* Desired Outcomes */}
            <section class="mb-12">
              <h2 class="text-2xl font-semibold text-orange-600 mb-6 border-b-2 border-orange-100 pb-2">
                Desired Student Outcomes
              </h2>
              <div class="bg-orange-50 p-6 rounded-lg">
                <p class="text-gray-700 leading-relaxed mb-4">
                  Based on my experience developing students' scientific thinking skills, I strive to foster:
                </p>
                <div class="grid md:grid-cols-2 gap-4">
                  <ul class="space-y-2 text-gray-700">
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                      <span><strong>Questioning Skills:</strong> Ability to ask meaningful scientific questions</span>
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                      <span><strong>Modeling & Explaining:</strong> Representing and communicating scientific concepts</span>
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                      <span><strong>Data Analysis:</strong> Interpreting and drawing conclusions from evidence</span>
                    </li>
                  </ul>
                  <ul class="space-y-2 text-gray-700">
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                      <span><strong>Argumentation:</strong> Building evidence-based scientific arguments</span>
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                      <span><strong>Strategic Thinking:</strong> Approaching complex problems systematically</span>
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                      <span><strong>College Readiness:</strong> Preparation for AP Physics and collegiate coursework</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Teaching Methods */}
            <section class="mb-12">
              <h2 class="text-2xl font-semibold text-red-600 mb-6 border-b-2 border-red-100 pb-2">
                Teaching Methods and Instructional Strategies
              </h2>
              <div class="bg-red-50 p-6 rounded-lg">
                <h3 class="font-semibold text-red-700 mb-4">Evidence-Based Practices from My Experience</h3>
                <ul class="space-y-3 text-gray-700">
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                    <span><strong>Interactive Labs & Projects:</strong> Hands-on exploration that develops scientific thinking skills through direct manipulation and observation</span>
                  </li>
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                    <span><strong>Student-Led Inquiries:</strong> Facilitating student-driven investigations on scientific topics to foster ownership and critical thinking</span>
                  </li>
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                    <span><strong>Scientific Discourse:</strong> Creating supportive environments that encourage student participation in meaningful scientific discussions</span>
                  </li>
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                    <span><strong>Technology Integration:</strong> Leveraging educational technology tools and my software development background to enhance learning experiences</span>
                  </li>
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                    <span><strong>AP & College Preparation:</strong> Rigorous, college-ready instruction that prepares students for advanced coursework</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Assessment Strategies */}
            <section class="mb-12">
              <h2 class="text-2xl font-semibold text-indigo-600 mb-6 border-b-2 border-indigo-100 pb-2">
                Assessment Strategies
              </h2>
              <div class="bg-indigo-50 p-6 rounded-lg">
                <p class="text-gray-700 leading-relaxed mb-4">
                  Assessment in physics should mirror the scientific process and evaluate students' developing scientific thinking:
                </p>
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 class="font-semibold text-indigo-700 mb-3">Formative Assessment</h3>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>• Lab observations and scientific notebooks</li>
                      <li>• Peer discussions and explanations</li>
                      <li>• Real-time questioning during investigations</li>
                      <li>• Digital tools for immediate feedback</li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="font-semibold text-indigo-700 mb-3">Summative Assessment</h3>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>• AP Physics exam preparation</li>
                      <li>• Project-based demonstrations</li>
                      <li>• Scientific argumentation assessments</li>
                      <li>• Problem-solving portfolios</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Relationships & Family Collaboration */}
            <section class="mb-12">
              <h2 class="text-2xl font-semibold text-teal-600 mb-6 border-b-2 border-teal-100 pb-2">
                Building Positive Relationships
              </h2>
              <div class="bg-teal-50 p-6 rounded-lg">
                <p class="text-gray-700 leading-relaxed mb-4">
                  Strong relationships are essential for creating supportive learning environments where students feel safe to take intellectual risks:
                </p>
                <div class="grid md:grid-cols-3 gap-4">
                  <div class="text-center">
                    <h3 class="font-semibold text-teal-700 mb-2">Students</h3>
                    <p class="text-sm text-gray-600">Building trust through mentorship, encouragement of scientific discourse, and recognition of diverse perspectives</p>
                  </div>
                  <div class="text-center">
                    <h3 class="font-semibold text-teal-700 mb-2">Families</h3>
                    <p class="text-sm text-gray-600">Collaborating to ensure access to appropriate resources and supporting each child's unique learning needs</p>
                  </div>
                  <div class="text-center">
                    <h3 class="font-semibold text-teal-700 mb-2">Colleagues</h3>
                    <p class="text-sm text-gray-600">Engaging in cross-functional team collaboration and professional development to enhance teaching practices</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Impact Statement */}
            <section class="mb-8">
              <h2 class="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
                Impact of My Decisions and Actions
              </h2>
              <div class="bg-gray-50 p-6 rounded-lg">
                <p class="text-gray-700 leading-relaxed">
                  My dual background in physics and software engineering allows me to bridge traditional scientific education with modern technological tools, preparing students for a rapidly evolving world. Every decision I make—from designing interactive labs to facilitating student inquiries to integrating educational technology—is guided by the goal of developing students who can think scientifically, solve complex problems, and communicate effectively. My experience as both an educator and a software engineer has taught me that the most important skill we can give students is the ability to learn, adapt, and think critically about the world around them.
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <div class="text-center py-8">
              <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
                <h2 class="text-2xl font-bold mb-4">Ready to Learn More?</h2>
                <p class="mb-6 opacity-90">Explore my professional experience and growth plan.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/resume" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">View Resume</a>
                  <a href="/growth-plan" class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">Growth Plan</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
