import Image from "next/image";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import ScrollFillNumber from "@/components/scrollNumber";
import ScrollImage from "@/components/scrollImage";
import InfiniteScrollSkills from "@/components/skills";

export default function Home() {
  return (
    <main className="lg:px-40 px-8 py-12 flex flex-col">
      <section className="min-h-screen flex flex-col justify-between">
        {/* Header */}
        <div className="flex justify-between items-center">
          <Image 
            src={"/portfolio-logo.svg"}
            alt=""
            width={40}
            height={40}
            className="rounded"
          />
          <div className="flex gap-16 text-2xl">
            <a href="#"><FaGithub className="text-4xl " /></a>
            <a href="#"><FaLinkedinIn className="text-4xl" /></a>
            <a href="#"><FaInstagram className="text-4xl" /></a>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center flex-grow mt-20">
          {/* Left Text */}
          <div className="max-w-xl text-center lg:text-left">
            <p className="text-gray-600 text-2xl mb-2">Hi, I’m <span className="text-black font-semibold underline">Aldi</span></p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Web Developer</h1>
            <p className="text-gray-600 mb-6">
              from Indonesia, passionate about turning ideas into clean,
              functional, and scalable websites.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button className="bg-black text-white px-4 py-2 rounded transition duration-300 hover:-translate-y-1 hover:shadow-xl">Contact Me</button>
              <button className="border border-black px-4 py-2 rounded transition duration-300 hover:-translate-y-1 hover:shadow-xl">My Projects</button>
            </div>
          </div>

          {/* Right Picture */}
          <Image 
            src={"/dummy-pict.svg"}
            alt=""
            width={300}
            height={400}
            className="rounded"
          />
        </div>

        {/* Horizontally scrollable skills */}
        <InfiniteScrollSkills />
      </section>

      {/* Project Section */}
      <section id="project-section" className="mt-36 min-h-screen">
        <p className="text-gray-600 mb-8">
          I specialize in building sites using Next.js and Tailwind CSS,<br />
          Here’s some of the projects I’ve built :
        </p>

        <h2 className="text-2xl font-bold mb-12">My Projects</h2>

        <div className="flex flex-col lg:flex-row items-start gap 10 sticky top-1/2  max-h-screen">
          <div className="flex items-start gap-4 flex-1 h-full">
            <ScrollFillNumber sectionSelector="#project-section" />
            <div className="flex flex-col justify-center items-start h-full pt-5">
              <h3 className="font-semibold">Nagari Limokoto</h3>
              <p className="text-sm text-gray-600 max-w-sm">
                Helping local communities go digital, this website presents the
                village’s profile and enables residents to submit administrative
                forms easily and efficiently.
              </p>
            </div>
          </div>

          <ScrollImage />
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-32 mb-20 min-h-screen">
        <p className="text-center text-gray-600 mb-4 uppercase tracking-wide">Need a Developer?</p>
        <div className="max-w-md mx-auto border p-8 bg-white">
          <h2 className="text-center text-xl font-bold mb-2">Contact Me</h2>
          <p className="text-center text-sm text-gray-600 mb-6">Let's work together!<br />Fill out this short form and I’ll get back to you as soon as possible.</p>

          <form className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 text-sm font-semibold">Name</label>
              <input type="text" className="w-full border p-2" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">Email</label>
              <input type="text" className="w-full border p-2" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">Message</label>
              <textarea rows={4} className="w-full border p-2"></textarea>
            </div>
            <button type="submit" className="bg-black text-white py-2 rounded shadow transition-all duration-300 ease-in-out
             hover:bg-white hover:text-black hover:border hover:border-black
             hover:shadow-xl">Submit</button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Or email me directly at <a href="mailto:aldi.dev@email.com" className="underline">aldi.dev@email.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}
