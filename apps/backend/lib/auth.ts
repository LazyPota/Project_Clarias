import { betterFetch } from "@better-fetch/fetch";
import { auth } from "@project-clarias/auth/server";
import { db, eq } from "@project-clarias/database";
import type { UserPermission } from "@project-clarias/database/schema/user";
import { account as accountTable } from "@project-clarias/database/schema/user";
import type { Context, Next } from "hono";
import type { BackendEnv } from "../src/app";

export const authMiddleware =
  (role?: UserPermission | UserPermission[]) =>
  async (c: Context<BackendEnv>, next: Next) => {
    const session = await auth.api.getSession({
      headers: c.req.raw.headers,
    });

    if (!session) {
      return c.json({ success: false, message: "not-logged-in" });
    }

    let account = await db
      .select()
      .from(accountTable)
      .where(eq(accountTable.userId, session.user.id))
      .then((res) => res[0]);

    if (!account) {
      return c.json({ success: false, message: "account-not-found" });
    }

    c.set("user", session.user);
    c.set("session", session.session);
    c.set("account", { ...account, session: session.session });

    return next();
  };
