import Banner from "@/components/ui/Banner";

const Curriculam = () => {
  const Online_Sessions = [
    "Specialized attention",
    "Customizable scheduling",
    "Personalized study plan",
    "Intensive training",
    "Teaching pace tailored to the child’s understanding",
  ];

  const Online_Group = [
    "Small group sizes for focused learning",
    "Community learning environment",
    "Peer motivation",
    "Group discussion",
  ];

  return (
    <>
      <Banner
        heading={"Structured for growth. Designed for young minds."}
        image={"/images/about-banner.jpg"}
        buttonText={"Get in touch with us"}
        link={"/"}
      />

      <section className="w-11/12 mx-auto flex gap-10 my-24 relative">
        <div className="w-[50%]">
          <p className="text-[#FFB31A]">CURRICULAM</p>
          <h2 className="text-5xl mt-5 font-bold text-[#2B3AA0]">
            Services Offered
          </h2>
          <p className="text-[18px] mt-6 text-black">
            Our curriculum is divided into three clear learning levels. Each
            stage introduces key concepts and game strategy in an interactive,
            progressive, and fun way.
          </p>
          <h4 className="text-black mt-6 font-bold text-2xl">
            Offline Programs
          </h4>
        </div>

        <div className="w-[50%]">
          <img
            src="/images/contact-img.png"
            className="w-full h-[650px] object-cover object-center rounded-tl-[120px] rounded-br-[120px]"
          />
        </div>

        {/* Offline courses container */}
        <div className="w-11/12 mx-auto absolute bottom-[4%]">
          <div className="flex flex-col gap-3 top-[20%] w-10/12">
            <div className="flex group items-center w-fit gap-3 bg-[#2B3AA0] h-[60px] px-3 rounded-[100px]">
              <div className="px-2 py-2 pb-1 rounded-[50%] bg-white w-fit transform transition-transform duration-300 group-hover:translate-x-2">
                <span
                  className="material-symbols-outlined text-[#2B3AA0]"
                  style={{ fontSize: "18px" }}
                >
                  live_tv
                </span>
              </div>
              <p className="text-[16px] text-white font-bold">
                2 hours of live class per week
              </p>
            </div>

            <div className="flex group items-center w-fit gap-3 bg-[#2B3AA0] px-3 h-[60px] rounded-[100px]">
              <div className="px-2 py-2 pb-1 rounded-[50%] bg-white w-fit transform transition-transform duration-300 group-hover:translate-x-2">
                <span
                  className="material-symbols-outlined text-[#2B3AA0]"
                  style={{ fontSize: "18px" }}
                >
                  guardian
                </span>
              </div>
              <p className="text-[18px] text-white font-bold">
                1 hour weekend practice under teacher supervision
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 top-[30%] w-10/12 mt-3 ">
            <div className="flex group items-center w-fit gap-3 bg-[#2B3AA0] px-3 h-[60px] rounded-[100px]">
              <div className="px-2 py-2 pb-1 rounded-[50%] bg-white w-fit transform transition-transform duration-300 group-hover:translate-x-2">
                <span
                  className="material-symbols-outlined text-[#2B3AA0]"
                  style={{ fontSize: "18px" }}
                >
                  stadia_controller
                </span>
              </div>
              <p className="text-[18px] text-white font-bold">
                Game-oriented learning with feedback
              </p>
            </div>

            <div className="flex group items-center w-fit gap-3 bg-[#2B3AA0] px-3 h-[60px] rounded-[100px]">
              <div className="px-2 py-2 pb-1 rounded-[50%] bg-white w-fit transform transition-transform duration-300 group-hover:translate-x-2">
                <span
                  className="material-symbols-outlined text-[#2B3AA0]"
                  style={{ fontSize: "18px" }}
                >
                  rate_review
                </span>
              </div>
              <p className="text-[18px] text-white font-bold">
                Online evaluations and certificates
              </p>
            </div>
          </div>

          <div className="flex gap-3 top-[40%] w-10/12 mt-3">
            <div className="flex group items-center w-fit gap-3 bg-[#2B3AA0] px-3 h-[60px] rounded-[100px]">
              <div className="px-2 py-2 pb-1 rounded-[50%] bg-white w-fit transform transition-transform duration-300 group-hover:translate-x-2">
                <span
                  className="material-symbols-outlined text-[#2B3AA0]"
                  style={{ fontSize: "18px" }}
                >
                  multicooker
                </span>
              </div>
              <p className="text-[18px] text-white font-bold">
                Welcome kit upon joining
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Courses Container */}
      <section className="w-11/12 flex gap-16 mx-auto mt-8 mb-28">
        <div className="w-[50%]">
          <img
            src="/images/homebanner.jpg"
            className="w-full h-full object-cover rounded-tl-[120px] rounded-br-[120px]"
          />
        </div>

        <div className="w-[50%]">
          <h4 className="text-black font-bold text-2xl">Online Programs</h4>
          {/* Online 1-on-1 session */}
          <div className="w-full mt-6">
            <div className="bg-white w-full h-fit shadow-lg px-10 py-6 pb-10 rounded-[20px]">
              <h4 className="text-[#2B3AA0] text-[20px] w-fit pl-1 font-bold uppercase py-4">
                Online 1-on-1 Sessions
              </h4>

              {/* List */}
              <div className="flex flex-col gap-2">
                {Online_Sessions.map((session, index) => {
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <div className="flex item-center w-fit">
                        <span
                          className="material-symbols-outlined text-[#FFB31A]"
                          style={{ fontSize: "24px" }}
                        >
                          check
                        </span>
                      </div>
                      <p className="text-[18px]">{session}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Online Group Sessions  */}
          <div className="w-full mt-4 ml-[-150px]">
            <div className="bg-white w-full h-fit shadow-lg px-10 py-6 pb-10 rounded-[20px]">
              <h4 className="text-[#2B3AA0] text-[20px] w-fit pl-1 font-bold uppercase py-4">
                Online Group Sessions
              </h4>

              {/* List */}
              <div className="flex flex-col gap-2">
                {Online_Group.map((session, index) => {
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <div className="flex item-center w-fit">
                        <span
                          className="material-symbols-outlined text-[#FFB31A]"
                          style={{ fontSize: "24px" }}
                        >
                          check
                        </span>
                      </div>
                      <p className="text-[18px]">{session}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-black mb-20">
        <div className="w-11/12 mx-auto py-10">
          <h2 className="text-5xl mt-5 text-center font-bold text-white">
            Course-Level Specific Highlights
          </h2>

          <div className="grid grid-cols-3 grid-rows-1 gap-8 mt-16">
            <div className="group">
              <div className="bg-[#FFB31A] rounded-[50%] w-fit px-4 py-4 group-hover:scale-x-[-1] transition-all duration-300">
                <img
                  src="/images/beginner.png"
                  className="w-[60px] max-h-[50px]"
                />
              </div>
              <div className="mt-4">
                <h4 className="text-2xl font-bold text-white mb-3">Beginner</h4>
                <div className="flex items-center gap-2">
                  <div className="flex item-center w-fit">
                    <span
                      className="material-symbols-outlined text-[#FFB31A]"
                      style={{ fontSize: "24px" }}
                    >
                      check
                    </span>
                  </div>
                  <p className="text-[18px] text-white">
                    Focus on building a strong chess foundation
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex item-center w-fit">
                    <span
                      className="material-symbols-outlined text-[#FFB31A]"
                      style={{ fontSize: "24px" }}
                    >
                      check
                    </span>
                  </div>
                  <p className="text-[18px] text-white">
                    Special moves like Pawn Promotion and Castling Basic Opening
                    Principles
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-[#FFB31A] rounded-[50%] w-fit px-4 py-4 group-hover:scale-x-[-1] transition-all duration-300">
                <img
                  src="/images/intermediate.png"
                  className="w-[60px] max-h-[50px]"
                />
              </div>
              <div className="mt-4">
                <h4 className="text-2xl font-bold text-white mb-3">
                  Intermediate
                </h4>
                <div className="flex items-center gap-2">
                  <div className="flex item-center w-fit">
                    <span
                      className="material-symbols-outlined text-[#FFB31A]"
                      style={{ fontSize: "24px" }}
                    >
                      check
                    </span>
                  </div>
                  <p className="text-[18px] text-white">
                    Tactics like Fork, Discovered Attack, and more
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex item-center w-fit">
                    <span
                      className="material-symbols-outlined text-[#FFB31A]"
                      style={{ fontSize: "24px" }}
                    >
                      check
                    </span>
                  </div>
                  <p className="text-[18px] text-white">
                    Learning the 3 Phases of a Game
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex item-center w-fit">
                    <span
                      className="material-symbols-outlined text-[#FFB31A]"
                      style={{ fontSize: "24px" }}
                    >
                      check
                    </span>
                  </div>
                  <p className="text-[18px] text-white">
                    Practice with Endgame Puzzles
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-[#FFB31A] rounded-[50%] w-fit px-4 py-4 group-hover:scale-x-[-1] transition-all duration-300">
                <img
                  src="/images/advanced.png"
                  className="w-[60px] max-h-[50px]"
                />
              </div>
              <div className="mt-4">
                <h4 className="text-2xl font-bold text-white mb-3">Advanced</h4>
                <div className="flex items-center gap-2">
                  <div className="flex item-center w-fit">
                    <span
                      className="material-symbols-outlined text-[#FFB31A]"
                      style={{ fontSize: "24px" }}
                    >
                      check
                    </span>
                  </div>
                  <p className="text-[18px] text-white">
                    Advanced tactics like X-ray Attack, Principle of Two
                    Weaknesses
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex item-center w-fit">
                    <span
                      className="material-symbols-outlined text-[#FFB31A]"
                      style={{ fontSize: "24px" }}
                    >
                      check
                    </span>
                  </div>
                  <p className="text-[18px] text-white">
                    Game Analysis Sessions with a coach
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex item-center w-fit">
                    <span
                      className="material-symbols-outlined text-[#FFB31A]"
                      style={{ fontSize: "24px" }}
                    >
                      check
                    </span>
                  </div>
                  <p className="text-[18px] text-white">
                    Deep dive into Advanced Endgame Tactics
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex item-center w-fit">
                    <span
                      className="material-symbols-outlined text-[#FFB31A]"
                      style={{ fontSize: "24px" }}
                    >
                      check
                    </span>
                  </div>
                  <p className="text-[18px] text-white">
                    Emphasis on Game Improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Curriculam;
