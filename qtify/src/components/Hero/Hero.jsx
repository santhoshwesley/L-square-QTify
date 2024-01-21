import React from "react";
import styles from "../Hero/Hero.module.css";
import { ReactComponent as HeadphoneImage } from "../../assets/vibrating-headphone1.svg";

function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroText}>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>

      <HeadphoneImage />
    </div>
  );
}
export default Hero;
