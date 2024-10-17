import React from "react";

import Pic1 from "../../assets/Men.png";
import Pic2 from "../../assets/Women.png";
import Pic3 from "../../assets/Sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Pic1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc vel ultricies ultricies, ipsum sem vehicula nunc, nec ultricies felis odio eu sem. Donec nec tortor eget odio pharetra ultricies. Donec nec tortor eget odio pharetra ultricies.",
  },
  {
    id: 2,
    img: Pic2,
    title: "Upto 30% off on all Women's Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc vel ultricies ultricies, ipsum sem vehicula nunc, nec ultricies felis odio eu sem. Donec nec tortor eget odio pharetra ultricies. Donec nec tortor eget odio pharetra ultricies.",
  },
  {
    id: 3,
    img: Pic3,
    title: "70% off on all Product's Sale",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc vel ultricies ultricies, ipsum sem vehicula nunc, nec ultricies felis odio eu sem. Donec nec tortor eget odio pharetra ultricies. Donec nec tortor eget odio pharetra ultricies.",
  },
];

const Square = () => {

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  }

  return (
    <div className="relative overflow-hidden min-h-[600px] sm:min-[650px] bg-gray-100
     flex justify-center items-center dark:bg-gray-800 dark:text-white duration-200">
      <div className="w-[700px] h-[700px] bg-primary/50 absolute -top-[320px] right-0 rounded-3xl rotate-45 -z-9">
      
      </div>
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left
                order-2 sm:order-1 relative z-10 ml-[10px]">
                  <h1 data-aos='zoom-out'
                      data-aos-once="true"
                      data-aos-duration="500"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                  <p
                    data-aos='fade-up'
                    data-aos-duration="500"
                    data-aos-delay="100" 
                    className="text-sm">{data.description}</p>
                  <div data-aos='fade-up'
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105
                    duration-200 text-white py-2 px-4 rounded-full">
                      Order Now
                    </button>
                  </div>
                </div>
                {/* Image section */}
                <div className="order-1 sm:order-2">
                  <div data-aos='fade-up'
                      data-aos-once="true"
                      data-aos-delay={data.aosDelay} 
                      className="relative z-10">
                    <img src={data.img} alt="#" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
      </div>
    </div>
  );
};
export default Square;
