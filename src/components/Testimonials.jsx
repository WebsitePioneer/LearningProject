"use client";
import { Carousel, Flex } from "antd";
import {
  LeftCircleOutlined,
  LeftOutlined,
  RightCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import React, { useState, useRef } from "react";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="cursor-pointer absolute top-1/2 left-[-10px] transform -translate-y-1/2 z-10 bg-black/30 text-white rounded-full w-10 h-10 flex items-center justify-center"
    >
      <LeftCircleOutlined />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="cursor-pointer absolute top-1/2 right-[-10px] transform -translate-y-1/2 z-10 bg-black/30 text-white rounded-full w-10 h-10 flex items-center justify-center"
    >
      <RightCircleOutlined />
    </div>
  );
};

export default function Testimonials() {
  const carouselRef = useRef(null);

  return (
    <section className="w-11/12 mx-auto mt-22 pb-12 overflow-visible relative">
      <h2 className="text-5xl text-center font-bold mt-4 text-[#2B3AA0]">
        Testimonials
      </h2>

      <div className="relative overflow-visible mt-8 px-5">
        <Carousel
          prevArrow={<PrevArrow onClick={() => carouselRef.current?.prev()} />}
          nextArrow={<NextArrow onClick={() => carouselRef.current?.next()} />}
          arrows
        >
          <div className="w-full flex justify-center">
            <div className="flex flex-col items-center gap-10 my-4 py-4 px-24">
              {/* Ratings */}
              <div className=" w-fit flex items-center justify-center gap-2">
                <img src="images/star.png" className=" w-[20px]" />
                <img src="images/star.png" className=" w-[20px]" />
                <img src="images/star.png" className=" w-[20px]" />
                <img src="images/star.png" className=" w-[20px]" />
                <img src="images/star.png" className=" w-[20px]" />
              </div>

              {/* Review Content */}
              <p className="text-center text-[24px] font-[500]">
                "Client one ----- Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>

              {/* User or client info */}
              <div className="flex items-center gap-3">
                <img
                  src="images/contact-one.jpg"
                  className="w-[80px] h-[80px] object-cover rounded-[50%] border-[#FFB31A] border-[3px] border-solid p-1"
                />
                <div>
                  <p className="text-[20px] font-[700] text-[#2B3AA0]">
                    Mr/Mrs. Client One
                  </p>
                  <p className="text-[16px]">CEO @Google</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="flex flex-col items-center gap-10 my-4 py-4 px-24">
              {/* Ratings */}
              <div className=" w-fit flex items-center justify-center gap-2">
                <img src="images/star.png" className=" w-[20px]" />
                <img src="images/star.png" className=" w-[20px]" />
                <img src="images/star.png" className=" w-[20px]" />
                <img src="images/star.png" className=" w-[20px]" />
              </div>

              {/* Review Content */}
              <p className="text-center text-[24px] font-[500]">
                "Client two ----- Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>

              {/* User or client info */}
              <div className="flex items-center gap-3">
                <img
                  src="images/contact-one.jpg"
                  className="w-[80px] h-[80px] object-cover rounded-[50%] border-[#FFB31A] border-[3px] border-solid p-1"
                />
                <div>
                  <p className="text-[20px] font-[700] text-[#2B3AA0]">
                    Mr/Mrs. Client two
                  </p>
                  <p className="text-[16px]">CEO @Google</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="flex flex-col items-center gap-10 my-4 py-4 px-24">
              {/* Ratings */}
              <div className=" w-fit flex items-center justify-center gap-2">
                <img src="images/star.png" className=" w-[20px]" />
                <img src="images/star.png" className=" w-[20px]" />
                <img src="images/star.png" className=" w-[20px]" />
                <img src="images/star.png" className=" w-[20px]" />
                <img src="images/star.png" className=" w-[20px]" />
              </div>

              {/* Review Content */}
              <p className="text-center text-[24px] font-[500]">
                "Client three ----- Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>

              {/* User or client info */}
              <div className="flex items-center gap-3">
                <img
                  src="images/contact-one.jpg"
                  className="w-[80px] h-[80px] object-cover rounded-[50%] border-[#FFB31A] border-[3px] border-solid p-1"
                />
                <div>
                  <p className="text-[20px] font-[700] text-[#2B3AA0]">
                    Mr/Mrs. Client three
                  </p>
                  <p className="text-[16px]">CEO @Google</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
