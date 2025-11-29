import { Swiper, SwiperSlide } from "swiper/react";
import SubHead from "../Atoms/subhead";
import { Navigation, Autoplay } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { useRef } from "react";
import Ahmad from "./Ahmad";
import Rafay from "./Rafay";
import Sami from "./Sami";

export default function Testimonial() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="bg-tertiary-300 text-center" id="team">
      <div>
        <h1 className="team-sec text-[42px]  font-bold font-head text-primary-100 lg:text-6xl">
              Meet the team
      </h1>
      </div>
      <div className="container mx-auto max-w-[1344px]">
        <div className="px-5 pt-10 pb-[52px] sm:px-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            className="relative"
          >
            <SwiperSlide>
              <Rafay/>
            </SwiperSlide>
            <SwiperSlide>
              <Ahmad/>
            </SwiperSlide>
            <SwiperSlide>
              <Sami/>
            </SwiperSlide>
            <div className="absolute bottom-0 right-0 sm:right-10 z-10 flex items-center gap-6">
              <button
                className="testimonial-button prev"
                ref={navigationPrevRef}
              >
                <img
                  className="w-2 h-4.5 object-cover"
                  src="/arrow-left.svg"
                  alt="arrow"
                />
              </button>
              <button
                className="testimonial-button next"
                ref={navigationNextRef}
              >
                <img
                  className="w-2 h-4.5 object-cover"
                  src="/arrow-right.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
