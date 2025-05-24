import { createClient } from "microcms-js-sdk";
import { env } from "@/env";

export const client = createClient({
  serviceDomain: env.MICROCMS_SERVICE_DOMAIN,
  apiKey: env.MICROCMS_API_KEY,
});
