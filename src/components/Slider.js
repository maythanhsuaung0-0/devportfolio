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
    className=" text-4xl absolute top-1/2 -right-5 transform -translate-y-1/2 font-bold cursor-pointer z-20"
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
    className=" text-4xl absolute top-1/2 -left-5 transform -translate-y-1/2 font-bold cursor-pointer z-20"
      onClick={onClick}
    >
      {" "}
      <VscChevronLeft />
    </div>
  );
}

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
      <div className="w-full ">
        <div className="p-5 w-52 h-52 m-auto self-center hover:bg-yellow-500 cursor-pointer bg-[#434657] flex">
          <div className="flex flex-row gap-1 mt-auto">
            <div className="text-lg mt-1">
              <AiOutlineAntDesign />
            </div>
            <div className="grid gap-1">
              <span className="text-lg">UI/UX designer</span>
              <span className="text-xs">100 projects</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="p-5 w-52 h-52 self-center m-auto hover:bg-yellow-500 cursor-pointer bg-[#434657] flex">
          <div className="flex flex-row gap-1 mt-auto">
            <div className="text-lg mt-1">
              <AiOutlineAntDesign />
            </div>
            <div className="grid gap-1">
              <span className="text-lg">UI/UX designer</span>
              <span className="text-xs">100 projects</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="p-5 w-52 h-52 self-center m-auto hover:bg-yellow-500 cursor-pointer bg-[#434657] flex">
          <div className="flex flex-row gap-1 mt-auto">
            <div className="text-lg mt-1">
              <AiOutlineAntDesign />
            </div>
            <div className="grid gap-1">
              <span className="text-lg">UI/UX designer</span>
              <span className="text-xs">100 projects</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="p-5 w-52 h-52 self-center m-auto hover:bg-yellow-500 cursor-pointer bg-[#434657] flex">
          <div className="flex flex-row gap-1 mt-auto">
            <div className="text-lg mt-1">
              <AiOutlineAntDesign />
            </div>
            <div className="grid gap-1">
              <span className="text-lg">UI/UX designer</span>
              <span className="text-xs">100 projects</span>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}
