import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          ACHIEVE INCREDIBLE RESULTS THAT ARE UNRIVALED IN THE WEB DESIGN
          INDUSTRY. Our mission is to empower fledgling business owners by
          providing them with professional, high-quality websites at an
          affordable cost. We strive to level the playing field and give small
          business owners the tools they need to succeed in today’s digital age
          and unleash their full potential.
        </p>
      </div>
    </div>
  );
};
export default DescriptionBox;
