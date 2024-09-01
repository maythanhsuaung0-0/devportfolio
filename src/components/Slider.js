import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineAntDesign } from "react-icons/ai";
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";

function NxtArrow(props) {
  const {  onClick } = props;
  return (
    <div
    className=" text-white text-4xl absolute top-1/2 -right-5 transform -translate-y-1/2 font-bold cursor-pointer z-20"
      onClick={onClick}
    >
      {" "}
      <VscChevronRight />
    </div>
  );
}

function PrvArrow(props) {
  const { onClick } = props;
  return (
    <div
    className=" text-4xl text-white absolute top-1/2 -left-5 transform -translate-y-1/2 font-bold cursor-pointer z-20"
      onClick={onClick}
    >
      {" "}
      <VscChevronLeft />
    </div>
  );
}

export default function SimpleSlider({children,size}) {
  console.log(size=="sm")
  var settings = {
    dots: true,
    infinite: true,
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
