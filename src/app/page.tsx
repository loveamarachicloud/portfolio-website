export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center px-6 py-10 md:px-12 lg:px-20">
      <nav className="w-full max-w-6xl flex items-center justify-between mb-10">
  <p className="text-xl font-bold">
    Love Amarachi
  </p>

  <div className="hidden md:flex gap-6 text-sm text-slate-300">
    <a href="#about" className="hover:text-white">About</a>
    <a href="#skills" className="hover:text-white">Skills</a>
    <a href="#projects" className="hover:text-white">Projects</a>
    <a href="#contact" className="hover:text-white">Contact</a>
  </div>
</nav>
<img
  src="/profile.jpeg"
  alt="Love Amarachi Onyekwere"
  className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500"
/>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
        Love Amarachi Onyekwere
      </h1>

      <h2 className="text-lg md:text-2xl mb-6 text-center max-w-5xl">
  Cloud & DevOps Engineer • Full Stack Developer • Education Technology & Research Professional
</h2>

<p className="max-w-3xl text-center text-base md:text-lg leading-8 text-slate-300">
  I build cloud-ready web applications and automation solutions while applying my background in education recruitment, scientific research, and data-driven problem solving.
</p>
<div className="flex flex-col md:flex-row gap-4 mt-8">
  <a
    href="#projects"
    className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
  >
    View Projects
  </a>

  <a
    href="/Love-Amarachi-Onyekwere-CV.pdf"
    target="_blank"
    className="border border-slate-600 px-6 py-3 rounded-lg hover:bg-slate-800"
  >
    Download CV
  </a>
</div>
      <section id="about" className="max-w-3xl mt-12 text-center">
        <h3 className="text-3xl font-semibold mb-4">
          About Me
        </h3>

        <p className="text-base md:text-lg leading-8">
  I am Love Amarachi Onyekwere, a technology professional passionate
  about DevOps Engineering, Cloud Computing, and Software Engineering.
  I hold a B.Sc. in Biochemistry and a Master's degree in Chemistry of
  Natural Bioactive Products, with research interests in Cheminformatics,
  Drug Discovery, and Computational Research. My goal is to bridge science
  and technology by applying modern software, cloud, and data-driven
  solutions to real-world scientific and research challenges.
</p></section>
<section className="max-w-5xl mx-auto mt-16 text-center">
  <h3 className="text-3xl font-semibold mb-8">
    Core Focus Areas
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
    <div className="border border-slate-700 rounded-lg p-6">
      <h4 className="text-xl font-bold mb-2">Cloud & DevOps</h4>
      <p>
        Building, deploying, and managing modern applications using cloud,
        automation, Linux, Git, Docker, and DevOps workflows.
      </p>
    </div>

    <div className="border border-slate-700 rounded-lg p-6">
      <h4 className="text-xl font-bold mb-2">Education Technology</h4>
      <p>
        Applying my experience in international education recruitment to build
        digital tools for student admissions, lead generation, and study abroad support.
      </p>
    </div>

    <div className="border border-slate-700 rounded-lg p-6">
      <h4 className="text-xl font-bold mb-2">Scientific Research</h4>
      <p>
        Bringing my background in Biochemistry, Chemistry of Natural Bioactive Products,
        Cheminformatics, and Drug Discovery into data-driven research solutions.
      </p>
    </div>
  </div>
</section>
<section className="max-w-5xl mx-auto mt-16">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

    <div className="border border-slate-700 rounded-lg p-6">
      <h3 className="text-3xl font-bold text-blue-400">
        10+
      </h3>
      <p className="mt-2 text-slate-300">
        Projects Delivered
      </p>
    </div>

    <div className="border border-slate-700 rounded-lg p-6">
      <h3 className="text-3xl font-bold text-blue-400">
  AWS
</h3>
<p className="mt-2 text-slate-300">
  Cloud & DevOps
</p>
    </div>

    <div className="border border-slate-700 rounded-lg p-6">
      <h3 className="text-3xl font-bold text-blue-400">
  3
</h3>
<p className="mt-2 text-slate-300">
  Industry Domains
</p>
    </div>

    <div className="border border-slate-700 rounded-lg p-6">
      <h3 className="text-3xl font-bold text-blue-400">
  MSc
</h3>
<p className="mt-2 text-slate-300">
  Research Expertise
</p>
    </div>

  </div>
</section>
<section className="max-w-6xl mx-auto mt-16 text-center">
  <h3 className="text-3xl font-semibold mb-8">
    Current Learning
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

    <div className="border border-slate-700 rounded-lg p-6">
      <h4 className="text-xl font-bold mb-2">
        AWS Cloud Engineering
      </h4>

      <p className="text-slate-300">
        Building hands-on cloud infrastructure projects using AWS,
        Linux, networking, security, and deployment practices.
      </p>
    </div>

    <div className="border border-slate-700 rounded-lg p-6">
      <h4 className="text-xl font-bold mb-2">
        DevOps & Automation
      </h4>

      <p className="text-slate-300">
        Developing skills in Git, Docker, CI/CD workflows,
        infrastructure automation, and cloud operations.
      </p>
    </div>

    <div className="border border-slate-700 rounded-lg p-6">
      <h4 className="text-xl font-bold mb-2">
        Full Stack Development
      </h4>

      <p className="text-slate-300">
        Building responsive web applications with Next.js,
        TypeScript, React, and Tailwind CSS.
      </p>
    </div>

  </div>
</section>
      <section id="skills" className="max-w-5xl mx-auto mt-16 text-center">
  <h3 className="text-3xl font-semibold mb-8">
    Skills
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

    <div>
      <h4 className="text-xl font-bold mb-2">
        Cloud & DevOps
      </h4>
      <p>AWS, Docker, Kubernetes, Linux</p>
    </div>

    <div>
      <h4 className="text-xl font-bold mb-2">
        Programming
      </h4>
      <p>Python, JavaScript, TypeScript</p>
    </div>

    <div>
  <h4 className="text-xl font-bold mb-2">
    Frontend Development
  </h4>
      <p>
  Next.js, React, TypeScript,
  Tailwind CSS, HTML5, CSS3,
  Responsive Design
</p>
    </div>

        <div>
  <h4 className="text-xl font-bold mb-2">
    Research & Data
  </h4>

  <p>
    Cheminformatics, Drug Discovery Research,
    Scientific Documentation, Data Analysis
  </p>
</div>
  </div>
</section>
<section id="experience" className="max-w-6xl mx-auto mt-16">
  <h3 className="text-3xl font-semibold mb-8 text-center">
    Professional Experience
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    <div className="border border-slate-700 rounded-lg p-6">
      <h4 className="text-xl font-bold mb-2">
        Education Recruitment Consultant
      </h4>

      <p className="text-slate-400 mb-4">
        Global Education Agency
      </p>
<p className="text-sm text-blue-400 mb-4">
  Education Recruitment • Admissions • CRM • Business Development
</p>
      <ul className="list-disc list-inside text-slate-300 space-y-2">
        <li>Supported international student recruitment and admissions processes.</li>
        <li>Guided students through university application workflows.</li>
        <li>Managed client relationships and student engagement activities.</li>
        <li>Contributed to business development and lead generation initiatives.</li>
      </ul>
    </div>

    <div className="border border-slate-700 rounded-lg p-6">
      <h4 className="text-xl font-bold mb-2">
        Research Scientist
      </h4>

      <p className="text-slate-400 mb-4">
        Biochemistry & Cheminformatics Research
      </p>
<p className="text-sm text-green-400 mb-4">
  Research • Cheminformatics • Drug Discovery • Data Analysis
</p>
      <ul className="list-disc list-inside text-slate-300 space-y-2">
        <li>Conducted scientific research in natural bioactive products.</li>
        <li>Applied computational approaches to chemical and biological data.</li>
        <li>Worked on drug discovery and cheminformatics research projects.</li>
        <li>Produced research findings and technical documentation.</li>
      </ul>
    </div>

  </div>
</section>
<section id="projects" className="max-w-6xl mx-auto mt-16 text-center">
  <h3 className="text-3xl font-semibold mb-8">
    Projects
  </h3>

  {/* Cloud & DevOps Projects */}
  <div className="mb-12">
    <h4 className="text-2xl font-bold mb-6 text-left">
  Cloud & DevOps Projects
</h4>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
  <div className="border border-slate-700 rounded-lg p-6">
    <h5 className="text-xl font-bold mb-2">
      Portfolio Website
    </h5>
<div className="mb-4">
  <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
    Completed
  </span>
</div>
    <p className="mb-4 text-slate-300 leading-7">
  Designed and developed a responsive portfolio website
  using Next.js, TypeScript, and Tailwind CSS to showcase
  engineering, education, and scientific research projects.
</p>
<ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
  <li>Built with Next.js and TypeScript</li>
  <li>Fully responsive design</li>
  <li>Deployed with GitHub version control</li>
</ul>
    <p className="text-sm text-slate-400 mb-4">
      Next.js • TypeScript • Tailwind CSS • GitHub
    </p>

    <div className="flex gap-3">
      <a
        href="https://github.com/loveamarachicloud/portfolio-website"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        GitHub
      </a>

      <a
        href="#"
        className="border border-slate-600 px-4 py-2 rounded hover:bg-slate-800"
      >
        Live Demo
      </a>
    </div>
  </div>

  <div className="border border-slate-700 rounded-lg p-6 flex flex-col justify-between">
  <h5 className="text-2xl font-bold mb-3">
  AWS Cloud Infrastructure Lab
</h5>
<div className="mb-4">
  <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
    Completed
  </span>
</div>
<p className="mb-4 text-slate-300 leading-7">
  Provisioned and managed an AWS EC2 Linux server for DevOps
  learning and cloud infrastructure administration. Configured
  security settings, monitored instance health, and practiced
  deployment and system management workflows.
</p>
<ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
  <li>Launched and configured AWS EC2 instance</li>
  <li>Managed Linux server environment</li>
  <li>Configured security and access controls</li>
  <li>Monitored infrastructure health and availability</li>
</ul>
  <p className="text-sm text-slate-400 mb-4">
    AWS • Linux • Docker • Git
  </p>

  <div className="flex gap-3">
    <a
      href="https://github.com/loveamarachicloud"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
    >
      GitHub
    </a>

    <a
      href="#"
      className="border border-slate-600 px-4 py-2 rounded hover:bg-slate-800"
    >
      Demo
    </a>
  </div>
</div>
</div>
  </div>

  {/* Education Technology Projects */}
  <div className="mb-12">
    <h4 className="text-2xl font-bold mb-6 text-left">
      Education Technology Projects
    </h4>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      <div className="border border-slate-700 rounded-lg p-6 flex flex-col justify-between">
        <h5 className="text-xl font-bold mb-2">
          Global Education Website
        </h5>
<div className="mb-4">
  <span className="bg-yellow-600 text-white text-xs px-3 py-1 rounded-full">
    In Development
  </span>
</div>
        <p className="mb-4">
          Platform designed to support international student
          recruitment and study-abroad services.
        </p>
<ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
  <li>International student recruitment platform</li>
  <li>Study abroad application workflows</li>
  <li>Lead capture and inquiry management</li>
</ul>
        <p className="text-sm text-slate-400 mb-4">
  Next.js • Education Recruitment • CRM
</p>

<div className="flex gap-3">
  <a
    href="https://github.com/loveamarachicloud"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
  >
    GitHub
  </a>

  <a
    href="#"
    className="border border-slate-600 px-4 py-2 rounded hover:bg-slate-800"
  >
    Demo
  </a>
</div>
      </div>

      <div className="border border-slate-700 rounded-lg p-6 flex flex-col justify-between">
        <h5 className="text-xl font-bold mb-2">
          AI Student Lead Generation System
        </h5>
<div className="mb-4">
  <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
    Planned
  </span>
</div>
        <p className="mb-4">
          AI-powered qualification and lead management system
          for international student recruitment.
        </p>
<ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
  <li>Automated lead qualification</li>
  <li>AI-powered student screening</li>
  <li>CRM integration planning</li>
</ul>
        <p className="text-sm text-slate-400 mb-4">
  AI • Automation • CRM • Lead Scoring
</p>

<div className="flex gap-3">
  <a
    href="https://github.com/loveamarachicloud"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
  >
    GitHub
  </a>

  <a
    href="#"
    className="border border-slate-600 px-4 py-2 rounded hover:bg-slate-800"
  >
    Demo
  </a>
</div>
      </div>
    </div>
  </div>

  {/* Research & Scientific Computing Projects */}
  <div>
    <h4 className="text-2xl font-bold mb-6 text-left">
      Research & Scientific Computing
    </h4>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      <div className="border border-slate-700 rounded-lg p-6 flex flex-col justify-between">
        <h5 className="text-xl font-bold mb-2">
          Cheminformatics Research Projects
        </h5>
<div className="mb-4">
  <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
    Research
  </span>
</div>
        <p className="mb-4">
          Computational approaches for chemical data analysis,
          bioactive compounds, and molecular research.
        </p>
<ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
  <li>Chemical data analysis</li>
  <li>Bioactive compound research</li>
  <li>Computational chemistry workflows</li>
</ul>
        <p className="text-sm text-slate-400 mb-4">
  Cheminformatics • Data Analysis • Research
</p>

<div className="flex gap-3">
  <a
    href="https://github.com/loveamarachicloud"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
  >
    GitHub
  </a>

  <a
    href="#"
    className="border border-slate-600 px-4 py-2 rounded hover:bg-slate-800"
  >
    Demo
  </a>
</div>
      </div>

      <div className="border border-slate-700 rounded-lg p-6 flex flex-col justify-between">
        <h5 className="text-xl font-bold mb-2">
          Drug Discovery Analytics
        </h5>
<div className="mb-4">
  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
    Research
  </span>
</div>
        <p className="mb-4">
          Research-driven exploration of computational methods
          used in modern drug discovery workflows.
        </p>
<ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
  <li>Drug discovery data exploration</li>
  <li>Molecular property analysis</li>
  <li>Research-driven computational methods</li>
</ul>
        <p className="text-sm text-slate-400 mb-4">
  Drug Discovery • Data Science • Research
</p>

<div className="flex gap-3">
  <a
    href="https://github.com/loveamarachicloud"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
  >
    GitHub
  </a>

  <a
    href="#"
    className="border border-slate-600 px-4 py-2 rounded hover:bg-slate-800"
  >
    Demo
  </a>
</div>
      </div>
    </div>
  </div>
</section>


<section id="contact" className="max-w-5xl mx-auto mt-16 text-center">
  <h3 className="text-3xl font-semibold mb-4">
    Contact
  </h3>

  <p className="text-lg mb-2">
  GitHub:
  <a
    href="https://github.com/loveamarachicloud"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 ml-2"
  >
    LoveAmarachiCloud
  </a>
</p>

<p className="text-lg mb-2">
  Email: loveamarachionyekwere@gmail.com
</p>

<p className="text-lg">
  LinkedIn:
  <a
    href="https://linkedin.com/in/love-amarachi-onyekwere-0423bb67"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 ml-2"
  >
    View Profile
  </a>
</p>
</section>
<footer className="mt-20 mb-6 text-center text-slate-400">
  <p>
    © 2026 Love Amarachi Onyekwere. Built with Next.js and Tailwind CSS.
  </p>
</footer>
     </main>
  );
}