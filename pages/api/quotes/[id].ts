import type { VercelRequest, VercelResponse } from "@vercel/node";
import { connect } from "../../../utils/connection";
import { ResponseFuncs } from "../../../utils/types";

const handler = async (req: VercelRequest, res: VercelResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  //function for catch errors
  const catcher = (error: Error) => res.status(400).json({ error });

  // GRAB ID FROM req.query (where next stores params)
  const id: string = req.query.id as string;

  // Potential Responses for /quotes/:id
  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async (req: VercelRequest, res: VercelResponse) => {
      const { quotes } = await connect(); // connect to database
      res.status(200).json(await quotes.findById(id).catch(catcher));
    },
    // RESPONSE PUT REQUESTS
    PUT: async (req: VercelRequest, res: VercelResponse) => {
      const { quotes } = await connect(); // connect to database
      res
        .status(200)
        .json(
          await quotes
            .findByIdAndUpdate(id, req.body, { new: true })
            .catch(catcher)
        );
    },
  };

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
};

export default handler;
