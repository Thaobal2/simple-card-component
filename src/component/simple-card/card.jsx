import React, { useState } from "react";
import moment from "moment";
import "./card.css";
import { MdCancel } from "react-icons/md";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
// import img from "../assets/paris.jfif";
import img1 from "../assets/dotman.PNG";
import img2 from "../assets/dumebi.JPG";
import img3 from "../assets/taoheed.JPG";
import img4 from "../assets/wiskid.JPG";

const Card = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "dotman",
      quote:
        "Always be yourself. At the end of the day, that's all you've really got when you strip everything down, that's all you've got,so always be yourself.",
      image: img1,
      time: Date.now(),
    },
    {
      id: 2,
      name: "dumebi",
      quote:
        "When you are doing something that is right, you just do it and take care … Someone has to do this.",
      image: img2,
      time: Date.now(),
    },
    {
      id: 3,
      name: "taoheed",
      quote:
        "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed.",
      image: img3,
      time: Date.now(),
    },
    {
      id: 4,
      name: "wiskid",
      quote:
        "I have discovered in life that there are ways of getting almost anywhere you want to go, if you really want to go.",
      image: img4,
      time: Date.now(),
    },
    {
      id: 5,
      name: "gfe",
      quote:
        "I have discovered in life that there are ways of getting almost anywhere you want to go, if you really want to go.",
      image: img4,
      time: Date.now(),
    },
  ]);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="container__top">
          <div className="containerTop__image">
            <img alt="" className="image__top" />
          </div>

          <div className="containerTop__inputs">
            <label className="label__image" htmlFor="pix">
              Upload your image
            </label>
            <input type="file" id="pix" className="input__image" />
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
            />
            <input
              type="text"
              className="input"
              placeholder="Enter your quote"
            />
            <button className="btn">Submit</button>
          </div>
        </div>
        <div className="card__container">
          {data.map(({ name, quote, image, time, id }, i) => (
            <div className="card" key={i}>
              <div className="card__top">
                <div className="btn--cancel">
                  <MdCancel />
                </div>
                <div className="card__image">
                  <img alt="" src={image} className="card__image" />
                </div>
              </div>
              <div className="card__quote">
                {" "}
                <ImQuotesLeft /> {quote}
                <ImQuotesRight />{" "}
              </div>
              <div className="card__name">{name}</div>
              <div className="card__time">{moment(time).fromNow()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
