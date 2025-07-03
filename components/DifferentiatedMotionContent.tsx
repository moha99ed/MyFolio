const DifferentiatedMotionContent = () => {
  return (
    <div className="font-inter leading-relaxed text-gray-800 bg-white max-w-none mx-auto p-2">
      {/* Header */}
      <div className="text-center mb-8 p-8 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg">
        <h1 className="font-playfair text-4xl mb-2 font-semibold">
          Differentiated Motion Assessment
        </h1>
        <p className="text-lg opacity-90 mb-4">
          Academic Language & Differentiation Strategies
        </p>
        <p className="text-sm italic">
          Mohammed Sebbagh • Physics Teacher • Professional Teaching Portfolio
        </p>
        <div className="mt-4">
          <span className="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-medium mx-1 border border-white border-opacity-30">
            Academic Language Development
          </span>
          <span className="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-medium mx-1 border border-white border-opacity-30">
            Differentiated Instruction
          </span>
        </div>
      </div>

      {/* Assessment Overview */}
      <div className="mb-6">
        <h2 className="font-playfair text-blue-800 text-xl mb-3 pb-1 border-b-2 border-blue-400">
          Assessment Overview
        </h2>
        <p className="mb-2 text-sm">
          This multi-tiered assessment provides multiple pathways for students to demonstrate understanding of motion concepts while supporting diverse learners through academic language scaffolds and varied representation options. The assessment design ensures all students can access physics content while building essential scientific communication skills.
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="mb-6">
        <h2 className="font-playfair text-blue-800 text-xl mb-3 pb-1 border-b-2 border-blue-400">
          Learning Objectives Assessed
        </h2>
        <div className="grid grid-cols-1 gap-1">
          <div className="text-sm text-gray-600 py-1">• Position-time and velocity-time graph interpretation</div>
          <div className="text-sm text-gray-600 py-1">• Kinematic equation applications and problem-solving</div>
          <div className="text-sm text-gray-600 py-1">• Experimental design and data analysis</div>
          <div className="text-sm text-gray-600 py-1">• Scientific claims evaluation and evidence-based reasoning</div>
          <div className="text-sm text-gray-600 py-1">• Reference frames and relative motion concepts</div>
        </div>
      </div>

      {/* Academic Language Focus */}
      <div className="mb-6">
        <h2 className="font-playfair text-blue-800 text-xl mb-3 pb-1 border-b-2 border-blue-400">
          Academic Language Focus
        </h2>
        <p className="mb-4 text-sm">
          Students must correctly use and define key physics terminology while demonstrating understanding through multiple communication modes:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          {[
            {
              term: "Position",
              definition: "Location of an object relative to a reference point, measured as a vector quantity"
            },
            {
              term: "Velocity", 
              definition: "Rate of change of position with respect to time (vector quantity including direction)"
            },
            {
              term: "Acceleration",
              definition: "Rate of change of velocity with respect to time, indicating how motion changes"
            },
            {
              term: "Displacement",
              definition: "Change in position from initial to final location (vector quantity)"
            },
            {
              term: "Uniform Motion",
              definition: "Motion with constant velocity, resulting in zero acceleration"
            },
            {
              term: "Reference Frame",
              definition: "The coordinate system from which motion is observed and measured"
            }
          ].map((vocab, index) => (
            <div key={index} className="bg-gray-100 rounded p-3 border-l-2 border-blue-400 text-xs">
              <div className="font-semibold text-blue-800 mb-1 text-sm">{vocab.term}</div>
              <div className="text-gray-600 text-xs">{vocab.definition}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Three-Tier Assessment Structure */}
      <div className="mb-6">
        <h2 className="font-playfair text-blue-800 text-xl mb-3 pb-1 border-b-2 border-blue-400">
          Three-Tier Assessment Structure
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Tier 1 */}
          <div className="bg-gray-50 rounded p-4 border-l-4 border-green-500 text-xs">
            <h4 className="text-blue-800 mb-2 text-sm font-semibold">Tier 1: Foundational Level</h4>
            <p className="italic mb-3 text-xs">For students needing additional support or ELL students</p>
            
            <h5 className="text-blue-800 text-xs font-semibold mb-1 mt-3">Section A: Graph Interpretation (30 points)</h5>
            <ul className="mb-2 pl-4 text-xs">
              <li className="mb-1">Multiple choice with visual graph supports</li>
              <li className="mb-1">Academic Language Frame: "This graph shows _____ motion because _____"</li>
              <li className="mb-1">Color-coded sections showing different motion types</li>
            </ul>
            
            <h5 className="text-blue-800 text-xs font-semibold mb-1 mt-3">Section B: Basic Calculations (20 points)</h5>
            <ul className="mb-2 pl-4 text-xs">
              <li className="mb-1">Simple kinematic problems with step-by-step templates</li>
              <li className="mb-1">Formulas provided: v = at, d = ½at²</li>
              <li className="mb-1">Unit guidance included</li>
            </ul>
          </div>
          
          {/* Tier 2 */}
          <div className="bg-gray-50 rounded p-4 border-l-4 border-blue-500 text-xs">
            <h4 className="text-blue-800 mb-2 text-sm font-semibold">Tier 2: Standard Level</h4>
            <p className="italic mb-3 text-xs">For students meeting grade-level expectations</p>
            
            <h5 className="text-blue-800 text-xs font-semibold mb-1 mt-3">Section A: Graph Analysis (35 points)</h5>
            <ul className="mb-2 pl-4 text-xs">
              <li className="mb-1">Determine equations from graphical data</li>
              <li className="mb-1">Choose between linear and quadratic relationships</li>
              <li className="mb-1">Explain reasoning using scientific vocabulary</li>
            </ul>
            
            <h5 className="text-blue-800 text-xs font-semibold mb-1 mt-3">Section B: Problem-Solving (25 points)</h5>
            <ul className="mb-2 pl-4 text-xs">
              <li className="mb-1">Multi-step kinematic equation problems</li>
              <li className="mb-1">Real-world scenarios requiring equation selection</li>
              <li className="mb-1">Justify equation choice with scientific reasoning</li>
            </ul>
            
            <h5 className="text-blue-800 text-xs font-semibold mb-1 mt-3">Section C: Experimental Analysis (20 points)</h5>
            <ul className="mb-2 pl-4 text-xs">
              <li className="mb-1">Analyze provided experimental data</li>
              <li className="mb-1">Calculate accelerations from measurements</li>
              <li className="mb-1">Draw evidence-based conclusions</li>
            </ul>
          </div>
          
          {/* Tier 3 */}
          <div className="bg-gray-50 rounded p-4 border-l-4 border-red-500 text-xs">
            <h4 className="text-blue-800 mb-2 text-sm font-semibold">Tier 3: Advanced Level</h4>
            <p className="italic mb-3 text-xs">For gifted students or those ready for extensions</p>
            
            <h5 className="text-blue-800 text-xs font-semibold mb-1 mt-3">Section A: Complex Analysis (40 points)</h5>
            <ul className="mb-2 pl-4 text-xs">
              <li className="mb-1">Multi-perspective motion analysis</li>
              <li className="mb-1">Analyze pseudoscientific claims</li>
              <li className="mb-1">Distinguish scientific from non-scientific assertions</li>
            </ul>
            
            <h5 className="text-blue-800 text-xs font-semibold mb-1 mt-3">Section B: Extended Response (30 points)</h5>
            <ul className="mb-2 pl-4 text-xs">
              <li className="mb-1">Create investigations to test motion hypotheses</li>
              <li className="mb-1">Interpret complex experimental results</li>
              <li className="mb-1">Present findings using academic language</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Differentiation Strategies */}
      <div className="mb-6">
        <h2 className="font-playfair text-blue-800 text-xl mb-3 pb-1 border-b-2 border-blue-400">
          Differentiation Strategies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          {[
            {
              title: "English Language Learners (ELL)",
              items: [
                "Bilingual vocabulary sheets with physics terms in native language",
                "Sentence frames for scientific explanations",
                "Extended time: Additional 50% time for completion",
                "Visual supports with diagrams and graphs"
              ]
            },
            {
              title: "Students with Learning Disabilities",
              items: [
                "Chunked sections with manageable parts and breaks",
                "Graphic organizers for problem-solving",
                "Alternative formats: Oral responses for written sections",
                "Assistive technology: Calculator use, speech-to-text"
              ]
            },
            {
              title: "Gifted and Talented Students",
              items: [
                "Open-ended extensions: Research real-world applications",
                "Cross-curricular connections: Mathematical modeling",
                "Peer teaching opportunities",
                "Independent investigations: Original experiments"
              ]
            },
            {
              title: "Students with Special Needs",
              items: [
                "Modified expectations maintaining conceptual focus",
                "Sensory accommodations: Quiet testing environment",
                "Physical accommodations: Large print, extended breaks",
                "Communication supports: Visual schedules"
              ]
            }
          ].map((strategy, index) => (
            <div key={index} className="bg-white rounded p-3 shadow border-t-2 border-blue-400 text-xs">
              <h4 className="text-blue-800 mb-2 text-sm font-semibold">{strategy.title}</h4>
              <ul className="pl-4">
                {strategy.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-1 text-gray-600">
                    <span className="bg-blue-500 text-white px-1 py-0.5 rounded text-xs font-medium mr-1">
                      {item.split(':')[0]}
                    </span>
                    {item.includes(':') ? item.split(':')[1] : ''}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Language Scaffolds */}
      <div className="mb-6">
        <h2 className="font-playfair text-blue-800 text-xl mb-3 pb-1 border-b-2 border-blue-400">
          Academic Language Scaffolds
        </h2>
        
        <div className="bg-blue-50 rounded p-3 mb-3 border-l-2 border-blue-400 text-xs">
          <h4 className="text-blue-800 mb-2 text-sm font-semibold">Sentence Frames for Scientific Explanations</h4>
          <ul className="pl-4">
            <li className="mb-1">"The graph shows _____ because _____"</li>
            <li className="mb-1">"Based on the experimental data, I conclude that _____"</li>
            <li className="mb-1">"The relationship between _____ and _____ is _____ because _____"</li>
            <li className="mb-1">"I can calculate _____ using the equation _____"</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 rounded p-3 mb-3 border-l-2 border-blue-400 text-xs">
          <h4 className="text-blue-800 mb-2 text-sm font-semibold">Mathematical Communication Requirements</h4>
          <ul className="pl-4">
            <li className="mb-1">Show all work with proper units and labels</li>
            <li className="mb-1">Explain equation selection with scientific reasoning</li>
            <li className="mb-1">Use precise scientific vocabulary in explanations</li>
            <li className="mb-1">Connect mathematical results to physical meaning</li>
          </ul>
        </div>
      </div>

      {/* Sample Questions */}
      <div className="mb-6">
        <h2 className="font-playfair text-blue-800 text-xl mb-3 pb-1 border-b-2 border-blue-400">
          Sample Questions by Tier
        </h2>
        
        {[
          {
            tier: "Tier 1 Example: Foundational Level",
            question: "Look at the velocity-time graph below. When does the object have zero acceleration?",
            details: [
              "Multiple choice format with clear visual support",
              "Academic language frame: \"Zero acceleration occurs when _____\""
            ]
          },
          {
            tier: "Tier 2 Example: Standard Level", 
            question: "An elevator's motion is shown in the velocity-time graph. Calculate the displacement during the first 6 seconds and explain your method using scientific vocabulary.",
            details: [
              "Requires mathematical calculation and scientific explanation",
              "Academic language expected in detailed explanation"
            ]
          },
          {
            tier: "Tier 3 Example: Advanced Level",
            question: "Evaluate this claim: 'Heavy objects fall faster than light objects.' Design an experiment to test this hypothesis and use evidence to support or refute this statement.",
            details: [
              "Requires critical analysis and evidence-based argumentation",
              "Advanced academic language and scientific communication skills"
            ]
          }
        ].map((example, index) => (
          <div key={index} className="bg-yellow-50 border border-yellow-200 rounded p-3 mb-3 text-xs">
            <h5 className="text-yellow-800 mb-2 font-semibold text-sm">{example.tier}</h5>
            <p className="mb-2"><strong>Question:</strong> "{example.question}"</p>
            <ul className="pl-4">
              {example.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="mb-1">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Assessment Rubric */}
      <div className="mb-6">
        <h2 className="font-playfair text-blue-800 text-xl mb-3 pb-1 border-b-2 border-blue-400">
          Assessment Rubric
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-4 text-xs">
            <thead>
              <tr>
                <th className="bg-gray-700 text-white p-2 text-left font-semibold text-sm">Level</th>
                <th className="bg-gray-700 text-white p-2 text-left font-semibold text-sm">Academic Language Use (30%)</th>
                <th className="bg-gray-700 text-white p-2 text-left font-semibold text-sm">Content Understanding (70%)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  level: "4 - Exemplary",
                  language: "Consistently uses precise scientific vocabulary with clear explanations and proper grammar",
                  content: "Demonstrates complete mastery of motion concepts with accurate problem-solving"
                },
                {
                  level: "3 - Proficient",
                  language: "Generally uses appropriate scientific vocabulary with minor language errors",
                  content: "Shows solid understanding with mostly correct applications"
                },
                {
                  level: "2 - Developing",
                  language: "Basic vocabulary use with some scientific terms, needs language support",
                  content: "Demonstrates partial understanding with some misconceptions"
                },
                {
                  level: "1 - Beginning",
                  language: "Limited vocabulary use, requires significant language scaffolding",
                  content: "Shows minimal understanding, needs extensive support"
                }
              ].map((row, index) => (
                <tr key={index}>
                  <td className="p-2 border-b border-gray-200 font-semibold">{row.level}</td>
                  <td className="p-2 border-b border-gray-200">{row.language}</td>
                  <td className="p-2 border-b border-gray-200">{row.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Multiple Representation Options */}
      <div className="mb-6">
        <h2 className="font-playfair text-blue-800 text-xl mb-3 pb-1 border-b-2 border-blue-400">
          Multiple Representation Options
        </h2>
        <p className="mb-4 text-sm">Students can demonstrate understanding through diverse modalities:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
          {[
            { title: "Mathematical Calculations", subtitle: "Step-by-step problem solving" },
            { title: "Graphical Analysis", subtitle: "Motion graph interpretation" },
            { title: "Written Explanations", subtitle: "Academic language use" },
            { title: "Experimental Design", subtitle: "Scientific method application" },
            { title: "Visual Diagrams", subtitle: "Scientific illustrations" },
            { title: "Oral Presentations", subtitle: "Recorded for assessment" }
          ].map((rep, index) => (
            <div key={index} className="bg-gray-100 p-2 rounded text-center text-xs">
              <div className="block mb-1 text-blue-800 text-sm font-semibold">{rep.title}</div>
              <small>{rep.subtitle}</small>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 p-5 bg-gray-50 rounded text-xs text-gray-600">
        <p className="font-semibold">FERPA Compliance:</p>
        <p>This assessment artifact has been created for portfolio purposes. All student examples are fictional and no actual student data is included.</p>
        <p className="mt-2 italic">
          This differentiated assessment ensures all students can demonstrate motion understanding while building academic language skills essential for continued success in physics and STEM fields.
        </p>
      </div>
    </div>
  );
};

export default DifferentiatedMotionContent;