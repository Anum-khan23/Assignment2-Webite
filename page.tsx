import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function About() {
  return (
    <div className="bg-gray-100">
      <Header />

      <section className="container mx-auto my-12 p-6 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          About Me
        </h1>
        <p className="text-lg text-white mb-4">
          I am a passionate web developer with a focus on creating user-friendly
          and impactful web applications. My work is centered around clean code,
          modern technologies like Next.js and Tailwind CSS, and a deep love for
          design.
        </p>
        <p className="text-lg text-white mt-4">
          I believe in continuous learning and love exploring new tools and
          frameworks to improve my skills. Through this portfolio, I aim to
          showcase some of the projects I’ve worked on and the skills I’ve
          developed over time.
        </p>
      </section>

      <section className="container mx-auto my-12 p-6 bg-gradient-to-r from-teal-500 to-blue-500 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          My Skills
        </h2>
        <ul className="list-disc list-inside text-lg text-white">
          <li>🔹 JavaScript | TypeScript | React | Next.js | Ms Office</li>
          <li>🔹 HTML | CSS | Tailwind CSS</li>
          <li>🔹 Git | GitHub</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}
