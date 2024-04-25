import "@/styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { RefreshProvider } from "@context/RefreshContext";
import { Suspense } from "react";

export const revalidate = 900;

export const metadata = {
  title: "World Of Prompt",
  description: "Discover all prompts you need & Share AI prompts",
  keywords: ["AI prompts", "prompt sharing", "prompt discovery"],
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <RefreshProvider>
          <div className="main bg-blue-950">
            <div />
          </div>
          <Suspense>
            <main className="app">
              <Nav />
              {children}
            </main>
          </Suspense>
          </RefreshProvider>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
