import React from "react";

function Landing() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 mt-6 lg:px-24">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center gap-12 w-full max-w-7xl">
        {/* Text Section */}
        <section className="text-gray-900 w-full lg:w-1/2 text-center lg:text-left px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight text-pretty whitespace-normal mb-6">
            Hi, I'm <span className="text-purple-600 block">Sphelele Ngcobo</span>
            <span className="block">A Full Stack Developer</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8">
            Passionate about creating innovative web solutions and bringing ideas to life through code.
            With expertise spanning multiple programming languages and frameworks, I specialize in building scalable web applications that deliver exceptional user experiences.
            My journey in software development has equipped me with a strong foundation in both frontend and backend technologies, allowing me to tackle complex challenges with creative solutions.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
              Full Stack Development
            </span>
            <span className="px-4 py-2 bg-pink-100 text-pink-700 text-sm font-medium rounded-full">
              Problem Solver
            </span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full">
              Continuous Learner
            </span>
          </div>
        </section>

        {/* Image */}
        <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 border-2 border-gray-300 rounded-lg flex-shrink-0"></div>
      </div>
    </div>
  );
}

export default Landing;
