import Banner from "@/components/ui/Banner";

const OurStory = () => {
  const ourTeam = [
    {
      img: "/images/head-coach.jpeg",
      name: "Krishna Thapa",
      content:
        "He started playing chess at the age of 8, learning the basics from his father. Over the years, he’s played in multiple national and international tournaments, becoming a silver medallist in a national championship and winning gold at the Asian Amateur Chess Championship in 2019. With a peak FIDE rating of 2180, he has had the opportunity to face elite players like P. Harikrishna, Wei Yi, Danil Dubov, and Baadur Jobava, and has scored wins against several Grandmasters and International Masters. He been coaching chess since 2008.",
    },
    {
      img: "/images/Chiranth .jpeg",
      name: "Chiranth M",
      content:
        "He has been playing chess for 18 years, earning over 100 trophies and 25 medals across various tournaments. He represented Karnataka at the SGFI Nationals for four years and played for the VTU university team in national inter-university events. A recent highlight was his Category C championship win at the 2nd Bengaluru International Grandmaster Tournament in 2025. As a coach for the past 5 years, he has helped several students achieve their FIDE ratings and succeed in state and national tournaments.",
    },
    {
      img: "/images/head-coach.jpeg",
      name: "Trainer 3",
      content:
        "He started playing chess at the age of 8, learning the basics from his father. Over the years, he’s played in multiple national and international tournaments, becoming a silver medallist in a national championship and winning gold at the Asian Amateur Chess Championship in 2019. With a peak FIDE rating of 2180, he has had the opportunity to face elite players like P. Harikrishna, Wei Yi, Danil Dubov, and Baadur Jobava, and has scored wins against several Grandmasters and International Masters. He been coaching chess since 2008.",
    },
    {
      img: "/images/Chiranth .jpeg",
      name: "Trainer 4",
      content:
        "He has been playing chess for 18 years, earning over 100 trophies and 25 medals across various tournaments. He represented Karnataka at the SGFI Nationals for four years and played for the VTU university team in national inter-university events. A recent highlight was his Category C championship win at the 2nd Bengaluru International Grandmaster Tournament in 2025. As a coach for the past 5 years, he has helped several students achieve their FIDE ratings and succeed in state and national tournaments.",
    },
  ];
  return (
    <>
      <Banner
        heading={"A Story That Begins Before the First Move"}
        image={"/images/about-banner.jpg"}
        link={"/"}
      />

      <section className="w-11/12 mx-auto flex md:flex-row-reverse flex-col-reverse gap-12 mt-14 md:mt-28 mb-10 md:mb-20">
        <div className="md:w-[50%] w-full flex flex-col gap-4">
          <p className="text-[#2B3AA0]">WELCOME TO THINQCHESS</p>
          <h2 className="text-5xl font-bold text-[#FFB31A]">Founders' Note</h2>
          <img
            src="/images/Founders.jpg"
            alt="Chessboard"
            className="md:hidden w-full max-h-[300px] mt-5 mb-3 object-cover object-center rounded-br-[60px] "
          />
          <p className="text-[18px]">
            ThinQ Chess began with its founder, who saw more than
            black-and-white squares. They saw a way to help children build
            confidence, resilience, and the ability to think through every
            challenge, on the board and beyond.
          </p>
          <p className="text-[18px]">
            The founders’ vision came from a deep need to do things
            differently—to create a space that wasn’t just about producing
            champions but raising thinkers. Today, we proudly run a growing
            academy where children aren’t just learning chess; they’re learning
            how to believe in themselves.
          </p>

          <p className="text-[18px]">
            Every batch, every parent-teacher call, every game day reminds us
            why we started.
          </p>
        </div>
        <div className="md:w-[50%] max-md:hidden w-full">
          <div className="p-1 border-solid">
            <img
              src="/images/Founders.jpg"
              alt="Chessboard"
              className="w-full max-h-[420px] object-cover object-center rounded-tl-[0px] rounded-br-[120px] "
            />
          </div>
        </div>
      </section>

      <section className="md:w-11/12 w-full mx-auto max-md:px-4">
        <h2 className="text-5xl font-bold text-[#FFB31A] text-center">
          Our Team
        </h2>
        <div className="my-20 mt-10 flex md:flex-row flex-col gap-6">
          {ourTeam.map((item) => {
            return (
              <div
                key={item.name}
                className="w-full h-[400px] relative group overflow-hidden rounded-tl-[50px] rounded-br-[50px]"
              >
                <img src={item.img} />
                <div className="bg-[#00000099] group-hover:top-[0px] transition-all duration-300 pb-[100px] absolute top-[330px] w-full">
                  <h3 className="text-[32px] font-[600] text-white px-5 mt-3">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-[17px] text-white side-scroll px-5 pr-3 mr-4 h-[300px] overflow-y-scroll">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default OurStory;
