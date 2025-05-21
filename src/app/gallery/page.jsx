import Banner from "@/components/ui/Banner";

const GalleryPage = () => {
  const GalleryGrid = [
    "images/indian-img-one.jpg",
    "images/indian-img-two.jpg",
    "images/indian-img-three.jpg",
    "images/indian-img-four.jpg",
    "images/indian-img-five.jpg",
    "images/contact-one.jpg",
  ];
  return (
    <>
      <Banner
        heading={"Faces. Moments. Milestones"}
        image={"/images/about-banner.jpg"}
        link={"/"}
      />

      <section className="w-11/12 mx-auto md:my-28 my-14">
        <h4 className="md:text-2xl text-xl text-center font-bold text-[#2B3AA0]">
          From practice sessions to tournaments, from first wins to lifelong
          friendships-here’s a look into the world of Thinq Chess.
        </h4>

        <div className="md:mt-16 mt-8 max-md:flex max-md:flex-col md:grid grid-cols-3 grid-rows-2 gap-4">
          {GalleryGrid.map((imgItem, index) => {
            return (
              <div key={index} className="group overflow-hidden rounded-md">
                <img
                  src={imgItem}
                  className="group-hover:scale-[105%] transition-all duration-300"
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
