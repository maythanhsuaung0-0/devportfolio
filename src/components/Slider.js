'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbChevronLeft } from "react-icons/tb";
import { TbChevronRight } from "react-icons/tb";

function NxtArrow(props) {
  const {  onClick } = props;
  return (
    <div
    className=" text-white text-xl absolute top-1/2 -right-5 transform -translate-y-1/2 font-bold cursor-pointer z-20"
      onClick={onClick}
    >
      {" "}
      <TbChevronRight />
    </div>
  );
}

function PrvArrow(props) {
  const { onClick } = props;
  return (
    <div
    className=" text-xl text-white absolute top-1/2 -left-5 transform -translate-y-1/2 font-bold cursor-pointer z-20"
      onClick={onClick}
    >
      {" "}
      <TbChevronLeft />
    </div>
  );
}

export default function SimpleSlider({children,size}) {
  console.log(size=="sm")
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: size == "sm" ? 3 : 1,
    fade:size == "sm" ? false : true,
    slidesToScroll: 1,
    nextArrow: <NxtArrow />,
    prevArrow: <PrvArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
     {children}
    </Slider>
  );
}
