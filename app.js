import bolt from "@slack/bolt";

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  logLevel: bolt.LogLevel.DEBUG,
});

app.message("hello", async ({ say }) => {
  say("howdy");
});

(async () => {
  try {
    await app.start(process.env.PORT || 3000);
    console.log("⚡️ Bolt app is running!");
  } catch (error) {
    console.error("Failed to start the app", error);
  }
})();
