import React from "react";
import Buttons from "./Buttons";
import "./Section.css";
function Section({ image, title, desc, btn1, btn2, totalbtn }) {
  return (
    <div
      className="section"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="title">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="buttons">
        {totalbtn === "2" ? (
          <>
            <Buttons title={btn1} btn="primary" />
            <Buttons title={btn2} btn="secandory" />
          </>
        ) : null}
        {totalbtn === "1" ? (
            <Buttons title={btn1} btn="primary" />    
        ) : null}
      </div>
    </div>
  );
}

export default Section;
