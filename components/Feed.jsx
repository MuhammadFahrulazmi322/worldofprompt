"use client"

import React, { useState, useEffect } from 'react'
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
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const handleSearchText = (e) => {

    setSearchText(e.target.value)
  }
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')

      const data = await response.json();

      setPosts(data);
    }

    fetchPosts();
  }, [])
  return (
    <section className="feed">

      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchText}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList 
        data = {posts}
        handleTagClick = {() => {}}
        handleEdit = {() => {}}
        handleDelete = {() => {}}
      />

    </section>
  )
}

export default Feed