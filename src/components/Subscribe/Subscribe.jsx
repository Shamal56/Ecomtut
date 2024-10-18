import React from "react";
import Banner from "../../assets/Subscribe/Banner.jpg";

const Bannerimg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in "
      className="bg-gray-100 text-white"
      style={Bannerimg}
    >
      <div></div>
    </div>
  );
};

export default Subscribe;
