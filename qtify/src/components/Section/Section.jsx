import React, { useEffect, useState } from "react";
import styles from "../Section/Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import TabComponent from "../Tab/Tab";

function Section({ title, data, type, toggleButton, filterSource }) {
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [carouselToggle, setCarouselToggle] = useState(true);
  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );

  return (
    <div>
      <div className={styles.section}>
        <div className={styles.header}>
          <h3>{title}</h3>
          {toggleButton && (
            <h4 className={styles.toggleText} onClick={handleToggle}>
              {!carouselToggle ? "Collapse All" : "Show All"}
            </h4>
          )}
        </div>
        {showFilters && (
          <div className={styles.filterWrapper}>
            <TabComponent
              filters={filters}
              selectedFilterIndex={selectedFilterIndex}
              setSelectedFilterIndex={setSelectedFilterIndex}
            />
          </div>
        )}
        {cardsToRender.length === 0 ? (
          <CircularProgress />
        ) : (
          <div className={styles.cardWrapper}>
            {!carouselToggle ? (
              <div className={styles.wrapper}>
                {cardsToRender.map((ele) => (
                  <Card data={ele} type={type} />
                ))}
              </div>
            ) : (
              <Carousel
                data={cardsToRender}
                renderComponent={(data) => <Card data={data} type={type} />}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Section;
