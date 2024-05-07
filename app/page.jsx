"use client";

import Feed from "@components/Feed";
import Loading from "./loading";
import { useEffect, useState } from "react";
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="w-full flex-center flex-col">
          <h1 className="head_text text-center">
            Discover & Share
            <br />
            <span className="orange_gradient text-center">
              {" "}
              AI-Powered Prompts
            </span>
          </h1>
          <p className="desc text-center">
            Welcome to the world of prompt, is an open source AI prompting tool
            for modern world to discover, create and share creative prompts
          </p>
          <Feed />
        </section>
      )}
    </>
  );
};

export default Home;
