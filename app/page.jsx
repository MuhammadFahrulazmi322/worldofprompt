"use client";

import React, { useState } from "react";
import Feed from "@components/Feed";
import CreatePrompt from "./create-prompt/page"; // Ensure this path is correct
import EditPrompt from "./update-prompt/page"; // Ensure this path is correct


const Home = () => {

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Welcome to the world of prompt, is an open source AI prompting tool for
        modern world to discover, create and share creative prompts
      </p>

      {/* Feed dengan prop refresh */}

      <Feed />
    </section>
  );
};

export default Home;
