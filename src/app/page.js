"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <section className="section">
        <div
          className="relative md:py-30 py-14 max-md:pb-20 md:px-20 px-4 bg-cover bg-center md:w-11/12 w-full mx-auto clip-diagonal"
          style={{ backgroundImage: "url('/images/home-banner-two.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-30 z-0 md:rounded-xl" />

          {/* Content */}
          <div className="relative z-10">
            <h1 className="md:text-5xl text-[40px] capitalize md:leading-[60px] leading-[52px] font-[900] md:mt-8 md:mb-16 mb-12 text-[#FFFFFF]">
              Where young minds
              <br className="max-md:hidden" />
              learn to think ahead,
              <br className="max-md:hidden" />
              one game at a time
            </h1>
            {/* <Link
              href="/contact-us"
              className=" text-white bg-[#2B3AA0] px-10 py-3 rounded-lg transition-all duration-[3000ms] ease-in-out hover:bg-gradient-to-r hover:from-[#7a86d8] hover:via-[#4b57a3] hover:to-[#2B3AA0]"
            >
              Book a Demo
            </Link> */}
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="w-11/12 mx-auto flex md:flex-row-reverse flex-col-reverse  gap-12 mt-20">
        <div className="md:w-[50%] w-full flex flex-col gap-4 max-md:-mt-2">
          <h2 className="text-5xl font-bold text-[#FFB31A] max-md:hidden">
            At ThinQ Chess
          </h2>
          <p className="text-[18px]">
            We believe chess is more than a game—it's a way to shape minds. Our
            courses are designed for children aged 5+ years onwards, helping
            build focus, strategy, and confidence from the board to real life.
            Every class, every move, and every tournament is designed to sharpen
            their thinking while keeping the experience fun and engaging.
          </p>
          <p className="text-[18px]">
            We’re transparent with parents, focused on progress, and always
            cheering from the sidelines.
          </p>
        </div>
        <div className="md:w-[50%] w-full">
          <h2 className="text-4xl font-bold text-[#FFB31A] md:hidden mb-8">
            At ThinQ Chess
          </h2>
          <div className="p-1 rounded-tl-[40px] rounded-br-[40px] border-[4px] group border-solid border-black">
            <img
              src="/images/indian-img-one.jpg"
              alt="Chessboard"
              className="w-full h-[300px] group-hover:scale-[105%] transition-all duration-300 object-cover rounded-tl-[40px] rounded-br-[40px] "
            />
          </div>
        </div>
      </section>

      {/* Why Choose Thinq Chess: */}
      <section className="w-full md:py-24 py-14 md:pb-30 md:mt-30 mt-10 bg-gradient-to-r from-[#d4d9f7] via-[#b3baec] to-[#747fb1]">
        <div className="w-11/12 flex max-md:flex-col mx-auto">
          <div className="w-[50%] max-md:w-full">
            <h2 className="md:text-5xl text-4xl font-bold mt-4">
              Why Choose ThinQ Chess
            </h2>
            <div className="md:hidden mt-10 p-[4px] border-4 border-[#FFB31A] inline-block rounded-tr-[100px] rounded-bl-[100px]">
              <img
                src="/images/indian-img-three.jpg"
                alt="Framed"
                className="w-full rounded-tr-[95px] object-cover rounded-bl-[95px] "
              />
            </div>

            <ul className="mt-8 flex flex-col gap-4">
              {[
                "Transparent tracking of student progress",
                "Personalised attention through game-based coaching",
                "Structured curriculum with real outcomes",
                "Tournaments to build confidence",
                "Encouraging and inspiring mentors",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <img src="/images/check-mark.png" className="w-[20px]" />
                  </span>
                  <span className="text-[20px] text-black font-[400]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[50%] max-md:w-full relative max-md:hidden">
            {/* images */}
            <motion.div
              animate={{
                y: [-15, 15, -15], // move right
              }}
              transition={{
                duration: 3, // total animation time
                ease: "easeInOut",
                repeat: Infinity, // repeat forever
                repeatDelay: 1, // delay between repeats
              }}
            >
              <div className="p-[4px] border-4 border-[#FFB31A] inline-block absolute rounded-tr-[100px] rounded-bl-[100px] top-[-160px] left-[0px]">
                <img
                  src="/images/head-coach.jpeg"
                  alt="Framed"
                  className="h-[450px] w-[280px] rounded-tr-[95px] object-cover rounded-bl-[95px]"
                />
              </div>
              <div className="absolute bottom-[-375px] left-[8%] flex flex-col items-center">
                <p className="text-[24px] font-bold ">Krishna Thapa</p>
                <p className="text-[16px]">Candidate Master, Head Coach</p>
              </div>
            </motion.div>
            <motion.div
              animate={{
                y: [15, -15, 15], // move right
              }}
              transition={{
                duration: 3, // total animation time
                ease: "easeInOut",
                repeat: Infinity, // repeat forever
                repeatDelay: 1, // delay between repeats
              }}
            >
              <div className="absolute top-[-45px] right-[17%] flex flex-col items-center">
                <p className="text-[24px] font-bold ">Chiranth M</p>
                <p className="text-[16px]">Senior coach</p>
                <p className="text-[16px]">(FIDE rated player)</p>
              </div>
              <div className="p-[4px] border-4 border-[#FFB31A] inline-block absolute rounded-tr-[100px] rounded-bl-[100px] top-[50px] right-[20px]">
                <img
                  src="/images/Chiranth .jpeg"
                  alt="Framed"
                  className="h-[450px] w-[280px] rounded-tr-[95px] object-cover object-center rounded-bl-[95px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Highlights: */}
      <section className="w-full md:py-20 py-2 pb-16 mt-10">
        <div className="w-11/12 mx-auto">
          <h2 className="md:text-5xl text-4xl text-center font-bold mt-4 text-[#2B3AA0]">
            Quick Highlights
          </h2>
          <div className="max-md:flex max-md:flex-col md:grid grid-cols-3 grid-rows-2 gap-8 md:mt-14 mt-8">
            <div className="flex flex-col group items-center shadow-md px-4 py-4 rounded-[16px] hover:scale-[102%] transition-all duration-300">
              <img
                src="/images/performance.png"
                className="w-[100px] group-hover:scale-x-[-1] transition-all duration-300"
              />
              <h3 className="md:text-[20px] text-[18px] text-center mt-3">
                Programs from the foundation to the professional level
              </h3>
            </div>

            <div className="flex flex-col items-center group shadow-md px-4 py-4 rounded-[16px] hover:scale-[102%] transition-all duration-300">
              <img
                src="/images/trophy.png"
                className="w-[100px] group-hover:scale-x-[-1] transition-all duration-300"
              />
              <h3 className="md:text-[20px] text-[18px] text-center mt-3">
                Regular
                <br />
                Tournaments
              </h3>
            </div>

            <div className="flex flex-col items-center group shadow-md px-4 py-4 rounded-[16px] hover:scale-[102%] transition-all duration-300">
              <img
                src="/images/progress.png"
                className="w-[100px] group-hover:scale-x-[-1] transition-all duration-300"
              />
              <h3 className="md:text-[20px] text-[18px] text-center mt-3">
                Progress is tracked and shared regularly with parents
              </h3>
            </div>

            <div className="flex flex-col items-center group shadow-md px-4 py-4 rounded-[16px] hover:scale-[102%] transition-all duration-300">
              <img
                src="/images/mentoring.png"
                className="w-[100px] group-hover:scale-x-[-1] transition-all duration-300"
              />
              <h3 className="md:text-[20px] text-[18px] text-center mt-3">
                Classes led by trained, child-friendly trainers
              </h3>
            </div>

            <div className="flex flex-col group items-center shadow-md px-4 py-4 rounded-[16px] hover:scale-[102%] transition-all duration-300">
              <img
                src="/images/log-in.png"
                className="w-[100px] group-hover:scale-x-[-1] transition-all duration-300"
              />
              <h3 className="md:text-[20px] text-[18px] text-center mt-3">
                Flexible schedules
              </h3>
            </div>

            <div className="flex flex-col group items-center shadow-md px-4 py-4 rounded-[16px] hover:scale-[102%] transition-all duration-300">
              <img
                src="/images/online-offline-coach.png"
                className="w-[100px] group-hover:scale-x-[-1] transition-all duration-300"
              />
              <h3 className="md:text-[20px] text-[18px] text-center mt-3">
                Online and Offline Coaching Available
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
