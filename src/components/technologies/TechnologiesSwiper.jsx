// import Swiper core and required modules
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TechCard from "./TechCard";
import techData from "./techData";
import styled from "styled-components";

// Import Swiper styles
import "./SwiperStyles.css";
import "swiper/swiper-bundle.min.css";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

// Import Swiper styles

const TechnologiesSwiper = () => {
  return (
    <>
      <Heading> My Technologies</Heading>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {techData.map(({ id, cardImg, title }) => (
          <SwiperSlide>
            <TechCard key={id} name={title} svg={cardImg} num={id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const Heading = styled.h1``;

export default TechnologiesSwiper;
