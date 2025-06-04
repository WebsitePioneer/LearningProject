import Banner from "@/components/ui/Banner";

const OurStory = () => {
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
    </>
  );
};

export default OurStory;
