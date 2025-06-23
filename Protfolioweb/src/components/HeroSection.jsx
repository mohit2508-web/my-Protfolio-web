import profileImg from '../assets/profile.png';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-4">
      <div className="mb-4">
        <span className="bg-gray-900 px-4 py-1 rounded-full border border-white text-sm inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          AVAILABLE FOR WORK
        </span>
      </div>

      <h1 className="text-[4rem] sm:text-[6rem] font-bold leading-none">
        MOHIT JADON
      </h1>

      {/* 👇 Typing Animation */}
      <div className="text-xl sm:text-4xl mt-4 text-green-700 font-semibold">
        <TypeAnimation
          sequence={[
            " I am a Web Developer", 2000,
            " I am a Java programmer", 2000,
            " I am a React Developer", 2000,
            "I am a Open Source Contributor", 2000,
          ]}
          speed={50}
          wrapper="span"
          repeat={Infinity}
        />
      </div>

      <img src={profileImg} alt="Profile" className="w-64 mt-10 rounded-full" />

      <p className="mt-8 text-lg max-w-xl">
        I blend artistry with cutting-edge technology to deliver websites that not only look stunning but also drive results.
      </p>

      <a href="/contact" className="mt-6 bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-full font-semibold">
        Let's Talk
      </a>
    </section>
  );
}
