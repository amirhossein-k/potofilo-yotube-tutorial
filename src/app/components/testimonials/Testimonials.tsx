import React from "react";

import {getSwiper} from "../../../../actions/getSwiper";
import MySwiper from "./MySwiper";

const Testimonials = async () => {
  const sswiper = await getSwiper();

  return (
    <section id="Testimonials" className="mt-20 mb-20">
      <h5 className="text-center text-color-light font-medium ">
        Review from clients
      </h5>
      <h2 className="text-color-priamry text-center mb-12 text-xl font-semibold">
        Testimonials
      </h2>
      <MySwiper swiperitem={sswiper} />
    </section>
  );
};

export default Testimonials;
