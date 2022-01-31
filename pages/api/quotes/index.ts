import type { VercelRequest, VercelResponse } from "@vercel/node";
import mongoDB, { MongoClient } from "mongodb";

const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : "";
const client = new MongoClient(url);

const handler = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    try {
      await client.connect();
      const db: mongoDB.Db = client.db();
      const quotesCollection: mongoDB.Collection = db.collection("quotes");

      const result = await quotesCollection.insertOne(data);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    } finally {
      await client.close();
    }
  }
};

export default handler;
