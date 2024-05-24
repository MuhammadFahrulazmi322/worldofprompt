import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

console.log("API Route Version: 1.0.0"); // Tambahkan versi untuk memastikan ini adalah versi terbaru

export const GET = async (request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate('creator');
    console.log('Fetched data from database:', prompts); // Tambahkan log ini untuk debugging
    const headers = {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0", // Disable caching
    };

    return new Response(JSON.stringify(prompts), { status: 200, headers });
  } catch (error) {
    console.log('Error fetching data:', error); // Tambahkan log ini untuk debugging
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
