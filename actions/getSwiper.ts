import {swiperItem} from "../types";

export const getSwiper = async () => {
  try {
    const swiper = await fetch(
      "https://backend-api-youtobe-totorial.vercel.app/api/portfolio/swiper"
    );
    const jso: swiperItem[] = await swiper.json();

    return jso;
  } catch (error) {
    console.log(error);
    throw new Error(error + "failed");
  }
};
