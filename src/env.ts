import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    BASE_URL: z.string().url(),
    MICROCMS_API_KEY: z.string(),
    MICROCMS_SERVICE_DOMAIN: z.string(),
    X_PROFILE_URL: z.string().url(),
  },
  client: {},
  runtimeEnv: {
    BASE_URL: process.env.BASE_URL,
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
    MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN,
    X_PROFILE_URL: process.env.X_PROFILE_URL,
  },
});
