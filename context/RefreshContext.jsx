"use client"

import React, { createContext, useContext, useState } from 'react';

const RefreshContext = createContext();

export const useRefresh = () => useContext(RefreshContext);

export const RefreshProvider = ({ children }) => {
  const [refreshFeed, setRefreshFeed] = useState(0);

  const triggerRefresh = () => {
    setRefreshFeed(prev => prev + 1);
  };

  return (
    <RefreshContext.Provider value={{ triggerRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
};