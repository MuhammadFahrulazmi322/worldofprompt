import "@/styles/globals.css";

export const metadata = {
  title: "World Of Prompt",
  description: "Discover all prompts you need & Share AI prompts",
  keywords: ["AI prompts", "prompt sharing", "prompt discovery"],
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  );
};

export default RootLayout;
