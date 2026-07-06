import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "fs4f9eqj",
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: false,
});