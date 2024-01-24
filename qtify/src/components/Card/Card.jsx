// Cards.jsx
import React from "react";
import styles from "../Card/Card.module.css";
import Chip from "@mui/material/Chip";
import { Tooltip } from "@mui/material";

function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, songs, slug, follows, title } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <a className={styles.cardLink} href={`/albums/${slug}`}>
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <img src={image} alt="album" loading="lazy" />
                  <div className={styles.banner}>
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className={styles.chip}
                      style={{
                        backgroundColor: "var(--color-black)",
                        color: "var(--color-white)",
                      }}
                    />
                  </div>
                </div>
                <div className={styles.titleWrapper}>
                  <p>{title}</p>
                </div>
              </div>
            </a>
          </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy" />
              <div className={styles.banner}>
                <Chip />
                <p>{likes} Likes</p>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
}

export default Card;
