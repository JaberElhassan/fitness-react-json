import React, { useState } from "react";
import Card from "../card/Card";
import './Guide.css'
import arnoldImage from '../../assets/arnold.jpg'

export default function GuidePage() {
  const [searchValue, setSearchValue] = useState("");

  function search(event) {
    const value = event.target.value;
    setSearchValue(value);
  }

  return (
    <div className="guide" id="guide">
      <div className="container" >
        <div className="containerSides">
          <div className="leftSide">
            <h2>HANI AFIFI</h2>
            <p>
              <span>HANI AFIFI FITNESS</span> is an enthusiastic community comprised of individuals
              who have a profound love for physical fitness.We are a collective of passionate
              individuals driven by a desire to share our extensive knowledge and
              expertise with others, fostering a community focused on promoting wellness and vitality.
            </p>
          </div>
          <div className="rightSide">
            <img src={arnoldImage} alt="" />
          </div>
        </div>
         <div className="inputDiv">
        <input
          type="text"
          placeholder="Search"
          onChange={search}
          value={searchValue}
          className="searchInput"
          required
        />
      </div>
      </div>
    
      <Card searchQuery={searchValue} />
    </div>
  );
}
