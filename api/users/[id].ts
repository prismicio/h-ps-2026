export default function handler(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  return new Response(`Hello User ${id}!`);
}
