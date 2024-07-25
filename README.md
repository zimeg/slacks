# js.bolt.http

Herewithin is an app that connects via HTTP Request and responds to greetings.

> The **Request URL** in the `manifest.json` must be updated!

> The `SLACK_SIGNING_SECRET` in the `.env` must be included!

```sh
$ slack create http -t zimeg/slacks -b js.bolt.http
$ cd http
$ slack run      # Development
$ slack install  # Production
```

Visit App Config to inspect installation values: https://api.slack.com/apps
