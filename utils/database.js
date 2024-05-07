import mongoose from "mongoose"; // Import mongoose library

let isConnected = false; // Flag to check if the database connection is already established

export const connectToDB = async () => {
  // Asynchronous function to connect to the database
  mongoose.set("strictQuery", true); // Enable strict mode for query filters

  if (isConnected) {
    // Check if the database is already connected
    console.log("MongoDB is already connected"); // Log message if the database is already connected
    return; // Exit the function if the database is already connected
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // Attempt to connect to the MongoDB database
      dbName: "worldofprompt", // Specify the database name
    });
    isConnected = true; // Set the isConnected flag to true upon successful connection
    console.log("MongoDB connected"); // Log message upon successful connection
  } catch (error) {
    // Catch block to handle any errors during connection
    console.log(error); // Log the error if the connection fails
  }
};
