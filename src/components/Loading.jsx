import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center vh-80 align-items-center mt-3">
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="80"
        visible={true}
      />
    </div>
  );
};

export default Loading;
