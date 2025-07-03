// islands/GoogleSheetsTutorial.tsx
import { useState } from "preact/hooks";

export default function GoogleSheetsTutorial() {
  const [activeTab, setActiveTab] = useState('overview');

  const showTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="max-w-6xl mx-auto bg-white min-h-screen shadow-2xl">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-gray-700 to-blue-500 text-white p-10 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-repeat animate-pulse" 
                 style={{
                   backgroundImage: `repeating-linear-gradient(
                     60deg,
                     transparent,
                     transparent 15px,
                     rgba(255,255,255,0.05) 15px,
                     rgba(255,255,255,0.05) 30px
                   )`
                 }}>
            </div>
          </div>
          <h1 className="relative text-5xl font-light mb-4 z-10">
            Google Sheets Data Analysis Tutorial
          </h1>
          <p className="relative text-xl opacity-90 mb-5 z-10">
            Collaborative Physics Data Analysis with Technology Integration
          </p>
          <div className="relative z-10">
            <span className="inline-block bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mx-2 border border-white border-opacity-30">
              Technology Integration
            </span>
            <span className="inline-block bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mx-2 border border-white border-opacity-30">
              Differentiation
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-gray-700 flex justify-center flex-wrap">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'pathways', label: 'Learning Pathways' },
            { id: 'collaboration', label: 'Collaboration' },
            { id: 'assessment', label: 'Assessment' },
            { id: 'resources', label: 'Resources' }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-4 text-white transition-all duration-300 border-b-2 hover:bg-white hover:bg-opacity-10 ${
                activeTab === tab.id 
                  ? 'bg-white bg-opacity-10 border-blue-400' 
                  : 'border-transparent'
              }`}
              onClick={() => showTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-10 min-h-screen">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="animate-fadeIn">
              <div className="mb-10 bg-gray-50 rounded-xl p-8 border-l-4 border-blue-500 shadow-lg">
                <h2 className="text-gray-700 text-2xl mb-5 flex items-center">
                  <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">
                    🎯
                  </span>
                  Learning Objectives
                </h2>
                <ul className="space-y-3">
                  {[
                    'Input experimental data into Google Sheets with proper formatting',
                    'Create professional position-time and velocity-time graphs',
                    'Calculate slopes and velocities using built-in functions',
                    'Collaborate in real-time with teammates on data analysis',
                    'Present findings using digital tools and academic language'
                  ].map((objective, index) => (
                    <li key={index} className="bg-gray-100 p-3 rounded-lg border-l-4 border-blue-500 hover:bg-gray-200 transition-colors">
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-2xl p-8 mb-10 text-center">
                <h3 className="text-2xl mb-5">🚀 Technology Integration (SAMR: Modification)</h3>
                <p className="mb-6">Google Sheets <strong>modifies</strong> traditional data analysis by enabling capabilities impossible with paper:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {[
                    { title: 'Real-time Collaboration', desc: 'Multiple students work simultaneously' },
                    { title: 'Automatic Calculations', desc: 'Reduces human error in computations' },
                    { title: 'Professional Graphs', desc: 'Instant formatting and visualization' },
                    { title: 'Data Sharing', desc: 'Access across devices and locations' }
                  ].map((feature, index) => (
                    <div key={index} className="bg-white bg-opacity-20 backdrop-blur-sm p-5 rounded-lg border border-white border-opacity-30">
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10 bg-gray-50 rounded-xl p-8 border-l-4 border-blue-500 shadow-lg">
                <h2 className="text-gray-700 text-2xl mb-5 flex items-center">
                  <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">
                    📋
                  </span>
                  Getting Started
                </h2>
                
                <div className="bg-white rounded-lg p-6 mb-6 border-2 border-gray-200 hover:border-blue-500 transition-colors">
                  <h3 className="flex items-center text-xl mb-4">
                    <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-sm">
                      1
                    </span>
                    Accessing Google Sheets
                  </h3>
                  <ol className="ml-5 space-y-2">
                    <li>Open Google Drive in your web browser</li>
                    <li>Click "New" → "Google Sheets" → "Blank spreadsheet"</li>
                    <li><span className="bg-orange-400 text-white px-2 py-1 rounded font-medium">Rename your sheet:</span> "Physics Motion Data - [Your Name]"</li>
                    <li><span className="bg-orange-400 text-white px-2 py-1 rounded font-medium">Share with teammates:</span> Click "Share" → Add partner email addresses</li>
                  </ol>
                </div>
                
                <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-blue-500 transition-colors">
                  <h3 className="flex items-center text-xl mb-4">
                    <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-sm">
                      2
                    </span>
                    Basic Setup
                  </h3>
                  <p className="font-bold mb-3">Column Headers (All students use these):</p>
                  <div className="bg-gray-800 text-gray-100 p-5 rounded-lg font-mono text-sm border-l-4 border-blue-500 overflow-x-auto">
                    Column A: "Trial Number"<br/>
                    Column B: "Time (seconds)"<br/>
                    Column C: "Position (meters)"<br/>
                    Column D: "Velocity (m/s)"
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pathways Tab */}
          {activeTab === 'pathways' && (
            <div className="animate-fadeIn">
              <div className="mb-10 bg-gray-50 rounded-xl p-8 border-l-4 border-blue-500 shadow-lg">
                <h2 className="text-gray-700 text-2xl mb-5 flex items-center">
                  <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">
                    🛤️
                  </span>
                  Differentiated Learning Pathways
                </h2>
                <p className="text-gray-600">Three pathways support diverse learners with varying complexity levels and support options.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Pathway A',
                    level: 'Foundational',
                    description: 'For students needing additional support or new to spreadsheets',
                    color: 'green',
                    features: [
                      'Pre-filled template available for download',
                      'Color-coded cells showing where to input data',
                      'Step-by-step instructions with visual guides',
                      'Partner assistance encouraged',
                      'Simple graphing with guided chart creation'
                    ],
                    demo: {
                      title: 'Sample Data Entry:',
                      code: 'A1: Trial    B1: Time (s)    C1: Position (m)\nA2: 1        B2: 0.0         C2: 0.0\nA3: 2        B3: 1.0         C3: 0.5\nA4: 3        B4: 2.0         C4: 1.0',
                      button: 'View Template'
                    }
                  },
                  {
                    title: 'Pathway B',
                    level: 'Standard',
                    description: 'For students meeting grade-level expectations',
                    color: 'blue',
                    features: [
                      'Professional formatting with number validation',
                      'Formula creation for velocity calculations',
                      'Advanced graphing with trend lines',
                      'Statistical analysis tools',
                      'Graph customization for presentations'
                    ],
                    demo: {
                      title: 'Velocity Calculation Formula:',
                      code: 'In cell D3, enter: =(C3-C2)/(B3-B2)\nCopy this formula down to all data rows',
                      button: 'Try Formula'
                    }
                  },
                  {
                    title: 'Pathway C',
                    level: 'Advanced',
                    description: 'For students ready for complex analysis and leadership roles',
                    color: 'red',
                    features: [
                      'Complex formulas and statistical functions',
                      'Multiple graph types with analysis dashboard',
                      'Peer tutoring responsibilities',
                      'Quality control for group work',
                      'Extension research connections'
                    ],
                    demo: {
                      title: 'Advanced Functions:',
                      code: 'Correlation: =CORREL(B3:B10,C3:C10)\nStd Deviation: =STDEV(D3:D10)\nAcceleration: =(D4-D3)/(B4-B3)',
                      button: 'Advanced Tools'
                    }
                  }
                ].map((pathway, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-blue-500 hover:transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-red-500"></div>
                    
                    <h3 className="text-xl text-gray-700 mb-2 flex items-center">
                      {pathway.title}
                      <span className="bg-blue-500 text-white px-2 py-1 rounded-xl text-xs ml-3">
                        {pathway.level}
                      </span>
                    </h3>
                    <p className="text-gray-500 italic mb-5">{pathway.description}</p>
                    
                    <h4 className="font-semibold mb-3">Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {pathway.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="bg-gray-100 p-3 rounded-lg border-l-4 border-blue-500 hover:bg-gray-200 transition-colors text-sm">
                          <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs font-medium mr-2">
                            {feature.split(' ')[0] + ' ' + feature.split(' ')[1]}
                          </span>
                          {feature.split(' ').slice(2).join(' ')}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-yellow-50 border-2 border-dashed border-yellow-400 rounded-lg p-5 text-center">
                      <h5 className="font-semibold mb-3">{pathway.demo.title}</h5>
                      <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-xs mb-3 text-left overflow-x-auto">
                        {pathway.demo.code}
                      </div>
                      <button className="bg-gradient-to-r from-yellow-400 to-red-400 text-white px-6 py-3 rounded-full font-medium hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                        {pathway.demo.button}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Collaboration Tab */}
          {activeTab === 'collaboration' && (
            <div className="animate-fadeIn">
              <div className="mb-10 bg-gray-50 rounded-xl p-8 border-l-4 border-blue-500 shadow-lg">
                <h2 className="text-gray-700 text-2xl mb-5 flex items-center">
                  <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">
                    🤝
                  </span>
                  Real-Time Collaboration Features
                </h2>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-8 border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold mb-6">Working Together in Google Sheets</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {[
                    { icon: '🔗', title: 'Document Sharing', desc: 'Share with all team members for simultaneous editing' },
                    { icon: '👥', title: 'Role Assignment', desc: 'Data entry, calculation checker, graph creator' },
                    { icon: '💬', title: 'Comments & Chat', desc: 'Real-time discussion and question asking' },
                    { icon: '📜', title: 'Version History', desc: 'Track changes and contribution monitoring' }
                  ].map((skill, index) => (
                    <div key={index} className="bg-white rounded-lg p-5 text-center shadow-md border-t-4 border-green-500 hover:transform hover:-translate-y-1 transition-all duration-200">
                      <h4 className="text-lg font-semibold mb-3">{skill.icon} {skill.title}</h4>
                      <p className="text-sm text-gray-600">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10 bg-gray-50 rounded-xl p-8 border-l-4 border-blue-500 shadow-lg">
                <h2 className="text-gray-700 text-2xl mb-5 flex items-center">
                  <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">
                    🔍
                  </span>
                  Peer Review Process
                </h2>
                
                <div className="bg-white rounded-lg p-5 shadow-md">
                  <h4 className="font-semibold mb-4">Quality Assurance Checklist:</h4>
                  {[
                    'Data verification: Check partner\'s calculations for accuracy',
                    'Graph evaluation: Assess clarity and proper formatting',
                    'Academic language review: Ensure proper scientific vocabulary',
                    'Presentation feedback: Provide constructive suggestions'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center mb-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <input type="checkbox" className="mr-4 scale-125" />
                      <label className="text-sm">
                        <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Assessment Tab */}
          {activeTab === 'assessment' && (
            <div className="animate-fadeIn">
              <div className="mb-10 bg-gray-50 rounded-xl p-8 border-l-4 border-blue-500 shadow-lg">
                <h2 className="text-gray-700 text-2xl mb-5 flex items-center">
                  <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">
                    📊
                  </span>
                  Self-Assessment Rubric
                </h2>
                <p className="text-gray-600 mb-6">Rate your technology skills development:</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                    <thead>
                      <tr className="bg-gray-700 text-white">
                        <th className="p-4 text-left">Skill</th>
                        <th className="p-4 text-center">Beginner (1)</th>
                        <th className="p-4 text-center">Developing (2)</th>
                        <th className="p-4 text-center">Proficient (3)</th>
                        <th className="p-4 text-center">Expert (4)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          skill: 'Data Input',
                          levels: ['Need constant help', 'Some assistance needed', 'Independent work', 'Help others']
                        },
                        {
                          skill: 'Formula Use',
                          levels: ['Cannot create formulas', 'Basic formulas with help', 'Create formulas independently', 'Complex formula creation']
                        },
                        {
                          skill: 'Graph Creation',
                          levels: ['Cannot make graphs', 'Basic graphs with support', 'Professional graphs', 'Multiple graph types']
                        },
                        {
                          skill: 'Collaboration',
                          levels: ['Minimal participation', 'Some collaboration', 'Active collaboration', 'Leadership role']
                        }
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="p-3 font-semibold">{row.skill}</td>
                          {row.levels.map((level, levelIndex) => (
                            <td key={levelIndex} className="p-3 text-center text-sm">{level}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-10 bg-gray-50 rounded-xl p-8 border-l-4 border-blue-500 shadow-lg">
                <h2 className="text-gray-700 text-2xl mb-5 flex items-center">
                  <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">
                    🤔
                  </span>
                  Reflection Questions
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-blue-500 transition-colors">
                    <h4 className="font-semibold mb-3">Technology Integration:</h4>
                    <ol className="ml-5 space-y-2 text-sm">
                      <li>How did Google Sheets change the way you analyze data compared to paper methods?</li>
                      <li>What collaborative features were most helpful for your team?</li>
                      <li>Which tools would you use for future science projects?</li>
                    </ol>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-blue-500 transition-colors">
                    <h4 className="font-semibold mb-3">Physics Understanding:</h4>
                    <ol className="ml-5 space-y-2 text-sm">
                      <li>How did visualizing your data help you understand motion concepts?</li>
                      <li>What patterns did you discover that weren't obvious from raw numbers?</li>
                      <li>How do your experimental results compare to theoretical predictions?</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <div className="animate-fadeIn">
              <div className="mb-10 bg-gray-50 rounded-xl p-8 border-l-4 border-blue-500 shadow-lg">
                <h2 className="text-gray-700 text-2xl mb-5 flex items-center">
                  <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">
                    🛠️
                  </span>
                  Technical Support Resources
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {[
                    {
                      icon: '🆘',
                      title: 'Troubleshooting',
                      items: ['Check internet connection', 'Verify cell references', 'Confirm sharing permissions']
                    },
                    {
                      icon: '📚',
                      title: 'Help Resources',
                      items: ['Google Sheets Help Center', 'Peer tutoring support', 'Teacher office hours']
                    },
                    {
                      icon: '🎥',
                      title: 'Video Tutorials',
                      items: ['Supplementary instruction', 'Advanced feature demos', 'Student success stories']
                    },
                    {
                      icon: '👨‍🏫',
                      title: 'Teacher Support',
                      items: ['Individual assistance', 'Group troubleshooting', 'Extension activities']
                    }
                  ].map((resource, index) => (
                    <div key={index} className="bg-white rounded-lg p-5 text-center shadow-md border-t-4 border-green-500 hover:transform hover:-translate-y-1 transition-all duration-200">
                      <h4 className="text-lg font-semibold mb-3">{resource.icon} {resource.title}</h4>
                      <ul className="text-left text-sm space-y-1">
                        {resource.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10 bg-gray-50 rounded-xl p-8 border-l-4 border-blue-500 shadow-lg">
                <h2 className="text-gray-700 text-2xl mb-5 flex items-center">
                  <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">
                    🎯
                  </span>
                  21st Century Skills Development
                </h2>
                
                <div className="bg-gray-700 text-white p-8 text-center rounded-xl">
                  <h3 className="text-xl mb-5">Future Career Connections</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[
                      'Data Scientist',
                      'Research Analyst', 
                      'Engineering Technician',
                      'Quality Control Specialist',
                      'Lab Technician',
                      'Project Manager',
                      'Statistical Analyst',
                      'Science Teacher'
                    ].map((career, index) => (
                      <div key={index} className="bg-white bg-opacity-10 p-4 rounded-lg border border-white border-opacity-20">
                        {career}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in;
        }
        
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </div>
  );
}