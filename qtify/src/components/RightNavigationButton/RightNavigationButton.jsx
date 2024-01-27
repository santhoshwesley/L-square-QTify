import React, { useEffect, useState } from "react";
import { ReactComponent as RightArrow } from "../../assets/rightArrow.svg";
import styles from "../RightNavigationButton/RightNavigationButton.module.css";
import { useSwiper } from "swiper/react";
function RightNavigationButton() {
  const swiper = useSwiper();
  const [isEnd, setisEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setisEnd(swiper.isEnd);
    });
  }, []);
  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}

export default RightNavigationButton;
