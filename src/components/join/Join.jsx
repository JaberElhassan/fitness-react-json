import React from 'react';
import { useEffect, useRef } from 'react';
// import JoinVideo1 from '../../assets/joinVideo1.mp4'
import JoinVideo2 from '../../assets/joinVideo2.mp4'
import JoinVideo3 from '../../assets/joinVideo3.mp4'



import './Join.css'

const Join = ({ src }) => {
    const videoRef = useRef(null);
    useEffect(() => {

        // Explicitly set muted and call play() to bypass browser restrictions
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.3;
            videoRef.current.muted = true;
            videoRef.current.play().catch(error => {
                console.error("Autoplay was prevented:", error);
            });

        }
    }, []);


    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <div className="darkOpacity1"></div>
                <video autoPlay
                ref={videoRef}
                    muted
                    playsInline
                    loop 
                    className='video3' src={JoinVideo3} />
                <hr />
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <div className="darkOpacity2"></div>
                <video autoPlay
                    ref={videoRef}
                    muted
                    playsInline
                    loop
                    className='video2' src={JoinVideo2} />
            </div>
        </div>
    )
}

export default Join;