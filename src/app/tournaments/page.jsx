import Banner from "@/components/ui/Banner";

const Tournaments = () => {
  const Online_Sessions = [
    "State/National",
    "International Tournaments",
    "Rated Tournaments",
    "Non-Rated Tournaments",
  ];
  return (
    <>
      <Banner
        heading={"Where young minds test their mettle"}
        image={"/images/about-banner.jpg"}
        link={"/"}
      />

      <section className="w-11/12 mx-auto flex md:flex-row flex-col gap-12 md:mt-28 mt-14 mb-12 md:mb-20">
        <div className="md:w-[50%] w-full flex flex-col gap-4">
          <h2 className="md:text-5xl text-4xl leading-[52px] font-bold text-[#2B3AA0] md:leading-[60px]">
            Tournaments of ThinqChess
          </h2>

          <img
            src="/images/indian-img-two.jpg"
            alt="Chessboard"
            className="md:hidden w-full object-cover object-center rounded-br-[60px] "
          />
          <p className="text-[18px] mt-2">
            We host friendly, competitive Regular Tournaments at our center,
            designed to help children experience the joy of competition and
            learn how to handle both wins and losses with grace
          </p>
          <p className="text-[18px]">
            We periodically organize tournaments to give our students the
            required practice and exposure to participate in:
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
        <div className="md:w-[50%] max-md:hidden w-full">
          <div className="p-1">
            <img
              src="/images/chess-tournament.webp"
              alt="Chessboard"
              className="w-full min-h-[450px] object-cover object-center rounded-tl-[0px] rounded-br-[120px] "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tournaments;
