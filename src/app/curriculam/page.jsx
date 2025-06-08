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

  const levels = [
    {
      img: "/images/beginner.png",
      level: "Foundation",
      points: [
        "Focus on building a strong chess foundation",
        "Special moves like Pawn Promotion and Castling Basic Opening Principles",
      ],
    },
    {
      img: "/images/intermediate.png",
      level: "Intermediate",
      points: [
        "Tactics like Fork, Discovered Attack, and more",
        "Learning the 3 Phases of a Game",
        "Practice with Endgame Puzzles",
      ],
    },
    {
      img: "/images/advanced.png",
      level: "Advanced",
      points: [
        "Advanced tactics like X-ray Attack, Principle of Two Weaknesses",
        "Game Analysis Sessions with a coach",
        "Deep dive into Advanced Endgame Tactics",
        "Emphasis on Game Improvement",
      ],
    },
    {
      img: "/images/advanced.png",
      level: "Professional",
      points: [
        "Game Analysis",
        "Advanced End-Game",
        "Positional understanding",
      ],
    },
  ];

  const offlineProgram = [
    "Weekly 3 Hours Training",
    "Game-oriented learning with feedback",
    "Online Evaluations",
    "Completion Certificate for Every Level",
    "Mentorship Program for Tournaments",
  ];

  return (
    <>
      <Banner
        heading={"Structured for growth. Designed for young minds."}
        image={"/images/about-banner.jpg"}
        buttonText={"Get in touch with us"}
        link={"/"}
      />

      {/* Intro section */}
      <section className="w-11/12 mx-auto flex max-md:flex-col-reverse gap-10 md:my-24 my-12">
        <div className="md:w-[50%] w-full max-md:-mt-2">
          <p className="text-[#FFB31A]">CURRICULAM</p>
          <h2 className="md:text-5xl text-4xl md:mt-5 mt-2 font-bold text-[#2B3AA0]">
            Courses Offered
          </h2>
          <p className="text-[18px] md:mt-6 mt-3 text-black">
            Our curriculum is divided into three clear learning levels. Each
            stage introduces key concepts and game strategy in an interactive,
            progressive, and fun way.
          </p>

          <p className="text-[18px] md:mt-6 mt-3 text-black">
            The course curriculum provides sufficient puzzles and formats to
            learn concepts. Leaderboard is available to motivate students to
            achieve higher and have a healthy competition.
          </p>
        </div>

        <div className="md:w-[50%] w-full">
          <img
            src="/images/course-offered.jpg"
            className="w-full md:h-[350px] object-cover object-center rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[60px] md:rounded-br-[60px]"
          />
        </div>
      </section>

      {/* Course Levels */}
      <section className="w-11/12 mx-auto my-20">
        <h2 className="md:text-5xl text-2xl max-md:leading-[52px] mt-8 font-bold text-[#2B3AA0]">
          Course-Level Specific Highlights
        </h2>
        <div className="grid max-md:grid-cols-1 max-md:grid-rows-4 grid-cols-4 grid-rows-1 gap-5 mt-16">
          {levels.map((level) => {
            return (
              <div className="group bg-white shadow-md rounded-xl h-[280px] overflow-hidden relative">
                <div className="flex flex-col items-center pt-10 py-20">
                  <div className="bg-[#FFB31A] rounded-[50%] w-fit px-4 py-4 hover:scale-x-[-1] transition-all duration-300">
                    <img src={level.img} className="w-[60px] max-h-[50px]" />
                  </div>
                  <h4 className="text-2xl max-md:text-center mt-4 font-bold text-black mb-3">
                    {level.level}
                  </h4>
                </div>
                <div className="absolute -bottom-[350px] h-[280px] pt-5 w-full px-2 pl-3 group-hover:bottom-0 bg-black transition-all duration-300">
                  {level.points.map((point) => {
                    return (
                      <div className="flex items-start gap-2">
                        <div className="flex item-center mt-1 w-fit">
                          <span
                            className="material-symbols-outlined text-[#FFB31A]"
                            style={{ fontSize: "24px" }}
                          >
                            check
                          </span>
                        </div>
                        <p className="text-[18px] text-white">{point}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Offline Courses Container */}
      <section className="w-11/12 flex flex-row-reverse max-md:flex-col gap-16 mx-auto mt-8 md:mb-28 mb-14">
        <div className="md:w-[50%] w-full !z-10">
          <img
            src="/images/indian-img-two.jpg"
            className="w-full h-full max-md:mt-6 max-md:hidden object-cover rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[120px] md:rounded-br-[120px]"
          />
        </div>

        <div className="md:w-[50%] w-full max-md:-mt-16">
          <h4 className="text-black font-bold text-3xl max-md:hidden">
            Offline Programs
          </h4>
          {/* Online 1-on-1 session */}
          <div className="w-full mt-6">
            <div className="bg-white w-full h-fit shadow-lg px-10 py-6 pb-10 rounded-[20px]">
              <h4 className="text-[#2B3AA0] text-[20px] w-fit pl-1 font-bold uppercase py-4">
                1-on-1 Sessions
              </h4>

              {/* List */}
              <div className="flex flex-col gap-2">
                {offlineProgram.map((session, index) => {
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

      {/* Online Courses Container */}
      <section className="w-11/12 flex max-md:flex-col gap-16 mx-auto mt-8 md:mb-28 mb-14">
        <div className="md:w-[50%] w-full">
          <h4 className="text-black font-bold text-2xl md:hidden">
            Online Programs
          </h4>
          <img
            src="/images/online-program.jpg"
            className="w-full h-full max-md:mt-6 max-md:hidden object-cover rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[120px] md:rounded-br-[120px]"
          />
        </div>

        <div className="md:w-[50%] w-full max-md:-mt-16">
          <h4 className="text-black font-bold text-3xl max-md:hidden">
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
    </>
  );
};

export default Curriculam;
