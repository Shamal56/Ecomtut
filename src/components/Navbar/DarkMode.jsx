import React from "react";
import lightButton from "../../assets/navbar/light.png";
import darkButton from "../../assets/navbar/dark.png";

const DarkMode = () => {
  //darkmode
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={lightButton}
        alt="darkmode-pic"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-[30px] cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "hidden" : "block"
        } `}
      />
      <img
        src={darkButton}
        alt="darkmode-pic"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-[30px] cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300 "
      />
    </div>
  );
};

export default DarkMode;
