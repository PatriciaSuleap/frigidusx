import React from "react";
import foodwaste from "../images/foodwaste.jpeg";
import foodwaste2 from "../images/foodwaste2.jpeg";
import contactus from "../images/contactus.jpeg";
function OurMission(props) {
  return (
    <>
      <div className="mission">
        <h1 id="mission1">The food waste movement</h1>
        <h2 id="mission2"> MORE THAN 1/3 OF FOOD IS WASTED</h2>
        &nbsp;&nbsp;&nbsp;
        <img id="mission-img1" src={foodwaste} />
        &nbsp;&nbsp;&nbsp;
        <h3 id="mission3">
          “Together, we can reverse this unacceptable trend and improve lives.
          In industrialised regions, almost half of the total food squandered,
          around 300 million tonnes annually, occurs because producers,
          retailers and consumers discard food that is still fit for
          consumption.” &nbsp;&nbsp;&nbsp;
          <h4 id="mission4">
            – José Graziano da Silva, Director-General of ​​Food and Agriculture
            Organization of the United Nations.
          </h4>
          &nbsp;&nbsp;&nbsp;
        </h3>
        <h1 id="mission5">
          Our pledge: help reduce waste!
          <button id="mission-btn">Find out more</button>
        </h1>
        &nbsp;&nbsp;&nbsp;
        <img id="mission-img2" src={foodwaste2} />
        <span>
          <h3 id="mission6">
            Our mission is to inspire and empower everyone to take action
            against food waste. We know that to live and breathe this every day,
            we need to turn our words into actions. With this in mind we have
            set out a new ambition - to contribute in every way we can to
            building the global food waste movement. It's only when we all come
            together to fight food waste, that we'll be able to generate a
            positive change in society.
          </h3>
        </span>
        <img id="mission-img3" src={contactus} />
        &nbsp;&nbsp;&nbsp;
        <h2 id="mission7">
          If you have any questions about our work, we’d love to hear from you.
        </h2>
        &nbsp;&nbsp;&nbsp;
        <span>
          <button id="mission-btn1">Get in touch!</button>
        </span>
        &nbsp;&nbsp;&nbsp;
      </div>
    </>
  );
}

export default OurMission;
