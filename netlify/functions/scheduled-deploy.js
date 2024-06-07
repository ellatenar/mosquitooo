import fetch from "node-fetch"
import { schedule } from "@netlify/functions"

const BUILD_HOOK =
  "https://api.netlify.com/build_hooks/66633127d83d964dccbd04fe"

// Schedules the handler function to run at midnight on
// Mondays, Wednesday, and Friday
const handler = schedule("5 0 * * *", async () => {
  await fetch(BUILD_HOOK, {
    method: "POST",
  }).then((response) => {
    console.log("Build hook response:", response)
  })

  return {
    statusCode: 200,
  }
})

export { handler }
