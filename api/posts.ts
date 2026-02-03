export async function GET() {
  return new Response("List posts");
}

export async function POST(req: Request) {
  const body = await req.json();
  return Response.json({ created: true, data: body });
}

// Default handler for local dev
export default async function handler(req: Request) {
  if (req.method === "POST") {
    return POST(req);
  }
  return GET();
}
