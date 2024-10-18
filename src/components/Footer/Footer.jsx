import React from "react";
import footerLogo from "../../assets/Logo.png";
import Banner from "../../assets/Subscribe/Footer.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",

  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white bg-black">
      <div className="container">
        <div
          data-aos="zoom-in"
          data-aos-duration="200"
          className="grid md:grid-cols-3 pb-10 pt-5"
        >
          {/* company details */}
          <div className="py-8 px-4">
            <h1
              className="sm:text-3xl text-xl font-bold sm:text-left
            text-justify mb-3 flex items-center gap-3"
            >
              <img
                src={footerLogo}
                alt=""
                className="
              max-w-[50px]"
              />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              labore quia soluta assumenda natus.
            </p>
          </div>
          {/* Link details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary
                    hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary
                    hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}
            <div>
              <div className="flex items-center gap-3 mt-9">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-purple-600 hover:translate-y-[2px] duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-blue-500 hover:translate-y-[2px] duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-blue-600 hover:translate-y-[2px] duration-300" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>0987654321</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
