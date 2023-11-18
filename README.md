# JIRA for Bolt for JavaScript

This is a custom Bolt for JavaScript app that creates issues.

Before getting started, make sure you have a development workspace where you have permissions to install apps. If you don’t have one setup, go ahead and [create one](https://slack.com/create).

## Installation

#### Create a Slack App

1. Open [https://api.slack.com/apps/new](https://api.slack.com/apps/new) and choose "From an app manifest"
2. Choose the workspace you want to install the application to
3. Copy the contents of [manifest.json](./manifest.json) into the text box that says `*Paste your manifest code here*` (within the JSON tab) and click *Next*
4. Review the configuration and click *Create*
5. Click *Install to Workspace* and *Allow* on the screen that follows. You'll then be redirected to the App Configuration dashboard.

#### Environment Variables

Before you can run the app, you'll need to store some environment variables.

1. Rename `.env.sample` to `.env`
2. Open your apps configuration page from [this list](https://api.slack.com/apps), click *OAuth & Permissions* in the left hand menu, then copy the *Bot User OAuth Token* into your `.env` file under `SLACK_BOT_TOKEN`
3. Click *Basic Information* from the left hand menu and follow the steps in the *App-Level Tokens* section to create an app-level token with the `connections:write` scope. Copy that token into your `.env` as `SLACK_APP_TOKEN`.

#### Configure the GitHub app

For now issues are created with GitHub. False advertising, I know... Follow
[these steps](https://github.com/slack-samples/deno-github-functions#create-an-oauth-app-on-github)
to create an app and update the `manifest.json` with your own `client_id`.

### Setup Your Local Project

```zsh
# Clone this project onto your machine
slack create jiras --template zimeg/slack-sample-example --branch JIRA-JS

# Change into this project directory
$ cd jiras

# Install dependencies
$ npm install

# Link a feature branch of Bolt
$ npm link @slack/bolt

# Update your app settings
$ vim .slack/apps.dev.json
$ vim manifest.json

# Configure a GitHub app
$ slack external-auth add-secret

# Run Bolt server
$ slack run
```

#### Linting

Run eslint for code formatting and linting

```zsh
npm run lint:fix
```

## Project Structure

### `manifest.json`

`manifest.json` is a configuration for Slack apps. With a manifest, you can create an app with a pre-defined configuration, or adjust the configuration of an existing app.

### `app.js`

`app.js` is the entry point for the application and is the file you'll run to start the server. This project aims to keep this file as thin as possible, primarily using it as a way to route inbound requests.
