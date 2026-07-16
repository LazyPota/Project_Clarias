import { auth } from "@project-clarias/auth/server";
import { HonoApp } from "../app";

export const authRouter = HonoApp().on(["GET", "POST"], "/*", (c) => {
  return auth.handler(c.req.raw);
});
