
import Feed from "@components/Feed";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { RefreshProvider } from "@context/RefreshContext";
import { Suspense } from "react";

const Home = () => {
  return (
    <Provider>
      <RefreshProvider>
        <div className="main bg-[url('/assets/images/bg-wop.jpg')] bg-cover bg-fixed bg-center bg-no-repeat saturate-150 brightness-[60%]">
          <div />
        </div>
        <Suspense>
          <main className="app">
            <Nav />
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
              <Feed />
            </section>
          </main>
        </Suspense>
      </RefreshProvider>
    </Provider>
  );
};

export default Home;
