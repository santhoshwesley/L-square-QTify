import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";

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
  const [searchData, setSearchData] = useState();
  const [data, setData] = useState();

  const generateData = async (key, source) => {
    const newData = await source();
    setData((prevData) => ({ ...prevData, [key]: newData }));
  };

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      await generateData("topAlbums", fetchTopAlbums);
      await generateData("newAlbums", fetchNewAlbums);
      await generateData("songs", fetchSongs);
    };

    fetchDataAndSetState();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <>
      <div>
        <Navbar />
        <Outlet context={{ data }} />
      </div>
    </>
  );
}

export default App;
