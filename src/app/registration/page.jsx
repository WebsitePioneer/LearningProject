"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Banner from "@/components/ui/Banner";
import { message } from "antd";
import MultiStepFormTwo from "@/components/forms/MultiStepFormTwo";

const RegistrationPage = () => {
  return (
    <>
      <Banner
        heading={" Let’s Register"}
        image={"/images/about-banner.jpg"}
        link={"/"}
      />

      <section className="w-11/12 flex md:flex-row flex-col md:gap-16 gap-10 mx-auto my-10 md:my-28">
        <div className="md:w-[50%] w-full">
          <img src="/images/contact-img.png" className="w-full rounded-lg" />
        </div>
        <div className="md:w-[50%] w-full">
          <h2 className="md:mt-5 mt-2 md:text-5xl text-4xl leading-[52px] font-bold text-[#2B3AA0] md:leading-[60px]">
            Register Now
          </h2>
          <div className="md:mt-10 mt-6">
            <MultiStepFormTwo />
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationPage;
