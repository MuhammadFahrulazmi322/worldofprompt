import { useEffect, useState } from "react";

const useResources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/prompt`, {
          method: "GET",
          next: {
            revalidate: 0,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setResources(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, []);

  return resources;
};

export default useResources;
