import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

export const connect = async () => {
  const conn = await mongoose
    .connect(MONGODB_URI as string)
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");

  const quotesSchema = new mongoose.Schema({
    author: String,
    text: String,
    comments: Array,
  });

  const quotes =
    mongoose.models.quotes || mongoose.model("Quotes", quotesSchema);

  return { conn, quotes };
};
