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

      <section className="w-11/12 mx-auto flex max-md:flex-col-reverse gap-10 md:my-24 my-12 relative">
        <div className="md:w-[50%] w-full max-md:-mt-2">
          <p className="text-[#FFB31A]">CURRICULAM</p>
          <h2 className="md:text-5xl text-4xl md:mt-5 mt-2 font-bold text-[#2B3AA0]">
            Services Offered
          </h2>
          <p className="text-[18px] md:mt-6 mt-3 text-black">
            Our curriculum is divided into three clear learning levels. Each
            stage introduces key concepts and game strategy in an interactive,
            progressive, and fun way.
          </p>
          <h4 className="text-black mt-6 font-bold text-2xl">
            Offline Programs
          </h4>

          {/* Offline courses container */}
          <div className="md:hidden mt-5">
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
                <p className="text-[16px] text-white font-semibold">
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
                <p className="text-[16px] text-white font-semibold">
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
                <p className="text-[16px] text-white font-semibold">
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
                <p className="text-[16px] text-white font-semibold">
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
                <p className="text-[16px] text-white font-semibold">
                  Welcome kit upon joining
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[50%] w-full">
          <img
            src="/images/indian-img-three.jpg"
            className="w-full object-cover object-center rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[120px] md:rounded-br-[120px]"
          />
        </div>

        {/* Offline courses container */}
        <div className="w-11/12 mx-auto max-md:hidden absolute bottom-[4%]">
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
      <section className="w-11/12 flex max-md:flex-col gap-16 mx-auto mt-8 md:mb-28 mb-14">
        <div className="md:w-[50%] w-full">
          <h4 className="text-black font-bold text-2xl md:hidden">
            Online Programs
          </h4>
          <img
            src="/images/indian-img-two.jpg"
            className="w-full h-full max-md:mt-6 max-md:hidden object-cover rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[120px] md:rounded-br-[120px]"
          />
        </div>

        <div className="md:w-[50%] w-full max-md:-mt-16">
          <h4 className="text-black font-bold text-2xl max-md:hidden">
            Online Programs
          </h4>
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
          <div className="w-full mt-4 md:ml-[-150px]">
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
          <h2 className="md:text-5xl text-4xl max-md:leading-[52px] mt-5 text-center font-bold text-white">
            Course-Level Specific Highlights
          </h2>

          <div className="max-md:flex max-md:flex-col md:grid grid-cols-3 grid-rows-1 gap-8 mt-16">
            <div className="group max-md:flex max-md:flex-col max-md:items-center">
              <div className="bg-[#FFB31A] rounded-[50%] w-fit px-4 py-4 group-hover:scale-x-[-1] transition-all duration-300">
                <img
                  src="/images/beginner.png"
                  className="w-[60px] max-h-[50px]"
                />
              </div>
              <div className="mt-4">
                <h4 className="text-2xl max-md:text-center font-bold text-white mb-3">
                  Beginner
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

            <div className="group max-md:flex max-md:flex-col max-md:items-center">
              <div className="bg-[#FFB31A] rounded-[50%] w-fit px-4 py-4 group-hover:scale-x-[-1] transition-all duration-300">
                <img
                  src="/images/intermediate.png"
                  className="w-[60px] max-h-[50px]"
                />
              </div>
              <div className="mt-4">
                <h4 className="text-2xl max-md:text-center font-bold text-white mb-3">
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

            <div className="group max-md:flex max-md:flex-col max-md:items-center">
              <div className="bg-[#FFB31A] rounded-[50%] w-fit px-4 py-4 group-hover:scale-x-[-1] transition-all duration-300">
                <img
                  src="/images/advanced.png"
                  className="w-[60px] max-h-[50px]"
                />
              </div>
              <div className="mt-4">
                <h4 className="text-2xl text-center font-bold text-white mb-3">
                  Advanced
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
