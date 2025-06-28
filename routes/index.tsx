import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohammed Sebbagh - Professional Teaching Portfolio</title>
        <meta name="description" content="Professional teaching portfolio showcasing educational philosophy, experience, and growth." />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      
      <div class="min-h-screen bg-gray-50">
        {/* Header */}
        <header class="bg-white shadow-sm border-b">
          <div class="container mx-auto px-4 py-4 max-w-4xl">
            <div class="flex items-center justify-between">
              <div>
                <h1 class="text-2xl font-bold text-gray-800">
                  Mohammed Sebbagh
                </h1>
                <p class="text-gray-600">
                  Physics Teacher & Educational Technology Developer
                </p>
              </div>
              <div class="text-right">
                <p class="text-sm text-gray-600">
                  mohammedsebbagh@gmail.com | 201-898-6407
                </p>
                <p class="text-sm text-gray-600">
                  New Jersey
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav class="bg-gray-100 border-b">
          <div class="container mx-auto px-4 max-w-4xl">
            <ul class="flex space-x-8 py-4">
              <li><a href="/" class="font-medium text-blue-600 border-b-2 border-blue-600 pb-1">Home</a></li>
              <li><a href="/philosophy" class="font-medium text-gray-700 hover:text-blue-600">Teaching Philosophy</a></li>
              <li><a href="/resume" class="font-medium text-gray-700 hover:text-blue-600">Resume</a></li>
              <li><a href="/growth-plan" class="font-medium text-gray-700 hover:text-blue-600">Growth Plan</a></li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main class="container mx-auto px-4 py-8 max-w-4xl">
          {/* Hero Section */}
          <section class="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg mb-12">
            <div class="max-w-3xl mx-auto px-6">
              <h1 class="text-4xl md:text-6xl font-bold mb-6">
                Professional Teaching Portfolio
              </h1>
              <p class="text-xl md:text-2xl opacity-90 mb-4">
                Physics Teacher & Educational Technology Developer
              </p>
              <p class="text-lg opacity-80 mb-8">
                Dedicated to developing students' scientific thinking through interactive labs, inquiry-based learning, and innovative technology integration
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/philosophy" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Teaching Philosophy
                </a>
                <a href="/resume" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Resume
                </a>
              </div>
            </div>
          </section>

          {/* Quick Overview */}
          <section class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div class="text-blue-600 text-4xl mb-4">🔬</div>
              <h3 class="text-xl font-semibold mb-2">Physics Education</h3>
              <p class="text-gray-600 mb-4">
                AP Physics and General Physics instruction with emphasis on inquiry-based learning and scientific discourse.
              </p>
              <a href="/philosophy" class="text-blue-600 font-medium hover:underline">
                Read More →
              </a>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div class="text-green-600 text-4xl mb-4">💻</div>
              <h3 class="text-xl font-semibold mb-2">Educational Technology</h3>
              <p class="text-gray-600 mb-4">
                Software engineering background with open-source educational tools and SMART Web Applications.
              </p>
              <a href="/resume" class="text-blue-600 font-medium hover:underline">
                View Experience →
              </a>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div class="text-purple-600 text-4xl mb-4">🌱</div>
              <h3 class="text-xl font-semibold mb-2">Professional Growth</h3>
              <p class="text-gray-600 mb-4">
                Continuous development in curriculum design, leadership, and innovative teaching practices.
              </p>
              <a href="/growth-plan" class="text-blue-600 font-medium hover:underline">
                Learn More →
              </a>
            </div>
          </section>

          {/* Highlights */}
          <section class="bg-white rounded-lg shadow-md p-8 mt-12">
            <h2 class="text-3xl font-bold text-center mb-8">Professional Highlights</h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-xl font-semibold mb-4 text-blue-600">Teaching Excellence</h3>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    5+ years of physics education experience
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    AP Physics curriculum development
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    11th Grade Team Leadership
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Mentoring 80+ students annually
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-4 text-green-600">Technical Innovation</h3>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Software engineering expertise
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Educational technology development
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Open-source project contributions
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    SMART Web Application creator
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
