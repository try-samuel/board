import { authMiddleware } from "@clerk/nextjs/server";
// Clerk middleware
export default authMiddleware({});

// Configuration for the middleware
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"], // Specify the routes to match
};
