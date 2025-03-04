import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export async function GET(request: Request): Promise<Response> {
  // Check if the request method is GET
  if (request.method !== "GET") {
    return new Response(
      JSON.stringify({ message: "Only GET requests are allowed" }),
      { status: 405 }
    );
  }

  try {
    const { data, error } = await supabase
      .from("Appointments")
      .select("*")
      .limit(1);

    if (error) {
      console.error("Database ping error:", error);
      return new Response(
        JSON.stringify({ message: "Database ping failed", error }),
        { status: 500 }
      );
    }

    // Return the fetched data as JSON
    return new Response(
      JSON.stringify({ message: "Database ping successful", data }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Unexpected error: ", err);
    return new Response(JSON.stringify({ message: "Unexpected error", err }), {
      status: 500,
    });
  }
}
