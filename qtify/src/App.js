import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import axios from "axios";

async function fetchData(apiEndpoint) {
  try {
    const response = await axios.get(apiEndpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function App() {
  const topAlbumsEndpoint = "https://qtify-backend-labs.crio.do/albums/top";
  const newAlbumsEndpoint = "https://qtify-backend-labs.crio.do/albums/new";

  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      const data = await fetchData(topAlbumsEndpoint);
      setTopAlbums(data);
    };

    const fetchNewAlbums = async () => {
      const data = await fetchData(newAlbumsEndpoint);
      setNewAlbums(data);
    };

    fetchTopAlbums();
    fetchNewAlbums();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Section
        title={`Top Albums`}
        albums={topAlbums}
        buttonName="Collapse"
        showDivider={true}
      />
      <Section
        title={`New Albums`}
        albums={newAlbums}
        buttonName="Show All"
        showDivider={false}
      />
    </>
  );
}

export default App;
