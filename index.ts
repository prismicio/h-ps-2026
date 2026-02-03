Bun.serve({
  port: 3000,
  routes: {
    // Static route
    "/api/status": new Response("OK"),

    // Dynamic route with URL params
    "/users/:id": (req) => {
      return new Response(`Hello User ${req.params.id}!`);
    },

    // Per-method routes
    "/api/posts": {
      GET: () => new Response("List posts"),
      POST: async (req) => {
        const body = await req.json();
        return Response.json({ created: true, data: body });
      },
    },

    // Redirect example
    "/blog/hello": Response.redirect("/blog/hello/world", 302),

    // Wildcard route for 404s on /api/*
    "/api/*": new Response("API endpoint not found", { status: 404 }),
  },

  // Fallback handler for unmatched routes
  fetch(req) {
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at http://localhost:3000`);
