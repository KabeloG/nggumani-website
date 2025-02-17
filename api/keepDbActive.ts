import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export default async function handler(
  // call this api route in uptime robot (https://domain.co.za/api/keepDbActive)
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Only GET requests are allowed" });
  }

  try {
    const { data, error } = await supabase
      .from("Appointments")
      .select("*")
      .limit(1);

    if (error) {
      console.error("Database ping error:", error);
      return res.status(500).json({ message: "Database ping failed", error });
    }

    return res.status(200).json({ message: "Database ping successful", data });
  } catch (err) {
    console.error("Unexpected error: ", err);
    return res.status(500).json({ message: "Unexpected error", err });
  }
}
