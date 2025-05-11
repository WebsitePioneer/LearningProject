"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ContactUs() {
  const pathname = usePathname();
  return (
    pathname !== "/contact-us" && (
      <section className="w-full my-20">
        <div className="bg-[#2B3AA0] py-16 px-8 rounded-tl-[60px] rounded-br-[60px] w-11/12 mx-auto flex gap-12">
          <div className="w-[50%] flex flex-col gap-4">
            <h2 className="text-5xl font-bold leading-[60px] text-white">
              Would you like to know more about how it works?
            </h2>
            <button className="mt-6 w-fit text-white bg-[#FFB31A] px-8 py-3 rounded-lg transition-all duration-[3000ms] ease-in-out hover:bg-gradient-to-r hover:from-[#fed687] hover:via-[#f3c15d] hover:to-[#FFB31A]">
              Get in touch with us
            </button>
          </div>

          <div className=" relative w-[50%]">
            <motion.div
              animate={{
                //   x: [-15, 15, -15],
                y: [-15, 15, -15], // move right
              }}
              transition={{
                duration: 3, // total animation time
                ease: "easeInOut",
                repeat: Infinity, // repeat forever
                repeatDelay: 1, // delay between repeats
              }}
              className="w-[90%] p-[4px] group border-4 border-[#FFB31A] inline-block absolute rounded-tl-[40px] rounded-br-[40px] top-[-120px] left-[2%]"
            >
              <img
                src="images/contact-one.jpg"
                className="rounded-tl-[35px] group-hover:scale-[105%] transition-all duration-300 rounded-br-[35px]"
              />
            </motion.div>
          </div>
        </div>
      </section>
    )
  );
}
