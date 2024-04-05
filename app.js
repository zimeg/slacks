const { App } = require('@slack/bolt');

const app = new App({
    appToken: process.env.SLACK_APP_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    token: process.env.SLACK_BOT_TOKEN,
});

app.message('hello', async ({ message, say }) => {
    await say(`howdy <@${message.user}>!`);
});

(async () => {
    await app.start();
    console.log('⚡️ Bolt app is running!');
})();
