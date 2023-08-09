import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  return (
    <p>
      <MyParagraph />
    </p>
  );
};

export default DemoOutput;
