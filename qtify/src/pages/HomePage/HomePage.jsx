import React from "react";
import Hero from "../../components/Hero/Hero";
import { useOutletContext } from "react-router-dom";
import Section from "../../components/Section/Section";
import styles from "../HomePage/HomePage.module.css";
import Carousel from "../../components/Carousel/Carousel";
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
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
      </div>
    </>
  );
}
export default HomePage;
