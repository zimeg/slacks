const { App, LogLevel } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  logLevel: LogLevel.DEBUG,
  attachFunctionToken: true,
});

app.function('cookies', async ({ inputs, logger, next }) => {
  logger.debug('Something is about to bake');
  logger.debug(inputs);
  await next();
}, async ({ client, inputs, fail, logger }) => {
  try {
    const { baker } = inputs;
    const response = await client.chat.postMessage({
      channel: baker,
      text: 'Make some cookies!',
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'Bake cookies for a fast 15 minutes at around 175°C or 350°F',
          },
          accessory: {
            type: 'button',
            text: {
              type: 'plain_text',
              text: ':cookie:',
            },
            action_id: 'cookie_clicker',
          },
        },
      ],
    });
    if (!response.ok) {
      throw new Error(response.error);
    }
  } catch (error) {
    logger.error(error);
    await fail({ error: `Failed to handle a function request: ${error}` });
  }
});

app.action('cookie_clicker', async ({ body, client, inputs, complete, fail, logger }) => {
  const { channel, message, user } = body;
  if (inputs.baker !== user.id) {
    logger.log(`A different baker baked ${inputs.baker} !== ${user.id}`);
  }
  try {
    const response = await complete({ outputs: { baker: user.id } });
    if (!response.ok) {
      throw new Error(response.error);
    }
    await client.chat.update({
      channel: channel.id,
      ts: message.ts,
      text: 'Cookies have finished',
    });
  } catch (error) {
    logger.error(error);
    fail({ error: `Failed to handle a function request: ${error}` });
  }
});

(async () => {
  try {
    await app.start();
    console.log('⚡️ Bolt app is running!');
  } catch (error) {
    console.error('Failed to start App', error);
  }
})();
