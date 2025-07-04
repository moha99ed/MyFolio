// routes/artifacts.tsx - Updated with ArtifactModal supporting PDFs and custom content
import Layout from "../components/Layout.tsx";
import { ArtifactModal } from "../islands/ArtifactModal.tsx";
import { FullScreenPdfModal } from "../islands/PdfModal.tsx";
import DifferentiatedMotionContent from "../components/DifferentiatedMotionContent.tsx";
import BuggyInvestigationWorksheet from "../islands/BuggyInvestigationWorksheet.tsx";
import GoogleSheetsTutorial from "../islands/GoogleSheetsTutorial.tsx";
import CompetencyMatrix from "../components/CompetencyMatrix.tsx";
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

            <section>
              <div className="font-inter leading-relaxed text-gray-800 bg-white max-w-none mx-auto p-2">
      {/* Header */}
      <div className="text-center mb-8 p-8 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg">
        <h1 className="font-playfair text-4xl mb-2 font-semibold">
          Teaching Competency Matrix
        </h1>
        <p className="text-lg opacity-90 mb-4">
          Demonstrating Core Teaching Competencies Through Artifacts
        </p>
        <p className="text-sm italic">
          Mohammed Sebbagh • Physics Teacher • Professional Teaching Portfolio
        </p>
      </div>

      {/* Introduction */}
      <div className="mb-6">
        <p className="text-gray-600 text-sm mb-6">
          The following matrix demonstrates how each artifact showcases specific teaching competencies through detailed explanations of implementation and impact.
        </p>
      </div>

      {/* Competency Matrix */}
      <div className="mb-6">
        <h2 className="font-playfair text-blue-800 text-xl mb-3 pb-1 border-b-2 border-blue-400">
          Competency Matrix
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <thead>
              <tr>
                <th className="bg-indigo-600 text-white p-4 text-left font-semibold">Competency</th>
                <th className="bg-indigo-600 text-white p-4 text-left font-semibold">Name of Artifact</th>
                <th className="bg-indigo-600 text-white p-4 text-left font-semibold">Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-indigo-50 transition-colors duration-200">
                <td className="p-4 border-b border-gray-200 font-semibold text-blue-800 align-top">
                  Using and promoting academic language in the classroom
                </td>
                <td className="p-4 border-b border-gray-200 font-medium align-top">
                  Batman Zipline Lab
                </td>
                <td className="p-4 border-b border-gray-200 text-sm align-top">
                  This lab requires students to use precise scientific vocabulary when describing projectile motion, velocity, and forces. Students must explain their experimental design using academic terms like "independent variable," "dependent variable," and "controlled variables" while presenting their findings with proper scientific terminology and mathematical language.
                </td>
              </tr>
              <tr className="hover:bg-indigo-50 transition-colors duration-200">
                <td className="p-4 border-b border-gray-200 font-semibold text-blue-800 align-top">
                  Using and promoting academic language in the classroom
                </td>
                <td className="p-4 border-b border-gray-200 font-medium align-top">
                  Buggy Investigation Worksheet
                </td>
                <td className="p-4 border-b border-gray-200 text-sm align-top">
                  The worksheet incorporates sentence frames and vocabulary scaffolds to help students articulate their understanding of motion concepts using proper physics terminology. Students practice using academic language to describe relationships between position, velocity, and acceleration while explaining their experimental observations and conclusions.
                </td>
              </tr>
              <tr className="hover:bg-indigo-50 transition-colors duration-200">
                <td className="p-4 border-b border-gray-200 font-semibold text-blue-800 align-top">
                  Using and promoting academic language in the classroom
                </td>
                <td className="p-4 border-b border-gray-200 font-medium align-top">
                  Differentiated Assessment Rubric
                </td>
                <td className="p-4 border-b border-gray-200 text-sm align-top">
                  This rubric explicitly outlines expectations for scientific vocabulary usage and provides scaffolds for students at different language proficiency levels. Students must demonstrate understanding of key physics terms like "velocity," "acceleration," and "momentum" through both written explanations and verbal presentations, promoting academic language development across multiple modalities.
                </td>
              </tr>
              <tr className="hover:bg-indigo-50 transition-colors duration-200">
                <td className="p-4 border-b border-gray-200 font-semibold text-blue-800 align-top">
                  Differentiating instruction to meet the needs of students in the classroom
                </td>
                <td className="p-4 border-b border-gray-200 font-medium align-top">
                  Google Sheets Tutorial
                </td>
                <td className="p-4 border-b border-gray-200 text-sm align-top">
                  This tutorial provides multiple entry points for students with varying technology skills, offering basic templates for beginners and advanced features for experienced users. Students can choose their complexity level for data analysis tasks, ensuring all learners can participate meaningfully while being appropriately challenged.
                </td>
              </tr>
              <tr className="hover:bg-indigo-50 transition-colors duration-200">
                <td className="p-4 border-b border-gray-200 font-semibold text-blue-800 align-top">
                  Differentiating instruction to meet the needs of students in the classroom
                </td>
                <td className="p-4 border-b border-gray-200 font-medium align-top">
                  Differentiated Assessment Rubric
                </td>
                <td className="p-4 border-b border-gray-200 text-sm align-top">
                  The assessment provides multiple pathways for students to demonstrate mastery, including visual representations, mathematical calculations, and written explanations. This allows students with different learning preferences and abilities to showcase their understanding while maintaining rigorous academic standards for all learners.
                </td>
              </tr>
              <tr className="hover:bg-indigo-50 transition-colors duration-200">
                <td className="p-4 border-b border-gray-200 font-semibold text-blue-800 align-top">
                  Incorporating technology into your instruction to enhance student learning
                </td>
                <td className="p-4 border-b border-gray-200 font-medium align-top">
                  Batman Zipline Lab
                </td>
                <td className="p-4 border-b border-gray-200 text-sm align-top">
                  Students use motion tracking apps and video analysis software to collect precise data about the zipline's trajectory and velocity. This technology integration allows for real-time data collection and analysis, making abstract physics concepts concrete and observable while developing digital literacy skills.
                </td>
              </tr>
              <tr className="hover:bg-indigo-50 transition-colors duration-200">
                <td className="p-4 border-b border-gray-200 font-semibold text-blue-800 align-top">
                  Incorporating technology into your instruction to enhance student learning
                </td>
                <td className="p-4 border-b border-gray-200 font-medium align-top">
                  Google Sheets Tutorial
                </td>
                <td className="p-4 border-b border-gray-200 text-sm align-top">
                  Students learn to use Google Sheets for physics data analysis, creating graphs and performing calculations with formulas. This tutorial teaches both physics content and digital skills, preparing students for modern scientific work while making data analysis more accessible and efficient.
                </td>
              </tr>
              <tr className="hover:bg-indigo-50 transition-colors duration-200">
                <td className="p-4 border-b border-gray-200 font-semibold text-blue-800 align-top">
                  Applying engaging and effective instructional strategies
                </td>
                <td className="p-4 border-b border-gray-200 font-medium align-top">
                  Batman Zipline Lab
                </td>
                <td className="p-4 border-b border-gray-200 text-sm align-top">
                  This hands-on lab uses a popular superhero theme to engage students while they explore projectile motion concepts through building and testing ziplines. The inquiry-based approach allows students to form hypotheses, conduct experiments, and draw conclusions, promoting active learning and deeper conceptual understanding.
                </td>
              </tr>
              <tr className="hover:bg-indigo-50 transition-colors duration-200">
                <td className="p-4 border-b border-gray-200 font-semibold text-blue-800 align-top">
                  Applying engaging and effective instructional strategies
                </td>
                <td className="p-4 border-b border-gray-200 font-medium align-top">
                  Buggy Investigation Worksheet
                </td>
                <td className="p-4 border-b border-gray-200 text-sm align-top">
                  The worksheet guides students through a structured investigation using toy cars to explore motion concepts, combining hands-on experimentation with guided reflection. This engaging approach helps students connect abstract physics principles to concrete, observable phenomena while building scientific reasoning skills.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FERPA Notice */}
      <div className="mt-8 p-5 bg-yellow-50 border border-yellow-200 rounded-lg text-xs text-gray-600">
        <p className="font-semibold text-yellow-800 mb-2">FERPA Compliance Note:</p>
        <p>All artifacts have been created based on field placement experiences and comply with FERPA requirements. Student identifying information has been removed, and where student names appear in examples, fictitious names have been used and are noted in the documentation.</p>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 p-5 bg-gray-50 rounded text-xs text-gray-600">
        <p className="italic">
          This competency matrix demonstrates alignment between teaching artifacts and core educational competencies, showcasing evidence of effective teaching practices across multiple domains.
        </p>
      </div>
    </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
