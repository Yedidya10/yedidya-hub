"use client"

const ResumeContent = () => {
  return (
    <div
      id="resume-content"
      className="max-w-4xl mx-auto bg-white text-black p-5 w-[210mm] print:shadow-none"
      style={{ fontSize: "11.5px", lineHeight: "1.3" }}
    >
      {/* Header */}
      <div className="text-center mb-2 border-b-2 border-gray-800 pb-2">
        <h1 className="text-2xl font-bold mb-0.5">Yedidya Aberjel</h1>
        <p className="text-base text-gray-600 mb-1">Full Stack Developer &nbsp;·&nbsp; Jerusalem, Israel</p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-0.5 text-xs">
          <a href="mailto:yedidya.abergel@gmail.com">yedidya.abergel@gmail.com</a>
          <a href="tel:+972548307675">+972-54-830-7675</a>
          <a href="https://github.com/Yedidya10" target="_blank" rel="noreferrer">github.com/Yedidya10</a>
          <a href="https://linkedin.com/in/yedidya-aberjel" target="_blank" rel="noreferrer">linkedin.com/in/yedidya-aberjel</a>
          <span className="text-gray-600">Hebrew (Native) · English (Advanced)</span>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-2">
        <h2 className="text-base font-bold mb-1.5 text-gray-800 border-b border-gray-400 pb-0.5">
          Professional Summary
        </h2>
        <p className="leading-relaxed">
          Computer Science student at the Hebrew University of Jerusalem (Atidim excellence program).
          Self-taught full-stack developer since 2021 with hands-on production experience —
          shipped a Chrome extension with <strong>3,000+ weekly active users (4.38/5 rating)</strong>{" "}
          and an open-source civic-tech platform aggregating Israeli parliamentary data.
          Proficient in React, Next.js, TypeScript, and Node.js.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="mb-2">
        <h2 className="text-base font-bold mb-1.5 text-gray-800 border-b border-gray-400 pb-0.5">
          Featured Projects
        </h2>
        <div className="space-y-2">

          <div>
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 className="font-semibold">PinFlux — Chrome Extension</h3>
              <span className="text-gray-500 text-xs">Mar 2025 – Present</span>
            </div>
            <ul className="list-disc list-inside mb-0.5 space-y-0.5">
              <li>Productivity extension that lets users pin entire conversations to a sidebar and pin individual messages or text snippets within a conversation to a top toolbar for instant access</li>
              <li>Designed, built, and published a Chrome extension serving <strong>3,000+ weekly active users</strong> with a <strong>4.38/5 Chrome Web Store rating</strong></li>
              <li>Solo-developed end-to-end: product design, TypeScript implementation, Chrome Web Store publication, user support, and iterative releases based on user feedback</li>
            </ul>
            <p className="text-gray-600"><strong>Tech:</strong> TypeScript, Chrome Extension APIs, HTML5, CSS3</p>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 className="font-semibold">Knesset Insight — Civic-Tech Platform</h3>
              <span className="text-gray-500 text-xs">Mar 2026 – Present</span>
            </div>
            <ul className="list-disc list-inside mb-0.5 space-y-0.5">
              <li>Built an open-source platform aggregating 20+ sessions of Israeli parliamentary data, enabling citizens to track votes, legislation, and member profiles</li>
              <li>Integrated 3 AI providers for bill summarization; automated data sync every 6h via Trigger.dev &amp; GitHub Actions</li>
            </ul>
            <p className="text-gray-600">
              <strong>Tech:</strong> Next.js, TypeScript, tRPC, Supabase (pgvector), Redis, Drizzle ORM, Vercel &nbsp;|&nbsp;{" "}
              <a href="https://github.com/Yedidya10/knesset-insight" target="_blank" rel="noreferrer">github.com/Yedidya10/knesset-insight</a>
            </p>
          </div>

          {/* <div>
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 className="font-semibold">ShareFood — Social Platform</h3>
              <span className="text-gray-500 text-xs">2025</span>
            </div>
            <ul className="list-disc list-inside mb-0.5 space-y-0.5">
              <li>Full-stack food-sharing platform (494 commits) with real-time location matching, user profiles, and multilingual support (Hebrew/English)</li>
            </ul>
            <p className="text-gray-600"><strong>Tech:</strong> Next.js, TypeScript, MongoDB, NextAuth.js, Tailwind CSS, Vercel</p>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 className="font-semibold">ShareSphere — Community Lending Platform</h3>
              <span className="text-gray-500 text-xs">2023</span>
            </div>
            <ul className="list-disc list-inside mb-0.5 space-y-0.5">
              <li>Neighborhood platform for lending/borrowing items; built component library with Storybook, multilingual UI, and real-time notifications</li>
            </ul>
            <p className="text-gray-600"><strong>Tech:</strong> Next.js, TypeScript, MongoDB, Material-UI, Storybook, Recoil</p>
          </div> */}

        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-2">
        <h2 className="text-base font-bold mb-1.5 text-gray-800 border-b border-gray-400 pb-0.5">
          Technical Skills
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <h3 className="font-semibold mb-1 text-gray-700">Languages &amp; Frontend</h3>
            <ul className="list-disc list-inside space-y-0.5">
              <li>TypeScript &amp; JavaScript</li>
              <li>React &amp; Next.js</li>
              <li>HTML5 &amp; CSS3</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-gray-700">Backend &amp; Data</h3>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Node.js &amp; Express</li>
              <li>tRPC</li>
              <li>PostgreSQL &amp; MongoDB</li>
              <li>Drizzle / Prisma ORM</li>
              <li>Redis (Upstash)</li>
              <li>Firebase &amp; Supabase</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-gray-700">DevOps &amp; Tools</h3>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Git &amp; GitHub Actions (CI/CD)</li>
              <li>Docker</li>
              <li>Jest &amp; Vitest</li>
              <li>Vercel</li>
              <li>AI APIs (Claude, GPT, Gemini)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-2">
        <h2 className="text-base font-bold mb-1.5 text-gray-800 border-b border-gray-400 pb-0.5">
          Education
        </h2>
        <div>
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="font-semibold">B.Sc. in Computer Science</h3>
            <span className="text-gray-500 text-xs">2025 – 2028</span>
          </div>
          <p className="text-gray-600">The Hebrew University of Jerusalem &nbsp;·&nbsp; Atidim Program for Industry &amp; High-Tech (national excellence program for tech-sector careers).</p>
        </div>
        <div className="mt-1">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="font-semibold">Pre-Academic Preparatory Program (Mechina) — STEM Track</h3>
            <span className="text-gray-500 text-xs">Jun 2023 – Aug 2024</span>
          </div>
          <p className="text-gray-600">The Hebrew University of Jerusalem &nbsp;·&nbsp; STEM-track preparation (mathematics, physics, English); B.Sc. CS admission prerequisites.</p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-2">
        <h2 className="text-base font-bold mb-1.5 text-gray-800 border-b border-gray-400 pb-0.5">
          Work Experience
        </h2>
        <div>
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="font-semibold">Self-Employed — Logistics &amp; Delivery Services</h3>
            <span className="text-gray-500 text-xs">2017 – 2019</span>
          </div>
          <p className="text-gray-600">Built and operated an independent business: client acquisition, scheduling, operations, and customer service. Developed ownership, time management, and customer empathy.</p>
        </div>
      </section>

      {/* Military Service */}
      <section className="mb-2">
        <h2 className="text-base font-bold mb-1.5 text-gray-800 border-b border-gray-400 pb-0.5">
          Military Service
        </h2>
        <div>
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="font-semibold">Israel Defense Forces</h3>
            <span className="text-gray-500 text-xs">2013 – 2016</span>
          </div>
          <p className="text-gray-600">Completed mandatory service; teamwork, discipline, and high-pressure ownership.</p>
        </div>
      </section>

      {/* Volunteering */}
      <section className="mb-2">
        <h2 className="text-base font-bold mb-1.5 text-gray-800 border-b border-gray-400 pb-0.5">
          Volunteering
        </h2>
        <p className="text-gray-600 mb-0.5"><strong className="text-black">Hillel Israel</strong> (Culture &amp; Community branch) — Contributing to strategic think tanks shaping programs for individuals leaving the ultra-orthodox community.</p>
        <p className="text-gray-600"><strong className="text-black">Therapeutic Equestrian Farm</strong> — Volunteer supporting nature-based healing activities.</p>
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
