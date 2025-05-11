import Banner from "@/components/ui/Banner";

const GalleryPage = () => {
  const GalleryGrid = [
    "images/contact-one.jpg",
    "images/contact-two.jpg",
    "images/homebanner.jpg",
    "images/home-two.jpg",
    "images/home-one.jpg",
    "images/contact-one.jpg",
  ];
  return (
    <>
      <Banner
        heading={"Faces. Moments. Milestones"}
        image={"/images/about-banner.jpg"}
        link={"/"}
      />

      <section className="w-11/12 mx-auto my-28">
        <h4 className="text-2xl text-center font-bold text-[#2B3AA0]">
          From practice sessions to tournaments, from first wins to lifelong
          friendships—here’s a look into the world of Thinq Chess.
        </h4>

        <div className="mt-16 grid grid-cols-3 grid-rows-2 gap-4">
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
