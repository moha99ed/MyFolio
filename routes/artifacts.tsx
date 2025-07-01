// routes/artifacts.tsx - Optimized
import Layout from "../components/Layout.tsx";

export default function Artifacts() {
  return (
    <Layout 
      title="Teaching Artifacts - Mohammed Sebbagh"
      description="Collection of teaching artifacts demonstrating competencies in academic language, differentiation, technology integration, and engaging instruction."
      currentPath="/artifacts"
    >
      <div class="py-8 sm:py-16 max-w-5xl mx-auto">
        <div class="modern-card rounded-2xl p-6 sm:p-12">
          
          <header class="text-center mb-12">
            <h1 class="text-3xl sm:text-5xl font-bold heading-font text-gray-900 mb-4">
              Teaching Artifacts
            </h1>
            <div class="geometric-divider w-32 sm:w-48 mx-auto mb-6"></div>
            <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Four artifacts demonstrating competencies in academic language, differentiation, technology integration, and engaging instructional strategies
            </p>
          </header>

          <div class="space-y-12 sm:space-y-16">
            
            {/* Four Artifacts Grid */}
            <section>
              <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-blue-600 mb-8 text-center">
                Portfolio Artifacts
              </h2>
              
              <div class="grid sm:grid-cols-2 gap-6 mb-12">
                
                {/* Artifact 1 */}
                <div class="modern-card p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <div class="artifact-number">1</div>
                  <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">
                    Batman Zipline Video Analysis Lab
                  </h3>
                  <div class="text-center mb-4">
                    <span class="competency-badge">Technology Integration</span>
                    <span class="competency-badge">Engaging Instruction</span>
                  </div>
                  <p class="text-gray-700 text-sm mb-4 text-center">
                    Complete lesson plan using Vernier Video Analysis software for accelerated motion investigation with superhero theme.
                  </p>
                  <div class="text-center">
                    <a href="/artifact1-batman-zipline-lab.pdf"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="download-btn text-white px-6 py-2 rounded-lg font-semibold inline-flex items-center gap-2 text-sm">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      View PDF
                    </a>
                  </div>
                </div>

                {/* Artifact 2 */}
                <div class="modern-card p-6 bg-gradient-to-br from-green-50 to-emerald-50">
                  <div class="artifact-number" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);">2</div>
                  <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">
                    Differentiated Motion Assessment
                  </h3>
                  <div class="text-center mb-4">
                    <span class="competency-badge" style="background: rgba(16, 185, 129, 0.1); color: #065f46;">Academic Language</span>
                    <span class="competency-badge" style="background: rgba(16, 185, 129, 0.1); color: #065f46;">Differentiation</span>
                  </div>
                  <p class="text-gray-700 text-sm mb-4 text-center">
                    Multi-tiered assessment with academic language scaffolds and multiple representation options for diverse learners.
                  </p>
                  <div class="text-center">
                    <a href="/artifact2-differentiated-assessment.pdf"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="text-white px-6 py-2 rounded-lg font-semibold inline-flex items-center gap-2 text-sm"
                       style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      View PDF
                    </a>
                  </div>
                </div>

                {/* Artifact 3 */}
                <div class="modern-card p-6 bg-gradient-to-br from-orange-50 to-red-50">
                  <div class="artifact-number" style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);">3</div>
                  <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">
                    Buggy Investigation Design Worksheet
                  </h3>
                  <div class="text-center mb-4">
                    <span class="competency-badge" style="background: rgba(249, 115, 22, 0.1); color: #9a3412;">Academic Language</span>
                    <span class="competency-badge" style="background: rgba(249, 115, 22, 0.1); color: #9a3412;">Engaging Instruction</span>
                  </div>
                  <p class="text-gray-700 text-sm mb-4 text-center">
                    Student worksheet with scientific method vocabulary scaffolds and hypothesis formation templates for hands-on investigation.
                  </p>
                  <div class="text-center">
                    <a href="/artifact3-buggy-investigation-worksheet.pdf"
                       target="_blank"
                       rel="noopener noreferrer" 
                       class="text-white px-6 py-2 rounded-lg font-semibold inline-flex items-center gap-2 text-sm"
                       style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      View PDF
                    </a>
                  </div>
                </div>

                {/* Artifact 4 */}
                <div class="modern-card p-6 bg-gradient-to-br from-purple-50 to-pink-50">
                  <div class="artifact-number" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);">4</div>
                  <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">
                    Google Sheets Data Analysis Tutorial
                  </h3>
                  <div class="text-center mb-4">
                    <span class="competency-badge" style="background: rgba(139, 92, 246, 0.1); color: #581c87;">Technology Integration</span>
                    <span class="competency-badge" style="background: rgba(139, 92, 246, 0.1); color: #581c87;">Differentiation</span>
                  </div>
                  <p class="text-gray-700 text-sm mb-4 text-center">
                    Step-by-step tutorial with templates for collaborative data analysis, supporting diverse learners with varied complexity levels.
                  </p>
                  <div class="text-center">
                    <a href="/artifact4-google-sheets-tutorial.pdf"
                       target="_blank"
                       rel="noopener noreferrer" 
                       class="text-white px-6 py-2 rounded-lg font-semibold inline-flex items-center gap-2 text-sm"
                       style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      View PDF
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Competency Matrix */}
            <section>
              <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-indigo-600 mb-6">
                Competency Matrix
              </h2>
              
              <div class="modern-card p-6 sm:p-8 bg-indigo-50/50 mb-6">
                <p class="text-gray-700 leading-relaxed text-base mb-4">
                  The following matrix demonstrates how each artifact showcases specific teaching competencies. Each artifact addresses multiple competencies, with all four competencies covered across the collection.
                </p>
              </div>

              <div class="overflow-x-auto">
                <table class="matrix-table">
                  <thead>
                    <tr>
                      <th class="w-1/4">Competency</th>
                      <th class="w-1/4">Artifact Name</th>
                      <th class="w-1/2">Explanation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="font-semibold text-blue-700">Using and promoting academic language in the classroom</td>
                      <td>Differentiated Motion Assessment</td>
                      <td class="text-sm">This assessment explicitly outlines expectations for using scientific vocabulary and provides scaffolds for students at different language levels. Students must demonstrate understanding of key physics terms like "velocity," "acceleration," and "momentum" through both writing and speaking. The assessment helps students learn to use precise scientific language correctly.</td>
                    </tr>
                    <tr>
                      <td class="font-semibold text-blue-700">Using and promoting academic language in the classroom</td>
                      <td>Buggy Investigation Design Worksheet</td>
                      <td class="text-sm">This worksheet focuses on building scientific vocabulary through hands-on activities like hypothesis formation, variable identification, and procedure development. Students work with specialized science terms while connecting everyday language to scientific concepts. The worksheet helps students become confident using scientific terminology correctly.</td>
                    </tr>
                    <tr>
                      <td class="font-semibold text-green-700">Differentiating instruction to meet the needs of students in the classroom</td>
                      <td>Differentiated Motion Assessment</td>
                      <td class="text-sm">The assessment gives students multiple ways to show they understand the material, including visual representations, math calculations, and written explanations. This lets students with different learning styles show their understanding while keeping high standards for everyone. All students can succeed while meeting the same learning goals through different methods.</td>
                    </tr>
                    <tr>
                      <td class="font-semibold text-green-700">Differentiating instruction to meet the needs of students in the classroom</td>
                      <td>Google Sheets Data Analysis Tutorial</td>
                      <td class="text-sm">This tutorial includes various complexity levels and different support options that let students contribute based on their technical skills and learning preferences. Visual learners can focus on graph creation, analytical thinkers can work with formulas, and students needing more support get step-by-step templates. Different pathways ensure all students can participate meaningfully.</td>
                    </tr>
                    <tr>
                      <td class="font-semibold text-purple-700">Incorporating technology into your instruction to enhance student learning</td>
                      <td>Batman Zipline Video Analysis Lab</td>
                      <td class="text-sm">This lab uses Vernier Video Analysis software to make abstract physics concepts visible and interactive for students. Students can track motion frame-by-frame and see immediate results, which helps them understand concepts through hands-on exploration. The technology enables analysis that would be impossible manually, building both content knowledge and digital skills.</td>
                    </tr>
                    <tr>
                      <td class="font-semibold text-purple-700">Incorporating technology into your instruction to enhance student learning</td>
                      <td>Google Sheets Data Analysis Tutorial</td>
                      <td class="text-sm">Students use Google Sheets for collaborative data analysis, real-time sharing, and professional presentation creation. This integration teaches both content knowledge and digital citizenship while preparing students for modern workplace expectations. Students learn to use professional tools while analyzing physics data through engaging, authentic activities.</td>
                    </tr>
                    <tr>
                      <td class="font-semibold text-orange-700">Applying engaging and effective instructional strategies</td>
                      <td>Batman Zipline Video Analysis Lab</td>
                      <td class="text-sm">The lab uses inquiry-based learning where students investigate motion using a superhero theme that captures their interest. This active learning approach increases student engagement while helping them understand concepts through discovery rather than just listening to lectures. The hands-on nature keeps students interested and participating throughout the lesson.</td>
                    </tr>
                    <tr>
                      <td class="font-semibold text-orange-700">Applying engaging and effective instructional strategies</td>
                      <td>Buggy Investigation Design Worksheet</td>
                      <td class="text-sm">This worksheet uses hands-on investigation design where students create their own experiments and form hypotheses about motion. The collaborative approach makes learning dynamic and social, leading to better retention and application of scientific concepts. Students take ownership of their learning by designing their own investigations.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="modern-card p-6 sm:p-8 bg-gray-50/50 mt-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-3">FERPA Compliance Statement</h3>
                <p class="text-gray-700 text-sm">
                  All artifacts included in this portfolio come from field placement experiences and follow FERPA requirements. Student identifying information has been removed from all materials. Where student names appear in examples, fictitious names have been used and are noted in the documentation.
                </p>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <div class="text-center py-8 sm:py-12 mt-12">
            <div class="modern-card p-6 sm:p-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <h2 class="text-2xl sm:text-3xl font-bold mb-4">Complete Portfolio Collection</h2>
              <p class="mb-6 opacity-90 text-base sm:text-lg">
                Explore all components of my professional teaching portfolio.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/philosophy" class="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Teaching Philosophy
                </a>
                <a href="/growth-plan" class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  Growth Plan
                </a>
                <a href="/resume" class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}