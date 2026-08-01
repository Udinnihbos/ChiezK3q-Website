import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "secret");

export async function signToken(payload: JWTPayload) {
  return await new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setExpirationTime("7d").sign(secret);
}

export async function verifyToken(token: string) {
  const { payload } = await jwtVerify(token, secret);
  return payload;
}

export async function getAuthCookie() {
  const cookieStore = cookies();
  return cookieStore.get("auth_token")?.value;
}
