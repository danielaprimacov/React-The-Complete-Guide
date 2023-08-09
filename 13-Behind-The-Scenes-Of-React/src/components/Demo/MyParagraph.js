import React from "react";

const MyParagraph = (props) => {
  console.log("MyParagraph RUNNING");
  return <p>{props.show ? "This is new!" : ""}</p>;
};

export default MyParagraph;
