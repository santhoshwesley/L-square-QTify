import React, { useState } from "react";
import styles from "../Section/Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

function Section({ title, data, type }) {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>

      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((ele, index) => (
                <Card key={index} data={ele} type={type} />
              ))}
            </div>
          ) : (
            <div>
              <Carousel
                data={data}
                renderComponent={(data) => <Card data={data} type={type} />}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Section;
