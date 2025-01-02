import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-dark text-light select-none cursor-wait">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
      <h1 className="font-semibold text-lg mt-4">Fetching Data</h1>
      <span className="text-sm mt-1 opacity-80">
        Hang tight, We're almost there!
      </span>
    </div>
  );
};

export default Loading;
