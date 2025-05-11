import Banner from "@/components/ui/Banner";

const Tournaments = () => {
  const Online_Sessions = [
    "Specialized attention",
    "Customizable scheduling",
    "Personalized study plan",
    "Intensive training",
    "Teaching pace tailored to the child’s understanding",
  ];
  return (
    <>
      <Banner
        heading={"Where young minds test their mettle"}
        image={"/images/about-banner.jpg"}
        link={"/"}
      />

      <section className="w-11/12 mx-auto flex flex-row gap-12 mt-28 mb-20">
        <div className="w-[50%] flex flex-col gap-4">
          <h2 className="text-5xl font-bold text-[#2B3AA0] leading-[60px]">
            Tournaments of ThinqChess
          </h2>
          <p className="text-[18px] mt-2">
            We host friendly, competitive monthly tournaments at our center,
            designed to help children experience the joy of competition and
            learn how to handle both wins and losses with grace
          </p>
          <p className="text-[18px]">
            These events are open to students from other academies too, helping
            build a broader community of young players.
          </p>

          {/* List */}
          <div className="flex flex-col gap-2">
            {Online_Sessions.map((session, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex item-center w-fit">
                    <span
                      className="material-symbols-outlined text-[#FFB31A]"
                      style={{ fontSize: "24px", fontWeight: "600" }}
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
        <div className="w-[50%]">
          <div className="p-1 border-solid">
            <img
              src="/images/about-one.jpg"
              alt="Chessboard"
              className="w-full max-h-[480px] object-cover object-center rounded-tl-[0px] rounded-br-[120px] "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tournaments;
