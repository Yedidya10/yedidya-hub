"use client"

const ResumeContent = () => {
  return (
    <div
      id="resume-content"
      className="max-w-4xl mx-auto bg-white text-black p-6 w-[210mm] print:shadow-none"
      style={{ fontSize: "12px", lineHeight: "1.35" }}
    >
      {/* Header */}
      <div className="text-center mb-4 border-b-2 border-gray-800 pb-3">
        <h1 className="text-2xl font-bold mb-1">Yedidya Aberjel</h1>
        <p className="text-base text-gray-600 mb-2">Full Stack Developer</p>
        <div className="flex justify-center gap-5 text-xs">
          <span>yedidya.abergel@gmail.com</span>
          <span>+972-54-830-7675</span>
          <span>github.com/Yedidya10</span>
          <span>linkedin.com/in/yedidya-aberjel</span>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-4">
        <h2 className="text-base font-bold mb-1.5 text-gray-800 border-b border-gray-400 pb-0.5">
          Professional Summary
        </h2>
        <p className="leading-relaxed">
          Full-stack developer with hands-on experience building and shipping production applications used by thousands of users.
          Proficient in React, Next.js, TypeScript, and Node.js, with a strong CS foundation (B.Sc., Hebrew University of Jerusalem).
          Passionate about open-source development and civic-tech solutions.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-4">
        <h2 className="text-base font-bold mb-1.5 text-gray-800 border-b border-gray-400 pb-0.5">
          Technical Skills
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <h3 className="font-semibold mb-1 text-gray-700">Frontend</h3>
            <ul className="space-y-0.5">
              <li>• React & Next.js</li>
              <li>• TypeScript & JavaScript</li>
              <li>• HTML5 & CSS3</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-gray-700">Backend</h3>
            <ul className="space-y-0.5">
              <li>• Node.js & Express</li>
              <li>• MongoDB & PostgreSQL</li>
              <li>• Drizzle / Prisma ORM</li>
              <li>• tRPC</li>
              <li>• Firebase & Supabase</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-gray-700">Tools & Infra</h3>
            <ul className="space-y-0.5">
              <li>• Git & GitHub</li>
              <li>• GitHub Actions (CI/CD)</li>
              <li>• Docker</li>
              <li>• Jest & Vitest</li>
              <li>• Redis (Upstash)</li>
              <li>• Vercel</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-4">
        <h2 className="text-base font-bold mb-1.5 text-gray-800 border-b border-gray-400 pb-0.5">
          Featured Projects
        </h2>
        <div className="space-y-2.5">

          <div className="border-l-4 border-gray-600 pl-3">
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 className="font-semibold">Knesset Insight — Civic-Tech Platform</h3>
              <span className="text-gray-500 text-xs">Mar 2026–present</span>
            </div>
            <ul className="mb-0.5 space-y-0.5">
              <li>• Built an open-source platform aggregating 20+ sessions of Israeli parliamentary data, enabling citizens to track votes, legislation, and member profiles</li>
              <li>• Integrated 3 AI providers (Gemini, GPT-4o, Claude) for bill summarization; automated data sync every 6h via Trigger.dev & GitHub Actions</li>
            </ul>
            <p className="text-gray-600"><strong>Tech:</strong> Next.js, TypeScript, tRPC, Supabase (pgvector), Redis, Drizzle ORM, Vercel &nbsp;|&nbsp; github.com/Yedidya10/knesset-insight</p>
          </div>

          <div className="border-l-4 border-gray-600 pl-3">
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 className="font-semibold">PinFlux — Chrome Extension</h3>
              <span className="text-gray-500 text-xs">Mar 2025–present</span>
            </div>
            <ul className="mb-0.5 space-y-0.5">
              <li>• Designed, built, and published a Chrome extension that grew to <strong>3,000+ weekly active users</strong> with a <strong>4.38/5 Chrome Web Store rating</strong></li>
            </ul>
            <p className="text-gray-600"><strong>Tech:</strong> TypeScript, Chrome Extension APIs, HTML5, CSS3 &nbsp;|&nbsp; pin-flux.auxion.space</p>
          </div>

          <div className="border-l-4 border-gray-600 pl-3">
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 className="font-semibold">ShareFood — Social Platform</h3>
              <span className="text-gray-500 text-xs">2025</span>
            </div>
            <ul className="mb-0.5 space-y-0.5">
              <li>• Full-stack food-sharing platform (494 commits) with real-time location matching, user profiles, and multilingual support (Hebrew/English)</li>
            </ul>
            <p className="text-gray-600"><strong>Tech:</strong> Next.js, TypeScript, MongoDB, NextAuth.js, Tailwind CSS, Vercel</p>
          </div>

          <div className="border-l-4 border-gray-600 pl-3">
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 className="font-semibold">ShareSphere — Community Lending Platform</h3>
              <span className="text-gray-500 text-xs">2023</span>
            </div>
            <ul className="mb-0.5 space-y-0.5">
              <li>• Neighborhood platform for lending/borrowing items; built component library with Storybook, multilingual UI, and real-time notifications</li>
            </ul>
            <p className="text-gray-600"><strong>Tech:</strong> Next.js, TypeScript, MongoDB, Material-UI, Storybook, Recoil</p>
          </div>

          {/* RTLify GPT temporarily hidden
          <div className="border-l-4 border-gray-600 pl-3">
            <h3 className="font-semibold mb-0.5">RTLify GPT — Browser Extension</h3>
            <p className="mb-0.5">Automatically detects and formats RTL languages (Hebrew, Arabic) in ChatGPT for proper text direction.</p>
            <p className="text-gray-600"><strong>Tech:</strong> JavaScript, CSS3, Chrome Extension APIs, DOM Manipulation</p>
          </div>
          */}
        </div>
      </section>

      {/* Education */}
      <section className="mb-3">
        <h2 className="text-base font-bold mb-1.5 text-gray-800 border-b border-gray-400 pb-0.5">
          Education
        </h2>
        <div className="border-l-4 border-gray-600 pl-3">
          <h3 className="font-semibold mb-0.5">B.Sc. in Computer Science Student</h3>
          <p className="text-gray-600">The Hebrew University of Jerusalem</p>
        </div>
      </section>

      {/* Volunteering */}
      <section className="mb-2">
        <h2 className="text-base font-bold mb-1.5 text-gray-800 border-b border-gray-400 pb-0.5">
          Volunteering
        </h2>
        <div className="space-y-1">
          <div className="border-l-4 border-gray-600 pl-3">
            <h3 className="font-semibold mb-0.5">Hillel Israel — A Home for Former Ultra-Orthodox Jews</h3>
            <p className="text-gray-600">Volunteer in the Culture & Community branch, contributing to strategic think tanks that shape programs and initiatives for individuals leaving the ultra-orthodox world.</p>
          </div>
          <div className="border-l-4 border-gray-600 pl-3">
            <h3 className="font-semibold mb-0.5">Therapeutic Equestrian Farm</h3>
            <p className="text-gray-600">Volunteer at a therapeutic horse farm supporting participants in nature-based healing activities.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ResumeView() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div id="resume-root" className="min-h-screen bg-[#f3f4f6] print:bg-white print:min-h-0" style={{ colorScheme: "light" }}>
      <div className="print:hidden bg-yellow-100 border-b border-yellow-300 px-6 py-3 flex items-center gap-4">
        <span className="text-yellow-800 text-sm font-medium">Dev mode — Resume preview</span>
        <button
          onClick={handlePrint}
          className="bg-gray-900 text-white text-sm px-4 py-1.5 rounded hover:bg-gray-700 transition-colors"
        >
          Print / Save as PDF
        </button>
      </div>

      <div className="py-8 print:py-0 flex justify-center">
        <ResumeContent />
      </div>
    </div>
  )
}
