// Landing.jsx
import React, { useRef , useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";
import videoBackground from "../assets/start.mp4";

const Landing = () => {
  const navegacion = useNavigate();
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  const playVideo = () => {
    setVideoReady(true);
    if (videoRef.current) {
    
      videoRef.current.playbackRate = 0.5;
    
      videoRef.current.play();
    }
  };
  return (
    <div className={styles.videoContainer}>
      <video ref={videoRef} autoPlay loop muted className={styles.video} onCanPlay={playVideo}>
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.center}>
        <button
          onClick={() => {
            navegacion("/home");
          }}
        >
          Enter
        </button>
       
      </div>
      
    </div>
  );
};

export default Landing;
