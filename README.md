# Slack sample app testing

This repo contains branches of sample apps and is used for quickly testing and
reviewing changes 🔬

These apps might not be too interesting, but one you make will be! Check out
[api.slack.com/automation][automation] if you're curious!

## Apps on branches

Certain branches have apps that can be useful for testing specific features.

To get started with one, install the [CLI][cli] then run the following command
with the branch you'd want:

```sh
$ slack create my-sandboxed-app -t zimeg/slack-sample-example -b <branch>
```

Here are some notable branches:

- `HERMES-3948`: Trigger definitions of all types.
- `HERMES-4685`: Two datastores only. No workflows.
- `HERMES-5547`: Functions made for distribution.

And some branches used in testing:

- `HERMES-5043`: Testing uninstall/delete behaviors.

<!-- a collection of links -->
[automation]: https://api.slack.com/automation
[cli]: https://api.slack.com/automation/cli/install
