# cli.boltjs.new

This is a very simple Slack application built with Bolt for JavaScript. Mostly
the "hello world" of chatbots.

But with a goal of being used with the CLI after creation.

## Setup

Prepare a new app with certain scopes:

1. Create a new application from App Config: https://api.slack.com/apps
2. Gather an app token with the `connections:write` scope and signing secret
3. Recieve events via Socket Mode
4. Subscribe to the `message.channels` event
5. Add the `chat:write` scope to a bot token
6. Install the application to a workspace and save the bot token

And run the app:

1. Export environment variables into your current shell
2. Run `node app.js`
