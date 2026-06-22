export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center px-6 py-10 md:px-12 lg:px-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
        Love Amarachi Onyekwere
      </h1>

      <h2 className="text-lg md:text-2xl mb-6 text-center max-w-5xl">
  DevOps Engineer | Cloud Engineer | Full Stack Developer | Cheminformatics Researcher
</h2>

<p className="max-w-3xl text-center text-base md:text-lg leading-8">
  Welcome to my professional portfolio website. This website documents
  my journey in DevOps Engineering, Cloud Computing, Software Engineering,
  and my interdisciplinary background in Biochemistry, Chemistry of Natural
  Bioactive Products, Cheminformatics, and Drug Discovery Research.
</p>

      <section className="max-w-3xl mt-12 text-center">
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
        Frontend
      </h4>
      <p>React, Next.js, HTML, CSS</p>
    </div>

    <div>
      <h4 className="text-xl font-bold mb-2">
        Version Control
      </h4>
      <p>Git, GitHub</p>
    </div>
    <section className="max-w-5xl mx-auto mt-16 text-center">
  <h3 className="text-3xl font-semibold mb-8">
    Projects
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

    <div className="border border-slate-700 rounded-lg p-6">
      <h4 className="text-xl font-bold mb-2">
        Portfolio Website
      </h4>

      <p>
        Personal portfolio website built with Next.js, TypeScript,
        and Tailwind CSS to showcase my DevOps, Cloud,
        Software Engineering, and Cheminformatics journey.
      </p>
    </div>

    <div className="border border-slate-700 rounded-lg p-6">
      <h4 className="text-xl font-bold mb-2">
        AWS Cloud Projects
      </h4>

      <p>
        Collection of hands-on AWS projects focused on cloud
        infrastructure, deployment, automation, and security.
      </p>
    </div>

  </div>
</section>
</div>
</section>

<section className="max-w-5xl mx-auto mt-16 text-center">
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