import React, { useState, useEffect } from "react";
import styles from "../Section/Section.module.css";
import Card from "../Card/Card";
import axios from "axios";

async function fetchData() {
  try {
    const response = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/top"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

function Section({ title }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const data = await fetchData();
      setAlbums(data);
    };

    fetchAlbums();
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <button className={styles.sectionCollapseButtton}> Collpase</button>
      </div>
      <div className={styles.albumContainer}>
        {albums.map((album) => (
          <Card key={album.id} data={album} type="album" />
        ))}
      </div>
    </div>
  );
}

export default Section;
