import React from "react";

function Navbar() {
  return (
    <div className="bg-[#083F5E] flex rounded-xl items-center w-full">
      <div className="w-full ml-20 my-2">
        <h1 className="sm:text-4xl text-2xl text-[#f0fffd] text-center font-bold">
          TODOZ
        </h1>
      </div>

      <div className="my-2 mx-3">
        <span className="text-xs text-[#f0fffdba] font-semibold">@mkaif56</span>
      </div>
    </div>
  );
}

export default Navbar;
