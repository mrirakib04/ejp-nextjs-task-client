import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(request) {
  // get token
  const token = await getToken({ req: request, secret: process.env.SECRET });
  // token exist or not check
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // response signin user
  return NextResponse.next();
}
// private routes
export const config = {
  matcher: ["/add", "/manage", "/profile"],
};
