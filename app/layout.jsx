import "@/styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

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
          <div className="main bg-[url('/assets/images/bg-wop.png')] bg-cover bg-fixed bg-center bg-no-repeat saturate-150 brightness-[40%] ">
            <div className=" " />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
