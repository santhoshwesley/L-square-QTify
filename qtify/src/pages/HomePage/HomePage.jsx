import React from "react";
import Hero from "../../components/Hero/Hero";
import { useOutletContext } from "react-router-dom";
import Section from "../../components/Section/Section";
import styles from "../HomePage/HomePage.module.css";
import { fetchFilters } from "../../api/api";
function HomePage() {
  const { data } = useOutletContext();

  if (!data) {
    return <div>Loading...</div>;
  }

  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section
          title="Top Albums"
          data={topAlbums}
          type="album"
          toggleButton={true}
        />
        <Section
          title="New Albums"
          data={newAlbums}
          type="album"
          toggleButton={true}
        />
        <Section
          title="Songs"
          data={songs}
          filterSource={fetchFilters}
          type="song"
          toggleButton={false}
        />
      </div>
    </>
  );
}

export default HomePage;
