# slacks

> somewhat simple slack apps

This repository has branches of sample apps for quick download and fast
installation. Some apps mirror changes to this [sandbox][sandbox]. Others serve
as starters and some test things.

These apps might not be too interesting, but the one you make will be! Check out
[api.slack.com][docs] if you're curious!

## Branching a new app

To create an app from branch, install the [CLI][cli] then run the following
commands with a branch of choice:

```sh
$ slack create demo -t zimeg/slacks -b <branch>
$ cd demo
$ slack run  # Start a development server
```

### Notable branches

Certain branches have special apps with specific features for opportune cases.

> :warning: No attempt of `git` ettiquette is made. Force pushes happen often!

#### Sandboxed apps

Apps found in the upstream [sandbox][sandbox] should appear as options. Inspect
elsewhere for this truth.

#### Starter apps

Setting up a minimal app with almost no additional detail is sometimes useful:

- `js.bolt.socket`: Bolt JS with Socket Mode
- `js.bolt.http`: Bolt JS with HTTP connections

#### Experimented features

> :warning: Unexpected updates or removal to these branches is not impossible!

Occasional trials are made in testing specific features in certain circumstance:

- `HERMES-1158`: Workflow with the Giphy connector.
- `HERMES-3948`: Trigger definitions of all types.
- `HERMES-4685`: Two datastores only. No workflows.
- `HERMES-5547`: Functions made for distribution.

And some branches used in testing:

- `HERMES-5043`: Testing uninstall/delete behaviors.
- `HERMES-5122`: Error when greeting @slackbot.

[cli]: https://api.slack.com/automation/cli/install
[docs]: https://api.slack.com/docs/apps
[sandbox]: https://github.com/zimeg/slack-sandbox
