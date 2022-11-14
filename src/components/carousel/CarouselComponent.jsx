import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide, StyledImage } from "./styles";

export const CarouselComponent = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
  };
  return (
    <div>
      <div className="gradient">
        <Slider {...settings}>
          <Slide>
            <StyledImage src="img/carousel/bdbi1.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/bdbi14.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/bdbi3.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/bdbi18.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/bdbi4.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/bdbi6.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/bdbi7.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/bdbi20.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/bdbi8.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/bdbi10.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/bdbi5.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/bdbi11.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/bdbi2.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/bdbi19.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/bdbi13.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/bdbi16.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/bdbi17.jpg" />
          </Slide>
          {/*  */}
          <Slide>
            <StyledImage src="img/carousel/carousel1.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/carousel2.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/carousel3.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/carousel4.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/carousel5.jpg" />
          </Slide>
          <Slide>
            <StyledImage src="img/carousel/carousel6.jpg" />
          </Slide>
        </Slider>
      </div>
    </div>
  );
};
