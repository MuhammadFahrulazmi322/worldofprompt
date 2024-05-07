import PromptCard from "./PromptCard";

async function getData() {
  const res = await fetch(`https://worldofprompt.vercel.app/api/prompt`, {
    next: {
      revalidate: 5,
    },
  });

  return res.json();
}
const PromptCardList = async ({ handleTagClick }) => {
  const data = await getData();
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

export default PromptCardList;
