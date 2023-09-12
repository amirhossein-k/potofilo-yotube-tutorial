"use client";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {swiperItem} from "../../../../types";
import Image from "next/image";
const MySwiper = ({swiperitem}: {swiperitem: swiperItem[]}) => {
  return (
    <Swiper
      className="md:w-[40%] pb-16 w-[60%]"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{clickable: true}}
      scrollbar={{draggable: true}}
    >
      {swiperitem.map((item, index) => {
        return (
          <SwiperSlide
            key={index}
            className="bg-color-bg-variant text-center p-8 rounded-[2rem]"
          >
            <div className="w-16 aspect-square relative overflow-hidden border-[0.4rem] border-color-priamry mt-0 mx-auto mb-4 rounded-[50%]">
              <Image alt="" src={item.pic} fill quality={100} />
            </div>
            <h5>{item.name}</h5>
            <small>{item.text}</small>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MySwiper;
