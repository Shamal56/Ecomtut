import React from "react";



const Square = () => {
  return (
    <div>
      <div className="w-[700px] h-[700px] bg-primary/20 rounded-full absolute top-[280px] right-[790px]"></div>
      <div className="w-[300px] h-[300px] bg-primary/20 rounded-full absolute top-[120px] right-[1450px]"></div>
      <div className="w-[300px] h-[300px] bg-primary/70 rounded-full absolute top-[450px] right-[150px]"></div>

      <div className="w-[600px] h-[600px] bg-primary/50 rounded-[30px] rotate-[45deg] absolute top-[-170px] left-[1000px]">
        {/* Content inside the square */}
      </div>
      <div className="relative w-0 h-0">
        <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-primary/30 absolute top-[500px] left-[1200px] rounded-triangle"></div>
      </div>
      <div></div>
    </div>
  );
};

export default Square;
