import React from 'react';
import icon from "../assets/icon.png";
import suber1 from "../assets/super1.png";
import release2 from "../assets/release2.png";

const Free = () => {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Free NFT for early birds</h2>
          <p className="desc">
            Sign up today and you'll get a free NFT when we launch
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1"></div>
        <div className="card2"></div>
      </div>
    </div>
  );
}

export default Free
