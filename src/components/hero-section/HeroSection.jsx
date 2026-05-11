import React from 'react'
import Header from '../header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter'
import './HeroSection.css'
import { Link } from 'react-scroll';

import { motion } from 'framer-motion'
import plansBackgroundImage from '../../assets/plansbackgroundImage.jpg'

const HeroSection = () => {

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;

    const scrollToContactSection= () => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div className="hero-container" id="home">
            <div className="hero">
                <div className="left-h">
                    <Header />
                    <div className="the-best-ad">
                        <motion.div
                            initial={{ left: mobile ? "165px" : "238px" }}
                            whileInView={{ left: '8px' }}
                            transition={{ ...transition, type: "tween" }}
                        ></motion.div>
                        <span>the best fitness club in the town</span>
                    </div>

                    <div className="hero-text">
                        <div>
                            <span className="stroke-text">Shape </span>
                            <span>Your</span>
                        </div>
                        <div>
                            <span>Ideal body</span>
                        </div>
                        <div>
                            <span>
                                In here we will help you to shape and build your ideal body and live <br /> up your life to fullest
                            </span>
                        </div>
                    </div>
                    <div className="figures">
                        <div>
                            <span>
                                <NumberCounter
                                    end={50}
                                    start={10}
                                    delay="3"
                                    preFix="+"
                                />
                            </span>
                            <span>fitness programs</span>
                        </div>
                    </div>

                </div>

                <div className="right-h">

                    <button className="btn" onClick={scrollToContactSection}>
                        Join Now
                    </button>
                    <motion.div
                        initial={{ right: "-1rem" }}
                        whileInView={{ right: "4rem" }}
                        transition={transition}
                        className="heart-rate"
                    >
                        <img src={Heart} alt="" />
                        <span>Heart Rate</span>
                        <span>116 bpm</span>
                    </motion.div>
                    <img src={hero_image} alt="" className="hero-image" />
                    <motion.img
                        initial={{ right: '11rem' }}
                        whileInView={{ right: "28rem" }}
                        transition={transition}
                        src={hero_image_back}
                        alt=""
                        className="hero-image-back"
                    />
                    <motion.div
                        initial={{ right: "37rem" }}
                        whileInView={{ right: "28rem" }}
                        transition={transition}
                        className="calories"
                    >
                        <img src={Calories} alt="" />
                        <div>
                            <span>Calories Burned</span>
                            <span>220 kcal</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="firstPlan">
                <img src={plansBackgroundImage} alt="" />
                <div className="darkImage"></div>

                <h3>START WITH A STRATEGY</h3>
                <h1>PLAN YOUR PURSUIT</h1>

                <div className="firstPlanSteps">

                    <div className="discover">
                        <h2>discover</h2>
                        <p>Explore goals, desired timeline, diet, habits, injuries, starting
                            measurements and personal fitness history.
                        </p>
                    </div>

                    <div className="benchmark">
                        <h2>benchmark</h2>
                        <p>Assess your current fitness level, muscle balances and limitations
                            by performing 4 to 5 foundational exercises.
                        </p>
                    </div>
                    <div className="fast">
                        <h2>FAST</h2>
                        <p>Develop a personalized training and nutrition plan with a targeted timeline
                            for achieving your results.
                        </p>
                    </div>

                </div>

                <button className="planBtn" onClick={scrollToContactSection}>
                    get started now
                </button>

            </div>


            <Link to='home'><button className='topButton'>Top</button> </Link>
        </div>
    )
}

export default HeroSection