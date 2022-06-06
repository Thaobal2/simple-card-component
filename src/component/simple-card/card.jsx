import React, { useState, useEffect } from "react";
import "./card.css";
import { MdCancel } from "react-icons/md";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import moment from "moment";
import img from "../assets/paris.jfif";
import img1 from "../assets/dotman.PNG";
import img2 from "../assets/dumebi.JPG";
import img3 from "../assets/taoheed.JPG";
import img4 from "../assets/wiskid.JPG";

const Card = () => {
  const [image, setImage] = useState(img);
  const [quote, setQuote] = useState("");
  const [name, setName] = useState("");
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
  ]);

  const imageUpload = (e) => {
    const file = e.target.files[0];
    const saveFile = URL.createObjectURL(file);
    setImage(saveFile);
  };

  const submitData = () => {
    if (name.length > 0 && quote.length > 0) {
      const file = {
        id: data.id + 1,
        name,
        quote,
        image,
      };
      setData([...data, file]);
      setName("");
      setQuote("");
    }
  };

  const removeData = (id) => {
    const filterId = data.filter((item) => {
      return item.id !== id;
    });

    setData(filterId);
  };
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("storageData"));
    setData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("storageData", JSON.stringify(data));
  }, [data]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="container__top">
          <div className="containerTop__image">
            <img src={image} alt="" className="image__top" />
          </div>

          <div className="containerTop__inputs">
            <label className="label__image" htmlFor="pix">
              Upload your image
            </label>
            <input
              type="file"
              id="pix"
              className="input__image"
              onChange={imageUpload}
            />
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              className="input"
              placeholder="Enter your quote"
              value={quote}
              onChange={(e) => {
                setQuote(e.target.value);
              }}
            />
            <button className="btn" onClick={submitData}>
              Submit
            </button>
          </div>
        </div>
        <div className="card__container">
          {data.map(({ name, quote, image, time, id }, i) => (
            <div className="card" key={i}>
              <div className="card__top">
                <div
                  className="btn--cancel"
                  onClick={() => {
                    removeData(id);
                  }}
                >
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
