export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-6">
        Love Amarachi Onyekwere
      </h1>

      <h2 className="text-2xl mb-6 text-center">
  DevOps Engineer | Cloud Engineer | Full Stack Developer | Cheminformatics Researcher
</h2>

<p className="max-w-3xl text-center text-lg leading-8">
  Welcome to my professional portfolio website. This website documents
  my journey in DevOps Engineering, Cloud Computing, Software Engineering,
  and my interdisciplinary background in Biochemistry, Chemistry of Natural
  Bioactive Products, Cheminformatics, and Drug Discovery Research.
</p>

      <section className="max-w-3xl mt-12 text-center">
        <h3 className="text-3xl font-semibold mb-4">
          About Me
        </h3>

        <p className="text-lg leading-8">
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

  <div className="grid md:grid-cols-2 gap-8 text-left">

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

  </div>
</section>

<section className="max-w-5xl mx-auto mt-16 text-center">
  <h3 className="text-3xl font-semibold mb-4">
    Contact
  </h3>

  <p className="text-lg">
    GitHub: LoveAmarachiCloud
  </p>
</section>
     </main>
  );
}