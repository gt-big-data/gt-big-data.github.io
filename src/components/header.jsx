import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide, StyledImage, OurCarousel } from "./carousel/styles";
import { CarouselTest } from "./carousel/CarouselTest";

export const Header = (props) => {
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
    <header id="header">
      <CarouselTest />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
              <h1>
                {props.data ? props.data.title : "Loading"}
                <span></span>
              </h1>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>
              <a href="/#/about" className="btn btn-custom btn-lg page-scroll">
                Learn More
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
