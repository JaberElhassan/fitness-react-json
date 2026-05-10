import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>

        <div className="right-r">
            <span>some reasons</span>
            <div>
                <span className="stroke-text">why</span>
                <span> choose us?</span>
            </div>
            <div>
                <div className="details-r">
                    <div>
                        <img src={tick} alt=""></img>
                        <span> Vast selection of cardio machines, strength training equipment, and functional training tools</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span> Trainers help you use equipment correctly, reducing the risk of injuries.</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>Support every fitness goal, from weight loss to muscle gain.</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>Reliable members increase accountability, safety, and enjoyment in training</span>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Reasons