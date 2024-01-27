import React, { useEffect, useState } from "react";
import { ReactComponent as LeftArrow } from "../../assets/leftArrow.svg";
import styles from "../LeftNavigationButton/LeftNavigationButton.module.css";
import { useSwiper } from "swiper/react";
function LeftNavigationButton() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, []);
  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
}

export default LeftNavigationButton;
