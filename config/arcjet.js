import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARCJET_KEY } from "./env.js";



const aj = arcjet({
    key: ARCJET_KEY,
    characteristics: ["ip.src"], // Track requests by IP
    rules: [
      shield({ mode: "LIVE" }),
      detectBot({
        mode: "LIVE", 
        allow: [
          "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
          "CATEGORY:TOOL",
          // Uncomment to allow these other common bot categories
          // See the full list at https://arcjet.com/bot-list
          //"CATEGORY:MONITOR", // Uptime monitoring services
          //"CATEGORY:PREVIEW", // Link previews e.g. Slack, Discord
        ],
      }),
      // Create a token bucket rate limit. Other algorithms are supported.
      tokenBucket({
        mode: "LIVE",
        refillRate: 5, // Refill 5 tokens per interval
        interval: 10, // Refill every 10 seconds
        capacity: 10, // Bucket capacity of 10 tokens
      }),
    ],
  });

export default aj;