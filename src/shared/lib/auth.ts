import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import db from "@/shared/lib/db";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: prismaAdapter(db, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
});
