import React from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { ReactNode } from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export default function Slider({ children, settings }: SliderProps) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...settings}>
      {children}
    </Swiper>
  );
}
