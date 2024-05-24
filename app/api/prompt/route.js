import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate('creator');

    console.log("Fetched prompts: ", prompts); // Tambahkan log ini

    const headers = {
      "Cache-Control": "no-cache, no-store, must-revalidate"
    };

    return new Response(JSON.stringify(prompts), { status: 200, headers });
  } catch (error) {
    console.log("Error fetching prompts: ", error); // Tambahkan log ini
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
