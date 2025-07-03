// routes/index.tsx - Optimized
import Layout from "../components/Layout.tsx";

export default function Home() {
  return (
    <Layout 
      title="Mohammed Sebbagh - Professional Teaching Portfolio"
      description="Professional teaching portfolio showcasing educational philosophy, experience, and growth."
      currentPath="/"
    >
      {/* Hero section - mobile optimized */}
      <section class="text-center py-12 sm:py-20 mb-4 sm:mb-6">
        <h1 class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold heading-font mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent hover:scale-102 transition-transform duration-300 cursor-pointer whitespace-nowrap text-center max-w-full hover:drop-shadow-md">
          Mohammed Sebbagh's Professional Portfolio
        </h1>
        <p class="hero-subtext text-lg sm:text-2xl text-gray-600 mb-4 sm:mb-6 max-w-3xl mx-auto px-4">
          Physics Teacher & Educational Technology Developer
        </p>
        <div class="geometric-divider w-48 sm:w-64 mx-auto mb-6 sm:mb-8"></div>
        <p class="text-base sm:text-lg text-gray-500 mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed px-4">
          Dedicated to developing students' scientific thinking through interactive labs,
          inquiry-based learning, and innovative technology integration
        </p>
      </section>

      {/* Feature cards - Updated to include 4 cards */}
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
        <div class="modern-card p-6 sm:p-8 rounded-xl text-center">
          <div class="text-4xl sm:text-5xl mb-4 sm:mb-6">🔬</div>
          <h3 class="text-lg sm:text-xl font-semibold heading-font text-gray-900 mb-3 sm:mb-4">Physics Education</h3>
          <div class="geometric-divider w-12 sm:w-16 mx-auto mb-4 sm:mb-6"></div>
          <p class="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm">
            AP Physics and General Physics instruction with inquiry-based learning.
          </p>
          <a href="/philosophy" class="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm">
            Read More →
          </a>
        </div>

        <div class="modern-card p-6 sm:p-8 rounded-xl text-center">
          <div class="text-4xl sm:text-5xl mb-4 sm:mb-6">💻</div>
          <h3 class="text-lg sm:text-xl font-semibold heading-font text-gray-900 mb-3 sm:mb-4">Educational Technology</h3>
          <div class="geometric-divider w-12 sm:w-16 mx-auto mb-4 sm:mb-6"></div>
          <p class="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm">
            Software engineering with educational tools and applications.
          </p>
          <a href="/resume" class="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm">
            View Experience →
          </a>
        </div>

        <div class="modern-card p-6 sm:p-8 rounded-xl text-center">
          <div class="text-4xl sm:text-5xl mb-4 sm:mb-6">🌱</div>
          <h3 class="text-lg sm:text-xl font-semibold heading-font text-gray-900 mb-3 sm:mb-4">Professional Growth</h3>
          <div class="geometric-divider w-12 sm:w-16 mx-auto mb-4 sm:mb-6"></div>
          <p class="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm">
            Continuous development in curriculum design and leadership.
          </p>
          <a href="/growth-plan" class="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm">
            Learn More →
          </a>
        </div>

        <div class="modern-card p-6 sm:p-8 rounded-xl text-center">
          <div class="text-4xl sm:text-5xl mb-4 sm:mb-6">📚</div>
          <h3 class="text-lg sm:text-xl font-semibold heading-font text-gray-900 mb-3 sm:mb-4">Teaching Artifacts</h3>
          <div class="geometric-divider w-12 sm:w-16 mx-auto mb-4 sm:mb-6"></div>
          <p class="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm">
            Lesson plans, assessments, and competency demonstrations.
          </p>
          <a href="/artifacts" class="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm">
            Explore Artifacts →
          </a>
        </div>
      </section>

      {/* Professional highlights - mobile optimized */}
      <section class="modern-card p-6 sm:p-12 rounded-2xl mx-4 mb-12 sm:mb-16">
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
                <span class="text-gray-700 text-sm sm:text-base">Created grade management tools streamlining teacher workflows</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio Navigation Section */}
      <section class="mt-8 sm:mt-12 px-4">
        <div class="modern-card p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-blue-50 to-green-50">
          <div class="text-center mb-8">
            <h2 class="text-2xl sm:text-3xl font-bold heading-font text-gray-900 mb-4">Explore My Portfolio</h2>
            <div class="geometric-divider w-24 mx-auto mb-6"></div>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Discover my comprehensive approach to physics education, professional development, and innovative teaching practices.
            </p>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <a href="/philosophy" class="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 group">
              <div class="text-3xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
              <h3 class="font-semibold text-gray-900 mb-2">Teaching Philosophy</h3>
              <p class="text-sm text-gray-600">Educational beliefs and approaches</p>
            </a>
            
            <a href="/resume" class="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 group">
              <div class="text-3xl mb-4 group-hover:scale-110 transition-transform">📄</div>
              <h3 class="font-semibold text-gray-900 mb-2">Professional Resume</h3>
              <p class="text-sm text-gray-600">Experience and qualifications</p>
            </a>
            
            <a href="/growth-plan" class="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 group">
              <div class="text-3xl mb-4 group-hover:scale-110 transition-transform">📈</div>
              <h3 class="font-semibold text-gray-900 mb-2">Growth Plan</h3>
              <p class="text-sm text-gray-600">Professional development goals</p>
            </a>
            
            <a href="/artifacts" class="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 group">
              <div class="text-3xl mb-4 group-hover:scale-110 transition-transform">🛠</div>
              <h3 class="font-semibold text-gray-900 mb-2">Teaching Artifacts</h3>
              <p class="text-sm text-gray-600">Lesson plans and assessments</p>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}