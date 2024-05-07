"use client"

import Feed from "@components/Feed";
import {useRouter} from 'next/navigation';

const Home = () => {
    const router = useRouter();

  return (
    <>     
        
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
          Welcome to the world of prompt, is an open source AI prompting
          tool for modern world to discover, create and share creative
          prompts
        </p>
        <button className="mt-10 rounded-full bg-orange-500 px-4 py-2 text-white text-sm"
        onClick={() => router.push('/data')}
        >Open Prompt</button>
        </section>

    </>
  );
};

export default Home;
