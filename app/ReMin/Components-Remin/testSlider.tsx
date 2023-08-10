import React, { Component } from "react";
import Slider from "react-slick";

export default class Resizable extends Component {
    state = {
      display: true,
      width: 320
    };
    render() {
      const settings = {
        dots: true,
        centerPadding: "1px" ,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      return(


        <Slider {...settings}>
                        <div>
                        <iframe width="320" height="550" src="https://www.youtube.com/embed/pW1Ku2Hepyg" title="Short 1" frameBorder="0" allowFullScreen className="rounded-lg hover:scale-105 transition duration-150 ease-in-out m-2"></iframe>
                        </div>
                        <div>
                        <iframe width="320" height="550" src="https://www.youtube.com/embed/s5453Xn48B0" title="Short 2" frameBorder="0" allowFullScreen className="rounded-lg hover:scale-105 transition duration-150 ease-in-out m-2"></iframe>
                        </div>
                        <div>
                        <iframe width="320" height="550" src="https://www.youtube.com/embed/ZUeRVtvPXlA" title="Short 2" frameBorder="0" allowFullScreen className="rounded-lg hover:scale-105 transition duration-150 ease-in-out m-2"></iframe>
                        </div>
        </Slider>
      )
    }
}