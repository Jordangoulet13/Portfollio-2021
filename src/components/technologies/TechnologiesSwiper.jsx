// import Swiper core and required modules
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TechCard from "./TechCard";
import techData from "./techData";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

// Import Swiper styles
import "./SwiperStyles.css";
import "swiper/swiper-bundle.min.css";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

// Import Swiper styles

const TechnologiesSwiper = () => {
  return (
    <section id="about">
      <Fade left={true} duration={750} delay={500} distance="50px">
        <Heading> My Technologies</Heading>
      </Fade>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
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
          <SwiperSlide key={id}>
            <TechCard name={title} svg={cardImg} num={id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const Heading = styled.h1`
  color: ${(p) => p.theme.textTertiaryColor};
  margin-left: 5rem;
  font-size: 2rem;
  border-bottom: 1px solid;
  width: 85%;
  @media only screen and (max-width: 650px) {
    margin: 0;
    width: 100%;
  }
`;

export default TechnologiesSwiper;
