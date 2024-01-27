import React, { useEffect, useRef } from "react";

import LeftNavigationButton from "../LeftNavigationButton/LeftNavigationButton";
import RightNavigationButton from "../RightNavigationButton/RightNavigationButton";
import styles from "../Carousel/Carousel.module.css";

import { Navigation } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
};
function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        modules={[Navigation]}
        initialState={0}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
      >
        <Controls data={data} />
        <LeftNavigationButton />
        <RightNavigationButton />
        {data.map((ele, idx) => (
          <SwiperSlide key={idx}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Carousel;
