import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { getDatabase } from "./database/connection";
import * as schema from "./database/schema";
import { env } from "$env/dynamic/private";

export const auth = () =>
    betterAuth({
        database: drizzleAdapter(getDatabase(), {
            provider: 'pg',
            schema: { ...schema }
        }),
        socialProviders: {
            github: {
                clientId: env.GITHUB_CLIENT_ID,
                clientSecret: env.GITHUB_CLIENT_SECRET,
            },
            google: {
                clientId: env.GOOGLE_CLIENT_ID,
                clientSecret: env.GOOGLE_CLIENT_SECRET,
            }
        }
    });