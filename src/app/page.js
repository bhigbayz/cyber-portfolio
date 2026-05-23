export default function CyberPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Badejo Michael
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              ISC2 CC Certified | Aspiring SOC Analyst | Security+ Student
            </p>
            <p className="mt-6 text-gray-400 leading-7">
              Passionate about cybersecurity, security operations, networking,
              and ethical hacking. Currently building practical experience in
              incident response, SIEM tools, Linux environments, and threat
              detection.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a
                href="https://github.com/bhigbayz"
                target="_blank"
                className="bg-white text-black px-5 py-3 rounded-2xl font-semibold hover:opacity-90"
              >
                GitHub
              </a>

              <a
                href="https://tryhackme.com/p/badejom2"
                target="_blank"
                className="bg-white text-black px-5 py-3 rounded-2xl font-semibold hover:opacity-90"
              >
                TryHackMe
              </a>

              <a
                href="https://linkedin.com/in/michael-badejo-46b8b6292"
                target="_blank"
                className="bg-white text-black px-5 py-3 rounded-2xl font-semibold hover:opacity-90"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Cybersecurity",
                "SIEM Basics",
                "Linux/Kali Linux",
                "Incident Response",
                "Network Security",
                "Threat Detection",
                "Wireshark",
                "Nmap",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-black border border-zinc-700 rounded-xl px-4 py-3 text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-8 py-16 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Certifications</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-semibold">
                ISC2 Certified in Cybersecurity (CC)
              </h3>
              <p className="text-gray-400 mt-3">
                Successfully passed the ISC2 CC certification covering security
                principles, network security, incident response, business
                continuity, and access control fundamentals.
              </p>
            </div>

            <div className="bg-black p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-semibold">
                CompTIA Security+
              </h3>
              <p className="text-gray-400 mt-3">
                Currently studying Security+ with focus on networking,
                encryption, SIEM, IAM, incident response, and security
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Projects & Labs</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "SOC Analyst Labs",
              description:
                "Completed beginner SOC analyst labs involving phishing detection, incident response, and log analysis.",
            },
            {
              title: "Network Scanning",
              description:
                "Performed network discovery and enumeration using Nmap in controlled lab environments.",
            },
            {
              title: "Linux Practice",
              description:
                "Practiced Linux commands, permissions, networking, and security tools using Kali Linux.",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-600 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-7">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="px-8 py-16 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>

          <p className="text-gray-400 text-lg leading-8">
            Open to remote opportunities in cybersecurity, SOC analysis,
            technical support, and virtual assistance.
          </p>

          <div className="mt-8 space-y-3 text-lg">
            <p>Email: badejom2@gmail.com</p>
            <p>Location: Lagos, Nigeria</p>
          </div>
        </div>
      </section>
    </div>
  );
}
