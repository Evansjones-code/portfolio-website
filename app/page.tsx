import Image from "next/image";

export default function Home() {
  const allProjects = [
    { 
      name: "Ticket Platform", 
      tech: "TypeScript", 
      desc: "Decentralized ticketing and transaction routing system.", 
      github: "https://github.com/Evansjones-code/Ticket-platform",
      live: "https://ticket-platform-gilt.vercel.app/"
    },
    { 
      name: "The Social Traveller", 
      tech: "TypeScript / Web", 
      desc: "Interactive travel and social discovery platform for explorers.", 
      github: "https://github.com/Evansjones-code",
      live: "https://the-social-traveller-five.vercel.app/"
    },
    { 
      name: "Street Plate", 
      tech: "TypeScript / Web", 
      desc: "Dynamic food and street dining discovery and ordering interface.", 
      github: "https://github.com/Evansjones-code",
      live: "https://street-plate.vercel.app/"
    },
    { name: "Wellness Pulse App", tech: "Kotlin", desc: "Native Android mobile application built using Kotlin and modern Android architecture standards.", github: "https://github.com/Evansjones-code/Wellness_Pulse_app" },
    { name: "Cosmetics Store", tech: "Python", desc: "Full-stack e-commerce platform powered by FastAPI backend architecture, custom authentication, and REST APIs.", github: "https://github.com/Evansjones-code/cosmetics-store" },
    { name: "My Store", tech: "Python", desc: "E-commerce web application featuring custom database storage and API routing.", github: "https://github.com/Evansjones-code/my-store" },
    { name: "Fashion Empire", tech: "TypeScript", desc: "High-performance frontend and backend web application with modern TypeScript frameworks.", github: "https://github.com/Evansjones-code/fashion-empire" },
    { name: "Stellar Voting System", tech: "JavaScript", desc: "Cryptographic voting workflows and smart contract integrations.", github: "https://github.com/Evansjones-code/Stellar-voting-system" },
    { name: "Shopping Cart Backend", tech: "Java", desc: "Scalable enterprise backend system leveraging Java object-oriented design and database persistence.", github: "https://github.com/Evansjones-code/Shopping-Cart-Backend-Java-Project" },
    { name: "Patient Management", tech: "Java", desc: "Healthcare data management system built with robust Java backend structures.", github: "https://github.com/Evansjones-code/Patient-management" },
    { name: "School Management", tech: "Rust", desc: "High-performance, memory-safe backend modules and utility tools.", github: "https://github.com/Evansjones-code/school-management" },
    { name: "Bill Manager", tech: "Rust", desc: "Systems-level efficiency utility and billing workflow processor.", github: "https://github.com/Evansjones-code/Bill_Manager" },
  ];

  const certifications = [
    { name: "Machine Learning", issuer: "ALX Africa", date: "July 2026", link: "https://savanna.alxafrica.com/certificates/ER9yNeZcLs" },
    { name: "Python Programming", issuer: "ALX Africa", date: "March 2026", link: "https://savanna.alxafrica.com/certificates/3zxTXPMSy6" },
    { name: "Cybersecurity", issuer: "ALX Africa", date: "January 2026", link: "https://savanna.alxafrica.com/certificates/s3MSEHrXFx" },
    { name: "AI Career Essentials (AICE)", issuer: "ALX Africa", date: "May 2026", link: "https://savanna.alxafrica.com/certificates/yScTmn9xsG" },
    { name: "Data Analytics", issuer: "ALX Africa", date: "December 2025", link: "https://savanna.alxafrica.com/certificates/zRPTFMYn6S" },
    { name: "Virtual Assistant Skills", issuer: "ALX Africa", date: "April 2026", link: "https://savanna.alxafrica.com/certificates/hBEz3MTRyn" },
    { name: "Graphic Design", issuer: "ALX Africa", date: "February 2026", link: "https://savanna.alxafrica.com/certificates/S6HTRerMJE" },
    { name: "Music & Audio Production", issuer: "ALX Africa", date: "February 2026", link: "https://savanna.alxafrica.com/certificates/cTBmhsXrF6" },
  ];

  const experiences = [
    {
      role: "Commercial & Institutional Driver",
      company: "China Road and Bridge Corporation",
      period: "2022 – 2025",
      desc: "Managed safe transit and logistical operations, upholding strict compliance with safety regulations and maintaining high-standard operational accountability."
    },
    {
      role: "IT & Data Systems Assistant",
      company: "Nairobi City Hall Annex",
      period: "2021 – 2022",
      desc: "Provided first-level helpdesk support, database administration, network maintenance, and hardware troubleshooting to keep municipal systems running smoothly."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-100 px-6 py-12 md:px-24 relative overflow-hidden">
      {/* Background RGB Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header / Hero Section with Profile Photo */}
      <section className="max-w-4xl mx-auto py-16 flex flex-col md:flex-row items-center gap-8 relative z-10">
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden p-[2px] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 shadow-xl shadow-fuchsia-500/20 shrink-0 relative">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 relative">
            <Image 
              src="/profile.jpg" 
              alt="Evans Kotut" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">Evans Kotut</span>
          </h1>
          <p className="text-xl text-cyan-300 font-medium mb-4">
            Full-Stack Developer, Systems Administrator & Digital Content Specialist
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            Results-driven professional based in Nairobi, Kenya, with an active portfolio of 70+ GitHub repositories. 
            Experienced in building scalable backend architectures, APIs, and multi-stack applications.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white px-5 py-2.5 rounded-lg font-semibold transition text-sm shadow-lg shadow-cyan-500/25">
              View All Projects
            </a>
            <a href="#contact" className="bg-slate-900/90 hover:bg-slate-800 text-fuchsia-300 border border-fuchsia-500/50 px-5 py-2.5 rounded-lg font-semibold transition text-sm shadow-lg shadow-fuchsia-500/10">
              Get in Touch
            </a>
            <a href="https://github.com/Evansjones-code" target="_blank" rel="noopener noreferrer" className="border border-emerald-500/50 hover:border-emerald-400 px-5 py-2.5 rounded-lg font-semibold transition text-sm text-emerald-300 bg-slate-900/90 shadow-lg shadow-emerald-500/10">
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-4xl mx-auto py-10 border-t border-slate-800/80 relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-slate-100 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block shadow-[0_0_10px_#22d3ee]"></span>
          Core Competencies & Tech Stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {["Python", "FastAPI", "TypeScript", "JavaScript", "Java", "Rust", "Kotlin", "PostgreSQL", "Git & GitHub", "RESTful APIs", "Machine Learning", "Cybersecurity"].map((tech) => (
            <span key={tech} className="bg-slate-900/90 border border-cyan-500/30 text-cyan-300 px-4 py-2 rounded-md text-sm font-mono shadow-sm">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="max-w-4xl mx-auto py-12 border-t border-slate-800/80 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-fuchsia-500 inline-block shadow-[0_0_10px_#d946ef]"></span>
            Project Repository & Live Demos
          </h2>
          <span className="text-sm text-fuchsia-400 font-mono">70+ Total Repositories</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allProjects.map((proj) => (
            <div 
              key={proj.name} 
              className="bg-slate-900/80 border border-slate-800 hover:border-fuchsia-500/60 p-6 rounded-xl transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-fuchsia-500/10"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-fuchsia-400 transition">{proj.name}</h3>
                  <span className="text-xs font-mono bg-fuchsia-950/80 text-fuchsia-300 px-2.5 py-1 rounded border border-fuchsia-500/30">{proj.tech}</span>
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{proj.desc}</p>
              </div>

              <div className="flex items-center gap-4 pt-2 border-t border-slate-800/80">
                {proj.live && (
                  <a 
                    href={proj.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:opacity-90 text-white px-3 py-1.5 rounded font-medium transition shadow-md shadow-fuchsia-600/30"
                  >
                    View Live Demo &rarr;
                  </a>
                )}
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-slate-400 hover:text-cyan-400 transition font-medium"
                >
                  GitHub Repository &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="max-w-4xl mx-auto py-12 border-t border-slate-800/80 relative z-10">
        <h2 className="text-2xl font-bold mb-8 text-slate-100 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block shadow-[0_0_10px_#34d399]"></span>
          Professional Background
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 p-6 rounded-xl shadow-lg transition">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <h3 className="text-lg font-bold text-slate-100">{exp.role}</h3>
                <span className="text-xs font-mono bg-emerald-950/80 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">{exp.period}</span>
              </div>
              <p className="text-emerald-400 text-sm font-medium mb-2">{exp.company}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="max-w-4xl mx-auto py-12 border-t border-slate-800/80 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block shadow-[0_0_10px_#22d3ee]"></span>
            Verified Professional Certifications
          </h2>
          <span className="text-sm text-cyan-400 font-mono">ALX Africa & More</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div key={cert.name} className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 p-5 rounded-xl flex justify-between items-center transition shadow-lg">
              <div>
                <h3 className="font-bold text-slate-100 text-sm mb-1">{cert.name}</h3>
                <p className="text-xs text-slate-400">{cert.issuer} • Issued {cert.date}</p>
              </div>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/30 px-3 py-1.5 rounded transition"
              >
                Verify &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto py-12 border-t border-slate-800/80 relative z-10">
        <h2 className="text-2xl font-bold mb-2 text-slate-100 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-fuchsia-500 inline-block shadow-[0_0_10px_#d946ef]"></span>
          Get in Touch
        </h2>
        <p className="text-slate-400 text-sm mb-8">Have a project in mind or want to hire? Send me a message below.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-100">Contact Details</h3>
              <p className="text-sm text-slate-300">
                <span className="text-slate-500 block text-xs uppercase font-mono mb-1">Email</span>
                <a href="mailto:evansjones06@gmail.com" className="text-cyan-400 hover:underline">evansjones06@gmail.com</a>
              </p>
              <p className="text-sm text-slate-300">
                <span className="text-slate-500 block text-xs uppercase font-mono mb-1">Phone / WhatsApp</span>
                <a href="tel:+254714445249" className="text-fuchsia-400 hover:underline">+254 714 445 249</a>
              </p>
              <p className="text-sm text-slate-300">
                <span className="text-slate-500 block text-xs uppercase font-mono mb-1">Location</span>
                Nairobi, Kenya
              </p>
            </div>
          </div>

          <form action="https://formsubmit.co/evansjones06@gmail.com" method="POST" className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-4 shadow-xl">
            <div>
              <label className="block text-xs uppercase font-mono text-slate-400 mb-1">Your Name</label>
              <input type="text" name="name" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-400" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs uppercase font-mono text-slate-400 mb-1">Your Email</label>
              <input type="email" name="email" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-400" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-xs uppercase font-mono text-slate-400 mb-1">Message</label>
              <textarea name="message" rows={4} required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-400" placeholder="Hello Evans, I'd like to talk about a project..."></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-emerald-500 hover:opacity-90 text-white font-semibold py-2.5 rounded-lg transition text-sm shadow-lg shadow-fuchsia-500/20">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto py-12 border-t border-slate-800/80 text-center text-slate-500 text-sm relative z-10">
        <p className="mb-2">Get in touch: <a href="mailto:evansjones06@gmail.com" className="text-cyan-400 underline">evansjones06@gmail.com</a> | +254 714 445 249</p>
        <p>© 2026 Evans Kotut. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}