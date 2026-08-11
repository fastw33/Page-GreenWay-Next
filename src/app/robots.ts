import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        allow: "/",
        userAgent: "*",
      },
      {
        allow: "/",
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "anthropic-ai",
          "Googlebot",
          "Google-Extended",
          "PerplexityBot",
          "Perplexity-User",
          "Applebot",
          "Applebot-Extended",
          "CCBot",
        ],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
