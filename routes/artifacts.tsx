// routes/artifacts.tsx - Updated with ArtifactModal supporting PDFs and custom content
import Layout from "../components/Layout.tsx";
import { ArtifactModal } from "../islands/ArtifactModal.tsx";
import { FullScreenPdfModal } from "../islands/PdfModal.tsx";
import DifferentiatedMotionContent from "../components/DifferentiatedMotionContent.tsx";
import BuggyInvestigationWorksheet from "../islands/BuggyInvestigationWorksheet.tsx";
import GoogleSheetsTutorial from "../islands/GoogleSheetsTutorial.tsx";
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
                    <FullScreenPdfModal
                      pdfUrl="/artifact1-batman-zipline-lab.pdf"
                      title="Batman Zipline Video Analysis Lab"
                    >
                      <button class="download-btn text-white px-6 py-2 rounded-lg font-semibold inline-flex items-center gap-2 text-sm">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        View PDF
                      </button>
                    </FullScreenPdfModal>
                  </div>
                </div>

                {/* Artifact 2 - Custom HTML content */}
<div class="modern-card p-6 bg-gradient-to-br from-green-50 to-emerald-50">
  <div
    class="artifact-number"
    style="background: linear-gradient(135deg, #10b981 0%, #059669 100%)"
  >
    2
  </div>
  <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">
    Differentiated Motion Assessment
  </h3>
  <div class="text-center mb-4">
    <span
      class="competency-badge"
      style="background: rgba(16, 185, 129, 0.1); color: #065f46;"
    >
      Academic Language
    </span>
    <span
      class="competency-badge"
      style="background: rgba(16, 185, 129, 0.1); color: #065f46;"
    >
      Differentiation
    </span>
  </div>
  <p class="text-gray-700 text-sm mb-4 text-center">
    Multi-tiered assessment with academic language scaffolds and multiple
    representation options for diverse learners.
  </p>
  <div class="text-center">
    <ArtifactModal title="Differentiated Motion Assessment">

      <DifferentiatedMotionContent />
    </ArtifactModal>
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
                    <ArtifactModal title="Buggy Investigation Design Worksheet">
                      <BuggyInvestigationWorksheet />
                      </ArtifactModal>
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
                    <ArtifactModal title="Google Sheets Data Analysis Tutorial">
                      <GoogleSheetsTutorial />
                    </ArtifactModal>
                  </div>
                </div>
              </div>
            </section>

            {/* Rest of your existing content - Competency Matrix, etc. */}
            <section>
              <h2 class="text-2xl sm:text-3xl font-semibold heading-font text-indigo-600 mb-6">
                Competency Matrix
              </h2>

              <div class="modern-card p-6 sm:p-8 bg-indigo-50/50 mb-6">
                <p class="text-gray-700 leading-relaxed text-base mb-4">
                  The following matrix demonstrates how each artifact showcases specific teaching competencies. Each artifact addresses multiple competencies, with all four competencies represented across the portfolio.
                </p>

                <table class="w-full border-collapse table-auto text-sm sm:text-base">
                  <thead>
                    <tr class="bg-indigo-200 text-indigo-900 font-semibold">
                      <th class="border border-indigo-300 p-2">Artifact</th>
                      <th class="border border-indigo-300 p-2">Academic Language</th>
                      <th class="border border-indigo-300 p-2">Differentiation</th>
                      <th class="border border-indigo-300 p-2">Technology Integration</th>
                      <th class="border border-indigo-300 p-2">Engaging Instruction</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border border-indigo-300 p-2 font-semibold">1. Batman Zipline Lab</td>
                      <td class="border border-indigo-300 p-2 text-center">✓</td>
                      <td class="border border-indigo-300 p-2 text-center"></td>
                      <td class="border border-indigo-300 p-2 text-center">✓</td>
                      <td class="border border-indigo-300 p-2 text-center">✓</td>
                    </tr>
                    <tr class="bg-indigo-100">
                      <td class="border border-indigo-300 p-2 font-semibold">2. Differentiated Assessment</td>
                      <td class="border border-indigo-300 p-2 text-center">✓</td>
                      <td class="border border-indigo-300 p-2 text-center">✓</td>
                      <td class="border border-indigo-300 p-2 text-center"></td>
                      <td class="border border-indigo-300 p-2 text-center"></td>
                    </tr>
                    <tr>
                      <td class="border border-indigo-300 p-2 font-semibold">3. Buggy Investigation Worksheet</td>
                      <td class="border border-indigo-300 p-2 text-center">✓</td>
                      <td class="border border-indigo-300 p-2 text-center"></td>
                      <td class="border border-indigo-300 p-2 text-center"></td>
                      <td class="border border-indigo-300 p-2 text-center">✓</td>
                    </tr>
                    <tr class="bg-indigo-100">
                      <td class="border border-indigo-300 p-2 font-semibold">4. Google Sheets Tutorial</td>
                      <td class="border border-indigo-300 p-2 text-center"></td>
                      <td class="border border-indigo-300 p-2 text-center">✓</td>
                      <td class="border border-indigo-300 p-2 text-center">✓</td>
                      <td class="border border-indigo-300 p-2 text-center"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
