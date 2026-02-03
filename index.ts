// Local development server (run with: bun index.ts)
// For Vercel deployment, the api/ folder is used automatically

import status from "./api/status";
import posts from "./api/posts";
import userById from "./api/users/[id]";
import blogHello from "./api/blog/hello";

Bun.serve({
  port: 3000,
  routes: {
    "/api/status": status,
    "/api/posts": posts,
    "/api/users/:id": (req) => userById(req),
    "/api/blog/hello": blogHello,
  },
  fetch() {
    return new Response("Not Found", { status: 404 });
  },
});

console.log("Server running at http://localhost:3000");
