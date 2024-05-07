"use client";

import { useState } from "react";

import useResources from "@hooks/useResources";
import PromptCardList from "./PromptCardList";
import usePolling from "@hooks/usePolling";

const Feed = () => {
  // const allPosts = useResources();
  // console.log(allPosts);
  // Search states
  const [data, setData] = useState([]);

  // Fungsi untuk mengambil data dari server MongoDB
  const fetchData = async () => {
    try {
      const response = await fetch("/api/prompt");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Menggunakan polling untuk memperbarui data setiap 5 detik
  usePolling(fetchData, 5000);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return data.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={data} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
