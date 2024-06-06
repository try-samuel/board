import { clerkMiddleware } from "@clerk/nextjs/server";

// Clerk middleware
export default clerkMiddleware();

// Configuration for the middleware
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"], // Specify the routes to match
};
