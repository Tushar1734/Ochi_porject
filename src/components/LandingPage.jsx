import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-2">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div key={index} className="masker  ">
              <div className="w-fit flex items-end ">
                {index === 1 && (
                  <div className="mr-[1vw] h-[5.7vw] rounded-md  w-[8vw] top-[1.6vw]  relative  bg-green-500 "></div>
                )}

                <h1 className="flex pt-[2vw] -mb-[1vw]  text-[7vw] h-full uppercase font-bold  leading-[.75] ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
          {[
            "For Public and Private Companies",
            "From the first Pitch to IPO",
          ].map((item, index) => (
            <p key={index} className="text-md font-light leading-none">{item}</p>
          ))}
          <div className="start flex items-center   gap-5">
            <div className="px-5 py-2 border-[1px] font-light text-md border-zinc-400 rounded-full uppercase">
              start the project
            </div>
            <div className="h-9 w-9 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
