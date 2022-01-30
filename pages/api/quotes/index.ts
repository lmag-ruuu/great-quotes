import type { VercelRequest, VercelResponse } from "@vercel/node";
import { connect } from "../../../utils/connection";
import { ResponseFuncs } from "../../../utils/types";

const handler = async (req: VercelRequest, res: VercelResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  const catcher = (error: Error) => res.status(400).json({ error });

  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async (req: VercelRequest, res: VercelResponse) => {
      const { quotes } = await connect(); // connect to database
      const response = await quotes.find({}).catch(catcher);
      res.status(200).json({ response });
    },
    // RESPONSE POST REQUESTS
    POST: async (req: VercelRequest, res: VercelResponse) => {
      const { quotes } = await connect(); // connect to database
      const response = await quotes.create(req.body).catch(catcher);
      res.status(200).json({ response });
    },
  };

  const response = handleCase[method];

  if (response) {
    response(req, res);
  } else {
    res.status(400).json({ error: "No Response for This Request" });
  }
};

export default handler;
