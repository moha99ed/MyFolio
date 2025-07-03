// islands/BuggyInvestigationWorksheet.tsx
import { useState, useEffect } from "preact/hooks";

export default function BuggyInvestigationWorksheet() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    period: '',
    researchQuestion: '',
    independentVariable: '',
    dependentVariable: '',
    controlledVariables: ['', '', ''],
    hypothesis: '',
    materials: [
      { quantity: '', material: '', purpose: '' },
      { quantity: '', material: '', purpose: '' },
      { quantity: '', material: '', purpose: '' }
    ],
    procedures: ['', '', '', '', ''],
    vocabRating: '',
    writingRating: '',
    challengingVocab: '',
    languageFramesHelp: '',
    checks: {
      vocabCheck: false,
      relationshipCheck: false,
      scientistCheck: false,
      formatCheck: false,
      variablesCheck: false,
      reasoningCheck: false,
      scientificVocabCheck: false
    }
  });

  const [progress, setProgress] = useState(0);

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateArrayField = (field, index, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const updateObjectField = (field, key, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        [key]: value
      }
    }));
  };

  const updateMaterial = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      materials: prev.materials.map((material, i) => 
        i === index ? { ...material, [field]: value } : material
      )
    }));
  };

  // Calculate progress
  useEffect(() => {
    const allValues = [
      formData.name,
      formData.date,
      formData.period,
      formData.researchQuestion,
      formData.independentVariable,
      formData.dependentVariable,
      ...formData.controlledVariables,
      formData.hypothesis,
      ...formData.materials.flatMap(m => [m.quantity, m.material, m.purpose]),
      ...formData.procedures,
      formData.vocabRating,
      formData.writingRating,
      formData.challengingVocab,
      formData.languageFramesHelp
    ];
    
    const filledValues = allValues.filter(value => value && value.toString().trim() !== '').length;
    const totalValues = allValues.length;
    const progressPercent = (filledValues / totalValues) * 100;
    setProgress(progressPercent);
  }, [formData]);

  const handlePrint = () => {
    window.print();
  };

  const vocabularyCards = [
    {
      term: "Independent Variable",
      definition: "The factor you deliberately change in an experiment"
    },
    {
      term: "Dependent Variable", 
      definition: "The factor you measure in response to changes"
    },
    {
      term: "Controlled Variables",
      definition: "Factors kept the same throughout the experiment"
    },
    {
      term: "Hypothesis",
      definition: "A testable prediction about the relationship between variables"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 p-5">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-gray-700 to-gray-500 text-white p-10 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-repeat animate-pulse" 
                 style={{
                   backgroundImage: `repeating-linear-gradient(
                     45deg,
                     transparent,
                     transparent 10px,
                     rgba(255,255,255,0.05) 10px,
                     rgba(255,255,255,0.05) 20px
                   )`
                 }}>
            </div>
          </div>
          <h1 className="relative text-4xl font-light mb-3 z-10">
            Buggy Investigation Design Worksheet
          </h1>
          <p className="relative text-xl opacity-90 z-10">
            Building Scientific Vocabulary Through Hands-On Investigation
          </p>
          <div className="relative mt-5 z-10">
            <span className="inline-block bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mx-2 border border-white border-opacity-30">
              Academic Language
            </span>
            <span className="inline-block bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mx-2 border border-white border-opacity-30">
              Engaging Instruction
            </span>
          </div>
        </div>

        {/* Student Info */}
        <div className="bg-gray-50 p-5 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex items-center">
              <label className="font-semibold mr-3 text-gray-600">Name:</label>
              <input 
                type="text" 
                className="flex-1 p-2 border-2 border-gray-200 rounded-md focus:border-blue-400 focus:outline-none transition-colors"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <label className="font-semibold mr-3 text-gray-600">Date:</label>
              <input 
                type="date" 
                className="flex-1 p-2 border-2 border-gray-200 rounded-md focus:border-blue-400 focus:outline-none transition-colors"
                value={formData.date}
                onChange={(e) => updateFormData('date', e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <label className="font-semibold mr-3 text-gray-600">Period:</label>
              <input 
                type="text" 
                className="flex-1 p-2 border-2 border-gray-200 rounded-md focus:border-blue-400 focus:outline-none transition-colors"
                placeholder="Class period"
                value={formData.period}
                onChange={(e) => updateFormData('period', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="p-5">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">Progress: {Math.round(progress)}%</p>
        </div>

        <div className="p-8">
          {/* Academic Language Goals */}
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-5 mb-8">
            <h3 className="text-gray-700 mb-3 text-lg font-semibold">Academic Language Goals</h3>
            <p className="text-gray-600">
              By completing this worksheet, you will practice using precise scientific vocabulary and learn to communicate your ideas clearly using academic language patterns.
            </p>
          </div>

          {/* Section 1: Research Question Formation */}
          <div className="mb-10 bg-gray-50 rounded-xl p-6 border-l-4 border-blue-400 hover:shadow-lg transition-all duration-300">
            <h2 className="text-gray-700 text-2xl mb-5 flex items-center">
              <span className="bg-blue-400 text-white w-9 h-9 rounded-full flex items-center justify-center mr-4 font-bold">
                1
              </span>
              Research Question Formation
            </h2>

            <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-5 mb-5">
              <h3 className="text-gray-700 mb-3 text-lg">Academic Language Support: Question Starters</h3>
              <p className="mb-3">Use these sentence frames to write scientific questions:</p>
              <ul className="space-y-2">
                {[
                  '"How does _____ affect _____?"',
                  '"What is the relationship between _____ and _____?"',
                  '"What happens to _____ when _____ changes?"'
                ].map((frame, index) => (
                  <li key={index} className="bg-white bg-opacity-70 p-3 rounded-md border-l-2 border-green-400">
                    {frame}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {vocabularyCards.map((vocab, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-green-400 shadow-md hover:shadow-lg transition-shadow">
                  <div className="font-bold text-gray-700 mb-2 text-lg">{vocab.term}</div>
                  <div className="text-gray-600 text-sm">{vocab.definition}</div>
                </div>
              ))}
            </div>

            <label className="block font-bold mb-2">Your Research Question:</label>
            <textarea 
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors min-h-24 resize-y"
              placeholder="Write a testable question about buggy motion using academic language..."
              value={formData.researchQuestion}
              onChange={(e) => updateFormData('researchQuestion', e.target.value)}
            />

            <div className="mt-5">
              <p className="font-bold mb-3">Academic Language Check - Does your question:</p>
              {[
                { key: 'vocabCheck', label: 'Use proper scientific vocabulary?' },
                { key: 'relationshipCheck', label: 'Ask about a relationship between variables?' },
                { key: 'scientistCheck', label: 'Sound like something a scientist would investigate?' }
              ].map((check, index) => (
                <div key={index} className="flex items-center mb-2 p-2 bg-white rounded-md hover:bg-gray-50 transition-colors">
                  <input 
                    type="checkbox"
                    className="mr-3 scale-125"
                    checked={formData.checks[check.key]}
                    onChange={(e) => updateObjectField('checks', check.key, e.target.checked)}
                  />
                  <label>{check.label}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Variable Identification */}
          <div className="mb-10 bg-gray-50 rounded-xl p-6 border-l-4 border-blue-400 hover:shadow-lg transition-all duration-300">
            <h2 className="text-gray-700 text-2xl mb-5 flex items-center">
              <span className="bg-blue-400 text-white w-9 h-9 rounded-full flex items-center justify-center mr-4 font-bold">
                2
              </span>
              Variable Identification
            </h2>

            <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-5 mb-5">
              <h3 className="text-gray-700 mb-3 text-lg">Academic Language Practice: Scientific Definitions</h3>
              <p>Complete these definitions using precise scientific language:</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-bold mb-2">Independent Variable (What will you change?):</label>
                <textarea 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors min-h-24 resize-y"
                  placeholder="In this investigation, I will systematically change..."
                  value={formData.independentVariable}
                  onChange={(e) => updateFormData('independentVariable', e.target.value)}
                />
              </div>

              <div>
                <label className="block font-bold mb-2">Dependent Variable (What will you measure?):</label>
                <textarea 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors min-h-24 resize-y"
                  placeholder="I will measure... because this will show how the independent variable affects..."
                  value={formData.dependentVariable}
                  onChange={(e) => updateFormData('dependentVariable', e.target.value)}
                />
              </div>

              <div>
                <label className="block font-bold mb-2">Controlled Variables (List at least 3 factors you will keep the same):</label>
                <div className="space-y-3">
                  {formData.controlledVariables.map((variable, index) => (
                    <input 
                      key={index}
                      type="text" 
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder={`${index + 1}. Controlled variable`}
                      value={variable}
                      onChange={(e) => updateArrayField('controlledVariables', index, e.target.value)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Hypothesis Formation */}
          <div className="mb-10 bg-gray-50 rounded-xl p-6 border-l-4 border-blue-400 hover:shadow-lg transition-all duration-300">
            <h2 className="text-gray-700 text-2xl mb-5 flex items-center">
              <span className="bg-blue-400 text-white w-9 h-9 rounded-full flex items-center justify-center mr-4 font-bold">
                3
              </span>
              Hypothesis Formation
            </h2>

            <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-5 mb-5">
              <h3 className="text-gray-700 mb-3 text-lg">Hypothesis Writing Template</h3>
              <p className="mb-3">Use this academic language structure:</p>
              <div className="bg-white p-4 rounded-lg">
                <strong>"If"</strong> _________________________________ (independent variable)<br/>
                <strong>"then"</strong> _______________________________ (predicted effect on dependent variable)<br/>
                <strong>"because"</strong> ____________________________ (scientific reasoning).
              </div>
            </div>

            <label className="block font-bold mb-2">Your Hypothesis:</label>
            <textarea 
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors min-h-24 resize-y"
              placeholder="If... then... because..."
              value={formData.hypothesis}
              onChange={(e) => updateFormData('hypothesis', e.target.value)}
            />

            <div className="mt-5">
              <p className="font-bold mb-3">Academic Language Check - Does your hypothesis:</p>
              {[
                { key: 'formatCheck', label: 'Use "If...then...because" format?' },
                { key: 'variablesCheck', label: 'Include both variables?' },
                { key: 'reasoningCheck', label: 'Provide scientific reasoning?' },
                { key: 'scientificVocabCheck', label: 'Use proper scientific vocabulary?' }
              ].map((check, index) => (
                <div key={index} className="flex items-center mb-2 p-2 bg-white rounded-md hover:bg-gray-50 transition-colors">
                  <input 
                    type="checkbox"
                    className="mr-3 scale-125"
                    checked={formData.checks[check.key]}
                    onChange={(e) => updateObjectField('checks', check.key, e.target.checked)}
                  />
                  <label>{check.label}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Procedure Development */}
          <div className="mb-10 bg-gray-50 rounded-xl p-6 border-l-4 border-blue-400 hover:shadow-lg transition-all duration-300">
            <h2 className="text-gray-700 text-2xl mb-5 flex items-center">
              <span className="bg-blue-400 text-white w-9 h-9 rounded-full flex items-center justify-center mr-4 font-bold">
                4
              </span>
              Procedure Development
            </h2>

            <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-5 mb-5">
              <h3 className="text-gray-700 mb-3 text-lg">Academic Language: Procedural Writing</h3>
              <p className="mb-3">Scientific procedures use:</p>
              <ul className="space-y-2">
                {[
                  'Sequential language: First, next, then, finally',
                  'Precise vocabulary: specific, accurate, measure, record',
                  'Imperative verbs: place, measure, record, observe',
                  'Detailed descriptions: exact quantities, specific tools'
                ].map((item, index) => (
                  <li key={index} className="bg-white bg-opacity-70 p-3 rounded-md border-l-2 border-green-400">
                    <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-x-auto mb-5">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                <thead>
                  <tr>
                    <th className="bg-gray-600 text-white p-4 text-left">Quantity</th>
                    <th className="bg-gray-600 text-white p-4 text-left">Material</th>
                    <th className="bg-gray-600 text-white p-4 text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.materials.map((material, index) => (
                    <tr key={index}>
                      <td className="p-3 border-b border-gray-200">
                        <input 
                          type="text" 
                          className="w-full border border-gray-200 p-2 rounded"
                          placeholder="How many?"
                          value={material.quantity}
                          onChange={(e) => updateMaterial(index, 'quantity', e.target.value)}
                        />
                      </td>
                      <td className="p-3 border-b border-gray-200">
                        <input 
                          type="text" 
                          className="w-full border border-gray-200 p-2 rounded"
                          placeholder="What material?"
                          value={material.material}
                          onChange={(e) => updateMaterial(index, 'material', e.target.value)}
                        />
                      </td>
                      <td className="p-3 border-b border-gray-200">
                        <input 
                          type="text" 
                          className="w-full border border-gray-200 p-2 rounded"
                          placeholder="Why needed?"
                          value={material.purpose}
                          onChange={(e) => updateMaterial(index, 'purpose', e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <label className="block font-bold mb-3">Step-by-Step Procedure (Use sequential language):</label>
            <div className="space-y-4">
              {['First, I will...', 'Next, I will...', 'Then, I will...', 'After that, I will...', 'Finally, I will...'].map((placeholder, index) => (
                <div key={index}>
                  <label className="block mb-1">Step {index + 1}:</label>
                  <textarea 
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors min-h-16 resize-y"
                    placeholder={placeholder}
                    value={formData.procedures[index]}
                    onChange={(e) => updateArrayField('procedures', index, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Academic Language Self-Assessment */}
          <div className="mb-10 bg-gray-50 rounded-xl p-6 border-l-4 border-blue-400 hover:shadow-lg transition-all duration-300">
            <h2 className="text-gray-700 text-2xl mb-5 flex items-center">
              <span className="bg-blue-400 text-white w-9 h-9 rounded-full flex items-center justify-center mr-4 font-bold">
                5
              </span>
              Academic Language Self-Assessment
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              {[
                { name: 'vocabRating', title: 'Scientific Vocabulary Use' },
                { name: 'writingRating', title: 'Academic Writing Patterns' }
              ].map((assessment, index) => (
                <div key={index} className="bg-white rounded-lg p-5 text-center shadow-md border-t-4 border-blue-400">
                  <h4 className="mb-3 font-semibold">{assessment.title}</h4>
                  <div className="flex justify-between">
                    {['Excellent', 'Good', 'Developing', 'Beginning'].map((level, levelIndex) => (
                      <div key={levelIndex} className="flex flex-col items-center cursor-pointer p-2 rounded hover:bg-gray-50 transition-colors">
                        <input 
                          type="radio" 
                          name={assessment.name}
                          value={4 - levelIndex}
                          className="mb-1"
                          checked={formData[assessment.name] === (4 - levelIndex).toString()}
                          onChange={(e) => updateFormData(assessment.name, e.target.value)}
                        />
                        <small>{level}</small>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-bold mb-2">Reflection: Which scientific vocabulary words were most challenging to use correctly?</label>
                <textarea 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors min-h-24 resize-y"
                  placeholder="Reflect on your vocabulary learning..."
                  value={formData.challengingVocab}
                  onChange={(e) => updateFormData('challengingVocab', e.target.value)}
                />
              </div>

              <div>
                <label className="block font-bold mb-2">How did using academic language frames help you express your ideas?</label>
                <textarea 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors min-h-24 resize-y"
                  placeholder="Explain how sentence frames supported your writing..."
                  value={formData.languageFramesHelp}
                  onChange={(e) => updateFormData('languageFramesHelp', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Engaging Elements */}
          <div className="bg-gradient-to-br from-pink-300 to-yellow-300 text-white rounded-xl p-6 mb-8 text-center">
            <h3 className="mb-4 text-xl font-semibold">🔬 Engaging Elements of This Investigation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
              {[
                { title: 'Real-world Connections', desc: 'Buggy motion relates to everyday transportation' },
                { title: 'Student Choice', desc: 'Multiple investigation options increase engagement' },
                { title: 'Collaborative Learning', desc: 'Peer review and discussion opportunities' },
                { title: 'Hands-on Discovery', desc: 'Active investigation design promotes ownership' }
              ].map((element, index) => (
                <div key={index} className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-30">
                  <strong className="block mb-2">{element.title}</strong>
                  <p className="text-sm">{element.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Print Button */}
          <div className="text-center">
            <button 
              onClick={handlePrint}
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-3 rounded-full text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              📄 Print Worksheet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}