"use client"

const ResumeContent = () => {
  return (
    <div
      id="resume-content"
      className="max-w-4xl mx-auto bg-white text-black p-6 min-h-[297mm] w-[210mm]"
      style={{ fontSize: "12px", lineHeight: "1.3" }}
    >
      {/* Header */}
      <div className="text-center mb-6 border-b-2 border-gray-800 pb-4">
        <h1 className="text-3xl font-bold mb-2">Yedidya Aberjel</h1>
        <p className="text-lg text-gray-600 mb-3">Full Stack Developer</p>
        <div className="flex justify-center gap-6 text-xs">
          <span>yedidya.abergel@gmail.com</span>
          <span>+972-54-830-7675</span>
          <span>github.com/Yedidya10</span>
          <span>linkedin.com/in/yedidya-aberjel</span>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-400 pb-1">
          Professional Summary
        </h2>
        <p className="text-sm leading-relaxed">
          Driven full-stack developer with comprehensive communication, collaborative and organizational skills.
          Quick learner with focused attention to detail, seeking to apply professional knowledge and experience
          in innovative projects. As a developer, I see great value in contributing to open source libraries
          and building meaningful digital solutions.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-400 pb-1">
          Technical Skills
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold mb-2 text-gray-700">Frontend</h3>
            <ul className="text-xs space-y-0.5">
              <li>• React & Next.js</li>
              <li>• TypeScript & JavaScript</li>
              <li>• HTML5 & CSS3</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-gray-700">Backend</h3>
            <ul className="text-xs space-y-0.5">
              <li>• Node.js & Express</li>
              <li>• MongoDB & PostgreSQL</li>
              <li>• Prisma ORM</li>
              <li>• JWT Authentication</li>
              <li>• Firebase & Supabase</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-gray-700">Tools & APIs</h3>
            <ul className="text-xs space-y-0.5">
              <li>• Chrome Extension APIs</li>
              <li>• Google Maps API</li>
              <li>• NextAuth.js</li>
              <li>• AI Agents & LLMs</li>
              <li>• Vercel Deployment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-400 pb-1">
          Featured Projects
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-gray-600 pl-3">
            <h3 className="text-base font-semibold mb-1">PinFlux - Browser Extension</h3>
            <p className="text-xs mb-1">
              Chrome extension that enables pinning important messages in ChatGPT conversations.
              Features quick access to saved content and intuitive organization tools for enhanced productivity.
            </p>
            <p className="text-xs text-gray-600 mb-1">
              <strong>Technologies:</strong> TypeScript, Chrome APIs, HTML5, CSS3, ChatGPT Integration
            </p>
            <p className="text-xs text-gray-500">github.com/AuxionCore/PinFlux | pin-flux.auxion.space</p>
          </div>

          <div className="border-l-4 border-gray-600 pl-3">
            <h3 className="text-base font-semibold mb-1">ShareFood - Social Platform</h3>
            <p className="text-xs mb-1">
              Community platform connecting people to share surplus food and reduce waste.
              Features real-time location matching, user profiles, rating systems, and secure messaging.
            </p>
            <p className="text-xs text-gray-600 mb-1">
              <strong>Technologies:</strong> React, Node.js, Express, MongoDB, Google Maps API, JWT Authentication
            </p>
            <p className="text-xs text-gray-500">github.com/Yedidya10/share_food</p>
          </div>

          <div className="border-l-4 border-gray-600 pl-3">
            <h3 className="text-base font-semibold mb-1">RTLify GPT - Browser Extension</h3>
            <p className="text-xs mb-1">
              Browser extension that automatically detects and formats Right-to-Left (RTL) languages in ChatGPT.
              Improves readability for Hebrew, Arabic, and other RTL languages with proper text direction.
            </p>
            <p className="text-xs text-gray-600 mb-1">
              <strong>Technologies:</strong> JavaScript, CSS3, Chrome Extension APIs, DOM Manipulation, RTL Support
            </p>
            <p className="text-xs text-gray-500">github.com/AuxionCore/RTLify_GPT | rtlify-gpt.auxion.space</p>
          </div>

          <div className="border-l-4 border-gray-600 pl-3">
            <h3 className="text-base font-semibold mb-1">ShareSphere - Social Platform</h3>
            <p className="text-xs mb-1">
              Community platform for sharing household items and resources. Connects neighbors to lend and borrow
              everyday objects, reducing waste and building stronger local communities.
            </p>
            <p className="text-xs text-gray-600 mb-1">
              <strong>Technologies:</strong> Next.js, TypeScript, Prisma, PostgreSQL, NextAuth.js, Tailwind CSS, Vercel
            </p>
            <p className="text-xs text-gray-500">github.com/Yedidya10/sharesphere</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 mt-6 pt-3 border-t border-gray-300">
        Last updated: {new Date().toLocaleDateString()}
      </div>
    </div>
  )
}

export default function ResumeView() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dev-only toolbar — hidden on print */}
      <div className="print:hidden bg-yellow-100 border-b border-yellow-300 px-6 py-3 flex items-center gap-4">
        <span className="text-yellow-800 text-sm font-medium">Dev mode — Resume preview</span>
        <button
          onClick={handlePrint}
          className="bg-gray-900 text-white text-sm px-4 py-1.5 rounded hover:bg-gray-700 transition-colors"
        >
          Print / Save as PDF
        </button>
      </div>

      <div className="py-8 flex justify-center">
        <ResumeContent />
      </div>
    </div>
  )
}
