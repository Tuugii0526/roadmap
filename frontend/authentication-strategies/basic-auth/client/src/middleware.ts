import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/", "/index"],
};

export function middleware(req: NextRequest) {
  // Getting the Pup IP from the request
  const { ip }: any = req;
  // console.log("Middleware IP:", ip);
  const basicAuth = req.headers.get("authorization");
  console.log("PIP", ip);
  const url = req.nextUrl;
  console.log(process.env.LOCAL_URL);
  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    const validUser = process.env.BASIC_AUTH_USER;
    const validPassWord = process.env.BASIC_AUTH_PASSWORD;
    console.log("user:", user);
    console.log("pwd:", pwd);

    if (user === validUser && pwd === validPassWord) {
      return NextResponse.next();
    } else {
      url.pathname = "/api/basicauth";

      return NextResponse.rewrite(url);
    }
  }
}
