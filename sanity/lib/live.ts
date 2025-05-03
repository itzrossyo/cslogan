import "server-only";

import { defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client";


//set your view token

const token = process.env.SANITY_API_TOKEN;
if (!token) {
  throw new Error("Missing Sanity API token");
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
  fetchOptions: {
    revalidate: 0,
  },
})