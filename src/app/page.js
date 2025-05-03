"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <section className="section">
        <div
          className="py-30 px-20 bg-cover bg-center w-11/12 mx-auto clip-diagonal"
          style={{ backgroundImage: "url('/images/homebanner.jpg')" }}
        >
          <h1 className="text-4xl font-bold text-[#FFB31A]">
            Every Knight Starts Somewhere
          </h1>
          <h2 className="text-5xl capitalize leading-[60px] font-[900] mt-8 text-[#FFFFFF]">
            Where young minds
            <br />
            learn to think ahead,
            <br />
            one game at a time
          </h2>
          <button className="mt-16 text-white bg-[#2B3AA0] px-10 py-3 rounded-lg transition-all duration-[3000ms] ease-in-out hover:bg-gradient-to-r hover:from-[#7a86d8] hover:via-[#4b57a3] hover:to-[#2B3AA0]">
            Join the Game
          </button>
        </div>
      </section>

      {/* Intro section */}
      <section className="w-11/12 mx-auto flex flex-row-reverse gap-12 mt-20">
        <div className="w-[50%] flex flex-col gap-4">
          <h2 className="text-5xl font-bold text-[#FFB31A]">At Thinq Chess</h2>
          <p className="text-[18px]">
            We believe chess is more than a game—it's a way to shape minds. Our
            courses are designed for children aged 5 to 15, helping build focus,
            strategy, and confidence from the board to real life. Every class,
            every move, and every tournament is designed to sharpen their
            thinking while keeping the experience fun and engaging.
          </p>
          <p className="text-[18px]">
            We’re transparent with parents, focused on progress, and always
            cheering from the sidelines.
          </p>
        </div>
        <div className="w-[50%]">
          <div className="p-1 rounded-tl-[40px] rounded-br-[40px] border-[4px] group border-solid border-black">
            <img
              src="/images/intro.jpg"
              alt="Chessboard"
              className="w-full h-[300px] group-hover:scale-[105%] transition-all duration-300 object-cover rounded-tl-[40px] rounded-br-[40px] "
            />
          </div>
        </div>
      </section>

      {/* Why Choose Thinq Chess: */}
      <section className="w-full py-24 pb-30 mt-30 bg-gradient-to-r from-[#d4d9f7] via-[#b3baec] to-[#747fb1]">
        <div className="w-11/12 flex mx-auto">
          <div className="w-[50%]">
            <h2 className="text-5xl font-bold mt-4">Why Choose Thinq Chess</h2>
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
                    <img src="images/check-mark.png" className="w-[20px]" />
                  </span>
                  <span className="text-[20px] text-black font-[400]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[50%] relative">
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
              className="p-[4px] border-4 border-[#FFB31A] inline-block absolute rounded-tr-[100px] rounded-bl-[100px] top-[-160px] left-[0px]"
            >
              <img
                src="images/home-one.jpg"
                alt="Framed"
                className="h-[450px] w-[280px] rounded-tr-[95px] object-cover rounded-bl-[95px]"
              />
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
              className="p-[4px] border-4 border-[#FFB31A] inline-block absolute rounded-tr-[100px] rounded-bl-[100px] top-[50px] right-[20px]"
            >
              <img
                src="images/home-two.jpg"
                alt="Framed"
                className="h-[450px] w-[280px] rounded-tr-[95px] object-cover rounded-bl-[95px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Highlights: */}
      <section className="w-full py-20 pb-16 mt-10">
        <div className="w-11/12 mx-auto">
          <h2 className="text-5xl text-center font-bold mt-4 text-[#2B3AA0]">
            Quick Highlights
          </h2>
          <div className="grid grid-cols-3 grid-rows-2 gap-8 mt-14">
            <div className="flex flex-col items-center shadow-md px-4 py-4 rounded-[16px] hover:scale-[102%] transition-all duration-300">
              <img src="images/performance.png" className="w-[100px]" />
              <h3 className="text-[20px] text-center mt-3">
                Programs from the foundation to the professional level
              </h3>
            </div>

            <div className="flex flex-col items-center shadow-md px-4 py-4 rounded-[16px] hover:scale-[102%] transition-all duration-300">
              <img src="images/trophy.png" className="w-[100px]" />
              <h3 className="text-[20px] text-center mt-3">
                Monthly
                <br />
                tournaments
              </h3>
            </div>

            <div className="flex flex-col items-center shadow-md px-4 py-4 rounded-[16px] hover:scale-[102%] transition-all duration-300">
              <img src="images/progress.png" className="w-[100px]" />
              <h3 className="text-[20px] text-center mt-3">
                Progress is tracked and shared regularly with parents
              </h3>
            </div>

            <div className="flex flex-col items-center shadow-md px-4 py-4 rounded-[16px] hover:scale-[102%] transition-all duration-300">
              <img src="images/mentoring.png" className="w-[100px]" />
              <h3 className="text-[20px] text-center mt-3">
                Classes led by trained, child-friendly mentors
              </h3>
            </div>

            <div className="flex flex-col items-center shadow-md px-4 py-4 rounded-[16px] hover:scale-[102%] transition-all duration-300">
              <img src="images/log-in.png" className="w-[100px]" />
              <h3 className="text-[20px] text-center mt-3">
                Quick student registration is available
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
