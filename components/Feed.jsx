"use client"

import React, { useState, useEffect, useCallback } from 'react'
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick, handleEdit, handleDelete }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  )
} 

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);
  

  const filterPrompt = (searchText)=>{

    const regex = new RegExp(searchText, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter((item) => regex.test(item.creator.username) || regex.test(item.prompt) || regex.test(item.tag));
  }

  const handleSearchChange = (e) => {

    setSearchText(e.target.value)

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompt(e.target.value);
        setSearchResult(searchResult);
      }, 500)
    )
  }

  const handleTagClick = (tagName) => {

    setSearchText(tagName);

    const searchResult = filterPrompt(tagName);
    setSearchResult(searchResult);
  }
  
  const fetchPosts = useCallback(async () => {
    const response = await fetch('/api/prompt?timestamp=' + new Date().getTime())

    const data = await response.json();

    setAllPosts(data);
  }, []);
  
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts])

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
          data={searchResult}
          handleTagClick={handleTagClick}
        />
      ) :
        (
          <PromptCardList
            data={allPosts}
            handleTagClick={handleTagClick}
          />
        )

      }
    </section>
  )
}

export default Feed