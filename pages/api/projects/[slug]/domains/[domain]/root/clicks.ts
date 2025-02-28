import { NextApiRequest, NextApiResponse } from "next";
import { withProjectAuth } from "@/lib/auth";
import { getStats } from "@/lib/stats";

export default withProjectAuth(
  async (req: NextApiRequest, res: NextApiResponse) => {
    // GET /api/projects/[slug]/domains/[domain]/root/clicks - get # of clicks on root of domain (e.g. corewave.xyz, vercel.fyi)
    if (req.method === "GET") {
      const { domain } = req.query as {
        domain: string;
      };
      const response = await getStats({
        domain,
        key: "_root",
        endpoint: "clicks",
      });

      let clicks = 0;
      try {
        clicks = response[0]["count()"];
      } catch (e) {
        console.log(e);
      }
      return res.status(200).json(clicks);
    } else {
      res.setHeader("Allow", ["GET"]);
      return res
        .status(405)
        .json({ error: `Method ${req.method} Not Allowed` });
    }
  },
);
