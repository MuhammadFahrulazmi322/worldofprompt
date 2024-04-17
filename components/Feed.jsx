"use client"

import React, { useState } from 'react'

const Feed = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="mt-16 w-full lg:w-1/2">
      <input 
        type="text" 
        placeholder="Search for tag or a username" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="w-full text-left p-3 border-1 border-gray-300 rounded-lg shadow-lg shadow-primary-color/20"
      />
    </div>
  )
}

export default Feed