const CompetencyMatrix = () => {
  return (
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
  );
};

export default CompetencyMatrix;