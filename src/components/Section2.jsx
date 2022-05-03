import React from "react";
import "../styles.css";

function Section2() {
  return (
    <div className="container">
      <div className="container1 contain">
        <h3 className="title1">COURSE</h3>
        <div className="title2">
          <h1 className="title js">JavaScript</h1>
          <h1 className="title fund"> Fundamentals</h1>
        </div>

        <p className="view">
          View all chapters <span>></span>
        </p>
      </div>
      <div className="container2 contain">
        <div className="sec1">
          <h3 className="title3">Chapter 4</h3>
          <div className="progress">
            <hr className="hr" />
            <p className="done">6/9 Challenges</p>
          </div>
        </div>
        <div className="sec2">
          <h1 className="title4">Callbacks & Closures</h1>
          <button className="btn">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
