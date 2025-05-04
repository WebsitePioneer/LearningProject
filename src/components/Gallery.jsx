export default function Gallery() {
  return (
    <section className="w-11/12 mx-auto mt-4 mb-10">
      <h2 className="text-5xl text-center font-bold text-[#2B3AA0]">
        Quick Highlights
      </h2>
      <div className="mt-16 grid grid-cols-3 grid-rows-2 gap-4">
        <div className="group overflow-hidden rounded-md">
          <img
            src="images/contact-one.jpg"
            className="group-hover:scale-[105%] transition-all duration-300"
          />
        </div>

        <div className="group overflow-hidden rounded-md">
          <img
            src="images/contact-two.jpg"
            className="group-hover:scale-[105%] transition-all duration-300"
          />
        </div>

        <div className="group overflow-hidden rounded-md">
          <img
            src="images/homebanner.jpg"
            className="group-hover:scale-[105%] transition-all duration-300"
          />
        </div>

        <div className="group overflow-hidden rounded-md">
          <img
            src="images/home-two.jpg"
            className="group-hover:scale-[105%] transition-all duration-300"
          />
        </div>

        <div className="group overflow-hidden rounded-md">
          <img
            src="images/home-one.jpg"
            className="group-hover:scale-[105%] transition-all duration-300"
          />
        </div>

        <div className="group overflow-hidden rounded-md">
          <img
            src="images/contact-one.jpg"
            className="group-hover:scale-[105%] transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
